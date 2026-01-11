import Foundation

#if os(macOS)
import AppKit

// MARK: - ImageError

/// Error types for image handling operations
/// Requirements: 2.7
enum ImageError: Error, LocalizedError, Equatable {
    /// Invalid image data was provided
    case invalidImageData
    
    /// Failed to save the image
    case saveFailed(String)
    
    /// Failed to create the storage directory
    case directoryCreationFailed(String)
    
    /// Unsupported image format
    case unsupportedFormat(String)
    
    /// Image file not found
    case fileNotFound(String)
    
    /// Failed to load image from network
    case networkLoadFailed(String)
    
    /// Failed to decode base64 data
    case base64DecodeFailed
    
    // MARK: - LocalizedError
    
    var errorDescription: String? {
        switch self {
        case .invalidImageData:
            return "无效的图片数据"
        case .saveFailed(let reason):
            return "图片保存失败: \(reason)"
        case .directoryCreationFailed(let path):
            return "无法创建目录: \(path)"
        case .unsupportedFormat(let format):
            return "不支持的图片格式: \(format)"
        case .fileNotFound(let path):
            return "找不到图片文件: \(path)"
        case .networkLoadFailed(let url):
            return "无法加载网络图片: \(url)"
        case .base64DecodeFailed:
            return "Base64 解码失败"
        }
    }
    
    /// English error description for logging
    var englishDescription: String {
        switch self {
        case .invalidImageData:
            return "Invalid image data"
        case .saveFailed(let reason):
            return "Image save failed: \(reason)"
        case .directoryCreationFailed(let path):
            return "Failed to create directory: \(path)"
        case .unsupportedFormat(let format):
            return "Unsupported image format: \(format)"
        case .fileNotFound(let path):
            return "Image file not found: \(path)"
        case .networkLoadFailed(let url):
            return "Failed to load network image: \(url)"
        case .base64DecodeFailed:
            return "Base64 decode failed"
        }
    }
}

// MARK: - ImageStorageConfig

/// Configuration for image storage
/// Requirements: 2.4, 2.5
struct ImageStorageConfig: Codable, Equatable {
    /// The directory where images are stored
    var storageDirectory: String
    
    /// Whether to use relative paths in Markdown
    var useRelativePath: Bool
    
    /// Whether to generate unique filenames
    var generateUniqueFilename: Bool
    
    /// Default storage mode
    var defaultStorageMode: ImageStorageMode
    
    /// Default configuration
    static var `default`: ImageStorageConfig {
        ImageStorageConfig(
            storageDirectory: "images",
            useRelativePath: true,
            generateUniqueFilename: true,
            defaultStorageMode: .localDirectory
        )
    }
    
    init(storageDirectory: String = "images",
         useRelativePath: Bool = true,
         generateUniqueFilename: Bool = true,
         defaultStorageMode: ImageStorageMode = .localDirectory) {
        self.storageDirectory = storageDirectory
        self.useRelativePath = useRelativePath
        self.generateUniqueFilename = generateUniqueFilename
        self.defaultStorageMode = defaultStorageMode
    }
}

// MARK: - ImageStorageMode

/// Mode for storing images
/// Requirements: 2.1.7
enum ImageStorageMode: String, Codable, CaseIterable {
    /// Store images in local directory
    case localDirectory = "local"
    
    /// Keep original URL (for network images)
    case keepOriginalURL = "original"
    
    var displayName: String {
        switch self {
        case .localDirectory: return "本地目录"
        case .keepOriginalURL: return "保留原始 URL"
        }
    }
    
    var description: String {
        switch self {
        case .localDirectory: return "将图片保存到本地目录"
        case .keepOriginalURL: return "保留图片的原始网络地址"
        }
    }
}

// MARK: - SupportedImageFormat

/// Supported image formats
/// Requirements: 2.6
enum SupportedImageFormat: String, CaseIterable {
    case png = "png"
    case jpeg = "jpeg"
    case jpg = "jpg"
    case gif = "gif"
    case webp = "webp"
    
    /// File extension for the format
    var fileExtension: String {
        switch self {
        case .jpg: return "jpg"
        default: return rawValue
        }
    }
    
