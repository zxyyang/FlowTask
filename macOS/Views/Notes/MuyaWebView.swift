import SwiftUI
import WebKit

#if os(macOS)

// MARK: - EditableWKWebView

/// 自定义 WKWebView 子类，正确处理键盘事件和编辑操作
class EditableWKWebView: WKWebView {
    
    override var acceptsFirstResponder: Bool {
        return true
    }
    
    override func becomeFirstResponder() -> Bool {
        return super.becomeFirstResponder()
    }
    
    // 允许所有标准编辑命令
    override func performKeyEquivalent(with event: NSEvent) -> Bool {
        // 让 WebView 处理所有键盘事件
        if event.modifierFlags.contains(.command) {
            let key = event.charactersIgnoringModifiers?.lowercased() ?? ""
            // 标准编辑快捷键 - 直接传递给 WebView 的 JavaScript
            switch key {
            case "z":
                // Cmd+Z (undo) 或 Cmd+Shift+Z (redo)
                if event.modifierFlags.contains(.shift) {
                    MuyaLogger.debug("EditableWKWebView: Cmd+Shift+Z -> redo", category: "webview")
                    evaluateJavaScript("window.muyaBridge.redo()") { result, error in
                        if let error = error {
                            MuyaLogger.error("redo 失败: \(error.localizedDescription)", category: "webview")
                        }
                    }
                } else {
                    MuyaLogger.debug("EditableWKWebView: Cmd+Z -> undo", category: "webview")
                    evaluateJavaScript("window.muyaBridge.undo()") { result, error in
                        if let error = error {
                            MuyaLogger.error("undo 失败: \(error.localizedDescription)", category: "webview")
                        }
                    }
                }
                return true
            case "y":
                // Cmd+Y (redo)
                MuyaLogger.debug("EditableWKWebView: Cmd+Y -> redo", category: "webview")
                evaluateJavaScript("window.muyaBridge.redo()") { result, error in
                    if let error = error {
                        MuyaLogger.error("redo 失败: \(error.localizedDescription)", category: "webview")
                    }
                }
                return true
            case "s":
                // Cmd+S (save) - 让 JavaScript 处理
                MuyaLogger.debug("EditableWKWebView: Cmd+S -> save", category: "webview")
                // 先刷新内容，然后通知保存
                evaluateJavaScript("""
                    (function() {
                        if (window.muyaBridge && window.muyaBridge.debounceTimer) {
                            clearTimeout(window.muyaBridge.debounceTimer);
                            window.muyaBridge.debounceTimer = null;
                        }
                        var markdown = window.muyaBridge.getValue();
                        window.muyaBridge.lastContent = markdown;
                        window.muyaBridge.notifySwift('contentChange', { markdown: markdown });
                        setTimeout(function() {
                            window.muyaBridge.notifySwift('save', {});
                        }, 50);
                    })();
                """) { _, _ in }
                return true
            case "a", "c", "v", "x", "b", "i", "u", "k":
                return super.performKeyEquivalent(with: event)
            default:
                break
            }
        }
        return super.performKeyEquivalent(with: event)
    }
    
