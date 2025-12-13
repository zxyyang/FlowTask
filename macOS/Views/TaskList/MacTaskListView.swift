import SwiftUI
import SwiftData
import Combine

#if os(macOS)
// MARK: - Mac Task List View
/// macOS 任务列表视图
struct MacTaskListView: View {
    @ObservedObject var viewModel: TaskListViewModel
    @State private var selectedTask: FlowTask?
    @State private var searchText = ""
    @State private var showCompleted = true
    @State private var animateList = false

    private let listMinWidth: CGFloat = 240
    private let listIdealWidth: CGFloat = 340
    private let detailMinWidth: CGFloat = 460
    private let detailIdealWidth: CGFloat = 560
    
    private var filteredTasks: [FlowTask] {
        var result = viewModel.tasks
        
        // 搜索过滤
        if !searchText.isEmpty {
            result = result.filter { $0.title.localizedCaseInsensitiveContains(searchText) }
        }
        
        // 完成状态过滤
        if !showCompleted {
            result = result.filter { !$0.isCompleted }
        }
        
        return result
    }
    
    private var pendingTasks: [FlowTask] {
        filteredTasks.filter { !$0.isCompleted }
    }
    
    private var completedTasks: [FlowTask] {
        filteredTasks.filter { $0.isCompleted }
    }
    
    var body: some View {
        HSplitView {
            taskListPanel
            detailPanel
        }
        .navigationTitle("任务")
        .toolbar {
            ToolbarItemGroup {
                Button {
                    viewModel.showAddTask = true
                } label: {
                    Image(systemName: "plus")
                }
                .keyboardShortcut("n", modifiers: .command)
            }
        }
        .sheet(isPresented: $viewModel.showAddTask) {
            MacTaskEditSheet(mode: .create) { task in
                viewModel.createTask(task)
            }
        }
        .sheet(item: $viewModel.editingTask) { task in
            MacTaskEditSheet(mode: .edit(task)) { updatedTask in
                viewModel.updateTask(updatedTask)
                if selectedTask?.id == updatedTask.id {
                    selectedTask = updatedTask
                }
            }
        }
        .onAppear {
            // 视图出现时刷新任务列表
            let vm = viewModel
            Task {
                await vm.loadTasks()
            }
            // 启动加载动画
            withAnimation(.spring(response: 0.6, dampingFraction: 0.8).delay(0.1)) {
                animateList = true
            }
        }
    }
    
    // MARK: - Task List Panel
    private var taskListPanel: some View {
        VStack(spacing: 0) {
            searchToolbar
            Divider()
            taskListContent
        }
        .frame(minWidth: listMinWidth, idealWidth: listIdealWidth, maxWidth: listIdealWidth)
        .layoutPriority(0)
    }
    
    // MARK: - Search Toolbar
    private var searchToolbar: some View {
        HStack {
            HStack {
                Image(systemName: "magnifyingglass")
                    .foregroundColor(.secondary)
                TextField("搜索任务...", text: $searchText)
                    .textFieldStyle(.plain)
            }
            .padding(.horizontal, 10)
            .frame(height: 32)
            .background(Color(.textBackgroundColor))
            .clipShape(RoundedRectangle(cornerRadius: 8))
            
            Spacer()
            
            Button {
                showCompleted.toggle()
            } label: {
                Image(systemName: showCompleted ? "eye" : "eye.slash")
                    .foregroundStyle(.secondary)
                    .frame(width: 28, height: 28)
                    .contentShape(RoundedRectangle(cornerRadius: 6))
            }
            .buttonStyle(.plain)
            .help(showCompleted ? "隐藏已完成" : "显示已完成")
        }
        .padding()
    }
    
    // MARK: - Task List Content
    private var taskListContent: some View {
        List(selection: $selectedTask) {
            if !pendingTasks.isEmpty {
                Section("待完成 (\(pendingTasks.count))") {
                    ForEach(Array(pendingTasks.enumerated()), id: \.element.id) { index, task in
                        taskRow(for: task)
                            .opacity(animateList ? 1 : 0)
                            .offset(y: animateList ? 0 : 20)
                            .animation(.spring(response: 0.5, dampingFraction: 0.8).delay(Double(index) * 0.03), value: animateList)
                    }
                }
            }
            
            if showCompleted && !completedTasks.isEmpty {
                Section("已完成 (\(completedTasks.count))") {
                    ForEach(Array(completedTasks.enumerated()), id: \.element.id) { index, task in
                        taskRow(for: task)
                            .opacity(animateList ? 1 : 0)
                            .offset(y: animateList ? 0 : 20)
                            .animation(.spring(response: 0.5, dampingFraction: 0.8).delay(Double(pendingTasks.count + index) * 0.03), value: animateList)
                    }
                }
            }
        }
        .listStyle(.inset)
    }
    
    // MARK: - Task Row
    private func taskRow(for task: FlowTask) -> some View {
        MacTaskRowView(
            task: task,
            isSelected: selectedTask?.id == task.id,
            onToggle: { viewModel.toggleComplete(task) },
            onSelect: { selectedTask = task },
            onDelete: {
                viewModel.deleteTask(task)
                if selectedTask?.id == task.id {
                    selectedTask = nil
                }
            }
        )
        .tag(task)
        .contextMenu {
            taskContextMenu(for: task)
        }
    }
    
