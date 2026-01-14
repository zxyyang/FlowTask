import SwiftUI

#if os(macOS)
import UniformTypeIdentifiers

// MARK: - MuyaToolbar

/// Muya 编辑器原生工具栏
/// 需求: 6.1, 6.2, 6.3, 6.4, 6.5, 9.5
struct MuyaToolbar: View {
    /// MuyaBridge 实例
    let bridge: MuyaBridge
    
    /// 历史状态
    @State private var historyState: HistoryState = .initial
    
    /// 当前格式状态
    @State private var isBold: Bool = false
    @State private var isItalic: Bool = false
    @State private var isStrikethrough: Bool = false
    @State private var isCode: Bool = false
    
    var body: some View {
        HStack(spacing: 2) {
            // 历史操作
            Group {
                ToolbarButton(icon: "arrow.uturn.backward", tooltip: "撤销", enabled: historyState.canUndo) {
                    bridge.undo()
                }
                ToolbarButton(icon: "arrow.uturn.forward", tooltip: "重做", enabled: historyState.canRedo) {
                    bridge.redo()
                }
            }
            
            Divider().frame(height: 20).padding(.horizontal, 4)
            
            // 文本格式
            Group {
                ToolbarButton(icon: "bold", tooltip: "粗体", isActive: isBold) {
                    bridge.bold()
                }
                ToolbarButton(icon: "italic", tooltip: "斜体", isActive: isItalic) {
                    bridge.italic()
                }
                ToolbarButton(icon: "strikethrough", tooltip: "删除线", isActive: isStrikethrough) {
                    bridge.strikethrough()
                }
                ToolbarButton(icon: "chevron.left.forwardslash.chevron.right", tooltip: "行内代码", isActive: isCode) {
                    bridge.inlineCode()
                }
            }
            
            Divider().frame(height: 20).padding(.horizontal, 4)
            
            // 标题
            Menu {
                Button("一级标题") { bridge.format(MuyaFormatType.heading1) }
                Button("二级标题") { bridge.format(MuyaFormatType.heading2) }
                Button("三级标题") { bridge.format(MuyaFormatType.heading3) }
                Button("四级标题") { bridge.format(MuyaFormatType.heading4) }
                Button("五级标题") { bridge.format(MuyaFormatType.heading5) }
                Button("六级标题") { bridge.format(MuyaFormatType.heading6) }
            } label: {
                Image(systemName: "textformat.size")
                    .frame(width: 28, height: 28)
            }
            .menuStyle(.borderlessButton)
            .frame(width: 36)
            .help("标题")
            
            Divider().frame(height: 20).padding(.horizontal, 4)
            
            // 列表
            Group {
                ToolbarButton(icon: "list.bullet", tooltip: "无序列表") {
                    bridge.format(MuyaFormatType.unorderedList)
                }
                ToolbarButton(icon: "list.number", tooltip: "有序列表") {
                    bridge.format(MuyaFormatType.orderedList)
                }
                ToolbarButton(icon: "checklist", tooltip: "任务列表") {
                    bridge.format(MuyaFormatType.taskList)
                }
            }
            
            Divider().frame(height: 20).padding(.horizontal, 4)
            
            // 插入
            Group {
                ToolbarButton(icon: "link", tooltip: "插入链接") {
                    showLinkDialog()
                }
                ToolbarButton(icon: "photo", tooltip: "插入图片") {
                    showImageDialog()
                }
                ToolbarButton(icon: "tablecells", tooltip: "插入表格") {
                    showTableDialog()
                }
                ToolbarButton(icon: "curlybraces", tooltip: "代码块") {
                    bridge.insertCodeBlock()
                }
                ToolbarButton(icon: "function", tooltip: "数学公式") {
                    bridge.insertMathBlock()
                }
            }
            
            Divider().frame(height: 20).padding(.horizontal, 4)
            
            // 其他
            Group {
                ToolbarButton(icon: "text.quote", tooltip: "引用") {
                    bridge.insertQuote()
                }
                ToolbarButton(icon: "minus", tooltip: "分隔线") {
                    bridge.insertHorizontalRule()
                }
            }
            
            Spacer()
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 4)
        .background(Color(NSColor.controlBackgroundColor))
        .onReceive(NotificationCenter.default.publisher(for: .muyaHistoryStateChanged)) { notification in
            if let state = notification.object as? HistoryState {
                historyState = state
            }
        }
    }
    
    // MARK: - Dialogs
    
