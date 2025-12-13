import SwiftUI
import SwiftData
import AppKit
import Combine

// Global container for access outside of View hierarchy
@MainActor
var globalModelContainer: ModelContainer {
    DataContainer.shared.container
}

// MARK: - App Global Helper
@MainActor
class AppGlobal {
    static let shared = AppGlobal()
    var openWindow: OpenWindowAction?
    
    // 用于追踪手动创建的兜底窗口，避免重复创建
    private weak var fallbackWindow: NSWindow?
    
    private init() {}
    
    func openMainWindow() {
        print("[AppGlobal-v3] 收到打开主窗口请求 - \(Date())")
        NSApp.activate(ignoringOtherApps: true)
        
        // 1. 严格单例检查：首先查找是否已有可见或最小化的标准主窗口
        // 这能防止重复创建，也解决了 "点击 Dock 图标时打开新窗口" 的问题
        let existingWindow = NSApp.windows.first { window in
            // 排除条件：
            // 1. 必须是标准窗口 (titled)
            // 2. 不能是面板 (NSPanel)
            // 3. 不能是状态栏窗口
            // 4. 必须能成为 Key Window
            return window.styleMask.contains(.titled) &&
                   !window.styleMask.contains(.nonactivatingPanel) &&
                   !(window is NSPanel) &&
                   window.className != "NSStatusBarWindow" &&
                   window.title.count > 0 // 通常主窗口都有标题 "FlowTask"
        }
        
        if let window = existingWindow {
            print("[AppGlobal-v3] 发现现有主窗口，直接激活: \(window)")
            if window.isMiniaturized {
                window.deminiaturize(nil)
            }
            window.makeKeyAndOrderFront(nil)
            return
        }
        
        // 2. 如果没有找到现有窗口，尝试使用 SwiftUI openWindow (最佳实践)
        // 这会处理 "窗口已关闭需要重建" 的情况
        if let action = openWindow {
            print("[AppGlobal-v3] 未发现窗口，调用 SwiftUI openWindow(id: 'main')")
            action(id: "main")
            return
        }
        
        // 3. 兜底方案：如果没有 openWindow 句柄 (例如应用启动后从未显示过窗口，或者句柄丢失)
        print("[AppGlobal-v3] 警告: openWindow 句柄丢失且无现有窗口，执行手动窗口创建兜底")
        createMainWindowFallback()
    }
    
    private func createMainWindowFallback() {
        // 如果已经有兜底窗口且可见，直接激活
        if let existing = fallbackWindow, existing.isVisible {
            print("[AppGlobal] 激活现有兜底窗口")
            existing.makeKeyAndOrderFront(nil)
            return
        }
        
        print("[AppGlobal] 创建新的兜底 NSWindow")
        
        // 创建主视图并注入环境
        let contentView = MainContentView()
            .modelContainer(globalModelContainer)
            .frame(minWidth: 1100, minHeight: 650)
            .onAppear {
                // 试图重新捕获 openWindow，虽然在手动窗口中可能无效，但值得一试
                // 注意：这里无法直接访问 openWindow 环境值，除非 MainContentView 内部传递
            }
            
        let hostingController = NSHostingController(rootView: contentView)
        
        let window = NSWindow(contentViewController: hostingController)
        window.title = "FlowTask"
        window.setContentSize(NSSize(width: 1200, height: 750))
        window.minSize = NSSize(width: 1100, height: 650)
        window.styleMask = [.titled, .closable, .miniaturizable, .resizable, .fullSizeContentView]
        window.center()
        window.isReleasedWhenClosed = false
        
        window.makeKeyAndOrderFront(nil)
        self.fallbackWindow = window
    }
}

@main
struct FlowTaskMacApp: App {
    @NSApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    @Environment(\.openWindow) private var openWindow
    
    var body: some Scene {
        WindowGroup(id: "main") {
            MainContentView()
                .frame(minWidth: 1100, minHeight: 650)
                .onAppear {
                    print("[FlowTaskMacApp] 主窗口出现，更新 openWindow 句柄")
                    AppGlobal.shared.openWindow = openWindow
                }
        }
        .modelContainer(globalModelContainer)
        .defaultSize(width: 1400, height: 800)
        .windowResizability(.contentMinSize)
        .commands {
            CommandGroup(replacing: .newItem) {}
        }
    }
}

class AppDelegate: NSObject, NSApplicationDelegate {
    var statusItem: NSStatusItem?
    @AppStorage("showFloatingBallOnLaunch") private var showFloatingBallOnLaunch = true
    @AppStorage("menuBarDisplayMode") private var menuBarDisplayModeRaw: String = MenuBarDisplayMode.taskCount.rawValue
    @AppStorage("hasUnreadOverdueTasks") private var hasUnreadOverdueTasks = false
    
    private var updateTimer: Timer?
    private var cancellables = Set<AnyCancellable>()
    
    var menuBarDisplayMode: MenuBarDisplayMode {
        get { MenuBarDisplayMode(rawValue: menuBarDisplayModeRaw) ?? .taskCount }
        set { menuBarDisplayModeRaw = newValue.rawValue }
    }
    
