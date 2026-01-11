import Foundation
import WebKit

#if os(macOS)

/// 自定义 URL Scheme Handler，用于正确处理本地 Muya 资源的 MIME 类型
/// 解决 WKWebView 加载本地 ES 模块时 MIME 类型识别错误的问题
class MuyaURLSchemeHandler: NSObject, WKURLSchemeHandler {
    
    /// 自定义 scheme 名称
    static let scheme = "muya-local"
    
    /// Muya 资源目录 URL
    private let resourceDirectoryURL: URL
    
    /// 文档基础目录 URL（用于解析相对路径）
    var documentBaseURL: URL?
    
    /// MIME 类型映射
    private static let mimeTypes: [String: String] = [
        "html": "text/html",
        "htm": "text/html",
        "css": "text/css",
        "js": "text/javascript",
        "mjs": "text/javascript",
        "json": "application/json",
        "png": "image/png",
        "jpg": "image/jpeg",
        "jpeg": "image/jpeg",
        "gif": "image/gif",
        "svg": "image/svg+xml",
        "webp": "image/webp",
        "woff": "font/woff",
        "woff2": "font/woff2",
        "ttf": "font/ttf",
        "otf": "font/otf",
        "eot": "application/vnd.ms-fontobject",
        "ico": "image/x-icon",
        "md": "text/markdown",
        "txt": "text/plain"
    ]
    
    init(resourceDirectoryURL: URL) {
        self.resourceDirectoryURL = resourceDirectoryURL
        super.init()
    }
    
    // MARK: - WKURLSchemeHandler
    
    func webView(_ webView: WKWebView, start urlSchemeTask: WKURLSchemeTask) {
        guard let url = urlSchemeTask.request.url else {
            urlSchemeTask.didFailWithError(MuyaError.resourceLoadFailed("请求 URL 为空"))
            return
        }
        
        MuyaLogger.debug("收到 URL 请求: \(url.absoluteString)", category: "scheme-handler")
        
        // 将自定义 scheme URL 转换为本地文件路径
        // 处理路径，移除开头的斜杠
        var relativePath = url.path
        if relativePath.hasPrefix("/") {
            relativePath = String(relativePath.dropFirst())
        }
        
        MuyaLogger.debug("处理路径: \(relativePath)", category: "scheme-handler")
        
        var fileURL: URL
        var mimeType: String
        
        // 检查是否是绝对路径（用于加载用户图片等）
        // 绝对路径格式: muya-local://local/absolute/Users/xxx/image.png
        if relativePath.hasPrefix("absolute/") {
            let absolutePath = "/" + String(relativePath.dropFirst("absolute/".count))
            fileURL = URL(fileURLWithPath: absolutePath)
            mimeType = Self.mimeType(for: fileURL.pathExtension)
            MuyaLogger.debug("绝对路径模式: \(absolutePath)", category: "scheme-handler")
        } else if relativePath.hasPrefix("relative/") {
            // 相对路径格式: muya-local://local/relative/images/photo.jpg
            let relPath = String(relativePath.dropFirst("relative/".count))
            let baseURL = documentBaseURL ?? ImageHandler.shared.documentDirectory
            MuyaLogger.debug("相对路径模式: \(relPath), baseURL: \(baseURL?.path ?? "nil")", category: "scheme-handler")
            if let baseURL = baseURL {
                fileURL = baseURL.appendingPathComponent(relPath)
            } else {
                // 如果没有文档基础目录，尝试使用资源目录
                fileURL = resourceDirectoryURL.appendingPathComponent(relPath)
            }
            mimeType = Self.mimeType(for: fileURL.pathExtension)
        } else {
            fileURL = resourceDirectoryURL.appendingPathComponent(relativePath)
            mimeType = Self.mimeType(for: fileURL.pathExtension)
            MuyaLogger.debug("资源路径模式: \(relativePath)", category: "scheme-handler")
            
            // 特殊处理：如果请求的是 PNG 文件作为 ES 模块导入，返回对应的 .js 文件
            if fileURL.pathExtension.lowercased() == "png" {
                let jsFileURL = fileURL.appendingPathExtension("js")
                if FileManager.default.fileExists(atPath: jsFileURL.path) {
                    MuyaLogger.debug("PNG 模块重定向: \(relativePath) -> \(relativePath).js", category: "scheme-handler")
                    fileURL = jsFileURL
                    mimeType = "text/javascript"
                }
            }
        }
        
        MuyaLogger.debug("加载资源: \(relativePath) -> \(fileURL.path)", category: "scheme-handler")
        
        // 检查文件是否存在
        guard FileManager.default.fileExists(atPath: fileURL.path) else {
            MuyaLogger.warning("资源文件不存在: \(fileURL.path)", category: "scheme-handler")
            // 返回占位符图片数据
            if let placeholderData = Self.createPlaceholderImageData() {
                let headers: [String: String] = [
                    "Content-Type": "image/png",
                    "Content-Length": "\(placeholderData.count)",
                    "Access-Control-Allow-Origin": "*"
                ]
                
                if let response = HTTPURLResponse(
                    url: url,
                    statusCode: 200,
                    httpVersion: "HTTP/1.1",
                    headerFields: headers
                ) {
                    urlSchemeTask.didReceive(response)
                    urlSchemeTask.didReceive(placeholderData)
                    urlSchemeTask.didFinish()
                    return
                }
            }
            urlSchemeTask.didFailWithError(MuyaError.resourceLoadFailed("文件不存在: \(relativePath)"))
            return
        }
        
        do {
            let data = try Data(contentsOf: fileURL)
            
            MuyaLogger.debug("返回资源: \(relativePath), MIME: \(mimeType), 大小: \(data.count)", category: "scheme-handler")
            
            // 创建 HTTP 响应头
            let headers: [String: String] = [
                "Content-Type": mimeType,
                "Content-Length": "\(data.count)",
                "Access-Control-Allow-Origin": "*"
            ]
            
            guard let response = HTTPURLResponse(
                url: url,
                statusCode: 200,
                httpVersion: "HTTP/1.1",
                headerFields: headers
            ) else {
                urlSchemeTask.didFailWithError(MuyaError.resourceLoadFailed("无法创建响应"))
                return
            }
            
            urlSchemeTask.didReceive(response)
            urlSchemeTask.didReceive(data)
            urlSchemeTask.didFinish()
            
        } catch {
            MuyaLogger.error("读取资源文件失败: \(error.localizedDescription)", category: "scheme-handler")
            urlSchemeTask.didFailWithError(error)
        }
    }
    
