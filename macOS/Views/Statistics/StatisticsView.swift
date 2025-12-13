import SwiftUI

#if os(macOS)

// MARK: - Statistics View
struct StatisticsView: View {
    @ObservedObject private var sharedData = SharedDataManager.shared
    @State private var selectedPeriod: StatsPeriod = .week
    @State private var animateCards = false
    
    var body: some View {
        ScrollView {
            VStack(spacing: 24) {
                // 顶部欢迎卡片
                welcomeCard
                
                // 统计卡片行
                statsCardsRow
                    .opacity(animateCards ? 1 : 0)
                    .offset(y: animateCards ? 0 : 20)
                
                // 周趋势图
                weeklyTrendCard
                    .opacity(animateCards ? 1 : 0)
                    .offset(y: animateCards ? 0 : 20)
                
                // 任务分类统计
                categoryStatsCard
                    .opacity(animateCards ? 1 : 0)
                    .offset(y: animateCards ? 0 : 20)
                
                // 今日完成列表
                completedTodayCard
                    .opacity(animateCards ? 1 : 0)
                    .offset(y: animateCards ? 0 : 20)
                
                // 逾期任务
                if !overdueTasks.isEmpty {
                    overdueTasksCard
                        .opacity(animateCards ? 1 : 0)
                        .offset(y: animateCards ? 0 : 20)
                }
                
                // 效率分析
                productivityCard
                    .opacity(animateCards ? 1 : 0)
                    .offset(y: animateCards ? 0 : 20)
            }
            .padding(24)
        }
        .background(
            LinearGradient(
                colors: [
                    Color(nsColor: .windowBackgroundColor),
                    Color.accentColor.opacity(0.02)
                ],
                startPoint: .top,
                endPoint: .bottom
            )
        )
        .navigationTitle("统计")
        .onAppear {
            withAnimation(.spring(response: 0.6, dampingFraction: 0.8).delay(0.1)) {
                animateCards = true
            }
        }
    }
    
    // MARK: - Data
    private var todayCompletedTasks: [FlowTask] {
        let calendar = Calendar.current
        return sharedData.tasks.filter { task in
            task.isCompleted && calendar.isDateInToday(task.updatedAt)
        }.sorted { $0.updatedAt > $1.updatedAt }
    }
    
    private var todayCompletedCount: Int {
        todayCompletedTasks.count
    }
    
    private var pendingCount: Int {
        sharedData.tasks.filter { !$0.isCompleted }.count
    }
    
    private var totalTasks: Int {
        sharedData.tasks.count
    }
    
    private var completionRate: Double {
        guard totalTasks > 0 else { return 0 }
        let completed = sharedData.tasks.filter { $0.isCompleted }.count
        return Double(completed) / Double(totalTasks) * 100
    }
    
    private var overdueTasks: [FlowTask] {
        let now = Date()
        return sharedData.tasks.filter { task in
            !task.isCompleted && task.dueDate != nil && task.dueDate! < now
        }.sorted { ($0.dueDate ?? now) < ($1.dueDate ?? now) }
    }
    
    private var tasksWithSubtasks: Int {
        sharedData.tasks.filter { !$0.subtasks.isEmpty }.count
    }
    
    private var totalSubtasks: Int {
        sharedData.tasks.reduce(0) { $0 + $1.subtasks.count }
    }
    
    private var completedSubtasks: Int {
        sharedData.tasks.reduce(0) { total, task in
            total + task.subtasks.filter { $0.isCompleted }.count
        }
    }
    
    private var averageCompletionTime: String {
        let completedTasks = sharedData.tasks.filter { $0.isCompleted }
        guard !completedTasks.isEmpty else { return "暂无数据" }
        
        let totalHours = completedTasks.compactMap { task -> Double? in
            guard let dueDate = task.dueDate else { return nil }
            let hours = task.updatedAt.timeIntervalSince(task.createdAt) / 3600
            return hours
        }.reduce(0, +)
        
        let avgHours = totalHours / Double(completedTasks.count)
        
        if avgHours < 1 {
            return String(format: "%.0f 分钟", avgHours * 60)
        } else if avgHours < 24 {
            return String(format: "%.1f 小时", avgHours)
        } else {
            return String(format: "%.1f 天", avgHours / 24)
        }
    }
    
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
    