    func applicationDidFinishLaunching(_ notification: Notification) {
        setupStatusBar()
        startStatusBarUpdates()
        
        // 启动通知服务
        Task { @MainActor in
            await NotificationService.shared.requestAuthorization()
            if SettingsManager.shared.notificationEnabled {
                NotificationService.shared.startNotificationCheck()
            }
        }
        
        // 根据设置决定是否显示悬浮球
        if showFloatingBallOnLaunch {
            Task { @MainActor in
                DesktopStickyWindowManager.shared.showFloatingBall()
            }
        }
    }
    
    func applicationShouldHandleReopen(_ sender: NSApplication, hasVisibleWindows flag: Bool) -> Bool {
        // 无论 flag 如何，都尝试唤起主窗口
        Task { @MainActor in
            AppGlobal.shared.openMainWindow()
        }
        return true
    }
    
    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        return false
    }
    
    private func setupStatusBar() {
        statusItem = NSStatusBar.system.statusItem(withLength: NSStatusItem.variableLength)
        
        // 设置按钮点击行为
        if let button = statusItem?.button {
            button.target = self
            button.action = #selector(statusBarButtonClicked)
            button.sendAction(on: [.leftMouseUp, .rightMouseUp])
        }
        
        updateStatusBarIcon()
        updateStatusBarTitle()
        
        // 创建菜单但不立即设置
        let menu = NSMenu()
        menu.delegate = self
        menu.addItem(NSMenuItem(title: "显示主窗口", action: #selector(showMainWindow), keyEquivalent: ""))
        menu.addItem(NSMenuItem.separator())
        menu.addItem(NSMenuItem(title: "显示桌面贴图", action: #selector(showStickyWindow), keyEquivalent: ""))
        menu.addItem(NSMenuItem(title: "显示/隐藏悬浮球", action: #selector(toggleFloatingBall), keyEquivalent: ""))
        menu.addItem(NSMenuItem.separator())
        menu.addItem(NSMenuItem(title: "退出", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q"))
        
        // 保存菜单引用
        statusItem?.menu = menu
    }
    
    @objc private func statusBarButtonClicked(_ sender: NSStatusBarButton) {
        guard let event = NSApp.currentEvent else {
            // 如果没有事件，显示菜单
            statusItem?.menu?.popUp(positioning: nil, at: NSPoint(x: 0, y: sender.bounds.height), in: sender)
            return
        }
        
        // 左键点击
        if event.type == .leftMouseUp {
            // 如果有未读的到期提醒，打开主窗口并跳转到第一个到期任务
            if hasUnreadOverdueTasks {
                Task { @MainActor in
                    openMainWindowAndShowOverdueTasks()
                }
                return
            }
        }
        
        // 显示菜单
        statusItem?.menu?.popUp(positioning: nil, at: NSPoint(x: 0, y: sender.bounds.height), in: sender)
    }
    
    @MainActor
    private func openMainWindowAndShowOverdueTasks() {
        print("[AppDelegate] openMainWindowAndShowOverdueTasks 被调用")
        
        // 清除未读标记
        hasUnreadOverdueTasks = false
        updateStatusBarTitle()
        
        // 打开主窗口
        AppGlobal.shared.openMainWindow()
        
        // 获取第一个到期任务
        let tasks = SharedDataManager.shared.tasks
        let overdueTasks = getOverdueTasks(from: tasks)
        
        print("[AppDelegate] 找到 \(overdueTasks.count) 个到期任务")
        
        if let firstOverdueTask = overdueTasks.first {
            print("[AppDelegate] 第一个到期任务: \(firstOverdueTask.title)")
            
            // 延迟一下，确保窗口已经打开
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                print("[AppDelegate] 发送 showTaskDetail 通知")
                // 发送通知，让主窗口跳转到该任务
                NotificationCenter.default.post(
                    name: .showTaskDetail,
                    object: nil,
                    userInfo: ["taskId": firstOverdueTask.id.uuidString]
                )
            }
        } else {
            print("[AppDelegate] 没有找到到期任务")
        }
    }
    
    private func startStatusBarUpdates() {
        // 监听数据变化
        SharedDataManager.shared.$lastUpdateTime
            .sink { [weak self] _ in
                Task { @MainActor in
                    self?.updateStatusBarTitle()
                }
            }
            .store(in: &cancellables)
        
        // 监听显示模式变化
        NotificationCenter.default.addObserver(
            forName: .menuBarDisplayModeChanged,
            object: nil,
            queue: .main
        ) { [weak self] _ in
            Task { @MainActor in
                self?.updateStatusBarIcon()
                self?.updateStatusBarTitle()
            }
        }
        
        // 定时更新（用于时间相关的显示模式）
        updateTimer = Timer.scheduledTimer(withTimeInterval: 60, repeats: true) { [weak self] _ in
            Task { @MainActor in
                self?.updateStatusBarTitle()
            }
        }
    }
    
    @MainActor
    private func updateStatusBarIcon() {
        guard let button = statusItem?.button else { return }
        
        let settings = SettingsManager.shared
        
        switch settings.menuBarIconType {
        case .systemIcon:
            // 使用系统图标
            button.image = NSImage(systemSymbolName: settings.menuBarSystemIcon, accessibilityDescription: "FlowTask")
            button.imagePosition = .imageLeading
            
        case .customText, .emoji:
            // 使用自定义文字或表情
            button.image = nil
            button.imagePosition = .imageLeading
            // 文字会在 updateStatusBarTitle 中设置
        }
    }
    
    @MainActor
    private func updateStatusBarTitle() {
        guard let button = statusItem?.button else { return }
        
        let settings = SettingsManager.shared
        let tasks = SharedDataManager.shared.tasks
        let pendingTasks = tasks.filter { !$0.isCompleted }
        
        // 检查是否有到期任务
        let overdueTasks = getOverdueTasks(from: tasks)
        
        // 如果有到期任务且标记为未读，显示到期提醒
        if !overdueTasks.isEmpty && hasUnreadOverdueTasks {
            button.title = "⚠️ 到期提醒！"
            return
        }
        
        // 如果有新的到期任务（之前没有标记），设置标记并显示提醒
        if !overdueTasks.isEmpty && !hasUnreadOverdueTasks {
            // 检查是否真的有新的到期任务（通过检查上次检查时间）
            let lastCheckKey = "lastOverdueCheckTime"
            let lastCheckTime = UserDefaults.standard.object(forKey: lastCheckKey) as? Date ?? Date.distantPast
            
            // 如果有任务在上次检查后到期，标记为未读
            let hasNewOverdue = overdueTasks.contains { task in
                guard let dueDate = task.dueDate else { return false }
                return dueDate > lastCheckTime
            }
            
            if hasNewOverdue {
                hasUnreadOverdueTasks = true
                UserDefaults.standard.set(Date(), forKey: lastCheckKey)
                button.title = "⚠️ 到期提醒！"
                return
            }
        }
        
        var title: String = ""
        
        // 如果是自定义文字或表情模式，先添加前缀
        if settings.menuBarIconType == .customText || settings.menuBarIconType == .emoji {
            title = settings.menuBarCustomText
            if !title.isEmpty && menuBarDisplayMode != .simple {
                title += " "
            }
        }
        
        // 添加显示内容
        switch menuBarDisplayMode {
        case .taskCount:
            // 显示待完成任务数
            if !pendingTasks.isEmpty {
                title += "\(pendingTasks.count)"
            }
            
        case .todayRemaining:
            // 显示今日剩余任务
            let todayTasks = getTodayTasks(from: tasks)
            if todayTasks.isEmpty {
                title += "✓"
            } else {
                title += "\(todayTasks.count)"
            }
            
        case .progress:
            // 显示完成进度
            if !tasks.isEmpty {
                let completed = tasks.filter { $0.isCompleted }.count
                let percentage = Int(Double(completed) / Double(tasks.count) * 100)
                title += "\(percentage)%"
            }
            
        case .greeting:
            // 显示问候语
            title += getGreeting()
            
        case .simple:
            // 简洁模式，不添加额外内容
            break
        }
        
        button.title = title
    }
    
    private func getOverdueTasks(from tasks: [FlowTask]) -> [FlowTask] {
        let now = Date()
        return tasks.filter { task in
            guard !task.isCompleted, let dueDate = task.dueDate else { return false }
            return dueDate < now
        }
    }
    
    private func getTodayTasks(from tasks: [FlowTask]) -> [FlowTask] {
        let calendar = Calendar.current
        let today = calendar.startOfDay(for: Date())
        let tomorrow = calendar.date(byAdding: .day, value: 1, to: today)!
        
        return tasks.filter { task in
            guard !task.isCompleted else { return false }
            
            let taskStart = task.startDate ?? task.dueDate
            let taskEnd = task.dueDate ?? task.startDate
            
            guard taskStart != nil || taskEnd != nil else { return false }
            
            if let start = taskStart, let end = taskEnd {
                return start < tomorrow && end >= today
            } else if let date = taskStart ?? taskEnd {
                return calendar.isDateInToday(date)
            }
            
            return false
        }
    }
    
    private func getGreeting() -> String {
        let hour = Calendar.current.component(.hour, from: Date())
        switch hour {
        case 5..<12: return "☀️"
        case 12..<14: return "🌤️"
        case 14..<18: return "🌥️"
        case 18..<22: return "🌙"
        default: return "🌜"
        }
    }
    
    @objc func showMainWindow() {
        Task { @MainActor in
            AppGlobal.shared.openMainWindow()
        }
    }
    
    @objc func showStickyWindow() {
        Task { @MainActor in
            DesktopStickyWindowManager.shared.showStickyWindow()
        }
    }
    
    @objc func toggleFloatingBall() {
        Task { @MainActor in
            DesktopStickyWindowManager.shared.toggleFloatingBall()
        }
    }
}

// MARK: - NSMenuDelegate
extension AppDelegate: NSMenuDelegate {
    func menuWillOpen(_ menu: NSMenu) {
        // 用户打开菜单时，清除"到期提醒"标记
        if hasUnreadOverdueTasks {
            hasUnreadOverdueTasks = false
            Task { @MainActor in
                updateStatusBarTitle()
            }
        }
    }
}

struct MainContentView: View {
    @Environment(\.modelContext) private var modelContext
    @StateObject private var viewModel = TaskListViewModel()
    @ObservedObject private var sharedData = SharedDataManager.shared
    @State private var selectedTab: NavigationTab = .statistics // 默认打开统计页面
    @State private var sidebarCollapsed = false
    @State private var hoveredTab: NavigationTab?

    private var sidebarWidth: CGFloat {
        sidebarCollapsed ? 60 : 200
    }
    
    var body: some View {
        NavigationSplitView(columnVisibility: .constant(.all)) {
            VStack(spacing: 0) {
                ScrollView {
                    VStack(spacing: 4) {
                        sidebarItem(tab: .statistics, title: "统计", systemImage: "chart.bar.fill")
                        sidebarItem(tab: .today, title: "今日", systemImage: "sun.max")
                        sidebarItem(tab: .tasks, title: "所有任务", systemImage: "list.bullet")
                        sidebarItem(tab: .notes, title: "笔记", systemImage: "doc.text")
                    }
                    .padding(.horizontal, 12)
                    .padding(.vertical, 8)
                }
                
                Spacer()
                
                // 设置按钮
                settingsButton
                    .padding(.horizontal, 12)
                    .padding(.bottom, 12)
            }
            .navigationSplitViewColumnWidth(min: sidebarWidth, ideal: sidebarWidth, max: sidebarWidth)
        } detail: {
            detailView
        }
        .navigationSplitViewStyle(.balanced)
        .toolbar {
            ToolbarItem(placement: .navigation) {
                Button {
                    withAnimation(.easeInOut(duration: 0.2)) {
                        sidebarCollapsed.toggle()
                    }
                } label: {
                    Image(systemName: "sidebar.leading")
                }
                .help(sidebarCollapsed ? "展开侧边栏" : "收起侧边栏")
            }
        }
        .onAppear {
            setupData()
            setupNotificationObserver()
        }
    }
    
    private func setupNotificationObserver() {
        NotificationCenter.default.addObserver(
            forName: .showTaskDetail,
            object: nil,
            queue: .main
        ) { [weak viewModel] notification in
            guard let taskIdString = notification.userInfo?["taskId"] as? String,
                  let taskId = UUID(uuidString: taskIdString),
                  let task = viewModel?.tasks.first(where: { $0.id == taskId }) else {
                print("[MainContentView] 未找到任务: \(notification.userInfo?["taskId"] ?? "unknown")")
                return
            }
            
            print("[MainContentView] 收到 showTaskDetail 通知，任务: \(task.title)")
            
            // 切换到今日视图（因为到期任务通常在今日视图中）
            Task { @MainActor in
                self.selectedTab = .today
                
                // 延迟一下，确保视图已经切换
                try? await Task.sleep(nanoseconds: 200_000_000) // 0.2秒
                
                print("[MainContentView] 发送 selectTask 通知")
                // 发送通知让 MacTodayView 选中该任务
                NotificationCenter.default.post(
                    name: .selectTask,
                    object: nil,
                    userInfo: ["taskId": taskIdString]
                )
            }
        }
    }
    
    // MARK: - Settings Button
    private var settingsButton: some View {
        let isSelected = selectedTab == .settings
        
        return Button {
            selectedTab = .settings
        } label: {
            HStack(spacing: 10) {
                Image(systemName: "gearshape")
                    .font(.system(size: 14))
                    .frame(width: 20, alignment: .center)
                if !sidebarCollapsed {
                    Text("设置")
                        .lineLimit(1)
                    Spacer()
                }
            }
            .foregroundStyle(isSelected ? .primary : .secondary)
            .padding(.horizontal, 12)
            .padding(.vertical, 8)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(
                RoundedRectangle(cornerRadius: 10)
                    .fill(isSelected ? Color.accentColor.opacity(0.22) : Color.clear)
            )
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .help("打开设置")
    }

    @ViewBuilder
    private var detailView: some View {
        switch selectedTab {
        case .tasks:
            MacTaskListView(viewModel: viewModel)
        case .today:
            MacTodayView(viewModel: viewModel)
        case .notes:
            MacNotesView()
        case .statistics:
            StatisticsView()
        case .settings:
            SettingsView()
        }
    }

    private func sidebarItem(tab: NavigationTab, title: String, systemImage: String) -> some View {
        let isSelected = selectedTab == tab
        let isHovered = hoveredTab == tab

        return Button {
            selectedTab = tab
        } label: {
            HStack(spacing: 10) {
                Image(systemName: systemImage)
                    .font(.system(size: 14))
                    .frame(width: 20, alignment: .center)
                if !sidebarCollapsed {
                    Text(title)
                        .lineLimit(1)
                    Spacer()
                }
            }
            .foregroundStyle(isSelected ? .primary : .secondary)
            .padding(.horizontal, 12)
            .padding(.vertical, 8)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(
                RoundedRectangle(cornerRadius: 10)
                    .fill(isSelected ? Color.accentColor.opacity(0.22) : (isHovered ? Color.primary.opacity(0.08) : Color.clear))
            )
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .onHover { hovering in
            hoveredTab = hovering ? tab : nil
        }
        .accessibilityLabel(title)
    }

    private func setupData() {
        let taskRepository = TaskRepository(context: modelContext)
        let noteRepository = NoteRepository(context: modelContext)
        SharedDataManager.shared.setRepositories(taskRepo: taskRepository, noteRepo: noteRepository)
    }
}

enum NavigationTab: Hashable {
    case tasks, today, notes, statistics, settings
}

private struct FixedSidebarColumnWidth: ViewModifier {
    let width: CGFloat

    func body(content: Content) -> some View {
        if #available(macOS 13.0, *) {
            content
                .navigationSplitViewColumnWidth(min: width, ideal: width, max: width)
        } else {
            content
                .navigationSplitViewColumnWidth(width)
        }
    }
}

private struct HideListContentBackground: ViewModifier {
    func body(content: Content) -> some View {
        if #available(macOS 13.0, *) {
            content
                .scrollContentBackground(.hidden)
        } else {
            content
        }
    }
}

struct MainPanelView: View {
    @Environment(\.dismiss) private var dismiss
    @ObservedObject private var sharedData = SharedDataManager.shared
    
    var body: some View {
        VStack(spacing: 0) {
            HStack {
                Text("主面板")
                    .font(.title2)
                    .fontWeight(.bold)
                Spacer()
                Button(action: { dismiss() }) {
                    Image(systemName: "xmark.circle.fill")
                        .foregroundColor(.secondary)
                }
                .buttonStyle(.plain)
            }
            .padding()
            
            Divider()
            
            ScrollView {
                VStack(alignment: .leading, spacing: 16) {
                    Text("快速统计")
                        .font(.headline)
                        .padding(.horizontal)
                    
                    HStack(spacing: 16) {
                        StatCard(title: "总任务", value: "\(sharedData.tasks.count)", color: .accentColor)
                        StatCard(title: "已完成", value: "\(sharedData.tasks.filter { $0.isCompleted }.count)", color: .green)
                        StatCard(title: "进行中", value: "\(sharedData.tasks.filter { !$0.isCompleted }.count)", color: .orange)
                    }
                    .padding(.horizontal)
                    
                    Divider()
                        .padding(.vertical)
                    
                    Text("最近任务")
                        .font(.headline)
                        .padding(.horizontal)
                    
                    ForEach(Array(sharedData.tasks.prefix(5))) { task in
                        HStack {
                            Image(systemName: task.isCompleted ? "checkmark.circle.fill" : "circle")
                                .foregroundColor(task.isCompleted ? .green : .gray)
                            Text(task.title)
                                .lineLimit(1)
                            Spacer()
                        }
                        .padding(.horizontal)
                        .padding(.vertical, 4)
                    }
                }
                .padding(.vertical)
            }
        }
    }
}

struct StatCard: View {
    let title: String
    let value: String
    let color: Color
    
    var body: some View {
        VStack(spacing: 8) {
            Text(value)
                .font(.title)
                .fontWeight(.bold)
                .foregroundColor(color)
            Text(title)
                .font(.caption)
                .foregroundColor(.secondary)
        }
        .frame(maxWidth: .infinity)
        .padding()
        .background(Color(nsColor: .controlBackgroundColor))
        .cornerRadius(12)
    }
}

@MainActor
class SharedDataManager: ObservableObject {
    static let shared = SharedDataManager()
    
    @Published var tasks: [FlowTask] = []
    @Published var notes: [Note] = []
    @Published var lastUpdateTime: Date = Date()
    
    var taskRepository: TaskRepository?
    var noteRepository: NoteRepository?
    private var isInitialized = false
    
    private init() {}
    
    func setRepositories(taskRepo: TaskRepository, noteRepo: NoteRepository) {
        guard !isInitialized else { return }
        self.taskRepository = taskRepo
        self.noteRepository = noteRepo
        self.isInitialized = true
        Task {
            await loadAll()
        }
    }
    
    func loadAll() async {
        await loadTasks()
        await loadNotes()
    }
    
    func loadTasks() async {
        guard let repo = taskRepository else { return }
        do {
            tasks = try await repo.fetchAllTasks()
            lastUpdateTime = Date()
        } catch {
            print("加载任务失败: \(error)")
        }
    }
    
    func loadNotes() async {
        guard let repo = noteRepository else { return }
        do {
            notes = try await repo.fetchAllNotes()
            lastUpdateTime = Date()
        } catch {
            print("加载笔记失败: \(error)")
        }
    }
    
    func toggleTask(_ task: FlowTask) {
        guard let index = tasks.firstIndex(where: { $0.id == task.id }) else { return }
        tasks[index].isCompleted.toggle()
        tasks[index].updatedAt = Date()
        
        let updatedTask = tasks[index]
        lastUpdateTime = Date()
        
        if let repo = taskRepository {
            Task {
                _ = try? await repo.updateTask(updatedTask)
            }
        }
    }
    
    func addTask(title: String) {
        let calendar = Calendar.current
        let endOfToday = calendar.date(bySettingHour: 23, minute: 59, second: 0, of: Date())
        let newTask = FlowTask(title: title, dueDate: endOfToday)
        tasks.insert(newTask, at: 0)
        lastUpdateTime = Date()
        
        if let repo = taskRepository {
            Task {
                _ = try? await repo.createTask(newTask)
            }
        }
    }
    
    func addFullTask(_ task: FlowTask) {
        print("[SharedDataManager] addFullTask 被调用")
        print("[SharedDataManager] 任务标题: \(task.title)")
        print("[SharedDataManager] 开始日期: \(String(describing: task.startDate))")
        print("[SharedDataManager] 截止日期: \(String(describing: task.dueDate))")
        print("[SharedDataManager] 子任务数量: \(task.subtasks.count)")
        
        tasks.insert(task, at: 0)
        lastUpdateTime = Date()
        
        if let repo = taskRepository {
            Task {
                do {
                    let savedTask = try await repo.createTask(task)
                    print("[SharedDataManager] 任务保存成功: \(savedTask.id)")
                } catch {
                    print("[SharedDataManager] 任务保存失败: \(error)")
                }
            }
        } else {
            print("[SharedDataManager] 警告: taskRepository 为 nil，无法持久化任务")
        }
    }
    
    func updateTask(_ task: FlowTask) {
        guard let index = tasks.firstIndex(where: { $0.id == task.id }) else { return }
        tasks[index] = task
        tasks[index].updatedAt = Date()
        lastUpdateTime = Date()
        
        if let repo = taskRepository {
            Task {
                _ = try? await repo.updateTask(task)
            }
        }
    }
    
    func deleteTask(_ task: FlowTask) {
        tasks.removeAll { $0.id == task.id }
        lastUpdateTime = Date()
        
        if let repo = taskRepository {
            Task {
                try? await repo.deleteTask(task)
            }
        }
    }
    
    func toggleSubtask(_ task: FlowTask, subtask: Subtask) {
        guard let taskIndex = tasks.firstIndex(where: { $0.id == task.id }),
              let subtaskIndex = tasks[taskIndex].subtasks.firstIndex(where: { $0.id == subtask.id }) else { return }
        
        tasks[taskIndex].subtasks[subtaskIndex].isCompleted.toggle()
        tasks[taskIndex].updatedAt = Date()
        
        let updatedTask = tasks[taskIndex]
        lastUpdateTime = Date()
        
        if let repo = taskRepository {
            Task {
                _ = try? await repo.updateTask(updatedTask)
            }
        }
    }
    
    func addSubtask(to task: FlowTask, title: String) {
        guard let taskIndex = tasks.firstIndex(where: { $0.id == task.id }) else { return }
        
        let newSubtask = Subtask(title: title, orderIndex: tasks[taskIndex].subtasks.count)
        tasks[taskIndex].subtasks.append(newSubtask)
        tasks[taskIndex].updatedAt = Date()
        
        let updatedTask = tasks[taskIndex]
        lastUpdateTime = Date()
        
        if let repo = taskRepository {
            Task {
                _ = try? await repo.updateTask(updatedTask)
            }
        }
    }
    
    func addNote(title: String, content: String) {
        let newNote = Note(title: title, content: content)
        notes.insert(newNote, at: 0)
        lastUpdateTime = Date()
        
        if let repo = noteRepository {
            Task {
                _ = try? await repo.createNote(newNote)
            }
        }
    }
    
    func updateNote(_ note: Note) {
        guard let index = notes.firstIndex(where: { $0.id == note.id }) else { return }
        var updated = note
        updated.updatedAt = Date()
        notes[index] = updated
        lastUpdateTime = Date()
        
        if let repo = noteRepository {
            Task {
                _ = try? await repo.updateNote(updated)
            }
        }
    }
    
    func deleteNote(_ note: Note) {
        notes.removeAll { $0.id == note.id }
        lastUpdateTime = Date()
        
        if let repo = noteRepository {
            Task {
                try? await repo.deleteNote(note)
            }
        }
    }
}
struct MacTodayView: View {
    @ObservedObject var viewModel: TaskListViewModel
    @State private var selectedTask: FlowTask?
    @State private var searchText = ""
    @State private var showCompleted = true
    @State private var animateList = false
    
    private let listMinWidth: CGFloat = 240
    private let listIdealWidth: CGFloat = 340
    private let detailMinWidth: CGFloat = 460
    private let detailIdealWidth: CGFloat = 560
    
    private var todayTasks: [FlowTask] {
        let calendar = Calendar.current
        let todayStart = calendar.startOfDay(for: Date())
        let todayEnd = calendar.date(byAdding: .day, value: 1, to: todayStart)!
        
        var result = viewModel.tasks.filter { task in
            // 获取任务的时间范围
            let taskStart = task.startDate ?? task.dueDate
            let taskEnd = task.dueDate ?? task.startDate
            
            // 如果没有任何时间设置，不显示在今日
            guard taskStart != nil || taskEnd != nil else { return false }
            
            // 检查任务时间范围是否与今天有交集
            // 任务范围: [taskStart, taskEnd]
            // 今天范围: [todayStart, todayEnd)
            
            if let start = taskStart, let end = taskEnd {
                // 有开始和结束时间：检查范围是否与今天有交集
                // 交集条件：任务开始 < 今天结束 且 任务结束 >= 今天开始
                return start < todayEnd && end >= todayStart
            } else if let date = taskStart ?? taskEnd {
                // 只有一个时间：检查是否在今天
                return calendar.isDateInToday(date)
            }
            
            return false
        }
        
        // 搜索过滤
        if !searchText.isEmpty {
            result = result.filter { $0.title.localizedCaseInsensitiveContains(searchText) }
        }
        
        // 完成状态过滤
        if !showCompleted {
            result = result.filter { !$0.isCompleted }
        }
        
        return result
    }
    
    private var pendingTasks: [FlowTask] {
        todayTasks.filter { !$0.isCompleted }
    }
    
    private var completedTasks: [FlowTask] {
        todayTasks.filter { $0.isCompleted }
    }
    
    var body: some View {
        HSplitView {
            taskListPanel
            detailPanel
        }
        .navigationTitle("今日")
        .toolbar {
            ToolbarItemGroup {
                Button {
                    viewModel.showAddTask = true
                } label: {
                    Image(systemName: "plus")
                }
                .keyboardShortcut("n", modifiers: .command)
            }
        }
        .sheet(isPresented: $viewModel.showAddTask) {
            MacTaskEditSheet(mode: .create) { task in
                viewModel.createTask(task)
            }
        }
        .sheet(item: $viewModel.editingTask) { task in
            MacTaskEditSheet(mode: .edit(task)) { updatedTask in
                viewModel.updateTask(updatedTask)
                if selectedTask?.id == updatedTask.id {
                    selectedTask = updatedTask
                }
            }
        }
        .onAppear {
            setupNotificationObserver()
            // 启动加载动画
            withAnimation(.spring(response: 0.6, dampingFraction: 0.8).delay(0.1)) {
                animateList = true
            }
        }
    }
    
    private func setupNotificationObserver() {
        NotificationCenter.default.addObserver(
            forName: .selectTask,
            object: nil,
            queue: .main
        ) { [weak viewModel] notification in
            guard let taskIdString = notification.userInfo?["taskId"] as? String,
                  let taskId = UUID(uuidString: taskIdString),
                  let task = viewModel?.tasks.first(where: { $0.id == taskId }) else {
                print("[MacTodayView] 未找到任务: \(notification.userInfo?["taskId"] ?? "unknown")")
                return
            }
            
            print("[MacTodayView] 收到 selectTask 通知，任务: \(task.title)")
            
            // 选中该任务
            Task { @MainActor in
                self.selectedTask = task
                print("[MacTodayView] 已选中任务: \(task.title)")
            }
        }
    }
    
    // MARK: - Task List Panel
    private var taskListPanel: some View {
        VStack(spacing: 0) {
            searchToolbar
            Divider()
            taskListContent
        }
        .frame(minWidth: listMinWidth, idealWidth: listIdealWidth, maxWidth: listIdealWidth)
        .layoutPriority(0)
    }
    
    // MARK: - Search Toolbar
    private var searchToolbar: some View {
        HStack {
            HStack {
                Image(systemName: "magnifyingglass")
                    .foregroundColor(.secondary)
                TextField("搜索任务...", text: $searchText)
                    .textFieldStyle(.plain)
            }
            .padding(.horizontal, 10)
            .frame(height: 32)
            .background(Color(.textBackgroundColor))
            .clipShape(RoundedRectangle(cornerRadius: 8))
            
            Spacer()
            
            Button {
                showCompleted.toggle()
            } label: {
                Image(systemName: showCompleted ? "eye" : "eye.slash")
                    .foregroundStyle(.secondary)
                    .frame(width: 28, height: 28)
                    .contentShape(RoundedRectangle(cornerRadius: 6))
            }
            .buttonStyle(.plain)
            .help(showCompleted ? "隐藏已完成" : "显示已完成")
        }
        .padding()
    }
    
    // MARK: - Task List Content
    private var taskListContent: some View {
        Group {
            if todayTasks.isEmpty && searchText.isEmpty {
                VStack(spacing: 16) {
                    Image(systemName: "sun.max.fill")
                        .font(.system(size: 48))
                        .foregroundColor(.yellow)
                    
                    Text("今天没有任务")
                        .font(.headline)
                    
                    Text("享受美好的一天吧！")
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
            } else {
                List(selection: $selectedTask) {
                    if !pendingTasks.isEmpty {
                        Section("待完成 (\(pendingTasks.count))") {
                            ForEach(Array(pendingTasks.enumerated()), id: \.element.id) { index, task in
                                taskRow(for: task)
                                    .opacity(animateList ? 1 : 0)
                                    .offset(y: animateList ? 0 : 20)
                                    .animation(.spring(response: 0.5, dampingFraction: 0.8).delay(Double(index) * 0.03), value: animateList)
                            }
                        }
                    }
                    
                    if showCompleted && !completedTasks.isEmpty {
                        Section("已完成 (\(completedTasks.count))") {
                            ForEach(Array(completedTasks.enumerated()), id: \.element.id) { index, task in
                                taskRow(for: task)
                                    .opacity(animateList ? 1 : 0)
                                    .offset(y: animateList ? 0 : 20)
                                    .animation(.spring(response: 0.5, dampingFraction: 0.8).delay(Double(pendingTasks.count + index) * 0.03), value: animateList)
                            }
                        }
                    }
                }
                .listStyle(.inset)
            }
        }
    }
    
    // MARK: - Task Row
    private func taskRow(for task: FlowTask) -> some View {
        MacTaskRowView(
            task: task,
            isSelected: selectedTask?.id == task.id,
            onToggle: { viewModel.toggleComplete(task) },
            onSelect: { selectedTask = task },
            onDelete: {
                viewModel.deleteTask(task)
                if selectedTask?.id == task.id {
                    selectedTask = nil
                }
            }
        )
        .tag(task)
        .contextMenu {
            taskContextMenu(for: task)
        }
    }
    
    // MARK: - Detail Panel
    @ViewBuilder
    private var detailPanel: some View {
        Group {
            if let task = selectedTask {
                MacTaskDetailView(
                    task: task,
                    onUpdate: { updatedTask in
                        viewModel.updateTask(updatedTask)
                        selectedTask = updatedTask
                    },
                    onDelete: {
                        viewModel.deleteTask(task)
                        selectedTask = nil
                    }
                )
            } else {
                emptyDetailView
            }
        }
        .frame(minWidth: detailMinWidth, idealWidth: detailIdealWidth, maxWidth: .infinity)
        .layoutPriority(1)
    }
    
    // MARK: - Empty Detail View
    private var emptyDetailView: some View {
        VStack(spacing: 16) {
            Image(systemName: "sun.max.fill")
                .font(.system(size: 48))
                .foregroundColor(.yellow)
            Text("选择一个任务查看详情")
                .font(.headline)
                .foregroundColor(.secondary)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
    
    @ViewBuilder
    private func taskContextMenu(for task: FlowTask) -> some View {
        Button {
            viewModel.toggleComplete(task)
        } label: {
            Label(task.isCompleted ? "标记为未完成" : "标记为完成",
                  systemImage: task.isCompleted ? "circle" : "checkmark.circle")
        }
        
        Button {
            viewModel.editingTask = task
        } label: {
            Label("编辑", systemImage: "pencil")
        }
        
        Divider()
        
        Button(role: .destructive) {
            viewModel.deleteTask(task)
            if selectedTask?.id == task.id {
                selectedTask = nil
            }
        } label: {
            Label("删除", systemImage: "trash")
        }
    }
}

// MARK: - Mac Summary View
struct MacSummaryView: View {
    @ObservedObject var viewModel: TaskListViewModel
    @State private var summary: DailySummary?
    
    var body: some View {
        ScrollView {
            VStack(spacing: 24) {
                // 标题
                HStack {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("每日总结")
                            .font(.title)
                            .fontWeight(.bold)
                        
                        Text(Date().formattedDate)
                            .font(.subheadline)
                            .foregroundColor(.secondary)
                    }
                    
                    Spacer()
                }
                .padding(.horizontal)
                
                // 统计卡片
                HStack(spacing: 16) {
                    SummaryStatCard(
                        title: "已完成",
                        value: "\(completedTodayCount)",
                        icon: "checkmark.circle.fill",
                        color: .green
                    )
                    
                    SummaryStatCard(
                        title: "待完成",
                        value: "\(pendingCount)",
                        icon: "circle",
                        color: .orange
                    )
                    
                    SummaryStatCard(
                        title: "完成率",
                        value: completionRateText,
                        icon: "chart.pie.fill",
                        color: .accentColor
                    )
                }
                .padding(.horizontal)
                
                // 今日完成的任务
                if !completedTodayTasks.isEmpty {
                    VStack(alignment: .leading, spacing: 12) {
                        Text("今日完成")
                            .font(.headline)
                            .padding(.horizontal)
                        
                        ForEach(completedTodayTasks) { task in
                            HStack(spacing: 12) {
                                Image(systemName: "checkmark.circle.fill")
                                    .foregroundColor(.green)
                                
                                Text(task.title)
                                    .strikethrough()
                                    .foregroundColor(.secondary)
                                
                                Spacer()
                            }
                            .padding(.horizontal)
                            .padding(.vertical, 8)
                            .background(Color(.controlBackgroundColor))
                            .cornerRadius(8)
                            .padding(.horizontal)
                        }
                    }
                }
                
                Spacer()
            }
            .padding(.top)
        }
        .navigationTitle("总结")
    }
    
    private var completedTodayTasks: [FlowTask] {
        let calendar = Calendar.current
        return viewModel.tasks.filter { task in
            task.isCompleted && calendar.isDateInToday(task.updatedAt)
        }
    }
    
    private var completedTodayCount: Int {
        completedTodayTasks.count
    }
    
    private var pendingCount: Int {
        viewModel.tasks.filter { !$0.isCompleted }.count
    }
    
    private var completionRateText: String {
        let total = completedTodayCount + pendingCount
        guard total > 0 else { return "0%" }
        let rate = Double(completedTodayCount) / Double(total) * 100
        return "\(Int(rate))%"
    }
}

// MARK: - Summary Stat Card
struct SummaryStatCard: View {
    let title: String
    let value: String
    let icon: String
    let color: Color
    
    var body: some View {
        VStack(spacing: 12) {
            Image(systemName: icon)
                .font(.system(size: 28))
                .foregroundColor(color)
            
            Text(value)
                .font(.system(size: 32, weight: .bold, design: .rounded))
            
            Text(title)
                .font(.caption)
                .foregroundColor(.secondary)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 20)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(color.opacity(0.1))
        )
    }
}

struct ShortcutRow: View {
    let title: String
    let shortcut: String
    
    var body: some View {
        HStack {
            Text(title)
            Spacer()
            Text(shortcut)
                .font(.system(.body, design: .monospaced))
                .foregroundColor(.secondary)
                .padding(.horizontal, 8)
                .padding(.vertical, 4)
                .background(Color(.controlBackgroundColor))
                .cornerRadius(4)
        }
    }
}

