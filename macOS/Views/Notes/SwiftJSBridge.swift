import Foundation
import WebKit

#if os(macOS)

// MARK: - SwiftJSBridge

/// A bridge class for bidirectional communication between Swift and JavaScript in the Muya editor.
/// This class encapsulates all Swift-to-JavaScript method calls and provides error handling with retry logic.
/// Requirements: 3.1, 3.2, 3.7, 19.1, 19.2, 19.4
class SwiftJSBridge {
    
    // MARK: - Properties
    
    /// Weak reference to the WKWebView for JavaScript evaluation
    weak var webView: WKWebView?
    
    /// Callback when content changes in the editor
    var onContentChange: ((String) -> Void)?
    
    /// Callback when an error occurs
    var onError: ((MuyaError) -> Void)?
    
    /// Callback when the editor is ready
    var onReady: (() -> Void)?
    
    /// Callback when cursor position changes
    var onCursorChange: ((CursorPosition) -> Void)?
    
    /// Whether the editor is loaded and ready
    private(set) var isReady: Bool = false
    
    /// Content waiting to be set when the editor becomes ready
    private var pendingContent: String?
    
    /// The last content set from Swift (to avoid feedback loops)
    private(set) var lastSetContent: String = ""
    
    /// Maximum retry attempts for failed operations
    private let maxRetryAttempts: Int
    
    /// Delay between retry attempts in seconds
    private let retryDelay: TimeInterval
    
    /// Current retry count for operations
    private var retryCount: Int = 0
    
    /// Queue for serializing JavaScript operations
    private let operationQueue = DispatchQueue(label: "com.flowtask.swiftjsbridge", qos: .userInteractive)
    
    // MARK: - Initialization
    
    /// Creates a new SwiftJSBridge instance
    /// - Parameters:
    ///   - webView: The WKWebView to communicate with
    ///   - maxRetryAttempts: Maximum number of retry attempts for failed operations (default: 3)
    ///   - retryDelay: Delay between retry attempts in seconds (default: 0.5)
    init(webView: WKWebView? = nil, maxRetryAttempts: Int = 3, retryDelay: TimeInterval = 0.5) {
        self.webView = webView
        self.maxRetryAttempts = maxRetryAttempts
        self.retryDelay = retryDelay
    }
    
    // MARK: - Editor State
    
    /// Marks the editor as ready and processes any pending content
    func setEditorReady() {
        isReady = true
        retryCount = 0
        
        MuyaLogger.info("Editor marked as ready", category: "bridge")
        
        // Process pending content if any
        if let pending = pendingContent {
            MuyaLogger.debug("Processing pending content: \(pending.prefix(50))...", category: "bridge")
            setMarkdown(pending)
            pendingContent = nil
        }
        
        onReady?()
    }
    
    /// Resets the bridge state (e.g., when the editor is reloaded)
    func reset() {
        MuyaLogger.info("Bridge state reset", category: "bridge")
        isReady = false
        retryCount = 0
        pendingContent = nil
        lastSetContent = ""
    }

    
    // MARK: - Content Methods
    
    /// Sets markdown content in the editor
    /// - Parameter content: The markdown content to set
    func setMarkdown(_ content: String) {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            pendingContent = content
            return
        }
        
        lastSetContent = content
        
        let escapedContent = escapeForJavaScript(content)
        let script = "window.muyaBridge.setMarkdown('\(escapedContent)');"
        
