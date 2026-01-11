import Foundation
import SwiftUI
import Combine

// MARK: - 通知类型
enum NotificationType: String, CaseIterable, Codable {
    case system = "system"              // 系统通知
    case menuBar = "menu_bar"           // 菜单栏通知
    case both = "both"                  // 两者都发送
    
    var displayName: String {
        switch self {
        case .system: return "系统通知"
        case .menuBar: return "菜单栏通知"
        case .both: return "系统 + 菜单栏"
        }
    }
    
    var description: String {
        switch self {
        case .system: return "使用 macOS 系统通知中心"
        case .menuBar: return "在菜单栏显示通知横幅"
        case .both: return "同时发送两种通知"
        }
    }
    
    var icon: String {
        switch self {
        case .system: return "bell.badge"
        case .menuBar: return "menubar.rectangle"
        case .both: return "bell.and.waves.left.and.right"
        }
    }
}

// MARK: - 通知时机
enum NotificationTiming: String, CaseIterable, Codable {
    case none = "none"                      // 不提醒
    case atTime = "at_time"                 // 到期时
    case beforeCustom = "before_custom"     // 到期前自定义时间
    case dailyAt = "daily_at"               // 每日固定时间
    case weeklyOn = "weekly_on"             // 每周固定时间
    case monthlyOn = "monthly_on"           // 每月固定日期
    
    var displayName: String {
        switch self {
        case .none: return "不提醒"
        case .atTime: return "到期时提醒"
        case .beforeCustom: return "到期前提醒"
        case .dailyAt: return "每日定时提醒"
        case .weeklyOn: return "每周定时提醒"
        case .monthlyOn: return "每月定时提醒"
        }
    }
    
    var description: String {
        switch self {
        case .none: return "不发送任何提醒"
        case .atTime: return "在任务到期时提醒"
        case .beforeCustom: return "在任务到期前指定时间提醒"
        case .dailyAt: return "每天固定时间提醒"
        case .weeklyOn: return "每周指定日期的固定时间提醒"
        case .monthlyOn: return "每月指定日期的固定时间提醒"
        }
    }
    
    var icon: String {
        switch self {
        case .none: return "bell.slash"
        case .atTime: return "bell"
        case .beforeCustom: return "clock.badge.exclamationmark"
        case .dailyAt: return "sun.max"
        case .weeklyOn: return "calendar.badge.clock"
        case .monthlyOn: return "calendar"
        }
    }
    
    var needsCustomConfig: Bool {
        switch self {
        case .beforeCustom, .dailyAt, .weeklyOn, .monthlyOn:
            return true
        default:
            return false
        }
    }
}

// MARK: - 时间单位（用于到期前提醒）
enum NotificationTimeUnit: String, CaseIterable, Codable {
    case minutes = "minutes"
    case hours = "hours"
    case days = "days"
    
    var displayName: String {
        switch self {
        case .minutes: return "分钟"
        case .hours: return "小时"
        case .days: return "天"
        }
    }
}

// MARK: - 星期枚举
enum Weekday: Int, CaseIterable, Codable {
    case sunday = 1
    case monday = 2
    case tuesday = 3
    case wednesday = 4
    case thursday = 5
    case friday = 6
    case saturday = 7
    
    var displayName: String {
        switch self {
        case .sunday: return "周日"
        case .monday: return "周一"
        case .tuesday: return "周二"
        case .wednesday: return "周三"
        case .thursday: return "周四"
        case .friday: return "周五"
        case .saturday: return "周六"
        }
    }
    
    var shortName: String {
        switch self {
        case .sunday: return "日"
        case .monday: return "一"
        case .tuesday: return "二"
        case .wednesday: return "三"
        case .thursday: return "四"
        case .friday: return "五"
        case .saturday: return "六"
        }
    }
}

// MARK: - 菜单栏图标类型
enum MenuBarIconType: String, CaseIterable, Codable {
    case systemIcon = "system_icon"         // 系统图标
    case customText = "custom_text"         // 自定义文字
    case emoji = "emoji"                    // 表情符号
    
    var displayName: String {
        switch self {
        case .systemIcon: return "系统图标"
        case .customText: return "自定义文字"
        case .emoji: return "表情符号"
        }
    }
    
