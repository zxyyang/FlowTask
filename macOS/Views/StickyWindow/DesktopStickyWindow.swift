import SwiftUI
import Combine

#if os(macOS)
import AppKit

// MARK: - Desktop Sticky Window View
struct DesktopStickyWindowView: View {
    @ObservedObject var viewModel: StickyWindowViewModel
    @ObservedObject private var sharedData = SharedDataManager.shared
    @ObservedObject private var settings = SettingsManager.shared
    @State private var newTaskTitle: String = ""
    @State private var isHovering = false
    @State private var collapseAll = false
    @State private var viewMode: TaskViewMode = .today // 新增：视图模式
    @State private var animateList = false
    
    // 视图模式枚举
    enum TaskViewMode: String, CaseIterable {
        case today = "今日"
        case all = "全部"
        
        var icon: String {
            switch self {
            case .today: return "calendar.badge.clock"
            case .all: return "list.bullet"
            }
        }
    }
    
    /// 待完成任务
    private var pendingTasks: [FlowTask] {
        sharedData.tasks.filter { !$0.isCompleted }
    }
    
    /// 今日任务
    private var todayTasks: [FlowTask] {
        let calendar = Calendar.current
        let today = calendar.startOfDay(for: Date())
        let tomorrow = calendar.date(byAdding: .day, value: 1, to: today)!
        
        return sharedData.tasks.filter { task in
            guard !task.isCompleted else { return false }
            
            let taskStart = task.startDate ?? task.dueDate
            let taskEnd = task.dueDate ?? task.startDate
            
            guard taskStart != nil || taskEnd != nil else { return false }
            
            if let start = taskStart, let end = taskEnd {
                return start < tomorrow && end >= today
            } else if let date = taskStart ?? taskEnd {
                return calendar.isDateInToday(date)
            }
            
            return false
        }
    }
    
    /// 当前显示的任务列表
    private var displayTasks: [FlowTask] {
        switch viewMode {
        case .today:
            return todayTasks
        case .all:
            return pendingTasks
        }
    }
    
    /// 任务完成进度
    private var taskProgress: (completed: Int, total: Int) {
        let total = sharedData.tasks.count
        let completed = sharedData.tasks.filter { $0.isCompleted }.count
        return (completed, total)
    }
    
    /// 根据时间获取问候语
    private var greetingText: String {
        let hour = Calendar.current.component(.hour, from: Date())
        switch hour {
        case 5..<12: return "早上好"
        case 12..<14: return "中午好"
        case 14..<18: return "下午好"
        case 18..<22: return "晚上好"
        default: return "夜深了"
        }
    }
    
    var body: some View {
        ZStack(alignment: .bottomTrailing) {
            VStack(spacing: 0) {
                // 标题栏
                titleBar
                
                // 优美的切换器
                viewModeSwitcher
                
                // 内容区域
                contentArea
                
                // 添加区域
                quickAddBar
            }
            .background(Color(.windowBackgroundColor))
            .clipShape(RoundedRectangle(cornerRadius: 12))
            
            // 右下角弧线拖拽指示器 - 贴边
            ResizeHandle()
                .offset(x: -3, y: -3)
        }
        .frame(minWidth: 280)
        .shadow(color: .black.opacity(0.2), radius: 16, y: 8)
        .onHover { hovering in
            isHovering = hovering
        }
        .sheet(item: $viewModel.editingTask) { task in
            MacTaskEditSheet(
                mode: .edit(task),
                onSave: { updatedTask in
                    SharedDataManager.shared.updateTask(updatedTask)
                    viewModel.editingTask = nil
                }
            )
        }
        .onAppear {
            // 启动加载动画
            withAnimation(.spring(response: 0.6, dampingFraction: 0.8).delay(0.1)) {
                animateList = true
            }
        }
    }
    
