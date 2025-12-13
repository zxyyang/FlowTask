# 菜单栏到期提醒功能

## 功能概述

当有任务到期时，菜单栏会显示醒目的"⚠️ 到期提醒！"文字，提醒用户有任务需要处理。只有当用户点击菜单栏查看后，提醒才会消失，恢复正常显示。

## 功能特性

### 1. 持久化提醒
- 当任务到期时，菜单栏立即显示"⚠️ 到期提醒！"
- 提醒会一直显示，不会自动消失
- 即使切换应用或重启，提醒状态会保持

### 2. 一键跳转
- **点击"到期提醒"**：直接打开主窗口并跳转到第一个到期任务的详情
- **点击普通状态**：显示菜单选项
- 自动选中到期任务，方便用户立即处理

### 3. 用户确认机制
- 点击到期提醒后，提醒自动消失
- 菜单栏恢复正常显示模式
- 确保用户看到了到期任务

### 4. 智能检测
- 自动检测新到期的任务
- 避免重复提醒已经查看过的到期任务
- 记录上次检查时间，只对新到期的任务发出提醒

## 实现细节

### 状态管理
```swift
@AppStorage("hasUnreadOverdueTasks") private var hasUnreadOverdueTasks = false
```
使用 `@AppStorage` 持久化存储未读状态，确保应用重启后状态不丢失。

### 到期任务检测
```swift
private func getOverdueTasks(from tasks: [FlowTask]) -> [FlowTask] {
    let now = Date()
    return tasks.filter { task in
        guard !task.isCompleted, let dueDate = task.dueDate else { return false }
        return dueDate < now
    }
}
```

### 新到期任务判断
- 记录上次检查时间 `lastOverdueCheckTime`
- 只有在上次检查后新到期的任务才会触发提醒
- 避免应用启动时对已经到期的旧任务发出提醒

### 用户确认处理
```swift
extension AppDelegate: NSMenuDelegate {
    func menuWillOpen(_ menu: NSMenu) {
        // 用户打开菜单时，清除"到期提醒"标记
        if hasUnreadOverdueTasks {
            hasUnreadOverdueTasks = false
            Task { @MainActor in
                updateStatusBarTitle()
            }
        }
    }
}
```

## 显示逻辑

### 优先级
1. **最高优先级**：到期提醒（如果有未读的到期任务）
2. **正常显示**：根据用户设置的显示模式显示内容

### 显示流程
```
检查到期任务
    ↓
有到期 && 未读？
    ↓ 是
显示"⚠️ 到期提醒！"
    ↓ 否
显示正常内容
```

## 用户体验

### 场景 1：任务刚到期
1. 任务到期时间到达
2. 菜单栏立即显示"⚠️ 到期提醒！"
3. 用户看到醒目的提醒
4. **用户点击"到期提醒"**
5. 主窗口自动打开
6. 自动切换到"今日"视图
7. 自动选中第一个到期任务
8. 显示任务详情，用户可以立即处理
9. 提醒消失，恢复正常显示

### 场景 2：多个任务到期
1. 有多个任务到期
2. 菜单栏显示"⚠️ 到期提醒！"
3. 用户点击后跳转到第一个到期任务
4. 用户处理完后，可以在任务列表中看到其他到期任务

### 场景 3：应用重启
1. 应用关闭前有未读的到期提醒
2. 重启应用
3. 菜单栏继续显示"⚠️ 到期提醒！"
4. 用户点击后跳转到到期任务

### 场景 4：正常使用
1. 没有到期任务时
2. 点击菜单栏图标
3. 显示正常的菜单选项

## 技术要点

### 1. 状态持久化
使用 `@AppStorage` 确保状态在应用重启后保持。

### 2. 时间戳记录
记录上次检查时间，用于判断是否有新的到期任务。

### 3. 自定义点击行为
```swift
@objc private func statusBarButtonClicked(_ sender: NSStatusBarButton) {
    // 如果有未读的到期提醒，打开主窗口并跳转
    if hasUnreadOverdueTasks {
        Task { @MainActor in
            openMainWindowAndShowOverdueTasks()
        }
        return
    }
    
    // 否则显示菜单
    statusItem?.menu?.popUp(...)
}
```

### 4. 通知机制
使用 `NotificationCenter` 在不同组件间传递消息：
- `showTaskDetail`：从 AppDelegate 通知主窗口显示任务
- `selectTask`：从主窗口通知 MacTodayView 选中任务

### 5. 延迟执行
使用 `DispatchQueue.main.asyncAfter` 确保窗口打开后再发送通知。

### 6. 主线程更新
所有 UI 更新都在主线程执行，确保界面响应流畅。

## 配置选项

该功能无需配置，自动启用。只要有任务到期，就会显示提醒。

## 注意事项

1. **点击行为**：点击"到期提醒"会直接跳转，不显示菜单
2. **只跳转第一个**：如果有多个到期任务，只跳转到第一个
3. **状态持久化**：应用重启后提醒状态保持
4. **优先级最高**：到期提醒会覆盖所有其他显示模式
5. **自动清除**：点击跳转后提醒自动消失

## 相关文件

- `macOS/FlowTaskMacApp.swift` - AppDelegate 实现
  - 到期任务检测
  - 菜单栏标题更新
  - 点击行为处理
  - 跳转逻辑实现
  - MainContentView 通知监听
  - MacTodayView 任务选择

- `macOS/Views/Settings/SettingsManager.swift` - 通知名称定义
  - `showTaskDetail` 通知
  - `selectTask` 通知

## 未来改进

- [ ] 显示到期任务数量（例如："⚠️ 3个任务到期！"）
- [ ] 支持右键菜单显示所有到期任务
- [ ] 支持不同级别的提醒（紧急、重要等）
- [ ] 添加快捷操作（直接从菜单完成任务）
- [ ] 自定义提醒文字和图标
- [ ] 支持声音提醒
- [ ] 支持跳转到所有任务视图而不仅是今日视图
