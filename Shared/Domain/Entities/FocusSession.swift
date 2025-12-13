import Foundation

// MARK: - Focus Session
/// 专注模式会话
struct FocusSession: Identifiable, Codable, Equatable {
    let id: UUID
    let taskId: UUID
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
    
    /// 计算实际持续时间
    var actualDuration: TimeInterval {
        if let endTime = endTime {
            return endTime.timeIntervalSince(startTime)
        }
        return Date().timeIntervalSince(startTime)
    }
}

// MARK: - Focus Mode State
/// 专注模式状态
enum FocusState: Equatable {
    case inactive
    case active(taskId: UUID, startTime: Date)
    case paused(taskId: UUID, elapsed: TimeInterval)
}