    var description: String {
        switch self {
        case .systemIcon: return "使用 SF Symbols 系统图标"
        case .customText: return "使用自定义文字（1-4个字符）"
        case .emoji: return "使用表情符号"
        }
    }
    
    var icon: String {
        switch self {
        case .systemIcon: return "app.badge.checkmark"
        case .customText: return "textformat"
        case .emoji: return "face.smiling"
        }
    }
}

// MARK: - 菜单栏显示模式
enum MenuBarDisplayMode: String, CaseIterable, Codable {
    case taskCount = "task_count"           // 显示任务数量
    case todayRemaining = "today_remaining" // 今日剩余任务
    case progress = "progress"              // 任务进度百分比
    case greeting = "greeting"              // 问候语图标
    case simple = "simple"                  // 简洁模式（只显示图标）
    
    var displayName: String {
        switch self {
        case .taskCount: return "任务数量"
        case .todayRemaining: return "今日剩余"
        case .progress: return "完成进度"
        case .greeting: return "问候图标"
        case .simple: return "简洁模式"
        }
    }
    
    var description: String {
        switch self {
        case .taskCount: return "显示待完成任务总数"
        case .todayRemaining: return "显示今日剩余任务数"
        case .progress: return "显示任务完成百分比"
        case .greeting: return "根据时间显示问候图标"
        case .simple: return "只显示图标，不显示文字"
        }
    }
    
    var icon: String {
        switch self {
        case .taskCount: return "number.circle"
        case .todayRemaining: return "calendar.badge.clock"
        case .progress: return "percent"
        case .greeting: return "sun.max.fill"
        case .simple: return "circle"
        }
    }
    
    var example: String {
        switch self {
        case .taskCount: return "✓ 5"
        case .todayRemaining: return "✓ 3"
        case .progress: return "✓ 75%"
        case .greeting: return "☀️"
        case .simple: return "✓"
        }
    }
}

// MARK: - 导航栏显示模式
enum NavigationBarDisplayMode: String, CaseIterable, Codable {
    case taskCount = "task_count"           // 显示任务数量
    case todayRemaining = "today_remaining" // 今日剩余任务
    case progress = "progress"              // 任务进度
    case greeting = "greeting"              // 问候语
    case simple = "simple"                  // 简洁模式（只显示 Tasks）
    
    var displayName: String {
        switch self {
        case .taskCount: return "任务数量"
        case .todayRemaining: return "今日剩余"
        case .progress: return "任务进度"
        case .greeting: return "问候语"
        case .simple: return "简洁模式"
        }
    }
    
    var description: String {
        switch self {
        case .taskCount: return "显示待完成任务总数"
        case .todayRemaining: return "显示今日剩余任务数"
        case .progress: return "显示任务完成进度"
        case .greeting: return "根据时间显示问候语"
        case .simple: return "只显示 Tasks 标题"
        }
    }
    
    var icon: String {
        switch self {
        case .taskCount: return "number.circle"
        case .todayRemaining: return "calendar.badge.clock"
        case .progress: return "chart.bar.fill"
        case .greeting: return "hand.wave.fill"
        case .simple: return "text.alignleft"
        }
    }
}

// MARK: - 悬浮球显示模式
enum FloatingBallDisplayMode: String, CaseIterable, Codable {
    case fixed = "fixed"                    // 固定窗口 - 不移动
    case mainScreen = "main_screen"         // 主屏幕 - 始终在主屏幕
    case specificScreen = "specific_screen" // 固定显示器 - 固定在某个显示器
    
    var displayName: String {
        switch self {
        case .fixed: return "固定窗口"
        case .mainScreen: return "主屏幕"
        case .specificScreen: return "固定显示器"
        }
    }
    
    var description: String {
        switch self {
        case .fixed: return "保持在固定位置，不受任何影响"
        case .mainScreen: return "始终显示在主屏幕上"
        case .specificScreen: return "固定在指定的显示器上"
        }
    }
    
    var icon: String {
        switch self {
        case .fixed: return "pin.fill"
        case .mainScreen: return "display"
        case .specificScreen: return "tv.and.mediabox"
        }
    }
}

// MARK: - 时间单位
enum TimeUnit: String, CaseIterable, Codable {
    case minutes = "minutes"
    case hours = "hours"
    case days = "days"
    case weeks = "weeks"
    case months = "months"
    
