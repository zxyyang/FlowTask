import SwiftUI
import AppKit
import Combine
import UniformTypeIdentifiers

// MARK: - JSON Tree Node

indirect enum JSONTreeNode: Identifiable, Equatable {
    case object(id: UUID, children: [JSONObjectProperty])
    case array(id: UUID, elements: [JSONTreeNode])
    case string(id: UUID, value: String)
    case number(id: UUID, value: Double)
    case boolean(id: UUID, value: Bool)
    case null(id: UUID)
    
    var id: UUID {
        switch self {
        case .object(let id, _), .array(let id, _), .string(let id, _), .number(let id, _), .boolean(let id, _), .null(let id): return id
        }
    }
    
    var typeIndicator: String {
        switch self { case .object: return "对象"; case .array: return "数组"; case .string: return "文本"; case .number: return "数字"; case .boolean: return "布尔"; case .null: return "空" }
    }
    
    var displayValue: String {
        switch self {
        case .object(_, let children): return "{\(children.count)}"
        case .array(_, let elements): return "[\(elements.count)]"
        case .string(_, let value): return "\"\(value)\""
        case .number(_, let value): return value.truncatingRemainder(dividingBy: 1) == 0 ? String(format: "%.0f", value) : String(value)
        case .boolean(_, let value): return value ? "true" : "false"
        case .null: return "null"
        }
    }
    
    var isContainer: Bool { if case .object = self { return true }; if case .array = self { return true }; return false }
    
    static func == (lhs: JSONTreeNode, rhs: JSONTreeNode) -> Bool {
        switch (lhs, rhs) {
        case (.object(let id1, let c1), .object(let id2, let c2)): return id1 == id2 && c1 == c2
        case (.array(let id1, let e1), .array(let id2, let e2)): return id1 == id2 && e1 == e2
        case (.string(let id1, let v1), .string(let id2, let v2)): return id1 == id2 && v1 == v2
        case (.number(let id1, let v1), .number(let id2, let v2)): return id1 == id2 && v1 == v2
        case (.boolean(let id1, let v1), .boolean(let id2, let v2)): return id1 == id2 && v1 == v2
        case (.null(let id1), .null(let id2)): return id1 == id2
        default: return false
        }
    }
}

struct JSONObjectProperty: Identifiable, Equatable {
    let id: UUID; var key: String; var value: JSONTreeNode
    init(id: UUID = UUID(), key: String, value: JSONTreeNode) { self.id = id; self.key = key; self.value = value }
}

struct JSONValidationResult {
    let isValid: Bool; let error: JSONValidationError?
    static let valid = JSONValidationResult(isValid: true, error: nil)
    static func invalid(_ error: JSONValidationError) -> JSONValidationResult { JSONValidationResult(isValid: false, error: error) }
}

struct JSONValidationError: Equatable {
    let message: String; let line: Int?; let column: Int?
    init(message: String, line: Int? = nil, column: Int? = nil) { self.message = message; self.line = line; self.column = column }
}

struct JSONTab: Identifiable, Equatable {
    let id: UUID; var title: String; var content: String; var isModified: Bool
    var treeModel: JSONTreeNode?; var validationError: JSONValidationError?
    var viewMode: JSONViewMode; var isExpanded: Set<UUID>
    
    init(id: UUID = UUID(), title: String = "Untitled", content: String = "{\n  \n}", isModified: Bool = false, treeModel: JSONTreeNode? = nil, validationError: JSONValidationError? = nil, viewMode: JSONViewMode = .split) {
        self.id = id; self.title = title; self.content = content; self.isModified = isModified
        self.treeModel = treeModel; self.validationError = validationError; self.viewMode = viewMode; self.isExpanded = []
    }
    
    static func == (lhs: JSONTab, rhs: JSONTab) -> Bool { lhs.id == rhs.id && lhs.title == rhs.title && lhs.content == rhs.content && lhs.isModified == rhs.isModified && lhs.viewMode == rhs.viewMode }
}

enum JSONViewMode: String, CaseIterable {
    case text, tree, split
    var displayName: String { switch self { case .text: return "文本"; case .tree: return "树形"; case .split: return "分屏" } }
    var icon: String { switch self { case .text: return "doc.text"; case .tree: return "list.bullet.indent"; case .split: return "rectangle.split.2x1" } }
}

// MARK: - JSON Parser

