import SwiftUI
import AppKit
import Combine

#if os(macOS)

// MARK: - Notes View Model
@MainActor
class NotesViewModel: ObservableObject {
    @Published var notesDirectory: URL?
    @Published var markdownFiles: [MarkdownFile] = []
    @Published var selectedFile: MarkdownFile?
    @Published var content: String = ""
    @Published var searchText: String = ""
    
    /// Whether the current content has unsaved changes
    @Published var isDirty: Bool = false
    
    /// Cancellable for content change observation
    private var contentChangeCancellable: AnyCancellable?
    
    /// The last saved content (to detect changes)
    private var lastSavedContent: String = ""
    
    /// 当前正在编辑的文件 URL（用于验证回调）
    private var currentEditingFileURL: URL?
    
    /// 当前编辑会话 ID（用于验证异步回调）
    private var currentEditingSessionId: UUID = UUID()
    
    /// 是否正在切换文件（阻止保存）
    private var isSwitchingFile: Bool = false
    
    var filteredFiles: [MarkdownFile] {
        if searchText.isEmpty {
            return markdownFiles
        }
        return markdownFiles.filter { $0.name.localizedCaseInsensitiveContains(searchText) }
    }
    
    init() {
        setupContentObserver()
        
        // 尝试从 UserDefaults 恢复上次的目录（使用安全书签）
        if let bookmarkData = UserDefaults.standard.data(forKey: "NotesDirectoryBookmark") {
            do {
                var isStale = false
                let url = try URL(resolvingBookmarkData: bookmarkData, options: .withSecurityScope, relativeTo: nil, bookmarkDataIsStale: &isStale)
                
                if isStale {
                    // 书签过期，需要重新创建
                    if url.startAccessingSecurityScopedResource() {
                        saveDirectoryBookmark(url)
                        self.notesDirectory = url
                        ImageHandler.shared.setDocumentDirectory(url)
                        loadFiles()
                    }
                } else {
                    if url.startAccessingSecurityScopedResource() {
                        self.notesDirectory = url
                        ImageHandler.shared.setDocumentDirectory(url)
                        loadFiles()
                    }
                }
            } catch {
                print("恢复目录书签失败: \(error)")
            }
        }
    }
    
    // MARK: - Content Change Handling
    
    /// Sets up the content observer for auto-save
    private func setupContentObserver() {
        contentChangeCancellable = $content
            .dropFirst() // Skip initial value
            .removeDuplicates()
            .sink { [weak self] newContent in
                self?.handleContentChange(newContent)
            }
    }
    
    /// Called when content changes from MuyaWebView callback
    /// - Parameters:
    ///   - newContent: The new markdown content
    ///   - sessionId: Optional session ID for validation (if provided by JS)
    func onEditorContentChange(_ newContent: String, sessionId: UUID? = nil) {
        // 如果正在切换文件，忽略所有回调
        guard !isSwitchingFile else {
            MuyaLogger.debug("onEditorContentChange: 正在切换文件，跳过", category: "notes")
            return
        }
        
        // 验证当前文件 URL 匹配
        guard let currentFile = selectedFile,
              currentFile.url == currentEditingFileURL else {
            MuyaLogger.debug("onEditorContentChange: 文件不匹配或无选中文件，跳过", category: "notes")
            return
        }
        
        // 如果提供了 sessionId，验证是否匹配当前会话
        if let sessionId = sessionId, sessionId != currentEditingSessionId {
            MuyaLogger.debug("onEditorContentChange: 会话 ID 不匹配，跳过 (期望: \(currentEditingSessionId), 收到: \(sessionId))", category: "notes")
            return
        }
        
        // 检查是否有实际变化
        guard newContent != lastSavedContent else {
            return
        }
        
        // 更新内容
        content = newContent
        isDirty = true
        
        MuyaLogger.debug("onEditorContentChange: 保存到 \(currentFile.name)", category: "notes")
        
        // 立即保存到当前文件
        saveToFile(currentFile)
    }
    
    /// Handles content changes from the editor
    /// - Parameter newContent: The new content from the editor
    func handleContentChange(_ newContent: String) {
        // 如果正在切换文件，忽略
        guard !isSwitchingFile else { return }
        
        // Update dirty state
        isDirty = newContent != lastSavedContent
        
        // 立即保存
        if isDirty, let currentFile = selectedFile, currentFile.url == currentEditingFileURL {
            saveToFile(currentFile)
        }
    }
    
