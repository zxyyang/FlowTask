import Foundation

// MARK: - Subtask Entity
/// 子任务实体
struct Subtask: Identifiable, Codable, Equatable, Hashable {
    let id: UUID
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
}
