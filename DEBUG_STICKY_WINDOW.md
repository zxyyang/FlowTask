# 桌面贴图窗口调试指南

## 问题
桌面贴图窗口关闭后无法重新打开

## 调试步骤

### 1. 运行应用并查看控制台日志

在 Xcode 中运行应用：
1. 打开 Xcode
2. 选择 Product > Run (或按 ⌘R)
3. 打开 Console 面板 (View > Debug Area > Show Debug Area)

### 2. 测试打开窗口

点击菜单栏的 FlowTask 图标，选择"显示桌面贴图"

**查看控制台输出，应该看到：**
```
[StickyWindow] showStickyWindow() 被调用
[StickyWindow] 当前 stickyWindow 是否为 nil: true/false
[StickyWindow] 当前 contentView 是否为 nil: true/false
[StickyWindow] 需要创建新窗口 (或 使用现有窗口)
[StickyWindow] createStickyWindow() 开始
[StickyWindow] HostingView 已创建
[StickyWindow] StickyPanel 已创建
[StickyWindow] 窗口位置已设置: (x, y)
[StickyWindow] createStickyWindow() 完成
[StickyWindow] panel.isVisible: true/false
[StickyWindow] 激活应用...
[StickyWindow] 准备显示窗口...
[StickyWindow] makeKeyAndOrderFront 已调用
[StickyWindow] 窗口是否可见: true/false
[StickyWindow] 窗口 level: 数字
[StickyWindow] 窗口 frame: (x, y, width, height)
[StickyWindow] 状态已更新 - isVisible: true
```

### 3. 关闭窗口测试

点击桌面贴图窗口左上角的红色按钮

**查看控制台输出：**
```
[StickyWindow] hide() 被调用
[StickyWindow] 窗口已隐藏 - isVisible: false
```

### 4. 重新打开窗口测试

再次点击菜单栏"显示桌面贴图"

**查看控制台输出：**
```
[StickyWindow] showStickyWindow() 被调用
[StickyWindow] 当前 stickyWindow 是否为 nil: false
[StickyWindow] 当前 contentView 是否为 nil: false
[StickyWindow] 使用现有窗口
[StickyWindow] 激活应用...
[StickyWindow] 准备显示窗口...
[StickyWindow] makeKeyAndOrderFront 已调用
[StickyWindow] 窗口是否可见: true
[StickyWindow] 状态已更新 - isVisible: true
```

## 可能的问题和解决方案

### 问题 1: 窗口创建失败
**症状：** 看到 "[StickyWindow] 错误：窗口创建失败！"

**解决方案：**
- 检查 `createStickyWindow()` 是否正常执行
- 检查是否有异常抛出

### 问题 2: 窗口创建成功但不可见
**症状：** 
- `panel.isVisible: false`
- `窗口是否可见: false`

**可能原因：**
1. 窗口被其他窗口遮挡
2. 窗口位置在屏幕外
3. 窗口 level 设置不正确
4. 应用未激活

**解决方案：**
已在代码中添加：
- `NSApp.activate(ignoringOtherApps: true)` - 强制激活应用
- `window.orderFrontRegardless()` - 强制将窗口置于前面
- 详细的日志输出窗口位置和 level

### 问题 3: 窗口被释放
**症状：** 
- 第二次打开时 `stickyWindow 是否为 nil: true`

**解决方案：**
已设置 `isReleasedWhenClosed = false`

## 当前代码改进

### 1. 添加了详细日志
所有关键步骤都有日志输出，方便追踪问题

### 2. 强制激活应用
```swift
NSApp.activate(ignoringOtherApps: true)
```

### 3. 强制显示窗口
```swift
window.orderFrontRegardless()
window.makeKeyAndOrderFront(nil)
```

### 4. 添加了错误检查
```swift
guard let window = stickyWindow else {
    print("[StickyWindow] 错误：窗口创建失败！")
    return
}
```

## 下一步

请运行应用并执行以下操作：

1. ✅ 打开桌面贴图窗口
2. ✅ 点击红色按钮关闭
3. ✅ 再次打开桌面贴图窗口
4. 📋 复制控制台的所有 `[StickyWindow]` 日志

如果窗口仍然无法打开，请提供控制台日志，我会根据日志进一步诊断问题。

## 快速测试命令

在终端运行应用并查看日志：
```bash
cd /Users/flipos/OtherProject/FlowTask
open -a /Users/flipos/Library/Developer/Xcode/DerivedData/FlowTask-*/Build/Products/Debug/FlowTask.app
```

然后在终端查看日志：
```bash
log stream --predicate 'process == "FlowTask"' --level debug | grep StickyWindow
```
