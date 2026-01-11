import SwiftUI
import UniformTypeIdentifiers

#if os(macOS)

// MARK: - 独立设置窗口视图
struct SettingsWindowView: View {
    @Environment(\.dismiss) private var dismiss
    @State private var selectedCategory: SettingsCategory = .appearance
    @State private var animateContent = false
    
    var body: some View {
        HStack(spacing: 0) {
            // 左侧分类列表
            VStack(alignment: .leading, spacing: 4) {
                ForEach(SettingsCategory.allCases) { category in
                    sidebarCategoryButton(category)
                }
                Spacer()
            }
            .padding(12)
            .frame(width: 140)
            .background(Color(.windowBackgroundColor).opacity(0.5))
            
            Divider()
            
            // 右侧内容区域
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    switch selectedCategory {
                    case .appearance:
                        AppearanceSettingsContent()
                    case .task:
                        TaskSettingsContent()
                    case .notes:
                        NotesSettingsContent()
                    case .calendar:
                        CalendarSettingsContent()
                    case .stickyWindow:
                        StickyWindowSettingsContent()
                    case .about:
                        AboutSettingsContent()
                    }
                }
                .opacity(animateContent ? 1 : 0)
                .offset(y: animateContent ? 0 : 10)
                .padding(24)
                .frame(maxWidth: .infinity, alignment: .leading)
            }
            .frame(maxWidth: .infinity)
        }
        .frame(minWidth: 650, minHeight: 500)
        .background(Color(.windowBackgroundColor))
        .onAppear {
            withAnimation(.easeOut(duration: 0.2)) {
                animateContent = true
            }
        }
    }
    
    private func sidebarCategoryButton(_ category: SettingsCategory) -> some View {
        let isSelected = selectedCategory == category
        
        return Button {
            animateContent = false
            withAnimation(.easeInOut(duration: 0.1)) {
                selectedCategory = category
            }
            withAnimation(.easeOut(duration: 0.2).delay(0.05)) {
                animateContent = true
            }
        } label: {
            HStack(spacing: 8) {
                Image(systemName: category.icon)
                    .font(.system(size: 13))
                    .frame(width: 18)
                Text(category.rawValue)
                    .font(.system(size: 13))
                Spacer()
            }
            .foregroundColor(isSelected ? .white : .primary)
            .padding(.horizontal, 10)
            .padding(.vertical, 7)
            .background(
                RoundedRectangle(cornerRadius: 6)
                    .fill(isSelected ? Color.accentColor : Color.clear)
            )
            .contentShape(RoundedRectangle(cornerRadius: 6))
        }
        .buttonStyle(.plain)
    }
}

// MARK: - 设置分类
enum SettingsCategory: String, CaseIterable, Identifiable {
    case appearance = "外观"
    case task = "任务"
    case notes = "笔记"
    case calendar = "日历"
    case stickyWindow = "桌面贴图"
    case about = "关于"
    
    var id: String { rawValue }
    
    var icon: String {
        switch self {
        case .appearance: return "paintbrush"
        case .task: return "checkmark.circle"
        case .notes: return "doc.text"
        case .calendar: return "calendar"
        case .stickyWindow: return "macwindow"
        case .about: return "info.circle"
        }
    }
}

// MARK: - 设置视图 (保留用于兼容)
struct SettingsView: View {
    @State private var selectedCategory: SettingsCategory = .appearance
    @State private var animateContent = false
    
    var body: some View {
        VStack(spacing: 0) {
            // 顶部分类导航
            HStack(spacing: 8) {
                ForEach(SettingsCategory.allCases) { category in
                    categoryButton(category)
                }
                Spacer()
            }
            .padding(.horizontal, 24)
            .padding(.vertical, 16)
            .background(Color(.controlBackgroundColor).opacity(0.3))
            
            Divider()
            
            // 内容区域
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    switch selectedCategory {
                    case .appearance:
                        AppearanceSettingsContent()
                    case .task:
                        TaskSettingsContent()
                    case .notes:
                        NotesSettingsContent()
                    case .calendar:
                        CalendarSettingsContent()
                    case .stickyWindow:
                        StickyWindowSettingsContent()
                    case .about:
                        AboutSettingsContent()
                    }
                }
                .opacity(animateContent ? 1 : 0)
                .offset(y: animateContent ? 0 : 20)
                .padding(24)
                .frame(maxWidth: .infinity, alignment: .leading)
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(Color(.windowBackgroundColor))
        .navigationTitle("设置")
        .onAppear {
            withAnimation(.spring(response: 0.5, dampingFraction: 0.8).delay(0.1)) {
                animateContent = true
            }
        }
    }
    
    private func categoryButton(_ category: SettingsCategory) -> some View {
        let isSelected = selectedCategory == category
        
        return Button {
            // 切换分类时重新触发动画
            animateContent = false
            withAnimation(.easeInOut(duration: 0.15)) {
                selectedCategory = category
            }
            withAnimation(.spring(response: 0.5, dampingFraction: 0.8).delay(0.1)) {
                animateContent = true
            }
        } label: {
            HStack(spacing: 6) {
                Image(systemName: category.icon)
                    .font(.system(size: 13))
                Text(category.rawValue)
                    .font(.system(size: 13))
            }
            .foregroundColor(isSelected ? .white : .primary)
            .padding(.horizontal, 14)
            .padding(.vertical, 8)
            .frame(minWidth: 0, maxWidth: .infinity) // 让内容填充整个按钮区域
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(isSelected ? Color.accentColor : Color(.controlBackgroundColor))
            )
            .contentShape(RoundedRectangle(cornerRadius: 8)) // 确保整个区域可点击
        }
        .buttonStyle(.plain)
    }
}

// MARK: - 外观设置
struct AppearanceSettingsContent: View {
    @ObservedObject private var settings = SettingsManager.shared
    @State private var showIconPicker = false
    @State private var searchIconText = ""
    
    // 常用系统图标
    private let commonIcons = [
        "checkmark.circle", "checkmark.circle.fill",
        "list.bullet", "list.bullet.circle",
        "square.and.pencil", "pencil.circle",
        "calendar", "calendar.circle",
        "clock", "clock.fill",
        "star", "star.fill",
        "heart", "heart.fill",
        "flag", "flag.fill",
        "bookmark", "bookmark.fill",
        "paperplane", "paperplane.fill",
        "tray", "tray.fill"
    ]
    
    // 常用表情符号
    private let commonEmojis = [
        "✓", "✔️", "✅", "☑️",
        "📝", "📋", "📌", "📍",
        "⭐", "🌟", "💫", "✨",
        "🎯", "🎪", "🎨", "🎭",
        "🔥", "💡", "⚡", "🌈",
        "🚀", "🎉", "🎊", "🎈"
    ]
    
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text("外观")
                .font(.title2)
                .fontWeight(.semibold)
            
