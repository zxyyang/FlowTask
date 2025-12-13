import Foundation

extension Date {
    /// 判断是否为今天
    var isToday: Bool {
        Calendar.current.isDateInToday(self)
    }
    
    /// 判断是否为明天
    var isTomorrow: Bool {
        Calendar.current.isDateInTomorrow(self)
    }
    
    /// 判断是否为过去
    var isPast: Bool {
        self < Date()
    }
    
    /// 获取当天开始时间
    var startOfDay: Date {
        Calendar.current.startOfDay(for: self)
    }
    
    /// 获取当天结束时间
    var endOfDay: Date {
        var components = DateComponents()
        components.day = 1
        components.second = -1
        return Calendar.current.date(byAdding: components, to: startOfDay) ?? self
    }
    
    /// 格式化为 "MM月dd日 HH:mm" 格式
    var formattedDateTime: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "MM月dd日 HH:mm"
        formatter.locale = Locale(identifier: "zh_CN")
        return formatter.string(from: self)
    }
    
    /// 格式化为 "yyyy年M月d日 HH:mm" 格式（带年份）
    var formattedFullDateTime: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy年M月d日 HH:mm"
        formatter.locale = Locale(identifier: "zh_CN")
        return formatter.string(from: self)
    }
    
    /// 格式化为 "MM月dd日" 格式
    var formattedDate: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "MM月dd日"
        formatter.locale = Locale(identifier: "zh_CN")
        return formatter.string(from: self)
    }
    
    /// 格式化为 "HH:mm" 格式
    var formattedTime: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "HH:mm"
        return formatter.string(from: self)
    }
    
    /// 相对时间描述（如"2小时后"、"明天"）
    var relativeDescription: String {
        let formatter = RelativeDateTimeFormatter()
        formatter.locale = Locale(identifier: "zh_CN")
        formatter.unitsStyle = .short
        return formatter.localizedString(for: self, relativeTo: Date())
    }
    
    /// 获取星期几
    var weekdayString: String {
        let weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
        let weekday = Calendar.current.component(.weekday, from: self)
        return weekdays[weekday - 1]
    }
    
    /// 智能日期显示：今天只显示时间，其他日期显示日期+星期+时间
    var smartDateTimeDisplay: String {
        if isToday {
            return formattedTime
        } else if isTomorrow {
            return "明天 \(formattedTime)"
        } else {
            return "\(formattedDate) \(weekdayString) \(formattedTime)"
        }
    }
    
    /// 智能日期显示（不含时间）：今天显示"今天"，其他显示日期+星期
    var smartDateDisplay: String {
        if isToday {
            return "今天"
        } else if isTomorrow {
            return "明天"
        } else {
            return "\(formattedDate) \(weekdayString)"
        }
    }
}
