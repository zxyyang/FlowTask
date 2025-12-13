# 加载动画功能

## 概述
为应用的主要列表视图和视图切换添加了优雅的加载动画效果，提升用户体验。

## 实现的动画效果

### 1. 任务列表视图 (MacTaskListView)
- **位置**: `macOS/Views/TaskList/MacTaskListView.swift`
- **动画类型**: 淡入 + 向上滑动
- **特点**:
  - 每个任务项依次出现，带有 0.03 秒的延迟
  - 使用弹簧动画 (response: 0.5, dampingFraction: 0.8)
  - 待完成和已完成任务分别计算延迟时间

### 2. 今日任务视图 (MacTodayView)
- **位置**: `macOS/FlowTaskMacApp.swift`
- **动画类型**: 淡入 + 向上滑动
- **特点**:
  - 与任务列表相同的动画效果
  - 在视图出现时自动触发
  - 支持待完成和已完成任务的分组动画

### 3. 笔记列表视图 (MacNotesView)
- **位置**: `macOS/Views/Notes/MacNotesView.swift`
- **动画类型**: 淡入 + 向上滑动
- **特点**:
  - 笔记文件依次出现
  - 每个文件延迟 0.03 秒
  - 平滑的弹簧动画效果

### 4. 桌面贴图窗口 (DesktopStickyWindow)
- **位置**: `macOS/Views/StickyWindow/DesktopStickyWindow.swift`
- **动画类型**: 淡入 + 向上滑动
- **特点**:
  - 任务项依次出现，延迟 0.04 秒
  - **切换视图模式（今日/全部）时重新触发动画** ✨
  - 更短的滑动距离 (15px) 适配小窗口
  - 使用 `DispatchQueue` 延迟触发确保动画流畅

### 5. 设置页面标签切换 (SettingsView) ✨ 新增
- **位置**: `macOS/Views/Settings/SettingsView.swift`
- **动画类型**: 淡入 + 向上滑动
- **特点**:
  - 切换设置分类（外观/任务/日历/桌面贴图/关于）时触发动画
  - 内容区域平滑淡入并向上滑动
  - 使用弹簧动画提供自然的过渡效果
  - 首次打开设置页面也有加载动画

## 技术实现

### 基础动画参数
```swift
@State private var animateList = false

// 在 onAppear 中触发
withAnimation(.spring(response: 0.6, dampingFraction: 0.8).delay(0.1)) {
    animateList = true
}
```

### 列表项动画
```swift
ForEach(Array(tasks.enumerated()), id: \.element.id) { index, task in
    taskRow(for: task)
        .opacity(animateList ? 1 : 0)
        .offset(y: animateList ? 0 : 20)
        .animation(
            .spring(response: 0.5, dampingFraction: 0.8)
            .delay(Double(index) * 0.03), 
            value: animateList
        )
}
```

### 视图切换动画（桌面贴图）
```swift
Button {
    // 重置动画状态
    animateList = false
    withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
        viewMode = mode
    }
    // 延迟触发列表动画
    DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
        withAnimation(.spring(response: 0.5, dampingFraction: 0.8)) {
            animateList = true
        }
    }
}
```

### 设置页面切换动画
```swift
Button {
    // 切换分类时重新触发动画
    animateContent = false
    withAnimation(.easeInOut(duration: 0.15)) {
        selectedCategory = category
    }
    withAnimation(.spring(response: 0.5, dampingFraction: 0.8).delay(0.1)) {
        animateContent = true
    }
}
```

## 动画时序

1. **初始延迟**: 0.1 秒（视图出现后）
2. **项目间隔**: 0.03-0.04 秒
3. **动画时长**: 约 0.5 秒（弹簧动画自然完成）
4. **切换延迟**: 0.1 秒（确保视图切换完成）
5. **总时长**: 取决于列表项数量

## 用户体验

### 优点
- ✅ 视觉反馈流畅自然
- ✅ 避免内容突然出现的生硬感
- ✅ 增强应用的精致感
- ✅ 不影响性能（轻量级动画）
- ✅ 视图切换时提供连贯的过渡效果
- ✅ 设置页面切换更加优雅

### 注意事项
- 动画仅在视图首次出现时触发
- 桌面贴图切换视图模式时会重新触发动画
- 设置页面切换标签时会重新触发动画
- 使用 `Array.enumerated()` 确保动画顺序稳定
- 使用 `DispatchQueue.main.asyncAfter` 确保切换动画的时序正确

## 动画触发场景

### 自动触发
1. 打开任务列表页面
2. 打开今日任务页面
3. 打开笔记列表页面
4. 打开桌面贴图窗口
5. 打开设置页面

### 手动触发
1. 桌面贴图切换"今日/全部"视图
2. 设置页面切换标签（外观/任务/日历/桌面贴图/关于）

## 未来优化方向

1. **可配置性**: 允许用户在设置中关闭动画
2. **性能优化**: 对于超长列表（>100项）可以考虑只动画前 N 项
3. **动画变体**: 提供不同的动画风格选择
4. **减弱动画**: 为辅助功能用户提供减弱动画选项
5. **更多场景**: 为其他视图切换添加动画效果

## 相关文件

- `macOS/Views/TaskList/MacTaskListView.swift` - 任务列表
- `macOS/FlowTaskMacApp.swift` - 今日视图
- `macOS/Views/Notes/MacNotesView.swift` - 笔记列表
- `macOS/Views/StickyWindow/DesktopStickyWindow.swift` - 桌面贴图（含视图切换）
- `macOS/Views/Settings/SettingsView.swift` - 设置页面（含标签切换）

## 测试建议

1. 打开任务列表，观察任务依次出现的效果
2. 切换到今日视图，检查动画是否流畅
3. 打开笔记列表，确认文件列表动画正常
4. 打开桌面贴图，测试今日/全部视图切换时的动画 ✨
5. 打开设置页面，测试各个标签切换时的动画效果 ✨
6. 在不同数量的列表项下测试性能
7. 快速切换视图，确认动画不会重叠或卡顿

---

**实现日期**: 2026-01-07
**版本**: v1.1
**更新内容**: 
- 新增桌面贴图视图切换动画
- 新增设置页面标签切换动画