            VStack(alignment: .leading, spacing: 16) {
                // 菜单栏图标设置
                VStack(alignment: .leading, spacing: 12) {
                    HStack {
                        Text("菜单栏图标")
                            .font(.headline)
                        
                        Spacer()
                        
                        // 预览
                        menuBarPreview
                    }
                    
                    Text("自定义 macOS 顶部菜单栏的图标样式")
                        .font(.caption)
                        .foregroundColor(.secondary)
                    
                    // 图标类型选择
                    VStack(spacing: 8) {
                        ForEach(MenuBarIconType.allCases, id: \.self) { type in
                            iconTypeButton(type)
                        }
                    }
                    .padding(.top, 4)
                    
                    // 根据选择的类型显示不同的配置界面
                    switch settings.menuBarIconType {
                    case .systemIcon:
                        systemIconPicker
                    case .customText:
                        customTextInput
                    case .emoji:
                        emojiPicker
                    }
                }
                
                Divider()
                
                // 菜单栏显示模式
                VStack(alignment: .leading, spacing: 8) {
                    Text("菜单栏显示内容")
                        .font(.headline)
                    
                    Text("选择图标后面显示的内容")
                        .font(.caption)
                        .foregroundColor(.secondary)
                    
                    VStack(spacing: 8) {
                        ForEach(MenuBarDisplayMode.allCases, id: \.self) { mode in
                            menuBarModeButton(mode)
                        }
                    }
                    .padding(.top, 4)
                }
            }
            .padding()
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(RoundedRectangle(cornerRadius: 10).fill(Color(.controlBackgroundColor)))
        }
    }
    
    // MARK: - 菜单栏预览
    private var menuBarPreview: some View {
        HStack(spacing: 4) {
            // 图标预览
            Group {
                switch settings.menuBarIconType {
                case .systemIcon:
                    Image(systemName: settings.menuBarSystemIcon)
                        .font(.system(size: 14))
                case .customText, .emoji:
                    Text(settings.menuBarCustomText)
                        .font(.system(size: 14))
                }
            }
            
            // 内容预览
            Text(menuBarContentPreview)
                .font(.system(size: 13))
                .monospacedDigit()
        }
        .foregroundColor(.secondary)
        .padding(.horizontal, 10)
        .padding(.vertical, 6)
        .background(Color(.controlBackgroundColor))
        .cornerRadius(6)
    }
    
    private var menuBarContentPreview: String {
        switch settings.menuBarDisplayMode {
        case .taskCount: return "5"
        case .todayRemaining: return "3"
        case .progress: return "75%"
        case .greeting: return "☀️"
        case .simple: return ""
        }
    }
    
    // MARK: - 图标类型按钮
    private func iconTypeButton(_ type: MenuBarIconType) -> some View {
        let isSelected = settings.menuBarIconType == type
        
        return Button {
            settings.menuBarIconType = type
        } label: {
            HStack(spacing: 12) {
                Image(systemName: type.icon)
                    .font(.system(size: 14))
                    .foregroundColor(isSelected ? .white : .accentColor)
                    .frame(width: 24)
                
                VStack(alignment: .leading, spacing: 2) {
                    Text(type.displayName)
                        .font(.system(size: 13, weight: isSelected ? .semibold : .regular))
                    Text(type.description)
                        .font(.caption)
                        .foregroundColor(isSelected ? .white.opacity(0.8) : .secondary)
                }
                
                Spacer()
                
                if isSelected {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundColor(.white)
                }
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 10)
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(isSelected ? Color.accentColor : Color(.textBackgroundColor))
            )
            .contentShape(RoundedRectangle(cornerRadius: 8))
        }
        .buttonStyle(.plain)
    }
    
    // MARK: - 系统图标选择器
    private var systemIconPicker: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("选择系统图标")
                .font(.subheadline)
                .fontWeight(.medium)
            
            // 搜索框
            HStack {
                Image(systemName: "magnifyingglass")
                    .foregroundColor(.secondary)
                TextField("搜索图标名称...", text: $searchIconText)
                    .textFieldStyle(.plain)
            }
            .padding(.horizontal, 10)
            .padding(.vertical, 6)
            .background(Color(.textBackgroundColor))
            .cornerRadius(6)
            
            // 图标网格
            LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: 8), count: 6), spacing: 8) {
                ForEach(commonIcons, id: \.self) { iconName in
                    iconButton(iconName)
                }
            }
            .padding(.top, 4)
            
            Text("提示：你也可以直接输入 SF Symbols 图标名称")
                .font(.caption)
                .foregroundColor(.secondary)
                .padding(.top, 4)
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 6)
                .fill(Color.accentColor.opacity(0.05))
        )
    }
    
    private func iconButton(_ iconName: String) -> some View {
        let isSelected = settings.menuBarSystemIcon == iconName
        
        return Button {
            settings.menuBarSystemIcon = iconName
            NotificationCenter.default.post(name: .menuBarDisplayModeChanged, object: nil)
        } label: {
            Image(systemName: iconName)
                .font(.system(size: 18))
                .foregroundColor(isSelected ? .white : .primary)
                .frame(width: 40, height: 40)
                .background(
                    RoundedRectangle(cornerRadius: 6)
                        .fill(isSelected ? Color.accentColor : Color(.textBackgroundColor))
                )
        }
        .buttonStyle(.plain)
    }
    
    // MARK: - 自定义文字输入
    private var customTextInput: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("输入自定义文字")
                .font(.subheadline)
                .fontWeight(.medium)
            
            HStack(spacing: 12) {
                TextField("例如：✓ 或 Task", text: $settings.menuBarCustomText)
                    .textFieldStyle(.plain)
                    .font(.system(size: 16))
                    .frame(maxWidth: 300)
                    .padding(.horizontal, 12)
                    .padding(.vertical, 8)
                    .background(Color(.textBackgroundColor))
                    .cornerRadius(6)
                    .onChange(of: settings.menuBarCustomText) { _, newValue in
                        // 限制长度为 4 个字符
                        if newValue.count > 4 {
                            settings.menuBarCustomText = String(newValue.prefix(4))
                        }
                        NotificationCenter.default.post(name: .menuBarDisplayModeChanged, object: nil)
                    }
                
                Text("最多 4 个字符")
                    .font(.caption)
                    .foregroundColor(.secondary)
            }
            
            Text("建议使用简短的符号或字母，如 ✓、Task、📝、Done 等")
                .font(.caption)
                .foregroundColor(.secondary)
                .padding(.top, 4)
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 6)
                .fill(Color.accentColor.opacity(0.05))
        )
    }
    
    // MARK: - 表情符号选择器
    private var emojiPicker: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("选择表情符号")
                .font(.subheadline)
                .fontWeight(.medium)
            
            // 表情网格
            LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: 8), count: 8), spacing: 8) {
                ForEach(commonEmojis, id: \.self) { emoji in
                    emojiButton(emoji)
                }
            }
            .padding(.top, 4)
            
            Text("提示：你也可以在上方输入框直接输入任何表情符号")
                .font(.caption)
                .foregroundColor(.secondary)
                .padding(.top, 4)
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 6)
                .fill(Color.accentColor.opacity(0.05))
        )
    }
    
    private func emojiButton(_ emoji: String) -> some View {
        let isSelected = settings.menuBarCustomText == emoji
        
        return Button {
            settings.menuBarCustomText = emoji
            NotificationCenter.default.post(name: .menuBarDisplayModeChanged, object: nil)
        } label: {
            Text(emoji)
                .font(.system(size: 20))
                .frame(width: 40, height: 40)
                .background(
                    RoundedRectangle(cornerRadius: 6)
                        .fill(isSelected ? Color.accentColor.opacity(0.2) : Color(.textBackgroundColor))
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 6)
                        .stroke(isSelected ? Color.accentColor : Color.clear, lineWidth: 2)
                )
        }
        .buttonStyle(.plain)
    }
    
    private func menuBarModeButton(_ mode: MenuBarDisplayMode) -> some View {
        let isSelected = settings.menuBarDisplayMode == mode
        
        return Button {
            settings.menuBarDisplayMode = mode
        } label: {
            HStack(spacing: 12) {
                Image(systemName: mode.icon)
                    .font(.system(size: 14))
                    .foregroundColor(isSelected ? .white : .accentColor)
                    .frame(width: 24)
                
                VStack(alignment: .leading, spacing: 2) {
                    Text(mode.displayName)
                        .font(.system(size: 13, weight: isSelected ? .semibold : .regular))
                    Text(mode.description)
                        .font(.caption)
                        .foregroundColor(isSelected ? .white.opacity(0.8) : .secondary)
                }
                
                Spacer()
                
                // 示例预览
                Text(mode.example)
                    .font(.system(size: 12))
                    .foregroundColor(isSelected ? .white.opacity(0.9) : .secondary)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(
                        RoundedRectangle(cornerRadius: 4)
                            .fill(isSelected ? Color.white.opacity(0.2) : Color(.textBackgroundColor))
                    )
                
                if isSelected {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundColor(.white)
                }
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 10)
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(isSelected ? Color.accentColor : Color(.textBackgroundColor))
            )
            .contentShape(RoundedRectangle(cornerRadius: 8))
        }
        .buttonStyle(.plain)
    }
}