    private var weeklyData: [DayStats] {
        let calendar = Calendar.current
        let today = calendar.startOfDay(for: Date())
        
        return (0..<7).reversed().map { daysAgo in
            let date = calendar.date(byAdding: .day, value: -daysAgo, to: today)!
            let dayStart = calendar.startOfDay(for: date)
            let dayEnd = calendar.date(byAdding: .day, value: 1, to: dayStart)!
            
            let completed = sharedData.tasks.filter { task in
                task.isCompleted && task.updatedAt >= dayStart && task.updatedAt < dayEnd
            }.count
            
            let created = sharedData.tasks.filter { task in
                task.createdAt >= dayStart && task.createdAt < dayEnd
            }.count
            
            return DayStats(date: date, completed: completed, created: created)
        }
    }
    
    // MARK: - Welcome Card
    private var welcomeCard: some View {
        HStack(spacing: 20) {
            VStack(alignment: .leading, spacing: 8) {
                HStack(spacing: 8) {
                    Image(systemName: greetingIcon)
                        .font(.title)
                        .foregroundColor(.orange)
                    
                    Text(greetingText)
                        .font(.title)
                        .fontWeight(.bold)
                }
                
                Text(Date().formatted(date: .complete, time: .omitted))
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                
                if todayCompletedCount > 0 {
                    Text("今天已完成 \(todayCompletedCount) 个任务，继续加油！")
                        .font(.callout)
                        .foregroundColor(.green)
                        .padding(.top, 4)
                } else {
                    Text("开始新的一天，完成你的目标！")
                        .font(.callout)
                        .foregroundColor(.secondary)
                        .padding(.top, 4)
                }
            }
            
            Spacer()
            
            // 圆形进度指示器
            ZStack {
                Circle()
                    .stroke(Color.gray.opacity(0.2), lineWidth: 12)
                    .frame(width: 100, height: 100)
                
                Circle()
                    .trim(from: 0, to: completionRate / 100)
                    .stroke(
                        LinearGradient(
                            colors: [Color.green, Color.accentColor],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        style: StrokeStyle(lineWidth: 12, lineCap: .round)
                    )
                    .frame(width: 100, height: 100)
                    .rotationEffect(.degrees(-90))
                
                VStack(spacing: 2) {
                    Text(String(format: "%.0f%%", completionRate))
                        .font(.system(size: 20, weight: .bold, design: .rounded))
                    Text("完成率")
                        .font(.caption2)
                        .foregroundColor(.secondary)
                }
            }
        }
        .padding(24)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(
                    LinearGradient(
                        colors: [
                            Color.accentColor.opacity(0.1),
                            Color.purple.opacity(0.05)
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .shadow(color: Color.accentColor.opacity(0.1), radius: 10, y: 5)
        )
    }
    
    // MARK: - Stats Cards Row
    private var statsCardsRow: some View {
        LazyVGrid(columns: [
            GridItem(.flexible()),
            GridItem(.flexible()),
            GridItem(.flexible()),
            GridItem(.flexible())
        ], spacing: 16) {
            StatsCard(
                icon: "checkmark.circle.fill",
                iconColor: .green,
                title: "今日完成",
                value: "\(todayCompletedCount)",
                subtitle: "个任务",
                trend: todayCompletedCount > 0 ? .up : .neutral
            )
            
            StatsCard(
                icon: "circle",
                iconColor: .orange,
                title: "待完成",
                value: "\(pendingCount)",
                subtitle: "个任务",
                trend: .neutral
            )
            
            StatsCard(
                icon: "list.bullet.rectangle",
                iconColor: .purple,
                title: "子任务",
                value: "\(completedSubtasks)/\(totalSubtasks)",
                subtitle: "已完成",
                trend: totalSubtasks > 0 ? .neutral : .neutral
            )
            
            StatsCard(
                icon: "exclamationmark.triangle.fill",
                iconColor: .red,
                title: "已逾期",
                value: "\(overdueTasks.count)",
                subtitle: "需处理",
                trend: overdueTasks.isEmpty ? .neutral : .down
            )
        }
    }
    
    // MARK: - Weekly Trend Card
    private var weeklyTrendCard: some View {
        VStack(alignment: .leading, spacing: 16) {
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    Text("本周趋势")
                        .font(.headline)
                    Text("过去7天的任务完成情况")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                
                Spacer()
                
                HStack(spacing: 16) {
                    legendItem(color: .green, text: "完成")
                    legendItem(color: .accentColor, text: "新建")
                }
            }
            
            // 图表
            WeeklyChart(data: weeklyData)
                .frame(height: 180)
        }
        .padding(20)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(Color(nsColor: .controlBackgroundColor))
                .shadow(color: Color.black.opacity(0.05), radius: 8, y: 4)
        )
    }
    
    // MARK: - Category Stats Card
    private var categoryStatsCard: some View {
        VStack(alignment: .leading, spacing: 16) {
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    Text("任务分类统计")
                        .font(.headline)
                    Text("不同类型任务的分布情况")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                
                Spacer()
            }
            
            HStack(spacing: 20) {
                // 总任务数
                VStack(spacing: 8) {
                    Text("\(totalTasks)")
                        .font(.system(size: 32, weight: .bold, design: .rounded))
                        .foregroundColor(.accentColor)
                    Text("总任务")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, 16)
                .background(
                    RoundedRectangle(cornerRadius: 10)
                        .fill(Color.accentColor.opacity(0.1))
                )
                
                // 有子任务的任务
                VStack(spacing: 8) {
                    Text("\(tasksWithSubtasks)")
                        .font(.system(size: 32, weight: .bold, design: .rounded))
                        .foregroundColor(.purple)
                    Text("含子任务")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, 16)
                .background(
                    RoundedRectangle(cornerRadius: 10)
                        .fill(Color.purple.opacity(0.1))
                )
                
                // 平均完成时间
                VStack(spacing: 8) {
                    Text(averageCompletionTime)
                        .font(.system(size: 20, weight: .bold, design: .rounded))
                        .foregroundColor(.orange)
                        .lineLimit(1)
                        .minimumScaleFactor(0.5)
                    Text("平均用时")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, 16)
                .background(
                    RoundedRectangle(cornerRadius: 10)
                        .fill(Color.orange.opacity(0.1))
                )
            }
        }
        .padding(20)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(Color(nsColor: .controlBackgroundColor))
                .shadow(color: Color.black.opacity(0.05), radius: 8, y: 4)
        )
    }
    
    // MARK: - Productivity Card
    private var productivityCard: some View {
        VStack(alignment: .leading, spacing: 16) {
            HStack {
                Image(systemName: "chart.line.uptrend.xyaxis")
                    .foregroundColor(.green)
                Text("效率分析")
                    .font(.headline)
                
                Spacer()
            }
            
            VStack(spacing: 12) {
                productivityRow(
                    icon: "flame.fill",
                    iconColor: .orange,
                    title: "连续完成天数",
                    value: "3 天",
                    description: "保持良好的工作习惯"
                )
                
                Divider()
                
                productivityRow(
                    icon: "star.fill",
                    iconColor: .yellow,
                    title: "本周完成任务",
                    value: "\(weeklyData.reduce(0) { $0 + $1.completed }) 个",
                    description: "比上周增加 20%"
                )
                
                Divider()
                
                productivityRow(
                    icon: "clock.fill",
                    iconColor: .blue,
                    title: "最佳工作时段",
                    value: "上午 9-12 点",
                    description: "完成任务最多的时间段"
                )
            }
            .padding(16)
            .background(Color(nsColor: .textBackgroundColor))
            .cornerRadius(10)
        }
        .padding(20)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(Color(nsColor: .controlBackgroundColor))
                .shadow(color: Color.black.opacity(0.05), radius: 8, y: 4)
        )
    }
    
    private func productivityRow(icon: String, iconColor: Color, title: String, value: String, description: String) -> some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .font(.title3)
                .foregroundColor(iconColor)
                .frame(width: 32, height: 32)
                .background(iconColor.opacity(0.15))
                .cornerRadius(8)
            
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                
                Text(value)
                    .font(.system(size: 18, weight: .semibold))
                
                Text(description)
                    .font(.caption)
                    .foregroundColor(.secondary)
            }
            
            Spacer()
        }
    }
    
    private func legendItem(color: Color, text: String) -> some View {
        HStack(spacing: 6) {
            Circle()
                .fill(color)
                .frame(width: 8, height: 8)
            Text(text)
                .font(.caption)
                .foregroundColor(.secondary)
        }
    }
    
    // MARK: - Completed Today Card
    private var completedTodayCard: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Image(systemName: "checkmark.circle.fill")
                    .foregroundColor(.green)
                Text("今日完成")
                    .font(.headline)
                
                Spacer()
                
                Text("\(todayCompletedCount) 个任务")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            
            if todayCompletedTasks.isEmpty {
                HStack {
                    Spacer()
                    VStack(spacing: 8) {
                        Image(systemName: "tray")
                            .font(.system(size: 32))
                            .foregroundColor(.secondary)
                        Text("今天还没有完成任务")
                            .font(.subheadline)
                            .foregroundColor(.secondary)
                    }
                    .padding(.vertical, 24)
                    Spacer()
                }
            } else {
                VStack(spacing: 0) {
                    ForEach(Array(todayCompletedTasks.prefix(5).enumerated()), id: \.element.id) { index, task in
                        completedTaskRow(task)
                        if index < min(todayCompletedTasks.count - 1, 4) {
                            Divider()
                        }
                    }
                }
                .background(Color(nsColor: .textBackgroundColor))
                .cornerRadius(8)
            }
        }
        .padding(20)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(Color(nsColor: .controlBackgroundColor))
        )
    }
    
    private func completedTaskRow(_ task: FlowTask) -> some View {
        HStack(spacing: 12) {
            Image(systemName: "checkmark.circle.fill")
                .foregroundColor(.green)
            
            Text(task.title)
                .lineLimit(1)
            
            Spacer()
            
            Text(task.updatedAt.formattedTime)
                .font(.caption)
                .foregroundColor(.secondary)
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 10)
    }
    
    // MARK: - Overdue Tasks Card
    private var overdueTasksCard: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Image(systemName: "exclamationmark.triangle.fill")
                    .foregroundColor(.red)
                Text("逾期任务")
                    .font(.headline)
                
                Spacer()
                
                Text("\(overdueTasks.count) 个任务")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            
            VStack(spacing: 0) {
                ForEach(Array(overdueTasks.prefix(5).enumerated()), id: \.element.id) { index, task in
                    overdueTaskRow(task)
                    if index < min(overdueTasks.count - 1, 4) {
                        Divider()
                    }
                }
            }
            .background(Color(nsColor: .textBackgroundColor))
            .cornerRadius(8)
        }
        .padding(20)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(Color.red.opacity(0.05))
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color.red.opacity(0.2), lineWidth: 1)
                )
        )
    }
    
    private func overdueTaskRow(_ task: FlowTask) -> some View {
        HStack(spacing: 12) {
            Image(systemName: "circle")
                .foregroundColor(.red)
            
            VStack(alignment: .leading, spacing: 2) {
                Text(task.title)
                    .lineLimit(1)
                
                if let dueDate = task.dueDate {
                    Text("逾期 \(daysOverdue(dueDate)) 天")
                        .font(.caption)
                        .foregroundColor(.red)
                }
            }
            
            Spacer()
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 10)
    }
    
    private func daysOverdue(_ dueDate: Date) -> Int {
        let calendar = Calendar.current
        let days = calendar.dateComponents([.day], from: dueDate, to: Date()).day ?? 0
        return max(1, days)
    }
}

