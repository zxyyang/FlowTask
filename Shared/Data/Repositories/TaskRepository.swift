import Foundation
import SwiftData

// MARK: - Task Repository
/// 任务仓库实现（SwiftData）
@MainActor
final class TaskRepository: TaskRepositoryProtocol {
    private let context: ModelContext
    
    init(context: ModelContext) {
        self.context = context
    }
    
    /// 使用共享数据容器的便捷初始化器
    convenience init() {
        self.init(context: DataContainer.shared.mainContext)
    }
    
    // MARK: - Fetch All Tasks
    func fetchAllTasks() async throws -> [FlowTask] {
        let descriptor = FetchDescriptor<TaskModel>(
            sortBy: [SortDescriptor(\.createdAt, order: .reverse)]
        )
        
        let models = try context.fetch(descriptor)
        return models.map { $0.toDomain() }
    }
    
    // MARK: - Fetch Task By ID
    func fetchTask(by id: UUID) async throws -> FlowTask? {
        let predicate = #Predicate<TaskModel> { $0.id == id }
        var descriptor = FetchDescriptor<TaskModel>(predicate: predicate)
        descriptor.fetchLimit = 1
        
        let models = try context.fetch(descriptor)
        return models.first?.toDomain()
    }
    
    // MARK: - Create Task
    func createTask(_ task: FlowTask) async throws -> FlowTask {
        // 验证标题
        guard case .success = TaskValidator.validateTitle(task.title) else {
            throw FlowTaskError.validationError(.emptyTitle)
        }
        
        let model = TaskModel.from(task)
        context.insert(model)
        try context.save()
        
        return model.toDomain()
    }
    
    // MARK: - Update Task
    func updateTask(_ task: FlowTask) async throws -> FlowTask {
        let predicate = #Predicate<TaskModel> { $0.id == task.id }
        var descriptor = FetchDescriptor<TaskModel>(predicate: predicate)
        descriptor.fetchLimit = 1
        
        guard let model = try context.fetch(descriptor).first else {
            throw FlowTaskError.storageError(.notFound)
        }
        
        // 更新属性
        model.title = task.title
        model.isCompleted = task.isCompleted
        model.dueDate = task.dueDate
        model.recurringPattern = task.recurringPattern.rawValue
        model.updatedAt = Date()
        
        // 更新子任务
        model.subtasks.removeAll()
        for subtask in task.subtasks {
            model.subtasks.append(SubtaskModel.from(subtask))
        }
        
        try context.save()
        return model.toDomain()
    }
    
    // MARK: - Delete Task
    func deleteTask(_ task: FlowTask) async throws {
        let predicate = #Predicate<TaskModel> { $0.id == task.id }
        var descriptor = FetchDescriptor<TaskModel>(predicate: predicate)
        descriptor.fetchLimit = 1
        
        guard let model = try context.fetch(descriptor).first else {
            throw FlowTaskError.storageError(.notFound)
        }
        
        context.delete(model)
        try context.save()
    }
    
    // MARK: - Search Tasks
    func searchTasks(query: String) async throws -> [FlowTask] {
        let predicate = #Predicate<TaskModel> { task in
            task.title.localizedStandardContains(query)
        }
        
        let descriptor = FetchDescriptor<TaskModel>(
            predicate: predicate,
            sortBy: [SortDescriptor(\.createdAt, order: .reverse)]
        )
        
        let models = try context.fetch(descriptor)
        return models.map { $0.toDomain() }
    }
    
    
    // MARK: - Fetch Upcoming Tasks
    func fetchUpcomingTasks(limit: Int) async throws -> [FlowTask] {
        let now = Date()
        let predicate = #Predicate<TaskModel> { task in
            task.isCompleted == false && task.dueDate != nil
        }
        
        var descriptor = FetchDescriptor<TaskModel>(
            predicate: predicate,
            sortBy: [SortDescriptor(\.dueDate, order: .forward)]
        )
        descriptor.fetchLimit = limit
        
        let models = try context.fetch(descriptor)
        return models.map { $0.toDomain() }
    }
    
    // MARK: - Fetch Completed Tasks Today
    func fetchCompletedTasksToday() async throws -> [FlowTask] {
        let calendar = Calendar.current
        let startOfDay = calendar.startOfDay(for: Date())
        let endOfDay = calendar.date(byAdding: .day, value: 1, to: startOfDay)!
        
        let predicate = #Predicate<TaskModel> { task in
            task.isCompleted == true &&
            task.updatedAt >= startOfDay &&
            task.updatedAt < endOfDay
        }
        
        let descriptor = FetchDescriptor<TaskModel>(
            predicate: predicate,
            sortBy: [SortDescriptor(\.updatedAt, order: .reverse)]
        )
        
        let models = try context.fetch(descriptor)
        return models.map { $0.toDomain() }
    }
    
    // MARK: - Fetch Pending Tasks
    func fetchPendingTasks() async throws -> [FlowTask] {
        let predicate = #Predicate<TaskModel> { task in
            task.isCompleted == false
        }
        
        let descriptor = FetchDescriptor<TaskModel>(
            predicate: predicate,
            sortBy: [SortDescriptor(\.createdAt, order: .reverse)]
        )
        
        let models = try context.fetch(descriptor)
        return models.map { $0.toDomain() }
    }
}
