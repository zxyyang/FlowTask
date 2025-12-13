# Design Document - macOS Window Management Fixes

## Overview

本设计文档旨在修复 FlowTask macOS 应用中的窗口管理、数据同步和功能问题。当前实现存在以下核心问题：

1. **窗口生命周期管理不当** - 关闭主窗口后无法重新打开
2. **数据同步机制存在缺陷** - SharedDataManager 和视图之间存在循环依赖
3. **窗口状态追踪不准确** - WindowOpener 无法可靠地找到和管理现有窗口
4. **事件处理逻辑混乱** - 多个地方处理窗口打开逻辑，导致不一致

本设计将重构窗口管理架构，建立清晰的数据流，并确保所有窗口功能正常工作。

## Architecture

### 核心架构原则

1. **单一数据源** - SharedDataManager 作为唯一的数据真实来源
2. **单向数据流** - 数据从 SharedDataManager 流向视图，视图通过 action 修改数据
3. **明确的窗口管理** - WindowManager 负责所有窗口的创建、显示和隐藏
4. **避免循环依赖** - 使用标志位和延迟更新避免数据同步循环

### 系统组件图

```
┌─────────────────────────────────────────────────────────────┐
│                        Application                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Main Window  │  │Sticky Window │  │Floating Ball │      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
│         │                  │                  │              │
│         └──────────────────┼──────────────────┘              │
│                            │                                 │
│                   ┌────────▼────────┐                        │
│                   │ SharedDataMgr   │                        │
│                   │  - tasks        │                        │
│                   │  - notes        │                        │
│                   └────────┬────────┘                        │
│                            │                                 │
│                   ┌────────▼────────┐                        │
│                   │  Repositories   │                        │
│                   │  - TaskRepo     │                        │
│                   │  - NoteRepo     │                        │
│                   └─────────────────┘                        │
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │WindowManager │  │ AppDelegate  │  │ MenuBar      │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

## Components and Interfaces

### 1. WindowManager (新增)

负责管理所有窗口的生命周期。

```swift
@MainActor
class WindowManager: ObservableObject {
    static let shared = WindowManager()
    
    // 窗口引用
    private(set) var mainWindowController: NSWindowController?
    private(set) var stickyWindow: StickyPanel?
    private(set) var floatingBallWindow: NSWindow?
    
    // 窗口状态
    @Published var isMainWindowVisible: Bool = false
    @Published var isStickyWindowVisible: Bool = false
    @Published var isFloatingBallVisible: Bool = false
    
    // OpenWindowAction 引用
    var openWindowAction: OpenWindowAction?
    
    // 主窗口管理
    func showMainWindow()
    func hideMainWindow()
    func toggleMainWindow()
    func findOrCreateMainWindow() -> NSWindow?
    
    // 贴图窗口管理
    func showStickyWindow()
    func hideStickyWindow()
    func toggleStickyWindow()
    
    // 悬浮球管理
    func showFloatingBall()
    func hideFloatingBall()
    func toggleFloatingBall()
}
```

### 2. SharedDataManager (重构)

简化数据管理，移除循环依赖。

```swift
@MainActor
class SharedDataManager: ObservableObject {
    static let shared = SharedDataManager()
    
    // 数据
    @Published var tasks: [FlowTask] = []
    @Published var notes: [Note] = []
    
    // 仓库
    private var taskRepository: TaskRepository?
    private var noteRepository: NoteRepository?
    
    // 初始化标志
    private var isInitialized = false
    
    // 更新标志（避免循环）
    private var isUpdating = false
    
    // 初始化
    func initialize(taskRepo: TaskRepository, noteRepo: NoteRepository) async
    
    // 任务操作
    func addTask(_ task: FlowTask) async throws
    func updateTask(_ task: FlowTask) async throws
    func deleteTask(_ task: FlowTask) async throws
    func toggleTask(_ task: FlowTask) async throws
    
    // 笔记操作
    func addNote(_ note: Note) async throws
    func updateNote(_ note: Note) async throws
    func deleteNote(_ note: Note) async throws
    
    // 数据加载
    func loadAllData() async throws
}
```

### 3. AppDelegate (重构)

简化职责，专注于应用级事件处理。

```swift
class AppDelegate: NSObject, NSApplicationDelegate {
    var statusItem: NSStatusItem?
    
