import SwiftUI

// MARK: - Design System
/// 设计系统常量
enum DesignSystem {
    // MARK: - Colors
    enum Colors {
        static let primary = Color.primary
        static let secondary = Color.secondary
        static let accent = Color.accentColor
        
        #if os(iOS)
        static let background = Color(.systemBackground)
        static let secondaryBackground = Color(.secondarySystemBackground)
        static let separator = Color(.separator)
        #elseif os(macOS)
        static let background = Color(NSColor.windowBackgroundColor)
        static let secondaryBackground = Color(NSColor.controlBackgroundColor)
        static let separator = Color(NSColor.separatorColor)
        #endif
        
        // Task States
        static let completed = Color.secondary
        static let pending = Color.primary
        static let overdue = Color.red
        
        // Tags
        static let tagBackground = Color.accentColor.opacity(0.1)
        static let tagText = Color.accentColor
    }
    
    // MARK: - Typography
    enum Typography {
        static let largeTitle = Font.largeTitle
        static let title = Font.title
        static let title2 = Font.title2
        static let title3 = Font.title3
        static let headline = Font.headline
        static let body = Font.body
        static let callout = Font.callout
        static let subheadline = Font.subheadline
        static let footnote = Font.footnote
        static let caption = Font.caption
        static let caption2 = Font.caption2
    }
    
    // MARK: - Spacing
    enum Spacing {
        static let xxs: CGFloat = 2
        static let xs: CGFloat = 4
        static let sm: CGFloat = 8
        static let md: CGFloat = 12
        static let lg: CGFloat = 16
        static let xl: CGFloat = 24
        static let xxl: CGFloat = 32
    }
    
    // MARK: - Corner Radius
    enum CornerRadius {
        static let small: CGFloat = 4
        static let medium: CGFloat = 8
        static let large: CGFloat = 12
        static let extraLarge: CGFloat = 16
    }
    
    // MARK: - Animation
    enum Animation {
        static let quick = SwiftUI.Animation.easeInOut(duration: 0.15)
        static let standard = SwiftUI.Animation.easeInOut(duration: 0.25)
        static let slow = SwiftUI.Animation.easeInOut(duration: 0.35)
        static let spring = SwiftUI.Animation.spring(response: 0.3, dampingFraction: 0.7)
    }
    
    // MARK: - Shadow
    enum Shadow {
        static let small = (color: Color.black.opacity(0.05), radius: CGFloat(4), y: CGFloat(2))
        static let medium = (color: Color.black.opacity(0.1), radius: CGFloat(8), y: CGFloat(4))
        static let large = (color: Color.black.opacity(0.15), radius: CGFloat(16), y: CGFloat(8))
    }
}

// MARK: - View Extensions
extension View {
    /// 应用卡片样式
    func cardStyle() -> some View {
        self
            .background(DesignSystem.Colors.background)
            .cornerRadius(DesignSystem.CornerRadius.large)
            .shadow(
                color: DesignSystem.Shadow.small.color,
                radius: DesignSystem.Shadow.small.radius,
                y: DesignSystem.Shadow.small.y
            )
    }
    
    /// 应用标准动画
    func standardAnimation() -> some View {
        self.animation(DesignSystem.Animation.standard, value: UUID())
    }
}
