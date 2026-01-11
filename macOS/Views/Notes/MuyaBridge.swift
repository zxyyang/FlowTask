import Foundation
import WebKit

#if os(macOS)

// MARK: - MuyaBridge

/// Swift 与 JavaScript 之间的双向通信桥接类
/// 需求: 2.1, 2.2, 2.4
class MuyaBridge {
    
    // MARK: - Properties
    
    /// Weak reference to the WKWebView for JavaScript evaluation
    weak var webView: WKWebView?
    
    /// Callback when content changes in the editor
    var onContentChange: ((String) -> Void)?
    
    /// Callback when an error occurs
    var onError: ((MuyaError) -> Void)?
    
    /// Callback when the editor is ready
    var onReady: (() -> Void)?
    
    /// Callback when outline changes
    var onOutlineChange: (([OutlineItem]) -> Void)?
    
    /// Callback when counter changes
    var onCounterChange: ((CounterInfo) -> Void)?
    
    /// Callback when history state changes (undo/redo availability)
    var onHistoryStateChange: ((HistoryState) -> Void)?
    
    /// Callback when search results are updated
    var onSearchResult: ((SearchResult) -> Void)?
    
    /// Callback when editor gains focus
    var onFocus: (() -> Void)?
    
    /// Callback when editor loses focus
    var onBlur: (() -> Void)?
    
    /// Callback when selection changes
    var onSelect: ((String) -> Void)?
    
    /// Whether the editor is loaded and ready
    private(set) var isReady: Bool = false
    
    /// Content waiting to be set when the editor becomes ready
    private var pendingContent: String?
    
    /// The last content set from Swift (to avoid feedback loops)
    private(set) var lastSetContent: String = ""
    
    /// Maximum retry attempts for failed operations
    private let maxRetryAttempts: Int
    
    /// Base delay between retry attempts in seconds
    private let baseRetryDelay: TimeInterval
    
    /// Current retry count for operations
    private var retryCount: Int = 0
    
    /// Queue for serializing JavaScript operations
    private let operationQueue = DispatchQueue(label: "com.flowtask.muyabridge", qos: .userInteractive)
    
    /// Debounce timer for content changes
    private var contentChangeDebounceTimer: DispatchWorkItem?
    
    /// Debounce delay for content changes (50ms for near-instant save)
    /// 需求: 2.6
    static let defaultDebounceDelay: TimeInterval = 0.05
    var debounceDelay: TimeInterval
    
    /// 图片路径映射：data URL 的哈希 -> 原始路径
    private var imagePathMap: [String: String] = [:]
    
    // MARK: - Initialization
    
    /// Creates a new MuyaBridge instance
    /// - Parameters:
    ///   - webView: The WKWebView to communicate with
    ///   - maxRetryAttempts: Maximum number of retry attempts for failed operations (default: 3)
    ///   - baseRetryDelay: Base delay between retry attempts in seconds (default: 0.5)
    ///   - debounceDelay: Delay for debouncing content changes (default: 0.3)
    init(webView: WKWebView? = nil, 
         maxRetryAttempts: Int = 3, 
         baseRetryDelay: TimeInterval = 0.5,
         debounceDelay: TimeInterval = MuyaBridge.defaultDebounceDelay) {
        self.webView = webView
        self.maxRetryAttempts = maxRetryAttempts
        self.baseRetryDelay = baseRetryDelay
        self.debounceDelay = debounceDelay
    }
    
    // MARK: - Editor State
    
    /// Marks the editor as ready and processes any pending content
    func setEditorReady() {
        isReady = true
        retryCount = 0
        
        MuyaLogger.info("编辑器已就绪", category: "bridge")
        
        // Process pending content if any
        if let pending = pendingContent {
            MuyaLogger.debug("处理待设置内容: \(pending.prefix(50))...", category: "bridge")
            setMarkdown(pending)
            pendingContent = nil
        }
        
        onReady?()
    }
    
    /// Resets the bridge state (e.g., when the editor is reloaded)
    func reset() {
        MuyaLogger.info("桥接状态已重置", category: "bridge")
        isReady = false
        retryCount = 0
        pendingContent = nil
        lastSetContent = ""
        contentChangeDebounceTimer?.cancel()
        contentChangeDebounceTimer = nil
    }
    
    // MARK: - String Escaping
    
    /// Escapes a string for safe use in JavaScript
    /// 需求: 2.4
    /// - Parameter string: The string to escape
    /// - Returns: The escaped string
    static func escapeForJavaScript(_ string: String) -> String {
        var escaped = string
        escaped = escaped.replacingOccurrences(of: "\\", with: "\\\\")
        escaped = escaped.replacingOccurrences(of: "'", with: "\\'")
        escaped = escaped.replacingOccurrences(of: "\"", with: "\\\"")
        escaped = escaped.replacingOccurrences(of: "\n", with: "\\n")
        escaped = escaped.replacingOccurrences(of: "\r", with: "\\r")
        escaped = escaped.replacingOccurrences(of: "\t", with: "\\t")
        escaped = escaped.replacingOccurrences(of: "\u{2028}", with: "\\u2028")
        escaped = escaped.replacingOccurrences(of: "\u{2029}", with: "\\u2029")
        return escaped
    }
    