    // MARK: - Detail Panel
    @ViewBuilder
    private var detailPanel: some View {
        Group {
            if let task = selectedTask {
                MacTaskDetailView(
                    task: task,
                    onUpdate: { updatedTask in
                        viewModel.updateTask(updatedTask)
                        selectedTask = updatedTask
                    },
                    onDelete: {
                        viewModel.deleteTask(task)
                        selectedTask = nil
                    }
                )
            } else {
                emptyDetailView
            }
        }
        .frame(minWidth: detailMinWidth, idealWidth: detailIdealWidth, maxWidth: .infinity)
        .layoutPriority(1)
    }
    
    // MARK: - Empty Detail View
    private var emptyDetailView: some View {
        VStack(spacing: 16) {
            Image(systemName: "checkmark.circle")
                .font(.system(size: 48))
                .foregroundColor(.secondary)
            Text("选择一个任务查看详情")
                .font(.headline)
                .foregroundColor(.secondary)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
    
    @ViewBuilder
    private func taskContextMenu(for task: FlowTask) -> some View {
        Button {
            viewModel.toggleComplete(task)
        } label: {
            Label(task.isCompleted ? "标记为未完成" : "标记为完成",
                  systemImage: task.isCompleted ? "circle" : "checkmark.circle")
        }
        
        Button {
            viewModel.editingTask = task
        } label: {
            Label("编辑", systemImage: "pencil")
        }
        
        Divider()
        
        Button(role: .destructive) {
            viewModel.deleteTask(task)
            if selectedTask?.id == task.id {
                selectedTask = nil
            }
        } label: {
            Label("删除", systemImage: "trash")
        }
    }
}

// MARK: - Mac Task Row View
struct MacTaskRowView: View {
    let task: FlowTask
    let isSelected: Bool
    let onToggle: () -> Void
    let onSelect: () -> Void
    var onDelete: (() -> Void)? = nil
    
    @State private var isHovering = false
    
    var body: some View {
        HStack(spacing: 12) {
            // 完成按钮
            Button(action: onToggle) {
                Image(systemName: task.isCompleted ? "checkmark.circle.fill" : "circle")
                    .font(.system(size: 18))
                    .foregroundColor(task.isCompleted ? .accentColor : .gray)
            }
            .buttonStyle(.plain)
            
            // 任务信息
            VStack(alignment: .leading, spacing: 4) {
                Text(task.title)
                    .font(.body)
                    .strikethrough(task.isCompleted)
                    .foregroundColor(task.isCompleted ? .secondary : .primary)
                    .lineLimit(1)
                
                HStack(spacing: 8) {
                    if let dueDate = task.dueDate {
                        HStack(spacing: 4) {
                            Image(systemName: "calendar")
                                .font(.caption2)
                            Text(dueDate.smartDateTimeDisplay)
                                .font(.caption)
                        }
                        .foregroundColor(dueDate.isPast && !task.isCompleted ? .red : .secondary)
                    }
                    
                    if !task.subtasks.isEmpty {
                        HStack(spacing: 4) {
                            Image(systemName: "list.bullet")
                                .font(.caption2)
                            Text("\(task.subtasks.filter { $0.isCompleted }.count)/\(task.subtasks.count)")
                                .font(.caption)
                        }
                        .foregroundColor(.secondary)
                    }
                }
            }
            
            Spacer()
            
            // 悬浮显示删除按钮
            if isHovering, let onDelete = onDelete {
                Button(action: onDelete) {
                    Image(systemName: "trash")
                        .font(.system(size: 14))
                        .foregroundColor(.red.opacity(0.7))
                }
                .buttonStyle(.plain)
                .help("删除任务")
            }
        }
        .padding(.vertical, 6)
        .contentShape(Rectangle())
        .onHover { hovering in
            isHovering = hovering
        }
        .onTapGesture {
            onSelect()
        }
    }
}

// MARK: - Mac Task Detail View
struct MacTaskDetailView: View {
    let task: FlowTask
    let onUpdate: (FlowTask) -> Void
    let onDelete: () -> Void
    
    @State private var showEditSheet = false
    
    private var timeRemainingText: String? {
        guard let dueDate = task.dueDate, !task.isCompleted else { return nil }
        let now = Date()
        if dueDate < now {
            let components = Calendar.current.dateComponents([.day, .hour, .minute], from: dueDate, to: now)
            if let days = components.day, days > 0 {
                return "已逾期 \(days) 天"
            } else if let hours = components.hour, hours > 0 {
                return "已逾期 \(hours) 小时"
            } else if let minutes = components.minute {
                return "已逾期 \(max(1, minutes)) 分钟"
            }
        } else {
            let components = Calendar.current.dateComponents([.day, .hour, .minute], from: now, to: dueDate)
            if let days = components.day, days > 0 {
                return "剩余 \(days) 天 \(components.hour ?? 0) 小时"
            } else if let hours = components.hour, hours > 0 {
                return "剩余 \(hours) 小时 \(components.minute ?? 0) 分钟"
            } else if let minutes = components.minute {
                return "剩余 \(max(1, minutes)) 分钟"
            }
        }
        return nil
    }
    
    private var isOverdue: Bool {
        guard let dueDate = task.dueDate, !task.isCompleted else { return false }
        return dueDate < Date()
    }
    
    private var statusColor: Color {
        if task.isCompleted { return .green }
        if isOverdue { return .red }
        return .accentColor
    }
    
    private var statusText: String {
        if task.isCompleted { return "已完成" }
        if isOverdue { return "已逾期" }
        return "进行中"
    }
    
    private var statusIcon: String {
        if task.isCompleted { return "checkmark.circle.fill" }
        if isOverdue { return "exclamationmark.circle.fill" }
        return "clock.fill"
    }
    
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                // 顶部状态卡片
                statusCard
                    .padding(.bottom, 20)
                
                // 时间信息区域
                if task.startDate != nil || task.dueDate != nil {
                    timeInfoSection
                        .padding(.bottom, 20)
                }
                
                // 子任务区域
                if !task.subtasks.isEmpty {
                    subtasksSection
                        .padding(.bottom, 20)
                }
                
                // 任务信息区域
                taskInfoSection
                
                Spacer()
            }
            .padding(24)
        }
        .background(Color(nsColor: .windowBackgroundColor))
        .toolbar {
            ToolbarItemGroup {
                Button {
                    showEditSheet = true
                } label: {
                    Image(systemName: "pencil")
                }
                .help("编辑任务")
                
                Button(role: .destructive) {
                    onDelete()
                } label: {
                    Image(systemName: "trash")
                }
                .help("删除任务")
            }
        }
        .sheet(isPresented: $showEditSheet) {
            MacTaskEditSheet(
                mode: .edit(task),
                onSave: { updatedTask in
                    onUpdate(updatedTask)
                    showEditSheet = false
                }
            )
        }
    }
    
    // MARK: - Status Card
    private var statusCard: some View {
        HStack(spacing: 16) {
            // 完成按钮
            Button {
                var updated = task
                updated.isCompleted.toggle()
                onUpdate(updated)
            } label: {
                ZStack {
                    Circle()
                        .fill(statusColor.opacity(0.15))
                        .frame(width: 56, height: 56)
                    
                    Image(systemName: task.isCompleted ? "checkmark" : "circle")
                        .font(.system(size: 24, weight: .medium))
                        .foregroundColor(statusColor)
                }
            }
            .buttonStyle(.plain)
            
            VStack(alignment: .leading, spacing: 6) {
                Text(task.title)
                    .font(.title2)
                    .fontWeight(.semibold)
                    .strikethrough(task.isCompleted)
                    .foregroundColor(task.isCompleted ? .secondary : .primary)
                
                HStack(spacing: 8) {
                    // 状态标签
                    HStack(spacing: 4) {
                        Image(systemName: statusIcon)
                            .font(.caption)
                        Text(statusText)
                            .font(.caption)
                            .fontWeight(.medium)
                    }
                    .foregroundColor(statusColor)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(statusColor.opacity(0.12))
                    .cornerRadius(6)
                    
                    // 剩余时间
                    if let remaining = timeRemainingText {
                        Text(remaining)
                            .font(.caption)
                            .foregroundColor(isOverdue ? .red : .secondary)
                    }
                }
            }
            
            Spacer()
        }
        .padding(16)
        .background(Color(nsColor: .controlBackgroundColor))
        .cornerRadius(12)
    }
    
    // MARK: - Time Info Section
    private var timeInfoSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("时间安排")
                .font(.headline)
                .foregroundColor(.secondary)
            
            HStack(spacing: 16) {
                // 开始时间
                if let startDate = task.startDate {
                    timeCard(
                        icon: "play.circle.fill",
                        iconColor: .green,
                        title: "开始时间",
                        date: startDate
                    )
                }
                
                // 截止时间
                if let dueDate = task.dueDate {
                    timeCard(
                        icon: "flag.circle.fill",
                        iconColor: isOverdue ? .red : .orange,
                        title: "截止时间",
                        date: dueDate
                    )
                }
                
                // 持续时间
                if let startDate = task.startDate, let dueDate = task.dueDate {
                    durationCard(from: startDate, to: dueDate)
                }
            }
        }
    }
    
    private func timeCard(icon: String, iconColor: Color, title: String, date: Date) -> some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .font(.title2)
                .foregroundColor(iconColor)
            
            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(.caption)
                    .foregroundColor(.secondary)
                Text(date.smartDateTimeDisplay)
                    .font(.subheadline)
                    .fontWeight(.medium)
            }
        }
        .padding(12)
        .background(Color(nsColor: .controlBackgroundColor))
        .cornerRadius(10)
    }
    
    private func durationCard(from start: Date, to end: Date) -> some View {
        let components = Calendar.current.dateComponents([.day, .hour], from: start, to: end)
        let days = components.day ?? 0
        let hours = components.hour ?? 0
        
        let durationText: String
        if days > 0 {
            durationText = "\(days) 天 \(hours) 小时"
        } else {
            durationText = "\(hours) 小时"
        }
        
        return HStack(spacing: 12) {
            Image(systemName: "hourglass.circle.fill")
                .font(.title2)
                .foregroundColor(.purple)
            
            VStack(alignment: .leading, spacing: 2) {
                Text("持续时间")
                    .font(.caption)
                    .foregroundColor(.secondary)
                Text(durationText)
                    .font(.subheadline)
                    .fontWeight(.medium)
            }
        }
        .padding(12)
        .background(Color(nsColor: .controlBackgroundColor))
        .cornerRadius(10)
    }
    
    // MARK: - Subtasks Section
    private var subtasksSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Text("子任务")
                    .font(.headline)
                    .foregroundColor(.secondary)
                
                Spacer()
                
                Text("\(task.subtasks.filter { $0.isCompleted }.count)/\(task.subtasks.count)")
                    .font(.subheadline)
                    .fontWeight(.medium)
                    .foregroundColor(.secondary)
            }
            
            VStack(spacing: 0) {
                // 进度条
                GeometryReader { geometry in
                    ZStack(alignment: .leading) {
                        RoundedRectangle(cornerRadius: 4)
                            .fill(Color.gray.opacity(0.2))
                            .frame(height: 6)
                        
                        RoundedRectangle(cornerRadius: 4)
                            .fill(Color.accentColor)
                            .frame(width: geometry.size.width * task.subtaskProgress, height: 6)
                            .animation(.easeInOut(duration: 0.3), value: task.subtaskProgress)
                    }
                }
                .frame(height: 6)
                .padding(.bottom, 16)
                
                // 子任务列表
                ForEach(Array(task.subtasks.enumerated()), id: \.element.id) { index, subtask in
                    VStack(spacing: 0) {
                        HStack(spacing: 12) {
                            Button {
                                var updated = task
                                if let idx = updated.subtasks.firstIndex(where: { $0.id == subtask.id }) {
                                    updated.subtasks[idx].isCompleted.toggle()
                                    onUpdate(updated)
                                }
                            } label: {
                                Image(systemName: subtask.isCompleted ? "checkmark.circle.fill" : "circle")
                                    .font(.system(size: 18))
                                    .foregroundColor(subtask.isCompleted ? .accentColor : .gray)
                            }
                            .buttonStyle(.plain)
                            
                            Text(subtask.title)
                                .strikethrough(subtask.isCompleted)
                                .foregroundColor(subtask.isCompleted ? .secondary : .primary)
                            
                            Spacer()
                            
                            if subtask.isCompleted {
                                Image(systemName: "checkmark")
                                    .font(.caption)
                                    .foregroundColor(.green)
                            }
                        }
                        .padding(.vertical, 10)
                        .padding(.horizontal, 12)
                        
                        if index < task.subtasks.count - 1 {
                            Divider()
                                .padding(.leading, 42)
                        }
                    }
                }
            }
            .background(Color(nsColor: .controlBackgroundColor))
            .cornerRadius(10)
        }
    }
    
    // MARK: - Task Info Section
    private var taskInfoSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("任务信息")
                .font(.headline)
                .foregroundColor(.secondary)
            
            VStack(spacing: 0) {
                infoRow(icon: "calendar.badge.plus", title: "创建时间", value: task.createdAt.formattedFullDateTime)
                Divider().padding(.leading, 42)
                infoRow(icon: "arrow.triangle.2.circlepath", title: "更新时间", value: task.updatedAt.formattedFullDateTime)
                
                if task.recurringPattern != .none {
                    Divider().padding(.leading, 42)
                    infoRow(icon: "repeat", title: "重复", value: recurringPatternText)
                }
            }
            .background(Color(nsColor: .controlBackgroundColor))
            .cornerRadius(10)
        }
    }
    
    private func infoRow(icon: String, title: String, value: String) -> some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .font(.system(size: 16))
                .foregroundColor(.secondary)
                .frame(width: 24)
            
            Text(title)
                .foregroundColor(.secondary)
            
            Spacer()
            
            Text(value)
                .foregroundColor(.primary)
        }
        .padding(.vertical, 10)
        .padding(.horizontal, 12)
    }
    
    private var recurringPatternText: String {
        switch task.recurringPattern {
        case .none: return "不重复"
        case .daily: return "每天"
        case .weekly: return "每周"
        case .monthly: return "每月"
        }
    }
}

