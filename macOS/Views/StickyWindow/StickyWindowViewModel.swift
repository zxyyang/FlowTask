import SwiftUI
import Combine
import SwiftData

#if os(macOS)
import AppKit

// MARK: - Sticky Window ViewModel
/// 贴图窗口视图模型 - 直接使用 SharedDataManager 的数据
@MainActor
class StickyWindowViewModel: ObservableObject {
    @Published var isWindowVisible = false
    @Published var isAlwaysOnTop = true
    @Published var editingTask: FlowTask?
    
    /// 待完成任务（直接从共享数据获取）
    var pendingTasks: [FlowTask] {
        SharedDataManager.shared.tasks.filter { !$0.isCompleted }
    }
    
    /// 最近笔记（直接从共享数据获取）
    var recentNotes: [Note] {
        SharedDataManager.shared.notes.sorted { $0.updatedAt > $1.updatedAt }
    }
    
    init() {}
    
    func toggleTask(_ task: FlowTask) {
        SharedDataManager.shared.toggleTask(task)
        objectWillChange.send()
    }
    
    func toggleSubtask(_ task: FlowTask, subtask: Subtask) {
        SharedDataManager.shared.toggleSubtask(task, subtask: subtask)
        objectWillChange.send()
    }
    
    func deleteTask(_ task: FlowTask) {
        SharedDataManager.shared.deleteTask(task)
        objectWillChange.send()
    }
    
    func addTask(title: String) {
        SharedDataManager.shared.addTask(title: title)
        objectWillChange.send()
    }
    
    func addNote(title: String, content: String) {
        SharedDataManager.shared.addNote(title: title, content: content)
        objectWillChange.send()
    }
    
    func updateNote(_ note: Note) {
        SharedDataManager.shared.updateNote(note)
        objectWillChange.send()
    }
    
    func deleteNote(_ note: Note) {
        SharedDataManager.shared.deleteNote(note)
        objectWillChange.send()
    }
    
    func hideWindow() {
        DesktopStickyWindowManager.shared.hide()
    }
    
    func minimizeWindow() {
        DesktopStickyWindowManager.shared.minimize()
    }
    
    func toggleAlwaysOnTop() {
        isAlwaysOnTop.toggle()
        DesktopStickyWindowManager.shared.setAlwaysOnTop(isAlwaysOnTop)
    }
    
    func openMainWindow() {
        AppGlobal.shared.openMainWindow()
    }
}

// MARK: - Desktop Sticky Window Manager
@MainActor
class DesktopStickyWindowManager: NSObject, ObservableObject {
    static let shared = DesktopStickyWindowManager()
    
    @Published var isVisible = false
    @Published var isFloatingBallVisible = false
    let viewModel = StickyWindowViewModel()
    
    private var stickyWindow: StickyPanel?
    private var floatingBallWindow: NSWindow?
    
    /// 当前窗口引用（供 ResizeHandle 使用）
    var currentWindow: NSWindow? {
        return stickyWindow
    }
    
    private override init() {
        super.init()
        // 确保窗口在应用生命周期内不被释放
    }
    
