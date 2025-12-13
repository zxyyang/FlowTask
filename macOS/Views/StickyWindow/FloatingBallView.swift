import SwiftUI

#if os(macOS)
import AppKit

// MARK: - Floating Ball Wrapper (观察 SharedDataManager)
struct FloatingBallWrapper: View {
    @ObservedObject private var sharedData = SharedDataManager.shared
    @AppStorage("floatingBallSize") private var floatingBallSize = 22.0
    let onTap: () -> Void
    
    private var pendingCount: Int {
        sharedData.tasks.filter { !$0.isCompleted }.count
    }
    
    var body: some View {
        FloatingBallView(pendingCount: pendingCount, size: floatingBallSize, onTap: onTap)
    }
}

// MARK: - Floating Ball View
struct FloatingBallView: View {
    let pendingCount: Int
    let size: Double
    let onTap: () -> Void
    
    @Environment(\.colorScheme) private var colorScheme
    @State private var isHovering = false
    
    private var backgroundColor: Color {
        colorScheme == .dark ? Color(nsColor: NSColor(white: 0.25, alpha: 1)) : Color.white
    }
    
    private var iconColor: Color {
        colorScheme == .dark ? .white : Color(nsColor: NSColor(white: 0.3, alpha: 1))
    }
    
    var body: some View {
        ZStack {
            // 跟随系统主题的背景圆
            Circle()
                .fill(backgroundColor)
                .frame(width: size, height: size)
                .shadow(color: Color.black.opacity(0.2), radius: isHovering ? 4 : 2, y: 1)
                .scaleEffect(isHovering ? 1.1 : 1.0)
            
            // 对号图标
            Image(systemName: "checkmark")
                .font(.system(size: size * 0.45, weight: .bold))
                .foregroundColor(iconColor)
            
            // 待办数量角标
            if pendingCount > 0 {
                let badgeSize = max(14, size * 0.5)
                Text(pendingCount > 99 ? "99+" : "\(pendingCount)")
                    .font(.system(size: max(8, size * 0.3), weight: .bold))
                    .foregroundColor(.white)
                    .frame(minWidth: badgeSize, minHeight: badgeSize)
                    .background(Circle().fill(Color.red))
                    .offset(x: size * 0.32, y: -size * 0.32)
            }
        }
        .frame(width: size * 1.5, height: size * 1.5)
        .contentShape(Circle())
        .onHover { hovering in
            withAnimation(.easeInOut(duration: 0.2)) {
                isHovering = hovering
            }
        }
        .onTapGesture {
            onTap()
        }
        .animation(.spring(response: 0.3), value: isHovering)
    }
}

#Preview {
    VStack(spacing: 20) {
        FloatingBallView(pendingCount: 3, size: 22, onTap: {})
        FloatingBallView(pendingCount: 0, size: 32, onTap: {})
        FloatingBallView(pendingCount: 99, size: 44, onTap: {})
    }
    .frame(width: 150, height: 200)
    .background(Color.gray.opacity(0.2))
}
#endif