struct JSONParser {
    static func parse(_ jsonString: String) throws -> JSONTreeNode {
        guard !jsonString.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else { throw JSONParserError.emptyInput }
        guard let data = jsonString.data(using: .utf8) else { throw JSONParserError.invalidEncoding }
        let jsonObject: Any
        do { jsonObject = try JSONSerialization.jsonObject(with: data, options: [.fragmentsAllowed]) }
        catch let error as NSError { throw JSONParserError.parseError(extractErrorInfo(from: error, in: jsonString)) }
        return convertToTreeNode(jsonObject)
    }
    
    private static func convertToTreeNode(_ value: Any) -> JSONTreeNode {
        switch value {
        case let dict as [String: Any]:
            let children = dict.map { JSONObjectProperty(key: $0.key, value: convertToTreeNode($0.value)) }.sorted { $0.key < $1.key }
            return .object(id: UUID(), children: children)
        case let array as [Any]: return .array(id: UUID(), elements: array.map { convertToTreeNode($0) })
        case let string as String: return .string(id: UUID(), value: string)
        case let number as NSNumber:
            if CFGetTypeID(number) == CFBooleanGetTypeID() { return .boolean(id: UUID(), value: number.boolValue) }
            return .number(id: UUID(), value: number.doubleValue)
        case is NSNull: return .null(id: UUID())
        default: return .string(id: UUID(), value: String(describing: value))
        }
    }
    
    static func stringify(_ node: JSONTreeNode, pretty: Bool = true) -> String {
        let jsonObject = convertToJSONObject(node)
        guard let data = try? JSONSerialization.data(withJSONObject: jsonObject, options: pretty ? [.prettyPrinted, .sortedKeys] : [.sortedKeys]) else { return "{}" }
        return String(data: data, encoding: .utf8) ?? "{}"
    }
    
    private static func convertToJSONObject(_ node: JSONTreeNode) -> Any {
        switch node {
        case .object(_, let children): return Dictionary(uniqueKeysWithValues: children.map { ($0.key, convertToJSONObject($0.value)) })
        case .array(_, let elements): return elements.map { convertToJSONObject($0) }
        case .string(_, let value): return value
        case .number(_, let value): return value
        case .boolean(_, let value): return value
        case .null: return NSNull()
        }
    }
    
    static func validate(_ jsonString: String) -> JSONValidationResult {
        guard !jsonString.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else { return .invalid(JSONValidationError(message: "输入为空")) }
        guard let data = jsonString.data(using: .utf8) else { return .invalid(JSONValidationError(message: "无效的字符编码")) }
        do { _ = try JSONSerialization.jsonObject(with: data, options: [.fragmentsAllowed]); return .valid }
        catch let error as NSError { return .invalid(extractErrorInfo(from: error, in: jsonString)) }
    }
    
    static func format(_ jsonString: String) throws -> String { stringify(try parse(jsonString), pretty: true) }
    static func compress(_ jsonString: String) throws -> String { stringify(try parse(jsonString), pretty: false) }
    
    private static func extractErrorInfo(from error: NSError, in jsonString: String) -> JSONValidationError {
        let message = error.localizedDescription
        var line: Int? = nil, column: Int? = nil
        if let range = message.range(of: "character ") {
            let afterCharacter = message[range.upperBound...]
            if let spaceIndex = afterCharacter.firstIndex(of: " ") ?? afterCharacter.firstIndex(of: ".") {
                if let charIndex = Int(String(afterCharacter[..<spaceIndex])) { (line, column) = calculateLineAndColumn(for: charIndex, in: jsonString) }
            }
        }
        return JSONValidationError(message: message, line: line, column: column)
    }
    
    private static func calculateLineAndColumn(for index: Int, in string: String) -> (line: Int, column: Int) {
        var currentLine = 1, currentColumn = 1, currentIndex = 0
        for char in string { if currentIndex >= index { break }; if char == "\n" { currentLine += 1; currentColumn = 1 } else { currentColumn += 1 }; currentIndex += 1 }
        return (currentLine, currentColumn)
    }
}

enum JSONParserError: LocalizedError {
    case emptyInput, invalidEncoding, parseError(JSONValidationError)
    var errorDescription: String? { switch self { case .emptyInput: return "输入为空"; case .invalidEncoding: return "无效的字符编码"; case .parseError(let e): return e.message } }
}

// MARK: - Single Panel ViewModel

@MainActor
class JSONPanelViewModel: ObservableObject {
    @Published var tabs: [JSONTab] = []
    @Published var activeTabId: UUID?
    private var tabCounter: Int = 0
    
    var activeTab: JSONTab? { tabs.first { $0.id == activeTabId } }
    
    init() { _ = createNewTab() }
    