// MARK: - 笔记设置
struct NotesSettingsContent: View {
    @ObservedObject private var settings = SettingsManager.shared
    
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text("笔记")
                .font(.title2)
                .fontWeight(.semibold)
            
            // Muya 编辑器设置
            muyaEditorSettings
            
            // 自动保存设置
            autoSaveSettings
            
            // 图片和导出设置
            imageAndExportSettings
        }
    }
    
    // MARK: - Muya 编辑器设置
    private var muyaEditorSettings: some View {
        VStack(alignment: .leading, spacing: 16) {
            // 笔记主题（合并编辑器主题和内容样式）
            settingRow(
                title: "笔记主题",
                description: "笔记的整体外观样式"
            ) {
                Picker("", selection: Binding(
                    get: { MuyaContentTheme(rawValue: settings.muyaContentTheme) ?? .default },
                    set: { settings.muyaContentTheme = $0.rawValue }
                )) {
                    ForEach(MuyaContentTheme.allCases, id: \.rawValue) { theme in
                        Text(theme.displayName).tag(theme)
                    }
                }
                .pickerStyle(.menu)
                .frame(width: 120)
            }
            
            Divider()
            
            // 编辑模式
            settingRow(
                title: "编辑模式",
                description: "Markdown 编辑器的编辑模式"
            ) {
                Picker("", selection: $settings.muyaMode) {
                    ForEach(MuyaMode.allCases, id: \.rawValue) { mode in
                        Text(mode.displayName).tag(mode)
                    }
                }
                .pickerStyle(.menu)
                .frame(width: 120)
            }
            
            Divider()
            
            // 界面元素显示
            VStack(alignment: .leading, spacing: 12) {
                Text("界面元素")
                    .font(.subheadline)
                    .fontWeight(.medium)
                
                Toggle("显示工具栏", isOn: Binding(
                    get: { settings.muyaToolbarVisible },
                    set: { settings.setMuyaToolbarVisible($0) }
                ))
                
                Toggle("显示状态栏", isOn: Binding(
                    get: { settings.muyaStatusBarVisible },
                    set: { settings.setMuyaStatusBarVisible($0) }
                ))
            }
        }
        .padding()
        .background(RoundedRectangle(cornerRadius: 10).fill(Color(.controlBackgroundColor)))
    }
    
    // MARK: - 自动保存设置
    private var autoSaveSettings: some View {
        VStack(alignment: .leading, spacing: 16) {
            Toggle(isOn: $settings.editorAutoSave) {
                VStack(alignment: .leading, spacing: 2) {
                    Text("自动保存")
                        .font(.subheadline)
                    Text("自动保存编辑内容")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
            }
            
            if settings.editorAutoSave {
                settingRow(title: "保存间隔", description: nil) {
                    Picker("", selection: $settings.editorAutoSaveInterval) {
                        Text("10秒").tag(10)
                        Text("30秒").tag(30)
                        Text("60秒").tag(60)
                        Text("120秒").tag(120)
                    }
                    .pickerStyle(.menu)
                    .frame(width: 80)
                }
                .padding(.leading, 20)
            }
        }
        .padding()
        .background(RoundedRectangle(cornerRadius: 10).fill(Color(.controlBackgroundColor)))
    }
    
    // MARK: - 图片和导出设置
    private var imageAndExportSettings: some View {
        VStack(alignment: .leading, spacing: 16) {
            // 图片存储目录 - 可选择
            HStack {
                VStack(alignment: .leading, spacing: 2) {
                    Text("图片存储目录")
                        .font(.subheadline)
                    Text("粘贴图片的保存位置")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                Spacer()
                
                HStack(spacing: 8) {
                    Text(settings.imageStorageDirectory.isEmpty ? "应用内部" : settings.imageStorageDirectory)
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                        .lineLimit(1)
                        .frame(maxWidth: 150, alignment: .trailing)
                    
                    Button {
                        selectImageStorageDirectory()
                    } label: {
                        Image(systemName: "folder")
                    }
                    .buttonStyle(.bordered)
                    .controlSize(.small)
                    .help("选择图片存储目录")
                }
            }
            
            Divider()
            
            settingRow(
                title: "图片存储模式",
                description: nil
            ) {
                Picker("", selection: $settings.imageStorageMode) {
                    ForEach(ImageStorageMode.allCases, id: \.rawValue) { mode in
                        Text(mode.displayName).tag(mode)
                    }
                }
                .pickerStyle(.menu)
                .frame(width: 120)
            }
            
            Divider()
            
            settingRow(
                title: "默认导出格式",
                description: nil
            ) {
                Picker("", selection: $settings.defaultExportFormat) {
                    ForEach(ExportFormat.allCases, id: \.rawValue) { format in
                        Text(format.displayName).tag(format)
                    }
                }
                .pickerStyle(.menu)
                .frame(width: 120)
            }
        }
        .padding()
        .background(RoundedRectangle(cornerRadius: 10).fill(Color(.controlBackgroundColor)))
    }
    
    // MARK: - 选择图片存储目录
    private func selectImageStorageDirectory() {
        let panel = NSOpenPanel()
        panel.canChooseFiles = false
        panel.canChooseDirectories = true
        panel.allowsMultipleSelection = false
        panel.message = "选择图片存储目录"
        panel.prompt = "选择"
        
        if panel.runModal() == .OK, let url = panel.url {
            // 保存相对路径或绝对路径
            settings.setImageStorageDirectory(url.path)
        }
    }
    
    // MARK: - 设置行组件
    @ViewBuilder
    private func settingRow<Content: View>(
        title: String,
        description: String?,
        @ViewBuilder content: () -> Content
    ) -> some View {
        HStack {
            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(.subheadline)
                if let desc = description {
                    Text(desc)
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
            }
            Spacer()
            content()
        }
    }
}

// MARK: - 任务设置
struct TaskSettingsContent: View {
    @ObservedObject private var settings = SettingsManager.shared
    @ObservedObject private var notificationService = NotificationService.shared
    @State private var showPermissionAlert = false
    
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text("任务")
                .font(.title2)
                .fontWeight(.semibold)
            
            // 通知设置
            VStack(alignment: .leading, spacing: 12) {
                HStack {
                    Text("任务提醒")
                        .font(.headline)
                    
                    Spacer()
                    
                    if !notificationService.isAuthorized {
                        Button {
                            requestNotificationPermission()
                        } label: {
                            HStack(spacing: 4) {
                                Image(systemName: "bell.badge")
                                Text("开启通知权限")
                            }
                            .font(.caption)
                        }
                        .buttonStyle(.bordered)
                        .controlSize(.small)
                    }
                }
                
                Text("在任务即将到期时发送提醒通知")
                    .font(.caption)
                    .foregroundColor(.secondary)
                
                // 启用开关
                Toggle("启用任务提醒", isOn: $settings.notificationEnabled)
                    .onChange(of: settings.notificationEnabled) { _, newValue in
                        if newValue {
                            if notificationService.isAuthorized {
                                NotificationService.shared.startNotificationCheck()
                            } else {
                                showPermissionAlert = true
                                settings.notificationEnabled = false
                            }
                        } else {
                            NotificationService.shared.stopNotificationCheck()
                        }
                    }
                
                if settings.notificationEnabled {
                    VStack(spacing: 12) {
                        Divider()
                        
                        // 通知时机
                        VStack(alignment: .leading, spacing: 8) {
                            Text("提醒时机")
                                .font(.subheadline)
                                .fontWeight(.medium)
                            
                            VStack(spacing: 6) {
                                ForEach(NotificationTiming.allCases, id: \.self) { timing in
                                    notificationTimingButton(timing)
                                }
                            }
                        }
                        
                        // 根据选择的时机显示配置界面
                        if settings.notificationTiming.needsCustomConfig {
                            Divider()
                            timingConfigView
                        }
                        
                        Divider()
                        
                        // 通知方式
                        VStack(alignment: .leading, spacing: 8) {
                            Text("通知方式")
                                .font(.subheadline)
                                .fontWeight(.medium)
                            
                            VStack(spacing: 6) {
                                ForEach(NotificationType.allCases, id: \.self) { type in
                                    notificationTypeButton(type)
                                }
                            }
                        }
                    }
                    .transition(.opacity.combined(with: .move(edge: .top)))
                }
            }
            .padding()
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(RoundedRectangle(cornerRadius: 10).fill(Color(.controlBackgroundColor)))
            .animation(.easeInOut(duration: 0.2), value: settings.notificationEnabled)
            
            // 默认截止时间设置
            VStack(alignment: .leading, spacing: 12) {
                Text("默认截止时间")
                    .font(.headline)
                
                Text("新建任务时自动设置的截止时间")
                    .font(.caption)
                    .foregroundColor(.secondary)
                
                // 选项列表
                VStack(spacing: 8) {
                    ForEach(DefaultDueDateOption.allCases) { option in
                        dueDateOptionButton(option)
                    }
                }
                .padding(.top, 4)
                
                // 自定义输入
                if settings.defaultDueDateOption == .custom {
                    customDueDateInput
                        .padding(.top, 8)
                        .transition(.opacity.combined(with: .move(edge: .top)))
                }
            }
            .padding()
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(RoundedRectangle(cornerRadius: 10).fill(Color(.controlBackgroundColor)))
        }
        .animation(.easeInOut(duration: 0.2), value: settings.defaultDueDateOption)
        .alert("需要通知权限", isPresented: $showPermissionAlert) {
            Button("去设置") {
                openSystemPreferences()
            }
            Button("取消", role: .cancel) {}
        } message: {
            Text("请在系统设置中允许 FlowTask 发送通知")
        }
    }
    
    private func requestNotificationPermission() {
        Task {
            let granted = await NotificationService.shared.requestAuthorization()
            if granted {
                settings.notificationEnabled = true
                NotificationService.shared.startNotificationCheck()
            }
        }
    }
    
    private func openSystemPreferences() {
        #if os(macOS)
        if let url = URL(string: "x-apple.systempreferences:com.apple.preference.notifications") {
            NSWorkspace.shared.open(url)
        }
        #endif
    }
    
    private func notificationTimingButton(_ timing: NotificationTiming) -> some View {
        let isSelected = settings.notificationTiming == timing
        
        return Button {
            settings.notificationTiming = timing
        } label: {
            HStack(spacing: 10) {
                Image(systemName: timing.icon)
                    .font(.system(size: 13))
                    .foregroundColor(isSelected ? .white : .accentColor)
                    .frame(width: 20)
                
                VStack(alignment: .leading, spacing: 2) {
                    Text(timing.displayName)
                        .font(.system(size: 13, weight: isSelected ? .semibold : .regular))
                    Text(timing.description)
                        .font(.caption)
                        .foregroundColor(isSelected ? .white.opacity(0.8) : .secondary)
                }
                
                Spacer()
                
                if isSelected {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundColor(.white)
                        .font(.system(size: 16))
                }
            }
            .padding(.horizontal, 10)
            .padding(.vertical, 8)
            .background(
                RoundedRectangle(cornerRadius: 6)
                    .fill(isSelected ? Color.accentColor : Color(.textBackgroundColor))
            )
            .contentShape(RoundedRectangle(cornerRadius: 6))
        }
        .buttonStyle(.plain)
    }
    
    private func notificationTypeButton(_ type: NotificationType) -> some View {
        let isSelected = settings.notificationType == type
        
        return Button {
            settings.notificationType = type
        } label: {
            HStack(spacing: 10) {
                Image(systemName: type.icon)
                    .font(.system(size: 13))
                    .foregroundColor(isSelected ? .white : .accentColor)
                    .frame(width: 20)
                
                VStack(alignment: .leading, spacing: 2) {
                    Text(type.displayName)
                        .font(.system(size: 13, weight: isSelected ? .semibold : .regular))
                    Text(type.description)
                        .font(.caption)
                        .foregroundColor(isSelected ? .white.opacity(0.8) : .secondary)
                }
                
                Spacer()
                
                if isSelected {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundColor(.white)
                        .font(.system(size: 16))
                }
            }
            .padding(.horizontal, 10)
            .padding(.vertical, 8)
            .background(
                RoundedRectangle(cornerRadius: 6)
                    .fill(isSelected ? Color.accentColor : Color(.textBackgroundColor))
            )
            .contentShape(RoundedRectangle(cornerRadius: 6))
        }
        .buttonStyle(.plain)
    }
    
    // MARK: - 时机配置视图
    @ViewBuilder
    private var timingConfigView: some View {
        VStack(alignment: .leading, spacing: 12) {
            switch settings.notificationTiming {
            case .beforeCustom:
                beforeCustomConfigView
            case .dailyAt:
                dailyConfigView
            case .weeklyOn:
                weeklyConfigView
            case .monthlyOn:
                monthlyConfigView
            default:
                EmptyView()
            }
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 6)
                .fill(Color.accentColor.opacity(0.05))
        )
    }
    
    // 到期前自定义时间配置
    private var beforeCustomConfigView: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("提前时间")
                .font(.caption)
                .foregroundColor(.secondary)
            
            HStack(spacing: 12) {
                Text("提前")
                    .foregroundColor(.secondary)
                
                TextField("", value: $settings.notificationBeforeValue, format: .number)
                    .textFieldStyle(.roundedBorder)
                    .frame(width: 80)
                    .multilineTextAlignment(.center)
                
                Picker("", selection: $settings.notificationBeforeUnit) {
                    ForEach(NotificationTimeUnit.allCases, id: \.self) { unit in
                        Text(unit.displayName).tag(unit)
                    }
                }
                .pickerStyle(.menu)
                .frame(width: 100)
                
                Text("提醒")
                    .foregroundColor(.secondary)
            }
        }
    }
    
    // 每日固定时间配置
    private var dailyConfigView: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("每日提醒时间")
                .font(.caption)
                .foregroundColor(.secondary)
            
            HStack(spacing: 12) {
                Text("每天")
                    .foregroundColor(.secondary)
                
                // 小时选择
                Picker("", selection: $settings.notificationDailyHour) {
                    ForEach(0..<24, id: \.self) { hour in
                        Text(String(format: "%02d", hour)).tag(hour)
                    }
                }
                .pickerStyle(.menu)
                .frame(width: 70)
                
                Text(":")
                    .foregroundColor(.secondary)
                
                // 分钟选择
                Picker("", selection: $settings.notificationDailyMinute) {
                    ForEach([0, 15, 30, 45], id: \.self) { minute in
                        Text(String(format: "%02d", minute)).tag(minute)
                    }
                }
                .pickerStyle(.menu)
                .frame(width: 70)
                
                Text("提醒")
                    .foregroundColor(.secondary)
            }
            
            Text("示例：每天 \(String(format: "%02d:%02d", settings.notificationDailyHour, settings.notificationDailyMinute)) 提醒所有未完成的任务")
                .font(.caption)
                .foregroundColor(.secondary)
                .padding(.top, 4)
        }
    }
    
    // 每周固定时间配置
    private var weeklyConfigView: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("每周提醒设置")
                .font(.caption)
                .foregroundColor(.secondary)
            
            // 星期选择
            VStack(alignment: .leading, spacing: 8) {
                Text("选择星期")
                    .font(.caption)
                    .foregroundColor(.secondary)
                
                HStack(spacing: 8) {
                    ForEach(Weekday.allCases, id: \.self) { weekday in
                        weekdayButton(weekday)
                    }
                }
            }
            
            // 时间选择
            HStack(spacing: 12) {
                Text("时间")
                    .foregroundColor(.secondary)
                
                Picker("", selection: $settings.notificationWeeklyHour) {
                    ForEach(0..<24, id: \.self) { hour in
                        Text(String(format: "%02d", hour)).tag(hour)
                    }
                }
                .pickerStyle(.menu)
                .frame(width: 70)
                
                Text(":")
                    .foregroundColor(.secondary)
                
                Picker("", selection: $settings.notificationWeeklyMinute) {
                    ForEach([0, 15, 30, 45], id: \.self) { minute in
                        Text(String(format: "%02d", minute)).tag(minute)
                    }
                }
                .pickerStyle(.menu)
                .frame(width: 70)
            }
            
            if !settings.notificationWeekdays.isEmpty {
                Text("示例：每周\(settings.notificationWeekdays.sorted(by: { $0.rawValue < $1.rawValue }).map { $0.shortName }.joined(separator: "、")) \(String(format: "%02d:%02d", settings.notificationWeeklyHour, settings.notificationWeeklyMinute)) 提醒")
                    .font(.caption)
                    .foregroundColor(.secondary)
                    .padding(.top, 4)
            }
        }
    }
    
    // 每月固定日期配置
    private var monthlyConfigView: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("每月提醒设置")
                .font(.caption)
                .foregroundColor(.secondary)
            
            // 日期选择
            VStack(alignment: .leading, spacing: 8) {
                Text("选择日期")
                    .font(.caption)
                    .foregroundColor(.secondary)
                
                LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: 6), count: 7), spacing: 6) {
                    ForEach(1...31, id: \.self) { day in
                        monthDayButton(day)
                    }
                }
            }
            
            // 时间选择
            HStack(spacing: 12) {
                Text("时间")
                    .foregroundColor(.secondary)
                
                Picker("", selection: $settings.notificationMonthlyHour) {
                    ForEach(0..<24, id: \.self) { hour in
                        Text(String(format: "%02d", hour)).tag(hour)
                    }
                }
                .pickerStyle(.menu)
                .frame(width: 70)
                
                Text(":")
                    .foregroundColor(.secondary)
                
                Picker("", selection: $settings.notificationMonthlyMinute) {
                    ForEach([0, 15, 30, 45], id: \.self) { minute in
                        Text(String(format: "%02d", minute)).tag(minute)
                    }
                }
                .pickerStyle(.menu)
                .frame(width: 70)
            }
            
            if !settings.notificationMonthDays.isEmpty {
                Text("示例：每月\(settings.notificationMonthDays.sorted().map { "\($0)号" }.joined(separator: "、")) \(String(format: "%02d:%02d", settings.notificationMonthlyHour, settings.notificationMonthlyMinute)) 提醒")
                    .font(.caption)
                    .foregroundColor(.secondary)
                    .padding(.top, 4)
            }
        }
    }
    
    // 星期按钮
    private func weekdayButton(_ weekday: Weekday) -> some View {
        let isSelected = settings.notificationWeekdays.contains(weekday)
        
        return Button {
            var weekdays = settings.notificationWeekdays
            if isSelected {
                weekdays.remove(weekday)
            } else {
                weekdays.insert(weekday)
            }
            settings.notificationWeekdays = weekdays
        } label: {
            Text(weekday.shortName)
                .font(.system(size: 12, weight: isSelected ? .semibold : .regular))
                .foregroundColor(isSelected ? .white : .primary)
                .frame(width: 32, height: 32)
                .background(
                    Circle()
                        .fill(isSelected ? Color.accentColor : Color(.textBackgroundColor))
                )
        }
        .buttonStyle(.plain)
    }
    
    // 月份日期按钮
    private func monthDayButton(_ day: Int) -> some View {
        let isSelected = settings.notificationMonthDays.contains(day)
        
        return Button {
            var days = settings.notificationMonthDays
            if isSelected {
                days.remove(day)
            } else {
                days.insert(day)
            }
            settings.notificationMonthDays = days
        } label: {
            Text("\(day)")
                .font(.system(size: 11, weight: isSelected ? .semibold : .regular))
                .foregroundColor(isSelected ? .white : .primary)
                .frame(width: 32, height: 32)
                .background(
                    RoundedRectangle(cornerRadius: 6)
                        .fill(isSelected ? Color.accentColor : Color(.textBackgroundColor))
                )
        }
        .buttonStyle(.plain)
    }
    
    private func dueDateOptionButton(_ option: DefaultDueDateOption) -> some View {
        let isSelected = settings.defaultDueDateOption == option
        
        return Button {
            settings.defaultDueDateOption = option
        } label: {
            HStack(spacing: 12) {
                Image(systemName: option.icon)
                    .font(.system(size: 16))
                    .foregroundColor(isSelected ? .white : .accentColor)
                    .frame(width: 28, height: 28)
                    .background(
                        Circle()
                            .fill(isSelected ? Color.accentColor : Color.accentColor.opacity(0.1))
                    )
                
                VStack(alignment: .leading, spacing: 2) {
                    Text(option.displayName)
                        .font(.system(size: 14, weight: isSelected ? .semibold : .regular))
                    Text(option.description)
                        .font(.caption)
                        .foregroundColor(isSelected ? .primary.opacity(0.8) : .secondary)
                }
                
                Spacer()
                
                if isSelected {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundColor(.accentColor)
                        .font(.system(size: 18))
                }
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 10)
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(isSelected ? Color.accentColor.opacity(0.08) : Color(.textBackgroundColor))
            )
            .overlay(
                RoundedRectangle(cornerRadius: 8)
                    .stroke(isSelected ? Color.accentColor.opacity(0.3) : Color.clear, lineWidth: 1.5)
            )
            .contentShape(RoundedRectangle(cornerRadius: 8))
        }
        .buttonStyle(.plain)
    }
    
    private var customDueDateInput: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("自定义时长")
                .font(.caption)
                .foregroundColor(.secondary)
            
            HStack(spacing: 12) {
                // 数字输入
                TextField("", value: $settings.customDueDateValue, format: .number)
                    .textFieldStyle(.roundedBorder)
                    .frame(width: 80)
                    .multilineTextAlignment(.center)
                
                // 单位选择
                Picker("", selection: $settings.customDueDateUnit) {
                    ForEach(TimeUnit.allCases, id: \.self) { unit in
                        Text(unit.displayName).tag(unit)
                    }
                }
                .pickerStyle(.menu)
                .frame(width: 100)
                
                Text("后")
                    .foregroundColor(.secondary)
                
                Spacer()
            }
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 6)
                .fill(Color.accentColor.opacity(0.05))
        )
    }
}