    // 支持标准编辑菜单操作
    override func responds(to aSelector: Selector!) -> Bool {
        if aSelector == #selector(copy(_:)) ||
           aSelector == #selector(paste(_:)) ||
           aSelector == #selector(cut(_:)) ||
           aSelector == #selector(selectAll(_:)) ||
           aSelector == #selector(undo(_:)) ||
           aSelector == #selector(redo(_:)) {
            return true
        }
        return super.responds(to: aSelector)
    }
    
    @objc func copy(_ sender: Any?) {
        evaluateJavaScript("document.execCommand('copy')") { _, _ in }
    }
    
    @objc func paste(_ sender: Any?) {
        // 检查剪贴板是否有图片
        let pasteboard = NSPasteboard.general
        
        // 优先检查图片类型
        if let imageData = pasteboard.data(forType: .tiff) ?? pasteboard.data(forType: .png) {
            // 有图片数据，使用 ImageHandler 处理
            handlePasteImage(imageData: imageData, mimeType: "image/png")
            return
        }
        
        // 检查文件 URL（可能是拖拽的图片文件）
        if let urls = pasteboard.readObjects(forClasses: [NSURL.self], options: nil) as? [URL] {
            for url in urls {
                let ext = url.pathExtension.lowercased()
                if ["png", "jpg", "jpeg", "gif", "webp"].contains(ext) {
                    if let imageData = try? Data(contentsOf: url) {
                        let mimeType = ext == "png" ? "image/png" : (ext == "gif" ? "image/gif" : "image/jpeg")
                        handlePasteImage(imageData: imageData, mimeType: mimeType)
                        return
                    }
                }
            }
        }
        
        // 没有图片，执行普通粘贴
        evaluateJavaScript("document.execCommand('paste')") { _, _ in }
    }
    
    /// 处理粘贴的图片
    private func handlePasteImage(imageData: Data, mimeType: String) {
        // 转换为 base64
        let base64Data = "data:\(mimeType);base64," + imageData.base64EncodedString()
        
        // 使用 ImageHandler 处理图片
        let result = ImageHandler.shared.handlePastedImage(base64Data: base64Data, mimeType: mimeType)
        
        switch result {
        case .success(let relativePath):
            // 获取绝对路径
            if let absoluteURL = ImageHandler.shared.getAbsoluteURL(for: relativePath) {
                let imagePath = absoluteURL.path
                let escapedPath = imagePath.replacingOccurrences(of: "'", with: "\\'")
                let js = "window.muyaBridge.insertImage('\(escapedPath)', 'pasted_image')"
                evaluateJavaScript(js) { _, error in
                    if let error = error {
                        MuyaLogger.error("插入图片失败: \(error.localizedDescription)", category: "paste")
                    } else {
                        MuyaLogger.info("图片已粘贴并插入: \(imagePath)", category: "paste")
                    }
                }
            } else {
                // 如果无法获取绝对路径，直接使用 data URL
                let escapedData = base64Data.replacingOccurrences(of: "'", with: "\\'")
                let js = "window.muyaBridge.insertImage('\(escapedData)', 'pasted_image')"
                evaluateJavaScript(js) { _, _ in }
            }
            
        case .failure(let error):
            MuyaLogger.error("处理粘贴图片失败: \(error.localizedDescription)", category: "paste")
        }
    }
    
    @objc func cut(_ sender: Any?) {
        evaluateJavaScript("document.execCommand('cut')") { _, _ in }
    }
    
    @objc override func selectAll(_ sender: Any?) {
        evaluateJavaScript("document.execCommand('selectAll')") { _, _ in }
    }
    
    @objc func undo(_ sender: Any?) {
        MuyaLogger.debug("EditableWKWebView: undo 菜单操作", category: "webview")
        evaluateJavaScript("window.muyaBridge.undo()") { result, error in
            if let error = error {
                MuyaLogger.error("undo 失败: \(error.localizedDescription)", category: "webview")
            }
        }
    }
    
    @objc func redo(_ sender: Any?) {
        MuyaLogger.debug("EditableWKWebView: redo 菜单操作", category: "webview")
        evaluateJavaScript("window.muyaBridge.redo()") { result, error in
            if let error = error {
                MuyaLogger.error("redo 失败: \(error.localizedDescription)", category: "webview")
            }
        }
    }
}

// MARK: - MuyaWebView

/// SwiftUI 视图，封装 WKWebView 以显示 Muya WYSIWYG Markdown 编辑器
/// 需求: 1.3, 1.5, 2.1
struct MuyaWebView: NSViewRepresentable {
    /// 要显示和编辑的 Markdown 内容
    @Binding var content: String
    
    /// 内容变化时的回调
    var onContentChange: ((String) -> Void)?
    
    /// 发生错误时的回调
    var onError: ((String) -> Void)?
    
    /// 编辑器就绪时的回调
    var onReady: (() -> Void)?
    
    /// 大纲变化时的回调
    var onOutlineChange: (([OutlineItem]) -> Void)?
    
    /// 计数器变化时的回调
    var onCounterChange: ((CounterInfo) -> Void)?
    
    /// 历史状态变化时的回调
    var onHistoryStateChange: ((HistoryState) -> Void)?
    
    /// 当前主题
    var theme: MuyaTheme
    
    /// 当前编辑模式
    var mode: MuyaMode
    
    // MARK: - NSViewRepresentable
    
