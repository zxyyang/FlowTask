import Foundation
import UserNotifications
import Combine

#if os(macOS)
import AppKit

// MARK: - 通知服务
@MainActor
class NotificationService: ObservableObject {
    static let shared = NotificationService()
    
    @Published var isAuthorized = false
    private var checkTimer: Timer?
    
    private init() {
        checkAuthorizationStatus()
    }
    
    // MARK: - 权限管理
    
    /// 请求通知权限
    func requestAuthorization() async -> Bool {
        do {
            let granted = try await UNUserNotificationCenter.current().requestAuthorization(
                options: [.alert, .sound, .badge]
            )
            await MainActor.run {
                isAuthorized = granted
            }
            return granted
        } catch {
            print("[NotificationService] 请求通知权限失败: \(error)")
            return false
        }
    }
    
    /// 检查通知权限状态
    func checkAuthorizationStatus() {
        UNUserNotificationCenter.current().getNotificationSettings { [weak self] settings in
            Task { @MainActor in
                self?.isAuthorized = settings.authorizationStatus == .authorized
            }
        }
    }
    
    // MARK: - 启动和停止
    
    /// 启动通知检查
    func startNotificationCheck() {
        stopNotificationCheck()
        
        // 立即检查一次
        checkUpcomingTasks()
        
        // 每分钟检查一次
        checkTimer = Timer.scheduledTimer(withTimeInterval: 60, repeats: true) { [weak self] _ in
            Task { @MainActor in
                self?.checkUpcomingTasks()
            }
        }
        
        print("[NotificationService] 通知检查已启动")
    }
    
    /// 停止通知检查
    func stopNotificationCheck() {
        checkTimer?.invalidate()
        checkTimer = nil
        print("[NotificationService] 通知检查已停止")
    }
    
    // MARK: - 任务检查
    
    /// 检查即将到期的任务
    private func checkUpcomingTasks() {
        guard isAuthorized else { return }
        
        let settings = SettingsManager.shared
        guard settings.notificationEnabled else { return }
        
        let tasks = SharedDataManager.shared.tasks.filter { !$0.isCompleted }
        let now = Date()
        let calendar = Calendar.current
        
        switch settings.notificationTiming {
        case .none:
            return
            
        case .atTime:
            // 到期时提醒
            checkAtTimeNotifications(tasks: tasks, now: now)
            
        case .beforeCustom:
            // 到期前自定义时间提醒
            checkBeforeCustomNotifications(tasks: tasks, now: now, settings: settings)
            
        case .dailyAt:
            // 每日固定时间提醒
            checkDailyNotifications(tasks: tasks, now: now, calendar: calendar, settings: settings)
            
        case .weeklyOn:
            // 每周固定时间提醒
            checkWeeklyNotifications(tasks: tasks, now: now, calendar: calendar, settings: settings)
            
        case .monthlyOn:
            // 每月固定日期提醒
            checkMonthlyNotifications(tasks: tasks, now: now, calendar: calendar, settings: settings)
        }
    }
    
    // MARK: - 各种提醒检查
    
    /// 到期时提醒
    private func checkAtTimeNotifications(tasks: [FlowTask], now: Date) {
        for task in tasks {
            guard let dueDate = task.dueDate else { continue }
            
            let timeInterval = dueDate.timeIntervalSince(now)
            let minutesRemaining = Int(timeInterval / 60)
            
            // 在到期时间前后1分钟内提醒
            if abs(minutesRemaining) <= 1 {
                if shouldNotifyTask(task, identifier: "atTime") {
                    sendNotification(for: task, minutesRemaining: minutesRemaining)
                    markTaskAsNotified(task, identifier: "atTime")
                }
            }
        }
    }
    
    /// 到期前自定义时间提醒
    private func checkBeforeCustomNotifications(tasks: [FlowTask], now: Date, settings: SettingsManager) {
        let notifyMinutes = calculateMinutes(value: settings.notificationBeforeValue, unit: settings.notificationBeforeUnit)
        
        for task in tasks {
            guard let dueDate = task.dueDate else { continue }
            
            let timeInterval = dueDate.timeIntervalSince(now)
            let minutesRemaining = Int(timeInterval / 60)
            
            // 在指定时间前后1分钟内提醒
            if abs(minutesRemaining - notifyMinutes) <= 1 {
                if shouldNotifyTask(task, identifier: "before_\(notifyMinutes)") {
                    sendNotification(for: task, minutesRemaining: minutesRemaining)
                    markTaskAsNotified(task, identifier: "before_\(notifyMinutes)")
                }
            }
        }
    }
    