// MARK: - 日历设置
struct CalendarSettingsContent: View {
    @ObservedObject private var settings = SettingsManager.shared
    @State private var showAddSubscription = false
    @State private var newSubscriptionName = ""
    @State private var newSubscriptionURL = ""
    @State private var editingSubscription: CalendarSubscription?
    @State private var isImporting = false
    @State private var importError: String?
    
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text("日历导入")
                .font(.title2)
                .fontWeight(.semibold)
            
            VStack(alignment: .leading, spacing: 12) {
                Text("一次性导入日历文件到 App 内部")
                    .font(.caption)
                    .foregroundColor(.secondary)
                
                // 订阅列表
                ForEach(settings.calendarSubscriptions) { subscription in
                    subscriptionRow(subscription)
                }
                
                // 导入按钮
                HStack(spacing: 16) {
                    Button {
                        newSubscriptionName = ""
                        newSubscriptionURL = ""
                        showAddSubscription = true
                    } label: {
                        HStack(spacing: 4) {
                            Image(systemName: "arrow.down.circle")
                            Text("从网址导入")
                        }
                    }
                    .buttonStyle(.bordered)
                    .disabled(isImporting)
                    
                    Button {
                        selectLocalFile()
                    } label: {
                        HStack(spacing: 4) {
                            Image(systemName: "folder")
                            Text("从文件导入")
                        }
                    }
                    .buttonStyle(.bordered)
                    .disabled(isImporting)
                    
                    // 快捷导入
                    Menu("快速导入") {
                        Button("中国节假日") {
                            importFromURL(
                                name: "中国节假日",
                                url: "https://calendars.icloud.com/holidays/cn_zh-hans.ics"
                            )
                        }
                        Button("美国节假日") {
                            importFromURL(
                                name: "美国节假日",
                                url: "https://calendars.icloud.com/holidays/us_en-us.ics"
                            )
                        }
                    }
                    .disabled(isImporting)
                    
                    if isImporting {
                        ProgressView()
                            .scaleEffect(0.8)
                    }
                }
                .padding(.top, 8)
                
                // 错误提示
                if let error = importError {
                    Text(error)
                        .font(.caption)
                        .foregroundColor(.red)
                        .padding(.horizontal, 12)
                        .padding(.vertical, 8)
                        .background(Color.red.opacity(0.1))
                        .cornerRadius(6)
                }
            }
            .padding()
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(RoundedRectangle(cornerRadius: 10).fill(Color(.controlBackgroundColor)))
        }
        .sheet(isPresented: $showAddSubscription) {
            ImportFromURLSheet(
                name: $newSubscriptionName,
                url: $newSubscriptionURL,
                onImport: {
                    importFromURL(name: newSubscriptionName, url: newSubscriptionURL)
                    showAddSubscription = false
                },
                onCancel: { showAddSubscription = false }
            )
        }
        .sheet(item: $editingSubscription) { subscription in
            EditSubscriptionView(
                subscription: subscription,
                onSave: { updated in
                    settings.updateSubscription(updated)
                    editingSubscription = nil
                },
                onCancel: { editingSubscription = nil }
            )
        }
    }
    
    private func importFromURL(name: String, url: String) {
        isImporting = true
        importError = nil
        
        Task {
            do {
                try await settings.importCalendarFromURL(name: name, url: url)
                await MainActor.run {
                    isImporting = false
                }
            } catch {
                await MainActor.run {
                    isImporting = false
                    importError = "导入失败: \(error.localizedDescription)"
                }
            }
        }
    }
    
    private func selectLocalFile() {
        let panel = NSOpenPanel()
        panel.title = "选择 ICS 日历文件"
        panel.allowedContentTypes = [.init(filenameExtension: "ics")!]
        panel.allowsMultipleSelection = false
        panel.canChooseDirectories = false
        panel.canChooseFiles = true
        
        if panel.runModal() == .OK, let url = panel.url {
            let fileName = url.deletingPathExtension().lastPathComponent
            isImporting = true
            importError = nil
            
            Task {
                do {
                    try settings.importCalendarFromFile(name: fileName, filePath: url.path)
                    await MainActor.run {
                        isImporting = false
                    }
                } catch {
                    await MainActor.run {
                        isImporting = false
                        importError = "导入失败: \(error.localizedDescription)"
                    }
                }
            }
        }
    }
    
    private func subscriptionRow(_ subscription: CalendarSubscription) -> some View {
        HStack(spacing: 12) {
            Toggle("", isOn: Binding(
                get: { subscription.isEnabled },
                set: { _ in settings.toggleSubscription(subscription) }
            ))
            .toggleStyle(.switch)
            .labelsHidden()
            
            // 类型图标
            Image(systemName: subscription.isLocal ? "folder.fill" : "globe")
                .foregroundColor(subscription.isLocal ? .orange : .blue)
                .frame(width: 16)
            
            VStack(alignment: .leading, spacing: 2) {
                HStack(spacing: 6) {
                    Text(subscription.name)
                        .foregroundColor(subscription.isEnabled ? .primary : .secondary)
                    
                    Text(subscription.sourceType)
                        .font(.caption2)
                        .padding(.horizontal, 6)
                        .padding(.vertical, 2)
                        .background(Color.secondary.opacity(0.2))
                        .foregroundColor(.secondary)
                        .cornerRadius(4)
                }
                Text(subscription.url)
                    .font(.caption)
                    .foregroundColor(.secondary)
                    .lineLimit(1)
                    .truncationMode(.middle)
            }
            
            Spacer()
            
            Button {
                settings.removeSubscription(subscription)
            } label: {
                Image(systemName: "trash")
                    .foregroundColor(.red.opacity(0.7))
            }
            .buttonStyle(.plain)
        }
        .padding(10)
        .background(RoundedRectangle(cornerRadius: 6).fill(Color(.textBackgroundColor)))
    }
}