    // MARK: - View Mode Switcher
    private var viewModeSwitcher: some View {
        HStack(spacing: 0) {
            ForEach(TaskViewMode.allCases, id: \.self) { mode in
                Button {
                    // 切换视图模式时重新触发动画
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
                } label: {
                    HStack(spacing: 6) {
                        Image(systemName: mode.icon)
                            .font(.system(size: 11, weight: .medium))
                        Text(mode.rawValue)
                            .font(.system(size: 12, weight: .medium))
                    }
                    .foregroundColor(viewMode == mode ? .white : .secondary)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 8)
                    .contentShape(Rectangle()) // 关键：让整个区域可点击
                    .background(
                        ZStack {
                            if viewMode == mode {
                                RoundedRectangle(cornerRadius: 6)
                                    .fill(
                                        LinearGradient(
                                            colors: [Color.accentColor, Color.accentColor.opacity(0.8)],
                                            startPoint: .topLeading,
                                            endPoint: .bottomTrailing
                                        )
                                    )
                                    .shadow(color: Color.accentColor.opacity(0.3), radius: 4, y: 2)
                                    .matchedGeometryEffect(id: "viewMode", in: namespace)
                            }
                        }
                    )
                }
                .buttonStyle(.plain) // 使用 plain 样式避免默认的点击区域限制
            }
        }
        .padding(4)
        .background(
            RoundedRectangle(cornerRadius: 8)
                .fill(Color(.controlBackgroundColor))
        )
        .padding(.horizontal, 12)
        .padding(.vertical, 8)
    }
    
    @Namespace private var namespace
    
    // MARK: - Title Bar
    private var titleBar: some View {
        HStack {
            HStack(spacing: 6) {
                Button {
                    viewModel.hideWindow()
                } label: {
                    Circle()
                        .fill(Color.red)
                        .frame(width: 12, height: 12)
                }
                .buttonStyle(.plain)
                .help("关闭贴图")
                
                Button {
                    withAnimation {
                        collapseAll.toggle()
                    }
                } label: {
                    Image(systemName: collapseAll ? "chevron.down.circle.fill" : "chevron.up.circle.fill")
                        .font(.system(size: 12))
                        .foregroundColor(.secondary)
                }
                .buttonStyle(.plain)
                .help(collapseAll ? "展开所有子任务" : "收起所有子任务")
            }
            
            Spacer()
            
            // 根据设置显示不同的导航栏内容
            navigationBarContent
            
            Spacer()
            
            Button {
                viewModel.openMainWindow()
            } label: {
                Image(systemName: "arrow.up.left.and.arrow.down.right")
                    .font(.system(size: 11))
                    .foregroundColor(.secondary)
            }
            .buttonStyle(.plain)
            .help("打开主窗口")
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 10)
    }
    
    // MARK: - Navigation Bar Content
    @ViewBuilder
    private var navigationBarContent: some View {
        switch settings.navigationBarDisplayMode {
        case .taskCount:
            HStack(spacing: 4) {
                Text("Tasks")
                    .font(.system(size: 13, weight: .medium))
                    .foregroundColor(.secondary)
                if pendingTasks.count > 0 {
                    Text("·")
                        .foregroundColor(.secondary.opacity(0.5))
                    Text("\(pendingTasks.count)")
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundColor(.accentColor)
                }
            }
            
        case .todayRemaining:
            HStack(spacing: 4) {
                Image(systemName: "calendar")
                    .font(.system(size: 11))
                    .foregroundColor(.secondary)
                Text("今日剩余")
                    .font(.system(size: 13, weight: .medium))
                    .foregroundColor(.secondary)
                if todayTasks.count > 0 {
                    Text("\(todayTasks.count)")
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundColor(.orange)
                } else {
                    Image(systemName: "checkmark.circle.fill")
                        .font(.system(size: 12))
                        .foregroundColor(.green)
                }
            }
            
        case .progress:
            HStack(spacing: 6) {
                Image(systemName: "chart.bar.fill")
                    .font(.system(size: 11))
                    .foregroundColor(.secondary)
                if taskProgress.total > 0 {
                    Text("\(taskProgress.completed)/\(taskProgress.total)")
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundColor(.accentColor)
                    Text("(\(Int(Double(taskProgress.completed) / Double(taskProgress.total) * 100))%)")
                        .font(.system(size: 11))
                        .foregroundColor(.secondary)
                } else {
                    Text("无任务")
                        .font(.system(size: 13, weight: .medium))
                        .foregroundColor(.secondary)
                }
            }
            
        case .greeting:
            HStack(spacing: 4) {
                Image(systemName: greetingIcon)
                    .font(.system(size: 12))
                    .foregroundColor(greetingColor)
                Text(greetingText)
                    .font(.system(size: 13, weight: .medium))
                    .foregroundColor(.secondary)
            }
            
        case .simple:
            Text("Tasks")
                .font(.system(size: 13, weight: .medium))
                .foregroundColor(.secondary)
        }
    }
    
    /// 问候语图标
    private var greetingIcon: String {
        let hour = Calendar.current.component(.hour, from: Date())
        switch hour {
        case 5..<12: return "sunrise.fill"
        case 12..<14: return "sun.max.fill"
        case 14..<18: return "sun.min.fill"
        case 18..<22: return "moon.stars.fill"
        default: return "moon.fill"
        }
    }
    
    /// 问候语颜色
    private var greetingColor: Color {
        let hour = Calendar.current.component(.hour, from: Date())
        switch hour {
        case 5..<12: return .orange
        case 12..<14: return .yellow
        case 14..<18: return .orange.opacity(0.8)
        case 18..<22: return .blue
        default: return .indigo
        }
    }
    
    // MARK: - Content Area
    private var contentArea: some View {
        ScrollView {
            LazyVStack(spacing: 0) {
                todoList
            }
            .padding(.vertical, 8)
        }
        .scrollIndicators(.hidden)
        .frame(minHeight: 200)
    }
    
    // MARK: - Todo List
    private var todoList: some View {
        Group {
            if displayTasks.isEmpty {
                emptyState(
                    icon: viewMode == .today ? "sun.max" : "checkmark.circle",
                    text: viewMode == .today ? "今天没有待办任务" : "没有待办任务",
                    subtitle: viewMode == .today ? "享受美好的一天吧！" : "在下方输入框添加你的第一个任务"
                )
            } else {
                ForEach(Array(displayTasks.enumerated()), id: \.element.id) { index, task in
                    StickyTaskRow(
                        task: task,
                        collapseAll: $collapseAll,
                        viewModel: viewModel,
                        onToggle: { 
                            withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                                SharedDataManager.shared.toggleTask(task)
                            }
                        },
                        onDelete: { 
                            withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                                SharedDataManager.shared.deleteTask(task)
                            }
                        },
                        onToggleSubtask: { subtask in
                            SharedDataManager.shared.toggleSubtask(task, subtask: subtask)
                        },
                        onAddSubtask: { title in
                            SharedDataManager.shared.addSubtask(to: task, title: title)
                        },
                        onDeleteSubtask: { subtask in
                            SharedDataManager.shared.deleteSubtask(from: task, subtask: subtask)
                        },
                        onUpdateTask: { updatedTask in
                            SharedDataManager.shared.updateTask(updatedTask)
                        }
                    )
                    .opacity(animateList ? 1 : 0)
                    .offset(y: animateList ? 0 : 15)
                    .animation(.spring(response: 0.5, dampingFraction: 0.8).delay(Double(index) * 0.04), value: animateList)
                    .transition(.asymmetric(
                        insertion: .scale(scale: 0.9).combined(with: .opacity),
                        removal: .scale(scale: 0.9).combined(with: .opacity)
                    ))
                }
            }
        }
    }
    
    private func emptyState(icon: String, text: String, subtitle: String) -> some View {
        VStack(spacing: 16) {
            Image(systemName: icon)
                .font(.system(size: 48))
                .foregroundColor(.secondary.opacity(0.3))
            
            Text(text)
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(.secondary)
            
            Text(subtitle)
                .font(.system(size: 12))
                .foregroundColor(.secondary.opacity(0.7))
                .multilineTextAlignment(.center)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 60)
    }
    
    // MARK: - Quick Add Bar
    private var quickAddBar: some View {
        HStack(spacing: 8) {
            TextField("快速添加任务 (回车确认)...", text: $newTaskTitle)
                .textFieldStyle(.plain)
                .font(.system(size: 13))
                .padding(.horizontal, 12)
                .padding(.vertical, 10)
                .background(
                    RoundedRectangle(cornerRadius: 6)
                        .fill(Color(.textBackgroundColor))
                        .stroke(Color.gray.opacity(0.2), lineWidth: 1)
                )
                .onSubmit {
                    quickAddTask()
                }
        }
        .padding(.horizontal, 12)
        .padding(.top, 8)
        .padding(.bottom, 12)
    }
    
    private func quickAddTask() {
        let trimmed = newTaskTitle.trimmingCharacters(in: .whitespaces)
        guard !trimmed.isEmpty else { return }
        SharedDataManager.shared.addTask(title: trimmed)
        newTaskTitle = ""
    }
}