        executeJavaScript(script, operation: "setMarkdown", webView: webView)
    }
    
    /// Gets the current markdown content from the editor
    /// - Parameter completion: Callback with the markdown content or nil if failed
    func getMarkdown(completion: @escaping (Result<String, MuyaError>) -> Void) {
        guard let webView = webView else {
            completion(.failure(.bridgeCommunicationFailed("WebView is not available")))
            return
        }
        
        guard isReady else {
            completion(.failure(.bridgeCommunicationFailed("Editor is not ready")))
            return
        }
        
        let script = "window.muyaBridge.getMarkdown();"
        
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
    
    /// Gets the current editor state as JSON
    /// - Parameter completion: Callback with the state JSON or nil if failed
    func getState(completion: @escaping (Result<String?, MuyaError>) -> Void) {
        guard let webView = webView else {
            completion(.failure(.bridgeCommunicationFailed("WebView is not available")))
            return
        }
        
        guard isReady else {
            completion(.failure(.bridgeCommunicationFailed("Editor is not ready")))
            return
        }
        
        let script = "window.muyaBridge.getState();"
        
        webView.evaluateJavaScript(script) { [weak self] result, error in
            if let error = error {
                self?.onError?(.javascriptError(error.localizedDescription))
                completion(.failure(.javascriptError(error.localizedDescription)))
                return
            }
            
            completion(.success(result as? String))
        }
    }
    
    // MARK: - Theme Methods
    
    /// Sets the editor theme
    /// - Parameter theme: The theme to apply
    func setTheme(_ theme: MuyaTheme) {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        let script = "window.muyaBridge.setTheme('\(theme.rawValue)');"
        
        webView.evaluateJavaScript(script) { [weak self] _, error in
            if let error = error {
                self?.onError?(.javascriptError("Failed to set theme: \(error.localizedDescription)"))
            }
        }
    }
    
    // MARK: - Formatting Methods
    
    /// Applies formatting to the current selection
    /// - Parameter type: The format type to apply
    /// Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7
    func format(_ type: FormatType) {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let script = "window.muyaBridge.format('\(type.rawValue)');"
        
        executeJavaScript(script, operation: "format", webView: webView)
    }
    
    /// Applies bold formatting to the current selection
    /// Requirements: 6.1
    func bold() {
        format(.bold)
    }
    
    /// Applies italic formatting to the current selection
    /// Requirements: 6.2
    func italic() {
        format(.italic)
    }
    
    /// Applies strikethrough formatting to the current selection
    /// Requirements: 6.3
    func strikethrough() {
        format(.strikethrough)
    }
    
    /// Applies inline code formatting to the current selection
    /// Requirements: 6.4
    func inlineCode() {
        format(.inlineCode)
    }
    
    /// Inserts a link at the current selection
    /// - Parameters:
    ///   - url: The URL for the link
    ///   - text: Optional text for the link (uses selection if nil)
    /// Requirements: 6.5
    func insertLink(url: String, text: String? = nil) {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let escapedUrl = escapeForJavaScript(url)
        let escapedText = text.map { escapeForJavaScript($0) }
        
        let script: String
        if let text = escapedText {
            script = "window.muyaBridge.insertLink('\(escapedUrl)', '\(text)');"
        } else {
            script = "window.muyaBridge.insertLink('\(escapedUrl)');"
        }
        
        executeJavaScript(script, operation: "insertLink", webView: webView)
    }
    
    /// Inserts an image at the current cursor position
    /// - Parameters:
    ///   - url: The URL or path of the image
    ///   - alt: Optional alt text for the image
    /// Requirements: 6.6
    func insertImage(url: String, alt: String? = nil) {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        // 将绝对路径转换为自定义 scheme URL
        var imageUrl = url
        if url.hasPrefix("/") {
            if let customURL = MuyaURLSchemeHandler.customURLForAbsolutePath(url) {
                imageUrl = customURL.absoluteString
            }
        }
        
        let escapedUrl = escapeForJavaScript(imageUrl)
        let escapedAlt = alt.map { escapeForJavaScript($0) } ?? ""
        
        let script = "window.muyaBridge.insertImage('\(escapedUrl)', '\(escapedAlt)');"
        
        executeJavaScript(script, operation: "insertImage", webView: webView)
    }
    
    /// Applies inline math formatting to the current selection
    /// Requirements: 10.1
    func inlineMath() {
        format(.inlineMath)
    }
    
    /// Increases indentation of the current block
    /// Requirements: 13.6
    func indent() {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let script = "window.muyaBridge.indent();"
        
        executeJavaScript(script, operation: "indent", webView: webView)
    }
    
    /// Decreases indentation of the current block
    /// Requirements: 13.7
    func outdent() {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let script = "window.muyaBridge.outdent();"
        
        executeJavaScript(script, operation: "outdent", webView: webView)
    }
    
    // MARK: - History Methods
    
    /// Callback when history state changes (undo/redo availability)
    var onHistoryStateChange: ((HistoryState) -> Void)?
    
    /// Undoes the last edit
    /// Requirements: 14.1, 14.2, 14.4
    func undo() {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let script = "window.muyaBridge.undo();"
        
        executeJavaScript(script, operation: "undo", webView: webView)
    }
    
    /// Redoes the last undone edit
    /// Requirements: 14.1, 14.3, 14.4
    func redo() {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let script = "window.muyaBridge.redo();"
        
        executeJavaScript(script, operation: "redo", webView: webView)
    }
    
    /// Checks if undo is available
    /// Requirements: 14.1
    /// - Parameter completion: Callback with boolean indicating if undo is available
    func canUndo(completion: @escaping (Bool) -> Void) {
        guard let webView = webView else {
            completion(false)
            return
        }
        
        guard isReady else {
            completion(false)
            return
        }
        
        let script = "window.muyaBridge.canUndo();"
        
        webView.evaluateJavaScript(script) { result, error in
            if let canUndo = result as? Bool {
                completion(canUndo)
            } else {
                completion(false)
            }
        }
    }
    
    /// Checks if redo is available
    /// Requirements: 14.1
    /// - Parameter completion: Callback with boolean indicating if redo is available
    func canRedo(completion: @escaping (Bool) -> Void) {
        guard let webView = webView else {
            completion(false)
            return
        }
        
        guard isReady else {
            completion(false)
            return
        }
        
        let script = "window.muyaBridge.canRedo();"
        
        webView.evaluateJavaScript(script) { result, error in
            if let canRedo = result as? Bool {
                completion(canRedo)
            } else {
                completion(false)
            }
        }
    }
    
    /// Gets the current history state (undo/redo availability)
    /// Requirements: 14.1
    /// - Parameter completion: Callback with the history state
    func getHistoryState(completion: @escaping (HistoryState) -> Void) {
        guard let webView = webView else {
            completion(HistoryState(canUndo: false, canRedo: false))
            return
        }
        
        guard isReady else {
            completion(HistoryState(canUndo: false, canRedo: false))
            return
        }
        
        let script = "window.muyaBridge.getHistoryState();"
        
        webView.evaluateJavaScript(script) { result, error in
            if let dict = result as? [String: Any],
               let canUndo = dict["canUndo"] as? Bool,
               let canRedo = dict["canRedo"] as? Bool {
                let undoStackSize = dict["undoStackSize"] as? Int
                let redoStackSize = dict["redoStackSize"] as? Int
                completion(HistoryState(
                    canUndo: canUndo,
                    canRedo: canRedo,
                    undoStackSize: undoStackSize,
                    redoStackSize: redoStackSize
                ))
            } else {
                completion(HistoryState(canUndo: false, canRedo: false))
            }
        }
    }
    
    /// Clears the undo/redo history
    /// Requirements: 14.1
    func clearHistory() {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let script = "window.muyaBridge.clearHistory();"
        
        executeJavaScript(script, operation: "clearHistory", webView: webView)
    }

    
    // MARK: - Search and Replace Methods
    
    /// Callback when search results are updated
    var onSearchResult: ((SearchResult) -> Void)?
    
    /// Callback when replace operation completes
    var onReplaceResult: ((ReplaceResult) -> Void)?
    
    /// Searches for text in the editor
    /// - Parameters:
    ///   - query: The search query
    ///   - options: Search options
    ///   - completion: Optional callback with search result
    /// Requirements: 15.1, 15.2
    func search(_ query: String, options: SearchOptions = SearchOptions(), completion: ((SearchResult) -> Void)? = nil) {
        guard let webView = webView else {
            let result = SearchResult(success: false, count: 0, currentIndex: -1, error: "WebView is not available")
            completion?(result)
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            let result = SearchResult(success: false, count: 0, currentIndex: -1, error: "Editor is not ready")
            completion?(result)
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let escapedQuery = escapeForJavaScript(query)
        let optionsJSON = options.toJSONString()
        let script = "window.muyaBridge.search('\(escapedQuery)', \(optionsJSON));"
        
        webView.evaluateJavaScript(script) { [weak self] result, error in
            if let error = error {
                let searchResult = SearchResult(success: false, count: 0, currentIndex: -1, error: error.localizedDescription)
                completion?(searchResult)
                self?.onError?(.javascriptError(error.localizedDescription))
                return
            }
            
            if let dict = result as? [String: Any] {
                let success = dict["success"] as? Bool ?? false
                let count = dict["count"] as? Int ?? 0
                let searchResult = SearchResult(success: success, count: count, currentIndex: 0, error: nil)
                completion?(searchResult)
                self?.onSearchResult?(searchResult)
            } else {
                let searchResult = SearchResult(success: true, count: 0, currentIndex: -1, error: nil)
                completion?(searchResult)
            }
        }
    }
    
    /// Finds the next match
    /// Requirements: 15.3
    func findNext(completion: ((SearchResult) -> Void)? = nil) {
        find(direction: "next", completion: completion)
    }
    
    /// Finds the previous match
    /// Requirements: 15.3
    func findPrevious(completion: ((SearchResult) -> Void)? = nil) {
        find(direction: "previous", completion: completion)
    }
    
    /// Finds the next or previous match
    /// - Parameters:
    ///   - direction: "next" or "previous"
    ///   - completion: Optional callback with search result
    /// Requirements: 15.3
    func find(direction: String, completion: ((SearchResult) -> Void)? = nil) {
        guard let webView = webView else {
            let result = SearchResult(success: false, count: 0, currentIndex: -1, error: "WebView is not available")
            completion?(result)
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            let result = SearchResult(success: false, count: 0, currentIndex: -1, error: "Editor is not ready")
            completion?(result)
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let escapedDirection = escapeForJavaScript(direction)
        let script = "window.muyaBridge.find('\(escapedDirection)');"
        
        webView.evaluateJavaScript(script) { [weak self] result, error in
            if let error = error {
                let searchResult = SearchResult(success: false, count: 0, currentIndex: -1, error: error.localizedDescription)
                completion?(searchResult)
                self?.onError?(.javascriptError(error.localizedDescription))
                return
            }
            
            if let dict = result as? [String: Any] {
                let success = dict["success"] as? Bool ?? false
                let currentIndex = dict["currentIndex"] as? Int ?? -1
                let searchResult = SearchResult(success: success, count: 0, currentIndex: currentIndex, error: nil)
                completion?(searchResult)
                self?.onSearchResult?(searchResult)
            } else {
                let searchResult = SearchResult(success: true, count: 0, currentIndex: -1, error: nil)
                completion?(searchResult)
            }
        }
    }
    
    /// Gets the current search state
    /// - Parameter completion: Callback with search state
    func getSearchState(completion: @escaping (SearchState) -> Void) {
        guard let webView = webView else {
            completion(SearchState(query: "", count: 0, currentIndex: -1, options: SearchOptions()))
            return
        }
        
        guard isReady else {
            completion(SearchState(query: "", count: 0, currentIndex: -1, options: SearchOptions()))
            return
        }
        
        let script = "window.muyaBridge.getSearchState();"
        
        webView.evaluateJavaScript(script) { result, error in
            if let dict = result as? [String: Any] {
                let query = dict["query"] as? String ?? ""
                let count = dict["count"] as? Int ?? 0
                let currentIndex = dict["currentIndex"] as? Int ?? -1
                
                var options = SearchOptions()
                if let optionsDict = dict["options"] as? [String: Any] {
                    options.isCaseSensitive = optionsDict["caseSensitive"] as? Bool ?? false
                    options.isWholeWord = optionsDict["wholeWord"] as? Bool ?? false
                    options.isRegexp = optionsDict["regexp"] as? Bool ?? false
                }
                
                completion(SearchState(query: query, count: count, currentIndex: currentIndex, options: options))
            } else {
                completion(SearchState(query: "", count: 0, currentIndex: -1, options: SearchOptions()))
            }
        }
    }
    
    /// Clears the current search
    func clearSearch() {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            return
        }
        
        let script = "window.muyaBridge.clearSearch();"
        
        webView.evaluateJavaScript(script) { _, _ in }
    }
    
    /// Replaces the current match
    /// - Parameters:
    ///   - replacement: The replacement text
    ///   - options: Replace options
    ///   - completion: Optional callback with replace result
    /// Requirements: 15.3, 15.4
    func replace(_ replacement: String, options: ReplaceOptions = ReplaceOptions(), completion: ((ReplaceResult) -> Void)? = nil) {
        guard let webView = webView else {
            let result = ReplaceResult(success: false, replaced: false, count: 0, error: "WebView is not available")
            completion?(result)
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            let result = ReplaceResult(success: false, replaced: false, count: 0, error: "Editor is not ready")
            completion?(result)
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let escapedReplacement = escapeForJavaScript(replacement)
        let optionsJSON = options.toJSONString()
        let script = "window.muyaBridge.replace('\(escapedReplacement)', \(optionsJSON));"
        
        webView.evaluateJavaScript(script) { [weak self] result, error in
            if let error = error {
                let replaceResult = ReplaceResult(success: false, replaced: false, count: 0, error: error.localizedDescription)
                completion?(replaceResult)
                self?.onError?(.javascriptError(error.localizedDescription))
                return
            }
            
            if let dict = result as? [String: Any] {
                let success = dict["success"] as? Bool ?? false
                let replaced = dict["replaced"] as? Bool ?? false
                let replaceResult = ReplaceResult(success: success, replaced: replaced, count: replaced ? 1 : 0, error: nil)
                completion?(replaceResult)
                self?.onReplaceResult?(replaceResult)
            } else {
                let replaceResult = ReplaceResult(success: true, replaced: false, count: 0, error: nil)
                completion?(replaceResult)
            }
        }
    }
    
    /// Replaces all matches
    /// - Parameters:
    ///   - query: The search query
    ///   - replacement: The replacement text
    ///   - options: Search options
    ///   - completion: Optional callback with replace result
    /// Requirements: 15.4
    func replaceAll(_ query: String, replacement: String, options: SearchOptions = SearchOptions(), completion: ((ReplaceResult) -> Void)? = nil) {
        guard let webView = webView else {
            let result = ReplaceResult(success: false, replaced: false, count: 0, error: "WebView is not available")
            completion?(result)
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            let result = ReplaceResult(success: false, replaced: false, count: 0, error: "Editor is not ready")
            completion?(result)
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let escapedQuery = escapeForJavaScript(query)
        let escapedReplacement = escapeForJavaScript(replacement)
        let optionsJSON = options.toJSONString()
        let script = "window.muyaBridge.replaceAll('\(escapedQuery)', '\(escapedReplacement)', \(optionsJSON));"
        
        webView.evaluateJavaScript(script) { [weak self] result, error in
            if let error = error {
                let replaceResult = ReplaceResult(success: false, replaced: false, count: 0, error: error.localizedDescription)
                completion?(replaceResult)
                self?.onError?(.javascriptError(error.localizedDescription))
                return
            }
            
            if let dict = result as? [String: Any] {
                let success = dict["success"] as? Bool ?? false
                let count = dict["count"] as? Int ?? 0
                let replaceResult = ReplaceResult(success: success, replaced: count > 0, count: count, error: nil)
                completion?(replaceResult)
                self?.onReplaceResult?(replaceResult)
            } else {
                let replaceResult = ReplaceResult(success: true, replaced: false, count: 0, error: nil)
                completion?(replaceResult)
            }
        }
    }
    
    // MARK: - Focus Methods
    
    /// Callback when an image is pasted from clipboard
    /// Requirements: 12.1, 12.2, 12.3
    var onImagePaste: ((ImagePasteEvent) -> Void)?
    
    /// Callback when an image fails to load
    /// Requirements: 12.5
    var onImageLoadError: ((ImageLoadErrorEvent) -> Void)?
    
    /// Provides the URL for a pasted image after Swift has stored it
    /// - Parameters:
    ///   - pasteId: The unique identifier from the paste event
    ///   - imageUrl: The local URL/path where the image was stored
    /// Requirements: 12.1, 12.2, 12.3
    func provideImageUrl(pasteId: String, imageUrl: String) {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let escapedUrl = escapeForJavaScript(imageUrl)
        let escapedPasteId = escapeForJavaScript(pasteId)
        let script = "window.muyaBridge.provideImageUrl('\(escapedPasteId)', '\(escapedUrl)');"
        
        executeJavaScript(script, operation: "provideImageUrl", webView: webView)
    }
    
    /// Reports an error for a pasted image that couldn't be stored
    /// - Parameters:
    ///   - pasteId: The unique identifier from the paste event
    ///   - error: The error message
    /// Requirements: 12.3
    func reportImagePasteError(pasteId: String, error: String) {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let escapedPasteId = escapeForJavaScript(pasteId)
        let escapedError = escapeForJavaScript(error)
        let script = "window.muyaBridge.reportImagePasteError('\(escapedPasteId)', '\(escapedError)');"
        
        executeJavaScript(script, operation: "reportImagePasteError", webView: webView)
    }
    
    /// Focuses the editor
    func focus() {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else { return }
        
        let script = "window.muyaBridge.focus();"
        
        webView.evaluateJavaScript(script) { _, _ in }
    }
    
    /// Selects all content in the editor
    func selectAll() {
        guard let webView = webView else {
            onError?(.bridgeCommunicationFailed("WebView is not available"))
            return
        }
        
        guard isReady else {
            onError?(.bridgeCommunicationFailed("Editor is not ready"))
            return
        }
        
        let script = "window.muyaBridge.selectAll();"
        
        executeJavaScript(script, operation: "selectAll", webView: webView)
    }
    
    // MARK: - Helper Methods
    
    /// Escapes a string for safe use in JavaScript
    /// - Parameter string: The string to escape
    /// - Returns: The escaped string
    func escapeForJavaScript(_ string: String) -> String {
        var escaped = string
        escaped = escaped.replacingOccurrences(of: "\\", with: "\\\\")
        escaped = escaped.replacingOccurrences(of: "'", with: "\\'")
        escaped = escaped.replacingOccurrences(of: "\"", with: "\\\"")
        escaped = escaped.replacingOccurrences(of: "\n", with: "\\n")
        escaped = escaped.replacingOccurrences(of: "\r", with: "\\r")
        escaped = escaped.replacingOccurrences(of: "\t", with: "\\t")
        return escaped
    }
    
    /// Executes JavaScript with retry logic
    /// - Parameters:
    ///   - script: The JavaScript to execute
    ///   - operation: The operation name for error reporting
    ///   - webView: The WKWebView to execute in
    private func executeJavaScript(_ script: String, operation: String, webView: WKWebView) {
        webView.evaluateJavaScript(script) { [weak self] result, error in
            guard let self = self else { return }
            
            if let error = error {
                self.handleJavaScriptError(error, operation: operation, script: script, webView: webView)
            } else {
                self.retryCount = 0
            }
        }
    }
    
    /// Handles JavaScript execution errors with retry logic
    /// - Parameters:
    ///   - error: The error that occurred
    ///   - operation: The operation name
    ///   - script: The script that failed
    ///   - webView: The WKWebView
    private func handleJavaScriptError(_ error: Error, operation: String, script: String, webView: WKWebView) {
        retryCount += 1
        
        MuyaLogger.warning("JavaScript error in \(operation) (attempt \(retryCount)/\(maxRetryAttempts)): \(error.localizedDescription)", category: "bridge")
        
        if retryCount < maxRetryAttempts {
            // Retry after a delay
            MuyaLogger.debug("Scheduling retry for \(operation) in \(retryDelay)s", category: "bridge")
            DispatchQueue.main.asyncAfter(deadline: .now() + retryDelay) { [weak self] in
                guard let self = self, self.isReady else { return }
                self.executeJavaScript(script, operation: operation, webView: webView)
            }
        } else {
            retryCount = 0
            let muyaError = MuyaError.bridgeCommunicationFailed(
                "Failed to \(operation) after \(maxRetryAttempts) attempts: \(error.localizedDescription)"
            )
            MuyaLogger.error(muyaError)
            onError?(muyaError)
        }
    }
}

#endif