// MARK: - 从网址导入弹窗
struct ImportFromURLSheet: View {
    @Binding var name: String
    @Binding var url: String
    let onImport: () -> Void
    let onCancel: () -> Void
    
    @State private var isTesting = false
    @State private var testResult: String?
    
    var body: some View {
        VStack(spacing: 20) {
            Text("从网址导入日历")
                .font(.headline)
            
            VStack(alignment: .leading, spacing: 8) {
                Text("名称")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                TextField("例如：中国节假日", text: $name)
                    .textFieldStyle(.roundedBorder)
            }
            
            VStack(alignment: .leading, spacing: 8) {
                HStack {
                    Text("ICS 订阅地址")
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                    
                    Spacer()
                    
                    Button {
                        testConnection()
                    } label: {
                        HStack(spacing: 4) {
                            if isTesting {
                                ProgressView()
                                    .scaleEffect(0.7)
                            } else {
                                Image(systemName: "network")
                            }
                            Text("测试")
                        }
                        .font(.caption)
                    }
                    .buttonStyle(.bordered)
                    .controlSize(.small)
                    .disabled(url.isEmpty || isTesting)
                }
                
                TextField("https://example.com/calendar.ics", text: $url)
                    .textFieldStyle(.roundedBorder)
                
                if let result = testResult {
                    Text(result)
                        .font(.caption)
                        .foregroundColor(result.contains("成功") ? .green : .red)
                }
            }
            
            VStack(alignment: .leading, spacing: 4) {
                Text("提示：")
                    .font(.caption)
                    .fontWeight(.medium)
                Text("• 日历内容将被下载并保存到 App 内部")
                    .font(.caption)
                    .foregroundColor(.secondary)
                Text("• 如果下载失败，请检查网络连接或尝试使用本地文件")
                    .font(.caption)
                    .foregroundColor(.secondary)
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 8)
            .background(Color.secondary.opacity(0.1))
            .cornerRadius(6)
            
            HStack {
                Button("取消", action: onCancel)
                    .keyboardShortcut(.cancelAction)
                Spacer()
                Button("导入", action: onImport)
                    .keyboardShortcut(.defaultAction)
                    .disabled(name.isEmpty || url.isEmpty)
            }
        }
        .padding(24)
        .frame(width: 450)
    }
    