    func makeNSView(context: Context) -> WKWebView {
        let webView = createWebView(context: context)
        context.coordinator.webView = webView
        context.coordinator.bridge.webView = webView
        loadMuyaEditor(in: webView)
        return webView
    }
    
    func updateNSView(_ webView: WKWebView, context: Context) {
        let coordinator = context.coordinator
        
        // 同步更新 schemeHandler 的文档基础目录
        if let schemeHandler = coordinator.schemeHandler {
            schemeHandler.documentBaseURL = ImageHandler.shared.documentDirectory
        }
        
        // 处理来自 SwiftUI 的内容变化
        if coordinator.isLoaded {
            let currentContent = coordinator.lastSetContent
            // 只有当内容确实不同时才设置（外部切换文件等场景）
            if content != currentContent {
                // 强制重置 JS 更新标志，确保文件切换时内容能正确更新
                coordinator.isUpdatingFromJS = false
                MuyaLogger.info("updateNSView: 检测到外部内容变化，更新编辑器 (旧长度: \(currentContent.count), 新长度: \(content.count))", category: "webview")
                coordinator.lastSetContent = content
                coordinator.bridge.setMarkdown(content)
            }
        } else {
            // 编辑器未就绪时暂存内容
            MuyaLogger.debug("updateNSView: 编辑器未就绪，暂存内容 (长度: \(content.count))", category: "webview")
            coordinator.pendingContent = content
        }
        
        // 处理主题变化
        if coordinator.currentTheme != theme {
            coordinator.bridge.setTheme(theme)
            coordinator.currentTheme = theme
        }
        
        // 处理模式变化
        if coordinator.currentMode != mode {
            coordinator.bridge.setMode(mode)
            coordinator.currentMode = mode
        }
    }
    
    func makeCoordinator() -> MuyaCoordinator {
        MuyaCoordinator(parent: self)
    }
    
    // MARK: - Private Methods
    
    /// 创建并配置 WKWebView
    /// 需求: 1.3, 1.5
    private func createWebView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        
        // 配置偏好设置
        let preferences = WKPreferences()
        preferences.javaScriptCanOpenWindowsAutomatically = false
        configuration.preferences = preferences
        
        // 配置 WebView 设置
        configuration.defaultWebpagePreferences.allowsContentJavaScript = true
        
        // 允许本地文件访问以加载 Muya 资源和本地图片
        configuration.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")
        configuration.setValue(true, forKey: "allowUniversalAccessFromFileURLs")
        
        // 注册自定义 URL Scheme Handler 以正确处理 ES 模块的 MIME 类型
        if let muyaDirectoryURL = Bundle.main.url(forResource: "Muya", withExtension: nil) {
            let schemeHandler = MuyaURLSchemeHandler(resourceDirectoryURL: muyaDirectoryURL)
            configuration.setURLSchemeHandler(schemeHandler, forURLScheme: MuyaURLSchemeHandler.scheme)
            context.coordinator.schemeHandler = schemeHandler
        }
        
        // 设置消息处理器用于 JavaScript 到 Swift 的通信
        // 需求: 2.1
        let contentController = WKUserContentController()
        contentController.add(context.coordinator, name: "muyaHandler")
        
        // 注入 console.log 捕获脚本，将 JavaScript 日志转发到 Swift
        let consoleLogScript = WKUserScript(source: """
            (function() {
                var originalLog = console.log;
                var originalError = console.error;
                var originalWarn = console.warn;
                
                console.log = function() {
                    var args = Array.prototype.slice.call(arguments);
                    var message = args.map(function(arg) {
                        if (typeof arg === 'object') {
                            try { return JSON.stringify(arg); } catch(e) { return String(arg); }
                        }
                        return String(arg);
                    }).join(' ');
                    
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.muyaHandler) {
                        window.webkit.messageHandlers.muyaHandler.postMessage({
                            type: 'consoleLog',
                            data: { level: 'log', message: message },
                            timestamp: Date.now()
                        });
                    }
                    originalLog.apply(console, arguments);
                };
                
                console.error = function() {
                    var args = Array.prototype.slice.call(arguments);
                    var message = args.map(function(arg) {
                        if (typeof arg === 'object') {
                            try { return JSON.stringify(arg); } catch(e) { return String(arg); }
                        }
                        return String(arg);
                    }).join(' ');
                    
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.muyaHandler) {
                        window.webkit.messageHandlers.muyaHandler.postMessage({
                            type: 'consoleLog',
                            data: { level: 'error', message: message },
                            timestamp: Date.now()
                        });
                    }
                    originalError.apply(console, arguments);
                };
                
                console.warn = function() {
                    var args = Array.prototype.slice.call(arguments);
                    var message = args.map(function(arg) {
                        if (typeof arg === 'object') {
                            try { return JSON.stringify(arg); } catch(e) { return String(arg); }
                        }
                        return String(arg);
                    }).join(' ');
                    
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.muyaHandler) {
                        window.webkit.messageHandlers.muyaHandler.postMessage({
                            type: 'consoleLog',
                            data: { level: 'warn', message: message },
                            timestamp: Date.now()
                        });
                    }
                    originalWarn.apply(console, arguments);
                };
            })();
            """, injectionTime: .atDocumentStart, forMainFrameOnly: true)
        contentController.addUserScript(consoleLogScript)
        
