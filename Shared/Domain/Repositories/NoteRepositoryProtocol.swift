import Foundation

// MARK: - Note Repository Protocol
/// 笔记仓库协议，定义笔记数据操作接口
protocol NoteRepositoryProtocol {
    /// 获取所有笔记
    func fetchAllNotes() async throws -> [Note]
    
    /// 根据 ID 获取单个笔记
    func fetchNote(by id: UUID) async throws -> Note?
    
    /// 创建新笔记
    func createNote(_ note: Note) async throws -> Note
    
    /// 更新笔记
    func updateNote(_ note: Note) async throws -> Note
    
    /// 删除笔记
    func deleteNote(_ note: Note) async throws
    
    /// 搜索笔记
    func searchNotes(query: String) async throws -> [Note]
}
