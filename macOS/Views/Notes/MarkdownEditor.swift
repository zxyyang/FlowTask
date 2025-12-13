import SwiftUI
import AppKit

#if os(macOS)

// MARK: - Markdown 编辑器（编辑/预览分离模式）

struct MarkdownEditorView: View {
    @Binding var content: String
    @State private var isPreviewMode = false
    
    var body: some View {
        VStack(spacing: 0) {
            // 工具栏
            editorToolbar
            
            Divider()
            
            // 编辑器或预览
            if isPreviewMode {
                MarkdownPreviewView(content: content)
            } else {
                MarkdownTextEditor(content: $content)
            }
        }
    }
    
    private var editorToolbar: some View {
        HStack {
            Spacer()
            
            // 编辑/预览切换
            Picker("", selection: $isPreviewMode) {
                Image(systemName: "pencil")
                    .tag(false)
                Image(systemName: "eye")
                    .tag(true)
            }
            .pickerStyle(.segmented)
            .frame(width: 80)
            .help(isPreviewMode ? "预览模式" : "编辑模式")
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 6)
        .background(Color(.windowBackgroundColor))
    }
}

// MARK: - 纯文本编辑器

struct MarkdownTextEditor: NSViewRepresentable {
    @Binding var content: String
    
    func makeNSView(context: Context) -> NSScrollView {
        let scrollView = NSScrollView()
        scrollView.hasVerticalScroller = true
        scrollView.hasHorizontalScroller = false
        scrollView.autohidesScrollers = true
        scrollView.borderType = .noBorder
        
        let textView = NSTextView()
        textView.delegate = context.coordinator
        textView.isEditable = true
        textView.isSelectable = true
        textView.allowsUndo = true
        textView.isRichText = false
        textView.usesFontPanel = false
        textView.font = NSFont.monospacedSystemFont(ofSize: 14, weight: .regular)
        textView.textColor = NSColor.textColor
        textView.backgroundColor = editorBackgroundColor
        textView.textContainerInset = NSSize(width: 16, height: 16)
        textView.isAutomaticQuoteSubstitutionEnabled = false
        textView.isAutomaticDashSubstitutionEnabled = false
        textView.isAutomaticTextReplacementEnabled = false
        textView.isAutomaticSpellingCorrectionEnabled = false
        
        textView.autoresizingMask = [.width]
        textView.isVerticallyResizable = true
        textView.isHorizontallyResizable = false
        textView.textContainer?.widthTracksTextView = true
        textView.textContainer?.containerSize = NSSize(width: CGFloat.greatestFiniteMagnitude, height: CGFloat.greatestFiniteMagnitude)
        
        scrollView.documentView = textView
        scrollView.backgroundColor = editorBackgroundColor
        
        context.coordinator.textView = textView
        textView.string = content
        
        return scrollView
    }
    
    func updateNSView(_ scrollView: NSScrollView, context: Context) {
        guard let textView = scrollView.documentView as? NSTextView else { return }
        
        if !context.coordinator.isEditing && textView.string != content {
            let selectedRange = textView.selectedRange()
            textView.string = content
            let newLocation = min(selectedRange.location, textView.string.count)
            textView.setSelectedRange(NSRange(location: newLocation, length: 0))
        }
    }
    
    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }
    
    private var editorBackgroundColor: NSColor {
        let isDark = NSApp.effectiveAppearance.bestMatch(from: [.darkAqua, .aqua]) == .darkAqua
        return isDark ? NSColor(red: 0x37/255.0, green: 0x3B/255.0, blue: 0x40/255.0, alpha: 1.0) : NSColor.textBackgroundColor
    }
    
    class Coordinator: NSObject, NSTextViewDelegate {
        var parent: MarkdownTextEditor
        weak var textView: NSTextView?
        var isEditing = false
        
        init(_ parent: MarkdownTextEditor) {
            self.parent = parent
        }
        
        func textDidChange(_ notification: Notification) {
            guard let textView = notification.object as? NSTextView else { return }
            isEditing = true
            parent.content = textView.string
            isEditing = false
        }
    }
}

// MARK: - Markdown 预览（使用系统 AttributedString）

struct MarkdownPreviewView: View {
    let content: String
    
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                if let attributedString = try? AttributedString(markdown: content, options: markdownOptions) {
                    Text(attributedString)
                        .textSelection(.enabled)
                        .font(.system(size: 15))
                } else {
                    Text(content)
                        .textSelection(.enabled)
                        .font(.system(size: 15))
                }
            }
            .padding(20)
            .frame(maxWidth: .infinity, alignment: .leading)
        }
        .background(backgroundColor)
    }
    
    private var markdownOptions: AttributedString.MarkdownParsingOptions {
        var options = AttributedString.MarkdownParsingOptions()
        options.interpretedSyntax = .inlineOnlyPreservingWhitespace
        return options
    }
    
    private var backgroundColor: Color {
        let isDark = NSApp.effectiveAppearance.bestMatch(from: [.darkAqua, .aqua]) == .darkAqua
        return isDark ? Color(nsColor: NSColor(red: 0x37/255.0, green: 0x3B/255.0, blue: 0x40/255.0, alpha: 1.0)) : Color(nsColor: .textBackgroundColor)
    }
}

#endif