    var displayName: String {
        switch self {
        case .minutes: return "分钟"
        case .hours: return "小时"
        case .days: return "天"
        case .weeks: return "周"
        case .months: return "月"
        }
    }
    
    func addToDate(_ date: Date, value: Int) -> Date? {
        let calendar = Calendar.current
        switch self {
        case .minutes:
            return calendar.date(byAdding: .minute, value: value, to: date)
        case .hours:
            return calendar.date(byAdding: .hour, value: value, to: date)
        case .days:
            return calendar.date(byAdding: .day, value: value, to: date)
        case .weeks:
            return calendar.date(byAdding: .day, value: value * 7, to: date)
        case .months:
            return calendar.date(byAdding: .month, value: value, to: date)
        }
    }
}

// MARK: - 默认截止时间选项
enum DefaultDueDateOption: String, CaseIterable, Identifiable, Codable {
    case endOfToday = "today"
    case endOfTomorrow = "tomorrow"
    case hours12 = "12hours"
    case hours24 = "24hours"
    case endOfWeek = "week"
    case endOfMonth = "month"
    case custom = "custom"
    case none = "none"
    
    var id: String { rawValue }
    
    var displayName: String {
        switch self {
        case .endOfToday: return "当天结束"
        case .endOfTomorrow: return "第二天结束"
        case .hours12: return "12小时后"
        case .hours24: return "24小时后"
        case .endOfWeek: return "本周末"
        case .endOfMonth: return "本月末"
        case .custom: return "自定义"
        case .none: return "不设置"
        }
    }
    
    var icon: String {
        switch self {
        case .endOfToday: return "sun.max.fill"
        case .endOfTomorrow: return "sunrise.fill"
        case .hours12: return "clock.fill"
        case .hours24: return "clock.badge.fill"
        case .endOfWeek: return "calendar.badge.clock"
        case .endOfMonth: return "calendar"
        case .custom: return "slider.horizontal.3"
        case .none: return "xmark.circle"
        }
    }
    
    var description: String {
        switch self {
        case .endOfToday: return "23:59"
        case .endOfTomorrow: return "明天 23:59"
        case .hours12: return "从现在起"
        case .hours24: return "从现在起"
        case .endOfWeek: return "周日 23:59"
        case .endOfMonth: return "月末 23:59"
        case .custom: return "自定义时长"
        case .none: return "无截止时间"
        }
    }
    
    /// 计算实际的截止日期
    func calculateDueDate(customValue: Int = 1, customUnit: TimeUnit = .hours) -> Date? {
        let calendar = Calendar.current
        let now = Date()
        
        switch self {
        case .endOfToday:
            return calendar.date(bySettingHour: 23, minute: 59, second: 0, of: now)
        case .endOfTomorrow:
            guard let tomorrow = calendar.date(byAdding: .day, value: 1, to: now) else { return nil }
            return calendar.date(bySettingHour: 23, minute: 59, second: 0, of: tomorrow)
        case .hours12:
            return calendar.date(byAdding: .hour, value: 12, to: now)
        case .hours24:
            return calendar.date(byAdding: .hour, value: 24, to: now)
        case .endOfWeek:
            let weekday = calendar.component(.weekday, from: now)
            let daysUntilSunday = (8 - weekday) % 7
            guard let sunday = calendar.date(byAdding: .day, value: daysUntilSunday == 0 ? 7 : daysUntilSunday, to: now) else { return nil }
            return calendar.date(bySettingHour: 23, minute: 59, second: 0, of: sunday)
        case .endOfMonth:
            guard let nextMonth = calendar.date(byAdding: .month, value: 1, to: now),
                  let startOfNextMonth = calendar.date(from: calendar.dateComponents([.year, .month], from: nextMonth)),
                  let endOfMonth = calendar.date(byAdding: .second, value: -1, to: startOfNextMonth) else { return nil }
            return endOfMonth
        case .custom:
            return customUnit.addToDate(now, value: customValue)
        case .none:
            return nil
        }
    }
}

// MARK: - 订阅类型
enum SubscriptionType: String, Codable {
    case imported = "imported"  // 已导入（一次性）
}

// MARK: - 日历订阅项
struct CalendarSubscription: Identifiable, Codable, Equatable {
    var id = UUID()
    var name: String
    var url: String  // 原始来源（仅用于显示）
    var isEnabled: Bool
    var type: SubscriptionType
    var localFileName: String  // 本地存储的文件名
    