    /// Unescapes a JavaScript-escaped string
    /// - Parameter string: The escaped string
    /// - Returns: The unescaped string
    static func unescapeFromJavaScript(_ string: String) -> String {
        var unescaped = string
        unescaped = unescaped.replacingOccurrences(of: "\\u2029", with: "\u{2029}")
        unescaped = unescaped.replacingOccurrences(of: "\\u2028", with: "\u{2028}")
        unescaped = unescaped.replacingOccurrences(of: "\\t", with: "\t")
        unescaped = unescaped.replacingOccurrences(of: "\\r", with: "\r")
        unescaped = unescaped.replacingOccurrences(of: "\\n", with: "\n")
        unescaped = unescaped.replacingOccurrences(of: "\\\"", with: "\"")
        unescaped = unescaped.replacingOccurrences(of: "\\'", with: "'")
        unescaped = unescaped.replacingOccurrences(of: "\\\\", with: "\\")
        return unescaped
    }
    
    // MARK: - JavaScript Execution with Retry
    
    /// Executes JavaScript with retry logic
    /// 需求: 2.3, 1.4
    /// - Parameters:
    ///   - script: The JavaScript to execute
    ///   - operation: Name of the operation for logging
    ///   - webView: The WKWebView to use
    ///   - currentRetry: Current retry attempt
    ///   - completion: Optional completion handler
    private func executeJavaScript(
        _ script: String,
        operation: String,
        webView: WKWebView,
        currentRetry: Int = 0,
        completion: ((Result<Any?, MuyaError>) -> Void)? = nil
    ) {
        webView.evaluateJavaScript(script) { [weak self] result, error in
            guard let self = self else { return }
            
            if let error = error {
                let muyaError = MuyaError.javascriptError(error.localizedDescription)
                
                if currentRetry < self.maxRetryAttempts {
                    // 指数退避重试
                    let delay = self.baseRetryDelay * pow(2.0, Double(currentRetry))
                    MuyaLogger.warning("操作 '\(operation)' 失败，\(delay)秒后重试 (\(currentRetry + 1)/\(self.maxRetryAttempts))", category: "bridge")
                    
                    DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                        self?.executeJavaScript(script, operation: operation, webView: webView, currentRetry: currentRetry + 1, completion: completion)
                    }
                } else {
                    MuyaLogger.error("操作 '\(operation)' 在 \(self.maxRetryAttempts) 次重试后仍然失败", category: "bridge")
                    self.onError?(muyaError)
                    completion?(.failure(muyaError))
                }
                return
            }
            
            completion?(.success(result))
        }
    }
    
    // MARK: - Content Methods (需求: 3.1, 3.2, 3.3, 22.3)
    
    /// Sets markdown content in the editor
    /// - Parameter content: The markdown content to set
    func setMarkdown(_ content: String) {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else {
            pendingContent = content
            return
        }
        
        // 预处理图片路径，将本地图片转换为 data URL
        let processedContent = preprocessImagePaths(content)
        lastSetContent = content  // 保存原始内容
        
        MuyaLogger.debug("setMarkdown: 原始内容长度=\(content.count), 处理后长度=\(processedContent.count)", category: "bridge")
        
        // 检查是否包含图片
        if processedContent.contains("![") {
            MuyaLogger.debug("setMarkdown: 内容包含图片标记", category: "bridge")
        }
        
        let escapedContent = MuyaBridge.escapeForJavaScript(processedContent)
        let script = "window.muyaBridge.setValueDirect('\(escapedContent)');"
        
        MuyaLogger.debug("setMarkdown: 脚本长度=\(script.count)", category: "bridge")
        
        executeJavaScript(script, operation: "setMarkdown", webView: webView) { [weak self] result in
            switch result {
            case .success(let value):
                MuyaLogger.debug("setMarkdown: 执行成功, 返回值=\(String(describing: value))", category: "bridge")
                // 延迟替换图片占位符，等待 Muya 渲染完成
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                    self?.replaceImagePlaceholders()
                }
            case .failure(let error):
                MuyaLogger.error("setMarkdown: 执行失败, 错误=\(error.localizedDescription)", category: "bridge")
            }
        }
    }
    
    /// 预处理图片路径，将本地路径转换为可渲染的格式
    /// 支持绝对路径、相对路径、网络 URL
    /// 使用占位符 URL，然后通过 JavaScript 替换为实际图片
    private func preprocessImagePaths(_ content: String) -> String {
        // 清理上一次的占位符任务（当前实现不再使用占位符）
        pendingImageReplacements.removeAll()
        
        // 匹配 markdown 图片语法 ![alt](path)
        let pattern = #"!\[([^\]]*)\]\(([^)]+)\)"#
        guard let regex = try? NSRegularExpression(pattern: pattern, options: []) else {
            return content
        }
        
        var result = content
        let matches = regex.matches(in: content, options: [], range: NSRange(content.startIndex..., in: content))
        
        // 从后往前替换，避免索引偏移
        for match in matches.reversed() {
            guard let pathRange = Range(match.range(at: 2), in: content) else { continue }
            let path = String(content[pathRange])
            
            // 跳过已处理的路径
            if path.hasPrefix("data:") || path.hasPrefix("muya-local://") || path.hasPrefix("muya-placeholder://") {
                continue
            }
            
            // 网络图片直接保留
            if path.hasPrefix("http://") || path.hasPrefix("https://") {
                continue
            }
            
            // 处理本地路径
            var filePath: String?
            
            if path.hasPrefix("/") {
                // 绝对路径
                if FileManager.default.fileExists(atPath: path) {
                    filePath = path
                }
            } else if path.hasPrefix("file://") {
                // file:// URL
                let absPath = path.replacingOccurrences(of: "file://", with: "")
                if FileManager.default.fileExists(atPath: absPath) {
                    filePath = absPath
                }
            } else {
                // 相对路径
                if let docDir = ImageHandler.shared.documentDirectory {
                    let resolvedURL = docDir.appendingPathComponent(path)
                    if FileManager.default.fileExists(atPath: resolvedURL.path) {
                        filePath = resolvedURL.path
                    }
                }
            }
            
            // 生成占位符并保存映射
            if let filePath = filePath {
                // 将本地路径转换为自定义 scheme，便于 WKWebView 加载
                let muyaURL: String?
                if path.hasPrefix("/") || path.hasPrefix("file://") {
                    let absolutePath = path.hasPrefix("file://") ? path.replacingOccurrences(of: "file://", with: "") : path
                    muyaURL = MuyaURLSchemeHandler.customURLForAbsolutePath(absolutePath)?.absoluteString
                } else {
                    // 使用用户选择的文档目录作为相对路径基准
                    let cleanPath = path.hasPrefix("./") ? String(path.dropFirst(2)) : path
                    muyaURL = MuyaURLSchemeHandler.customURLForRelativePath(cleanPath)?.absoluteString
                }
                
                if let muyaURL = muyaURL, let fullRange = Range(match.range, in: result) {
                    let altRange = Range(match.range(at: 1), in: content)
                    let alt = altRange.map { String(content[$0]) } ?? ""
                    result.replaceSubrange(fullRange, with: "![\(alt)](\(muyaURL))")
                    
                    // 记录映射，便于导出时还原原始路径
                    imagePathMap[muyaURL] = path
                    
                    MuyaLogger.debug("图片路径转换: \(path) -> \(muyaURL)", category: "bridge")
                }
            } else {
                MuyaLogger.warning("图片文件不存在或无法读取: \(path)", category: "bridge")
            }
        }
        
        return result
    }
    
    /// 待处理的图片替换列表
    private var pendingImageReplacements: [(placeholder: String, originalPath: String, dataURL: String)] = []
    
    /// 在内容设置后替换图片占位符
    func replaceImagePlaceholders() {
        guard let webView = webView, isReady, !pendingImageReplacements.isEmpty else { return }
        
        for item in pendingImageReplacements {
            let escapedDataURL = MuyaBridge.escapeForJavaScript(item.dataURL)
            let script = """
            (function() {
                var images = document.querySelectorAll('img[src*="\(item.placeholder)"]');
                images.forEach(function(img) {
                    img.src = '\(escapedDataURL)';
                });
                return images.length;
            })();
            """
            
            webView.evaluateJavaScript(script) { result, error in
                if let count = result as? Int, count > 0 {
                    MuyaLogger.debug("替换了 \(count) 个图片占位符: \(item.placeholder)", category: "bridge")
                }
            }
        }
        
        pendingImageReplacements = []
    }
    
    /// 将 data URL 转换回原始路径
    private func revertDataURLsToOriginalPaths(_ content: String) -> String {
        var result = content
        
        // 1. 处理 muya-placeholder:// URL（使用映射表）
        let placeholderPattern = #"!\[([^\]]*)\]\((muya-placeholder://[a-zA-Z0-9]+)\)"#
        if let placeholderRegex = try? NSRegularExpression(pattern: placeholderPattern, options: []) {
            let placeholderMatches = placeholderRegex.matches(in: result, options: [], range: NSRange(result.startIndex..., in: result))
            
            for match in placeholderMatches.reversed() {
                guard let urlRange = Range(match.range(at: 2), in: result) else { continue }
                let placeholderURL = String(result[urlRange])
                let placeholderId = placeholderURL.replacingOccurrences(of: "muya-placeholder://", with: "")
                
                if let fullRange = Range(match.range, in: result) {
                    let altRange = Range(match.range(at: 1), in: result)
                    let alt = altRange.map { String(result[$0]) } ?? ""
                    
                    // 使用映射表中的原始路径
                    if let originalPath = imagePathMap[placeholderId] {
                        result.replaceSubrange(fullRange, with: "![\(alt)](\(originalPath))")
                        MuyaLogger.debug("placeholder URL 转换回原始路径: \(originalPath)", category: "bridge")
                    }
                }
            }
        }
        
        // 2. 处理 data URL（使用映射表）
        let dataURLPattern = #"!\[([^\]]*)\]\((data:[^)]+)\)"#
        if let dataRegex = try? NSRegularExpression(pattern: dataURLPattern, options: []) {
            let dataMatches = dataRegex.matches(in: result, options: [], range: NSRange(result.startIndex..., in: result))
            
            for match in dataMatches.reversed() {
                guard let urlRange = Range(match.range(at: 2), in: result) else { continue }
                let dataURL = String(result[urlRange])
                let dataURLHash = String(dataURL.hashValue)
                
                if let fullRange = Range(match.range, in: result) {
                    let altRange = Range(match.range(at: 1), in: result)
                    let alt = altRange.map { String(result[$0]) } ?? ""
                    
                    // 使用映射表中的原始路径
                    if let originalPath = imagePathMap[dataURLHash] {
                        result.replaceSubrange(fullRange, with: "![\(alt)](\(originalPath))")
                        MuyaLogger.debug("data URL 转换回原始路径: \(originalPath)", category: "bridge")
                    }
                    // 如果没有映射，保留 data URL（可能是粘贴的图片）
                }
            }
        }
        
        // 3. 处理 muya-local:// scheme URL（兼容旧格式）
        let schemePattern = #"!\[([^\]]*)\]\((muya-local://local/(?:absolute|relative)/[^)]+)\)"#
        if let schemeRegex = try? NSRegularExpression(pattern: schemePattern, options: []) {
            let schemeMatches = schemeRegex.matches(in: result, options: [], range: NSRange(result.startIndex..., in: result))
            
            for match in schemeMatches.reversed() {
                guard let urlRange = Range(match.range(at: 2), in: result) else { continue }
                let url = String(result[urlRange])
                
                if let fullRange = Range(match.range, in: result) {
                    let altRange = Range(match.range(at: 1), in: result)
                    let alt = altRange.map { String(result[$0]) } ?? ""
                    
                    // 优先使用映射表恢复原始路径，保留用户的写法（例如 ./images/...）
                    if let original = imagePathMap[url] {
                        result.replaceSubrange(fullRange, with: "![\(alt)](\(original))")
                        MuyaLogger.debug("scheme URL 使用映射转换回原始路径: \(original)", category: "bridge")
                        continue
                    }
                    
                    // 从 URL 中解析路径
                    let originalPath: String
                    if url.contains("/absolute/") {
                        originalPath = "/" + url.replacingOccurrences(of: "muya-local://local/absolute/", with: "")
                    } else {
                        originalPath = url.replacingOccurrences(of: "muya-local://local/relative/", with: "")
                    }
                    result.replaceSubrange(fullRange, with: "![\(alt)](\(originalPath))")
                    MuyaLogger.debug("scheme URL 转换回原始路径: \(originalPath)", category: "bridge")
                }
            }
        }
        
        // 4. 处理 file:// URL（兼容旧格式）
        let filePattern = #"!\[([^\]]*)\]\(file://([^)]+)\)"#
        if let fileRegex = try? NSRegularExpression(pattern: filePattern, options: []) {
            let fileMatches = fileRegex.matches(in: result, options: [], range: NSRange(result.startIndex..., in: result))
            
            for match in fileMatches.reversed() {
                guard let pathRange = Range(match.range(at: 2), in: result) else { continue }
                let path = String(result[pathRange])
                
                if let fullRange = Range(match.range, in: result) {
                    let altRange = Range(match.range(at: 1), in: result)
                    let alt = altRange.map { String(result[$0]) } ?? ""
                    result.replaceSubrange(fullRange, with: "![\(alt)](\(path))")
                }
            }
        }
        
        return result
    }
    
    /// 根据文件路径获取 MIME 类型
    private func mimeTypeForPath(_ path: String) -> String {
        let ext = (path as NSString).pathExtension.lowercased()
        switch ext {
        case "png": return "image/png"
        case "jpg", "jpeg": return "image/jpeg"
        case "gif": return "image/gif"
        case "webp": return "image/webp"
        case "svg": return "image/svg+xml"
        default: return "image/png"
        }
    }
    
    /// Gets the current markdown content from the editor
    /// - Returns: The markdown content
    func getMarkdown() async throws -> String {
        guard let webView = webView else {
            throw MuyaError.webViewUnavailable
        }
        
        guard isReady else {
            throw MuyaError.editorNotReady
        }
        
        return try await withCheckedThrowingContinuation { continuation in
            let script = "window.muyaBridge.getValue();"
            
            webView.evaluateJavaScript(script) { result, error in
                if let error = error {
                    continuation.resume(throwing: MuyaError.javascriptError(error.localizedDescription))
                    return
                }
                
                if let markdown = result as? String {
                    continuation.resume(returning: markdown)
                } else {
                    continuation.resume(returning: "")
                }
            }
        }
    }
    
    /// Gets the current markdown content from the editor (callback version)
    /// - Parameter completion: Callback with the markdown content or error
    func getMarkdown(completion: @escaping (Result<String, MuyaError>) -> Void) {
        guard let webView = webView else {
            completion(.failure(.webViewUnavailable))
            return
        }
        
        guard isReady else {
            completion(.failure(.editorNotReady))
            return
        }
        
        let script = "window.muyaBridge.getValue();"
        
        webView.evaluateJavaScript(script) { [weak self] result, error in
            if let error = error {
                self?.onError?(.javascriptError(error.localizedDescription))
                completion(.failure(.javascriptError(error.localizedDescription)))
                return
            }
            
            if let markdown = result as? String {
                completion(.success(markdown))
            } else {
                completion(.success(""))
            }
        }
    }
    
    /// Gets the current HTML content from the editor
    /// - Returns: The HTML content
    func getHTML() async throws -> String {
        guard let webView = webView else {
            throw MuyaError.webViewUnavailable
        }
        
        guard isReady else {
            throw MuyaError.editorNotReady
        }
        
        return try await withCheckedThrowingContinuation { continuation in
            let script = "window.muyaBridge.getHTML();"
            
            webView.evaluateJavaScript(script) { result, error in
                if let error = error {
                    continuation.resume(throwing: MuyaError.javascriptError(error.localizedDescription))
                    return
                }
                
                if let html = result as? String {
                    continuation.resume(returning: html)
                } else {
                    continuation.resume(returning: "")
                }
            }
        }
    }
    
    /// Gets the current HTML content from the editor (callback version)
    /// - Parameter completion: Callback with the HTML content or error
    func getHTML(completion: @escaping (Result<String, MuyaError>) -> Void) {
        guard let webView = webView else {
            completion(.failure(.webViewUnavailable))
            return
        }
        
        guard isReady else {
            completion(.failure(.editorNotReady))
            return
        }
        
        let script = "window.muyaBridge.getHTML();"
        
        webView.evaluateJavaScript(script) { [weak self] result, error in
            if let error = error {
                self?.onError?(.javascriptError(error.localizedDescription))
                completion(.failure(.javascriptError(error.localizedDescription)))
                return
            }
            
            if let html = result as? String {
                completion(.success(html))
            } else {
                completion(.success(""))
            }
        }
    }
    
    /// Inserts value at current cursor position
    /// - Parameters:
    ///   - value: The value to insert
    ///   - render: Whether to render the inserted content (default: true)
    func insertValue(_ value: String, render: Bool = true) {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else {
            onError?(.editorNotReady)
            return
        }
        
        let escapedValue = MuyaBridge.escapeForJavaScript(value)
        let script = "window.muyaBridge.insertValue('\(escapedValue)');"
        
        executeJavaScript(script, operation: "insertValue", webView: webView)
    }
    
    // MARK: - Debounced Content Change Handling
    
    /// Handles content change with debouncing
    /// 需求: 2.6
    /// - Parameter content: The new content
    func handleContentChange(_ content: String) {
        // Cancel previous timer
        contentChangeDebounceTimer?.cancel()
        
        // Create new debounced work item
        let workItem = DispatchWorkItem { [weak self] in
            guard let self = self else { return }
            
            // 将 data URL 转换回原始路径
            let processedContent = self.revertDataURLsToOriginalPaths(content)
            
            // 更新 lastSetContent 以防止反馈循环
            self.lastSetContent = processedContent
            
            MuyaLogger.debug("handleContentChange: 内容已变化，长度=\(processedContent.count)，通知回调", category: "bridge")
            
            // 始终通知内容变化，让上层决定是否需要保存
            self.onContentChange?(processedContent)
        }
        
        contentChangeDebounceTimer = workItem
        
        // 使用非常短的防抖延迟以实现近乎即时的保存
        let effectiveDelay = 0.05 // 50ms
        DispatchQueue.main.asyncAfter(deadline: .now() + effectiveDelay, execute: workItem)
    }
    
    /// 立即刷新内容变化（不使用防抖）
    /// 用于保存前确保内容是最新的
    func flushContentChange() {
        contentChangeDebounceTimer?.cancel()
        contentChangeDebounceTimer = nil
        
        guard let webView = webView, isReady else { return }
        
        let script = "window.muyaBridge.getValue();"
        webView.evaluateJavaScript(script) { [weak self] result, error in
            guard let self = self, let content = result as? String else { return }
            
            let processedContent = self.revertDataURLsToOriginalPaths(content)
            self.lastSetContent = processedContent
            self.onContentChange?(processedContent)
        }
    }
    
    // MARK: - Theme Methods (需求: 8.1, 8.3, 8.4)
    
    /// Sets the editor theme
    /// - Parameter theme: The theme to apply
    func setTheme(_ theme: MuyaTheme) {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else {
            MuyaLogger.warning("编辑器未就绪，无法设置主题", category: "bridge")
            return
        }
        
        let script = "window.muyaBridge.setTheme('\(theme.rawValue)');"
        executeJavaScript(script, operation: "setTheme", webView: webView)
    }
    
    /// Sets the content theme
    /// - Parameter theme: The content theme name
    func setContentTheme(_ theme: String) {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else { return }
        
        let escapedTheme = MuyaBridge.escapeForJavaScript(theme)
        let script = "window.muyaBridge.setContentTheme && window.muyaBridge.setContentTheme('\(escapedTheme)');"
        executeJavaScript(script, operation: "setContentTheme", webView: webView)
    }
    
    /// Sets the code highlighting theme
    /// - Parameter theme: The code theme name
    func setCodeTheme(_ theme: String) {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else { return }
        
        let escapedTheme = MuyaBridge.escapeForJavaScript(theme)
        let script = "window.muyaBridge.setCodeTheme && window.muyaBridge.setCodeTheme('\(escapedTheme)');"
        executeJavaScript(script, operation: "setCodeTheme", webView: webView)
    }
    
    // MARK: - Mode Methods (需求: 4.5)
    
    /// Sets the editing mode
    /// - Parameter mode: The mode to set
    func setMode(_ mode: MuyaMode) {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else { return }
        
        let script = "window.muyaBridge.setMode && window.muyaBridge.setMode('\(mode.rawValue)');"
        executeJavaScript(script, operation: "setMode", webView: webView)
    }
    
    /// Toggles source mode
    func toggleSourceMode() {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else { return }
        
        let script = "window.muyaBridge.toggleSourceMode && window.muyaBridge.toggleSourceMode();"
        executeJavaScript(script, operation: "toggleSourceMode", webView: webView)
    }
    
    // MARK: - Formatting Methods (需求: 6.1-6.4, 6.6, 11.1)
    
    /// Applies formatting to the current selection
    /// - Parameter type: The format type to apply
    func format(_ type: MuyaFormatType) {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else {
            onError?(.editorNotReady)
            return
        }
        
        let script = "window.muyaBridge.format('\(type.rawValue)');"
        executeJavaScript(script, operation: "format", webView: webView)
    }
    
    /// Applies bold formatting
    func bold() { format(.bold) }
    
    /// Applies italic formatting
    func italic() { format(.italic) }
    
    /// Applies strikethrough formatting
    func strikethrough() { format(.strikethrough) }
    
    /// Applies inline code formatting
    func inlineCode() { format(.inlineCode) }
    
    /// Inserts a link
    /// - Parameters:
    ///   - url: The URL for the link
    ///   - text: Optional text for the link
    func insertLink(url: String, text: String? = nil) {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else { return }
        
        let escapedUrl = MuyaBridge.escapeForJavaScript(url)
        let script: String
        
        if let text = text {
            let escapedText = MuyaBridge.escapeForJavaScript(text)
            script = "window.muyaBridge.insertLink('\(escapedUrl)', '\(escapedText)');"
        } else {
            script = "window.muyaBridge.insertLink('\(escapedUrl)');"
        }
        
        executeJavaScript(script, operation: "insertLink", webView: webView)
    }
    
    /// Inserts an image
    /// - Parameters:
    ///   - url: The URL or path of the image (supports local paths, network URLs, data URLs)
    ///   - alt: Optional alt text
    func insertImage(url: String, alt: String? = nil) {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else { return }
        
        var imageUrl = url
        
        // 处理不同类型的 URL
        if url.hasPrefix("data:") {
            // data URL 直接使用
            imageUrl = url
        } else if url.hasPrefix("http://") || url.hasPrefix("https://") {
            // 网络 URL 直接使用
            imageUrl = url
        } else if url.hasPrefix("muya-local://") {
            // 已经是 muya-local scheme，直接使用
            imageUrl = url
        } else if url.hasPrefix("file://") {
            // file:// URL，转换为 muya-local scheme
            let path = url.replacingOccurrences(of: "file://", with: "")
            if FileManager.default.fileExists(atPath: path) {
                imageUrl = "muya-local://local/absolute\(path)"
                imagePathMap[imageUrl] = path
            }
        } else if url.hasPrefix("/") && !url.hasPrefix("//") {
            // 绝对路径，转换为 muya-local scheme
            if FileManager.default.fileExists(atPath: url) {
                imageUrl = "muya-local://local/absolute\(url)"
                imagePathMap[imageUrl] = url
            }
        } else {
            // 相对路径，转换为 muya-local scheme
            if let docDir = ImageHandler.shared.documentDirectory {
                let resolvedPath = docDir.appendingPathComponent(url).path
                if FileManager.default.fileExists(atPath: resolvedPath) {
                    let cleanPath = url.hasPrefix("./") ? String(url.dropFirst(2)) : url
                    imageUrl = "muya-local://local/relative/\(cleanPath)"
                    imagePathMap[imageUrl] = url
                }
            }
        }
        
        let escapedUrl = MuyaBridge.escapeForJavaScript(imageUrl)
        let escapedAlt = alt.map { MuyaBridge.escapeForJavaScript($0) } ?? ""
        let script = "window.muyaBridge.insertImage('\(escapedUrl)', '\(escapedAlt)');"
        
        executeJavaScript(script, operation: "insertImage", webView: webView)
    }
    
    /// Inserts a code block
    /// - Parameter language: Optional programming language
    func insertCodeBlock(language: String? = nil) {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else { return }
        
        let lang = language.map { MuyaBridge.escapeForJavaScript($0) } ?? ""
        let script = "window.muyaBridge.insertCodeBlock('\(lang)');"
        
        executeJavaScript(script, operation: "insertCodeBlock", webView: webView)
    }
    
    /// Inserts a math block
    func insertMathBlock() {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else { return }
        
        let script = "window.muyaBridge.insertMathBlock();"
        executeJavaScript(script, operation: "insertMathBlock", webView: webView)
    }
    
    /// Inserts a table
    /// - Parameters:
    ///   - rows: Number of rows
    ///   - columns: Number of columns
    func insertTable(rows: Int, columns: Int) {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else { return }
        
        let script = "window.muyaBridge.insertTable(\(rows), \(columns));"
        executeJavaScript(script, operation: "insertTable", webView: webView)
    }
    
    /// Inserts a quote block
    func insertQuote() {
        format(MuyaFormatType.quote)
    }
    
    /// Inserts a horizontal rule
    func insertHorizontalRule() {
        format(MuyaFormatType.horizontalRule)
    }
    
    /// Increases indentation
    func indent() {
        format(MuyaFormatType.indent)
    }
    
    /// Decreases indentation
    func outdent() {
        format(MuyaFormatType.outdent)
    }
    
    // MARK: - History Methods (需求: 9.1, 9.2, 9.3)
    
    /// Undoes the last edit
    func undo() {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else { return }
        
        let script = "window.muyaBridge.undo();"
        executeJavaScript(script, operation: "undo", webView: webView)
    }
    
    /// Redoes the last undone edit
    func redo() {
        guard let webView = webView else {
            onError?(.webViewUnavailable)
            return
        }
        
        guard isReady else { return }
        
        let script = "window.muyaBridge.redo();"
        executeJavaScript(script, operation: "redo", webView: webView)
    }
    
    /// Checks if undo is available
    func canUndo() async -> Bool {
        guard let webView = webView, isReady else { return false }
        
        return await withCheckedContinuation { continuation in
            let script = "window.muyaBridge.canUndo();"
            webView.evaluateJavaScript(script) { result, _ in
                continuation.resume(returning: result as? Bool ?? false)
            }
        }
    }
    
    /// Checks if redo is available
    func canRedo() async -> Bool {
        guard let webView = webView, isReady else { return false }
        
        return await withCheckedContinuation { continuation in
            let script = "window.muyaBridge.canRedo();"
            webView.evaluateJavaScript(script) { result, _ in
                continuation.resume(returning: result as? Bool ?? false)
            }
        }
    }
    
    // MARK: - Search and Replace Methods (需求: 10.1-10.4)
    
    /// Searches for text in the editor
    /// - Parameters:
    ///   - query: The search query
    ///   - options: Search options
    /// - Returns: Search result
    func search(_ query: String, options: SearchOptions = SearchOptions()) async -> SearchResult {
        guard let webView = webView, isReady else {
            return SearchResult(success: false, count: 0, currentIndex: -1, error: "编辑器未就绪")
        }
        
        return await withCheckedContinuation { continuation in
            let escapedQuery = MuyaBridge.escapeForJavaScript(query)
            let optionsJSON = options.toJSONString()
            let script = "JSON.stringify(window.muyaBridge.search('\(escapedQuery)', \(optionsJSON)));"
            
            webView.evaluateJavaScript(script) { result, error in
                if let error = error {
                    continuation.resume(returning: SearchResult(success: false, count: 0, currentIndex: -1, error: error.localizedDescription))
                    return
                }
                
                if let jsonString = result as? String,
                   let data = jsonString.data(using: .utf8),
                   let dict = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
                   let searchResult = SearchResult(from: dict) {
                    continuation.resume(returning: searchResult)
                } else {
                    continuation.resume(returning: SearchResult.empty)
                }
            }
        }
    }
    
    /// Finds the next match
    func findNext() async -> SearchResult {
        guard let webView = webView, isReady else {
            return SearchResult(success: false, count: 0, currentIndex: -1, error: nil)
        }
        
        return await withCheckedContinuation { continuation in
            let script = "JSON.stringify(window.muyaBridge.findNext());"
            webView.evaluateJavaScript(script) { result, _ in
                if let jsonString = result as? String,
                   let data = jsonString.data(using: .utf8),
                   let dict = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
                   let searchResult = SearchResult(from: dict) {
                    continuation.resume(returning: searchResult)
                } else {
                    continuation.resume(returning: SearchResult.empty)
                }
            }
        }
    }
    
    /// Finds the previous match
    func findPrevious() async -> SearchResult {
        guard let webView = webView, isReady else {
            return SearchResult(success: false, count: 0, currentIndex: -1, error: nil)
        }
        
        return await withCheckedContinuation { continuation in
            let script = "JSON.stringify(window.muyaBridge.findPrevious());"
            webView.evaluateJavaScript(script) { result, _ in
                if let jsonString = result as? String,
                   let data = jsonString.data(using: .utf8),
                   let dict = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
                   let searchResult = SearchResult(from: dict) {
                    continuation.resume(returning: searchResult)
                } else {
                    continuation.resume(returning: SearchResult.empty)
                }
            }
        }
    }
    
    /// Replaces the current match
    /// - Parameters:
    ///   - query: The search query
    ///   - replacement: The replacement text
    /// - Returns: Replace result
    func replace(_ query: String, replacement: String) async -> ReplaceResult {
        guard let webView = webView, isReady else {
            return ReplaceResult(success: false, replaced: false, count: 0, error: "编辑器未就绪")
        }
        
        return await withCheckedContinuation { continuation in
            let escapedQuery = MuyaBridge.escapeForJavaScript(query)
            let escapedReplacement = MuyaBridge.escapeForJavaScript(replacement)
            let script = "JSON.stringify(window.muyaBridge.replace('\(escapedQuery)', '\(escapedReplacement)'));"
            
            webView.evaluateJavaScript(script) { result, error in
                if let error = error {
                    continuation.resume(returning: ReplaceResult(success: false, replaced: false, count: 0, error: error.localizedDescription))
                    return
                }
                
                if let jsonString = result as? String,
                   let data = jsonString.data(using: .utf8),
                   let dict = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
                   let replaceResult = ReplaceResult(from: dict) {
                    continuation.resume(returning: replaceResult)
                } else {
                    continuation.resume(returning: ReplaceResult(success: false, replaced: false, count: 0, error: nil))
                }
            }
        }
    }
    
    /// Replaces all matches
    /// - Parameters:
    ///   - query: The search query
    ///   - replacement: The replacement text
    ///   - options: Search options
    /// - Returns: Replace result
    func replaceAll(_ query: String, replacement: String, options: SearchOptions = SearchOptions()) async -> ReplaceResult {
        guard let webView = webView, isReady else {
            return ReplaceResult(success: false, replaced: false, count: 0, error: "编辑器未就绪")
        }
        
        return await withCheckedContinuation { continuation in
            let escapedQuery = MuyaBridge.escapeForJavaScript(query)
            let escapedReplacement = MuyaBridge.escapeForJavaScript(replacement)
            let optionsJSON = options.toJSONString()
            let script = "JSON.stringify(window.muyaBridge.replaceAll('\(escapedQuery)', '\(escapedReplacement)', \(optionsJSON)));"
            
            webView.evaluateJavaScript(script) { result, error in
                if let error = error {
                    continuation.resume(returning: ReplaceResult(success: false, replaced: false, count: 0, error: error.localizedDescription))
                    return
                }
                
                if let jsonString = result as? String,
                   let data = jsonString.data(using: .utf8),
                   let dict = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
                   let replaceResult = ReplaceResult(from: dict) {
                    continuation.resume(returning: replaceResult)
                } else {
                    continuation.resume(returning: ReplaceResult(success: false, replaced: false, count: 0, error: nil))
                }
            }
        }
    }
    
    // MARK: - Focus Methods (需求: 21.1, 21.2, 21.5, 21.6)
    
    /// Focuses the editor
    func focus() {
        guard let webView = webView, isReady else { return }
        let script = "window.muyaBridge.focus();"
        executeJavaScript(script, operation: "focus", webView: webView)
    }
    
    /// Removes focus from the editor
    func blur() {
        guard let webView = webView, isReady else { return }
        let script = "window.muyaBridge.blur();"
        executeJavaScript(script, operation: "blur", webView: webView)
    }
    
    /// Disables the editor
    func disabled() {
        guard let webView = webView, isReady else { return }
        let script = "window.muyaBridge.disable();"
        executeJavaScript(script, operation: "disable", webView: webView)
    }
    
    /// Enables the editor
    func enable() {
        guard let webView = webView, isReady else { return }
        let script = "window.muyaBridge.enable();"
        executeJavaScript(script, operation: "enable", webView: webView)
    }
    
    // MARK: - Selection Methods (需求: 22.1, 22.2)
    
    /// Gets the current selection
    func getSelection() async -> String? {
        guard let webView = webView, isReady else { return nil }
        
        return await withCheckedContinuation { continuation in
            let script = "window.muyaBridge.getSelection();"
            webView.evaluateJavaScript(script) { result, _ in
                continuation.resume(returning: result as? String)
            }
        }
    }
    
    /// Gets the cursor position
    func getCursorPosition() async -> CursorPosition? {
        guard let webView = webView, isReady else { return nil }
        
        return await withCheckedContinuation { continuation in
            let script = "JSON.stringify(window.muyaBridge.getCursorPosition());"
            webView.evaluateJavaScript(script) { result, _ in
                if let jsonString = result as? String,
                   let data = jsonString.data(using: .utf8),
                   let dict = try? JSONSerialization.jsonObject(with: data) as? [String: Any] {
                    continuation.resume(returning: CursorPosition(from: dict))
                } else {
                    continuation.resume(returning: nil)
                }
            }
        }
    }
    
    // MARK: - Outline Methods (需求: 18.1, 18.3)
    
    /// Gets the document outline
    func getOutline() async -> [OutlineItem] {
        guard let webView = webView, isReady else { return [] }
        
        return await withCheckedContinuation { continuation in
            let script = "JSON.stringify(window.muyaBridge.getOutline());"
            webView.evaluateJavaScript(script) { result, _ in
                if let jsonString = result as? String,
                   let data = jsonString.data(using: .utf8),
                   let array = try? JSONSerialization.jsonObject(with: data) as? [[String: Any]] {
                    let items = array.compactMap { OutlineItem(from: $0) }
                    continuation.resume(returning: items)
                } else {
                    continuation.resume(returning: [])
                }
            }
        }
    }
    
    /// Scrolls to a heading
    /// - Parameter headingId: The heading ID to scroll to
    func scrollToHeading(_ headingId: String) {
        guard let webView = webView, isReady else { return }
        let escapedId = MuyaBridge.escapeForJavaScript(headingId)
        let script = "window.muyaBridge.scrollToHeading('\(escapedId)');"
        executeJavaScript(script, operation: "scrollToHeading", webView: webView)
    }
    
    // MARK: - Counter Methods (需求: 19.1, 19.2)
    
    /// Gets the word count
    func getWordCount() async -> Int {
        guard let webView = webView, isReady else { return 0 }
        
        return await withCheckedContinuation { continuation in
            let script = "JSON.stringify(window.muyaBridge.getCounter());"
            webView.evaluateJavaScript(script) { result, _ in
                if let jsonString = result as? String,
                   let data = jsonString.data(using: .utf8),
                   let dict = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
                   let counter = CounterInfo(from: dict) {
                    continuation.resume(returning: counter.wordCount)
                } else {
                    continuation.resume(returning: 0)
                }
            }
        }
    }
    
    /// Gets the character count
    func getCharacterCount() async -> Int {
        guard let webView = webView, isReady else { return 0 }
        
        return await withCheckedContinuation { continuation in
            let script = "JSON.stringify(window.muyaBridge.getCounter());"
            webView.evaluateJavaScript(script) { result, _ in
                if let jsonString = result as? String,
                   let data = jsonString.data(using: .utf8),
                   let dict = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
                   let counter = CounterInfo(from: dict) {
                    continuation.resume(returning: counter.characterCount)
                } else {
                    continuation.resume(returning: 0)
                }
            }
        }
    }
    
    // MARK: - Task List Methods (需求: 23.6, 23.7, 23.8)
    
    /// Collapses all task lists
    func collapseAllTaskLists() {
        guard let webView = webView, isReady else { return }
        let script = "window.muyaBridge.collapseAllTaskLists();"
        executeJavaScript(script, operation: "collapseAllTaskLists", webView: webView)
    }
    
    /// Expands all task lists
    func expandAllTaskLists() {
        guard let webView = webView, isReady else { return }
        let script = "window.muyaBridge.expandAllTaskLists();"
        executeJavaScript(script, operation: "expandAllTaskLists", webView: webView)
    }
    
    /// Gets task list collapse states
    func getTaskListCollapseStates() async -> [String: Bool] {
        guard let webView = webView, isReady else { return [:] }
        
        return await withCheckedContinuation { continuation in
            let script = "JSON.stringify(window.muyaBridge.getTaskListCollapseStates());"
            webView.evaluateJavaScript(script) { result, _ in
                if let jsonString = result as? String,
                   let data = jsonString.data(using: .utf8),
                   let dict = try? JSONSerialization.jsonObject(with: data) as? [String: Bool] {
                    continuation.resume(returning: dict)
                } else {
                    continuation.resume(returning: [:])
                }
            }
        }
    }
    
    /// Restores task list collapse states
    /// - Parameter states: The states to restore
    func restoreTaskListCollapseStates(_ states: [String: Bool]) {
        guard let webView = webView, isReady else { return }
        
        if let data = try? JSONSerialization.data(withJSONObject: states),
           let jsonString = String(data: data, encoding: .utf8) {
            let script = "window.muyaBridge.restoreTaskListCollapseStates(\(jsonString));"
            executeJavaScript(script, operation: "restoreTaskListCollapseStates", webView: webView)
        }
    }
    
    // MARK: - Utility Methods (需求: 24.1, 36.4)
    
    /// Shows a tip message
    /// - Parameters:
    ///   - message: The message to show
    ///   - duration: Duration in milliseconds (default: 2000)
    func showTip(_ message: String, duration: Int = 2000) {
        guard let webView = webView, isReady else { return }
        let escapedMessage = MuyaBridge.escapeForJavaScript(message)
        let script = "window.muyaBridge.showTip('\(escapedMessage)', \(duration));"
        executeJavaScript(script, operation: "showTip", webView: webView)
    }
    
    /// Sets the locale
    /// - Parameter locale: The locale code (e.g., "zh", "en")
    func setLocale(_ locale: String) {
        guard let webView = webView, isReady else { return }
        let escapedLocale = MuyaBridge.escapeForJavaScript(locale)
        let script = "window.muyaBridge.setLocale('\(escapedLocale)');"
        executeJavaScript(script, operation: "setLocale", webView: webView)
    }
}

#endif
