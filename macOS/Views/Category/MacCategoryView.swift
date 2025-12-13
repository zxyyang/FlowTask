import SwiftUI

#if os(macOS)
// MARK: - Mac Category View
/// macOS 分类视图（已禁用，因为移除了标签功能）
struct MacCategoryView: View {
    var body: some View {
        VStack(spacing: 20) {
            Image(systemName: "folder.badge.questionmark")
                .font(.system(size: 64))
                .foregroundColor(.secondary)
            
            Text("分类功能已移除")
                .font(.title2)
                .fontWeight(.semibold)
            
            Text("Todo 应用已简化，不再支持标签分类功能")
                .font(.body)
                .foregroundColor(.secondary)
                .multilineTextAlignment(.center)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .navigationTitle("分类")
    }
}

#endif