// MARK: - Holiday Event
struct HolidayEvent: Identifiable {
    let id = UUID()
    let name: String
    let date: Date
    let endDate: Date?
}

// MARK: - ICS Calendar Service
@MainActor
class ICSCalendarService: ObservableObject {
    static let shared = ICSCalendarService()
    
    @Published var holidays: [HolidayEvent] = []
    @Published var isLoading = false
    
    private let calendar: Calendar = {
        var cal = Calendar.current
        cal.timeZone = TimeZone.current
        return cal
    }()
    
    private init() {
        // 先加载内置节假日
        loadBuiltInHolidays()
        // 然后尝试从网络加载所有订阅
        Task {
            await reloadAllSubscriptions()
        }
    }
    
    /// 加载内置的中国节假日（2024-2026）
    private func loadBuiltInHolidays() {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy-MM-dd"
        dateFormatter.timeZone = TimeZone.current
        
        let builtInHolidays: [(String, String)] = [
            // 2024
            ("2024-01-01", "元旦"),
            ("2024-02-10", "春节"),
            ("2024-02-11", "春节"),
            ("2024-02-12", "春节"),
            ("2024-04-04", "清明节"),
            ("2024-05-01", "劳动节"),
            ("2024-06-10", "端午节"),
            ("2024-09-17", "中秋节"),
            ("2024-10-01", "国庆节"),
            ("2024-10-02", "国庆节"),
            ("2024-10-03", "国庆节"),
            
            // 2025 元旦
            ("2025-01-01", "元旦(休)"),
            
            // 2025 春节
            ("2025-01-26", "春节(班)"),
            ("2025-01-28", "除夕(休)"),
            ("2025-01-29", "春节(休)"),
            ("2025-01-30", "春节(休)"),
            ("2025-01-31", "春节(休)"),
            ("2025-02-01", "春节(休)"),
            ("2025-02-02", "春节(休)"),
            ("2025-02-03", "春节(休)"),
            ("2025-02-04", "春节(休)"),
            ("2025-02-08", "春节(班)"),
            
            // 2025 清明节
            ("2025-04-04", "清明(休)"),
            ("2025-04-05", "清明(休)"),
            ("2025-04-06", "清明(休)"),
            
            // 2025 劳动节
            ("2025-04-27", "劳动节(班)"),
            ("2025-05-01", "劳动节(休)"),
            ("2025-05-02", "劳动节(休)"),
            ("2025-05-03", "劳动节(休)"),
            ("2025-05-04", "劳动节(休)"),
            ("2025-05-05", "劳动节(休)"),
            
            // 2025 端午节
            ("2025-05-31", "端午(休)"),
            ("2025-06-01", "端午(休)"),
            ("2025-06-02", "端午(休)"),
            
            // 2025 中秋节+国庆节
            ("2025-09-28", "国庆(班)"),
            ("2025-10-01", "国庆(休)"),
            ("2025-10-02", "国庆(休)"),
            ("2025-10-03", "国庆(休)"),
            ("2025-10-04", "国庆(休)"),
            ("2025-10-05", "国庆(休)"),
            ("2025-10-06", "中秋(休)"),
            ("2025-10-07", "国庆(休)"),
            ("2025-10-08", "国庆(休)"),
            ("2025-10-11", "国庆(班)"),
            
            // 2026
            ("2026-01-01", "元旦(休)"),
            ("2026-02-17", "春节(休)"),
            ("2026-02-18", "春节(休)"),
            ("2026-02-19", "春节(休)"),
            ("2026-04-05", "清明(休)"),
            ("2026-05-01", "劳动节(休)"),
            ("2026-06-19", "端午(休)"),
            ("2026-09-25", "中秋(休)"),
            ("2026-10-01", "国庆(休)"),
            ("2026-10-02", "国庆(休)"),
            ("2026-10-03", "国庆(休)"),
        ]
        
        holidays = builtInHolidays.compactMap { (dateStr, name) in
            guard let date = dateFormatter.date(from: dateStr) else { return nil }
            return HolidayEvent(name: name, date: date, endDate: nil)
        }
    }
    