    @discardableResult
    func createNewTab(content: String = "{\n  \n}", title: String? = nil) -> JSONTab {
        tabCounter += 1
        var tab = JSONTab(title: title ?? "Untitled \(tabCounter)", content: content)
        if let node = try? JSONParser.parse(content) { tab.treeModel = node; tab.isExpanded = collectAllNodeIds(node) }
        else { tab.validationError = JSONParser.validate(content).error }
        tabs.append(tab); activeTabId = tab.id
        return tab
    }
    
    func closeTab(id: UUID) {
        guard let index = tabs.firstIndex(where: { $0.id == id }) else { return }
        tabs.remove(at: index)
        if activeTabId == id { activeTabId = tabs.isEmpty ? createNewTab().id : tabs[min(index, tabs.count - 1)].id }
    }
    
    func switchTab(to id: UUID) { guard tabs.contains(where: { $0.id == id }) else { return }; activeTabId = id }
    
    func updateTabContent(_ id: UUID, content: String) {
        guard let index = tabs.firstIndex(where: { $0.id == id }) else { return }
        tabs[index].content = content; tabs[index].isModified = true
        let result = JSONParser.validate(content)
        if result.isValid {
            if let node = try? JSONParser.parse(content) {
                tabs[index].treeModel = node; tabs[index].validationError = nil
                tabs[index].isExpanded = collectAllNodeIds(node)
            }
        } else { tabs[index].validationError = result.error }
    }
    
    func updateTabTreeModel(_ id: UUID, treeModel: JSONTreeNode) {
        guard let index = tabs.firstIndex(where: { $0.id == id }) else { return }
        tabs[index].treeModel = treeModel; tabs[index].content = JSONParser.stringify(treeModel, pretty: true)
        tabs[index].isModified = true; tabs[index].validationError = nil
    }
    
    func updateTabViewMode(_ id: UUID, mode: JSONViewMode) {
        guard let index = tabs.firstIndex(where: { $0.id == id }) else { return }
        tabs[index].viewMode = mode
    }
    
    func formatJSON(tabId: UUID) throws {
        guard let index = tabs.firstIndex(where: { $0.id == tabId }) else { return }
        let formatted = try JSONParser.format(tabs[index].content)
        tabs[index].content = formatted; tabs[index].treeModel = try JSONParser.parse(formatted)
        tabs[index].validationError = nil; tabs[index].isModified = true
    }
    
    func compressJSON(tabId: UUID) throws {
        guard let index = tabs.firstIndex(where: { $0.id == tabId }) else { return }
        let compressed = try JSONParser.compress(tabs[index].content)
        tabs[index].content = compressed; tabs[index].treeModel = try JSONParser.parse(compressed)
        tabs[index].validationError = nil; tabs[index].isModified = true
    }
    
    func toggleNodeExpansion(_ tabId: UUID, nodeId: UUID) {
        guard let index = tabs.firstIndex(where: { $0.id == tabId }) else { return }
        if tabs[index].isExpanded.contains(nodeId) { tabs[index].isExpanded.remove(nodeId) } else { tabs[index].isExpanded.insert(nodeId) }
    }
    
    func expandAllNodes(_ tabId: UUID) {
        guard let index = tabs.firstIndex(where: { $0.id == tabId }), let treeModel = tabs[index].treeModel else { return }
        tabs[index].isExpanded = collectAllNodeIds(treeModel)
    }
    
    func collapseAllNodes(_ tabId: UUID) {
        guard let index = tabs.firstIndex(where: { $0.id == tabId }), let treeModel = tabs[index].treeModel else { return }
        tabs[index].isExpanded = [treeModel.id]
    }
    
    private func collectAllNodeIds(_ node: JSONTreeNode) -> Set<UUID> {
        var ids: Set<UUID> = [node.id]
        switch node {
        case .object(_, let children): for child in children { ids.formUnion(collectAllNodeIds(child.value)) }
        case .array(_, let elements): for element in elements { ids.formUnion(collectAllNodeIds(element)) }
        default: break
        }
        return ids
    }
    
    func loadDemoJSON() {
        let demoJSON = """
        {"name":"FlowTask","version":"1.0.0","features":["Task Management","Notes","Statistics","JSON Editor"],"settings":{"theme":"dark","language":"zh-CN"}}
        """
        if let activeId = activeTabId, let index = tabs.firstIndex(where: { $0.id == activeId }) {
            tabs[index].content = demoJSON; tabs[index].isModified = true
            if let node = try? JSONParser.parse(demoJSON) { tabs[index].treeModel = node; tabs[index].validationError = nil; tabs[index].isExpanded = collectAllNodeIds(node) }
        }
    }
}

// MARK: - Main Editor ViewModel (manages split state)

