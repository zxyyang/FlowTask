import Foundation
import AppKit
import WebKit
import UniformTypeIdentifiers

#if os(macOS)

// MARK: - ExportError

/// Errors that can occur during export operations
/// Requirements: 1.6
enum ExportError: Error, LocalizedError {
    case formatNotSupported(String)
    case fileWriteFailed(String)
    case pdfGenerationFailed(String)
    case htmlConversionFailed(String)
    case contentUnavailable(String)
    case userCancelled
    
    var errorDescription: String? {
        switch self {
        case .formatNotSupported(let format):
            return "不支持的导出格式: \(format)"
        case .fileWriteFailed(let reason):
            return "文件写入失败: \(reason)"
        case .pdfGenerationFailed(let reason):
            return "PDF 生成失败: \(reason)"
        case .htmlConversionFailed(let reason):
            return "HTML 转换失败: \(reason)"
        case .contentUnavailable(let reason):
            return "内容不可用: \(reason)"
        case .userCancelled:
            return "用户取消了导出"
        }
    }
}

// MARK: - ExportFormat

/// Supported export formats
/// Requirements: 1.1, 1.2, 1.3, 1.4
enum ExportFormat: String, CaseIterable {
    case markdown = "md"
    case html = "html"
    case pdf = "pdf"
    
    var displayName: String {
        switch self {
        case .markdown: return "Markdown (.md)"
        case .html: return "HTML (.html)"
        case .pdf: return "PDF (.pdf)"
        }
    }
    
    var fileExtension: String { rawValue }
    
    var utType: String {
        switch self {
        case .markdown: return "net.daringfireball.markdown"
        case .html: return "public.html"
        case .pdf: return "com.adobe.pdf"
        }
    }
}

// MARK: - ExportManager

/// Manages document export functionality
/// Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6
class ExportManager {
    
    // MARK: - Singleton
    
    static let shared = ExportManager()
    
    private init() {}
    
    // MARK: - Properties
    
    /// Default CSS styles for HTML export
    private let defaultHTMLStyles = """
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1, h2, h3, h4, h5, h6 {
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            font-weight: 600;
        }
        h1 { font-size: 2em; border-bottom: 1px solid #eee; padding-bottom: 0.3em; }
        h2 { font-size: 1.5em; border-bottom: 1px solid #eee; padding-bottom: 0.3em; }
        h3 { font-size: 1.25em; }
        code {
            background-color: #f6f8fa;
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-family: 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
            font-size: 0.9em;
        }
        pre {
            background-color: #f6f8fa;
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
        }
        pre code {
            background-color: transparent;
            padding: 0;
        }
        blockquote {
            border-left: 4px solid #dfe2e5;
            margin: 0;
            padding-left: 16px;
            color: #6a737d;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 1em 0;
        }
        th, td {
            border: 1px solid #dfe2e5;
            padding: 8px 12px;
            text-align: left;
        }
        th {
            background-color: #f6f8fa;
            font-weight: 600;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        a {
            color: #0366d6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        ul, ol {
            padding-left: 2em;
        }
        li {
            margin: 0.25em 0;
        }
        hr {
            border: none;
            border-top: 1px solid #eee;
            margin: 2em 0;
        }
        .task-list-item {
            list-style-type: none;
            margin-left: -1.5em;
        }
        .task-list-item input {
            margin-right: 0.5em;
        }
    </style>
    """
    
    // MARK: - Public Methods
    
