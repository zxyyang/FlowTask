import Foundation
import SwiftData

// MARK: - Note Repository
/// 笔记仓库实现（SwiftData）
@MainActor
final class NoteRepository: NoteRepositoryProtocol {
    private let context: ModelContext
    
    init(context: ModelContext) {
        self.context = context
    }
    
    /// 使用共享数据容器的便捷初始化器
    convenience init() {
        self.init(context: DataContainer.shared.mainContext)
    }
    
    // MARK: - Fetch All Notes
    func fetchAllNotes() async throws -> [Note] {
        let descriptor = FetchDescriptor<NoteModel>(
            sortBy: [SortDescriptor(\.createdAt, order: .reverse)]
        )
        
        let models = try context.fetch(descriptor)
        return models.map { $0.toDomain() }
    }
    
    // MARK: - Fetch Note By ID
    func fetchNote(by id: UUID) async throws -> Note? {
        let predicate = #Predicate<NoteModel> { $0.id == id }
        var descriptor = FetchDescriptor<NoteModel>(predicate: predicate)
        descriptor.fetchLimit = 1
        
        let models = try context.fetch(descriptor)
        return models.first?.toDomain()
    }
    
    // MARK: - Create Note
    func createNote(_ note: Note) async throws -> Note {
        // 标题或内容至少有一个不为空
        guard !note.title.isEmpty || !note.content.isEmpty else {
            throw FlowTaskError.validationError(.emptyTitle)
        }
        
        let model = NoteModel.from(note)
        context.insert(model)
        try context.save()
        
        return model.toDomain()
    }
    
    // MARK: - Update Note
    func updateNote(_ note: Note) async throws -> Note {
        let predicate = #Predicate<NoteModel> { $0.id == note.id }
        var descriptor = FetchDescriptor<NoteModel>(predicate: predicate)
        descriptor.fetchLimit = 1
        
        guard let model = try context.fetch(descriptor).first else {
            throw FlowTaskError.storageError(.notFound)
        }
        
        model.title = note.title
        model.content = note.content
        model.updatedAt = Date()
        model.syncStatus = note.syncStatus.rawValue
        
        try context.save()
        return model.toDomain()
    }
    
    // MARK: - Delete Note
    func deleteNote(_ note: Note) async throws {
        let predicate = #Predicate<NoteModel> { $0.id == note.id }
        var descriptor = FetchDescriptor<NoteModel>(predicate: predicate)
        descriptor.fetchLimit = 1
        
        guard let model = try context.fetch(descriptor).first else {
            throw FlowTaskError.storageError(.notFound)
        }
        
        context.delete(model)
        try context.save()
    }
    
    // MARK: - Search Notes
    func searchNotes(query: String) async throws -> [Note] {
        let predicate = #Predicate<NoteModel> { note in
            note.title.localizedStandardContains(query) ||
            note.content.localizedStandardContains(query)
        }
        
        let descriptor = FetchDescriptor<NoteModel>(
            predicate: predicate,
            sortBy: [SortDescriptor(\.updatedAt, order: .reverse)]
        )
        
        let models = try context.fetch(descriptor)
        return models.map { $0.toDomain() }
    }
}