    /// MIME type for the format
    var mimeType: String {
        switch self {
        case .png: return "image/png"
        case .jpeg, .jpg: return "image/jpeg"
        case .gif: return "image/gif"
        case .webp: return "image/webp"
        }
    }
    
    /// Creates a format from MIME type
    static func fromMimeType(_ mimeType: String) -> SupportedImageFormat? {
        let lowercased = mimeType.lowercased()
        if lowercased.contains("png") { return .png }
        if lowercased.contains("jpeg") || lowercased.contains("jpg") { return .jpeg }
        if lowercased.contains("gif") { return .gif }
        if lowercased.contains("webp") { return .webp }
        return nil
    }
    
    /// Creates a format from file extension
    static func fromExtension(_ ext: String) -> SupportedImageFormat? {
        let lowercased = ext.lowercased().trimmingCharacters(in: CharacterSet(charactersIn: "."))
        return SupportedImageFormat(rawValue: lowercased)
    }
    
    /// Checks if a MIME type is supported
    static func isSupported(mimeType: String) -> Bool {
        return fromMimeType(mimeType) != nil
    }
    
    /// Checks if a file extension is supported
    static func isSupported(extension ext: String) -> Bool {
        return fromExtension(ext) != nil
    }
}

// MARK: - ImageHandler

/// Handles image pasting, storage, and loading
/// Requirements: 2.1, 2.2, 2.3, 2.5, 2.6
class ImageHandler {
    
    // MARK: - Singleton
    
    /// Shared instance
    static let shared = ImageHandler()
    
    // MARK: - Properties
    
    /// Current storage configuration
    var config: ImageStorageConfig
    
    /// The base directory for the current document (used for relative paths)
    var documentDirectory: URL?
    
    // MARK: - Initialization
    
    private init() {
        self.config = ImageStorageConfig.default
    }
    
    // MARK: - Public Methods
    
    /// Handles a pasted image from the editor
    /// - Parameters:
    ///   - base64Data: Base64 encoded image data (may include data URL prefix)
    ///   - mimeType: The MIME type of the image
    /// - Returns: Result containing the relative path to insert or an error
    /// Requirements: 2.1, 2.2, 2.3
    func handlePastedImage(base64Data: String, mimeType: String) -> Result<String, ImageError> {
        // Validate format
        guard let format = SupportedImageFormat.fromMimeType(mimeType) else {
            return .failure(.unsupportedFormat(mimeType))
        }
        
        // Decode base64 data
        guard let imageData = decodeBase64Image(base64Data) else {
            return .failure(.base64DecodeFailed)
        }
        
        // Validate image data
        guard NSImage(data: imageData) != nil else {
            return .failure(.invalidImageData)
        }
        
        // Generate unique filename
        let filename = generateUniqueFilename(for: format.fileExtension)
        
        // Save image
        do {
            let savedURL = try saveImage(data: imageData, filename: filename)
            
            // Get relative path for Markdown
            let relativePath = getRelativePath(for: savedURL)
            return .success(relativePath)
        } catch let error as ImageError {
            return .failure(error)
        } catch {
            return .failure(.saveFailed(error.localizedDescription))
        }
    }
    
    /// Saves image data to the storage directory
    /// - Parameters:
    ///   - data: The image data to save
    ///   - filename: The filename to use
    /// - Returns: The URL where the image was saved
    /// Requirements: 2.1, 2.5
    func saveImage(data: Data, filename: String) throws -> URL {
        // Ensure storage directory exists
        let storageURL = try ensureStorageDirectoryExists()
        
        // Create full path
        let fileURL = storageURL.appendingPathComponent(filename)
        
        // Write data
        do {
            try data.write(to: fileURL)
            MuyaLogger.info("Image saved to: \(fileURL.path)", category: "image-handler")
            return fileURL
        } catch {
            throw ImageError.saveFailed(error.localizedDescription)
        }
    }
    
    /// Generates a unique filename for an image
    /// - Parameter fileExtension: The file extension to use
    /// - Returns: A unique filename
    /// Requirements: 2.2
    func generateUniqueFilename(for fileExtension: String) -> String {
        let timestamp = ISO8601DateFormatter().string(from: Date())
            .replacingOccurrences(of: ":", with: "-")
            .replacingOccurrences(of: "T", with: "_")
        let uuid = UUID().uuidString.prefix(8)
        return "image_\(timestamp)_\(uuid).\(fileExtension)"
    }
    
