import Foundation
import SwiftData

// MARK: - Data Container
/// SwiftData 数据容器配置
@MainActor
final class DataContainer {
    static let shared = DataContainer()
    
    let container: ModelContainer
    
    private init() {
        let schema = Schema([
            TaskModel.self,
            SubtaskModel.self,
            NoteModel.self,
            FocusSessionModel.self
        ])
        
        let modelConfiguration = ModelConfiguration(
            schema: schema,
            isStoredInMemoryOnly: false,
            allowsSave: true
        )
        
        do {
            container = try ModelContainer(
                for: schema,
                configurations: [modelConfiguration]
            )
        } catch {
            fatalError("无法创建 ModelContainer: \(error)")
        }
    }
    
    /// 获取主上下文
    var mainContext: ModelContext {
        container.mainContext
    }
    
    /// 创建新的后台上下文
    func newBackgroundContext() -> ModelContext {
        ModelContext(container)
    }
}

// MARK: - Preview Container
/// 用于 SwiftUI 预览的内存数据容器
@MainActor
final class PreviewDataContainer {
    static let shared = PreviewDataContainer()
    
    let container: ModelContainer
    
    private init() {
        let schema = Schema([
            TaskModel.self,
            SubtaskModel.self,
            NoteModel.self,
            FocusSessionModel.self
        ])
        
        let modelConfiguration = ModelConfiguration(
            schema: schema,
            isStoredInMemoryOnly: true
        )
        
        do {
            container = try ModelContainer(
                for: schema,
                configurations: [modelConfiguration]
            )
            
            // 添加示例数据
            insertSampleData()
        } catch {
            fatalError("无法创建预览 ModelContainer: \(error)")
        }
    }
    
    private func insertSampleData() {
        let context = container.mainContext
        
        let task1 = TaskModel(
            title: "转正汇报",
            dueDate: Calendar.current.date(bySettingHour: 10, minute: 0, second: 0, of: Date().addingTimeInterval(86400 * 2))
        )
        task1.isCompleted = true
        
        let task2 = TaskModel(
            title: "完成项目文档",
            dueDate: Calendar.current.date(bySettingHour: 14, minute: 0, second: 0, of: Date().addingTimeInterval(86400)),
            subtasks: [
                SubtaskModel(title: "需求分析", isCompleted: true, orderIndex: 0),
                SubtaskModel(title: "架构设计", isCompleted: false, orderIndex: 1),
                SubtaskModel(title: "接口定义", isCompleted: false, orderIndex: 2)
            ]
        )
        
        let task3 = TaskModel(
            title: "健身",
            dueDate: Calendar.current.date(bySettingHour: 19, minute: 0, second: 0, of: Date())
        )
        
        context.insert(task1)
        context.insert(task2)
        context.insert(task3)
        
        try? context.save()
    }
}