    func applicationDidFinishLaunching(_ notification: Notification)
    func applicationShouldHandleReopen(_ sender: NSApplication, hasVisibleWindows flag: Bool) -> Bool
    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool
    
    // 菜单栏管理
    private func setupStatusBarItem()
    private func setupStatusBarMenu()
    
    // 事件处理
    @objc func showMainWindow()
    @objc func showFloatingWindow()
    @objc func showStickyWindow()
    @objc func toggleFloatingBall()
}
```

### 4. MacContentView (重构)

移除数据同步逻辑，直接观察 SharedDataManager。

```swift
struct MacContentView: View {
    @Environment(\.modelContext) private var modelContext
    @ObservedObject private var sharedData = SharedDataManager.shared
    @State private var selectedSidebarItem: SidebarItem = .tasks
    
    var body: some View {
        NavigationSplitView {
            // 侧边栏
        } detail: {
            // 详情视图 - 直接使用 sharedData
        }
        .task {
            await setupData()
        }
    }
    
    private func setupData() async {
        // 初始化 SharedDataManager
    }
}
```

### 5. TaskListViewModel (重构)

移除本地任务存储，直接操作 SharedDataManager。

```swift
@MainActor
class TaskListViewModel: ObservableObject {
    @Published var showAddTask = false
    @Published var editingTask: FlowTask?
    
    private var modelContext: ModelContext?
    
    // 直接从 SharedDataManager 获取任务
    var tasks: [FlowTask] {
        SharedDataManager.shared.tasks
    }
    
    func setContext(_ context: ModelContext)
    
