import Foundation

// MARK: - FlowTask Error
/// 应用错误类型
enum FlowTaskError: Error, LocalizedError {
    case validationError(ValidationError)
    case storageError(StorageError)
    case syncError(SyncError)
    case notificationError(NotificationError)
    
    var errorDescription: String? {
        switch self {
        case .validationError(let error):
            return error.localizedDescription
        case .storageError(let error):
            return error.localizedDescription
        case .syncError(let error):
            return error.localizedDescription
        case .notificationError(let error):
            return error.localizedDescription
        }
    }
}

// MARK: - Validation Error
/// 验证错误
enum ValidationError: Error, LocalizedError {
    case emptyTitle
    case whitespaceOnlyTitle
    case invalidDate
    case titleTooLong(maxLength: Int)
    case invalidSubtask
    
    var errorDescription: String? {
        switch self {
        case .emptyTitle:
            return "任务标题不能为空"
        case .whitespaceOnlyTitle:
            return "任务标题不能只包含空格"
        case .invalidDate:
            return "无效的日期"
        case .titleTooLong(let maxLength):
            return "标题长度不能超过 \(maxLength) 个字符"
        case .invalidSubtask:
            return "无效的子任务"
        }
    }
}

// MARK: - Storage Error
/// 存储错误
enum StorageError: Error, LocalizedError {
    case saveFailed(underlying: Error)
    case fetchFailed(underlying: Error)
    case deleteFailed(underlying: Error)
    case migrationFailed
    case notFound
    
    var errorDescription: String? {
        switch self {
        case .saveFailed:
            return "保存失败，请重试"
        case .fetchFailed:
            return "加载数据失败"
        case .deleteFailed:
            return "删除失败，请重试"
        case .migrationFailed:
            return "数据迁移失败"
        case .notFound:
            return "未找到数据"
        }
    }
}

// MARK: - Sync Error
/// 同步错误
enum SyncError: Error, LocalizedError {
    case networkUnavailable
    case authenticationRequired
    case conflictDetected(SyncConflict)
    case quotaExceeded
    case timeout
    
    var errorDescription: String? {
        switch self {
        case .networkUnavailable:
            return "网络不可用，稍后将自动同步"
        case .authenticationRequired:
            return "需要登录 iCloud 账户"
        case .conflictDetected:
            return "检测到数据冲突"
        case .quotaExceeded:
            return "iCloud 存储空间不足"
        case .timeout:
            return "同步超时，请重试"
        }
    }
}

// MARK: - Notification Error
/// 通知错误
enum NotificationError: Error, LocalizedError {
    case permissionDenied
    case scheduleFailed
    case cancelFailed
    
    var errorDescription: String? {
        switch self {
        case .permissionDenied:
            return "通知权限被拒绝，请在设置中开启"
        case .scheduleFailed:
            return "设置提醒失败"
        case .cancelFailed:
            return "取消提醒失败"
        }
    }
}