    /// 保存内容到指定文件
    private func saveToFile(_ file: MarkdownFile) {
        // Ensure we have security-scoped access to the directory
        let hasAccess = notesDirectory?.startAccessingSecurityScopedResource() ?? false
        defer {
            if hasAccess {
                notesDirectory?.stopAccessingSecurityScopedResource()
            }
        }
        
        do {
            try content.write(to: file.url, atomically: true, encoding: .utf8)
            lastSavedContent = content
            isDirty = false
            MuyaLogger.info("文件已保存: \(file.name), 内容长度: \(content.count)", category: "notes")
        } catch {
            MuyaLogger.error("保存文件失败: \(error.localizedDescription)", category: "notes")
            if (error as NSError).code == NSFileWriteNoPermissionError || 
               (error as NSError).domain == NSCocoaErrorDomain && (error as NSError).code == 513 {
                DispatchQueue.main.async { [weak self] in
                    self?.handleSavePermissionError()
                }
            }
        }
    }
    
    private func saveDirectoryBookmark(_ url: URL) {
        do {
            let bookmarkData = try url.bookmarkData(options: .withSecurityScope, includingResourceValuesForKeys: nil, relativeTo: nil)
            UserDefaults.standard.set(bookmarkData, forKey: "NotesDirectoryBookmark")
        } catch {
            print("保存目录书签失败: \(error)")
        }
    }
    
    func selectDirectory() {
        let panel = NSOpenPanel()
        panel.canChooseFiles = false
        panel.canChooseDirectories = true
        panel.canCreateDirectories = true  // 允许新建文件夹
        panel.allowsMultipleSelection = false
        panel.message = "选择笔记存储目录"
        panel.prompt = "选择"
        
        if panel.runModal() == .OK, let url = panel.url {
            // 停止之前的安全访问
            notesDirectory?.stopAccessingSecurityScopedResource()
            
            // 开始新的安全访问
            _ = url.startAccessingSecurityScopedResource()
            notesDirectory = url
            ImageHandler.shared.setDocumentDirectory(url)
            saveDirectoryBookmark(url)
            loadFiles()
        }
    }
    
    func loadFiles() {
        guard let directory = notesDirectory else { return }
        
        do {
            let fileManager = FileManager.default
            let contents = try fileManager.contentsOfDirectory(at: directory, includingPropertiesForKeys: [.contentModificationDateKey, .isDirectoryKey])
            
            markdownFiles = contents
                .filter { $0.pathExtension.lowercased() == "md" }
                .compactMap { url -> MarkdownFile? in
                    let attributes = try? fileManager.attributesOfItem(atPath: url.path)
                    let modDate = attributes?[.modificationDate] as? Date ?? Date()
                    return MarkdownFile(url: url, modificationDate: modDate)
                }
                .sorted { file1, file2 in
                    // 自定义排序：中文 → 英文 → 数字
                    let name1 = file1.name
                    let name2 = file2.name
                    
                    let firstChar1 = name1.first ?? Character(" ")
                    let firstChar2 = name2.first ?? Character(" ")
                    
                    let isChinese1 = firstChar1.unicodeScalars.first.map { $0.value >= 0x4E00 && $0.value <= 0x9FFF } ?? false
                    let isChinese2 = firstChar2.unicodeScalars.first.map { $0.value >= 0x4E00 && $0.value <= 0x9FFF } ?? false
                    let isDigit1 = firstChar1.isNumber
                    let isDigit2 = firstChar2.isNumber
                    
                    // 中文优先
                    if isChinese1 && !isChinese2 { return true }
                    if !isChinese1 && isChinese2 { return false }
                    
                    // 数字最后
                    if !isDigit1 && isDigit2 { return true }
                    if isDigit1 && !isDigit2 { return false }
                    
                    // 同类型按名称排序
                    return name1.localizedStandardCompare(name2) == .orderedAscending
                }
        } catch {
            print("加载文件失败: \(error)")
        }
    }
    
