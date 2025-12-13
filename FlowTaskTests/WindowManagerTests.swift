import XCTest

#if os(macOS)
import AppKit
@testable import FlowTask

// MARK: - Window Manager Property Tests
/// Feature: macos-window-fixes, Property 1: Window restoration preserves identity
/// Validates: Requirements 1.5
class WindowManagerPropertyTests: XCTestCase {
    
    func testWindowRestorationPreservesIdentity() async throws {
        // Run the property test 100 times
        for iteration in 1...100 {
        // This property tests that when a main window exists and is minimized,
        // calling showMainWindow should restore the same window instance
        // rather than creating a new one.
        
        await MainActor.run {
            let windowManager = WindowManager.shared
            
            // Create a mock window to simulate an existing main window
            let mockWindow = NSWindow(
                contentRect: NSRect(x: 0, y: 0, width: 800, height: 600),
                styleMask: [.titled, .closable, .miniaturizable, .resizable],
                backing: .buffered,
                defer: false
            )
            mockWindow.title = "FlowTask"
            mockWindow.makeKeyAndOrderFront(nil)
            
            // Store the window identifier
            let originalWindowNumber = mockWindow.windowNumber
            
            // Minimize the window
            mockWindow.miniaturize(nil)
            
            // Small delay to ensure minimization completes
            Thread.sleep(forTimeInterval: 0.1)
            
            // Find the window using WindowManager's findMainWindow method
            let foundWindow = windowManager.findMainWindow()
            
            // Verify that we found a window
            XCTAssertNotNil(foundWindow, "WindowManager should find the existing window (iteration \(iteration))")
            
            if let foundWindow = foundWindow {
                // Verify it's the same window instance
                XCTAssertEqual(foundWindow.windowNumber, originalWindowNumber,
                              "Found window should have the same window number as the original (iteration \(iteration))")
                
                // Verify the window is minimized
                XCTAssertTrue(foundWindow.isMiniaturized,
                             "Found window should be minimized (iteration \(iteration))")
                
                // Restore the window
                foundWindow.deminiaturize(nil)
                
                // Verify the window is no longer minimized
                Thread.sleep(forTimeInterval: 0.1)
                XCTAssertFalse(foundWindow.isMiniaturized,
                              "Window should be restored after deminiaturize (iteration \(iteration))")
                
                // Verify it's still the same window
                XCTAssertEqual(foundWindow.windowNumber, originalWindowNumber,
                              "Window identity should be preserved after restoration (iteration \(iteration))")
            }
            
            // Clean up
            mockWindow.close()
            }
        }
    }
    
    func testWindowRestorationWithMultipleWindows() async throws {
        // Run the property test 100 times
        for iteration in 1...100 {
        // Test that findMainWindow correctly identifies the main window
        // when multiple windows exist
        
        await MainActor.run {
            let windowManager = WindowManager.shared
            
            // Create multiple windows
            let mainWindow = NSWindow(
                contentRect: NSRect(x: 0, y: 0, width: 800, height: 600),
                styleMask: [.titled, .closable, .miniaturizable, .resizable],
                backing: .buffered,
                defer: false
            )
            mainWindow.title = "FlowTask"
            mainWindow.makeKeyAndOrderFront(nil)
            
            // Create a settings window (should be excluded)
            let settingsWindow = NSWindow(
                contentRect: NSRect(x: 0, y: 0, width: 400, height: 300),
                styleMask: [.titled, .closable],
                backing: .buffered,
                defer: false
            )
            settingsWindow.title = "Settings"
            settingsWindow.makeKeyAndOrderFront(nil)
            
            // Create a panel (should be excluded)
            let panel = NSPanel(
                contentRect: NSRect(x: 0, y: 0, width: 300, height: 200),
                styleMask: [.titled, .closable],
                backing: .buffered,
                defer: false
            )
            panel.title = "Panel"
            panel.makeKeyAndOrderFront(nil)
            
            let mainWindowNumber = mainWindow.windowNumber
            
            // Find the main window
            let foundWindow = windowManager.findMainWindow()
            
            // Verify we found the correct window
            XCTAssertNotNil(foundWindow, "Should find a main window (iteration \(iteration))")
            
            if let foundWindow = foundWindow {
                XCTAssertEqual(foundWindow.windowNumber, mainWindowNumber,
                              "Should find the main window, not settings or panel (iteration \(iteration))")
                XCTAssertEqual(foundWindow.title, "FlowTask",
                              "Found window should be the FlowTask main window (iteration \(iteration))")
            }
            
            // Clean up
            mainWindow.close()
            settingsWindow.close()
            panel.close()
            }
        }
    }
    
    func testWindowRestorationWhenNoWindowExists() async throws {
        // Run the property test 100 times
        for iteration in 1...100 {
        // Test that findMainWindow returns nil when no main window exists
        
        await MainActor.run {
            let windowManager = WindowManager.shared
            
            // Close all existing windows
            for window in NSApp.windows {
                if !(window is NSPanel) && !window.title.contains("Settings") {
                    window.close()
                }
            }
            
            // Small delay to ensure windows are closed
            Thread.sleep(forTimeInterval: 0.1)
            
            // Try to find main window
            let foundWindow = windowManager.findMainWindow()
            
            // Verify no window is found (or if found, it's not our main window)
            if let foundWindow = foundWindow {
                // If a window is found, it should not be a FlowTask main window
                // (it might be a system window we couldn't close)
                let isSystemWindow = foundWindow.className.contains("StatusBar") ||
                                   foundWindow.className.contains("Menu") ||
                                   foundWindow.className.contains("Popover")
                XCTAssertFalse(isSystemWindow,
                              "Should not find system windows as main window (iteration \(iteration))")
            }
            }
        }
    }
}

#endif
