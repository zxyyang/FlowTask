import Foundation

#if os(macOS)

// MARK: - MarkdownExporter

/// Utility class for exporting and normalizing Markdown content
/// Ensures clean Markdown output without formatting artifacts
/// Requirements: 20.2, 20.4
class MarkdownExporter {
    
    // MARK: - Singleton
    
    static let shared = MarkdownExporter()
    
    private init() {}
    
    // MARK: - Export Options
    
    /// Options for Markdown export
    struct ExportOptions {
        /// Whether to normalize line endings to Unix style (\n)
        var normalizeLineEndings: Bool = true
        
        /// Whether to trim trailing whitespace from lines
        var trimTrailingWhitespace: Bool = true
        
        /// Whether to ensure file ends with a single newline
        var ensureTrailingNewline: Bool = true
        
        /// Whether to collapse multiple blank lines into one
        var collapseBlankLines: Bool = true
        
        /// Whether to normalize list markers to a consistent style
        var normalizeListMarkers: Bool = false
        
        /// The list marker to use when normalizing (-, *, or +)
        var preferredListMarker: String = "-"
        
        /// Whether to normalize heading style
        var normalizeHeadings: Bool = false
        
        /// Default export options
        static let `default` = ExportOptions()
        
        /// Minimal processing options (preserve original as much as possible)
        static let minimal = ExportOptions(
            normalizeLineEndings: true,
            trimTrailingWhitespace: false,
            ensureTrailingNewline: true,
            collapseBlankLines: false,
            normalizeListMarkers: false,
            normalizeHeadings: false
        )
        
        /// Strict formatting options
        static let strict = ExportOptions(
            normalizeLineEndings: true,
            trimTrailingWhitespace: true,
            ensureTrailingNewline: true,
            collapseBlankLines: true,
            normalizeListMarkers: true,
            normalizeHeadings: true
        )
    }
    
    // MARK: - Export Methods
    
    /// Exports markdown content with the specified options
    /// - Parameters:
    ///   - markdown: The raw markdown content
    ///   - options: Export options to apply
    /// - Returns: The cleaned and normalized markdown
    func export(_ markdown: String, options: ExportOptions = .default) -> String {
        var result = markdown
        
        // Step 1: Normalize line endings
        if options.normalizeLineEndings {
            result = normalizeLineEndings(result)
        }
        
        // Step 2: Process lines
        var lines = result.components(separatedBy: "\n")
        
        // Trim trailing whitespace from each line
        if options.trimTrailingWhitespace {
            lines = lines.map { trimTrailingWhitespace($0) }
        }
        
        // Normalize list markers
        if options.normalizeListMarkers {
            lines = normalizeListMarkers(lines, preferredMarker: options.preferredListMarker)
        }
        
        // Normalize headings
        if options.normalizeHeadings {
            lines = normalizeHeadings(lines)
        }
        
        result = lines.joined(separator: "\n")
        
        // Step 3: Collapse multiple blank lines
        if options.collapseBlankLines {
            result = collapseBlankLines(result)
        }
        
        // Step 4: Ensure trailing newline
        if options.ensureTrailingNewline {
            result = ensureTrailingNewline(result)
        }
        
        return result
    }
    
    /// Normalizes markdown for comparison (more aggressive normalization)
    /// - Parameter markdown: The markdown content
    /// - Returns: Normalized markdown suitable for comparison
    func normalizeForComparison(_ markdown: String) -> String {
        var result = markdown
        
        // Normalize line endings
        result = normalizeLineEndings(result)
        
        // Split into lines and process
        var lines = result.components(separatedBy: "\n")
        
        // Trim whitespace from each line
        lines = lines.map { $0.trimmingCharacters(in: .whitespaces) }
        
        // Join and collapse blank lines
        result = lines.joined(separator: "\n")
        result = collapseBlankLines(result)
        
        // Trim leading/trailing whitespace
        result = result.trimmingCharacters(in: .whitespacesAndNewlines)
        
        return result
    }
    
    /// Checks if two markdown strings are semantically equivalent
    /// - Parameters:
    ///   - original: The original markdown
    ///   - exported: The exported markdown
    /// - Returns: True if the markdown is semantically equivalent
    func areEquivalent(_ original: String, _ exported: String) -> Bool {
        let normalizedOriginal = normalizeForComparison(original)
        let normalizedExported = normalizeForComparison(exported)
        return normalizedOriginal == normalizedExported
    }
    