    init(name: String, url: String, isEnabled: Bool = true, type: SubscriptionType = .imported, localFileName: String = "") {
        self.name = name
        self.url = url
        self.isEnabled = isEnabled
        self.type = type
        self.localFileName = localFileName.isEmpty ? "\(UUID().uuidString).ics" : localFileName
    }
    
    var isLocal: Bool {
        url.hasPrefix("/")
    }
    
    var sourceType: String {
        isLocal ? "本地文件" : "远程地址"
    }
}

// MARK: - 设置管理器
@MainActor
class SettingsManager: ObservableObject {
    static let shared = SettingsManager()
    
    @AppStorage("defaultDueDateOption") private var defaultDueDateOptionRaw: String = DefaultDueDateOption.endOfToday.rawValue
    @AppStorage("notificationEnabled") var notificationEnabled: Bool = true
    @AppStorage("notificationType") private var notificationTypeRaw: String = NotificationType.system.rawValue
    @AppStorage("notificationTiming") private var notificationTimingRaw: String = NotificationTiming.atTime.rawValue
    
    // 到期前提醒配置
    @AppStorage("notificationBeforeValue") var notificationBeforeValue: Int = 15
    @AppStorage("notificationBeforeUnit") private var notificationBeforeUnitRaw: String = NotificationTimeUnit.minutes.rawValue
    
    // 每日提醒配置
    @AppStorage("notificationDailyHour") var notificationDailyHour: Int = 9
    @AppStorage("notificationDailyMinute") var notificationDailyMinute: Int = 0
    
    // 每周提醒配置
    @AppStorage("notificationWeekdays") private var notificationWeekdaysData: Data = Data()
    @AppStorage("notificationWeeklyHour") var notificationWeeklyHour: Int = 9
    @AppStorage("notificationWeeklyMinute") var notificationWeeklyMinute: Int = 0
    
    // 每月提醒配置
    @AppStorage("notificationMonthDays") private var notificationMonthDaysData: Data = Data()
    @AppStorage("notificationMonthlyHour") var notificationMonthlyHour: Int = 9
    @AppStorage("notificationMonthlyMinute") var notificationMonthlyMinute: Int = 0
    
    @AppStorage("menuBarIconType") private var menuBarIconTypeRaw: String = MenuBarIconType.systemIcon.rawValue
    @AppStorage("menuBarSystemIcon") var menuBarSystemIcon: String = "checkmark.circle"
    @AppStorage("menuBarCustomText") var menuBarCustomText: String = "✓"
    @AppStorage("menuBarDisplayMode") private var menuBarDisplayModeRaw: String = MenuBarDisplayMode.taskCount.rawValue
    @AppStorage("navigationBarDisplayMode") private var navigationBarDisplayModeRaw: String = NavigationBarDisplayMode.taskCount.rawValue
    @AppStorage("floatingBallDisplayMode") private var floatingBallDisplayModeRaw: String = FloatingBallDisplayMode.fixed.rawValue
    @AppStorage("floatingBallAutoSnap") var floatingBallAutoSnap: Bool = true
    @AppStorage("floatingBallFixedScreenIndex") var floatingBallFixedScreenIndex: Int = 0
    @AppStorage("customDueDateValue") var customDueDateValue: Int = 1
    @AppStorage("customDueDateUnit") private var customDueDateUnitRaw: String = TimeUnit.hours.rawValue
    
    // 编辑器主题设置
    @AppStorage("editorTheme") private var editorThemeRaw: String = "auto"
    
    #if os(macOS)
    // Muya 编辑器设置
    @AppStorage("muyaTheme") private var muyaThemeRaw: String = "auto"
    @AppStorage("muyaMode") private var muyaModeRaw: String = "wysiwyg"
    @AppStorage("muyaToolbarVisible") var muyaToolbarVisible: Bool = true
    @AppStorage("muyaStatusBarVisible") var muyaStatusBarVisible: Bool = true
    @AppStorage("muyaContentTheme") private var muyaContentThemeRaw: String = "default"
    #endif
    
    // 图片存储设置
    // Requirements: 2.4, 2.1.7
    @AppStorage("imageStorageDirectory") var imageStorageDirectory: String = "images"
    @AppStorage("imageStorageMode") private var imageStorageModeRaw: String = ImageStorageMode.localDirectory.rawValue
    
