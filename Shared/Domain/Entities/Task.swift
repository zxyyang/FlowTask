import Foundation

// MARK: - Recurring Pattern
enum RecurringPattern: String, Codable, Equatable, Hashable {
    case none = "none"
    case daily = "daily"
    case weekly = "weekly"
    case monthly = "monthly"
}

// MARK: - Task Entity
/// 任务实体，只包含核心待办事项属性
struct FlowTask: Identifiable, Codable, Equatable, Hashable {
    let id: UUID
    var title: String
    var isCompleted: Bool
    var startDate: Date?
    var dueDate: Date?
    var recurringPattern: RecurringPattern
    var subtasks: [Subtask]
    var createdAt: Date
    var updatedAt: Date
    
    init(
        id: UUID = UUID(),
        title: String,
        isCompleted: Bool = false,
        startDate: Date? = nil,
        dueDate: Date? = nil,
        recurringPattern: RecurringPattern = .none,
        subtasks: [Subtask] = [],
        createdAt: Date = Date(),
        updatedAt: Date = Date()
    ) {
        self.id = id
        self.title = title
        self.isCompleted = isCompleted
        self.startDate = startDate
        self.dueDate = dueDate
        self.recurringPattern = recurringPattern
        self.subtasks = subtasks
        self.createdAt = createdAt
        self.updatedAt = updatedAt
    }
    
    /// 计算子任务完成进度 (0.0 - 1.0)
    var subtaskProgress: Double {
        guard !subtasks.isEmpty else { return 0.0 }
        let completedCount = subtasks.filter { $0.isCompleted }.count
        return Double(completedCount) / Double(subtasks.count)
    }
    
    /// 格式化的截止日期字符串
    var formattedDueDate: String? {
        guard let dueDate = dueDate else { return nil }
        let formatter = DateFormatter()
        formatter.dateFormat = "MM月dd日 HH:mm"
        return formatter.string(from: dueDate)
    }
}