// MARK: - Stats Card
struct StatsCard: View {
    let icon: String
    let iconColor: Color
    let title: String
    let value: String
    let subtitle: String
    var trend: TrendDirection = .neutral
    
    enum TrendDirection {
        case up, down, neutral
        
        var icon: String {
            switch self {
            case .up: return "arrow.up.right"
            case .down: return "arrow.down.right"
            case .neutral: return ""
            }
        }
        
        var color: Color {
            switch self {
            case .up: return .green
            case .down: return .red
            case .neutral: return .clear
            }
        }
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Image(systemName: icon)
                    .font(.title2)
                    .foregroundColor(iconColor)
                    .frame(width: 36, height: 36)
                    .background(iconColor.opacity(0.12))
                    .cornerRadius(8)
                
                Spacer()
                
                if trend != .neutral {
                    Image(systemName: trend.icon)
                        .font(.caption)
                        .foregroundColor(trend.color)
                }
            }
            
            Text(title)
                .font(.caption)
                .foregroundColor(.secondary)
            
            Text(value)
                .font(.system(size: 28, weight: .bold, design: .rounded))
            
            Text(subtitle)
                .font(.caption2)
                .foregroundColor(.secondary)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(Color(nsColor: .controlBackgroundColor))
                .shadow(color: Color.black.opacity(0.05), radius: 8, y: 4)
        )
    }
}