    private func testConnection() {
        guard let urlObj = URL(string: url) else {
            testResult = "❌ 无效的 URL"
            return
        }
        
        isTesting = true
        testResult = nil
        
        Task {
            do {
                let config = URLSessionConfiguration.default
                config.connectionProxyDictionary = [:]
                config.timeoutIntervalForRequest = 10
                let session = URLSession(configuration: config)
                
                let (data, response) = try await session.data(from: urlObj)
                
                await MainActor.run {
                    if let httpResponse = response as? HTTPURLResponse {
                        if (200...299).contains(httpResponse.statusCode) {
                            testResult = "✅ 连接成功 (\(data.count) 字节)"
                        } else {
                            testResult = "❌ 服务器错误: \(httpResponse.statusCode)"
                        }
                    } else {
                        testResult = "✅ 连接成功"
                    }
                    isTesting = false
                }
            } catch {
                await MainActor.run {
                    testResult = "❌ 连接失败: \(error.localizedDescription)"
                    isTesting = false
                }
            }
        }
    }
}

// MARK: - 桌面贴图设置
struct StickyWindowSettingsContent: View {
    @AppStorage("stickyWindowLevel") private var windowLevel = 0
    @AppStorage("showFloatingBallOnLaunch") private var showOnLaunch = true
    @AppStorage("floatingBallSize") private var floatingBallSize = 22.0
    @ObservedObject private var settings = SettingsManager.shared
    
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text("桌面贴图")
                .font(.title2)
                .fontWeight(.semibold)
            
