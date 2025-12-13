import Foundation
import SwiftData

// MARK: - Task Model (SwiftData)
/// SwiftData 任务模型
@Model
final class TaskModel {
    @Attribute(.unique) var id: UUID
    var title: String
    var isCompleted: Bool
    var startDate: Date?
    var dueDate: Date?
    var recurringPattern: String
    var createdAt: Date
    var updatedAt: Date
    
    @Relationship(deleteRule: .cascade)
    var subtasks: [SubtaskModel]
    
    init(
        id: UUID = UUID(),
        title: String,
        isCompleted: Bool = false,
        startDate: Date? = nil,
        dueDate: Date? = nil,
        recurringPattern: String = "none",
        subtasks: [SubtaskModel] = [],
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
    
    /// 转换为 Domain 实体
    func toDomain() -> FlowTask {
        FlowTask(
            id: id,
            title: title,
            isCompleted: isCompleted,
            startDate: startDate,
            dueDate: dueDate,
            recurringPattern: RecurringPattern(rawValue: recurringPattern) ?? .none,
            subtasks: subtasks.map { $0.toDomain() },
            createdAt: createdAt,
            updatedAt: updatedAt
        )
    }
    
    /// 从 Domain 实体创建
    static func from(_ task: FlowTask) -> TaskModel {
        TaskModel(
            id: task.id,
            title: task.title,
            isCompleted: task.isCompleted,
            startDate: task.startDate,
            dueDate: task.dueDate,
            recurringPattern: task.recurringPattern.rawValue,
            subtasks: task.subtasks.map { SubtaskModel.from($0) },
            createdAt: task.createdAt,
            updatedAt: task.updatedAt
        )
    }
}

// MARK: - Subtask Model (SwiftData)
@Model
final class SubtaskModel {
    @Attribute(.unique) var id: UUID
    var title: String
    var isCompleted: Bool
    var orderIndex: Int
    
    init(
        id: UUID = UUID(),
        title: String,
        isCompleted: Bool = false,
        orderIndex: Int = 0
    ) {
        self.id = id
        self.title = title
        self.isCompleted = isCompleted
        self.orderIndex = orderIndex
    }
    
    func toDomain() -> Subtask {
        Subtask(
            id: id,
            title: title,
            isCompleted: isCompleted,
            orderIndex: orderIndex
        )
    }
    
    static func from(_ subtask: Subtask) -> SubtaskModel {
        SubtaskModel(
            id: subtask.id,
            title: subtask.title,
            isCompleted: subtask.isCompleted,
            orderIndex: subtask.orderIndex
        )
    }
}

// MARK: - Note Model (SwiftData)
@Model
final class NoteModel {
    @Attribute(.unique) var id: UUID
    var title: String
    var content: String
    var createdAt: Date
    var updatedAt: Date
    var syncStatus: String
    
    init(
        id: UUID = UUID(),
        title: String = "",
        content: String = "",
        createdAt: Date = Date(),
        updatedAt: Date = Date(),
        syncStatus: String = "pending"
    ) {
        self.id = id
        self.title = title
        self.content = content
        self.createdAt = createdAt
        self.updatedAt = updatedAt
        self.syncStatus = syncStatus
    }
    
    func toDomain() -> Note {
        Note(
            id: id,
            title: title,
            content: content,
            createdAt: createdAt,
            updatedAt: updatedAt,
            syncStatus: SyncStatus(rawValue: syncStatus) ?? .pending
        )
    }
    
    static func from(_ note: Note) -> NoteModel {
        NoteModel(
            id: note.id,
            title: note.title,
            content: note.content,
            createdAt: note.createdAt,
            updatedAt: note.updatedAt,
            syncStatus: note.syncStatus.rawValue
        )
    }
}

// MARK: - Focus Session Model (SwiftData)
@Model
final class FocusSessionModel {
    @Attribute(.unique) var id: UUID
    var taskId: UUID
    var startTime: Date
    var endTime: Date?
    var duration: TimeInterval
    var isCompleted: Bool
    
    init(
        id: UUID = UUID(),
        taskId: UUID,
        startTime: Date = Date(),
        endTime: Date? = nil,
        duration: TimeInterval = 0,
        isCompleted: Bool = false
    ) {
        self.id = id
        self.taskId = taskId
        self.startTime = startTime
        self.endTime = endTime
        self.duration = duration
        self.isCompleted = isCompleted
    }
    
    func toDomain() -> FocusSession {
        FocusSession(
            id: id,
            taskId: taskId,
            startTime: startTime,
            endTime: endTime,
            duration: duration,
            isCompleted: isCompleted
        )
    }
    
    static func from(_ session: FocusSession) -> FocusSessionModel {
        FocusSessionModel(
            id: session.id,
            taskId: session.taskId,
            startTime: session.startTime,
            endTime: session.endTime,
            duration: session.duration,
            isCompleted: session.isCompleted
        )
    }
}