// MARK: - Resize Handle (右下角弧线)
struct ResizeHandle: View {
    var body: some View {
        Canvas { context, size in
            let radius: CGFloat = 10
            let lineWidth: CGFloat = 2.5
            
            // 绘制右下角弧线
            let path = Path { p in
                p.addArc(
                    center: CGPoint(x: size.width - radius - 2, y: size.height - radius - 2),
                    radius: radius,
                    startAngle: .degrees(0),
                    endAngle: .degrees(90),
                    clockwise: false
                )
            }
            
            context.stroke(
                path,
                with: .color(.secondary.opacity(0.6)),
                style: StrokeStyle(lineWidth: lineWidth, lineCap: .round)
            )
        }
        .frame(width: 20, height: 20)
        .contentShape(Rectangle())
        .gesture(
            DragGesture()
                .onChanged { value in
                    guard let window = DesktopStickyWindowManager.shared.currentWindow else { return }
                    let deltaX = value.translation.width
                    let deltaY = value.translation.height
                    
                    let newWidth = max(280, window.frame.width + deltaX)
                    let newHeight = max(300, window.frame.height - deltaY)
                    let newY = window.frame.origin.y + (window.frame.height - newHeight)
                    
                    window.setFrame(
                        NSRect(x: window.frame.origin.x, y: newY, width: newWidth, height: newHeight),
                        display: true
                    )
                }
        )
        .onHover { hovering in
            if hovering {
                NSCursor.crosshair.push()
            } else {
                NSCursor.pop()
            }
        }
    }
}