    func selectFile(_ file: MarkdownFile) {
        // 如果选择的是同一个文件，直接返回
        guard selectedFile?.url != file.url else { return }
        
        // 标记正在切换文件，阻止所有保存操作
        isSwitchingFile = true
        
        // 保存当前文件（如果有修改）
        if isDirty, let oldFile = selectedFile, oldFile.url == currentEditingFileURL {
            MuyaLogger.info("切换文件前保存: \(oldFile.name)", category: "notes")
            saveToFile(oldFile)
        }
        
        // 生成新的会话 ID
        currentEditingSessionId = UUID()
        
        // 更新当前编辑文件 URL（在加载内容之前）
        currentEditingFileURL = file.url
        
        // 先加载新文件内容
        var newContent = ""
        do {
            newContent = try String(contentsOf: file.url, encoding: .utf8)
            MuyaLogger.info("已加载文件: \(file.name), 长度: \(newContent.count), 会话: \(currentEditingSessionId)", category: "notes")
        } catch {
            MuyaLogger.error("读取文件失败: \(error)", category: "notes")
        }
        
        // 同步更新所有状态（确保 SwiftUI 在同一个更新周期内处理）
        lastSavedContent = newContent
        isDirty = false
        content = newContent
        selectedFile = file
        ImageHandler.shared.setDocumentDirectory(file.url.deletingLastPathComponent())
        
        // 延迟解除切换锁定，确保 WebView 内容已更新
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) { [weak self] in
            self?.isSwitchingFile = false
            MuyaLogger.debug("文件切换完成，解除锁定", category: "notes")
        }
    }
    
    func createNewFile() {
        guard let directory = notesDirectory else {
            selectDirectory()
            return
        }
        
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyyMMdd_HHmmss"
        let fileName = "未命名_\(dateFormatter.string(from: Date())).md"
        let fileURL = directory.appendingPathComponent(fileName)
        
        do {
            try "# 新笔记\n\n".write(to: fileURL, atomically: true, encoding: .utf8)
            loadFiles()
            if let newFile = markdownFiles.first(where: { $0.url == fileURL }) {
                selectFile(newFile)
            }
        } catch {
            print("创建文件失败: \(error)")
        }
    }
    
    func saveCurrentFile() {
        guard let file = selectedFile else {
            MuyaLogger.warning("saveCurrentFile: 没有选中的文件", category: "notes")
            return
        }
        
        // Ensure we have security-scoped access to the directory
        let hasAccess = notesDirectory?.startAccessingSecurityScopedResource() ?? false
        defer {
            if hasAccess {
                notesDirectory?.stopAccessingSecurityScopedResource()
            }
        }
        
        do {
            try content.write(to: file.url, atomically: true, encoding: .utf8)
            lastSavedContent = content
            isDirty = false
            MuyaLogger.info("文件已保存: \(file.name), 内容长度: \(content.count)", category: "notes")
        } catch {
            MuyaLogger.error("保存文件失败: \(error.localizedDescription)", category: "notes")
            // If save fails due to permissions, prompt user to re-select directory
            if (error as NSError).code == NSFileWriteNoPermissionError || 
               (error as NSError).domain == NSCocoaErrorDomain && (error as NSError).code == 513 {
                DispatchQueue.main.async { [weak self] in
                    self?.handleSavePermissionError()
                }
            }
        }
    }
    
    /// Handles save permission errors by prompting user to re-select directory
    private func handleSavePermissionError() {
        // Clear the stale bookmark
        UserDefaults.standard.removeObject(forKey: "NotesDirectoryBookmark")
        notesDirectory?.stopAccessingSecurityScopedResource()
        notesDirectory = nil
        
        // Prompt user to re-select directory
        let alert = NSAlert()
        alert.messageText = "无法保存文件"
        alert.informativeText = "应用没有权限访问当前目录。请重新选择笔记存储目录。"
        alert.alertStyle = .warning
        alert.addButton(withTitle: "选择目录")
        alert.addButton(withTitle: "取消")
        
        if alert.runModal() == .alertFirstButtonReturn {
            selectDirectory()
        }
    }
    
    func renameFile(_ file: MarkdownFile, newName: String) {
        let newURL = file.url.deletingLastPathComponent().appendingPathComponent(newName + ".md")
        do {
            try FileManager.default.moveItem(at: file.url, to: newURL)
            loadFiles()
            if selectedFile?.id == file.id {
                selectedFile = markdownFiles.first { $0.url == newURL }
            }
        } catch {
            print("重命名失败: \(error)")
        }
    }
    
    func deleteFile(_ file: MarkdownFile) {
        do {
            try FileManager.default.trashItem(at: file.url, resultingItemURL: nil)
            if selectedFile?.id == file.id {
                selectedFile = nil
                content = ""
                lastSavedContent = ""
                isDirty = false
            }
            loadFiles()
        } catch {
            print("删除文件失败: \(error)")
        }
    }
}