    /// 每日固定时间提醒
    private func checkDailyNotifications(tasks: [FlowTask], now: Date, calendar: Calendar, settings: SettingsManager) {
        let currentHour = calendar.component(.hour, from: now)
        let currentMinute = calendar.component(.minute, from: now)
        
        // 检查是否到了设定的时间（±1分钟容差）
        if currentHour == settings.notificationDailyHour && abs(currentMinute - settings.notificationDailyMinute) <= 1 {
            let today = calendar.startOfDay(for: now)
            let identifier = "daily_\(today.timeIntervalSince1970)"
            
            // 检查今天是否已经发送过每日提醒
            if !UserDefaults.standard.bool(forKey: identifier) {
                // 发送所有未完成任务的提醒
                for task in tasks {
                    sendDailyNotification(for: task)
                }
                
                // 标记今天已发送
                UserDefaults.standard.set(true, forKey: identifier)
            }
        }
    }
    
    /// 每周固定时间提醒
    private func checkWeeklyNotifications(tasks: [FlowTask], now: Date, calendar: Calendar, settings: SettingsManager) {
        let currentWeekday = calendar.component(.weekday, from: now)
        let currentHour = calendar.component(.hour, from: now)
        let currentMinute = calendar.component(.minute, from: now)
        
        // 检查是否是设定的星期几
        guard let weekday = Weekday(rawValue: currentWeekday),
              settings.notificationWeekdays.contains(weekday) else {
            return
        }
        
        // 检查是否到了设定的时间
        if currentHour == settings.notificationWeeklyHour && abs(currentMinute - settings.notificationWeeklyMinute) <= 1 {
            let today = calendar.startOfDay(for: now)
            let identifier = "weekly_\(today.timeIntervalSince1970)"
            
            // 检查今天是否已经发送过每周提醒
            if !UserDefaults.standard.bool(forKey: identifier) {
                for task in tasks {
                    sendWeeklyNotification(for: task)
                }
                UserDefaults.standard.set(true, forKey: identifier)
            }
        }
    }
    
    /// 每月固定日期提醒
    private func checkMonthlyNotifications(tasks: [FlowTask], now: Date, calendar: Calendar, settings: SettingsManager) {
        let currentDay = calendar.component(.day, from: now)
        let currentHour = calendar.component(.hour, from: now)
        let currentMinute = calendar.component(.minute, from: now)
        
        // 检查是否是设定的日期
        guard settings.notificationMonthDays.contains(currentDay) else {
            return
        }
        
        // 检查是否到了设定的时间
        if currentHour == settings.notificationMonthlyHour && abs(currentMinute - settings.notificationMonthlyMinute) <= 1 {
            let today = calendar.startOfDay(for: now)
            let identifier = "monthly_\(today.timeIntervalSince1970)"
            
            // 检查今天是否已经发送过每月提醒
            if !UserDefaults.standard.bool(forKey: identifier) {
                for task in tasks {
                    sendMonthlyNotification(for: task)
                }
                UserDefaults.standard.set(true, forKey: identifier)
            }
        }
    }
    
    // MARK: - 辅助方法
    
    /// 计算分钟数
    private func calculateMinutes(value: Int, unit: NotificationTimeUnit) -> Int {
        switch unit {
        case .minutes: return value
        case .hours: return value * 60
        case .days: return value * 1440
        }
    }
    
    /// 判断是否应该通知任务
    private func shouldNotifyTask(_ task: FlowTask, identifier: String) -> Bool {
        let notificationId = "task_\(task.id.uuidString)_\(identifier)"
        return !UserDefaults.standard.bool(forKey: notificationId)
    }
    
    /// 标记任务已通知
    private func markTaskAsNotified(_ task: FlowTask, identifier: String) {
        let notificationId = "task_\(task.id.uuidString)_\(identifier)"
        UserDefaults.standard.set(true, forKey: notificationId)
    }
    
    // MARK: - 发送通知
    
    /// 发送任务提醒通知
    private func sendNotification(for task: FlowTask, minutesRemaining: Int) {
        let settings = SettingsManager.shared
        
        // 根据设置选择通知方式
        switch settings.notificationType {
        case .system:
            sendSystemNotification(for: task, minutesRemaining: minutesRemaining)
        case .menuBar:
            sendMenuBarNotification(for: task, minutesRemaining: minutesRemaining)
        case .both:
            sendSystemNotification(for: task, minutesRemaining: minutesRemaining)
            sendMenuBarNotification(for: task, minutesRemaining: minutesRemaining)
        }
    }
    