    /// 重新加载所有启用的订阅
    func reloadAllSubscriptions() async {
        isLoading = true
        defer { isLoading = false }
        
        // 先加载内置节假日
        loadBuiltInHolidays()
        var allEvents = holidays
        
        // 获取所有启用的订阅
        let subscriptions = SettingsManager.shared.calendarSubscriptions.filter { $0.isEnabled }
        
        for subscription in subscriptions {
            do {
                // 从 app 内部本地文件加载
                guard let localPath = SettingsManager.shared.getLocalCalendarPath(for: subscription) else {
                    print("[ICS] 无法获取本地文件路径: \(subscription.name)")
                    continue
                }
                
                let icsString = try String(contentsOf: localPath, encoding: .utf8)
                let events = parseICS(icsString)
                allEvents.append(contentsOf: events)
                print("[ICS] 成功加载日历: \(subscription.name) (\(events.count) 个事件)")
            } catch {
                print("[ICS] 加载日历失败 \(subscription.name): \(error.localizedDescription)")
            }
        }
        
        // 去重（按日期和名称）
        var seen = Set<String>()
        holidays = allEvents.filter { event in
            let key = "\(event.date.timeIntervalSince1970)-\(event.name)"
            if seen.contains(key) { return false }
            seen.insert(key)
            return true
        }
    }
    