@MainActor
class JSONEditorViewModel: ObservableObject {
    @Published var leftPanel = JSONPanelViewModel()
    @Published var rightPanel = JSONPanelViewModel()
    @Published var isSplitViewEnabled: Bool = false
    @Published var splitRatio: CGFloat = 0.5
    
    init() { loadSplitRatioPreference() }
    
    func toggleSplitView() { isSplitViewEnabled.toggle() }
    func updateSplitRatio(_ ratio: CGFloat) { splitRatio = max(0.2, min(0.8, ratio)); saveSplitRatioPreference() }
    
    private func loadSplitRatioPreference() { if let ratio = UserDefaults.standard.object(forKey: "JSONEditorSplitRatio") as? CGFloat { splitRatio = ratio } }
    private func saveSplitRatioPreference() { UserDefaults.standard.set(splitRatio, forKey: "JSONEditorSplitRatio") }
}


// MARK: - JSON Editor View

struct JSONEditorView: View {
    @StateObject private var viewModel = JSONEditorViewModel()
    
    var body: some View {
        GeometryReader { geometry in
            if viewModel.isSplitViewEnabled {
                HStack(spacing: 0) {
                    JSONPanelView(viewModel: viewModel.leftPanel, onToggleSplit: { viewModel.toggleSplitView() }, isSplitEnabled: true)
                        .frame(width: geometry.size.width * viewModel.splitRatio)
                    Rectangle().fill(Color(nsColor: .separatorColor)).frame(width: 4)
                        .gesture(DragGesture().onChanged { viewModel.updateSplitRatio($0.location.x / geometry.size.width) })
                        .onHover { if $0 { NSCursor.resizeLeftRight.push() } else { NSCursor.pop() } }
                    JSONPanelView(viewModel: viewModel.rightPanel, onToggleSplit: { viewModel.toggleSplitView() }, isSplitEnabled: true)
                }
            } else {
                JSONPanelView(viewModel: viewModel.leftPanel, onToggleSplit: { viewModel.toggleSplitView() }, isSplitEnabled: false)
            }
        }
        .background(Color(nsColor: .windowBackgroundColor))
    }
}

// MARK: - JSON Panel View (独立的编辑器面板)

struct JSONPanelView: View {
    @ObservedObject var viewModel: JSONPanelViewModel
    var onToggleSplit: () -> Void
    var isSplitEnabled: Bool
    
    var body: some View {
        VStack(spacing: 0) {
            JSONPanelTabBar(viewModel: viewModel)
            Divider()
            JSONPanelToolbar(viewModel: viewModel, onToggleSplit: onToggleSplit, isSplitEnabled: isSplitEnabled)
            Divider()
            if let tab = viewModel.activeTab { editorContent(for: tab) }
            else { emptyState }
        }
        .background(Color(nsColor: .textBackgroundColor))
    }
    
    @ViewBuilder
    private func editorContent(for tab: JSONTab) -> some View {
        switch tab.viewMode {
        case .text: textEditorView(for: tab)
        case .tree: treeEditorView(for: tab)
        case .split: HSplitView { textEditorView(for: tab).frame(minWidth: 200); treeEditorView(for: tab).frame(minWidth: 200) }
        }
    }
    
    @ViewBuilder
    private func textEditorView(for tab: JSONTab) -> some View {
        VStack(spacing: 0) {
            JSONTextEditorView(content: Binding(get: { tab.content }, set: { viewModel.updateTabContent(tab.id, content: $0) }), validationError: tab.validationError)
            statusBar(for: tab)
        }
    }
    
    @ViewBuilder
    private func treeEditorView(for tab: JSONTab) -> some View {
        VStack(spacing: 0) {
            JSONTreeEditorView(rootNode: Binding(get: { tab.treeModel }, set: { if let n = $0 { viewModel.updateTabTreeModel(tab.id, treeModel: n) } }),
                expandedNodes: Binding(get: { viewModel.tabs.first { $0.id == tab.id }?.isExpanded ?? [] }, set: { if let i = viewModel.tabs.firstIndex(where: { $0.id == tab.id }) { viewModel.tabs[i].isExpanded = $0 } }))
            statusBar(for: tab)
        }
    }
    
