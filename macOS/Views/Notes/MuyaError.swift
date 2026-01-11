import Foundation

// MARK: - MuyaError

/// Muya 编辑器错误类型
/// 需求: 16.1, 16.2
enum MuyaError: Error, LocalizedError {
    /// 初始化失败
    case initializationFailed(String)
    
    /// 资源加载失败
    case resourceLoadFailed(String)
    
    /// 桥接通信失败
    case bridgeCommunicationFailed(String)
    
    /// JavaScript 执行错误
    case javascriptError(String)
    
    /// 内容解析失败
    case contentParsingFailed(String)
    
    /// 图片加载失败
    case imageLoadFailed(String)
    
    /// 编辑器未就绪
    case editorNotReady
    
    /// WebView 不可用
    case webViewUnavailable
    
    /// 超时错误
    case timeout(String)
    
    /// 未知错误
    case unknown(String)
    
    // MARK: - LocalizedError
    
    /// 中文错误描述
    var errorDescription: String? {
        switch self {
        case .initializationFailed(let msg):
            return "初始化失败: \(msg)"
        case .resourceLoadFailed(let msg):
            return "资源加载失败: \(msg)"
        case .bridgeCommunicationFailed(let msg):
            return "桥接通信失败: \(msg)"
        case .javascriptError(let msg):
            return "JavaScript 错误: \(msg)"
        case .contentParsingFailed(let msg):
            return "内容解析失败: \(msg)"
        case .imageLoadFailed(let msg):
            return "图片加载失败: \(msg)"
        case .editorNotReady:
            return "编辑器尚未就绪"
        case .webViewUnavailable:
            return "WebView 不可用"
        case .timeout(let msg):
            return "操作超时: \(msg)"
        case .unknown(let msg):
            return "未知错误: \(msg)"
        }
    }
    
    /// 恢复建议
    var recoverySuggestion: String? {
        switch self {
        case .initializationFailed:
            return "请尝试重新加载编辑器"
        case .resourceLoadFailed:
            return "请检查资源文件是否完整"
        case .bridgeCommunicationFailed:
            return "请尝试刷新页面"
        case .javascriptError:
            return "请检查输入内容是否有效"
        case .contentParsingFailed:
            return "请检查 Markdown 格式是否正确"
        case .imageLoadFailed:
            return "请检查图片路径是否正确"
        case .editorNotReady:
            return "请等待编辑器加载完成"
        case .webViewUnavailable:
            return "请重新打开编辑器"
        case .timeout:
            return "请稍后重试"
        case .unknown:
            return "请尝试重新操作"
        }
    }
    
    /// 是否可恢复
    var isRecoverable: Bool {
        switch self {
        case .initializationFailed, .resourceLoadFailed:
            return true
        case .bridgeCommunicationFailed, .javascriptError:
            return true
        case .contentParsingFailed, .imageLoadFailed:
            return true
        case .editorNotReady, .webViewUnavailable:
            return true
        case .timeout:
            return true
        case .unknown:
            return false
        }
    }
}

// MARK: - MuyaLogger

/// Muya 日志记录器
class MuyaLogger {
    
    /// 日志级别
    enum Level: String {
        case debug = "DEBUG"
        case info = "INFO"
        case warning = "WARNING"
        case error = "ERROR"
    }
    
    /// 是否启用调试日志
    static var isDebugEnabled: Bool = {
        #if DEBUG
        return true
        #else
        return false
        #endif
    }()
    
    /// 记录日志
    /// - Parameters:
    ///   - message: 日志消息
    ///   - level: 日志级别
    ///   - category: 日志分类
    static func log(_ message: String, level: Level = .info, category: String = "muya") {
        guard level != .debug || isDebugEnabled else { return }
        
        let timestamp = ISO8601DateFormatter().string(from: Date())
        print("[\(timestamp)] [\(level.rawValue)] [\(category)] \(message)")
    }
    
    /// 调试日志
    static func debug(_ message: String, category: String = "muya") {
        log(message, level: .debug, category: category)
    }
    
    /// 信息日志
    static func info(_ message: String, category: String = "muya") {
        log(message, level: .info, category: category)
    }
    
    /// 警告日志
    static func warning(_ message: String, category: String = "muya") {
        log(message, level: .warning, category: category)
    }
    
    /// 错误日志
    static func error(_ message: String, category: String = "muya") {
        log(message, level: .error, category: category)
    }
    
    /// 记录 MuyaError
    static func error(_ error: MuyaError, category: String = "muya") {
        log(error.localizedDescription, level: .error, category: category)
    }
}