    /// Shows export dialog and exports content to selected format
    /// - Parameters:
    ///   - content: The markdown content to export
    ///   - fileName: The suggested file name (without extension)
    ///   - htmlContent: Optional pre-rendered HTML content
    ///   - completion: Callback with result
    /// Requirements: 1.1, 1.5
    func showExportDialog(
        content: String,
        fileName: String,
        htmlContent: String? = nil,
        completion: @escaping (Result<URL, ExportError>) -> Void
    ) {
        // Show format selection alert
        let alert = NSAlert()
        alert.messageText = "导出笔记"
        alert.informativeText = "请选择导出格式"
        alert.alertStyle = .informational
        
        // Add format buttons
        for format in ExportFormat.allCases {
            alert.addButton(withTitle: format.displayName)
        }
        alert.addButton(withTitle: "取消")
        
        let response = alert.runModal()
        
        // Map response to format
        let formatIndex = response.rawValue - NSApplication.ModalResponse.alertFirstButtonReturn.rawValue
        
        guard formatIndex >= 0 && formatIndex < ExportFormat.allCases.count else {
            completion(.failure(.userCancelled))
            return
        }
        
        let selectedFormat = ExportFormat.allCases[formatIndex]
        
        // Show save panel
        showSavePanel(fileName: fileName, format: selectedFormat) { [weak self] result in
            switch result {
            case .success(let url):
                self?.export(
                    content: content,
                    format: selectedFormat,
                    to: url,
                    htmlContent: htmlContent,
                    completion: completion
                )
            case .failure(let error):
                completion(.failure(error))
            }
        }
    }

    
    /// Exports content directly to a specific format and URL
    /// - Parameters:
    ///   - content: The markdown content to export
    ///   - format: The export format
    ///   - url: The destination URL
    ///   - htmlContent: Optional pre-rendered HTML content
    ///   - completion: Callback with result
    /// Requirements: 1.2, 1.3, 1.4
    func export(
        content: String,
        format: ExportFormat,
        to url: URL,
        htmlContent: String? = nil,
        completion: @escaping (Result<URL, ExportError>) -> Void
    ) {
        switch format {
        case .markdown:
            exportToMarkdown(content: content, to: url, completion: completion)
        case .html:
            exportToHTML(content: content, htmlContent: htmlContent, to: url, completion: completion)
        case .pdf:
            exportToPDF(content: content, htmlContent: htmlContent, to: url, completion: completion)
        }
    }
    
    // MARK: - Private Methods
    
    /// Shows save panel for file selection
    private func showSavePanel(
        fileName: String,
        format: ExportFormat,
        completion: @escaping (Result<URL, ExportError>) -> Void
    ) {
        let savePanel = NSSavePanel()
        savePanel.title = "导出为 \(format.displayName)"
        savePanel.nameFieldStringValue = "\(fileName).\(format.fileExtension)"
        savePanel.allowedContentTypes = [.init(filenameExtension: format.fileExtension) ?? .data]
        savePanel.canCreateDirectories = true
        
        savePanel.begin { response in
            if response == .OK, let url = savePanel.url {
                completion(.success(url))
            } else {
                completion(.failure(.userCancelled))
            }
        }
    }
    
    /// Exports content to Markdown format
    /// Requirements: 1.2
    private func exportToMarkdown(
        content: String,
        to url: URL,
        completion: @escaping (Result<URL, ExportError>) -> Void
    ) {
        do {
            // Use MarkdownExporter for clean output
            let exportedContent = MarkdownExporter.shared.export(content)
            try exportedContent.write(to: url, atomically: true, encoding: .utf8)
            completion(.success(url))
        } catch {
            completion(.failure(.fileWriteFailed(error.localizedDescription)))
        }
    }
    
    /// Exports content to HTML format
    /// Requirements: 1.3
    private func exportToHTML(
        content: String,
        htmlContent: String?,
        to url: URL,
        completion: @escaping (Result<URL, ExportError>) -> Void
    ) {
        // Use provided HTML content or convert markdown
        let bodyContent: String
        if let html = htmlContent, !html.isEmpty {
            bodyContent = html
        } else {
            bodyContent = convertMarkdownToBasicHTML(content)
        }
        
        let fullHTML = wrapInHTMLDocument(bodyContent)
        
        do {
            try fullHTML.write(to: url, atomically: true, encoding: .utf8)
            completion(.success(url))
        } catch {
            completion(.failure(.fileWriteFailed(error.localizedDescription)))
        }
    }
    