    func showStickyWindow() {
        print("[StickyWindow] showStickyWindow() 被调用")
        print("[StickyWindow] 当前 stickyWindow 是否为 nil: \(stickyWindow == nil)")
        print("[StickyWindow] 当前 contentView 是否为 nil: \(stickyWindow?.contentView == nil)")
        
        // 获取悬浮球所在的屏幕
        let targetScreen = floatingBallWindow?.screen ?? NSScreen.main
        print("[StickyWindow] 悬浮球所在屏幕: \(String(describing: targetScreen))")
        
        // 如果窗口不存在或已被释放，重新创建
        if stickyWindow == nil || stickyWindow?.contentView == nil {
            print("[StickyWindow] 需要创建新窗口")
            createStickyWindow(on: targetScreen)
            print("[StickyWindow] 窗口创建完成，stickyWindow = \(String(describing: stickyWindow))")
        } else {
            print("[StickyWindow] 使用现有窗口，移动到悬浮球所在屏幕")
            // 窗口已存在，移动到悬浮球所在屏幕
            if let window = stickyWindow, let screen = targetScreen {
                let screenFrame = screen.visibleFrame
                let x = screenFrame.maxX - 320 - 80
                let y = screenFrame.maxY - 420 - 20
                print("[StickyWindow] 移动窗口到: (\(x), \(y))")
                window.setFrameOrigin(NSPoint(x: x, y: y))
            }
        }
        
        guard let window = stickyWindow else {
            print("[StickyWindow] 错误：窗口创建失败！")
            return
        }
        
        // 激活应用
        print("[StickyWindow] 激活应用...")
        NSApp.activate(ignoringOtherApps: true)
        
        // 显示窗口
        print("[StickyWindow] 准备显示窗口...")
        print("[StickyWindow] 窗口 canBecomeKey: \(window.canBecomeKey)")
        
        // 先显示窗口，再尝试成为 key
        window.orderFront(nil)
        window.makeKeyAndOrderFront(nil)
        
        // 如果仍然不可见，尝试强制显示
        if !window.isVisible {
            print("[StickyWindow] 窗口仍不可见，尝试 orderFrontRegardless")
            window.orderFrontRegardless()
        }
        
        print("[StickyWindow] makeKeyAndOrderFront 已调用")
        print("[StickyWindow] 窗口是否可见: \(window.isVisible)")
        print("[StickyWindow] 窗口是否为 key: \(window.isKeyWindow)")
        print("[StickyWindow] 窗口 level: \(window.level.rawValue)")
        print("[StickyWindow] 窗口 frame: \(window.frame)")
        print("[StickyWindow] 窗口 alpha: \(window.alphaValue)")
        
        isVisible = true
        viewModel.isWindowVisible = true
        print("[StickyWindow] 状态已更新 - isVisible: \(isVisible)")
    }
    
    func hide() {
        print("[StickyWindow] hide() 被调用")
        stickyWindow?.orderOut(nil)
        isVisible = false
        viewModel.isWindowVisible = false
        print("[StickyWindow] 窗口已隐藏 - isVisible: \(isVisible)")
    }
    
    func minimize() {
        stickyWindow?.miniaturize(nil)
    }
    
    func toggle() {
        if isVisible {
            hide()
        } else {
            showStickyWindow()
        }
    }
    
    func setAlwaysOnTop(_ alwaysOnTop: Bool) {
        stickyWindow?.level = alwaysOnTop ? .floating : .normal
    }
    