// MARK: - Day Stats
struct DayStats: Identifiable {
    let id = UUID()
    let date: Date
    let completed: Int
    let created: Int
    
    var dayName: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "E"
        formatter.locale = Locale(identifier: "zh_CN")
        return formatter.string(from: date)
    }
    
    var isToday: Bool {
        Calendar.current.isDateInToday(date)
    }
}

// MARK: - Weekly Chart
struct WeeklyChart: View {
    let data: [DayStats]
    
    private var maxValue: Int {
        let maxCompleted = data.map { $0.completed }.max() ?? 0
        let maxCreated = data.map { $0.created }.max() ?? 0
        return max(max(maxCompleted, maxCreated), 1)
    }
    
    var body: some View {
        HStack(alignment: .bottom, spacing: 12) {
            ForEach(data) { day in
                VStack(spacing: 8) {
                    // 柱状图
                    HStack(alignment: .bottom, spacing: 4) {
                        // 完成数
                        RoundedRectangle(cornerRadius: 4)
                            .fill(Color.green)
                            .frame(width: 16, height: barHeight(for: day.completed))
                        
                        // 新建数
                        RoundedRectangle(cornerRadius: 4)
                            .fill(Color.accentColor)
                            .frame(width: 16, height: barHeight(for: day.created))
                    }
                    .frame(height: 120, alignment: .bottom)
                    
                    // 日期标签
                    Text(day.dayName)
                        .font(.caption)
                        .fontWeight(day.isToday ? .bold : .regular)
                        .foregroundColor(day.isToday ? .accentColor : .secondary)
                }
                .frame(maxWidth: .infinity)
            }
        }
    }
    
    private func barHeight(for value: Int) -> CGFloat {
        guard maxValue > 0 else { return 4 }
        let height = CGFloat(value) / CGFloat(maxValue) * 100
        return max(height, value > 0 ? 8 : 4)
    }
}

// MARK: - Stats Period
enum StatsPeriod: String, CaseIterable {
    case week = "本周"
    case month = "本月"
    case all = "全部"
}

#endif