    @ViewBuilder
    private func statusBar(for tab: JSONTab) -> some View {
        HStack {
            if let error = tab.validationError {
                Image(systemName: "exclamationmark.triangle.fill").foregroundColor(.red).font(.system(size: 11))
                Text(error.message).font(.system(size: 11)).foregroundColor(.red).lineLimit(1)
                if let line = error.line { Text("行 \(line)").font(.system(size: 11)).foregroundColor(.secondary) }
            } else {
                Image(systemName: "checkmark.circle.fill").foregroundColor(.green).font(.system(size: 11))
                Text("有效的 JSON").font(.system(size: 11)).foregroundColor(.secondary)
            }
            Spacer()
            Text("\(tab.content.count) 字符").font(.system(size: 11)).foregroundColor(.secondary)
        }.padding(.horizontal, 12).padding(.vertical, 4).background(Color(nsColor: .controlBackgroundColor))
    }
    
    private var emptyState: some View {
        VStack { Image(systemName: "doc.text").font(.system(size: 48)).foregroundColor(.secondary); Text("选择或创建一个标签页").foregroundColor(.secondary) }.frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}

// MARK: - JSON Panel Toolbar

struct JSONPanelToolbar: View {
    @ObservedObject var viewModel: JSONPanelViewModel
    var onToggleSplit: () -> Void
    var isSplitEnabled: Bool
    @State private var showError = false
    @State private var errorMessage = ""
    
    var body: some View {
        HStack(spacing: 8) {
            HStack(spacing: 4) {
                Button { formatJSON() } label: { Label("格式化", systemImage: "text.alignleft").font(.system(size: 12)) }.buttonStyle(.bordered)
                Button { compressJSON() } label: { Label("压缩", systemImage: "arrow.left.and.right.text.vertical").font(.system(size: 12)) }.buttonStyle(.bordered)
                Button { copyToClipboard() } label: { Image(systemName: "doc.on.doc").font(.system(size: 12)) }.buttonStyle(.bordered).help("复制")
                Button { importJSON() } label: { Image(systemName: "square.and.arrow.down").font(.system(size: 12)) }.buttonStyle(.bordered).help("导入")
                Button { exportJSON() } label: { Image(systemName: "square.and.arrow.up").font(.system(size: 12)) }.buttonStyle(.bordered).help("导出")
            }
            Spacer()
            HStack(spacing: 4) {
                Picker("", selection: viewModeBinding) {
                    ForEach(JSONViewMode.allCases, id: \.self) { Label($0.displayName, systemImage: $0.icon).tag($0) }
                }.pickerStyle(.segmented).frame(width: 150)
                Button { viewModel.expandAllNodes(viewModel.activeTabId ?? UUID()) } label: { Image(systemName: "arrow.up.left.and.arrow.down.right") }.buttonStyle(.bordered).help("全部展开")
                Button { viewModel.collapseAllNodes(viewModel.activeTabId ?? UUID()) } label: { Image(systemName: "arrow.down.right.and.arrow.up.left") }.buttonStyle(.bordered).help("全部折叠")
                Button { onToggleSplit() } label: { Image(systemName: isSplitEnabled ? "rectangle" : "rectangle.split.2x1") }.buttonStyle(.bordered).help(isSplitEnabled ? "关闭分屏" : "开启分屏")
            }
        }
        .padding(.horizontal, 12).padding(.vertical, 8)
        .background(Color(nsColor: .controlBackgroundColor))
        .alert("错误", isPresented: $showError) { Button("确定", role: .cancel) {} } message: { Text(errorMessage) }
    }
    
    private var viewModeBinding: Binding<JSONViewMode> {
        Binding(get: { viewModel.activeTab?.viewMode ?? .split }, set: { if let id = viewModel.activeTabId { viewModel.updateTabViewMode(id, mode: $0) } })
    }
    
    private func formatJSON() {
        guard let id = viewModel.activeTabId else { return }
        do { try viewModel.formatJSON(tabId: id) } catch { errorMessage = "格式化失败: \(error.localizedDescription)"; showError = true }
    }
    
    private func compressJSON() {
        guard let id = viewModel.activeTabId else { return }
        do { try viewModel.compressJSON(tabId: id) } catch { errorMessage = "压缩失败: \(error.localizedDescription)"; showError = true }
    }
    
    private func copyToClipboard() {
        guard let content = viewModel.activeTab?.content else { return }
        NSPasteboard.general.clearContents(); NSPasteboard.general.setString(content, forType: .string)
    }
    
    private func importJSON() {
        let panel = NSOpenPanel(); panel.allowedContentTypes = [.json]; panel.allowsMultipleSelection = false
        panel.begin { response in
            if response == .OK, let url = panel.url {
                do { let content = try String(contentsOf: url, encoding: .utf8); viewModel.createNewTab(content: content, title: url.deletingPathExtension().lastPathComponent) }
                catch { errorMessage = "导入失败: \(error.localizedDescription)"; showError = true }
            }
        }
    }
    
