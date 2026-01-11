import SwiftUI
import AppKit
import UniformTypeIdentifiers

#if os(macOS)

// MARK: - MuyaContextMenu

/// Muya 编辑器原生右键菜单
/// 需求: 20.1, 20.2, 20.4, 20.5, 20.6, 20.7, 20.8
class MuyaContextMenu {
    
    /// MuyaBridge 实例
    weak var bridge: MuyaBridge?
    
    /// 当前上下文类型
    enum ContextType {
        case text
        case codeBlock(language: String?)
        case image(url: String)
        case link(url: String, text: String?)
        case table
    }
    
    init(bridge: MuyaBridge) {
        self.bridge = bridge
    }
    
    // MARK: - Menu Creation
    
    /// 创建右键菜单
    /// - Parameter context: 上下文类型
    /// - Returns: NSMenu 实例
    func createMenu(for context: ContextType = .text) -> NSMenu {
        let menu = NSMenu()
        
        // 基础编辑操作
        addEditItems(to: menu)
        menu.addItem(NSMenuItem.separator())
        
        // 格式化操作
        addFormatItems(to: menu)
        menu.addItem(NSMenuItem.separator())
        
        // 插入操作
        addInsertItems(to: menu)
        
        // 上下文相关操作
        switch context {
        case .codeBlock(let language):
            menu.addItem(NSMenuItem.separator())
            addCodeBlockItems(to: menu, language: language)
            
        case .image(let url):
            menu.addItem(NSMenuItem.separator())
            addImageItems(to: menu, url: url)
            
        case .link(let url, let text):
            menu.addItem(NSMenuItem.separator())
            addLinkItems(to: menu, url: url, text: text)
            
        case .table:
            menu.addItem(NSMenuItem.separator())
            addTableItems(to: menu)
            
        case .text:
            break
        }
        
        return menu
    }
    
    // MARK: - Edit Items
    
