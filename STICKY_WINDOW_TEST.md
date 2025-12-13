# 桌面贴图窗口功能测试指南

## 测试日期
2024年12月22日

## 功能验证清单

### 1. 菜单栏功能测试

#### 测试步骤：
1. 启动应用
2. 点击菜单栏的 FlowTask 图标（checkmark.circle）
3. 在下拉菜单中找到"显示桌面贴图"选项
4. 点击该选项

**预期结果：**
- ✅ 桌面贴图窗口应该出现在屏幕右上角
- ✅ 窗口显示任务列表和笔记标签

#### 代码实现位置：
- 菜单项定义：`FlowTaskMacApp.swift:419`
- 处理方法：`FlowTaskMacApp.swift:446-450`
- 调用方法：`DesktopStickyWindowManager.showStickyWindow()`

```swift
@objc func showStickyWindow() {
    Task { @MainActor in
        DesktopStickyWindowManager.shared.showStickyWindow()
    }
}
```

---

### 2. 窗口关闭功能测试

#### 测试步骤：
1. 确保桌面贴图窗口已打开
2. 将鼠标悬停在窗口左上角
3. 点击**红色按钮**（关闭按钮）

**预期结果：**
- ✅ 窗口应该隐藏（不是销毁）
- ✅ 窗口对象保持在内存中
- ✅ `isVisible` 状态更新为 `false`

#### 代码实现位置：
- 按钮定义：`DesktopStickyWindow.swift:167-171`
- 处理方法：`StickyWindowViewModel.swift:62-64`
- 窗口管理：`StickyWindowViewModel.swift:111-115`

```swift
// 红色按钮
Button { viewModel.hideWindow() } label: {
    Circle().fill(Color.red).frame(width: 12, height: 12)
}
.buttonStyle(.plain)
.help("关闭贴图")

// hideWindow 实现
func hide() {
    stickyWindow?.orderOut(nil)
    isVisible = false
    viewModel.isWindowVisible = false
}
```

---

### 3. 重新打开窗口测试

#### 测试步骤：
1. 关闭桌面贴图窗口（使用红色按钮）
2. 再次点击菜单栏的"显示桌面贴图"选项
3. 或使用快捷键 ⌘⇧T

**预期结果：**
- ✅ 窗口应该重新出现
- ✅ 窗口内容保持不变（任务列表等）
- ✅ 窗口位置保持在之前的位置

#### 关键代码：
```swift
func showStickyWindow() {
    // 如果窗口不存在或已被释放，重新创建
    if stickyWindow == nil || stickyWindow?.contentView == nil {
        createStickyWindow()
    }
    
    // 显示窗口
    stickyWindow?.makeKeyAndOrderFront(nil)
    isVisible = true
    viewModel.isWindowVisible = true
}
```

---

### 4. 绿色按钮功能测试

#### 测试步骤：
1. 确保桌面贴图窗口已打开
2. 点击窗口左上角的**绿色按钮**

**预期结果：**
- ✅ 主窗口应该打开并显示在前台
- ✅ 桌面贴图窗口保持打开状态

#### 代码实现位置：
- 按钮定义：`DesktopStickyWindow.swift:179-183`
- 处理方法：`StickyWindowViewModel.swift:79-81`

```swift
// 绿色按钮
Button { viewModel.openMainWindow() } label: {
    Circle().fill(Color.green).frame(width: 12, height: 12)
}
.buttonStyle(.plain)
.help("打开主窗口")

// openMainWindow 实现
func openMainWindow() {
    WindowManager.shared.showMainWindow()
}
```

---

### 5. 快捷键测试

#### 测试步骤：
1. 按下 ⌘⇧T（Command + Shift + T）

**预期结果：**
- ✅ 如果窗口隐藏，应该显示窗口
- ✅ 如果窗口显示，应该隐藏窗口
- ✅ 切换状态流畅无延迟

#### 代码实现：
```swift
Button("显示/隐藏桌面贴图") {
    DesktopStickyWindowManager.shared.toggle()
}
.keyboardShortcut("t", modifiers: [.command, .shift])
```

---

## 关键技术实现

### 防止窗口被释放
```swift
// 在 StickyPanel 初始化时设置
self.isReleasedWhenClosed = false

// 在 createStickyWindow 中设置
panel.isReleasedWhenClosed = false
```

### 窗口委托处理
```swift
extension DesktopStickyWindowManager: NSWindowDelegate {
    func windowWillClose(_ notification: Notification) {
        // 窗口关闭时只隐藏，不释放
        isVisible = false
        viewModel.isWindowVisible = false
    }
}
```

### 继承 NSObject
```swift
class DesktopStickyWindowManager: NSObject, ObservableObject {
    private override init() {
        super.init()
        // 确保窗口在应用生命周期内不被释放
    }
}
```

---

## 测试结果记录

### 编译状态
- ✅ **BUILD SUCCEEDED**
- ⚠️ 3 个警告（与 Swift 6 并发相关，不影响功能）

### 功能测试
请按照上述步骤测试并记录结果：

- [ ] 菜单栏"显示桌面贴图"功能
- [ ] 红色按钮关闭窗口功能
- [ ] 关闭后重新打开窗口功能
- [ ] 绿色按钮打开主窗口功能
- [ ] 快捷键 ⌘⇧T 切换功能

---

## 已知问题

无

---

## 相关文件

1. `macOS/Views/StickyWindow/StickyWindowViewModel.swift` - 窗口管理核心逻辑
2. `macOS/Views/StickyWindow/DesktopStickyWindow.swift` - 窗口 UI 实现
3. `macOS/FlowTaskMacApp.swift` - 菜单栏和快捷键配置

---

**注意：** 所有功能已实现并通过编译测试，请运行应用进行实际功能验证。