    private func parseICS(_ icsString: String) -> [HolidayEvent] {
        var events: [HolidayEvent] = []
        
        let normalizedString = icsString
            .replacingOccurrences(of: "\r\n", with: "\n")
            .replacingOccurrences(of: "\r", with: "\n")
        
        let lines = normalizedString.components(separatedBy: "\n")
        
        var currentEvent: (name: String?, startDate: Date?, endDate: Date?) = (nil, nil, nil)
        var inEvent = false
        
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyyMMdd"
        dateFormatter.timeZone = TimeZone(identifier: "UTC")
        
        for line in lines {
            let trimmedLine = line.trimmingCharacters(in: .whitespacesAndNewlines)
            
            if trimmedLine == "BEGIN:VEVENT" {
                inEvent = true
                currentEvent = (nil, nil, nil)
            } else if trimmedLine == "END:VEVENT" {
                if let name = currentEvent.name, let startDate = currentEvent.startDate {
                    events.append(HolidayEvent(name: name, date: startDate, endDate: currentEvent.endDate))
                }
                inEvent = false
            } else if inEvent {
                if trimmedLine.hasPrefix("SUMMARY") {
                    if let colonIndex = trimmedLine.firstIndex(of: ":") {
                        let value = String(trimmedLine[trimmedLine.index(after: colonIndex)...])
                        currentEvent.name = value.trimmingCharacters(in: .whitespaces)
                    }
                }
                else if trimmedLine.hasPrefix("DTSTART") {
                    if let colonIndex = trimmedLine.firstIndex(of: ":") {
                        let dateStr = String(trimmedLine[trimmedLine.index(after: colonIndex)...].prefix(8))
                        currentEvent.startDate = dateFormatter.date(from: dateStr)
                    }
                }
                else if trimmedLine.hasPrefix("DTEND") {
                    if let colonIndex = trimmedLine.firstIndex(of: ":") {
                        let dateStr = String(trimmedLine[trimmedLine.index(after: colonIndex)...].prefix(8))
                        currentEvent.endDate = dateFormatter.date(from: dateStr)
                    }
                }
            }
        }
        
        return events
    }
    
    func holidaysForDate(_ date: Date) -> [HolidayEvent] {
        let startOfDay = calendar.startOfDay(for: date)
        
        return holidays.filter { event in
            let eventStartOfDay = calendar.startOfDay(for: event.date)
            
            if let endDate = event.endDate {
                let eventEndOfDay = calendar.startOfDay(for: endDate)
                return startOfDay >= eventStartOfDay && startOfDay < eventEndOfDay
            }
            return calendar.isDate(startOfDay, inSameDayAs: eventStartOfDay)
        }
    }
}