    private func exportJSON() {
        guard let content = viewModel.activeTab?.content else { return }
        let panel = NSSavePanel(); panel.allowedContentTypes = [.json]; panel.nameFieldStringValue = "\(viewModel.activeTab?.title ?? "untitled").json"
        panel.begin { response in if response == .OK, let url = panel.url { try? content.write(to: url, atomically: true, encoding: .utf8) } }
    }
}

// MARK: - JSON Panel Tab Bar

struct JSONPanelTabBar: View {
    @ObservedObject var viewModel: JSONPanelViewModel
    
    var body: some View {
        HStack(spacing: 0) {
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 2) {
                    ForEach(viewModel.tabs) { tab in
                        JSONTabItemView(tab: tab, isActive: tab.id == viewModel.activeTabId,
                            onSelect: { viewModel.switchTab(to: tab.id) },
                            onClose: { viewModel.closeTab(id: tab.id) })
                    }
                }.padding(.horizontal, 4)
            }
            Spacer()
            Button { _ = viewModel.createNewTab() } label: {
                Image(systemName: "plus").font(.system(size: 12, weight: .medium)).foregroundColor(.secondary)
            }.buttonStyle(.plain).padding(.trailing, 8).help("新建标签页")
        }.frame(height: 32).background(Color(nsColor: .windowBackgroundColor))
    }
}

struct JSONTabItemView: View {
    let tab: JSONTab; let isActive: Bool; let onSelect: () -> Void; let onClose: () -> Void
    @State private var isHovered = false
    
    var body: some View {
        HStack(spacing: 4) {
            if tab.isModified { Circle().fill(Color.orange).frame(width: 6, height: 6) }
            if tab.validationError != nil { Image(systemName: "exclamationmark.triangle.fill").font(.system(size: 10)).foregroundColor(.red) }
            Text(tab.title).font(.system(size: 12)).lineLimit(1).foregroundColor(isActive ? .primary : .secondary)
            if isHovered || isActive {
                Button { onClose() } label: { Image(systemName: "xmark").font(.system(size: 9, weight: .medium)).foregroundColor(.secondary) }.buttonStyle(.plain)
            }
        }
        .padding(.horizontal, 10).padding(.vertical, 6)
        .background(RoundedRectangle(cornerRadius: 6).fill(isActive ? Color.accentColor.opacity(0.15) : (isHovered ? Color(nsColor: .controlColor).opacity(0.5) : Color.clear)))
        .contentShape(Rectangle()).onTapGesture { onSelect() }.onHover { isHovered = $0 }
    }
}


// MARK: - JSON Text Editor

struct JSONTextEditorView: NSViewRepresentable {
    @Binding var content: String
    var validationError: JSONValidationError?
    
    func makeNSView(context: Context) -> NSScrollView {
        let scrollView = NSScrollView()
        scrollView.hasVerticalScroller = true; scrollView.hasHorizontalScroller = true; scrollView.autohidesScrollers = true; scrollView.borderType = .noBorder
        
        let textView = NSTextView()
        textView.delegate = context.coordinator; textView.isEditable = true; textView.isSelectable = true; textView.allowsUndo = true; textView.isRichText = false
        textView.font = NSFont.monospacedSystemFont(ofSize: 13, weight: .regular); textView.textColor = NSColor.labelColor
        textView.backgroundColor = NSColor.textBackgroundColor; textView.autoresizingMask = [.width]; textView.isVerticallyResizable = true
        textView.textContainerInset = NSSize(width: 8, height: 8)
        textView.textContainer?.containerSize = NSSize(width: CGFloat.greatestFiniteMagnitude, height: CGFloat.greatestFiniteMagnitude)
        textView.textContainer?.widthTracksTextView = true
        
        scrollView.documentView = textView
        textView.string = content
        context.coordinator.applyJSONHighlighting(to: textView)
        return scrollView
    }
    
    func updateNSView(_ scrollView: NSScrollView, context: Context) {
        guard let textView = scrollView.documentView as? NSTextView else { return }
        if textView.string != content {
            let selectedRange = textView.selectedRange()
            textView.string = content
            textView.setSelectedRange(NSRange(location: min(selectedRange.location, content.count), length: 0))
        }
        context.coordinator.applyJSONHighlighting(to: textView)
    }
    
    func makeCoordinator() -> Coordinator { Coordinator(self) }
    
    class Coordinator: NSObject, NSTextViewDelegate {
        var parent: JSONTextEditorView
        private var isUpdating = false
        init(_ parent: JSONTextEditorView) { self.parent = parent }
        
