import SwiftUI
import Combine

// MARK: - Floating Window Mode
enum FloatingWindowMode: String, CaseIterable {
    case task = "任务"
    case note = "笔记"
}

// MARK: - Floating Window View
/// macOS 悬浮窗口视图
struct FloatingWindowView: View {
    @State private var mode: FloatingWindowMode = .task
    @State private var inputText: String = ""
    @State private var draftText: String = ""
    @SwiftUI.FocusState private var isInputFocused: Bool
    
    var onCreateTask: (String) -> Void
    var onCreateNote: (String) -> Void
    var onDismiss: () -> Void
    
    var body: some View {
        VStack(spacing: 0) {
            // 模式切换
            HStack(spacing: 0) {
                ForEach(FloatingWindowMode.allCases, id: \.self) { tabMode in
                    Button {
                        // 保存当前草稿
                        if mode == .task {
                            draftText = inputText
                        }
                        mode = tabMode
                        // 恢复草稿
                        if tabMode == .task {
                            inputText = draftText
                        } else {
                            inputText = ""
                        }
                    } label: {
                        Text(tabMode.rawValue)
                            .font(.subheadline)
                            .fontWeight(mode == tabMode ? .semibold : .regular)
                            .foregroundColor(mode == tabMode ? .primary : .secondary)
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 8)
                            .background(
                                mode == tabMode ?
                                Color.accentColor.opacity(0.1) :
                                Color.clear
                            )
                    }
                    .buttonStyle(.plain)
                }
            }
            .background(Color(.windowBackgroundColor))
            
            Divider()
            
            // 输入区域
            VStack(spacing: 12) {
                HStack {
                    Image(systemName: mode == .task ? "checkmark.circle" : "note.text")
                        .foregroundColor(.secondary)
                    
                    TextField(
                        mode == .task ? "添加任务..." : "记录笔记...",
                        text: $inputText,
                        axis: .vertical
                    )
                    .textFieldStyle(.plain)
                    .focused($isInputFocused)
                    .onSubmit {
                        submitContent()
                    }
                }
                .padding(12)
                .background(
                    RoundedRectangle(cornerRadius: 8)
                        .fill(Color(.textBackgroundColor))
                )
                
                // 快捷操作
                HStack {
                    Text("⌘ + Enter 提交")
                        .font(.caption)
                        .foregroundColor(.secondary)
                    
                    Spacer()
                    
                    Button("取消") {
                        // 保存草稿
                        if mode == .task {
                            draftText = inputText
                        }
                        onDismiss()
                    }
                    .buttonStyle(.plain)
                    .foregroundColor(.secondary)
                    
                    Button("添加") {
                        submitContent()
                    }
                    .buttonStyle(.borderedProminent)
                    .disabled(inputText.isBlank)
                }
            }
            .padding(12)
        }
        .frame(width: 320)
        .background(Color(.windowBackgroundColor))
        .cornerRadius(12)
        .shadow(color: .black.opacity(0.2), radius: 20, y: 10)
        .onAppear {
            isInputFocused = true
            // 恢复草稿
            if mode == .task {
                inputText = draftText
            }
        }
    }
    
    private func submitContent() {
        guard !inputText.isBlank else { return }
        
        let content = inputText.trimmed
        
        switch mode {
        case .task:
            onCreateTask(content)
            draftText = "" // 清除草稿
        case .note:
            onCreateNote(content)
        }
        
        inputText = ""
    }
}

// MARK: - Floating Window Controller
/// 悬浮窗口控制器协议
protocol FloatingWindowControllerProtocol {
    var isVisible: Bool { get }
    var currentMode: FloatingWindowMode { get set }
    
    func show()
    func hide()
    func toggle()
}

#if os(macOS)
import AppKit

// MARK: - macOS Floating Panel
/// macOS 悬浮面板实现
class FloatingPanel: NSPanel {
    init(contentRect: NSRect) {
        super.init(
            contentRect: contentRect,
            styleMask: [.nonactivatingPanel, .titled, .closable, .fullSizeContentView],
            backing: .buffered,
            defer: false
        )
        
        // 配置面板属性
        self.isFloatingPanel = true
        self.level = .floating
        self.collectionBehavior = [.canJoinAllSpaces, .fullScreenAuxiliary]
        self.titleVisibility = .hidden
        self.titlebarAppearsTransparent = true
        self.isMovableByWindowBackground = true
        self.isReleasedWhenClosed = false
        self.backgroundColor = .clear
    }
}

// MARK: - Floating Window Manager
@MainActor
class FloatingWindowManager: ObservableObject, FloatingWindowControllerProtocol {
    static let shared = FloatingWindowManager()
    
    @Published var isVisible: Bool = false
    @Published var currentMode: FloatingWindowMode = .task
    
    private var panel: FloatingPanel?
    private var draftContent: String = ""
    
    private init() {}
    
    func show() {
        if panel == nil {
            createPanel()
        }
        
        panel?.makeKeyAndOrderFront(nil)
        panel?.center()
        isVisible = true
    }
    
    func hide() {
        panel?.orderOut(nil)
        isVisible = false
    }
    
    func toggle() {
        if isVisible {
            hide()
        } else {
            show()
        }
    }
    
    private func createPanel() {
        let contentRect = NSRect(x: 0, y: 0, width: 320, height: 200)
        panel = FloatingPanel(contentRect: contentRect)
        
        let hostingView = NSHostingView(
            rootView: FloatingWindowView(
                onCreateTask: { [weak self] title in
                    self?.createTask(title: title)
                },
                onCreateNote: { [weak self] content in
                    self?.createNote(content: content)
                },
                onDismiss: { [weak self] in
                    self?.hide()
                }
            )
        )
        
        panel?.contentView = hostingView
    }
    
    private func createTask(title: String) {
        SharedDataManager.shared.addTask(title: title)
        hide()
    }
    
    private func createNote(content: String) {
        SharedDataManager.shared.addNote(title: "", content: content)
        hide()
    }
}
#endif

// MARK: - Preview
#Preview {
    FloatingWindowView(
        onCreateTask: { _ in },
        onCreateNote: { _ in },
        onDismiss: {}
    )
    .frame(width: 320, height: 200)
}
