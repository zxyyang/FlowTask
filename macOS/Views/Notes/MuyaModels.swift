import Foundation

#if os(macOS)
import AppKit
#endif

// MARK: - MuyaTheme

/// Muya 编辑器主题
/// 需求: 8.1
enum MuyaTheme: String, CaseIterable, Codable {
    case light = "light"
    case dark = "dark"
    
    /// 中文显示名称
    var displayName: String {
        switch self {
        case .light: return "浅色"
        case .dark: return "深色"
        }
    }
    
    /// 根据系统外观获取当前主题
    static var current: MuyaTheme {
        #if os(macOS)
        let isDark = NSApp.effectiveAppearance.bestMatch(from: [.darkAqua, .aqua]) == .darkAqua
        return isDark ? .dark : .light
        #else
        return .light
        #endif
    }
}

// MARK: - MuyaMode

/// Muya 编辑模式
/// 需求: 4.5
enum MuyaMode: String, CaseIterable, Codable {
    case wysiwyg = "wysiwyg"    // 所见即所得
    case sourceCode = "source"  // 源码模式
    
    /// 中文显示名称
    var displayName: String {
        switch self {
        case .wysiwyg: return "所见即所得"
        case .sourceCode: return "源码模式"
        }
    }
}

// MARK: - MuyaFormatType

/// Muya 格式化类型
/// 需求: 6.1-6.5
enum MuyaFormatType: String, CaseIterable {
    case bold = "strong"
    case italic = "em"
    case strikethrough = "del"
    case inlineCode = "inline_code"
    case link = "link"
    case image = "image"
    case heading1 = "h1"
    case heading2 = "h2"
    case heading3 = "h3"
    case heading4 = "h4"
    case heading5 = "h5"
    case heading6 = "h6"
    case quote = "blockquote"
    case orderedList = "ol"
    case unorderedList = "ul"
    case taskList = "task"
    case codeBlock = "code"
    case mathBlock = "math"
    case table = "table"
    case horizontalRule = "hr"
    case indent = "indent"
    case outdent = "outdent"
    
    /// 中文显示名称
    var displayName: String {
        switch self {
        case .bold: return "粗体"
        case .italic: return "斜体"
        case .strikethrough: return "删除线"
        case .inlineCode: return "行内代码"
        case .link: return "链接"
        case .image: return "图片"
        case .heading1: return "一级标题"
        case .heading2: return "二级标题"
        case .heading3: return "三级标题"
        case .heading4: return "四级标题"
        case .heading5: return "五级标题"
        case .heading6: return "六级标题"
        case .quote: return "引用"
        case .orderedList: return "有序列表"
        case .unorderedList: return "无序列表"
        case .taskList: return "任务列表"
        case .codeBlock: return "代码块"
        case .mathBlock: return "数学公式"
        case .table: return "表格"
        case .horizontalRule: return "分隔线"
        case .indent: return "增加缩进"
        case .outdent: return "减少缩进"
        }
    }
    
    /// 快捷键
    var shortcut: String? {
        switch self {
        case .bold: return "⌘B"
        case .italic: return "⌘I"
        case .strikethrough: return "⌘⇧S"
        case .inlineCode: return "⌘`"
        case .link: return "⌘K"
        default: return nil
        }
    }
}

// MARK: - MuyaCodeTheme

/// 代码高亮主题
enum MuyaCodeTheme: String, CaseIterable, Codable {
    case github = "github"
    case dracula = "dracula"
    case monokai = "monokai"
    case solarizedLight = "solarized-light"
    case solarizedDark = "solarized-dark"
    case tomorrow = "tomorrow"
    case tomorrowNight = "tomorrow-night"
    case vs = "vs"
    case vsDark = "vs-dark"
    
    /// 中文显示名称
    var displayName: String {
        switch self {
        case .github: return "GitHub"
        case .dracula: return "Dracula"
        case .monokai: return "Monokai"
        case .solarizedLight: return "Solarized 浅色"
        case .solarizedDark: return "Solarized 深色"
        case .tomorrow: return "Tomorrow"
        case .tomorrowNight: return "Tomorrow Night"
        case .vs: return "VS"
        case .vsDark: return "VS 深色"
        }
    }
}