    private func createStickyWindow(on targetScreen: NSScreen? = nil) {
        print("[StickyWindow] createStickyWindow() 开始")
        
        let contentView = DesktopStickyWindowView(viewModel: viewModel)
        let hostingView = NSHostingView(rootView: contentView)
        
        // 创建透明容器视图
        let containerView = NSView()
        containerView.wantsLayer = true
        containerView.layer?.backgroundColor = NSColor.clear.cgColor
        
        // 设置 hostingView
        hostingView.wantsLayer = true
        hostingView.layer?.backgroundColor = NSColor.clear.cgColor
        hostingView.translatesAutoresizingMaskIntoConstraints = false
        
        containerView.addSubview(hostingView)
        NSLayoutConstraint.activate([
            hostingView.topAnchor.constraint(equalTo: containerView.topAnchor),
            hostingView.bottomAnchor.constraint(equalTo: containerView.bottomAnchor),
            hostingView.leadingAnchor.constraint(equalTo: containerView.leadingAnchor),
            hostingView.trailingAnchor.constraint(equalTo: containerView.trailingAnchor)
        ])
        
        print("[StickyWindow] HostingView 已创建")
        
        let panel = StickyPanel(
            contentRect: NSRect(x: 0, y: 0, width: 320, height: 420),
            styleMask: [.borderless, .resizable],
            backing: .buffered,
            defer: false
        )
        print("[StickyWindow] StickyPanel 已创建")
        print("[StickyWindow] Panel canBecomeKey: \(panel.canBecomeKey)")
        
        panel.contentView = containerView
        panel.isOpaque = false
        panel.backgroundColor = .clear
        panel.hasShadow = false
        panel.level = .floating
        panel.collectionBehavior = [.canJoinAllSpaces, .fullScreenAuxiliary]
        panel.isMovableByWindowBackground = true
        panel.titlebarAppearsTransparent = true
        panel.titleVisibility = .hidden
        panel.standardWindowButton(.closeButton)?.isHidden = true
        panel.standardWindowButton(.miniaturizeButton)?.isHidden = true
        panel.standardWindowButton(.zoomButton)?.isHidden = true
        
        // 设置窗口最小尺寸（不限制最大尺寸）
        panel.minSize = NSSize(width: 280, height: 300)
        panel.isFloatingPanel = true
        panel.hidesOnDeactivate = false
        
        // 关键：设置为非激活面板，但允许成为 key window
        panel.becomesKeyOnlyIfNeeded = false
        
        // 关键：防止窗口在关闭时被释放
        panel.isReleasedWhenClosed = false
        
        // 设置窗口委托以处理关闭事件
        panel.delegate = self
        
        // 使用目标屏幕（悬浮球所在屏幕）
        if let screen = targetScreen ?? NSScreen.main {
            let screenFrame = screen.visibleFrame
            print("[StickyWindow] 屏幕可见区域: \(screenFrame)")
            
            // 修正位置计算：macOS 坐标系原点在左下角
            let windowWidth: CGFloat = 320
            let windowHeight: CGFloat = 420
            let padding: CGFloat = 80
            
            // 将窗口放在右上角（往左移动一些）
            let x = screenFrame.maxX - windowWidth - padding
            let y = screenFrame.maxY - windowHeight - 20
            
            print("[StickyWindow] 计算的窗口位置: (\(x), \(y))")
            print("[StickyWindow] 窗口大小: \(windowWidth) x \(windowHeight)")
            
            panel.setFrameOrigin(NSPoint(x: x, y: y))
            
            // 验证窗口是否在屏幕内
            let windowFrame = panel.frame
            let isOnScreen = screenFrame.contains(windowFrame)
            print("[StickyWindow] 窗口是否在屏幕内: \(isOnScreen)")
            print("[StickyWindow] 实际窗口 frame: \(windowFrame)")
        } else {
            print("[StickyWindow] 警告：无法获取目标屏幕")
        }
        
        stickyWindow = panel
        print("[StickyWindow] createStickyWindow() 完成")
        print("[StickyWindow] panel.isVisible: \(panel.isVisible)")
        print("[StickyWindow] panel.isReleasedWhenClosed: \(panel.isReleasedWhenClosed)")
    }
    
    func showFloatingBall() {
        if floatingBallWindow == nil {
            createFloatingBall()
        }
        floatingBallWindow?.orderFront(nil)
        isFloatingBallVisible = true
    }
    
    func hideFloatingBall() {
        floatingBallWindow?.orderOut(nil)
        isFloatingBallVisible = false
    }
    
    func toggleFloatingBall() {
        if floatingBallWindow?.isVisible == true {
            hideFloatingBall()
        } else {
            showFloatingBall()
        }
    }
    
    private func createFloatingBall() {
        let size = UserDefaults.standard.double(forKey: "floatingBallSize")
        let ballSize = size > 0 ? size : 22.0
        
        let ballView = FloatingBallWrapper(
            onTap: { [weak self] in
                self?.toggle()
            }
        )
        
        let hostingView = NSHostingView(rootView: ballView)
        
        let windowSize = ballSize * 1.5
        let window = FloatingBallWindow(
            contentRect: NSRect(x: 0, y: 0, width: windowSize, height: windowSize),
            styleMask: [.borderless],
            backing: .buffered,
            defer: false
        )
        
        window.contentView = hostingView
        window.isOpaque = false
        window.backgroundColor = .clear
        window.level = .floating
        window.collectionBehavior = [.canJoinAllSpaces, .fullScreenAuxiliary]
        window.isMovableByWindowBackground = true
        window.hasShadow = false
        
        if let screen = NSScreen.main {
            let screenFrame = screen.visibleFrame
            let x = screenFrame.maxX - windowSize - 10
            let y = screenFrame.midY - windowSize / 2
            window.setFrameOrigin(NSPoint(x: x, y: y))
        }
        
        floatingBallWindow = window
    }
    