// MARK: - Markdown File Model
struct MarkdownFile: Identifiable, Hashable {
    let id = UUID()
    let url: URL
    let modificationDate: Date
    
    var name: String {
        url.deletingPathExtension().lastPathComponent
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(url)
    }
    
    static func == (lhs: MarkdownFile, rhs: MarkdownFile) -> Bool {
        lhs.url == rhs.url
    }
}

// MARK: - Main Notes View
struct MacNotesView: View {
    @StateObject private var viewModel = NotesViewModel()
    @State private var animateList = false
    @State private var sidebarCollapsed = false
    
    var body: some View {
        HSplitView {
            // 左侧文件列表
            if !sidebarCollapsed {
                fileListPanel
            }
            
            // 右侧编辑器/预览
            editorPanel
        }
        .frame(minWidth: 800, minHeight: 500)
        .onAppear {
            // 初始化工具栏状态
            showToolbar = SettingsManager.shared.muyaToolbarVisible
            
            // 启动加载动画
            withAnimation(.spring(response: 0.6, dampingFraction: 0.8).delay(0.1)) {
                animateList = true
            }
        }
        .onReceive(NotificationCenter.default.publisher(for: .muyaSaveRequested)) { _ in
            // 响应编辑器的保存请求
            viewModel.saveCurrentFile()
        }
    }
    
    // MARK: - File List Panel
    private var fileListPanel: some View {
        VStack(spacing: 0) {
            // 工具栏
            HStack {
                Button {
                    viewModel.selectDirectory()
                } label: {
                    Image(systemName: "folder")
                }
                .buttonStyle(.plain)
                .help("选择笔记目录")
                
                Button {
                    viewModel.createNewFile()
                } label: {
                    Image(systemName: "plus")
                }
                .buttonStyle(.plain)
                .help("新建笔记")
                
                Spacer()
                
                Button {
                    viewModel.loadFiles()
                } label: {
                    Image(systemName: "arrow.clockwise")
                }
                .buttonStyle(.plain)
                .help("刷新")
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 8)
            
            // 搜索框
            HStack {
                Image(systemName: "magnifyingglass")
                    .foregroundColor(.secondary)
                TextField("搜索笔记...", text: $viewModel.searchText)
                    .textFieldStyle(.plain)
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 6)
            .background(Color(.textBackgroundColor).opacity(0.5))
            .cornerRadius(6)
            .padding(.horizontal, 8)
            .padding(.bottom, 8)
            
            Divider()
            
            // 文件列表
            if viewModel.notesDirectory == nil {
                emptyDirectoryView
            } else {
                fileList
            }
        }
        .frame(minWidth: 200, idealWidth: 250, maxWidth: 300)
    }
    
