import SwiftUI

#if os(macOS)

// MARK: - MuyaEditorView

/// Muya 编辑器组合视图
/// 组合 MuyaWebView、工具栏和状态栏
/// 需求: 19.4
struct MuyaEditorView: View {
    /// Markdown 内容绑定
    @Binding var content: String
    
    /// 内容变化回调
    var onContentChange: ((String) -> Void)?
    
    /// 错误回调
    var onError: ((String) -> Void)?
    
    /// 编辑器就绪回调
    var onReady: (() -> Void)?
    
    /// 大纲变化回调
    var onOutlineChange: (([OutlineItem]) -> Void)?
    
    /// 主题
    var theme: MuyaTheme = .light
    
    /// 编辑模式
    var mode: MuyaMode = .wysiwyg
    
    /// 是否显示工具栏
    var showToolbar: Bool = true
    
    /// 是否显示状态栏
    var showStatusBar: Bool = true
    
    /// 是否显示大纲面板
    var showOutline: Bool = false
    
    /// 外部传入的 bridge（可选）
    var externalBridge: MuyaBridge?
    
    // MARK: - State
    
    @State private var internalBridge: MuyaBridge = MuyaBridge()
    @State private var counterInfo: CounterInfo = CounterInfo(length: 0, type: "text")
    @State private var historyState: HistoryState = .initial
    @State private var outlineItems: [OutlineItem] = []
    @State private var isEditorReady: Bool = false
    
    /// 实际使用的 bridge
    private var bridge: MuyaBridge {
        externalBridge ?? internalBridge
    }
    
    var body: some View {
        VStack(spacing: 0) {
            // 工具栏
            if showToolbar {
                MuyaToolbar(bridge: bridge)
                    .opacity(isEditorReady ? 1.0 : 0.5)
                Divider()
            }
            
            // 主内容区
            HStack(spacing: 0) {
                // 编辑器
                MuyaWebView(
                    content: $content,
                    onContentChange: { newContent in
                        onContentChange?(newContent)
                    },
                    onError: onError,
                    onReady: {
                        isEditorReady = true
                        onReady?()
                    },
                    onOutlineChange: { items in
                        outlineItems = items
                        onOutlineChange?(items)
                    },
                    onCounterChange: { counter in
                        counterInfo = counter
                    },
                    onHistoryStateChange: { state in
                        historyState = state
                        NotificationCenter.default.post(
                            name: .muyaHistoryStateChanged,
                            object: state
                        )
                    },
                    theme: theme,
                    mode: mode,
                    externalBridge: bridge
                )
                
                // 大纲面板
                if showOutline && !outlineItems.isEmpty {
                    Divider()
                    OutlinePanel(items: outlineItems, bridge: bridge)
                        .frame(width: 200)
                }
            }
            
            // 状态栏
            if showStatusBar {
                Divider()
                StatusBar(counterInfo: counterInfo, historyState: historyState)
            }
        }
    }
}

// MARK: - OutlinePanel

/// 大纲面板
/// 需求: 18.2, 18.3
struct OutlinePanel: View {
    let items: [OutlineItem]
    let bridge: MuyaBridge
    
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            // 标题
            HStack {
                Text("大纲")
                    .font(.headline)
                    .foregroundColor(.secondary)
                Spacer()
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 8)
            .background(Color(NSColor.controlBackgroundColor))
            
            Divider()
            
            // 大纲列表
            ScrollView {
                LazyVStack(alignment: .leading, spacing: 2) {
                    ForEach(items, id: \.id) { item in
                        OutlineItemRow(item: item) {
                            bridge.scrollToHeading(item.id)
                        }
                    }
                }
                .padding(.vertical, 4)
            }
        }
        .background(Color(NSColor.controlBackgroundColor).opacity(0.5))
    }
}

// MARK: - OutlineItemRow

/// 大纲项行
struct OutlineItemRow: View {
    let item: OutlineItem
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            HStack {
                Text(item.text)
                    .font(.system(size: fontSize))
                    .lineLimit(1)
                    .truncationMode(.tail)
                Spacer()
            }
            .padding(.leading, CGFloat(item.level - 1) * 12 + 12)
            .padding(.trailing, 8)
            .padding(.vertical, 4)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .background(Color.clear)
        .onHover { hovering in
            if hovering {
                NSCursor.pointingHand.push()
            } else {
                NSCursor.pop()
            }
        }
    }
    
    private var fontSize: CGFloat {
        switch item.level {
        case 1: return 14
        case 2: return 13
        case 3: return 12
        default: return 11
        }
    }
}

// MARK: - StatusBar

/// 状态栏
/// 需求: 19.4
struct StatusBar: View {
    let counterInfo: CounterInfo
    let historyState: HistoryState
    
    var body: some View {
        HStack(spacing: 16) {
            // 字数统计
            HStack(spacing: 4) {
                Image(systemName: "character.cursor.ibeam")
                    .font(.system(size: 10))
                Text("\(counterInfo.wordCount) 词")
                    .font(.system(size: 11))
            }
            .foregroundColor(.secondary)
            
            HStack(spacing: 4) {
                Image(systemName: "textformat.abc")
                    .font(.system(size: 10))
                Text("\(counterInfo.characterCount) 字符")
                    .font(.system(size: 11))
            }
            .foregroundColor(.secondary)
            
            if counterInfo.paragraphCount > 0 {
                HStack(spacing: 4) {
                    Image(systemName: "text.alignleft")
                        .font(.system(size: 10))
                    Text("\(counterInfo.paragraphCount) 段落")
                        .font(.system(size: 11))
                }
                .foregroundColor(.secondary)
            }
            
            Spacer()
            
            // 历史状态指示
            HStack(spacing: 8) {
                Image(systemName: "arrow.uturn.backward")
                    .font(.system(size: 10))
                    .foregroundColor(historyState.canUndo ? .secondary : .secondary.opacity(0.3))
                
                Image(systemName: "arrow.uturn.forward")
                    .font(.system(size: 10))
                    .foregroundColor(historyState.canRedo ? .secondary : .secondary.opacity(0.3))
            }
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 6)
        .background(Color(NSColor.controlBackgroundColor))
    }
}

// MARK: - Preview

#if DEBUG
struct MuyaEditorView_Previews: PreviewProvider {
    static var previews: some View {
        MuyaEditorView(
            content: .constant("# 标题\n\n这是一段测试文本。"),
            theme: .light,
            mode: .wysiwyg
        )
        .frame(width: 800, height: 600)
    }
}
#endif

#endif