    func updateFloatingBallSize(_ size: Double) {
        guard let window = floatingBallWindow else { return }
        
        let windowSize = size * 1.5
        let currentOrigin = window.frame.origin
        
        // 重新创建视图
        let ballView = FloatingBallWrapper(
            onTap: { [weak self] in
                self?.toggle()
            }
        )
        let hostingView = NSHostingView(rootView: ballView)
        window.contentView = hostingView
        
        // 更新窗口大小，保持位置
        window.setFrame(NSRect(x: currentOrigin.x, y: currentOrigin.y, width: windowSize, height: windowSize), display: true)
        
        // 重新吸附到边缘
        if let ballWindow = window as? FloatingBallWindow {
            ballWindow.snapToEdge()
        }
    }
    
    func updateFloatingBallMode(_ mode: FloatingBallDisplayMode, autoSnap: Bool) {
        guard let ballWindow = floatingBallWindow as? FloatingBallWindow else { return }
        ballWindow.setMode(mode, autoSnap: autoSnap)
    }
}

// MARK: - Floating Ball Window (支持多种显示模式)
class FloatingBallWindow: NSWindow {
    private var dragTimer: Timer?
    private var screenCheckTimer: Timer?
    var currentMode: FloatingBallDisplayMode = .fixed
    var autoSnapEnabled: Bool = true
    var fixedScreenIndex: Int = 0
    private var initialScreen: NSScreen?
    
    override init(
        contentRect: NSRect,
        styleMask style: NSWindow.StyleMask,
        backing backingStoreType: NSWindow.BackingStoreType,
        defer flag: Bool
    ) {
        super.init(contentRect: contentRect, styleMask: style, backing: backingStoreType, defer: flag)
        
        // 记录初始屏幕
        initialScreen = self.screen ?? NSScreen.main
        
        // 监听窗口移动通知
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(windowDidMove),
            name: NSWindow.didMoveNotification,
            object: self
        )
        
        // 加载保存的设置
        if let modeRaw = UserDefaults.standard.string(forKey: "floatingBallDisplayMode"),
           let mode = FloatingBallDisplayMode(rawValue: modeRaw) {
            currentMode = mode
        }
        autoSnapEnabled = UserDefaults.standard.bool(forKey: "floatingBallAutoSnap")
        fixedScreenIndex = UserDefaults.standard.integer(forKey: "floatingBallFixedScreenIndex")
        