// MARK: - MuyaContentTheme

/// 笔记内容主题（排版样式）
enum MuyaContentTheme: String, CaseIterable, Codable {
    case `default` = "default"
    case github = "github"
    case gothic = "gothic"
    case newsprint = "newsprint"
    case night = "night"
    case pixyll = "pixyll"
    case whitey = "whitey"
    case cement = "cement"
    case cementDark = "cement-dark"
    case everforestLight = "everforest-light"
    case everforestDark = "everforest-dark"
    case darcula = "darcula"
    
    /// 中文显示名称
    var displayName: String {
        switch self {
        case .default: return "默认"
        case .github: return "GitHub"
        case .gothic: return "Gothic"
        case .newsprint: return "Newsprint"
        case .night: return "Night"
        case .pixyll: return "Pixyll"
        case .whitey: return "Whitey"
        case .cement: return "Cement"
        case .cementDark: return "Cement Dark"
        case .everforestLight: return "Everforest Light"
        case .everforestDark: return "Everforest Dark"
        case .darcula: return "Darcula"
        }
    }
    
    /// 主题描述
    var description: String {
        switch self {
        case .default: return "简洁的默认样式"
        case .github: return "GitHub 风格，清晰易读"
        case .gothic: return "哥特风格，优雅复古"
        case .newsprint: return "报纸风格，经典排版"
        case .night: return "深色主题，护眼模式"
        case .pixyll: return "Pixyll 风格，简约现代"
        case .whitey: return "纯白风格，极简设计"
        case .cement: return "Cement 风格，Material 3 设计"
        case .cementDark: return "Cement Dark，深色 Material 3"
        case .everforestLight: return "Everforest Light，自然护眼"
        case .everforestDark: return "Everforest Dark，深色自然"
        case .darcula: return "Darcula，IntelliJ IDEA 风格"
        }
    }
    
    /// CSS 文件名
    var cssFileName: String {
        switch self {
        case .default: return ""
        default: return "\(rawValue).css"
        }
    }
    
    /// 是否为深色主题
    var isDark: Bool {
        switch self {
        case .night, .cementDark, .everforestDark, .darcula: return true
        default: return false
        }
    }
}

// MARK: - MuyaSettings

/// Muya 编辑器设置
/// 需求: 7.6
struct MuyaSettings: Codable, Equatable {
    var theme: MuyaTheme = .light
    var contentTheme: MuyaContentTheme = .default
    var fontSize: Int = 16
    var lineHeight: Double = 1.6
    var autoSave: Bool = true
    var autoSaveInterval: Int = 30 // 秒
    var spellCheck: Bool = false
    var showLineNumbers: Bool = true
    var tabSize: Int = 4
    var useSpacesForTab: Bool = true
    
    /// 默认设置
    static var `default`: MuyaSettings {
        return MuyaSettings()
    }
    
    /// UserDefaults 键
    private static let userDefaultsKey = "MuyaEditorSettings"
    
    /// 保存到 UserDefaults
    func save() {
        if let data = try? JSONEncoder().encode(self) {
            UserDefaults.standard.set(data, forKey: MuyaSettings.userDefaultsKey)
        }
    }
    
    /// 从 UserDefaults 加载
    static func load() -> MuyaSettings {
        guard let data = UserDefaults.standard.data(forKey: userDefaultsKey),
              let settings = try? JSONDecoder().decode(MuyaSettings.self, from: data) else {
            return .default
        }
        return settings
    }
}


// MARK: - Muya Extensions

// MARK: - SearchResult

/// 搜索结果
struct SearchResult: Codable, Equatable {
    let success: Bool
    let count: Int
    let currentIndex: Int
    let error: String?
    
