import Foundation

// MARK: - Sync Status
/// 同步状态枚举
enum SyncStatus: String, Codable, Equatable, Hashable {
    case synced = "synced"
    case pending = "pending"
    case failed = "failed"
}

// MARK: - Sync State
/// 同步服务状态
enum SyncState: Equatable {
    case idle
    case syncing
    case completed(Date)
    case failed(String)
    
    static func == (lhs: SyncState, rhs: SyncState) -> Bool {
        switch (lhs, rhs) {
        case (.idle, .idle):
            return true
        case (.syncing, .syncing):
            return true
        case (.completed(let lhsDate), .completed(let rhsDate)):
            return lhsDate == rhsDate
        case (.failed(let lhsError), .failed(let rhsError)):
            return lhsError == rhsError
        default:
            return false
        }
    }
}

// MARK: - Sync Conflict
/// 同步冲突信息
struct SyncConflict {
    let localVersion: Any
    let remoteVersion: Any
    let localTimestamp: Date
    let remoteTimestamp: Date
}

// MARK: - Conflict Resolution
/// 冲突解决策略
enum ConflictResolution {
    case useLocal
    case useRemote
    case lastWriteWins
}
