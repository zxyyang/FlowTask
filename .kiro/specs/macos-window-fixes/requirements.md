# Requirements Document

## Introduction

FlowTask 是一个跨平台的任务管理应用，支持 iOS 和 macOS。当前 macOS 版本存在严重的窗口管理问题，导致用户体验不佳。本需求文档旨在系统地修复 macOS 应用中的窗口管理、数据同步和功能问题。

## Glossary

- **Main Window**: 主应用窗口，显示任务列表、笔记和其他主要功能
- **Sticky Window**: 桌面贴图窗口，一个可以置顶显示的小窗口，用于快速查看和添加任务
- **Floating Ball**: 悬浮球，一个可拖动的圆形按钮，用于快速访问贴图窗口
- **SharedDataManager**: 全局数据管理器，负责在不同窗口间共享任务和笔记数据
- **WindowOpener**: 窗口打开助手，负责管理窗口的创建和显示
- **AppDelegate**: 应用委托，处理应用级别的事件和菜单栏交互

## Requirements

### Requirement 1

**User Story:** 作为用户，我希望在关闭主窗口后能够重新打开它，以便继续使用应用的主要功能。

#### Acceptance Criteria

1. WHEN 用户关闭主窗口 THEN FlowTask 应用 SHALL 继续在后台运行
2. WHEN 用户点击 Dock 图标 THEN FlowTask 应用 SHALL 显示或创建主窗口
3. WHEN 用户通过菜单栏选择"显示主窗口" THEN FlowTask 应用 SHALL 显示或创建主窗口
4. WHEN 用户使用快捷键 Command+1 THEN FlowTask 应用 SHALL 显示或创建主窗口
5. WHEN 主窗口已经存在但被最小化 THEN FlowTask 应用 SHALL 恢复窗口而不是创建新窗口

### Requirement 2

**User Story:** 作为用户，我希望桌面贴图窗口能够正确显示和更新任务数据，以便快速查看和管理任务。

#### Acceptance Criteria

1. WHEN 用户在主窗口中添加任务 THEN 桌面贴图窗口 SHALL 立即显示新任务
2. WHEN 用户在桌面贴图窗口中完成任务 THEN 主窗口 SHALL 立即反映任务状态变化
3. WHEN 用户在桌面贴图窗口中添加任务 THEN 主窗口 SHALL 立即显示新任务
4. WHEN 用户在主窗口中删除任务 THEN 桌面贴图窗口 SHALL 立即移除该任务
5. WHEN 用户切换任务的子任务状态 THEN 所有窗口 SHALL 同步显示子任务进度

### Requirement 3

**User Story:** 作为用户，我希望悬浮球能够正确显示待办任务数量，以便快速了解待办事项。

#### Acceptance Criteria

1. WHEN 用户添加新任务 THEN 悬浮球 SHALL 更新显示的待办任务数量
2. WHEN 用户完成任务 THEN 悬浮球 SHALL 减少显示的待办任务数量
3. WHEN 用户删除任务 THEN 悬浮球 SHALL 更新显示的待办任务数量
4. WHEN 待办任务数量为 0 THEN 悬浮球 SHALL 不显示数字徽章
5. WHEN 待办任务数量超过 99 THEN 悬浮球 SHALL 显示 "99+"

### Requirement 4

**User Story:** 作为用户，我希望应用的窗口管理逻辑清晰可靠，以便获得流畅的使用体验。

#### Acceptance Criteria

1. WHEN 应用启动 THEN FlowTask 应用 SHALL 显示主窗口和悬浮球
2. WHEN 用户关闭所有窗口 THEN FlowTask 应用 SHALL 继续运行并保持菜单栏图标可用
3. WHEN 用户从贴图窗口点击"打开主窗口"按钮 THEN FlowTask 应用 SHALL 显示或创建主窗口
4. WHEN 用户双击贴图窗口标题栏 THEN FlowTask 应用 SHALL 显示或创建主窗口
5. WHEN 用户点击悬浮球 THEN FlowTask 应用 SHALL 切换桌面贴图窗口的显示状态

### Requirement 5

**User Story:** 作为用户，我希望数据在不同窗口间保持一致，以便无论在哪个窗口操作都能看到最新数据。

#### Acceptance Criteria

1. WHEN SharedDataManager 初始化 THEN 系统 SHALL 加载所有任务和笔记数据
2. WHEN 任何窗口修改任务数据 THEN SharedDataManager SHALL 通知所有观察者更新
3. WHEN 任何窗口修改笔记数据 THEN SharedDataManager SHALL 通知所有观察者更新
4. WHEN 数据更新发生 THEN 系统 SHALL 避免循环更新导致的性能问题
5. WHEN 主窗口关闭后重新打开 THEN 系统 SHALL 显示最新的数据状态

### Requirement 6

**User Story:** 作为用户，我希望任务编辑功能正常工作，以便修改任务的详细信息。

#### Acceptance Criteria

1. WHEN 用户在主窗口点击编辑任务 THEN 系统 SHALL 显示任务编辑表单
2. WHEN 用户修改任务信息并保存 THEN 系统 SHALL 更新任务数据并关闭编辑表单
3. WHEN 用户取消编辑 THEN 系统 SHALL 关闭编辑表单而不保存更改
4. WHEN 用户在任务详情面板中修改子任务状态 THEN 系统 SHALL 立即更新任务数据
5. WHEN 用户删除任务 THEN 系统 SHALL 从所有窗口中移除该任务

### Requirement 7

**User Story:** 作为用户，我希望笔记功能正常工作，以便记录和管理我的想法。

#### Acceptance Criteria

1. WHEN 用户创建新笔记 THEN 系统 SHALL 保存笔记并显示在笔记列表中
2. WHEN 用户编辑笔记 THEN 系统 SHALL 更新笔记内容和修改时间
3. WHEN 用户删除笔记 THEN 系统 SHALL 从所有窗口中移除该笔记
4. WHEN 用户在贴图窗口创建笔记 THEN 主窗口 SHALL 立即显示新笔记
5. WHEN 用户搜索笔记 THEN 系统 SHALL 根据标题和内容过滤笔记列表

### Requirement 8

**User Story:** 作为用户，我希望应用的菜单栏功能完整可用，以便通过菜单快速访问各种功能。

#### Acceptance Criteria

1. WHEN 用户点击菜单栏图标 THEN 系统 SHALL 显示包含所有功能的菜单
2. WHEN 用户选择"显示主窗口"菜单项 THEN 系统 SHALL 显示或创建主窗口
3. WHEN 用户选择"快速添加任务"菜单项 THEN 系统 SHALL 显示快速添加任务界面
4. WHEN 用户选择"显示桌面贴图"菜单项 THEN 系统 SHALL 显示桌面贴图窗口
5. WHEN 用户选择"显示/隐藏悬浮球"菜单项 THEN 系统 SHALL 切换悬浮球的显示状态