        configuration.userContentController = contentController
        
        // 创建自定义 WebView（支持键盘事件）
        let webView = EditableWKWebView(frame: .zero, configuration: configuration)
        webView.navigationDelegate = context.coordinator
        
        // 配置外观 - 透明背景
        webView.setValue(false, forKey: "drawsBackground")
        
        // 禁用滚动弹跳以获得更好的原生体验
        if let scrollView = webView.enclosingScrollView {
            scrollView.hasVerticalScroller = false
            scrollView.hasHorizontalScroller = false
        }
        
        return webView
    }
    
    /// 加载 Muya 编辑器 HTML 文件
    private func loadMuyaEditor(in webView: WKWebView) {
        guard let htmlURL = Bundle.main.url(forResource: "muya", withExtension: "html", subdirectory: "Muya") else {
            let error = MuyaError.resourceLoadFailed("无法找到 muya.html 资源")
            MuyaLogger.error(error.errorDescription ?? "资源加载失败", category: "webview")
            onError?("无法找到 muya.html 资源")
            return
        }
        
        MuyaLogger.info("从以下位置加载 Muya 编辑器: \(htmlURL.path)", category: "webview")
        
        // 使用自定义 URL Scheme 加载，以正确处理 ES 模块的 MIME 类型
        if let customURL = MuyaURLSchemeHandler.customURL(for: "muya.html") {
            MuyaLogger.debug("使用自定义 scheme 加载: \(customURL.absoluteString)", category: "webview")
            webView.load(URLRequest(url: customURL))
        } else {
            // 回退到直接加载文件
            let muyaDirectoryURL = htmlURL.deletingLastPathComponent()
            guard let resourceURL = Bundle.main.resourceURL else {
                MuyaLogger.debug("使用 Muya 目录作为读取访问: \(muyaDirectoryURL.path)", category: "webview")
                webView.loadFileURL(htmlURL, allowingReadAccessTo: muyaDirectoryURL)
                return
            }
            MuyaLogger.debug("允许读取访问: \(resourceURL.path)", category: "webview")
            webView.loadFileURL(htmlURL, allowingReadAccessTo: resourceURL)
        }
    }
    
    /// 备用方法：通过读取 HTML 内容字符串加载 Muya 编辑器
    private func loadMuyaEditorAsString(in webView: WKWebView, htmlURL: URL) {
        do {
            let htmlContent = try String(contentsOf: htmlURL, encoding: .utf8)
            let baseURL = htmlURL.deletingLastPathComponent()
            
            MuyaLogger.info("以 HTML 字符串方式加载 Muya 编辑器，baseURL: \(baseURL.path)", category: "webview")
            webView.loadHTMLString(htmlContent, baseURL: baseURL)
            
        } catch {
            let muyaError = MuyaError.resourceLoadFailed("无法读取 muya.html: \(error.localizedDescription)")
            MuyaLogger.error(muyaError.errorDescription ?? "资源加载失败", category: "webview")
            onError?("无法读取 muya.html: \(error.localizedDescription)")
        }
    }
}

#endif


#if os(macOS)

// MARK: - MuyaCoordinator

/// 处理 WKWebView 委托和 JavaScript 消息处理的协调器
/// 需求: 2.1, 3.4, 21.3, 21.4, 22.4
class MuyaCoordinator: NSObject, WKNavigationDelegate, WKScriptMessageHandler {
    