        func textDidChange(_ notification: Notification) {
            guard !isUpdating, let textView = notification.object as? NSTextView else { return }
            isUpdating = true; parent.content = textView.string
            DispatchQueue.main.async { [weak self] in self?.applyJSONHighlighting(to: textView); self?.isUpdating = false }
        }
        
        func applyJSONHighlighting(to textView: NSTextView) {
            let text = textView.string; guard !text.isEmpty else { return }
            let attributedString = NSMutableAttributedString(string: text)
            let fullRange = NSRange(location: 0, length: text.count)
            attributedString.addAttribute(.font, value: NSFont.monospacedSystemFont(ofSize: 13, weight: .regular), range: fullRange)
            attributedString.addAttribute(.foregroundColor, value: NSColor.labelColor, range: fullRange)
            
            if let regex = try? NSRegularExpression(pattern: "\"[^\"\\\\]*(?:\\\\.[^\"\\\\]*)*\"") {
                for match in regex.matches(in: text, range: fullRange) { attributedString.addAttribute(.foregroundColor, value: NSColor.systemGreen, range: match.range) }
            }
            if let regex = try? NSRegularExpression(pattern: "(?<=[\\[\\{,:\\s])-?\\d+\\.?\\d*(?=[\\]\\},\\s]|$)") {
                for match in regex.matches(in: text, range: fullRange) { attributedString.addAttribute(.foregroundColor, value: NSColor.systemBlue, range: match.range) }
            }
            if let regex = try? NSRegularExpression(pattern: "\\b(true|false|null)\\b") {
                for match in regex.matches(in: text, range: fullRange) { attributedString.addAttribute(.foregroundColor, value: NSColor.systemOrange, range: match.range) }
            }
            if let regex = try? NSRegularExpression(pattern: "\"[^\"]+\"(?=\\s*:)") {
                for match in regex.matches(in: text, range: fullRange) { attributedString.addAttribute(.foregroundColor, value: NSColor.systemRed, range: match.range) }
            }
            
            let selectedRange = textView.selectedRange()
            textView.textStorage?.setAttributedString(attributedString)
            textView.setSelectedRange(selectedRange)
        }
    }
}

// MARK: - JSON Tree Editor (简化版 - 只有添加/删除)

struct JSONTreeEditorView: View {
    @Binding var rootNode: JSONTreeNode?
    @Binding var expandedNodes: Set<UUID>
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView([.vertical, .horizontal]) {
                VStack(alignment: .leading, spacing: 0) {
                    if let node = rootNode {
                        JSONTreeNodeView(node: node, keyName: nil, depth: 0, expandedNodes: $expandedNodes, onNodeChange: { rootNode = $0 }, onDelete: nil)
                    } else {
                        Text("无效的 JSON").foregroundColor(.secondary).padding()
                    }
                }
                .padding(8)
                .frame(minWidth: geometry.size.width, minHeight: geometry.size.height, alignment: .topLeading)
            }
        }
        .background(Color(nsColor: .textBackgroundColor))
    }
}

struct JSONTreeNodeView: View {
    let node: JSONTreeNode; let keyName: String?; let depth: Int
    @Binding var expandedNodes: Set<UUID>
    var onNodeChange: ((JSONTreeNode) -> Void)?; var onDelete: (() -> Void)?
    @State private var isEditing = false; @State private var editingValue = ""; @State private var isHovered = false
    