    func webView(_ webView: WKWebView, stop urlSchemeTask: WKURLSchemeTask) {
        // 任务被取消，无需特殊处理
    }
    
    // MARK: - Helper Methods
    
    /// 根据文件扩展名获取 MIME 类型
    private static func mimeType(for pathExtension: String) -> String {
        let ext = pathExtension.lowercased()
        return mimeTypes[ext] ?? "application/octet-stream"
    }
    
    /// 创建占位符图片数据（1x1 透明 PNG）
    private static func createPlaceholderImageData() -> Data? {
        // 创建一个简单的占位符图片
        let size = NSSize(width: 100, height: 100)
        let image = NSImage(size: size)
        
        image.lockFocus()
        
        // 绘制浅灰色背景
        NSColor(white: 0.9, alpha: 1.0).setFill()
        NSBezierPath(rect: NSRect(origin: .zero, size: size)).fill()
        
        // 绘制 X 标记表示图片缺失
        NSColor(white: 0.6, alpha: 1.0).setStroke()
        let path = NSBezierPath()
        path.lineWidth = 2
        path.move(to: NSPoint(x: 20, y: 20))
        path.line(to: NSPoint(x: 80, y: 80))
        path.move(to: NSPoint(x: 80, y: 20))
        path.line(to: NSPoint(x: 20, y: 80))
        path.stroke()
        
        // 绘制边框
        let borderPath = NSBezierPath(rect: NSRect(x: 1, y: 1, width: 98, height: 98))
        borderPath.lineWidth = 1
        borderPath.stroke()
        
        image.unlockFocus()
        
        // 转换为 PNG 数据
        guard let tiffData = image.tiffRepresentation,
              let bitmap = NSBitmapImageRep(data: tiffData),
              let pngData = bitmap.representation(using: .png, properties: [:]) else {
            return nil
        }
        
        return pngData
    }
    
    /// 将本地文件 URL 转换为自定义 scheme URL
    static func customURL(for relativePath: String) -> URL? {
        var components = URLComponents()
        components.scheme = scheme
        components.host = "local"
        components.path = "/" + relativePath
        return components.url
    }
    
    /// 将绝对文件路径转换为自定义 scheme URL
    static func customURLForAbsolutePath(_ absolutePath: String) -> URL? {
        var components = URLComponents()
        components.scheme = scheme
        components.host = "local"
        // 移除开头的 / 并添加 absolute/ 前缀
        let pathWithoutLeadingSlash = absolutePath.hasPrefix("/") ? String(absolutePath.dropFirst()) : absolutePath
        components.path = "/absolute/" + pathWithoutLeadingSlash
        return components.url
    }
    
    /// 将相对路径转换为自定义 scheme URL
    static func customURLForRelativePath(_ relativePath: String) -> URL? {
        var components = URLComponents()
        components.scheme = scheme
        components.host = "local"
        // 添加 relative/ 前缀
        let cleanPath = relativePath.hasPrefix("./") ? String(relativePath.dropFirst(2)) : relativePath
        components.path = "/relative/" + cleanPath
        return components.url
    }
}

#endif