    /// Exports content to PDF format
    /// Requirements: 1.4
    private func exportToPDF(
        content: String,
        htmlContent: String?,
        to url: URL,
        completion: @escaping (Result<URL, ExportError>) -> Void
    ) {
        // Use provided HTML content or convert markdown
        let bodyContent: String
        if let html = htmlContent, !html.isEmpty {
            bodyContent = html
        } else {
            bodyContent = convertMarkdownToBasicHTML(content)
        }
        
        let fullHTML = wrapInHTMLDocument(bodyContent)
        
        // Create a temporary WebView for PDF generation
        let webView = WKWebView(frame: NSRect(x: 0, y: 0, width: 800, height: 600))
        
        // Load HTML and generate PDF
        webView.loadHTMLString(fullHTML, baseURL: nil)
        
        // Wait for content to load then generate PDF
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            self.generatePDF(from: webView, to: url, completion: completion)
        }
    }
    
    /// Generates PDF from WebView
    private func generatePDF(
        from webView: WKWebView,
        to url: URL,
        completion: @escaping (Result<URL, ExportError>) -> Void
    ) {
        let printInfo = NSPrintInfo.shared.copy() as! NSPrintInfo
        printInfo.paperSize = NSSize(width: 612, height: 792) // US Letter
        printInfo.topMargin = 36
        printInfo.bottomMargin = 36
        printInfo.leftMargin = 36
        printInfo.rightMargin = 36
        printInfo.horizontalPagination = .fit
        printInfo.verticalPagination = .automatic
        printInfo.isHorizontallyCentered = true
        printInfo.isVerticallyCentered = false
        
        // Set output to PDF file
        printInfo.jobDisposition = .save
        printInfo.dictionary()[NSPrintInfo.AttributeKey.jobSavingURL] = url
        
        let printOperation = webView.printOperation(with: printInfo)
        printOperation.showsPrintPanel = false
        printOperation.showsProgressPanel = false
        
        // NSPrintOperation.run() is synchronous and returns Bool
        let success = printOperation.run()
        if success {
            completion(.success(url))
        } else {
            completion(.failure(.pdfGenerationFailed("PDF generation failed")))
        }
    }
    
    /// Wraps HTML content in a complete HTML document
    func wrapInHTMLDocument(_ bodyContent: String) -> String {
        return """
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Exported Document</title>
            \(defaultHTMLStyles)
        </head>
        <body>
            \(bodyContent)
        </body>
        </html>
        """
    }
    
    /// Converts markdown to basic HTML (fallback when editor HTML is not available)
    func convertMarkdownToBasicHTML(_ markdown: String) -> String {
        var html = markdown
        
        // Escape HTML entities first
        html = html.replacingOccurrences(of: "&", with: "&amp;")
        html = html.replacingOccurrences(of: "<", with: "&lt;")
        html = html.replacingOccurrences(of: ">", with: "&gt;")
        
        // Convert headings
        html = html.replacingOccurrences(of: "(?m)^###### (.+)$", with: "<h6>$1</h6>", options: .regularExpression)
        html = html.replacingOccurrences(of: "(?m)^##### (.+)$", with: "<h5>$1</h5>", options: .regularExpression)
        html = html.replacingOccurrences(of: "(?m)^#### (.+)$", with: "<h4>$1</h4>", options: .regularExpression)
        html = html.replacingOccurrences(of: "(?m)^### (.+)$", with: "<h3>$1</h3>", options: .regularExpression)
        html = html.replacingOccurrences(of: "(?m)^## (.+)$", with: "<h2>$1</h2>", options: .regularExpression)
        html = html.replacingOccurrences(of: "(?m)^# (.+)$", with: "<h1>$1</h1>", options: .regularExpression)
        
        // Convert bold
        html = html.replacingOccurrences(of: "\\*\\*(.+?)\\*\\*", with: "<strong>$1</strong>", options: .regularExpression)
        
        // Convert italic
        html = html.replacingOccurrences(of: "\\*(.+?)\\*", with: "<em>$1</em>", options: .regularExpression)
        
        // Convert inline code
        html = html.replacingOccurrences(of: "`(.+?)`", with: "<code>$1</code>", options: .regularExpression)
        
        // Convert links
        html = html.replacingOccurrences(of: "\\[(.+?)\\]\\((.+?)\\)", with: "<a href=\"$2\">$1</a>", options: .regularExpression)
        
        // Convert line breaks to paragraphs
        let paragraphs = html.components(separatedBy: "\n\n")
        html = paragraphs.map { para in
            let trimmed = para.trimmingCharacters(in: .whitespacesAndNewlines)
            if trimmed.isEmpty { return "" }
            if trimmed.hasPrefix("<h") || trimmed.hasPrefix("<ul") || trimmed.hasPrefix("<ol") || trimmed.hasPrefix("<pre") {
                return trimmed
            }
            return "<p>\(trimmed.replacingOccurrences(of: "\n", with: "<br>"))</p>"
        }.joined(separator: "\n")
        
        return html
    }
}

#endif
