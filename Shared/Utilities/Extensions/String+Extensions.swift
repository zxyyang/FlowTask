import Foundation

extension String {
    /// 判断是否为空或只包含空白字符
    var isBlank: Bool {
        trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
    }
    
    /// 去除首尾空白字符
    var trimmed: String {
        trimmingCharacters(in: .whitespacesAndNewlines)
    }
    
    /// 验证是否为有效的任务标题
    var isValidTaskTitle: Bool {
        !isBlank && count <= 200
    }
}
