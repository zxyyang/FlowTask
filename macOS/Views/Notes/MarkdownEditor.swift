import SwiftUI
import AppKit
import WebKit

#if os(macOS)

// MARK: - Markdown 编辑器（WYSIWYG 模式）
// Requirements: 18.1, 18.2 - 内容持久化集成

struct MarkdownEditorView: View {
    @Binding var content: String
    
    /// Callback when content changes (for auto-save)
    var onContentChange: ((String) -> Void)?
    
    /// Callback when an error occurs
    var onError: ((String) -> Void)?
    
    /// Whether the editor is ready
    @State private var isEditorReady = false
    
    /// Current error message to display
    @State private var errorMessage: String?
    
    /// Environment color scheme for theme synchronization
    @Environment(\.colorScheme) private var colorScheme
    
    /// Settings manager for editor type selection
    @ObservedObject private var settings = SettingsManager.shared
    
    var body: some View {
        // 直接使用 Muya 编辑器
        MuyaEditorView(
            content: $content,
            onContentChange: { newContent in
                onContentChange?(newContent)
            },
            onError: { error in
                errorMessage = error
                onError?(error)
            },
            onReady: {
                isEditorReady = true
                errorMessage = nil
            },
            theme: settings.getCurrentMuyaTheme(),
            mode: settings.muyaMode,
            showToolbar: settings.muyaToolbarVisible,
            showStatusBar: settings.muyaStatusBarVisible
        )
    }
}

// MARK: - Link Insertion Dialog

/// Dialog for inserting links
/// Requirements: 6.5, 13.3
struct LinkInsertionDialog: View {
    @Binding var url: String
    @Binding var text: String
    var onInsert: () -> Void
    var onCancel: () -> Void
    
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        VStack(spacing: 16) {
            Text("插入链接")
                .font(.headline)
            
            VStack(alignment: .leading, spacing: 8) {
                Text("URL:")
                    .font(.caption)
                    .foregroundColor(.secondary)
                TextField("https://example.com", text: $url)
                    .textFieldStyle(.roundedBorder)
                
                Text("显示文本 (可选):")
                    .font(.caption)
                    .foregroundColor(.secondary)
                TextField("链接文本", text: $text)
                    .textFieldStyle(.roundedBorder)
            }
            
            HStack {
                Button("取消") {
                    onCancel()
                    dismiss()
                }
                .keyboardShortcut(.cancelAction)
                
                Spacer()
                
                Button("插入") {
                    onInsert()
                    dismiss()
                }
                .keyboardShortcut(.defaultAction)
                .disabled(url.isEmpty)
            }
        }
        .padding()
        .frame(width: 350)
    }
}

// MARK: - Keyboard Shortcut Modifier

/// Keyboard shortcut types for the editor
/// Requirements: 13.1-13.7
enum EditorShortcut {
    case bold       // Cmd+B
    case italic     // Cmd+I
    case link       // Cmd+K
    case indent     // Cmd+]
    case outdent    // Cmd+[
    
    var key: KeyEquivalent {
        switch self {
        case .bold: return "b"
        case .italic: return "i"
        case .link: return "k"
        case .indent: return "]"
        case .outdent: return "["
        }
    }
    
    var modifiers: EventModifiers {
        return .command
    }
}

extension View {
    /// Adds a keyboard shortcut for editor actions
    /// Requirements: 13.1-13.7
    func keyboardShortcut(for shortcut: EditorShortcut, action: @escaping () -> Void) -> some View {
        self.background(
            Button("") {
                action()
            }
            .keyboardShortcut(shortcut.key, modifiers: shortcut.modifiers)
            .opacity(0)
        )
    }
}

#endif