            VStack(alignment: .leading, spacing: 16) {
                // 贴图窗口导航栏显示模式
                VStack(alignment: .leading, spacing: 8) {
                    Text("贴图窗口导航栏")
                        .font(.headline)
                    
                    Text("选择贴图窗口导航栏的显示内容")
                        .font(.caption)
                        .foregroundColor(.secondary)
                    
                    VStack(spacing: 8) {
                        ForEach(NavigationBarDisplayMode.allCases, id: \.self) { mode in
                            navigationModeButton(mode)
                        }
                    }
                    .padding(.top, 4)
                }
                
                Divider()
                
                // 窗口层级
                VStack(alignment: .leading, spacing: 8) {
                    Text("窗口层级")
                        .font(.headline)
                    
                    Picker("", selection: $windowLevel) {
                        Text("始终置顶").tag(0)
                        Text("普通窗口").tag(1)
                    }
                    .pickerStyle(.segmented)
                    .frame(width: 200)
                    .onChange(of: windowLevel) { _, newValue in
                        Task { @MainActor in
                            DesktopStickyWindowManager.shared.setAlwaysOnTop(newValue == 0)
                        }
                    }
                }
                
                Divider()
                
                // 悬浮球
                VStack(alignment: .leading, spacing: 12) {
                    Text("悬浮球")
                        .font(.headline)
                    
                    Toggle("启动时显示悬浮球", isOn: $showOnLaunch)
                    
                    // 自动贴边开关
                    Toggle("自动贴边", isOn: $settings.floatingBallAutoSnap)
                        .onChange(of: settings.floatingBallAutoSnap) { _, newValue in
                            Task { @MainActor in
                                DesktopStickyWindowManager.shared.updateFloatingBallMode(
                                    settings.floatingBallDisplayMode,
                                    autoSnap: newValue
                                )
                            }
                        }
                    
                    Text("拖动后自动吸附到屏幕边缘")
                        .font(.caption)
                        .foregroundColor(.secondary)
                        .padding(.leading, 20)
                        .padding(.top, -8)
                    
                    Divider()
                    
                    // 显示模式
                    VStack(alignment: .leading, spacing: 8) {
                        Text("显示模式")
                            .font(.subheadline)
                            .fontWeight(.medium)
                        
                        ForEach(FloatingBallDisplayMode.allCases, id: \.self) { mode in
                            modeButton(mode)
                        }
                        
                        // 固定显示器选择
                        if settings.floatingBallDisplayMode == .specificScreen {
                            screenPicker
                                .padding(.top, 8)
                        }
                    }
                    .padding(.top, 4)
                    
                    Divider()
                    
                    // 悬浮球大小
                    VStack(alignment: .leading, spacing: 8) {
                        HStack {
                            Text("悬浮球大小")
                            Spacer()
                            Text("\(Int(floatingBallSize)) px")
                                .foregroundColor(.secondary)
                                .monospacedDigit()
                        }
                        
                        HStack(spacing: 12) {
                            Image(systemName: "circle")
                                .font(.system(size: 10))
                                .foregroundColor(.secondary)
                            
                            Slider(value: $floatingBallSize, in: 16...48, step: 2)
                                .onChange(of: floatingBallSize) { _, newValue in
                                    Task { @MainActor in
                                        DesktopStickyWindowManager.shared.updateFloatingBallSize(newValue)
                                    }
                                }
                            
                            Image(systemName: "circle.fill")
                                .font(.system(size: 16))
                                .foregroundColor(.secondary)
                        }
                        
                        // 预览
                        HStack {
                            Text("预览")
                                .font(.caption)
                                .foregroundColor(.secondary)
                            
                            Spacer()
                            
                            FloatingBallPreview(size: floatingBallSize)
                        }
                        .padding(.top, 4)
                    }
                }
            }
            .padding()
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(RoundedRectangle(cornerRadius: 10).fill(Color(.controlBackgroundColor)))
        }
    }
    
    private var screenPicker: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("选择显示器")
                .font(.caption)
                .foregroundColor(.secondary)
            
            Picker("", selection: $settings.floatingBallFixedScreenIndex) {
                ForEach(0..<NSScreen.screens.count, id: \.self) { index in
                    let screen = NSScreen.screens[index]
                    let isMain = screen == NSScreen.main
                    Text("显示器 \(index + 1)\(isMain ? " (主屏幕)" : "")").tag(index)
                }
            }
            .pickerStyle(.menu)
            .frame(width: 200)
            .onChange(of: settings.floatingBallFixedScreenIndex) { _, _ in
                Task { @MainActor in
                    DesktopStickyWindowManager.shared.updateFloatingBallMode(
                        settings.floatingBallDisplayMode,
                        autoSnap: settings.floatingBallAutoSnap
                    )
                }
            }
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 6)
                .fill(Color(.textBackgroundColor))
        )
    }
    
    private func modeButton(_ mode: FloatingBallDisplayMode) -> some View {
        let isSelected = settings.floatingBallDisplayMode == mode
        
        return Button {
            settings.floatingBallDisplayMode = mode
        } label: {
            HStack(spacing: 12) {
                Image(systemName: mode.icon)
                    .font(.system(size: 14))
                    .foregroundColor(isSelected ? .white : .accentColor)
                    .frame(width: 24)
                
                VStack(alignment: .leading, spacing: 2) {
                    Text(mode.displayName)
                        .font(.system(size: 13, weight: isSelected ? .semibold : .regular))
                    Text(mode.description)
                        .font(.caption)
                        .foregroundColor(isSelected ? .white.opacity(0.8) : .secondary)
                }
                
                Spacer()
                
                if isSelected {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundColor(.white)
                }
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 10)
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(isSelected ? Color.accentColor : Color(.textBackgroundColor))
            )
            .contentShape(RoundedRectangle(cornerRadius: 8))
        }
        .buttonStyle(.plain)
    }
    
    private func navigationModeButton(_ mode: NavigationBarDisplayMode) -> some View {
        let isSelected = settings.navigationBarDisplayMode == mode
        
        return Button {
            settings.navigationBarDisplayMode = mode
        } label: {
            HStack(spacing: 12) {
                Image(systemName: mode.icon)
                    .font(.system(size: 14))
                    .foregroundColor(isSelected ? .white : .accentColor)
                    .frame(width: 24)
                
                VStack(alignment: .leading, spacing: 2) {
                    Text(mode.displayName)
                        .font(.system(size: 13, weight: isSelected ? .semibold : .regular))
                    Text(mode.description)
                        .font(.caption)
                        .foregroundColor(isSelected ? .white.opacity(0.8) : .secondary)
                }
                
                Spacer()
                
                if isSelected {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundColor(.white)
                }
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 10)
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(isSelected ? Color.accentColor : Color(.textBackgroundColor))
            )
            .contentShape(RoundedRectangle(cornerRadius: 8))
        }
        .buttonStyle(.plain)
    }
}