    private var emptyDirectoryView: some View {
        VStack(spacing: 16) {
            Image(systemName: "folder.badge.questionmark")
                .font(.system(size: 48))
                .foregroundColor(.secondary)
            
            Text("请选择笔记目录")
                .font(.headline)
                .foregroundColor(.secondary)
            
            Button("选择目录") {
                viewModel.selectDirectory()
            }
            .buttonStyle(.borderedProminent)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
    
    private var fileList: some View {
        ScrollView {
            LazyVStack(spacing: 2) {
                ForEach(Array(viewModel.filteredFiles.enumerated()), id: \.element.id) { index, file in
                    FileRowView(
                        file: file,
                        isSelected: viewModel.selectedFile?.id == file.id,
                        onSelect: { viewModel.selectFile(file) },
                        onRename: { newName in viewModel.renameFile(file, newName: newName) },
                        onDelete: { viewModel.deleteFile(file) }
                    )
                    .opacity(animateList ? 1 : 0)
                    .offset(y: animateList ? 0 : 20)
                    .animation(.spring(response: 0.5, dampingFraction: 0.8).delay(Double(index) * 0.03), value: animateList)
                }
            }
            .padding(.vertical, 4)
        }
    }

    
    // MARK: - Editor Panel
    @State private var isEditingFileName = false
    @State private var editingFileName = ""
    @State private var showOutline = false  // 默认隐藏大纲
    @State private var showToolbar = true   // 工具栏状态
    
    private var editorPanel: some View {
        VStack(spacing: 0) {
            if let file = viewModel.selectedFile {
                // 标题栏 - 支持双击修改文件名
                HStack {
                    // 侧边栏切换按钮
                    Button {
                        withAnimation(.easeInOut(duration: 0.2)) {
                            sidebarCollapsed.toggle()
                        }
                    } label: {
                        Image(systemName: "sidebar.leading")
                    }
                    .buttonStyle(.plain)
                    .help(sidebarCollapsed ? "显示笔记列表" : "隐藏笔记列表")
                    
                    if isEditingFileName {
                        TextField("文件名", text: $editingFileName)
                            .textFieldStyle(.plain)
                            .font(.headline)
                            .onSubmit {
                                if !editingFileName.isEmpty && editingFileName != file.name {
                                    viewModel.renameFile(file, newName: editingFileName)
                                }
                                isEditingFileName = false
                            }
                            .onExitCommand {
                                isEditingFileName = false
                            }
                    } else {
                        Text(file.name)
                            .font(.headline)
                            .onTapGesture(count: 2) {
                                editingFileName = file.name
                                isEditingFileName = true
                            }
                            .help("双击修改文件名")
                    }
                    
                    // Dirty indicator
                    if viewModel.isDirty {
                        Circle()
                            .fill(Color.orange)
                            .frame(width: 8, height: 8)
                            .help("有未保存的更改")
                    }
                    
                    Spacer()
                    
                    // 大纲开关按钮
                    Button {
                        showOutline.toggle()
                        // 通过通知告诉编辑器切换大纲
                        NotificationCenter.default.post(
                            name: .toggleMuyaOutline,
                            object: nil,
                            userInfo: ["show": showOutline]
                        )
                    } label: {
                        Image(systemName: showOutline ? "list.bullet.indent" : "list.bullet")
                            .foregroundColor(showOutline ? .accentColor : .primary)
                    }
                    .buttonStyle(.plain)
                    .help(showOutline ? "隐藏大纲" : "显示大纲")
                    
                    // 工具栏开关按钮
                    Button {
                        showToolbar.toggle()
                        SettingsManager.shared.setMuyaToolbarVisible(showToolbar)
                    } label: {
                        Image(systemName: showToolbar ? "menubar.rectangle" : "menubar.dock.rectangle")
                            .foregroundColor(showToolbar ? .accentColor : .primary)
                    }
                    .buttonStyle(.plain)
                    .help(showToolbar ? "隐藏工具栏" : "显示工具栏")
                    
                    Button {
                        viewModel.saveCurrentFile()
                    } label: {
                        Image(systemName: "square.and.arrow.down")
                    }
                    .buttonStyle(.plain)
                    .help("保存 (⌘S)")
                    .keyboardShortcut("s", modifiers: .command)
                    
                    // 导出按钮
                    Button {
                        exportCurrentFile()
                    } label: {
                        Image(systemName: "square.and.arrow.up")
                    }
                    .buttonStyle(.plain)
                    .help("导出 (⌘E)")
                    .keyboardShortcut("e", modifiers: .command)
                }
                .padding(.horizontal, 16)
                .padding(.vertical, 10)
                .background(Color(.windowBackgroundColor))
                
                Divider()
                
                // 实时 Markdown 编辑器（WYSIWYG 风格）
                MarkdownEditorView(
                    content: $viewModel.content,
                    onContentChange: { newContent in
                        viewModel.onEditorContentChange(newContent)
                    },
                    onError: { error in
                        print("编辑器错误: \(error)")
                    }
                )
                // 不使用 .id() 强制重建，而是依赖 content binding 的变化来更新编辑器
                // 这样可以避免 WebView 重新加载导致的延迟和竞态条件
            } else {
                emptyEditorView
            }
        }
        .frame(minWidth: 400)
    }
    
    private var emptyEditorView: some View {
        VStack(spacing: 0) {
            // 顶部工具栏（包含侧边栏切换按钮）
            HStack {
                Button {
                    withAnimation(.easeInOut(duration: 0.2)) {
                        sidebarCollapsed.toggle()
                    }
                } label: {
                    Image(systemName: "sidebar.leading")
                }
                .buttonStyle(.plain)
                .help(sidebarCollapsed ? "显示笔记列表" : "隐藏笔记列表")
                
                Spacer()
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 10)
            .background(Color(.windowBackgroundColor))
            
            Divider()
            
            // 空状态内容
            VStack(spacing: 16) {
                Image(systemName: "doc.text")
                    .font(.system(size: 64))
                    .foregroundColor(.secondary.opacity(0.5))
                
                Text("选择或创建一个笔记")
                    .font(.title2)
                    .foregroundColor(.secondary)
                
                if viewModel.notesDirectory != nil {
                    Button("新建笔记") {
                        viewModel.createNewFile()
                    }
                    .buttonStyle(.borderedProminent)
                }
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
        }
    }
    
    // MARK: - Export Methods
    
    /// Exports the current file using ExportManager
    /// Requirements: 1.1, 1.5
    private func exportCurrentFile() {
        guard let file = viewModel.selectedFile else { return }
        
        let content = viewModel.content
        let fileName = file.name
        
        ExportManager.shared.showExportDialog(
            content: content,
            fileName: fileName,
            htmlContent: nil
        ) { result in
            switch result {
            case .success(let url):
                // Show success notification
                let alert = NSAlert()
                alert.messageText = "导出成功"
                alert.informativeText = "文件已导出到: \(url.path)"
                alert.alertStyle = .informational
                alert.addButton(withTitle: "确定")
                alert.addButton(withTitle: "在 Finder 中显示")
                
                if alert.runModal() == .alertSecondButtonReturn {
                    NSWorkspace.shared.selectFile(url.path, inFileViewerRootedAtPath: url.deletingLastPathComponent().path)
                }
            case .failure(let error):
                if case .userCancelled = error {
                    // User cancelled, no need to show error
                    return
                }
                // Show error alert
                let alert = NSAlert()
                alert.messageText = "导出失败"
                alert.informativeText = error.localizedDescription
                alert.alertStyle = .warning
                alert.addButton(withTitle: "确定")
                alert.runModal()
            }
        }
    }
}

// MARK: - File Row View
struct FileRowView: View {
    let file: MarkdownFile
    let isSelected: Bool
    let onSelect: () -> Void
    let onRename: (String) -> Void
    let onDelete: () -> Void
    
    @State private var isHovering = false
    @State private var isRenaming = false
    @State private var newName: String = ""
    
    var body: some View {
        HStack(spacing: 8) {
            Image(systemName: "doc.text")
                .foregroundColor(.secondary)
            
            if isRenaming {
                TextField("文件名", text: $newName)
                    .textFieldStyle(.plain)
                    .onSubmit {
                        if !newName.isEmpty {
                            onRename(newName)
                        }
                        isRenaming = false
                    }
            } else {
                VStack(alignment: .leading, spacing: 2) {
                    Text(file.name)
                        .lineLimit(1)
                    
                    Text(file.modificationDate.formatted(date: .abbreviated, time: .shortened))
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
            }
            
            Spacer()
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 8)
        .background(
            RoundedRectangle(cornerRadius: 6)
                .fill(isSelected ? Color.accentColor.opacity(0.2) : (isHovering ? Color.primary.opacity(0.05) : Color.clear))
        )
        .padding(.horizontal, 4)
        .contentShape(Rectangle())
        .onTapGesture {
            onSelect()
        }
        .onHover { hovering in
            isHovering = hovering
        }
        .contextMenu {
            Button("重命名") {
                newName = file.name
                isRenaming = true
            }
            Divider()
            Button("删除", role: .destructive) {
                onDelete()
            }
        }
    }
}

// MARK: - Markdown Editor View
// 已移至 MarkdownEditor.swift

#endif
