import Foundation

// MARK: - Note Entity
/// 笔记实体，支持标题和 Markdown 内容
struct Note: Identifiable, Codable, Equatable, Hashable {
    let id: UUID
    var title: String
    var content: String  // Markdown 内容
    var createdAt: Date
    var updatedAt: Date
    var syncStatus: SyncStatus
    
    init(
        id: UUID = UUID(),
        title: String = "",
        content: String = "",
        createdAt: Date = Date(),
        updatedAt: Date = Date(),
        syncStatus: SyncStatus = .pending
    ) {
        self.id = id
        self.title = title
        self.content = content
        self.createdAt = createdAt
        self.updatedAt = updatedAt
        self.syncStatus = syncStatus
    }
    
    /// 显示标题，如果没有标题则显示内容的第一行
    var displayTitle: String {
        if !title.isEmpty {
            return title
        }
        let firstLine = content.components(separatedBy: .newlines).first ?? ""
        return firstLine.isEmpty ? "无标题" : String(firstLine.prefix(50))
    }
    
    /// 内容预览
    var preview: String {
        let lines = content.components(separatedBy: .newlines)
        let previewLines = lines.prefix(3).joined(separator: " ")
        return String(previewLines.prefix(100))
    }
}