    // MARK: - Private Helpers
    
    /// Normalizes line endings to Unix style (\n)
    private func normalizeLineEndings(_ text: String) -> String {
        return text
            .replacingOccurrences(of: "\r\n", with: "\n")
            .replacingOccurrences(of: "\r", with: "\n")
    }
    
    /// Trims trailing whitespace from a line (preserving intentional trailing spaces for hard breaks)
    private func trimTrailingWhitespace(_ line: String) -> String {
        // In Markdown, two trailing spaces indicate a hard line break
        // We preserve those but remove other trailing whitespace
        if line.hasSuffix("  ") {
            // Preserve exactly two trailing spaces for hard breaks
            let trimmed = line.trimmingCharacters(in: .whitespaces)
            return trimmed + "  "
        }
        return line.trimmingCharacters(in: CharacterSet(charactersIn: " \t"))
    }
    
    /// Collapses multiple consecutive blank lines into a single blank line
    private func collapseBlankLines(_ text: String) -> String {
        // Replace 3+ consecutive newlines with 2 newlines (one blank line)
        var result = text
        let pattern = "\n{3,}"
        if let regex = try? NSRegularExpression(pattern: pattern, options: []) {
            result = regex.stringByReplacingMatches(
                in: result,
                options: [],
                range: NSRange(result.startIndex..., in: result),
                withTemplate: "\n\n"
            )
        }
        return result
    }
    
    /// Ensures the text ends with exactly one newline
    private func ensureTrailingNewline(_ text: String) -> String {
        var result = text
        
        // Remove trailing newlines
        while result.hasSuffix("\n") {
            result.removeLast()
        }
        
        // Add single trailing newline
        return result + "\n"
    }
    
    /// Normalizes list markers to a consistent style
    private func normalizeListMarkers(_ lines: [String], preferredMarker: String) -> [String] {
        let listMarkerPattern = "^(\\s*)([*+-])\\s"
        guard let regex = try? NSRegularExpression(pattern: listMarkerPattern, options: []) else {
            return lines
        }
        
        return lines.map { line in
            let range = NSRange(line.startIndex..., in: line)
            if let match = regex.firstMatch(in: line, options: [], range: range) {
                let indentRange = Range(match.range(at: 1), in: line)!
                let indent = String(line[indentRange])
                let restStart = line.index(line.startIndex, offsetBy: match.range.length)
                let rest = String(line[restStart...])
                return "\(indent)\(preferredMarker) \(rest)"
            }
            return line
        }
    }
    
    /// Normalizes headings to ATX style with single space after #
    private func normalizeHeadings(_ lines: [String]) -> [String] {
        let headingPattern = "^(#{1,6})\\s+"
        guard let regex = try? NSRegularExpression(pattern: headingPattern, options: []) else {
            return lines
        }
        
        return lines.map { line in
            let range = NSRange(line.startIndex..., in: line)
            if let match = regex.firstMatch(in: line, options: [], range: range) {
                let hashRange = Range(match.range(at: 1), in: line)!
                let hashes = String(line[hashRange])
                let restStart = line.index(line.startIndex, offsetBy: match.range.length)
                let rest = String(line[restStart...])
                return "\(hashes) \(rest)"
            }
            return line
        }
    }
}

// MARK: - MarkdownExporter Extension for SwiftJSBridge

extension SwiftJSBridge {
    
    /// Gets markdown content and exports it with the specified options
    /// - Parameters:
    ///   - options: Export options to apply
    ///   - completion: Callback with the exported markdown or error
    func getExportedMarkdown(
        options: MarkdownExporter.ExportOptions = .default,
        completion: @escaping (Result<String, MuyaError>) -> Void
    ) {
        getMarkdown { result in
            switch result {
            case .success(let markdown):
                let exported = MarkdownExporter.shared.export(markdown, options: options)
                completion(.success(exported))
            case .failure(let error):
                // Convert error to MuyaError
                let muyaError: MuyaError
                switch error {
                case .bridgeCommunicationFailed(let msg):
                    muyaError = .bridgeCommunicationFailed(msg)
                case .javascriptError(let msg):
                    muyaError = .javascriptError(msg)
                default:
                    muyaError = .unknown(error.localizedDescription)
                }
                completion(.failure(muyaError))
            }
        }
    }
}

#endif