    /// 发送每日提醒通知
    private func sendDailyNotification(for task: FlowTask) {
        let content = UNMutableNotificationContent()
        content.title = "每日任务提醒"
        content.body = "「\(task.title)」"
        if let dueDate = task.dueDate {
            content.body += " - 截止时间：\(dueDate.smartDateTimeDisplay)"
        }
        content.sound = .default
        content.categoryIdentifier = "DAILY_REMINDER"
        content.userInfo = ["taskId": task.id.uuidString]
        
        let request = UNNotificationRequest(
            identifier: UUID().uuidString,
            content: content,
            trigger: nil
        )
        
        UNUserNotificationCenter.current().add(request)
    }
    
    /// 发送每周提醒通知
    private func sendWeeklyNotification(for task: FlowTask) {
        let content = UNMutableNotificationContent()
        content.title = "每周任务提醒"
        content.body = "「\(task.title)」"
        if let dueDate = task.dueDate {
            content.body += " - 截止时间：\(dueDate.smartDateTimeDisplay)"
        }
        content.sound = .default
        content.categoryIdentifier = "WEEKLY_REMINDER"
        content.userInfo = ["taskId": task.id.uuidString]
        
        let request = UNNotificationRequest(
            identifier: UUID().uuidString,
            content: content,
            trigger: nil
        )
        
        UNUserNotificationCenter.current().add(request)
    }
    
    /// 发送每月提醒通知
    private func sendMonthlyNotification(for task: FlowTask) {
        let content = UNMutableNotificationContent()
        content.title = "每月任务提醒"
        content.body = "「\(task.title)」"
        if let dueDate = task.dueDate {
            content.body += " - 截止时间：\(dueDate.smartDateTimeDisplay)"
        }
        content.sound = .default
        content.categoryIdentifier = "MONTHLY_REMINDER"
        content.userInfo = ["taskId": task.id.uuidString]
        
        let request = UNNotificationRequest(
            identifier: UUID().uuidString,
            content: content,
            trigger: nil
        )
        
        UNUserNotificationCenter.current().add(request)
    }
    
    /// 发送系统通知
    private func sendSystemNotification(for task: FlowTask, minutesRemaining: Int) {
        let content = UNMutableNotificationContent()
        content.title = "任务即将到期"
        
        if minutesRemaining > 0 {
            content.body = "「\(task.title)」还有 \(minutesRemaining) 分钟到期"
        } else if minutesRemaining == 0 {
            content.body = "「\(task.title)」即将到期"
        } else {
            content.body = "「\(task.title)」已经逾期 \(abs(minutesRemaining)) 分钟"
        }
        
        content.sound = .default
        content.categoryIdentifier = "TASK_REMINDER"
        content.userInfo = ["taskId": task.id.uuidString]
        
        let request = UNNotificationRequest(
            identifier: UUID().uuidString,
            content: content,
            trigger: nil
        )
        
        UNUserNotificationCenter.current().add(request) { error in
            if let error = error {
                print("[NotificationService] 发送系统通知失败: \(error)")
            } else {
                print("[NotificationService] 系统通知已发送: \(task.title)")
            }
        }
    }
    
    /// 发送菜单栏通知（macOS）
    private func sendMenuBarNotification(for task: FlowTask, minutesRemaining: Int) {
        #if os(macOS)
        let notification = NSUserNotification()
        notification.title = "任务即将到期"
        
        if minutesRemaining > 0 {
            notification.informativeText = "「\(task.title)」还有 \(minutesRemaining) 分钟到期"
        } else if minutesRemaining == 0 {
            notification.informativeText = "「\(task.title)」即将到期"
        } else {
            notification.informativeText = "「\(task.title)」已经逾期 \(abs(minutesRemaining)) 分钟"
        }
        
        notification.soundName = NSUserNotificationDefaultSoundName
        notification.userInfo = ["taskId": task.id.uuidString]
        
        NSUserNotificationCenter.default.deliver(notification)
        print("[NotificationService] 菜单栏通知已发送: \(task.title)")
        #endif
    }
    
    // MARK: - 清理
    
    /// 清理已完成任务的通知标记
    func cleanupNotificationFlags() {
        let tasks = SharedDataManager.shared.tasks
        let completedTaskIds = tasks.filter { $0.isCompleted }.map { $0.id.uuidString }
        
        // 清理已完成任务的通知标记
        for taskId in completedTaskIds {
            // 清理各种类型的通知标记
            let identifiers = ["atTime", "daily", "weekly", "monthly"]
            for identifier in identifiers {
                let notificationId = "task_\(taskId)_\(identifier)"
                UserDefaults.standard.removeObject(forKey: notificationId)
            }
            
            // 清理到期前提醒的标记（可能有多个不同的时间）
            for minutes in [5, 15, 30, 60, 120, 1440] {
                let notificationId = "task_\(taskId)_before_\(minutes)"
                UserDefaults.standard.removeObject(forKey: notificationId)
            }
        }
    }
}

#endif