    private func addEditItems(to menu: NSMenu) {
        let undoItem = NSMenuItem(title: "撤销", action: #selector(handleUndo), keyEquivalent: "z")
        undoItem.target = self
        menu.addItem(undoItem)
        
        let redoItem = NSMenuItem(title: "重做", action: #selector(handleRedo), keyEquivalent: "Z")
        redoItem.target = self
        menu.addItem(redoItem)
        
        menu.addItem(NSMenuItem.separator())
        
        let cutItem = NSMenuItem(title: "剪切", action: #selector(handleCut), keyEquivalent: "x")
        cutItem.target = self
        menu.addItem(cutItem)
        
        let copyItem = NSMenuItem(title: "复制", action: #selector(handleCopy), keyEquivalent: "c")
        copyItem.target = self
        menu.addItem(copyItem)
        
        let pasteItem = NSMenuItem(title: "粘贴", action: #selector(handlePaste), keyEquivalent: "v")
        pasteItem.target = self
        menu.addItem(pasteItem)
        
        let selectAllItem = NSMenuItem(title: "全选", action: #selector(handleSelectAll), keyEquivalent: "a")
        selectAllItem.target = self
        menu.addItem(selectAllItem)
    }
    
    // MARK: - Format Items
    
    private func addFormatItems(to menu: NSMenu) {
        let formatMenu = NSMenu()
        
        let boldItem = NSMenuItem(title: "粗体", action: #selector(handleBold), keyEquivalent: "b")
        boldItem.target = self
        formatMenu.addItem(boldItem)
        
        let italicItem = NSMenuItem(title: "斜体", action: #selector(handleItalic), keyEquivalent: "i")
        italicItem.target = self
        formatMenu.addItem(italicItem)
        
        let strikethroughItem = NSMenuItem(title: "删除线", action: #selector(handleStrikethrough), keyEquivalent: "")
        strikethroughItem.target = self
        formatMenu.addItem(strikethroughItem)
        
        let codeItem = NSMenuItem(title: "行内代码", action: #selector(handleInlineCode), keyEquivalent: "`")
        codeItem.target = self
        formatMenu.addItem(codeItem)
        
        formatMenu.addItem(NSMenuItem.separator())
        
        // 标题子菜单
        let headingMenu = NSMenu()
        for i in 1...6 {
            let item = NSMenuItem(title: "\(i) 级标题", action: #selector(handleHeading(_:)), keyEquivalent: "")
            item.target = self
            item.tag = i
            headingMenu.addItem(item)
        }
        let headingItem = NSMenuItem(title: "标题", action: nil, keyEquivalent: "")
        headingItem.submenu = headingMenu
        formatMenu.addItem(headingItem)
        
        let formatMenuItem = NSMenuItem(title: "格式", action: nil, keyEquivalent: "")
        formatMenuItem.submenu = formatMenu
        menu.addItem(formatMenuItem)
    }
    
    // MARK: - Insert Items
    
    private func addInsertItems(to menu: NSMenu) {
        let insertMenu = NSMenu()
        
        let linkItem = NSMenuItem(title: "链接...", action: #selector(handleInsertLink), keyEquivalent: "k")
        linkItem.target = self
        insertMenu.addItem(linkItem)
        
        let imageItem = NSMenuItem(title: "图片...", action: #selector(handleInsertImage), keyEquivalent: "")
        imageItem.target = self
        insertMenu.addItem(imageItem)
        
        let tableItem = NSMenuItem(title: "表格...", action: #selector(handleInsertTable), keyEquivalent: "")
        tableItem.target = self
        insertMenu.addItem(tableItem)
        
        insertMenu.addItem(NSMenuItem.separator())
        
        let codeBlockItem = NSMenuItem(title: "代码块", action: #selector(handleInsertCodeBlock), keyEquivalent: "")
        codeBlockItem.target = self
        insertMenu.addItem(codeBlockItem)
        
        let mathItem = NSMenuItem(title: "数学公式", action: #selector(handleInsertMath), keyEquivalent: "")
        mathItem.target = self
        insertMenu.addItem(mathItem)
        
        let quoteItem = NSMenuItem(title: "引用", action: #selector(handleInsertQuote), keyEquivalent: "")
        quoteItem.target = self
        insertMenu.addItem(quoteItem)
        
        let hrItem = NSMenuItem(title: "分隔线", action: #selector(handleInsertHR), keyEquivalent: "")
        hrItem.target = self
        insertMenu.addItem(hrItem)
        
        let insertMenuItem = NSMenuItem(title: "插入", action: nil, keyEquivalent: "")
        insertMenuItem.submenu = insertMenu
        menu.addItem(insertMenuItem)
    }
    
    // MARK: - Code Block Items
    
    private func addCodeBlockItems(to menu: NSMenu, language: String?) {
        let copyCodeItem = NSMenuItem(title: "复制代码", action: #selector(handleCopyCode), keyEquivalent: "")
        copyCodeItem.target = self
        menu.addItem(copyCodeItem)
        
        if let lang = language, !lang.isEmpty {
            let langItem = NSMenuItem(title: "语言: \(lang)", action: nil, keyEquivalent: "")
            langItem.isEnabled = false
            menu.addItem(langItem)
        }
    }
    
    // MARK: - Image Items
    
    private func addImageItems(to menu: NSMenu, url: String) {
        let copyImageItem = NSMenuItem(title: "复制图片", action: #selector(handleCopyImage(_:)), keyEquivalent: "")
        copyImageItem.target = self
        copyImageItem.representedObject = url
        menu.addItem(copyImageItem)
        
        let copyPathItem = NSMenuItem(title: "复制图片路径", action: #selector(handleCopyImagePath(_:)), keyEquivalent: "")
        copyPathItem.target = self
        copyPathItem.representedObject = url
        menu.addItem(copyPathItem)
        
        if url.hasPrefix("/") || url.hasPrefix("file://") {
            let showInFinderItem = NSMenuItem(title: "在访达中显示", action: #selector(handleShowInFinder(_:)), keyEquivalent: "")
            showInFinderItem.target = self
            showInFinderItem.representedObject = url
            menu.addItem(showInFinderItem)
        }
    }
    
    // MARK: - Link Items
    
    private func addLinkItems(to menu: NSMenu, url: String, text: String?) {
        let openLinkItem = NSMenuItem(title: "打开链接", action: #selector(handleOpenLink(_:)), keyEquivalent: "")
        openLinkItem.target = self
        openLinkItem.representedObject = url
        menu.addItem(openLinkItem)
        
        let copyLinkItem = NSMenuItem(title: "复制链接", action: #selector(handleCopyLink(_:)), keyEquivalent: "")
        copyLinkItem.target = self
        copyLinkItem.representedObject = url
        menu.addItem(copyLinkItem)
    }
    
    // MARK: - Table Items
    
    private func addTableItems(to menu: NSMenu) {
        let addRowItem = NSMenuItem(title: "添加行", action: #selector(handleAddTableRow), keyEquivalent: "")
        addRowItem.target = self
        menu.addItem(addRowItem)
        
        let addColItem = NSMenuItem(title: "添加列", action: #selector(handleAddTableColumn), keyEquivalent: "")
        addColItem.target = self
        menu.addItem(addColItem)
        
        menu.addItem(NSMenuItem.separator())
        
        let deleteRowItem = NSMenuItem(title: "删除行", action: #selector(handleDeleteTableRow), keyEquivalent: "")
        deleteRowItem.target = self
        menu.addItem(deleteRowItem)
        
        let deleteColItem = NSMenuItem(title: "删除列", action: #selector(handleDeleteTableColumn), keyEquivalent: "")
        deleteColItem.target = self
        menu.addItem(deleteColItem)
    }
    
    // MARK: - Action Handlers
    
    @objc private func handleUndo() { bridge?.undo() }
    @objc private func handleRedo() { bridge?.redo() }
    
    @objc private func handleCut() {
        NSApp.sendAction(#selector(NSText.cut(_:)), to: nil, from: nil)
    }
    
    @objc private func handleCopy() {
        NSApp.sendAction(#selector(NSText.copy(_:)), to: nil, from: nil)
    }
    
    @objc private func handlePaste() {
        NSApp.sendAction(#selector(NSText.paste(_:)), to: nil, from: nil)
    }
    
    @objc private func handleSelectAll() {
        NSApp.sendAction(#selector(NSText.selectAll(_:)), to: nil, from: nil)
    }
    
    @objc private func handleBold() { bridge?.bold() }
    @objc private func handleItalic() { bridge?.italic() }
    @objc private func handleStrikethrough() { bridge?.strikethrough() }
    @objc private func handleInlineCode() { bridge?.inlineCode() }
    
    @objc private func handleHeading(_ sender: NSMenuItem) {
        let level = sender.tag
        switch level {
        case 1: bridge?.format(MuyaFormatType.heading1)
        case 2: bridge?.format(MuyaFormatType.heading2)
        case 3: bridge?.format(MuyaFormatType.heading3)
        case 4: bridge?.format(MuyaFormatType.heading4)
        case 5: bridge?.format(MuyaFormatType.heading5)
        case 6: bridge?.format(MuyaFormatType.heading6)
        default: break
        }
    }
    
    @objc private func handleInsertLink() {
        // 显示链接对话框
        let alert = NSAlert()
        alert.messageText = "插入链接"
        alert.addButton(withTitle: "插入")
        alert.addButton(withTitle: "取消")
        
        let stackView = NSStackView(frame: NSRect(x: 0, y: 0, width: 300, height: 60))
        stackView.orientation = .vertical
        stackView.spacing = 8
        
        let urlField = NSTextField(frame: NSRect(x: 0, y: 0, width: 300, height: 24))
        urlField.placeholderString = "链接地址"
        
        let textField = NSTextField(frame: NSRect(x: 0, y: 0, width: 300, height: 24))
        textField.placeholderString = "显示文本 (可选)"
        
        stackView.addArrangedSubview(urlField)
        stackView.addArrangedSubview(textField)
        alert.accessoryView = stackView
        
        if alert.runModal() == .alertFirstButtonReturn {
            let url = urlField.stringValue
            let text = textField.stringValue.isEmpty ? nil : textField.stringValue
            if !url.isEmpty {
                bridge?.insertLink(url: url, text: text)
            }
        }
    }
    
    @objc private func handleInsertImage() {
        let panel = NSOpenPanel()
        panel.allowedContentTypes = [.image]
        panel.allowsMultipleSelection = false
        
        if panel.runModal() == .OK, let url = panel.url {
            bridge?.insertImage(url: url.path, alt: url.lastPathComponent)
        }
    }
    
    @objc private func handleInsertTable() {
        bridge?.insertTable(rows: 3, columns: 3)
    }
    
    @objc private func handleInsertCodeBlock() { bridge?.insertCodeBlock() }
    @objc private func handleInsertMath() { bridge?.insertMathBlock() }
    @objc private func handleInsertQuote() { bridge?.insertQuote() }
    @objc private func handleInsertHR() { bridge?.insertHorizontalRule() }
    
    @objc private func handleCopyCode() {
        // 复制代码块内容
        Task {
            if let selection = await bridge?.getSelection() {
                NSPasteboard.general.clearContents()
                NSPasteboard.general.setString(selection, forType: .string)
            }
        }
    }
    
    @objc private func handleCopyImage(_ sender: NSMenuItem) {
        guard let url = sender.representedObject as? String else { return }
        
        let fileURL: URL
        if url.hasPrefix("file://") {
            fileURL = URL(string: url)!
        } else {
            fileURL = URL(fileURLWithPath: url)
        }
        
        if let image = NSImage(contentsOf: fileURL) {
            NSPasteboard.general.clearContents()
            NSPasteboard.general.writeObjects([image])
        }
    }
    
    @objc private func handleCopyImagePath(_ sender: NSMenuItem) {
        guard let url = sender.representedObject as? String else { return }
        NSPasteboard.general.clearContents()
        NSPasteboard.general.setString(url, forType: .string)
    }
    
    @objc private func handleShowInFinder(_ sender: NSMenuItem) {
        guard let url = sender.representedObject as? String else { return }
        
        let fileURL: URL
        if url.hasPrefix("file://") {
            fileURL = URL(string: url)!
        } else {
            fileURL = URL(fileURLWithPath: url)
        }
        
        NSWorkspace.shared.activateFileViewerSelecting([fileURL])
    }
    
    @objc private func handleOpenLink(_ sender: NSMenuItem) {
        guard let urlString = sender.representedObject as? String,
              let url = URL(string: urlString) else { return }
        NSWorkspace.shared.open(url)
    }
    
    @objc private func handleCopyLink(_ sender: NSMenuItem) {
        guard let url = sender.representedObject as? String else { return }
        NSPasteboard.general.clearContents()
        NSPasteboard.general.setString(url, forType: .string)
    }
    
    @objc private func handleAddTableRow() {
        // 表格操作需要 Muya 支持
    }
    
    @objc private func handleAddTableColumn() {
        // 表格操作需要 Muya 支持
    }
    
    @objc private func handleDeleteTableRow() {
        // 表格操作需要 Muya 支持
    }
    
    @objc private func handleDeleteTableColumn() {
        // 表格操作需要 Muya 支持
    }
}

#endif
