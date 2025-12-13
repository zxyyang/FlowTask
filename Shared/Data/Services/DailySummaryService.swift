import Foundation
import SwiftData

// MARK: - Daily Summary Service
/// 每日总结服务
@MainActor
final class DailySummaryService {
    static let shared = DailySummaryService()
    
    private var context: ModelContext?
    
    private init() {}
    
    // MARK: - Set Context
    func setContext(_ context: ModelContext) {
        self.context = context
    }
    
    // MARK: - Generate Daily Summary
    func generateDailySummary(for date: Date = Date()) async -> DailySummary {
        guard let context = context else {
            return DailySummary(
                date: date,
                completedCount: 0,
                pendingCount: 0,
                completedTasks: [],
                upcomingTasks: []
            )
        }
        
        let calendar = Calendar.current
        let startOfDay = calendar.startOfDay(for: date)
        let endOfDay = calendar.date(byAdding: .day, value: 1, to: startOfDay)!
        
        // 获取今日完成的任务
        let completedPredicate = #Predicate<TaskModel> { task in
            task.isCompleted == true &&
            task.updatedAt >= startOfDay &&
            task.updatedAt < endOfDay
        }
        let completedDescriptor = FetchDescriptor<TaskModel>(predicate: completedPredicate)
        let completedModels = (try? context.fetch(completedDescriptor)) ?? []
        let completedTasks = completedModels.map { $0.toDomain() }
        
        // 获取待完成的任务
        let pendingPredicate = #Predicate<TaskModel> { task in
            task.isCompleted == false
        }
        let pendingDescriptor = FetchDescriptor<TaskModel>(predicate: pendingPredicate)
        let pendingModels = (try? context.fetch(pendingDescriptor)) ?? []
        
        // 获取明天到期的任务
        let tomorrow = calendar.date(byAdding: .day, value: 1, to: startOfDay)!
        let dayAfterTomorrow = calendar.date(byAdding: .day, value: 2, to: startOfDay)!
        
        let upcomingPredicate = #Predicate<TaskModel> { task in
            task.isCompleted == false &&
            task.dueDate != nil &&
            task.dueDate! >= tomorrow &&
            task.dueDate! < dayAfterTomorrow
        }
        let upcomingDescriptor = FetchDescriptor<TaskModel>(predicate: upcomingPredicate)
        let upcomingModels = (try? context.fetch(upcomingDescriptor)) ?? []
        let upcomingTasks = upcomingModels.map { $0.toDomain() }
        
        return DailySummary(
            date: date,
            completedCount: completedTasks.count,
            pendingCount: pendingModels.count,
            completedTasks: completedTasks,
            upcomingTasks: upcomingTasks
        )
    }
    
    // MARK: - Get Motivational Message
    func getMotivationalMessage(for summary: DailySummary) -> String {
        if summary.isEmpty {
            return motivationalQuotes.randomElement() ?? "今天也要加油哦！"
        }
        
        let rate = summary.completionRate
        
        if rate >= 1.0 {
            return "🎉 太棒了！今天的任务全部完成！"
        } else if rate >= 0.8 {
            return "👏 做得很好！还差一点点就完成了！"
        } else if rate >= 0.5 {
            return "💪 继续加油，你已经完成一半了！"
        } else if rate > 0 {
            return "🌱 好的开始是成功的一半！"
        } else {
            return "✨ 新的一天，新的开始！"
        }
    }
    
    // MARK: - Motivational Quotes
    private let motivationalQuotes = [
        "今天也要加油哦！",
        "每一步都算数，继续前进！",
        "专注当下，未来可期。",
        "小步前进，大步成功。",
        "相信自己，你比想象中更强大。",
        "今天的努力是明天的收获。",
        "保持专注，保持热爱。",
        "一次只做一件事，但要做好。"
    ]
}
