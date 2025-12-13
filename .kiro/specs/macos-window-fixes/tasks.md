# Implementation Plan

- [x] 1. 创建 WindowManager 核心组件
  - 创建新的 WindowManager 类，负责统一管理所有窗口
  - 实现窗口引用存储和状态追踪
  - 实现主窗口查找和创建逻辑
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 4.1, 4.2, 4.3, 4.4_

- [x] 1.1 为 WindowManager 编写属性测试
  - **Property 1: Window restoration preserves identity**
  - **Validates: Requirements 1.5**

- [ ] 2. 重构 SharedDataManager 移除循环依赖
  - 添加 isUpdating 标志位防止循环更新
  - 简化数据操作方法，统一使用 async/await
  - 移除与视图的直接耦合
  - 优化观察者通知机制
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 2.1 为 SharedDataManager 编写属性测试
  - **Property 7: Data manager notifies all observers**
  - **Validates: Requirements 5.2, 5.3**

- [ ] 2.2 为数据持久化编写属性测试
  - **Property 8: Window reopening preserves data state**
  - **Validates: Requirements 5.5**

- [ ] 3. 重构 AppDelegate 简化职责
  - 移除窗口管理逻辑，委托给 WindowManager
  - 保留应用级事件处理（Dock 点击、菜单栏）
  - 更新菜单栏处理函数调用 WindowManager
  - 确保应用在关闭所有窗口后继续运行
  - _Requirements: 1.1, 1.2, 4.2, 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ] 4. 重构 MacContentView 移除数据同步逻辑
  - 移除 isSyncingFromShared 标志和相关逻辑
  - 直接观察 SharedDataManager 的数据
  - 简化 setupData 方法
  - 移除 onChange 中的数据同步代码
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 5.5_

- [ ] 4.1 为窗口间数据同步编写属性测试
  - **Property 2: Task addition synchronizes across windows**
  - **Validates: Requirements 2.1**

- [ ] 4.2 为双向同步编写属性测试
  - **Property 3: Task completion synchronizes bidirectionally**
  - **Validates: Requirements 2.2, 2.3**

- [ ] 4.3 为删除同步编写属性测试
  - **Property 4: Task deletion synchronizes across windows**
  - **Validates: Requirements 2.4, 6.5**

- [ ] 5. 重构 TaskListViewModel 移除本地状态
  - 移除 @Published var tasks 属性
  - 添加计算属性直接从 SharedDataManager 获取任务
  - 更新所有任务操作方法委托给 SharedDataManager
  - 移除 setContext 中的数据加载逻辑
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 5.1 为任务编辑编写属性测试
  - **Property 9: Task edit preserves unmodified fields**
  - **Validates: Requirements 6.3**

- [ ] 5.2 为子任务修改编写属性测试
  - **Property 10: Subtask modification updates parent task**
  - **Validates: Requirements 6.4**

- [ ] 6. 修复桌面贴图窗口数据同步
  - 更新 StickyWindowViewModel 直接使用 SharedDataManager
  - 移除本地数据缓存
  - 确保所有操作委托给 SharedDataManager
  - 修复子任务状态切换同步
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 6.1 为子任务同步编写属性测试
  - **Property 5: Subtask state synchronizes across windows**
  - **Validates: Requirements 2.5**

- [ ] 7. 修复悬浮球数量显示
  - 更新 FloatingBallWrapper 直接观察 SharedDataManager
  - 确保 pendingCount 计算正确
  - 处理边界情况（0 和 >99）
  - 测试数量更新的实时性
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 7.1 为悬浮球计数编写属性测试
  - **Property 6: Floating ball count reflects pending tasks**
  - **Validates: Requirements 3.1, 3.2, 3.3**

- [ ] 8. 更新 DesktopStickyWindowManager 使用 WindowManager
  - 将窗口管理逻辑迁移到 WindowManager
  - 保留 DesktopStickyWindowManager 作为便捷接口
  - 更新所有窗口显示/隐藏调用
  - 确保窗口状态正确追踪
  - _Requirements: 4.3, 4.4, 4.5_

- [ ] 9. 修复笔记功能
  - 确保笔记创建在所有窗口同步
  - 修复笔记编辑和删除同步
  - 实现笔记搜索过滤
  - 测试贴图窗口和主窗口的笔记交互
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ] 9.1 为笔记同步编写属性测试
  - **Property 11: Note creation appears in all views**
  - **Validates: Requirements 7.4**

- [ ] 9.2 为笔记搜索编写属性测试
  - **Property 12: Note search filters correctly**
  - **Validates: Requirements 7.5**

- [ ] 10. 更新主窗口打开逻辑
  - 在 FlowTaskMacApp 中保存 openWindow action 到 WindowManager
  - 更新所有打开主窗口的调用使用 WindowManager
  - 移除 WindowOpener 类，使用 WindowManager 替代
  - 测试从各个入口打开主窗口
  - _Requirements: 1.2, 1.3, 1.4, 4.3, 4.4, 8.2_

- [ ] 11. 测试和验证所有窗口交互
  - 测试主窗口关闭后重新打开
  - 测试 Dock 图标点击
  - 测试菜单栏所有功能
  - 测试快捷键
  - 测试悬浮球点击
  - 测试贴图窗口按钮
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 4.1, 4.2, 4.3, 4.4, 4.5, 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ] 12. Checkpoint - 确保所有测试通过
  - 确保所有测试通过，如有问题请询问用户