// MARK: - Holiday Range (连续假期)
struct HolidayRange: Identifiable {
    let id = UUID()
    let name: String
    let startDate: Date
    let endDate: Date
    let isRest: Bool  // true=休息日, false=补班日
    
    var color: Color {
        isRest ? .green : .orange
    }
}

// MARK: - Custom Calendar View
struct CalendarGridView: View {
    @Binding var selectedDate: Date
    @State private var displayedMonth: Date = Date()
    @ObservedObject private var calendarService = ICSCalendarService.shared
    
    private let calendar = Calendar.current
    private let weekdays = ["日", "一", "二", "三", "四", "五", "六"]
    private let cellWidth: CGFloat = 50
    private let cellHeight: CGFloat = 40
    private let eventRowHeight: CGFloat = 16
    
    private var monthYearString: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy年M月"
        return formatter.string(from: displayedMonth)
    }
    
    private var daysInMonth: [Date?] {
        let interval = calendar.dateInterval(of: .month, for: displayedMonth)!
        let firstDay = interval.start
        let firstWeekday = calendar.component(.weekday, from: firstDay)
        
        var days: [Date?] = Array(repeating: nil, count: firstWeekday - 1)
        
        var current = firstDay
        while current < interval.end {
            days.append(current)
            current = calendar.date(byAdding: .day, value: 1, to: current)!
        }
        
        while days.count % 7 != 0 {
            days.append(nil)
        }
        
        return days
    }
    
    /// 获取当月的连续假期范围
    private var holidayRanges: [HolidayRange] {
        let holidays = calendarService.holidays
        guard !holidays.isEmpty else { return [] }
        
        // 按日期排序
        let sortedHolidays = holidays.sorted { $0.date < $1.date }
        
        var ranges: [HolidayRange] = []
        var currentRange: (name: String, start: Date, end: Date, isRest: Bool)?
        
        for holiday in sortedHolidays {
            let isRest = holiday.name.contains("休")
            let isWork = holiday.name.contains("班")
            let baseName = holiday.name
                .replacingOccurrences(of: "(休)", with: "")
                .replacingOccurrences(of: "(班)", with: "")
                .trimmingCharacters(in: .whitespaces)
            
            if let current = currentRange {
                // 检查是否是连续的同类型假期
                let dayDiff = calendar.dateComponents([.day], from: current.end, to: holiday.date).day ?? 0
                let sameType = (current.isRest == isRest) && !isWork
                let sameName = current.name.hasPrefix(baseName.prefix(2))
                
                if dayDiff == 1 && sameType && sameName && !isWork {
                    // 延续当前范围
                    currentRange = (current.name, current.start, holiday.date, current.isRest)
                } else {
                    // 保存当前范围，开始新范围
                    ranges.append(HolidayRange(
                        name: current.name,
                        startDate: current.start,
                        endDate: current.end,
                        isRest: current.isRest
                    ))
                    currentRange = (baseName, holiday.date, holiday.date, isRest && !isWork)
                }
            } else {
                currentRange = (baseName, holiday.date, holiday.date, isRest && !isWork)
            }
        }
        
        // 保存最后一个范围
        if let current = currentRange {
            ranges.append(HolidayRange(
                name: current.name,
                startDate: current.start,
                endDate: current.end,
                isRest: current.isRest
            ))
        }
        
        // 只返回与当前月份相关的范围
        let monthInterval = calendar.dateInterval(of: .month, for: displayedMonth)!
        return ranges.filter { range in
            range.endDate >= monthInterval.start && range.startDate < monthInterval.end
        }
    }
    
    /// 获取某一周的假期条
    private func holidayBarsForWeek(weekIndex: Int) -> [(range: HolidayRange, startCol: Int, endCol: Int)] {
        let weekStart = weekIndex * 7
        let weekDays = Array(daysInMonth[weekStart..<min(weekStart + 7, daysInMonth.count)])
        
        var bars: [(range: HolidayRange, startCol: Int, endCol: Int)] = []
        
        for range in holidayRanges {
            var startCol: Int?
            var endCol: Int?
            
            for (col, day) in weekDays.enumerated() {
                guard let day = day else { continue }
                let dayStart = calendar.startOfDay(for: day)
                let rangeStart = calendar.startOfDay(for: range.startDate)
                let rangeEnd = calendar.startOfDay(for: range.endDate)
                
                if dayStart >= rangeStart && dayStart <= rangeEnd {
                    if startCol == nil { startCol = col }
                    endCol = col
                }
            }
            
            if let start = startCol, let end = endCol {
                bars.append((range, start, end))
            }
        }
        
        return bars
    }
    
    var body: some View {
        VStack(spacing: 8) {
            // 月份导航
            HStack {
                Text(monthYearString)
                    .font(.title2)
                    .fontWeight(.bold)
                
                Spacer()
                
                HStack(spacing: 8) {
                    Button {
                        withAnimation {
                            displayedMonth = calendar.date(byAdding: .month, value: -1, to: displayedMonth)!
                        }
                    } label: {
                        Image(systemName: "chevron.left")
                            .frame(width: 28, height: 28)
                    }
                    .buttonStyle(.plain)
                    
                    Button("今天") {
                        withAnimation {
                            displayedMonth = Date()
                            selectedDate = Date()
                        }
                    }
                    .buttonStyle(.bordered)
                    .controlSize(.small)
                    
                    Button {
                        withAnimation {
                            displayedMonth = calendar.date(byAdding: .month, value: 1, to: displayedMonth)!
                        }
                    } label: {
                        Image(systemName: "chevron.right")
                            .frame(width: 28, height: 28)
                    }
                    .buttonStyle(.plain)
                }
            }
            
            // 星期标题
            HStack(spacing: 0) {
                ForEach(weekdays, id: \.self) { day in
                    Text(day)
                        .font(.caption)
                        .fontWeight(.medium)
                        .foregroundColor(.secondary)
                        .frame(maxWidth: .infinity)
                }
            }
            
            // 日历网格（按周显示）
            let weeks = daysInMonth.count / 7
            VStack(spacing: 0) {
                ForEach(0..<weeks, id: \.self) { weekIndex in
                    VStack(spacing: 0) {
                        // 日期行
                        HStack(spacing: 0) {
                            ForEach(0..<7, id: \.self) { dayIndex in
                                let index = weekIndex * 7 + dayIndex
                                if index < daysInMonth.count, let date = daysInMonth[index] {
                                    DayCell(
                                        date: date,
                                        isSelected: calendar.isDate(date, inSameDayAs: selectedDate),
                                        isToday: calendar.isDateInToday(date),
                                        holidays: []
                                    ) {
                                        selectedDate = date
                                    }
                                    .frame(maxWidth: .infinity)
                                } else {
                                    Color.clear
                                        .frame(maxWidth: .infinity, minHeight: cellHeight)
                                }
                            }
                        }
                        
                        // 假期条行
                        let bars = holidayBarsForWeek(weekIndex: weekIndex)
                        if !bars.isEmpty {
                            GeometryReader { geometry in
                                let colWidth = geometry.size.width / 7
                                
                                ForEach(bars, id: \.range.id) { bar in
                                    let xOffset = CGFloat(bar.startCol) * colWidth + 2
                                    let width = CGFloat(bar.endCol - bar.startCol + 1) * colWidth - 4
                                    
                                    HStack(spacing: 2) {
                                        Text(bar.range.name)
                                            .font(.system(size: 9))
                                            .foregroundColor(.white)
                                            .lineLimit(1)
                                    }
                                    .padding(.horizontal, 4)
                                    .frame(width: width, height: eventRowHeight)
                                    .background(
                                        RoundedRectangle(cornerRadius: 3)
                                            .fill(bar.range.color.opacity(0.8))
                                    )
                                    .offset(x: xOffset, y: 0)
                                }
                            }
                            .frame(height: eventRowHeight + 2)
                        }
                    }
                }
            }
        }
        .onAppear {
            displayedMonth = selectedDate
        }
    }
}