    // 导出设置
    // Requirements: 1.1
    @AppStorage("defaultExportFormat") private var defaultExportFormatRaw: String = ExportFormat.markdown.rawValue
    
    // 编辑器其他设置
    @AppStorage("editorFontSize") var editorFontSize: Double = 16.0
    @AppStorage("editorLineHeight") var editorLineHeight: Double = 1.6
    @AppStorage("editorAutoSave") var editorAutoSave: Bool = true
    @AppStorage("editorAutoSaveInterval") var editorAutoSaveInterval: Int = 30 // 秒
    @AppStorage("editorSpellCheck") var editorSpellCheck: Bool = false
    @AppStorage("editorShowLineNumbers") var editorShowLineNumbers: Bool = false
    @AppStorage("editorTabSize") var editorTabSize: Int = 4
    @AppStorage("editorWordWrap") var editorWordWrap: Bool = true
    
    @Published var calendarSubscriptions: [CalendarSubscription] = []
    
    private let subscriptionsKey = "calendarSubscriptions"
    
    var defaultDueDateOption: DefaultDueDateOption {
        get { DefaultDueDateOption(rawValue: defaultDueDateOptionRaw) ?? .endOfToday }
        set { 
            defaultDueDateOptionRaw = newValue.rawValue
            objectWillChange.send()
        }
    }
    
    var customDueDateUnit: TimeUnit {
        get { TimeUnit(rawValue: customDueDateUnitRaw) ?? .hours }
        set {
            customDueDateUnitRaw = newValue.rawValue
            objectWillChange.send()
        }
    }
    
    var notificationBeforeUnit: NotificationTimeUnit {
        get { NotificationTimeUnit(rawValue: notificationBeforeUnitRaw) ?? .minutes }
        set {
            notificationBeforeUnitRaw = newValue.rawValue
            objectWillChange.send()
        }
    }
    
    var notificationWeekdays: Set<Weekday> {
        get {
            guard let decoded = try? JSONDecoder().decode(Set<Weekday>.self, from: notificationWeekdaysData) else {
                return [.monday, .wednesday, .friday] // 默认值
            }
            return decoded
        }
        set {
            if let encoded = try? JSONEncoder().encode(newValue) {
                notificationWeekdaysData = encoded
                objectWillChange.send()
            }
        }
    }
    
    var notificationMonthDays: Set<Int> {
        get {
            guard let decoded = try? JSONDecoder().decode(Set<Int>.self, from: notificationMonthDaysData) else {
                return [1, 15] // 默认值：每月1号和15号
            }
            return decoded
        }
        set {
            if let encoded = try? JSONEncoder().encode(newValue) {
                notificationMonthDaysData = encoded
                objectWillChange.send()
            }
        }
    }
    
    var notificationType: NotificationType {
        get { NotificationType(rawValue: notificationTypeRaw) ?? .system }
        set {
            notificationTypeRaw = newValue.rawValue
            objectWillChange.send()
        }
    }
    
    var notificationTiming: NotificationTiming {
        get { NotificationTiming(rawValue: notificationTimingRaw) ?? .atTime }
        set {
            notificationTimingRaw = newValue.rawValue
            objectWillChange.send()
        }
    }
    
    var menuBarIconType: MenuBarIconType {
        get { MenuBarIconType(rawValue: menuBarIconTypeRaw) ?? .systemIcon }
        set {
            menuBarIconTypeRaw = newValue.rawValue
            objectWillChange.send()
            // 通知 AppDelegate 更新菜单栏
            NotificationCenter.default.post(name: .menuBarDisplayModeChanged, object: nil)
        }
    }
    
    var menuBarDisplayMode: MenuBarDisplayMode {
        get { MenuBarDisplayMode(rawValue: menuBarDisplayModeRaw) ?? .taskCount }
        set {
            menuBarDisplayModeRaw = newValue.rawValue
            objectWillChange.send()
            // 通知 AppDelegate 更新菜单栏
            NotificationCenter.default.post(name: .menuBarDisplayModeChanged, object: nil)
        }
    }
    
    var navigationBarDisplayMode: NavigationBarDisplayMode {
        get { NavigationBarDisplayMode(rawValue: navigationBarDisplayModeRaw) ?? .taskCount }
        set {
            navigationBarDisplayModeRaw = newValue.rawValue
            objectWillChange.send()
        }
    }
    
