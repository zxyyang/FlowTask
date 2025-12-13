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
    
    var filteredFiles: [MarkdownFile] {
        if searchText.isEmpty {
            return markdownFiles
        }
        return markdownFiles.filter { $0.name.localizedCaseInsensitiveContains(searchText) }
    }
    
    init() {
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
                        loadFiles()
                    }
                } else {
                    if url.startAccessingSecurityScopedResource() {
                        self.notesDirectory = url
                        loadFiles()
                    }
                }
            } catch {
                print("恢复目录书签失败: \(error)")
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
        panel.allowsMultipleSelection = false
        panel.message = "选择笔记存储目录"
        panel.prompt = "选择"
        
        if panel.runModal() == .OK, let url = panel.url {
            // 停止之前的安全访问
            notesDirectory?.stopAccessingSecurityScopedResource()
            
            // 开始新的安全访问
            _ = url.startAccessingSecurityScopedResource()
            notesDirectory = url
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
        // 保存当前文件
        saveCurrentFile()
        
        selectedFile = file
        do {
            content = try String(contentsOf: file.url, encoding: .utf8)
        } catch {
            content = ""
            print("读取文件失败: \(error)")
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
        guard let file = selectedFile else { return }
        do {
            try content.write(to: file.url, atomically: true, encoding: .utf8)
        } catch {
            print("保存文件失败: \(error)")
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
    
    var body: some View {
        HSplitView {
            // 左侧文件列表
            fileListPanel
            
            // 右侧编辑器/预览
            editorPanel
        }
        .frame(minWidth: 800, minHeight: 500)
        .onAppear {
            // 启动加载动画
            withAnimation(.spring(response: 0.6, dampingFraction: 0.8).delay(0.1)) {
                animateList = true
            }
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
    private var editorPanel: some View {
        VStack(spacing: 0) {
            if let file = viewModel.selectedFile {
                // 标题栏
                HStack {
                    Text(file.name)
                        .font(.headline)
                    
                    Spacer()
                    
                    Button {
                        viewModel.saveCurrentFile()
                    } label: {
                        Image(systemName: "square.and.arrow.down")
                    }
                    .buttonStyle(.plain)
                    .help("保存 (⌘S)")
                    .keyboardShortcut("s", modifiers: .command)
                }
                .padding(.horizontal, 16)
                .padding(.vertical, 10)
                .background(Color(.windowBackgroundColor))
                
                Divider()
                
                // 实时 Markdown 编辑器（Typora 风格）
                MarkdownEditorView(content: $viewModel.content)
            } else {
                emptyEditorView
            }
        }
        .frame(minWidth: 400)
    }
    
    private var emptyEditorView: some View {
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