// MARK: - Sticky Task Row
struct StickyTaskRow: View {
    let task: FlowTask
    @Binding var collapseAll: Bool
    @ObservedObject var viewModel: StickyWindowViewModel
    let onToggle: () -> Void
    let onDelete: () -> Void
    var onToggleSubtask: ((Subtask) -> Void)? = nil
    var onAddSubtask: ((String) -> Void)? = nil
    var onDeleteSubtask: ((Subtask) -> Void)? = nil
    var onUpdateTask: ((FlowTask) -> Void)? = nil
    @State private var isHovering = false
    @State private var isExpanded = false
    @State private var showAddSubtask = false
    @State private var newSubtaskTitle = ""
    @State private var hoveringSubtaskId: UUID? = nil
    
    // 任务标题编辑状态
    @State private var isEditingTitle = false
    @State private var editingTitle = ""
    @SwiftUI.FocusState private var isTitleFocused: Bool
    
    // 子任务编辑状态
    @State private var editingSubtaskId: UUID? = nil
    @State private var editingSubtaskTitle = ""
    @SwiftUI.FocusState private var isSubtaskFocused: Bool
    
    var body: some View {
        ZStack(alignment: .trailing) {
            VStack(alignment: .leading, spacing: 0) {
                // 主任务行
                HStack(spacing: 10) {
                    // 完成按钮
                    Button {
                        onToggle()
                    } label: {
                        ZStack {
                            Circle()
                                .stroke(task.isCompleted ? Color.accentColor : Color.gray.opacity(0.4), lineWidth: 2)
                                .frame(width: 20, height: 20)
                            
                            if task.isCompleted {
                                Image(systemName: "checkmark")
                                    .font(.system(size: 10, weight: .bold))
                                    .foregroundColor(.accentColor)
                            }
                        }
                        .frame(width: 28, height: 28)
                        .contentShape(Rectangle())
                    }
                    .buttonStyle(.plain)
                    .help(task.isCompleted ? "标记为未完成" : "标记为已完成")
                    
                    // 任务内容区域（可点击展开）
                    VStack(alignment: .leading, spacing: 4) {
                        // 任务标题 - 支持双击编辑
                        if isEditingTitle {
                            TextField("任务标题", text: $editingTitle)
                                .textFieldStyle(.plain)
                                .font(.system(size: 13))
                                .padding(.horizontal, 6)
                                .padding(.vertical, 4)
                                .background(
                                    RoundedRectangle(cornerRadius: 4)
                                        .fill(Color(.textBackgroundColor))
                                        .overlay(
                                            RoundedRectangle(cornerRadius: 4)
                                                .stroke(Color.accentColor, lineWidth: 1)
                                        )
                                )
                                .focused($isTitleFocused)
                                .onSubmit {
                                    saveTaskTitle()
                                }
                                .onExitCommand {
                                    isEditingTitle = false
                                    editingTitle = ""
                                }
                        } else {
                            Text(task.title)
                                .font(.system(size: 13))
                                .foregroundColor(task.isCompleted ? .secondary : .primary)
                                .strikethrough(task.isCompleted)
                                .lineLimit(2)
                        }
                        
                        HStack(spacing: 8) {
                            if let dueDate = task.dueDate {
                                HStack(spacing: 3) {
                                    Image(systemName: "clock")
                                        .font(.system(size: 9))
                                    Text(dueDate.smartDateTimeDisplay)
                                        .font(.system(size: 11))
                                }
                                .foregroundColor(dueDate.isPast && !task.isCompleted ? .red : .secondary)
                            }
                            
                            // 子任务进度
                            if !task.subtasks.isEmpty {
                                HStack(spacing: 3) {
                                    Image(systemName: "list.bullet")
                                        .font(.system(size: 9))
                                    Text("\(task.subtasks.filter { $0.isCompleted }.count)/\(task.subtasks.count)")
                                        .font(.system(size: 11))
                                }
                                .foregroundColor(.secondary)
                            }
                        }
                        
                        // 子任务进度条
                        if !task.subtasks.isEmpty {
                            GeometryReader { geometry in
                                ZStack(alignment: .leading) {
                                    RoundedRectangle(cornerRadius: 2)
                                        .fill(Color.gray.opacity(0.2))
                                        .frame(height: 4)
                                    
                                    RoundedRectangle(cornerRadius: 2)
                                        .fill(Color.accentColor)
                                        .frame(width: geometry.size.width * task.subtaskProgress, height: 4)
                                }
                            }
                            .frame(height: 4)
                        }
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .contentShape(Rectangle())
                    .onTapGesture(count: 2) {
                        // 双击直接编辑标题
                        editingTitle = task.title
                        isEditingTitle = true
                        isTitleFocused = true
                    }
                    .onTapGesture(count: 1) {
                        // 单击展开/收起子任务
                        if !task.subtasks.isEmpty || showAddSubtask {
                            withAnimation(.easeInOut(duration: 0.2)) {
                                isExpanded.toggle()
                            }
                        }
                    }
                    .onChange(of: collapseAll) { _, newValue in
                        withAnimation {
                            if newValue {
                                isExpanded = false
                                showAddSubtask = false
                            } else {
                                if !task.subtasks.isEmpty {
                                    isExpanded = true
                                }
                            }
                        }
                    }
                }
                .padding(.horizontal, 12)
                .padding(.vertical, 10)
                
                // 子任务列表和添加输入框
                if isExpanded {
                    VStack(spacing: 4) {
                        if !task.subtasks.isEmpty {
                            ForEach(task.subtasks) { subtask in
                                HStack(spacing: 8) {
                                    Button {
                                        withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                                            onToggleSubtask?(subtask)
                                        }
                                    } label: {
                                        Image(systemName: subtask.isCompleted ? "checkmark.square.fill" : "square")
                                            .font(.system(size: 14))
                                            .foregroundColor(subtask.isCompleted ? .accentColor : .gray.opacity(0.6))
                                    }
                                    .buttonStyle(.plain)
                                    .help(subtask.isCompleted ? "标记为未完成" : "标记为已完成")
                                    
                                    // 子任务标题 - 支持双击编辑
                                    if editingSubtaskId == subtask.id {
                                        TextField("子任务标题", text: $editingSubtaskTitle)
                                            .textFieldStyle(.plain)
                                            .font(.system(size: 12))
                                            .padding(.horizontal, 6)
                                            .padding(.vertical, 3)
                                            .background(
                                                RoundedRectangle(cornerRadius: 4)
                                                    .fill(Color(.textBackgroundColor))
                                                    .overlay(
                                                        RoundedRectangle(cornerRadius: 4)
                                                            .stroke(Color.accentColor, lineWidth: 1)
                                                    )
                                            )
                                            .focused($isSubtaskFocused)
                                            .onSubmit {
                                                saveSubtaskTitle(subtaskId: subtask.id)
                                            }
                                            .onExitCommand {
                                                editingSubtaskId = nil
                                                editingSubtaskTitle = ""
                                            }
                                    } else {
                                        Text(subtask.title)
                                            .font(.system(size: 12))
                                            .foregroundColor(subtask.isCompleted ? .secondary : .primary)
                                            .strikethrough(subtask.isCompleted)
                                            .lineLimit(1)
                                            .onTapGesture(count: 2) {
                                                editingSubtaskId = subtask.id
                                                editingSubtaskTitle = subtask.title
                                                isSubtaskFocused = true
                                            }
                                    }
                                    
                                    Spacer()
                                    
                                    // 悬浮时显示删除按钮
                                    if hoveringSubtaskId == subtask.id {
                                        Button {
                                            withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                                                onDeleteSubtask?(subtask)
                                            }
                                        } label: {
                                            Image(systemName: "xmark.circle.fill")
                                                .font(.system(size: 12))
                                                .foregroundColor(.secondary)
                                        }
                                        .buttonStyle(.plain)
                                        .help("删除子任务")
                                    }
                                }
                                .padding(.leading, 40)
                                .padding(.trailing, 12)
                                .padding(.vertical, 4)
                                .onHover { hovering in
                                    withAnimation(.easeInOut(duration: 0.1)) {
                                        hoveringSubtaskId = hovering ? subtask.id : nil
                                    }
                                }
                                .contextMenu {
                                    Button(role: .destructive) {
                                        withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                                            onDeleteSubtask?(subtask)
                                        }
                                    } label: {
                                        Label("删除子任务", systemImage: "trash")
                                    }
                                }
                            }
                        }
                        
                        // 快速添加子任务输入框
                        if showAddSubtask {
                            HStack(spacing: 8) {
                                Image(systemName: "plus.circle")
                                    .font(.system(size: 14))
                                    .foregroundColor(.accentColor)
                                
                                TextField("添加子任务...", text: $newSubtaskTitle)
                                    .textFieldStyle(.plain)
                                    .font(.system(size: 12))
                                    .onSubmit {
                                        addSubtask()
                                    }
                                
                                Button {
                                    showAddSubtask = false
                                    newSubtaskTitle = ""
                                } label: {
                                    Image(systemName: "xmark.circle.fill")
                                        .font(.system(size: 14))
                                        .foregroundColor(.secondary)
                                }
                                .buttonStyle(.plain)
                            }
                            .padding(.leading, 40)
                            .padding(.trailing, 12)
                            .padding(.vertical, 4)
                        }
                    }
                    .padding(.bottom, 6)
                }
            }
            