    private func showLinkDialog() {
        let alert = NSAlert()
        alert.messageText = "插入链接"
        alert.informativeText = "请输入链接地址和显示文本"
        alert.alertStyle = .informational
        alert.addButton(withTitle: "插入")
        alert.addButton(withTitle: "取消")
        
        let stackView = NSStackView(frame: NSRect(x: 0, y: 0, width: 300, height: 60))
        stackView.orientation = .vertical
        stackView.spacing = 8
        
        let urlField = NSTextField(frame: NSRect(x: 0, y: 0, width: 300, height: 24))
        urlField.placeholderString = "链接地址 (https://...)"
        
        let textField = NSTextField(frame: NSRect(x: 0, y: 0, width: 300, height: 24))
        textField.placeholderString = "显示文本 (可选)"
        
        stackView.addArrangedSubview(urlField)
        stackView.addArrangedSubview(textField)
        alert.accessoryView = stackView
        
        if alert.runModal() == .alertFirstButtonReturn {
            let url = urlField.stringValue
            let text = textField.stringValue.isEmpty ? nil : textField.stringValue
            if !url.isEmpty {
                bridge.insertLink(url: url, text: text)
            }
        }
    }
    
    private func showImageDialog() {
        let panel = NSOpenPanel()
        panel.allowedContentTypes = [.image]
        panel.allowsMultipleSelection = false
        panel.canChooseDirectories = false
        panel.message = "选择要插入的图片"
        
        if panel.runModal() == .OK, let url = panel.url {
            // 读取图片数据并复制到存储目录
            do {
                let imageData = try Data(contentsOf: url)
                let ext = url.pathExtension.lowercased()
                let mimeType = ext == "png" ? "image/png" : (ext == "gif" ? "image/gif" : (ext == "webp" ? "image/webp" : "image/jpeg"))
                let base64Data = "data:\(mimeType);base64," + imageData.base64EncodedString()
                
                let result = ImageHandler.shared.handlePastedImage(base64Data: base64Data, mimeType: mimeType)
                
                switch result {
                case .success(let relativePath):
                    if let absoluteURL = ImageHandler.shared.getAbsoluteURL(for: relativePath) {
                        bridge.insertImage(url: absoluteURL.path, alt: url.lastPathComponent)
                    } else {
                        // 回退到原始路径
                        bridge.insertImage(url: url.path, alt: url.lastPathComponent)
                    }
                case .failure(let error):
                    MuyaLogger.error("保存图片失败: \(error.localizedDescription)", category: "toolbar")
                    // 回退到原始路径
                    bridge.insertImage(url: url.path, alt: url.lastPathComponent)
                }
            } catch {
                MuyaLogger.error("读取图片失败: \(error.localizedDescription)", category: "toolbar")
                // 回退到原始路径
                bridge.insertImage(url: url.path, alt: url.lastPathComponent)
            }
        }
    }
    
    private func showTableDialog() {
        let alert = NSAlert()
        alert.messageText = "插入表格"
        alert.informativeText = "请输入表格的行数和列数"
        alert.alertStyle = .informational
        alert.addButton(withTitle: "插入")
        alert.addButton(withTitle: "取消")
        
        let stackView = NSStackView(frame: NSRect(x: 0, y: 0, width: 200, height: 60))
        stackView.orientation = .vertical
        stackView.spacing = 8
        
        let rowsField = NSTextField(frame: NSRect(x: 0, y: 0, width: 200, height: 24))
        rowsField.placeholderString = "行数 (默认 3)"
        rowsField.stringValue = "3"
        rowsField.bezelStyle = .roundedBezel
        rowsField.isBordered = true
        rowsField.isEditable = true
        
        let colsField = NSTextField(frame: NSRect(x: 0, y: 0, width: 200, height: 24))
        colsField.placeholderString = "列数 (默认 3)"
        colsField.stringValue = "3"
        colsField.bezelStyle = .roundedBezel
        colsField.isBordered = true
        colsField.isEditable = true
        
        stackView.addArrangedSubview(rowsField)
        stackView.addArrangedSubview(colsField)
        alert.accessoryView = stackView
        
        if alert.runModal() == .alertFirstButtonReturn {
            let rows = Int(rowsField.stringValue) ?? 3
            let cols = Int(colsField.stringValue) ?? 3
            bridge.insertTable(rows: max(1, rows), columns: max(1, cols))
        }
    }
}

// MARK: - ToolbarButton

/// 工具栏按钮组件
struct ToolbarButton: View {
    let icon: String
    let tooltip: String
    var isActive: Bool = false
    var enabled: Bool = true
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Image(systemName: icon)
                .frame(width: 28, height: 28)
                .background(isActive ? Color.accentColor.opacity(0.2) : Color.clear)
                .cornerRadius(4)
        }
        .buttonStyle(.borderless)
        .disabled(!enabled)
        .opacity(enabled ? 1.0 : 0.5)
        .help(tooltip)
    }
}

// MARK: - Notifications

extension Notification.Name {
    static let muyaFormatStateChanged = Notification.Name("muyaFormatStateChanged")
}

#endif
