import Foundation

// MARK: - Daily Summary
/// 每日总结数据
struct DailySummary: Equatable {
    let date: Date
    let completedCount: Int
    let pendingCount: Int
    let completedTasks: [FlowTask]
    let upcomingTasks: [FlowTask]
    
    /// 完成率 (0.0 - 1.0)
    var completionRate: Double {
        let total = completedCount + pendingCount
        guard total > 0 else { return 0.0 }
        return Double(completedCount) / Double(total)
    }
    
    /// 格式化的完成率百分比
    var formattedCompletionRate: String {
        let percentage = Int(completionRate * 100)
        return "\(percentage)%"
    }
    
    /// 是否为空（无任务）
    var isEmpty: Bool {
        return completedCount == 0 && pendingCount == 0
    }
}

// MARK: - Summary Settings
/// 每日总结设置
struct SummarySettings: Codable, Equatable {
    var isEnabled: Bool
    var summaryTime: DateComponents
    var includeCompletedTasks: Bool
    var includeUpcomingTasks: Bool
    
    static var `default`: SummarySettings {
        SummarySettings(
            isEnabled: true,
            summaryTime: DateComponents(hour: 21, minute: 0),
            includeCompletedTasks: true,
            includeUpcomingTasks: true
        )
    }
}