            // 悬浮时右侧的毛玻璃操作区 - 只在主任务行显示，不展开子任务时
            if isHovering && !isExpanded {
                HStack(spacing: 12) {
                    Button {
                        withAnimation {
                            showAddSubtask = true
                            isExpanded = true
                        }
                    } label: {
                        Image(systemName: "plus")
                            .font(.system(size: 12, weight: .medium))
                            .foregroundColor(.primary)
                    }
                    .buttonStyle(.plain)
                    .help("添加子任务")
                    
                    Button {
                        onDelete()
                    } label: {
                        Image(systemName: "trash")
                            .font(.system(size: 12, weight: .medium))
                            .foregroundColor(.red.opacity(0.8))
                    }
                    .buttonStyle(.plain)
                    .help("删除任务")
                }
                .padding(.horizontal, 12)
                .padding(.vertical, 8)
                .background(
                    RoundedRectangle(cornerRadius: 6)
                        .fill(.ultraThinMaterial)
                )
                .padding(.trailing, 8)
                .transition(.opacity.combined(with: .scale(scale: 0.9)))
            }
            
            // 展开子任务时，操作按钮显示在主任务行右侧
            if isHovering && isExpanded {
                VStack {
                    HStack(spacing: 8) {
                        Button {
                            withAnimation {
                                showAddSubtask = true
                            }
                        } label: {
                            Image(systemName: "plus")
                                .font(.system(size: 11, weight: .medium))
                                .foregroundColor(.primary)
                        }
                        .buttonStyle(.plain)
                        .help("添加子任务")
                        
                        Button {
                            onDelete()
                        } label: {
                            Image(systemName: "trash")
                                .font(.system(size: 11, weight: .medium))
                                .foregroundColor(.red.opacity(0.8))
                        }
                        .buttonStyle(.plain)
                        .help("删除任务")
                    }
                    .padding(.horizontal, 8)
                    .padding(.vertical, 6)
                    .background(
                        RoundedRectangle(cornerRadius: 5)
                            .fill(.ultraThinMaterial)
                    )
                    .padding(.top, 10)
                    .padding(.trailing, 8)
                    
                    Spacer()
                }
                .transition(.opacity.combined(with: .scale(scale: 0.9)))
            }
        }
        .background(
            RoundedRectangle(cornerRadius: 8)
                .fill(Color.clear)
        )
        .contentShape(Rectangle()) // 确保整个区域（包括 ZStack 所有层）都能检测 hover
        .padding(.horizontal, 8)
        .padding(.vertical, 2)
        .onHover { hovering in
            withAnimation(.easeInOut(duration: 0.15)) {
                isHovering = hovering
            }
        }
        .contextMenu {
            Button {
                viewModel.editingTask = task
            } label: {
                Label("编辑任务", systemImage: "pencil")
            }
            
            Button {
                withAnimation {
                    showAddSubtask = true
                    isExpanded = true
                }
            } label: {
                Label("添加子任务", systemImage: "plus.circle")
            }
            
            Divider()
            
            Button(role: .destructive) {
                onDelete()
            } label: {
                Label("删除任务", systemImage: "trash")
            }
        }
    }
    
    private func addSubtask() {
        let trimmed = newSubtaskTitle.trimmingCharacters(in: .whitespaces)
        guard !trimmed.isEmpty else { return }
        onAddSubtask?(trimmed)
        newSubtaskTitle = ""
        showAddSubtask = false
    }
    
    private func saveTaskTitle() {
        let trimmed = editingTitle.trimmingCharacters(in: .whitespaces)
        if !trimmed.isEmpty && trimmed != task.title {
            var updated = task
            updated.title = trimmed
            onUpdateTask?(updated)
        }
        isEditingTitle = false
        editingTitle = ""
    }
    
    private func saveSubtaskTitle(subtaskId: UUID) {
        let trimmed = editingSubtaskTitle.trimmingCharacters(in: .whitespaces)
        if !trimmed.isEmpty {
            var updated = task
            if let idx = updated.subtasks.firstIndex(where: { $0.id == subtaskId }) {
                if updated.subtasks[idx].title != trimmed {
                    updated.subtasks[idx].title = trimmed
                    onUpdateTask?(updated)
                }
            }
        }
        editingSubtaskId = nil
        editingSubtaskTitle = ""
    }
}


#endif