    /// 父视图引用
    var parent: MuyaWebView
    
    /// MuyaBridge 实例
    let bridge: MuyaBridge
    
    /// Muya 编辑器是否已加载并就绪
    var isLoaded: Bool = false
    
    /// 编辑器就绪前等待设置的内容
    var pendingContent: String?
    
    /// 从 Swift 设置的最后内容（避免反馈循环）
    var lastSetContent: String = ""
    
    /// 从 JS 更新时防止反馈循环的标志
    var isUpdatingFromJS: Bool = false
    
    /// 当前应用到编辑器的主题
    var currentTheme: MuyaTheme = .light
    
    /// 当前内容主题
    var currentContentTheme: String = "default"
    
    /// 当前编辑模式
    var currentMode: MuyaMode = .wysiwyg
    
    /// WebView 的弱引用
    weak var webView: WKWebView?
    
    /// URL Scheme Handler 引用（保持强引用）
    var schemeHandler: MuyaURLSchemeHandler?
    
    /// 系统外观变化观察者
    private var appearanceObserver: NSObjectProtocol?
    
    /// 内容主题变化观察者
    private var contentThemeObserver: NSObjectProtocol?
    
    // MARK: - Initialization
    
    init(parent: MuyaWebView) {
        self.parent = parent
        self.currentTheme = parent.theme
        self.currentMode = parent.mode
        self.bridge = MuyaBridge()
        super.init()
        
        setupBridgeCallbacks()
        setupAppearanceObserver()
        setupContentThemeObserver()
    }
    
    deinit {
        if let observer = appearanceObserver {
            NotificationCenter.default.removeObserver(observer)
        }
        if let observer = contentThemeObserver {
            NotificationCenter.default.removeObserver(observer)
        }
    }
    
    // MARK: - Bridge Callbacks Setup
    
    private func setupBridgeCallbacks() {
        bridge.onContentChange = { [weak self] content in
            guard let self = self else { return }
            
            // 设置标志防止反馈循环
            self.isUpdatingFromJS = true
            
            // 更新 lastSetContent
            self.lastSetContent = content
            
            // 在主线程更新 SwiftUI 状态
            DispatchQueue.main.async { [weak self] in
                guard let self = self else { return }
                
                // 直接更新内容，不做额外检查
                self.parent.content = content
                
                // 调用内容变化回调（用于自动保存）
                self.parent.onContentChange?(content)
                
                MuyaLogger.debug("内容已更新，长度: \(content.count)", category: "coordinator")
                
                // 延迟重置标志，确保 SwiftUI 更新完成
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) { [weak self] in
                    self?.isUpdatingFromJS = false
                }
            }
        }
        
        bridge.onError = { [weak self] error in
            DispatchQueue.main.async { [weak self] in
                self?.parent.onError?(error.errorDescription ?? "未知错误")
            }
        }
        
        bridge.onReady = { [weak self] in
            DispatchQueue.main.async { [weak self] in
                self?.parent.onReady?()
            }
        }
        
        bridge.onOutlineChange = { [weak self] outline in
            DispatchQueue.main.async { [weak self] in
                self?.parent.onOutlineChange?(outline)
            }
        }
        
        bridge.onCounterChange = { [weak self] counter in
            DispatchQueue.main.async { [weak self] in
                self?.parent.onCounterChange?(counter)
            }
        }
        