    /// Updates the configuration
    /// - Parameter config: The new configuration
    func updateConfig(_ config: ImageStorageConfig) {
        self.config = config
    }
    
    /// Sets the document directory for relative path calculation
    /// - Parameter directory: The document directory URL
    func setDocumentDirectory(_ directory: URL?) {
        self.documentDirectory = directory
    }
    
    // MARK: - Private Methods
    
    /// Decodes base64 image data, handling data URL prefix if present
    /// - Parameter base64String: The base64 string (may include data URL prefix)
    /// - Returns: The decoded image data, or nil if decoding fails
    private func decodeBase64Image(_ base64String: String) -> Data? {
        var base64Data = base64String
        
        // Remove data URL prefix if present (e.g., "data:image/png;base64,")
        if base64Data.contains(",") {
            let components = base64Data.components(separatedBy: ",")
            if components.count >= 2 {
                base64Data = components[1]
            }
        }
        
        // Decode base64
        return Data(base64Encoded: base64Data, options: .ignoreUnknownCharacters)
    }
}

#endif


#if os(macOS)

// MARK: - ImageHandler Storage Directory Management

extension ImageHandler {
    
    /// Ensures the storage directory exists, creating it if necessary
    /// - Returns: The URL of the storage directory
    /// - Throws: ImageError if directory creation fails
    /// Requirements: 2.5
    func ensureStorageDirectoryExists() throws -> URL {
        let storageURL = getStorageDirectoryURL()
        
        let fileManager = FileManager.default
        
        if !fileManager.fileExists(atPath: storageURL.path) {
            do {
                try fileManager.createDirectory(at: storageURL, withIntermediateDirectories: true, attributes: nil)
                MuyaLogger.info("Created image storage directory: \(storageURL.path)", category: "image-handler")
            } catch {
                throw ImageError.directoryCreationFailed(storageURL.path)
            }
        }
        
        return storageURL
    }
    