    init(success: Bool, count: Int, currentIndex: Int, error: String?) {
        self.success = success
        self.count = count
        self.currentIndex = currentIndex
        self.error = error
    }
    
    /// 从 JavaScript 对象解析
    init?(from dict: [String: Any]) {
        self.init(
            success: dict["success"] as? Bool ?? false,
            count: dict["count"] as? Int ?? 0,
            currentIndex: dict["currentIndex"] as? Int ?? -1,
            error: dict["error"] as? String
        )
    }
    
    /// 空结果
    static var empty: SearchResult {
        return SearchResult(success: true, count: 0, currentIndex: -1, error: nil)
    }
}

// MARK: - ReplaceResult

/// 替换结果
struct ReplaceResult: Codable, Equatable {
    let success: Bool
    let replaced: Bool
    let count: Int
    let error: String?
    
    init(success: Bool, replaced: Bool, count: Int, error: String?) {
        self.success = success
        self.replaced = replaced
        self.count = count
        self.error = error
    }
    
    /// 从 JavaScript 对象解析
    init?(from dict: [String: Any]) {
        self.init(
            success: dict["success"] as? Bool ?? false,
            replaced: dict["replaced"] as? Bool ?? false,
            count: dict["count"] as? Int ?? 0,
            error: dict["error"] as? String
        )
    }
}

// MARK: - HistoryState

/// 历史状态
struct HistoryState: Codable, Equatable {
    let canUndo: Bool
    let canRedo: Bool
    let undoStackSize: Int?
    let redoStackSize: Int?
    
    init(canUndo: Bool, canRedo: Bool, undoStackSize: Int? = nil, redoStackSize: Int? = nil) {
        self.canUndo = canUndo
        self.canRedo = canRedo
        self.undoStackSize = undoStackSize
        self.redoStackSize = redoStackSize
    }
    
    /// 从 JavaScript 对象解析
    init?(from dict: [String: Any]) {
        self.init(
            canUndo: dict["canUndo"] as? Bool ?? false,
            canRedo: dict["canRedo"] as? Bool ?? false,
            undoStackSize: dict["undoStackSize"] as? Int,
            redoStackSize: dict["redoStackSize"] as? Int
        )
    }
    
    /// 初始状态
    static var initial: HistoryState {
        return HistoryState(canUndo: false, canRedo: false, undoStackSize: nil, redoStackSize: nil)
    }
}

// MARK: - OutlineItem

/// 大纲项
struct OutlineItem: Codable, Equatable, Identifiable {
    let id: String
    let level: Int
    let text: String
    
    init(id: String, level: Int, text: String) {
        self.id = id
        self.level = level
        self.text = text
    }
    
    /// 从 JavaScript 对象解析
    init?(from dict: [String: Any]) {
        guard let id = dict["id"] as? String ?? dict["slug"] as? String,
              let level = dict["level"] as? Int,
              let text = dict["text"] as? String ?? dict["content"] as? String else {
            return nil
        }
        self.init(id: id, level: level, text: text)
    }
}

// MARK: - CounterInfo

/// 计数信息
struct CounterInfo: Codable, Equatable {
    let length: Int
    let type: String
    
    init(length: Int, type: String) {
        self.length = length
        self.type = type
    }
    
    /// 从 JavaScript 对象解析 (Muya 格式)
    /// Muya 返回 wordCount 和 characterCount
    init?(from dict: [String: Any]) {
        // 尝试 Muya 格式
        if let wordCount = dict["wordCount"] as? Int {
            // Muya 格式 - 使用 wordCount 作为 length
            self.init(length: wordCount, type: "text")
            return
        }
        // 尝试通用格式
        if let length = dict["length"] as? Int {
            let type = dict["type"] as? String ?? "markdown"
            self.init(length: length, type: type)
            return
        }
        return nil
    }
    
    /// 获取字数（兼容 Muya）
    var wordCount: Int {
        return length
    }
    
    /// 获取字符数（兼容 Muya）
    var characterCount: Int {
        return length
    }
    
