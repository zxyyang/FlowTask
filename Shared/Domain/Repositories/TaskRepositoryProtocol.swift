import Foundation

// MARK: - Task Repository Protocol
/// 任务仓库协议，定义任务数据操作接口
protocol TaskRepositoryProtocol {
    /// 获取所有任务
    func fetchAllTasks() async throws -> [FlowTask]
    
    /// 根据 ID 获取单个任务
    func fetchTask(by id: UUID) async throws -> FlowTask?
    
    /// 创建新任务
    func createTask(_ task: FlowTask) async throws -> FlowTask
    
    /// 更新任务
    func updateTask(_ task: FlowTask) async throws -> FlowTask
    
    /// 删除任务
    func deleteTask(_ task: FlowTask) async throws
    
    /// 搜索任务
    func searchTasks(query: String) async throws -> [FlowTask]
    
    /// 获取即将到期的任务
    func fetchUpcomingTasks(limit: Int) async throws -> [FlowTask]
    
    /// 获取今日完成的任务
    func fetchCompletedTasksToday() async throws -> [FlowTask]
    
    /// 获取待完成的任务
    func fetchPendingTasks() async throws -> [FlowTask]
}