    /// Gets the storage directory URL based on configuration
    /// - Returns: The URL of the storage directory
    func getStorageDirectoryURL() -> URL {
        // If we have a document directory, use it as base
        if let docDir = documentDirectory {
            return docDir.appendingPathComponent(config.storageDirectory, isDirectory: true)
        }
        
        // Fallback to app support directory
        let appSupport = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask).first!
        let flowTaskDir = appSupport.appendingPathComponent("FlowTask", isDirectory: true)
        return flowTaskDir.appendingPathComponent(config.storageDirectory, isDirectory: true)
    }
    
    /// Gets the relative path for an image URL
    /// - Parameter imageURL: The absolute URL of the image
    /// - Returns: The relative path to use in Markdown
    /// Requirements: 2.3
    func getRelativePath(for imageURL: URL) -> String {
        // If we have a document directory, calculate relative path
        if let docDir = documentDirectory {
            let imagePath = imageURL.path
            let docPath = docDir.path
            
            // Check if image is within document directory
            if imagePath.hasPrefix(docPath) {
                var relativePath = String(imagePath.dropFirst(docPath.count))
                if relativePath.hasPrefix("/") {
                    relativePath = String(relativePath.dropFirst())
                }
                return relativePath
            }
        }
        
        // If using relative path config, return just the storage directory + filename
        if config.useRelativePath {
            let filename = imageURL.lastPathComponent
            return "\(config.storageDirectory)/\(filename)"
        }
        
        // Return absolute path as fallback
        return imageURL.path
    }
    
    /// Gets the relative path from a document URL to an image URL
    /// - Parameters:
    ///   - imageURL: The absolute URL of the image
    ///   - documentURL: The URL of the document
    /// - Returns: The relative path from document to image
    /// Requirements: 2.3
    func getRelativePath(for imageURL: URL, relativeTo documentURL: URL) -> String {
        let imagePath = imageURL.path
        let documentDir = documentURL.deletingLastPathComponent().path
        
        // Check if image is within document directory
        if imagePath.hasPrefix(documentDir) {
            var relativePath = String(imagePath.dropFirst(documentDir.count))
            if relativePath.hasPrefix("/") {
                relativePath = String(relativePath.dropFirst())
            }
            return relativePath
        }
        
        // Return the storage directory path + filename
        let filename = imageURL.lastPathComponent
        return "\(config.storageDirectory)/\(filename)"
    }
    
    /// Checks if an image file exists at the given path
    /// - Parameter path: The path to check (can be relative or absolute)
    /// - Returns: True if the file exists
    func imageExists(at path: String) -> Bool {
        let fileManager = FileManager.default
        
        // Check if it's an absolute path
        if path.hasPrefix("/") {
            return fileManager.fileExists(atPath: path)
        }
        
        // Check relative to document directory
        if let docDir = documentDirectory {
            let fullPath = docDir.appendingPathComponent(path).path
            return fileManager.fileExists(atPath: fullPath)
        }
        
        // Check relative to storage directory
        let storageURL = getStorageDirectoryURL()
        let fullPath = storageURL.deletingLastPathComponent().appendingPathComponent(path).path
        return fileManager.fileExists(atPath: fullPath)
    }
    
    /// Gets the absolute URL for an image path
    /// - Parameter path: The path (can be relative or absolute)
    /// - Returns: The absolute URL, or nil if not found
    func getAbsoluteURL(for path: String) -> URL? {
        // Check if it's already an absolute path
        if path.hasPrefix("/") {
            let url = URL(fileURLWithPath: path)
            if FileManager.default.fileExists(atPath: path) {
                return url
            }
            return nil
        }
        
        // Check if it's a URL
        if path.hasPrefix("http://") || path.hasPrefix("https://") {
            return URL(string: path)
        }
        
        // Check relative to document directory
        if let docDir = documentDirectory {
            let url = docDir.appendingPathComponent(path)
            if FileManager.default.fileExists(atPath: url.path) {
                return url
            }
        }
        
        // Check relative to storage directory
        let storageURL = getStorageDirectoryURL()
        let url = storageURL.deletingLastPathComponent().appendingPathComponent(path)
        if FileManager.default.fileExists(atPath: url.path) {
            return url
        }
        
        return nil
    }
    
    /// Deletes an image file
    /// - Parameter path: The path to the image (can be relative or absolute)
    /// - Returns: True if deletion was successful
    func deleteImage(at path: String) -> Bool {
        guard let url = getAbsoluteURL(for: path) else {
            return false
        }
        
        do {
            try FileManager.default.removeItem(at: url)
            MuyaLogger.info("Deleted image: \(url.path)", category: "image-handler")
            return true
        } catch {
            MuyaLogger.warning("Failed to delete image: \(error.localizedDescription)", category: "image-handler")
            return false
        }
    }
    
    /// Lists all images in the storage directory
    /// - Returns: Array of image filenames
    func listImages() -> [String] {
        let storageURL = getStorageDirectoryURL()
        
        guard FileManager.default.fileExists(atPath: storageURL.path) else {
            return []
        }
        
        do {
            let contents = try FileManager.default.contentsOfDirectory(at: storageURL, includingPropertiesForKeys: nil)
            return contents
                .filter { url in
                    let ext = url.pathExtension.lowercased()
                    return SupportedImageFormat.isSupported(extension: ext)
                }
                .map { $0.lastPathComponent }
        } catch {
            MuyaLogger.warning("Failed to list images: \(error.localizedDescription)", category: "image-handler")
            return []
        }
    }
    
    /// Gets the total size of all images in the storage directory
    /// - Returns: Total size in bytes
    func getTotalImageSize() -> Int64 {
        let storageURL = getStorageDirectoryURL()
        
        guard FileManager.default.fileExists(atPath: storageURL.path) else {
            return 0
        }
        
        do {
            let contents = try FileManager.default.contentsOfDirectory(at: storageURL, includingPropertiesForKeys: [.fileSizeKey])
            var totalSize: Int64 = 0
            
            for url in contents {
                let ext = url.pathExtension.lowercased()
                if SupportedImageFormat.isSupported(extension: ext) {
                    let resourceValues = try url.resourceValues(forKeys: [.fileSizeKey])
                    totalSize += Int64(resourceValues.fileSize ?? 0)
                }
            }
            
            return totalSize
        } catch {
            MuyaLogger.warning("Failed to calculate image size: \(error.localizedDescription)", category: "image-handler")
            return 0
        }
    }
}

#endif
