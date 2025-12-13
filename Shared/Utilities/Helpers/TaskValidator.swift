import Foundation

// MARK: - Task Validator
/// 任务验证器
struct TaskValidator {
    static let maxTitleLength = 200
    static let maxDescriptionLength = 1000
    
    /// 验证任务标题
    static func validateTitle(_ title: String) -> Result<String, ValidationError> {
        let trimmed = title.trimmed
        
        if trimmed.isEmpty {
            return .failure(.emptyTitle)
        }
        
        if title.isBlank {
            return .failure(.whitespaceOnlyTitle)
        }
        
        if trimmed.count > maxTitleLength {
            return .failure(.titleTooLong(maxLength: maxTitleLength))
        }
        
        return .success(trimmed)
    }
    
    /// 验证任务
    static func validate(_ task: FlowTask) -> Result<FlowTask, ValidationError> {
        switch validateTitle(task.title) {
        case .success(let validTitle):
            var validTask = task
            validTask.title = validTitle
            return .success(validTask)
        case .failure(let error):
            return .failure(error)
        }
    }
    
    /// 验证子任务标题
    static func validateSubtaskTitle(_ title: String) -> Result<String, ValidationError> {
        let trimmed = title.trimmed
        
        if trimmed.isEmpty {
            return .failure(.invalidSubtask)
        }
        
        return .success(trimmed)
    }
}