struct DayCell: View {
    let date: Date
    let isSelected: Bool
    let isToday: Bool
    let holidays: [HolidayEvent]
    let onTap: () -> Void
    
    private var dayNumber: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "d"
        return formatter.string(from: date)
    }
    
    var body: some View {
        Button(action: onTap) {
            Text(dayNumber)
                .font(.system(size: 14, weight: isToday ? .bold : .regular))
                .foregroundColor(isSelected ? .white : (isToday ? .accentColor : .primary))
                .frame(maxWidth: .infinity, minHeight: 36)
                .background {
                    if isSelected {
                        Circle()
                            .fill(Color.accentColor)
                            .frame(width: 32, height: 32)
                    } else if isToday {
                        Circle()
                            .stroke(Color.accentColor, lineWidth: 1)
                            .frame(width: 32, height: 32)
                    }
                }
        }
        .buttonStyle(.plain)
    }
}

// MARK: - Date Time Picker View
struct DateTimePickerView: View {
    let title: String
    let icon: String
    let iconColor: Color
    @Binding var date: Date
    @Binding var hasDate: Bool
    let defaultHour: Int
    let defaultMinute: Int
    
    @State private var showTimePicker = false
    @State private var selectedHour: Int = 0
    @State private var selectedMinute: Int = 0
    
    private let calendar = Calendar.current
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            // 标题行
            HStack {
                Image(systemName: icon)
                    .foregroundColor(iconColor)
                    .font(.title3)
                Text(title)
                    .font(.headline)
                Spacer()
                if hasDate {
                    Button {
                        hasDate = false
                    } label: {
                        Text("清除")
                            .font(.caption)
                            .foregroundColor(.secondary)
                    }
                    .buttonStyle(.plain)
                }
            }
            
            if hasDate {
                // 日历
                CalendarGridView(selectedDate: $date)
                
                Divider()
                
                // 时间选择
                HStack {
                    Text("时间")
                        .foregroundColor(.secondary)
                    Spacer()
                    
                    HStack(spacing: 4) {
                        Picker("", selection: $selectedHour) {
                            ForEach(0..<24, id: \.self) { hour in
                                Text(String(format: "%02d", hour)).tag(hour)
                            }
                        }
                        .frame(width: 60)
                        .labelsHidden()
                        
                        Text(":")
                        
                        Picker("", selection: $selectedMinute) {
                            ForEach(0..<60, id: \.self) { minute in
                                Text(String(format: "%02d", minute)).tag(minute)
                            }
                        }
                        .frame(width: 60)
                        .labelsHidden()
                    }
                }
                .onChange(of: selectedHour) { _, newValue in
                    updateDateTime()
                }
                .onChange(of: selectedMinute) { _, newValue in
                    updateDateTime()
                }
            } else {
                Button {
                    hasDate = true
                    // 设置默认时间
                    date = calendar.date(bySettingHour: defaultHour, minute: defaultMinute, second: 0, of: Date()) ?? Date()
                    selectedHour = defaultHour
                    selectedMinute = defaultMinute
                } label: {
                    HStack {
                        Image(systemName: "plus.circle")
                        Text("添加\(title)")
                    }
                    .foregroundColor(.accentColor)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding(.vertical, 8)
                }
                .buttonStyle(.plain)
            }
        }
        .padding()
        .background(Color(.controlBackgroundColor))
        .cornerRadius(12)
        .onAppear {
            selectedHour = calendar.component(.hour, from: date)
            selectedMinute = calendar.component(.minute, from: date)
        }
        .onChange(of: date) { _, newValue in
            selectedHour = calendar.component(.hour, from: newValue)
            selectedMinute = calendar.component(.minute, from: newValue)
        }
    }
    
    private func updateDateTime() {
        if let newDate = calendar.date(bySettingHour: selectedHour, minute: selectedMinute, second: 0, of: date) {
            date = newDate
        }
    }
}