        bridge.onHistoryStateChange = { [weak self] state in
            DispatchQueue.main.async { [weak self] in
                self?.parent.onHistoryStateChange?(state)
            }
        }
    }
    
    // MARK: - Appearance Observation
    
    /// 设置系统外观变化观察者
    /// 需求: 8.2
    private func setupAppearanceObserver() {
        appearanceObserver = DistributedNotificationCenter.default().addObserver(
            forName: NSNotification.Name("AppleInterfaceThemeChangedNotification"),
            object: nil,
            queue: .main
        ) { [weak self] _ in
            self?.handleSystemAppearanceChange()
        }
        
        NotificationCenter.default.addObserver(
            forName: NSApplication.didBecomeActiveNotification,
            object: nil,
            queue: .main
        ) { [weak self] _ in
            self?.handleSystemAppearanceChange()
        }
    }
    
    /// 处理系统外观变化
    /// 需求: 8.2
    private func handleSystemAppearanceChange() {
        guard isLoaded else { return }
        
        // 检查是否设置为自动主题
        let newTheme = MuyaTheme.current
        if currentTheme != newTheme {
            MuyaLogger.info("系统外观变化，切换到 \(newTheme.displayName) 主题", category: "coordinator")
            bridge.setTheme(newTheme)
            currentTheme = newTheme
        }
    }
    
    /// 设置内容主题变化观察者
    private func setupContentThemeObserver() {
        contentThemeObserver = NotificationCenter.default.addObserver(
            forName: .muyaContentThemeChanged,
            object: nil,
            queue: .main
        ) { [weak self] notification in
            guard let self = self, self.isLoaded else { return }
            if let theme = notification.userInfo?["theme"] as? String {
                self.applyContentTheme(theme)
            }
        }
    }
    
    /// 应用内容主题
    private func applyContentTheme(_ theme: String) {
        guard isLoaded else { return }
        currentContentTheme = theme
        bridge.setContentTheme(theme)
        MuyaLogger.info("应用内容主题: \(theme)", category: "coordinator")
    }
    
    // MARK: - WKNavigationDelegate
    
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        MuyaLogger.debug("导航完成，等待就绪消息", category: "coordinator")
    }
    
    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        MuyaLogger.error("导航失败: \(error.localizedDescription)", category: "coordinator")
        parent.onError?("导航失败: \(error.localizedDescription)")
    }
    
    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        MuyaLogger.error("加载 Muya 编辑器失败: \(error.localizedDescription)", category: "coordinator")
        parent.onError?("加载 Muya 编辑器失败: \(error.localizedDescription)")
    }
    
    // MARK: - WKScriptMessageHandler
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "muyaHandler" else { return }
        
        guard let body = message.body as? [String: Any],
              let type = body["type"] as? String else {
            return
        }
        
        handleMessage(type: type, body: body, webView: message.webView)
    }
    
    // MARK: - Message Handling
    
    private func handleMessage(type: String, body: [String: Any], webView: WKWebView?) {
        switch type {
        case "ready":
            handleReadyMessage(body: body, webView: webView)
            
        case "contentChange":
            handleContentChangeMessage(body: body)
            
        case "focus":
            bridge.onFocus?()
            
        case "blur":
            bridge.onBlur?()
            
        case "select":
            handleSelectionMessage(body: body)
            
        case "error":
            handleErrorMessage(body: body)
            
        case "outlineChange":
            handleOutlineChangeMessage(body: body)
            
        case "counterChange":
            handleCounterChangeMessage(body: body)
            
        case "historyChange":
            handleHistoryChangeMessage(body: body)
            
        case "imagePaste":
            handleImagePasteMessage(body: body, webView: webView)
            
        case "imageLoadError":
            handleImageLoadErrorMessage(body: body)
            
        case "consoleLog":
            handleConsoleLogMessage(body: body)
            
        case "save":
            // 通知 Swift 端保存 - 通过发送通知
            NotificationCenter.default.post(name: .muyaSaveRequested, object: nil)
            
        default:
            MuyaLogger.debug("收到未知消息类型: \(type)", category: "coordinator")
        }
    }
    
    private func handleReadyMessage(body: [String: Any], webView: WKWebView?) {
        guard let data = body["data"] as? [String: Any],
              let success = data["success"] as? Bool,
              success else {
            MuyaLogger.error("Muya 编辑器初始化失败", category: "coordinator")
            parent.onError?("Muya 编辑器初始化失败")
            return
        }
        
        isLoaded = true
        bridge.setEditorReady()
        
        MuyaLogger.info("Muya 编辑器初始化成功", category: "coordinator")
        
        // 设置初始主题和模式
        bridge.setTheme(parent.theme)
        if parent.mode != .wysiwyg {
            bridge.setMode(parent.mode)
        }
        
        // 设置初始内容主题
        let contentTheme = SettingsManager.shared.muyaContentTheme
        if contentTheme != "default" {
            currentContentTheme = contentTheme
            bridge.setContentTheme(contentTheme)
        }
        
        // 设置待处理的内容
        if let pending = pendingContent {
            MuyaLogger.debug("设置待处理内容: \(pending.prefix(50))...", category: "coordinator")
            bridge.setMarkdown(pending)
            pendingContent = nil
        }
    }
    
    private func handleContentChangeMessage(body: [String: Any]) {
        guard let data = body["data"] as? [String: Any],
              let markdown = data["markdown"] as? String else {
            return
        }
        
        bridge.handleContentChange(markdown)
    }
    
    private func handleSelectionMessage(body: [String: Any]) {
        guard let data = body["data"] as? [String: Any],
              let selection = data["selection"] as? String else {
            return
        }
        
        bridge.onSelect?(selection)
    }
    
    private func handleErrorMessage(body: [String: Any]) {
        guard let data = body["data"] as? [String: Any],
              let message = data["message"] as? String else {
            return
        }
        
        MuyaLogger.error(message, category: "coordinator")
        parent.onError?(message)
    }
    
    private func handleOutlineChangeMessage(body: [String: Any]) {
        guard let data = body["data"] as? [String: Any],
              let outlineArray = data["outline"] as? [[String: Any]] else {
            return
        }
        
        let items = outlineArray.compactMap { OutlineItem(from: $0) }
        MuyaLogger.debug("大纲变化: \(items.count) 个标题", category: "coordinator")
        bridge.onOutlineChange?(items)
    }
    
    private func handleCounterChangeMessage(body: [String: Any]) {
        guard let data = body["data"] as? [String: Any],
              let counter = CounterInfo(from: data) else {
            return
        }
        
        MuyaLogger.debug("计数器变化: \(counter.wordCount) 词, \(counter.characterCount) 字符", category: "coordinator")
        bridge.onCounterChange?(counter)
    }
    
    private func handleHistoryChangeMessage(body: [String: Any]) {
        guard let data = body["data"] as? [String: Any],
              let state = HistoryState(from: data) else {
            return
        }
        
        bridge.onHistoryStateChange?(state)
    }
    
    private func handleImagePasteMessage(body: [String: Any], webView: WKWebView?) {
        guard let data = body["data"] as? [String: Any],
              let imageData = data["data"] as? String,
              let imageType = data["type"] as? String else {
            MuyaLogger.warning("图片粘贴消息缺少数据", category: "coordinator")
            return
        }
        
        let imageName = data["name"] as? String ?? "pasted_image"
        MuyaLogger.info("处理粘贴的图片: \(imageName), 类型: \(imageType)", category: "coordinator")
        
        // 使用 ImageHandler 处理图片
        let result = ImageHandler.shared.handlePastedImage(base64Data: imageData, mimeType: imageType)
        
        switch result {
        case .success(let relativePath):
            // 获取绝对路径
            if let absoluteURL = ImageHandler.shared.getAbsoluteURL(for: relativePath) {
                bridge.insertImage(url: absoluteURL.path, alt: imageName)
                MuyaLogger.info("图片已保存并插入: \(absoluteURL.path)", category: "coordinator")
            } else {
                // 如果无法获取绝对路径，直接使用 data URL
                bridge.insertImage(url: imageData, alt: imageName)
                MuyaLogger.info("图片以 data URL 插入", category: "coordinator")
            }
            
        case .failure(let error):
            MuyaLogger.error("处理粘贴图片失败: \(error.localizedDescription)", category: "coordinator")
            parent.onError?("图片保存失败: \(error.localizedDescription)")
        }
    }
    
    private func handleImageLoadErrorMessage(body: [String: Any]) {
        guard let data = body["data"] as? [String: Any],
              let imageUrl = data["imageUrl"] as? String else {
            return
        }
        
        let errorMessage = data["error"] as? String ?? "未知错误"
        MuyaLogger.warning("图片加载失败: \(imageUrl), 错误: \(errorMessage)", category: "coordinator")
    }
    
    private func handleConsoleLogMessage(body: [String: Any]) {
        guard let data = body["data"] as? [String: Any],
              let level = data["level"] as? String,
              let message = data["message"] as? String else {
            return
        }
        
        switch level {
        case "error":
            MuyaLogger.error("[JS] \(message)", category: "webview-console")
        case "warn":
            MuyaLogger.warning("[JS] \(message)", category: "webview-console")
        default:
            MuyaLogger.debug("[JS] \(message)", category: "webview-console")
        }
    }
}

#endif
