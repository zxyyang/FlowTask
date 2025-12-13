import Foundation
import SwiftUI
import Combine

#if os(macOS)
// MARK: - Task List View Model
@MainActor
class TaskListViewModel: ObservableObject {
    @Published var showAddTask = false
    @Published var editingTask: FlowTask?
    @Published var isLoading = false
    
    private var cancellables = Set<AnyCancellable>()
    
    var tasks: [FlowTask] {
        SharedDataManager.shared.tasks
    }
    
    init() {
        // 监听 SharedDataManager 的变化
        SharedDataManager.shared.$tasks
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.objectWillChange.send()
            }
            .store(in: &cancellables)
        
        SharedDataManager.shared.$lastUpdateTime
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.objectWillChange.send()
            }
            .store(in: &cancellables)
    }
    
    func loadTasks() async {
        isLoading = true
        defer { isLoading = false }
        await SharedDataManager.shared.loadTasks()
    }
    
    func createTask(_ task: FlowTask) {
        SharedDataManager.shared.addFullTask(task)
    }
    
    func updateTask(_ task: FlowTask) {
        SharedDataManager.shared.updateTask(task)
    }
    
    func deleteTask(_ task: FlowTask) {
        SharedDataManager.shared.deleteTask(task)
    }
    
    func toggleComplete(_ task: FlowTask) {
        SharedDataManager.shared.toggleTask(task)
    }
}
#endif