// MARK: - 悬浮球预览
struct FloatingBallPreview: View {
    let size: Double
    @Environment(\.colorScheme) private var colorScheme
    
    private var backgroundColor: Color {
        colorScheme == .dark ? Color(nsColor: NSColor(white: 0.25, alpha: 1)) : Color.white
    }
    
    private var iconColor: Color {
        colorScheme == .dark ? .white : Color(nsColor: NSColor(white: 0.3, alpha: 1))
    }
    
    var body: some View {
        ZStack {
            Circle()
                .fill(backgroundColor)
                .frame(width: size, height: size)
                .shadow(color: Color.black.opacity(0.2), radius: 2, y: 1)
            
            Image(systemName: "checkmark")
                .font(.system(size: size * 0.45, weight: .bold))
                .foregroundColor(iconColor)
            
            // 模拟角标
            Text("7")
                .font(.system(size: max(7, size * 0.32), weight: .bold))
                .foregroundColor(.white)
                .frame(minWidth: max(12, size * 0.55), minHeight: max(12, size * 0.55))
                .background(Circle().fill(Color.red))
                .offset(x: size * 0.36, y: -size * 0.36)
        }
        .frame(width: size + 20, height: size + 20)
        .padding(8)
        .background(
            RoundedRectangle(cornerRadius: 8)
                .fill(Color(.textBackgroundColor))
        )
    }
}

// MARK: - 关于
struct AboutSettingsContent: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text("关于")
                .font(.title2)
                .fontWeight(.semibold)
            
            VStack(alignment: .leading, spacing: 16) {
                HStack {
                    // App 图标
                    ZStack {
                        RoundedRectangle(cornerRadius: 12)
                            .fill(LinearGradient(
                                colors: [Color.blue, Color.blue.opacity(0.7)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ))
                            .frame(width: 64, height: 64)
                        
                        Image(systemName: "checkmark.circle.fill")
                            .font(.system(size: 32))
                            .foregroundColor(.white)
                    }
                    
                    VStack(alignment: .leading, spacing: 4) {
                        Text("FlowTask")
                            .font(.title3)
                            .fontWeight(.semibold)
                        Text("版本 1.0.0")
                            .font(.caption)
                            .foregroundColor(.secondary)
                    }
                }
                
                Divider()
                
                Text("一款简洁高效的任务管理应用")
                    .foregroundColor(.secondary)
                
                Divider()
                
                // 开发者信息
                VStack(alignment: .leading, spacing: 8) {
                    Text("开发者")
                        .font(.headline)
                    
                    HStack(spacing: 12) {
                        Image(systemName: "person.circle.fill")
                            .font(.system(size: 24))
                            .foregroundColor(.accentColor)
                        
                        VStack(alignment: .leading, spacing: 2) {
                            Text("zixuan.yang")
                                .fontWeight(.medium)
                            Text("fifteenyang@qq.com")
                                .font(.caption)
                                .foregroundColor(.secondary)
                        }
                    }
                    
                    Text("© 2026 All rights reserved")
                        .font(.caption)
                        .foregroundColor(.secondary)
                        .padding(.top, 4)
                }
                
                Divider()
                
                // 快捷键
                VStack(alignment: .leading, spacing: 8) {
                    Text("快捷键")
                        .font(.headline)
                    
                    shortcutRow("新建任务", "⌘N")
                    shortcutRow("显示/隐藏桌面贴图", "⌘⇧T")
                }
            }
            .padding()
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(RoundedRectangle(cornerRadius: 10).fill(Color(.controlBackgroundColor)))
        }
    }
    
    private func shortcutRow(_ title: String, _ shortcut: String) -> some View {
        HStack {
            Text(title)
                .foregroundColor(.secondary)
            Spacer()
            Text(shortcut)
                .font(.system(.body, design: .monospaced))
                .padding(.horizontal, 8)
                .padding(.vertical, 4)
                .background(Color(.separatorColor).opacity(0.3))
                .cornerRadius(4)
        }
    }
}

// MARK: - 编辑订阅弹窗
struct EditSubscriptionView: View {
    @State var subscription: CalendarSubscription
    let onSave: (CalendarSubscription) -> Void
    let onCancel: () -> Void
    
    var body: some View {
        VStack(spacing: 20) {
            Text("编辑日历")
                .font(.headline)
            
            VStack(alignment: .leading, spacing: 8) {
                Text("名称")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                TextField("名称", text: $subscription.name)
                    .textFieldStyle(.roundedBorder)
            }
            
            VStack(alignment: .leading, spacing: 8) {
                Text("来源")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                Text(subscription.url)
                    .font(.caption)
                    .foregroundColor(.secondary)
                    .padding(8)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .background(Color(.textBackgroundColor))
                    .cornerRadius(6)
            }
            
            HStack {
                Button("取消", action: onCancel)
                    .keyboardShortcut(.cancelAction)
                Spacer()
                Button("保存") { onSave(subscription) }
                    .keyboardShortcut(.defaultAction)
                    .disabled(subscription.name.isEmpty)
            }
        }
        .padding(24)
        .frame(width: 380)
    }
}
#endif