    var floatingBallDisplayMode: FloatingBallDisplayMode {
        get { FloatingBallDisplayMode(rawValue: floatingBallDisplayModeRaw) ?? .fixed }
        set {
            floatingBallDisplayModeRaw = newValue.rawValue
            objectWillChange.send()
            // 通知悬浮球管理器模式已改变
            Task { @MainActor in
                DesktopStickyWindowManager.shared.updateFloatingBallMode(newValue, autoSnap: floatingBallAutoSnap)
            }
        }
    }
    
    /// 编辑器主题设置 ("auto" 跟随系统, 或具体主题名)
    var editorTheme: String {
        get { editorThemeRaw }
        set {
            editorThemeRaw = newValue
            objectWillChange.send()
            // 通知编辑器主题已改变
            NotificationCenter.default.post(name: .editorThemeChanged, object: nil)
        }
    }
    
    /// 获取当前应该使用的编辑器主题
    func getCurrentEditorTheme() -> MuyaTheme {
        if editorTheme == "auto" {
            return MuyaTheme.current
        }
        return MuyaTheme(rawValue: editorTheme) ?? MuyaTheme.current
    }
    
    #if os(macOS)
    // MARK: - Muya 编辑器设置
    
    /// Muya 主题 ("auto" 跟随系统, "light", "dark")
    var muyaTheme: String {
        get { muyaThemeRaw }
        set {
            muyaThemeRaw = newValue
            objectWillChange.send()
            NotificationCenter.default.post(name: .muyaThemeChanged, object: nil)
        }
    }
    
    /// 获取当前应该使用的 Muya 主题
    func getCurrentMuyaTheme() -> MuyaTheme {
        if muyaTheme == "auto" {
            return MuyaTheme.current
        }
        return MuyaTheme(rawValue: muyaTheme) ?? MuyaTheme.current
    }
    
    /// Muya 编辑模式
    var muyaMode: MuyaMode {
        get { MuyaMode(rawValue: muyaModeRaw) ?? .wysiwyg }
        set {
            muyaModeRaw = newValue.rawValue
            objectWillChange.send()
            NotificationCenter.default.post(name: .muyaModeChanged, object: nil)
        }
    }
    
    /// Muya 内容主题
    var muyaContentTheme: String {
        get { muyaContentThemeRaw }
        set {
            muyaContentThemeRaw = newValue
            objectWillChange.send()
            NotificationCenter.default.post(name: .muyaContentThemeChanged, object: nil, userInfo: ["theme": newValue])
        }
    }
    
    /// 设置 Muya 工具栏可见性
    func setMuyaToolbarVisible(_ visible: Bool) {
        muyaToolbarVisible = visible
        objectWillChange.send()
        NotificationCenter.default.post(name: .muyaToolbarVisibilityChanged, object: nil, userInfo: ["visible": visible])
    }
    
    /// 设置 Muya 状态栏可见性
    func setMuyaStatusBarVisible(_ visible: Bool) {
        muyaStatusBarVisible = visible
        objectWillChange.send()
        NotificationCenter.default.post(name: .muyaStatusBarVisibilityChanged, object: nil, userInfo: ["visible": visible])
    }
    
    /// 图片存储模式
    /// Requirements: 2.1.7
    var imageStorageMode: ImageStorageMode {
        get { ImageStorageMode(rawValue: imageStorageModeRaw) ?? .localDirectory }
        set {
            imageStorageModeRaw = newValue.rawValue
            objectWillChange.send()
            // Update ImageHandler config
            updateImageHandlerConfig()
        }
    }
    
    /// 默认导出格式
    /// Requirements: 1.1
    var defaultExportFormat: ExportFormat {
        get { ExportFormat(rawValue: defaultExportFormatRaw) ?? .markdown }
        set {
            defaultExportFormatRaw = newValue.rawValue
            objectWillChange.send()
        }
    }
    
    /// 更新 ImageHandler 配置
    /// Requirements: 2.4
    func updateImageHandlerConfig() {
        let config = ImageStorageConfig(
            storageDirectory: imageStorageDirectory,
            useRelativePath: true,
            generateUniqueFilename: true,
            defaultStorageMode: imageStorageMode
        )
        ImageHandler.shared.updateConfig(config)
    }
    
