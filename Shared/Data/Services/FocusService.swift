import Foundation
import Combine
import SwiftData

// MARK: - Focus Service
/// 专注模式服务
@MainActor
final class FocusService: ObservableObject {
    static let shared = FocusService()
    
    // MARK: - Published Properties
    @Published var currentSession: FocusSession?
    @Published var isActive: Bool = false
    @Published var elapsedTime: TimeInterval = 0
    @Published var hasPendingNotification: Bool = false
    
    // MARK: - Private Properties
    private var timer: Timer?
    private var context: ModelContext?
    
    private init() {}
    
    // MARK: - Set Context
    func setContext(_ context: ModelContext) {
        self.context = context
    }
    
    // MARK: - Start Focus
    func startFocus(for task: FlowTask) {
        // 如果已有活动会话，先结束
        if isActive {
            endFocus(completed: false)
        }
        
        let session = FocusSession(taskId: task.id)
        currentSession = session
        isActive = true
        elapsedTime = 0
        
        // 启动计时器
        timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { [weak self] _ in
            Task { @MainActor in
                self?.elapsedTime += 1
            }
        }
        
        // 保存到数据库
        saveSession(session)
    }
    
    // MARK: - End Focus
    func endFocus(completed: Bool) {
        timer?.invalidate()
        timer = nil
        
        guard var session = currentSession else { return }
        
        session.endTime = Date()
        session.duration = elapsedTime
        session.isCompleted = completed
        
        // 更新数据库
        updateSession(session)
        
        currentSession = nil
        isActive = false
        elapsedTime = 0
        
        // 如果完成，显示通知
        if completed {
            hasPendingNotification = true
        }
    }
    
    // MARK: - Pause Focus
    func pauseFocus() {
        timer?.invalidate()
        timer = nil
    }
    
    // MARK: - Resume Focus
    func resumeFocus() {
        guard isActive else { return }
        
        timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { [weak self] _ in
            Task { @MainActor in
                self?.elapsedTime += 1
            }
        }
    }
    
    // MARK: - Clear Notification
    func clearNotification() {
        hasPendingNotification = false
    }
    
    // MARK: - Formatted Time
    var formattedElapsedTime: String {
        let hours = Int(elapsedTime) / 3600
        let minutes = (Int(elapsedTime) % 3600) / 60
        let seconds = Int(elapsedTime) % 60
        
        if hours > 0 {
            return String(format: "%02d:%02d:%02d", hours, minutes, seconds)
        } else {
            return String(format: "%02d:%02d", minutes, seconds)
        }
    }
    
    // MARK: - Private Methods
    
    private func saveSession(_ session: FocusSession) {
        guard let context = context else { return }
        
        let model = FocusSessionModel.from(session)
        context.insert(model)
        try? context.save()
    }
    
    private func updateSession(_ session: FocusSession) {
        guard let context = context else { return }
        
        let predicate = #Predicate<FocusSessionModel> { $0.id == session.id }
        var descriptor = FetchDescriptor<FocusSessionModel>(predicate: predicate)
        descriptor.fetchLimit = 1
        
        if let model = try? context.fetch(descriptor).first {
            model.endTime = session.endTime
            model.duration = session.duration
            model.isCompleted = session.isCompleted
            try? context.save()
        }
    }
    
    // MARK: - Get Total Focus Time For Task
    func getTotalFocusTime(for taskId: UUID) async -> TimeInterval {
        guard let context = context else { return 0 }
        
        let predicate = #Predicate<FocusSessionModel> { $0.taskId == taskId }
        let descriptor = FetchDescriptor<FocusSessionModel>(predicate: predicate)
        
        guard let sessions = try? context.fetch(descriptor) else { return 0 }
        
        return sessions.reduce(0) { $0 + $1.duration }
    }
    
    // MARK: - Get Today's Focus Time
    func getTodayFocusTime() async -> TimeInterval {
        guard let context = context else { return 0 }
        
        let startOfDay = Calendar.current.startOfDay(for: Date())
        let predicate = #Predicate<FocusSessionModel> { $0.startTime >= startOfDay }
        let descriptor = FetchDescriptor<FocusSessionModel>(predicate: predicate)
        
        guard let sessions = try? context.fetch(descriptor) else { return 0 }
        
        return sessions.reduce(0) { $0 + $1.duration }
    }
}