        setupMode()
    }
    
    deinit {
        NotificationCenter.default.removeObserver(self)
        stopAllTimers()
    }
    
    private func stopAllTimers() {
        dragTimer?.invalidate()
        screenCheckTimer?.invalidate()
    }
    
    func setMode(_ mode: FloatingBallDisplayMode, autoSnap: Bool) {
        currentMode = mode
        autoSnapEnabled = autoSnap
        stopAllTimers()
        setupMode()
    }
    
    private func setupMode() {
        // 所有模式都允许拖动
        self.isMovable = true
        self.isMovableByWindowBackground = true
        
        switch currentMode {
        case .fixed:
            // 固定窗口 - 不做任何自动移动
            break
            
        case .mainScreen:
            // 主屏幕模式 - 定期检查是否在主屏幕
            startScreenTracking(targetScreen: .main)
            
        case .specificScreen:
            // 固定显示器模式 - 定期检查是否在指定显示器
            startScreenTracking(targetScreen: .specific(fixedScreenIndex))
        }
    }
    
    @objc private func windowDidMove(_ notification: Notification) {
        // 只在启用自动贴边时执行吸附
        guard autoSnapEnabled else { return }
        
        // 取消之前的定时器
        dragTimer?.invalidate()
        
        // 设置新的定时器，0.2秒后如果没有新的移动事件，就执行吸附
        dragTimer = Timer.scheduledTimer(withTimeInterval: 0.2, repeats: false) { [weak self] _ in
            DispatchQueue.main.async {
                self?.snapToEdge()
            }
        }
    }
    
    // MARK: - 屏幕跟踪模式
    enum TargetScreen {
        case main
        case specific(Int)
    }
    
    private func startScreenTracking(targetScreen: TargetScreen) {
        screenCheckTimer = Timer.scheduledTimer(withTimeInterval: 2.0, repeats: true) { [weak self] _ in
            guard let self = self else { return }
            
            let target: NSScreen?
            switch targetScreen {
            case .main:
                target = NSScreen.main
            case .specific(let index):
                let screens = NSScreen.screens
                target = index < screens.count ? screens[index] : NSScreen.main
            }
            
            guard let targetScreen = target else { return }
            
            // 如果不在目标屏幕上，移动过去
            if self.screen != targetScreen {
                let screenFrame = targetScreen.visibleFrame
                let newOrigin = NSPoint(
                    x: screenFrame.maxX - self.frame.width - 10,
                    y: screenFrame.midY - self.frame.height / 2
                )
                
                NSAnimationContext.runAnimationGroup({ context in
                    context.duration = 0.3
                    self.setFrame(NSRect(origin: newOrigin, size: self.frame.size), display: true, animate: true)
                }, completionHandler: nil)
            }
        }
    }
    
    // MARK: - 自动贴边
    func snapToEdge() {
        guard let screen = self.screen ?? NSScreen.main else { return }
        
        let screenFrame = screen.visibleFrame
        let windowFrame = self.frame
        let windowCenter = NSPoint(
            x: windowFrame.midX,
            y: windowFrame.midY
        )
        
        // 计算到各边的距离
        let distanceToLeft = windowCenter.x - screenFrame.minX
        let distanceToRight = screenFrame.maxX - windowCenter.x
        
        // 完全紧贴边缘，无间距
        let edgePadding: CGFloat = 0
        
        var newFrame = windowFrame
        
        // 水平方向：吸附到最近的左右边缘
        if distanceToLeft < distanceToRight {
            // 吸附到左边
            newFrame.origin.x = screenFrame.minX + edgePadding
        } else {
            // 吸附到右边
            newFrame.origin.x = screenFrame.maxX - windowFrame.width - edgePadding
        }
        
        // 垂直方向：保持在屏幕范围内
        newFrame.origin.y = max(screenFrame.minY + edgePadding, min(newFrame.origin.y, screenFrame.maxY - windowFrame.height - edgePadding))
        
        // 如果位置没变化，不执行动画
        if abs(newFrame.origin.x - windowFrame.origin.x) < 1 {
            return
        }
        
        // 使用更快的动画
        NSAnimationContext.runAnimationGroup({ context in
            context.duration = 0.15
            context.timingFunction = CAMediaTimingFunction(name: .easeInEaseOut)
            context.allowsImplicitAnimation = true
            self.setFrame(newFrame, display: true, animate: true)
        }, completionHandler: nil)
    }
}

// MARK: - Window Delegate Extension
extension DesktopStickyWindowManager: NSWindowDelegate {
    func windowWillClose(_ notification: Notification) {
        // 窗口关闭时只隐藏，不释放
        isVisible = false
        viewModel.isWindowVisible = false
    }
}

// MARK: - Sticky Panel (可交互的面板)
class StickyPanel: NSPanel {
    override var canBecomeKey: Bool { 
        print("[StickyPanel] canBecomeKey 被调用，返回 true")
        return true 
    }
    override var canBecomeMain: Bool { 
        print("[StickyPanel] canBecomeMain 被调用，返回 false")
        return false 
    }
    override var acceptsFirstResponder: Bool { 
        print("[StickyPanel] acceptsFirstResponder 被调用，返回 true")
        return true 
    }
    
    override init(
        contentRect: NSRect,
        styleMask style: NSWindow.StyleMask,
        backing backingStoreType: NSWindow.BackingStoreType,
        defer flag: Bool
    ) {
        super.init(contentRect: contentRect, styleMask: style, backing: backingStoreType, defer: flag)
        self.acceptsMouseMovedEvents = true
        // 确保窗口关闭时不被释放
        self.isReleasedWhenClosed = false
    }
}

#endif