    /// 设置图片存储目录
    /// Requirements: 2.4
    func setImageStorageDirectory(_ directory: String) {
        imageStorageDirectory = directory
        objectWillChange.send()
        updateImageHandlerConfig()
    }
    #endif
    
    /// 获取新任务的默认截止时间
    func getDefaultDueDate() -> Date? {
        return defaultDueDateOption.calculateDueDate(customValue: customDueDateValue, customUnit: customDueDateUnit)
    }
    
    private init() {
        loadSubscriptions()
        
        // 如果没有订阅，添加默认的中国节假日
        if calendarSubscriptions.isEmpty {
            calendarSubscriptions = [
                CalendarSubscription(name: "中国节假日", url: "https://calendars.icloud.com/holidays/cn_zh.ics")
            ]
            saveSubscriptions()
        }
    }
    
    // MARK: - 日历订阅管理
    
    /// 获取日历文件存储目录
    private func getCalendarStorageDirectory() -> URL? {
        guard let appSupport = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask).first else {
            return nil
        }
        let calendarDir = appSupport.appendingPathComponent("FlowTask/Calendars", isDirectory: true)
        
        // 确保目录存在
        try? FileManager.default.createDirectory(at: calendarDir, withIntermediateDirectories: true)
        
        return calendarDir
    }
    
    /// 从远程 URL 导入日历
    func importCalendarFromURL(name: String, url: String) async throws {
        guard let urlObj = URL(string: url) else {
            throw NSError(domain: "FlowTask", code: -1, userInfo: [NSLocalizedDescriptionKey: "无效的 URL"])
        }
        
        // 配置 URLSession，禁用代理
        let config = URLSessionConfiguration.default
        config.connectionProxyDictionary = [:]  // 禁用系统代理
        config.timeoutIntervalForRequest = 30
        config.timeoutIntervalForResource = 60
        
        let session = URLSession(configuration: config)
        
        do {
            // 下载内容
            let (data, response) = try await session.data(from: urlObj)
            
            // 检查响应
            if let httpResponse = response as? HTTPURLResponse {
                guard (200...299).contains(httpResponse.statusCode) else {
                    throw NSError(domain: "FlowTask", code: httpResponse.statusCode, 
                                userInfo: [NSLocalizedDescriptionKey: "服务器返回错误: \(httpResponse.statusCode)"])
                }
            }
            
            // 验证数据
            guard data.count > 0 else {
                throw NSError(domain: "FlowTask", code: -1, userInfo: [NSLocalizedDescriptionKey: "下载的文件为空"])
            }
            
            // 保存到本地
            try await saveCalendarData(data, name: name, sourceURL: url)
        } catch let error as NSError {
            // 提供更友好的错误信息
            if error.domain == NSURLErrorDomain {
                switch error.code {
                case NSURLErrorNotConnectedToInternet:
                    throw NSError(domain: "FlowTask", code: -1, userInfo: [NSLocalizedDescriptionKey: "无网络连接"])
                case NSURLErrorTimedOut:
                    throw NSError(domain: "FlowTask", code: -1, userInfo: [NSLocalizedDescriptionKey: "连接超时，请检查网络"])
                case NSURLErrorCannotFindHost:
                    throw NSError(domain: "FlowTask", code: -1, userInfo: [NSLocalizedDescriptionKey: "无法找到服务器"])
                default:
                    throw NSError(domain: "FlowTask", code: -1, userInfo: [NSLocalizedDescriptionKey: "网络错误: \(error.localizedDescription)"])
                }
            }
            throw error
        }
    }
    
    /// 从本地文件导入日历
    func importCalendarFromFile(name: String, filePath: String) throws {
        let fileURL = URL(fileURLWithPath: filePath)
        let data = try Data(contentsOf: fileURL)
        
        // 保存到 app 内部
        Task {
            try await saveCalendarData(data, name: name, sourceURL: filePath)
        }
    }
    
    /// 保存日历数据到 app 内部
    private func saveCalendarData(_ data: Data, name: String, sourceURL: String) async throws {
        guard let storageDir = getCalendarStorageDirectory() else {
            throw NSError(domain: "FlowTask", code: -1, userInfo: [NSLocalizedDescriptionKey: "无法创建存储目录"])
        }
        
        let fileName = "\(UUID().uuidString).ics"
        let fileURL = storageDir.appendingPathComponent(fileName)
        
        // 写入文件
        try data.write(to: fileURL)
        
        // 添加到订阅列表
        let subscription = CalendarSubscription(
            name: name,
            url: sourceURL,
            isEnabled: true,
            type: .imported,
            localFileName: fileName
        )
        
        await MainActor.run {
            calendarSubscriptions.append(subscription)
            saveSubscriptions()
            notifyCalendarServiceToReload()
        }
    }
    
    /// 获取本地日历文件路径
    func getLocalCalendarPath(for subscription: CalendarSubscription) -> URL? {
        guard let storageDir = getCalendarStorageDirectory() else { return nil }
        return storageDir.appendingPathComponent(subscription.localFileName)
    }
    
    func addSubscription(name: String, url: String, type: SubscriptionType = .imported) {
        // 不再直接添加，需要通过导入
        print("请使用 importCalendarFromURL 或 importCalendarFromFile")
    }
    
    func addLocalSubscription(name: String, filePath: String) {
        // 不再直接添加，需要通过导入
        print("请使用 importCalendarFromFile")
    }
    
    func removeSubscription(_ subscription: CalendarSubscription) {
        // 删除本地文件
        if let localPath = getLocalCalendarPath(for: subscription) {
            try? FileManager.default.removeItem(at: localPath)
        }
        
        calendarSubscriptions.removeAll { $0.id == subscription.id }
        saveSubscriptions()
        notifyCalendarServiceToReload()
    }
    
    func updateSubscription(_ subscription: CalendarSubscription) {
        if let index = calendarSubscriptions.firstIndex(where: { $0.id == subscription.id }) {
            calendarSubscriptions[index] = subscription
            saveSubscriptions()
            notifyCalendarServiceToReload()
        }
    }
    
    func toggleSubscription(_ subscription: CalendarSubscription) {
        if let index = calendarSubscriptions.firstIndex(where: { $0.id == subscription.id }) {
            calendarSubscriptions[index].isEnabled.toggle()
            saveSubscriptions()
            notifyCalendarServiceToReload()
        }
    }
    
    /// 获取所有启用的订阅URL
    func getEnabledSubscriptionURLs() -> [String] {
        return calendarSubscriptions.filter { $0.isEnabled }.map { $0.url }
    }
    
    private func saveSubscriptions() {
        if let data = try? JSONEncoder().encode(calendarSubscriptions) {
            UserDefaults.standard.set(data, forKey: subscriptionsKey)
        }
    }
    
    private func loadSubscriptions() {
        if let data = UserDefaults.standard.data(forKey: subscriptionsKey),
           let subscriptions = try? JSONDecoder().decode([CalendarSubscription].self, from: data) {
            calendarSubscriptions = subscriptions
        }
    }
    
    private func notifyCalendarServiceToReload() {
        // 通知日历服务重新加载
        Task {
            await ICSCalendarService.shared.reloadAllSubscriptions()
        }
    }
}


// MARK: - Notification Names
extension Notification.Name {
    static let menuBarDisplayModeChanged = Notification.Name("menuBarDisplayModeChanged")
    static let showTaskDetail = Notification.Name("showTaskDetail")
    static let selectTask = Notification.Name("selectTask")
    static let editorThemeChanged = Notification.Name("editorThemeChanged")
    static let toggleMuyaOutline = Notification.Name("toggleMuyaOutline")
    
    // Muya 编辑器通知
    static let muyaThemeChanged = Notification.Name("muyaThemeChanged")
    static let muyaContentThemeChanged = Notification.Name("muyaContentThemeChanged")
    static let muyaModeChanged = Notification.Name("muyaModeChanged")
    static let muyaToolbarVisibilityChanged = Notification.Name("muyaToolbarVisibilityChanged")
    static let muyaStatusBarVisibilityChanged = Notification.Name("muyaStatusBarVisibilityChanged")
    static let muyaOutlineVisibilityChanged = Notification.Name("muyaOutlineVisibilityChanged")
    static let editorTypeChanged = Notification.Name("editorTypeChanged")
    static let muyaHistoryStateChanged = Notification.Name("muyaHistoryStateChanged")
    static let muyaSaveRequested = Notification.Name("muyaSaveRequested")
}