    private var isExpanded: Bool { expandedNodes.contains(node.id) }
    private var typeColor: Color {
        switch node { case .object: return .purple; case .array: return .blue; case .string: return .green; case .number: return .orange; case .boolean: return .cyan; case .null: return .gray }
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            HStack(spacing: 4) {
                if node.isContainer {
                    Button { if expandedNodes.contains(node.id) { expandedNodes.remove(node.id) } else { expandedNodes.insert(node.id) } } label: {
                        Image(systemName: isExpanded ? "chevron.down" : "chevron.right").font(.system(size: 10, weight: .medium)).foregroundColor(.secondary).frame(width: 16, height: 16)
                    }.buttonStyle(.plain)
                } else { Spacer().frame(width: 16) }
                
                if let key = keyName { Text(key).font(.system(size: 13, weight: .medium, design: .monospaced)).foregroundColor(.red); Text(":").font(.system(size: 13, design: .monospaced)).foregroundColor(.secondary) }
                Text(node.typeIndicator).font(.system(size: 10, weight: .medium, design: .monospaced)).foregroundColor(typeColor).padding(.horizontal, 4).padding(.vertical, 2).background(typeColor.opacity(0.15)).cornerRadius(3)
                valueView
                Spacer()
                if isHovered { actionButtons }
            }
            .padding(.leading, CGFloat(depth) * 20).padding(.vertical, 4).padding(.horizontal, 8)
            .background(isHovered ? Color.accentColor.opacity(0.1) : Color.clear).cornerRadius(4)
            .onHover { isHovered = $0 }
            
            if isExpanded { childrenView }
        }
    }
    
    @ViewBuilder
    private var valueView: some View {
        switch node {
        case .object(_, let children): Text("{\(children.count) 项}").font(.system(size: 13, design: .monospaced)).foregroundColor(.secondary)
        case .array(_, let elements): Text("[\(elements.count) 项]").font(.system(size: 13, design: .monospaced)).foregroundColor(.secondary)
        case .string(_, let value):
            if isEditing { editableTextField(initialValue: value) { onNodeChange?(.string(id: node.id, value: $0)) } }
            else { Text("\"\(value)\"").font(.system(size: 13, design: .monospaced)).foregroundColor(.green).onTapGesture(count: 2) { editingValue = value; isEditing = true } }
        case .number(_, _):
            if isEditing { editableTextField(initialValue: node.displayValue) { if let d = Double($0) { onNodeChange?(.number(id: node.id, value: d)) } } }
            else { Text(node.displayValue).font(.system(size: 13, design: .monospaced)).foregroundColor(.orange).onTapGesture(count: 2) { editingValue = node.displayValue; isEditing = true } }
        case .boolean(_, let value): Toggle("", isOn: Binding(get: { value }, set: { onNodeChange?(.boolean(id: node.id, value: $0)) })).toggleStyle(.switch).scaleEffect(0.7)
        case .null: Text("null").font(.system(size: 13, design: .monospaced)).foregroundColor(.gray).italic()
        }
    }
    
    @ViewBuilder
    private func editableTextField(initialValue: String, onCommit: @escaping (String) -> Void) -> some View {
        TextField("", text: $editingValue, onCommit: { onCommit(editingValue); isEditing = false })
            .textFieldStyle(.plain).font(.system(size: 13, design: .monospaced)).frame(minWidth: 100)
            .padding(.horizontal, 4).padding(.vertical, 2).background(Color(nsColor: .controlBackgroundColor)).cornerRadius(4)
            .onAppear { editingValue = initialValue }.onExitCommand { isEditing = false }
    }
    
    @ViewBuilder
    private var actionButtons: some View {
        HStack(spacing: 4) {
            // 只有容器节点才能添加子节点
            if node.isContainer {
                Button { addChild() } label: { Image(systemName: "plus.circle").font(.system(size: 12)).foregroundColor(.green) }.buttonStyle(.plain).help("添加")
            }
            // 删除按钮
            if let onDelete = onDelete {
                Button { onDelete() } label: { Image(systemName: "trash").font(.system(size: 12)).foregroundColor(.red) }.buttonStyle(.plain).help("删除")
            }
        }
    }
    
    @ViewBuilder
    private var childrenView: some View {
        switch node {
        case .object(let id, let children):
            ForEach(Array(children.enumerated()), id: \.element.id) { index, property in
                JSONTreeNodeView(node: property.value, keyName: property.key, depth: depth + 1, expandedNodes: $expandedNodes,
                    onNodeChange: { var newChildren = children; newChildren[index].value = $0; onNodeChange?(.object(id: id, children: newChildren)) },
                    onDelete: { var newChildren = children; newChildren.remove(at: index); onNodeChange?(.object(id: id, children: newChildren)) })
            }
        case .array(let id, let elements):
            ForEach(Array(elements.enumerated()), id: \.element.id) { index, element in
                JSONTreeNodeView(node: element, keyName: "[\(index)]", depth: depth + 1, expandedNodes: $expandedNodes,
                    onNodeChange: { var newElements = elements; newElements[index] = $0; onNodeChange?(.array(id: id, elements: newElements)) },
                    onDelete: { var newElements = elements; newElements.remove(at: index); onNodeChange?(.array(id: id, elements: newElements)) })
            }
        default: EmptyView()
        }
    }
    
    // 简化的添加逻辑：object 添加 string 属性，array 添加 string 元素
    private func addChild() {
        switch node {
        case .object(let id, var children):
            children.append(JSONObjectProperty(key: "key\(children.count + 1)", value: .string(id: UUID(), value: "")))
            onNodeChange?(.object(id: id, children: children)); expandedNodes.insert(id)
        case .array(let id, var elements):
            elements.append(.string(id: UUID(), value: ""))
            onNodeChange?(.array(id: id, elements: elements)); expandedNodes.insert(id)
        default: break
        }
    }
}