// MARK: - Mac Task Edit Sheet
struct MacTaskEditSheet: View {
    let mode: TaskEditMode
    let onSave: (FlowTask) -> Void
    
    @Environment(\.dismiss) private var dismiss
    
    @State private var title: String = ""
    @State private var startDate: Date = Date()
    @State private var hasStartDate: Bool = false
    @State private var dueDate: Date = Date()
    @State private var hasDueDate: Bool = false
    @State private var subtasks: [Subtask] = []
    @State private var newSubtaskTitle: String = ""
    
    private var existingTask: FlowTask? {
        if case .edit(let task) = mode { return task }
        return nil
    }
    
    var body: some View {
        VStack(spacing: 0) {
            // 标题栏
            HStack {
                Button("取消") {
                    dismiss()
                }
                .keyboardShortcut(.cancelAction)
                
                Spacer()
                
                Text(existingTask != nil ? "编辑任务" : "新建任务")
                    .font(.headline)
                
                Spacer()
                
                Button("保存") {
                    saveTask()
                }
                .keyboardShortcut(.defaultAction)
                .disabled(title.isBlank)
            }
            .padding()
            
            Divider()
            
            // 表单
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    // 基本信息
                    VStack(alignment: .leading, spacing: 8) {
                        Text("任务标题")
                            .font(.headline)
                            .foregroundColor(.secondary)
                        
                        TextField("输入任务标题...", text: $title)
                            .textFieldStyle(.roundedBorder)
                            .font(.title3)
                    }
                    
                    // 开始日期
                    DateTimePickerView(
                        title: "开始日期",
                        icon: "play.circle.fill",
                        iconColor: .green,
                        date: $startDate,
                        hasDate: $hasStartDate,
                        defaultHour: 0,
                        defaultMinute: 0
                    )
                    
                    // 截止日期
                    DateTimePickerView(
                        title: "截止日期",
                        icon: "flag.circle.fill",
                        iconColor: .orange,
                        date: $dueDate,
                        hasDate: $hasDueDate,
                        defaultHour: 23,
                        defaultMinute: 59
                    )
                    
                    // 子任务
                    VStack(alignment: .leading, spacing: 12) {
                        Text("子任务")
                            .font(.headline)
                            .foregroundColor(.secondary)
                        
                        ForEach(subtasks) { subtask in
                            HStack {
                                Image(systemName: "circle")
                                    .foregroundColor(.secondary)
                                    .font(.caption)
                                Text(subtask.title)
                                Spacer()
                                Button {
                                    subtasks.removeAll { $0.id == subtask.id }
                                } label: {
                                    Image(systemName: "xmark.circle.fill")
                                        .foregroundColor(.secondary)
                                }
                                .buttonStyle(.plain)
                            }
                            .padding(.vertical, 6)
                            .padding(.horizontal, 12)
                            .background(Color(.controlBackgroundColor))
                            .cornerRadius(6)
                        }
                        
                        HStack {
                            TextField("添加子任务...", text: $newSubtaskTitle)
                                .textFieldStyle(.roundedBorder)
                                .onSubmit {
                                    addSubtask()
                                }
                            
                            Button {
                                addSubtask()
                            } label: {
                                Image(systemName: "plus.circle.fill")
                                    .font(.title2)
                            }
                            .buttonStyle(.plain)
                            .disabled(newSubtaskTitle.isBlank)
                        }
                    }
                    .padding()
                    .background(Color(.controlBackgroundColor))
                    .cornerRadius(12)
                }
                .padding()
            }
        }
        .frame(width: 500, height: 750)
        .onAppear {
            loadExistingTask()
        }
    }
    
    private func loadExistingTask() {
        guard let task = existingTask else { return }
        title = task.title
        if let date = task.startDate {
            startDate = date
            hasStartDate = true
        }
        if let date = task.dueDate {
            dueDate = date
            hasDueDate = true
        }
        subtasks = task.subtasks
    }
    
    private func addSubtask() {
        guard !newSubtaskTitle.isBlank else { return }
        let subtask = Subtask(title: newSubtaskTitle.trimmed, orderIndex: subtasks.count)
        subtasks.append(subtask)
        newSubtaskTitle = ""
    }
    
    private func saveTask() {
        let task = FlowTask(
            id: existingTask?.id ?? UUID(),
            title: title.trimmed,
            isCompleted: existingTask?.isCompleted ?? false,
            startDate: hasStartDate ? startDate : nil,
            dueDate: hasDueDate ? dueDate : nil,
            subtasks: subtasks,
            createdAt: existingTask?.createdAt ?? Date(),
            updatedAt: Date()
        )
        
        onSave(task)
        dismiss()
    }
}
#endif