    /// 获取段落数（兼容 Muya）
    var paragraphCount: Int {
        return 0
    }
}

// MARK: - CursorPosition

/// 光标位置
struct CursorPosition: Codable, Equatable {
    let line: Int?
    let column: Int?
    let offset: Int?
    
    init(line: Int? = nil, column: Int? = nil, offset: Int? = nil) {
        self.line = line
        self.column = column
        self.offset = offset
    }
    
    /// 从 JavaScript 对象解析
    init?(from dict: [String: Any]) {
        self.line = dict["line"] as? Int
        self.column = dict["column"] as? Int
        self.offset = dict["offset"] as? Int
    }
}


// MARK: - SearchOptions

/// 搜索选项
struct SearchOptions: Codable, Equatable, Sendable {
    var isCaseSensitive: Bool = false
    var isWholeWord: Bool = false
    var isRegexp: Bool = false
    
    nonisolated init(isCaseSensitive: Bool = false, isWholeWord: Bool = false, isRegexp: Bool = false) {
        self.isCaseSensitive = isCaseSensitive
        self.isWholeWord = isWholeWord
        self.isRegexp = isRegexp
    }
    
    /// 转换为 JSON 字符串
    func toJSONString() -> String {
        return """
        {"caseSensitive":\(isCaseSensitive),"wholeWord":\(isWholeWord),"regexp":\(isRegexp)}
        """
    }
}

// MARK: - ReplaceOptions

/// 替换选项
struct ReplaceOptions: Codable, Equatable {
    var replaceAll: Bool = false
    var isCaseSensitive: Bool = false
    var isRegexp: Bool = false
    
    init(replaceAll: Bool = false, isCaseSensitive: Bool = false, isRegexp: Bool = false) {
        self.replaceAll = replaceAll
        self.isCaseSensitive = isCaseSensitive
        self.isRegexp = isRegexp
    }
    
    /// 转换为 JSON 字符串
    func toJSONString() -> String {
        return """
        {"replaceAll":\(replaceAll),"caseSensitive":\(isCaseSensitive),"regexp":\(isRegexp)}
        """
    }
}

// MARK: - SearchState

/// 搜索状态
struct SearchState: Codable, Equatable {
    let query: String
    let count: Int
    let currentIndex: Int
    let options: SearchOptions
    
    init(query: String, count: Int, currentIndex: Int, options: SearchOptions) {
        self.query = query
        self.count = count
        self.currentIndex = currentIndex
        self.options = options
    }
}

// MARK: - FormatType

/// 格式化类型
enum FormatType: String, CaseIterable {
    case bold = "strong"
    case italic = "em"
    case strikethrough = "del"
    case inlineCode = "inline_code"
    case link = "link"
    case image = "image"
    case inlineMath = "inline_math"
    
    /// 中文显示名称
    var displayName: String {
        switch self {
        case .bold: return "粗体"
        case .italic: return "斜体"
        case .strikethrough: return "删除线"
        case .inlineCode: return "行内代码"
        case .link: return "链接"
        case .image: return "图片"
        case .inlineMath: return "行内公式"
        }
    }
}

// MARK: - ImagePasteEvent

/// 图片粘贴事件
struct ImagePasteEvent: Codable, Equatable {
    let pasteId: String
    let base64Data: String
    let mimeType: String
    let timestamp: Date
    
    init(pasteId: String, base64Data: String, mimeType: String, timestamp: Date = Date()) {
        self.pasteId = pasteId
        self.base64Data = base64Data
        self.mimeType = mimeType
        self.timestamp = timestamp
    }
}

// MARK: - ImageLoadErrorEvent

/// 图片加载错误事件
struct ImageLoadErrorEvent: Codable, Equatable {
    let imageUrl: String
    let errorMessage: String
    let timestamp: Date
    
    init(imageUrl: String, errorMessage: String, timestamp: Date = Date()) {
        self.imageUrl = imageUrl
        self.errorMessage = errorMessage
        self.timestamp = timestamp
    }
}