    // 任务操作 - 委托给 SharedDataManager
    func createTask(_ task: FlowTask) async
    func updateTask(_ task: FlowTask) async
    func deleteTask(_ task: FlowTask) async
    func toggleComplete(_ task: FlowTask) async
}
```

## Data Models

现有的数据模型保持不变：

- `FlowTask` - 任务实体
- `Subtask` - 子任务实体
- `Note` - 笔记实体
- `FocusSession` - 专注会话实体
- `DailySummary` - 每日总结实体

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Window restoration preserves identity

*For any* main window that exists and is minimized, calling showMainWindow should restore the same window instance rather than creating a new one.

**Validates: Requirements 1.5**

### Property 2: Task addition synchronizes across windows

*For any* task added in the main window, the sticky window should immediately reflect the new task in its task list.

**Validates: Requirements 2.1**

### Property 3: Task completion synchronizes bidirectionally

*For any* task completed in the sticky window, the main window should immediately show the task as completed, and vice versa.

**Validates: Requirements 2.2, 2.3**

### Property 4: Task deletion synchronizes across windows

*For any* task deleted in any window, all other windows should immediately remove that task from their displays.

**Validates: Requirements 2.4, 6.5**

### Property 5: Subtask state synchronizes across windows

*For any* task with subtasks, toggling a subtask's completion status in any window should update the subtask progress in all windows.

**Validates: Requirements 2.5**

### Property 6: Floating ball count reflects pending tasks

*For any* change to the task list (add, complete, delete), the floating ball should display the correct count of pending (incomplete) tasks.

**Validates: Requirements 3.1, 3.2, 3.3**

### Property 7: Data manager notifies all observers

*For any* modification to tasks or notes through SharedDataManager, all registered observers should receive update notifications.

**Validates: Requirements 5.2, 5.3**

### Property 8: Window reopening preserves data state

*For any* data modifications made before closing the main window, reopening the window should display the same data state.

**Validates: Requirements 5.5**

### Property 9: Task edit preserves unmodified fields

*For any* task being edited, canceling the edit should leave the task data unchanged.

**Validates: Requirements 6.3**

### Property 10: Subtask modification updates parent task

*For any* task with subtasks, modifying a subtask's status should update the parent task's updatedAt timestamp and trigger a save.

**Validates: Requirements 6.4**

### Property 11: Note creation appears in all views

*For any* note created in the sticky window, the main window's note list should immediately include the new note.

**Validates: Requirements 7.4**

### Property 12: Note search filters correctly

*For any* search query, the filtered note list should contain only notes whose title or content contains the search text (case-insensitive).

**Validates: Requirements 7.5**

## Error Handling

### Window Management Errors

1. **Window Creation Failure**
   - 场景：无法创建新窗口
   - 处理：记录错误日志，显示用户友好的错误消息
   - 恢复：尝试使用备用窗口创建方法

2. **Window Not Found**
   - 场景：尝试显示不存在的窗口
   - 处理：创建新窗口实例
   - 恢复：正常继续操作

### Data Synchronization Errors

1. **Repository Operation Failure**
   - 场景：数据库操作失败
   - 处理：回滚内存中的更改，显示错误提示
   - 恢复：允许用户重试操作

2. **Circular Update Detection**
   - 场景：检测到循环更新
   - 处理：使用 isUpdating 标志阻止循环
   - 恢复：确保更新完成后重置标志

3. **Data Inconsistency**
   - 场景：不同窗口显示不同的数据
   - 处理：强制从 SharedDataManager 重新加载
   - 恢复：通知用户数据已刷新

## Testing Strategy

### Unit Testing

使用 XCTest 框架进行单元测试：

1. **WindowManager Tests**
   - 测试窗口创建和销毁
   - 测试窗口状态追踪
   - 测试窗口显示/隐藏逻辑

2. **SharedDataManager Tests**
   - 测试数据加载
   - 测试 CRUD 操作
   - 测试观察者通知

3. **ViewModel Tests**
   - 测试任务操作委托
   - 测试状态管理

### Property-Based Testing

使用 Swift Testing 框架进行属性测试：

**配置要求**：
- 每个属性测试至少运行 100 次迭代
- 使用随机生成的任务和笔记数据
- 每个测试必须标注对应的设计文档属性编号

**测试库**：使用 Swift Testing 框架（Xcode 内置）

**标注格式**：
```swift
// Feature: macos-window-fixes, Property 1: Window restoration preserves identity
```

### Integration Testing

1. **Window Interaction Tests**
   - 测试主窗口和贴图窗口之间的交互
   - 测试悬浮球和贴图窗口的交互
   - 测试菜单栏和窗口的交互

2. **Data Flow Tests**
   - 测试数据在不同窗口间的流动
   - 测试数据持久化和恢复
   - 测试并发数据修改

### UI Testing

1. **Window Lifecycle Tests**
   - 测试窗口打开、关闭、最小化、恢复
   - 测试应用启动和退出
   - 测试 Dock 图标点击

2. **User Interaction Tests**
   - 测试任务添加、编辑、删除
   - 测试笔记创建、编辑、删除
   - 测试搜索和过滤功能

## Implementation Notes

### 关键实现细节

1. **避免循环更新**
   ```swift
   private var isUpdating = false
   
   func updateTask(_ task: FlowTask) async throws {
       guard !isUpdating else { return }
       isUpdating = true
       defer { isUpdating = false }
       
       // 执行更新
       tasks = tasks.map { $0.id == task.id ? task : $0 }
       try await taskRepository?.updateTask(task)
   }
   ```

2. **窗口查找逻辑**
   ```swift
   func findMainWindow() -> NSWindow? {
       return NSApp.windows.first { window in
           // 排除 Panel 类型
           guard !(window is NSPanel) else { return false }
           
           // 排除系统窗口
           let className = window.className
           guard !className.contains("StatusBar"),
                 !className.contains("Menu"),
                 !className.contains("Popover") else { return false }
           
           // 排除设置和贴图窗口
           let title = window.title.lowercased()
           guard !title.contains("settings"),
                 !title.contains("设置"),
                 !title.contains("贴图") else { return false }
           
           return window.contentView != nil
       }
   }
   ```

3. **数据同步时机**
   - 使用 `@Published` 属性自动触发 UI 更新
   - 在数据修改后立即调用 `objectWillChange.send()`
   - 避免在 `onChange` 中进行数据修改

4. **窗口状态管理**
   - 使用 `@Published` 属性追踪窗口可见性
   - 在窗口显示/隐藏时更新状态
   - 提供统一的窗口管理接口

### 性能优化

1. **延迟加载** - 窗口内容在首次显示时才加载
2. **批量更新** - 合并多个数据更新为单次通知
3. **弱引用** - 使用弱引用避免循环引用
4. **异步操作** - 数据库操作使用 async/await

### 兼容性考虑

- 最低支持 macOS 13.0
- 使用 SwiftUI 和 AppKit 混合开发
- 确保与现有 iOS 代码共享数据模型
