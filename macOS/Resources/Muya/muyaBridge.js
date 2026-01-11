/**
 * Muya 编辑器与 Swift 的桥接脚本
 * 实现 Swift-JavaScript 双向通信
 */
window.muyaBridge = {
    muya: null,
    isReady: false,
    lastContent: '',
    debounceTimer: null,
    debounceDelay: 300,
    // 图片路径映射：dataUrl -> originalPath
    imagePathMap: new Map(),
    
    /**
     * 初始化桥接
     * @param {Muya} muya - Muya 编辑器实例
     */
    init: function(muya) {
        this.muya = muya;
        this.setupEventListeners();
        this.isReady = true;
        this.notifySwift('ready', { success: true, version: '0.2.5' });
    },
    
    /**
     * 设置事件监听器
     */
    setupEventListeners: function() {
        if (!this.muya) return;
        
        console.log('[muyaBridge] 设置事件监听器');
        
        // 内容变化事件（带防抖）
        this.muya.on('change', (changes) => {
            console.log('[muyaBridge] muya change 事件触发');
            this.handleContentChange();
        });
        
        // 焦点事件
        this.muya.on('focus', () => {
            this.notifySwift('focus', {});
        });
        
        this.muya.on('blur', () => {
            // 失去焦点时立即保存
            this.flushContentChange();
            this.notifySwift('blur', {});
        });
        
        // 选择变化事件
        this.muya.on('selectionChange', (selection) => {
            const selectedText = this.getSelection();
            this.notifySwift('select', { 
                text: selectedText,
                selection: selection 
            });
        });
        
        // 历史状态变化
        this.muya.on('stateChange', () => {
            this.notifySwift('historyChange', {
                canUndo: this.muya.history ? this.muya.history.canUndo() : true,
                canRedo: this.muya.history ? this.muya.history.canRedo() : true
            });
        });
        
        // 图片粘贴事件 - 增强处理
        document.addEventListener('paste', (e) => {
            this.handlePasteEvent(e);
        });
        
        // 键盘快捷键事件
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcut(e);
        });
        
        // 监听 input 事件作为备用（某些情况下 change 事件可能不触发）
        const editorElement = document.getElementById('editor');
        if (editorElement) {
            editorElement.addEventListener('input', () => {
                console.log('[muyaBridge] input 事件触发');
                this.handleContentChange();
            });
            
            // 监听 keyup 事件作为额外备用
            editorElement.addEventListener('keyup', (e) => {
                // 忽略修饰键和功能键
                if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Enter') {
                    console.log('[muyaBridge] keyup 事件触发:', e.key);
                    this.handleContentChange();
                }
            });
        }
        
        // 使用 MutationObserver 监听 DOM 变化作为最可靠的备用方案
        this.setupMutationObserver();
    },
    
    /**
     * 设置 MutationObserver 监听 DOM 变化
     */
    setupMutationObserver: function() {
        const editorElement = document.getElementById('editor');
        if (!editorElement) return;
        
        let mutationTimer = null;
        
        const observer = new MutationObserver((mutations) => {
            // 过滤掉非内容相关的变化
            const hasContentChange = mutations.some(mutation => {
                // 忽略 class 和 style 变化
                if (mutation.type === 'attributes') {
                    return mutation.attributeName !== 'class' && mutation.attributeName !== 'style';
                }
                return mutation.type === 'characterData' || mutation.type === 'childList';
            });
            
            if (hasContentChange) {
                // 使用防抖避免频繁触发
                if (mutationTimer) clearTimeout(mutationTimer);
                mutationTimer = setTimeout(() => {
                    console.log('[muyaBridge] MutationObserver 检测到内容变化');
                    this.handleContentChange();
                }, 100);
            }
        });
        
        observer.observe(editorElement, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: false
        });
        
        console.log('[muyaBridge] MutationObserver 已启动');
    },
    
    /**
     * 处理粘贴事件
     * @param {ClipboardEvent} e - 粘贴事件
     */
    handlePasteEvent: function(e) {
        console.log('[muyaBridge] handlePasteEvent 触发');
        const items = e.clipboardData?.items;
        console.log('[muyaBridge] clipboardData items:', items ? items.length : 'null');
        if (!items) return;
        
        // 检查是否有图片
        for (let item of items) {
            console.log('[muyaBridge] item type:', item.type);
            if (item.type.startsWith('image/')) {
                console.log('[muyaBridge] 发现图片类型:', item.type);
                e.preventDefault();
                e.stopPropagation();
                const file = item.getAsFile();
                console.log('[muyaBridge] 获取文件:', file ? file.name : 'null');
                if (file) {
                    this.handleImagePaste(file);
                }
                return;
            }
        }
        
        // 检查是否有文件（可能是拖拽的图片文件）
        const files = e.clipboardData?.files;
        console.log('[muyaBridge] clipboardData files:', files ? files.length : 'null');
        if (files && files.length > 0) {
            for (let file of files) {
                console.log('[muyaBridge] file type:', file.type);
                if (file.type.startsWith('image/')) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleImagePaste(file);
                    return;
                }
            }
        }
    },
    
    /**
     * 处理键盘快捷键
     * @param {KeyboardEvent} e - 键盘事件
     */
    handleKeyboardShortcut: function(e) {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
        
        if (cmdOrCtrl) {
            switch (e.key.toLowerCase()) {
                case 'z':
                    if (e.shiftKey) {
                        // Cmd/Ctrl+Shift+Z = Redo
                        e.preventDefault();
                        e.stopPropagation();
                        this.redo();
                        return false;
                    } else {
                        // Cmd/Ctrl+Z = Undo
                        e.preventDefault();
                        e.stopPropagation();
                        this.undo();
                        return false;
                    }
                case 'y':
                    // Ctrl+Y = Redo (Windows style)
                    if (!isMac) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.redo();
                        return false;
                    }
                    break;
                case 's':
                    // Cmd/Ctrl+S = Save - 通知 Swift 保存
                    e.preventDefault();
                    e.stopPropagation();
                    // 先立即触发内容变化，确保最新内容被保存
                    if (this.debounceTimer) {
                        clearTimeout(this.debounceTimer);
                        this.debounceTimer = null;
                    }
                    const markdown = this.getValue();
                    this.lastContent = markdown;
                    this.notifySwift('contentChange', { markdown: markdown });
                    // 然后通知保存
                    setTimeout(() => {
                        this.notifySwift('save', {});
                    }, 50);
                    return false;
            }
        }
    },
    
    /**
     * 处理内容变化（带防抖）
     */
    handleContentChange: function() {
        if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
        }
        
        // 使用非常短的防抖延迟以实现近乎即时的保存
        const effectiveDelay = 50; // 50ms 防抖
        
        this.debounceTimer = setTimeout(() => {
            const markdown = this.getValue();
            // 检查内容是否真的变化了
            if (markdown !== this.lastContent) {
                this.lastContent = markdown;
                console.log('[muyaBridge] handleContentChange: 内容已变化，长度:', markdown.length);
                this.notifySwift('contentChange', { markdown: markdown });
                
                // 同时更新大纲
                this.notifyOutlineChange();
                // 更新计数
                this.notifyCounterChange();
            }
        }, effectiveDelay);
    },
    
    /**
     * 立即刷新内容变化（不使用防抖）
     * 用于保存前或失去焦点时确保内容是最新的
     */
    flushContentChange: function() {
        if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = null;
        }
        
        const markdown = this.getValue();
        if (markdown !== this.lastContent) {
            this.lastContent = markdown;
            console.log('[muyaBridge] flushContentChange: 立即同步内容，长度:', markdown.length);
            this.notifySwift('contentChange', { markdown: markdown });
        }
    },
    
    /**
     * 通知大纲变化
     */
    notifyOutlineChange: function() {
        const outline = this.getOutline();
        this.notifySwift('outlineChange', { outline: outline });
    },
    
    /**
     * 通知计数变化
     */
    notifyCounterChange: function() {
        const counter = this.getCounter();
        this.notifySwift('counterChange', counter);
    },
    
    /**
     * 处理图片粘贴
     * @param {File} file - 图片文件
     */
    handleImagePaste: function(file) {
        console.log('[muyaBridge] handleImagePaste 开始处理:', file.name, file.type, file.size);
        const reader = new FileReader();
        reader.onload = (e) => {
            console.log('[muyaBridge] FileReader 加载完成, data URL 长度:', e.target.result.length);
            this.notifySwift('imagePaste', {
                data: e.target.result,
                name: file.name,
                type: file.type,
                size: file.size
            });
            console.log('[muyaBridge] 已通知 Swift imagePaste 事件');
        };
        reader.onerror = (e) => {
            console.error('[muyaBridge] FileReader 错误:', e);
        };
        reader.readAsDataURL(file);
    },
    
    /**
     * 通知 Swift 层
     * @param {string} type - 消息类型
     * @param {object} data - 消息数据
     */
    notifySwift: function(type, data) {
        if (window.webkit?.messageHandlers?.muyaHandler) {
            window.webkit.messageHandlers.muyaHandler.postMessage({
                type: type,
                data: data,
                timestamp: Date.now()
            });
        }
    },
    
    // ==================== 内容方法 ====================
    
    /**
     * 将本地图片路径转换为自定义 scheme URL
     * @param {string} content - Markdown 内容
     * @returns {string} 转换后的内容
     */
    convertImagePaths: function(content) {
        // 匹配 markdown 图片语法 ![alt](path)
        // 将绝对路径 /Users/... 转换为 muya-local://local/absolute/Users/...
        return content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, path) => {
            console.log('Processing image path:', path);
            // 跳过已经是 URL 的路径
            if (path.startsWith('http://') || path.startsWith('https://') || 
                path.startsWith('muya-local://') || path.startsWith('data:')) {
                console.log('Skipping URL path:', path);
                return match;
            }
            // 转换绝对路径
            if (path.startsWith('/')) {
                const newPath = 'muya-local://local/absolute' + path;
                console.log('Converted to:', newPath);
                return `![${alt}](${newPath})`;
            }
            console.log('Keeping original path:', path);
            return match;
        });
    },
    
    /**
     * 预加载图片并转换为 data URL
     * @param {string} content - Markdown 内容
     * @returns {Promise<string>} 转换后的内容
     */
    preloadImages: async function(content) {
        // 使用更宽松的正则，匹配所有 muya-local:// 图片
        const imageRegex = /!\[([^\]]*)\]\((muya-local:\/\/local\/absolute\/[^)]+)\)/g;
        let matches = [];
        let match;
        while ((match = imageRegex.exec(content)) !== null) {
            matches.push({
                fullMatch: match[0],
                alt: match[1],
                url: match[2],
                originalPath: match[2].replace('muya-local://local/absolute', '')
            });
        }
        
        console.log('Found', matches.length, 'images to preload');
        
        if (matches.length === 0) {
            return content;
        }
        
        let result = content;
        for (const m of matches) {
            try {
                console.log('Preloading image:', m.url);
                const response = await fetch(m.url);
                console.log('Fetch response:', response.status, response.ok);
                if (response.ok) {
                    const blob = await response.blob();
                    console.log('Blob size:', blob.size, 'type:', blob.type);
                    const dataUrl = await new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result);
                        reader.readAsDataURL(blob);
                    });
                    console.log('Data URL created, length:', dataUrl.length);
                    // 保存映射关系
                    this.imagePathMap.set(dataUrl, m.originalPath);
                    // 使用 split/join 替换，避免正则问题
                    result = result.split(m.fullMatch).join(`![${m.alt}](${dataUrl})`);
                    console.log('Replaced image in content');
                } else {
                    console.warn('Fetch failed with status:', response.status);
                }
            } catch (e) {
                console.error('Failed to preload image:', m.url, e);
            }
        }
        return result;
    },
    
    /**
     * 直接设置 Markdown 内容（已预处理图片）
     * @param {string} content - Markdown 内容（图片已转换为 data URL）
     * @returns {boolean} 是否成功
     */
    setValueDirect: function(content) {
        if (!this.muya) {
            console.error('setValueDirect: muya 实例不存在');
            return false;
        }
        try {
            console.log('setValueDirect: 设置内容，长度:', content.length);
            
            // 检查是否包含图片
            const hasImage = content.includes('![');
            const hasDataUrl = content.includes('data:image');
            const hasMuyaLocal = content.includes('muya-local://');
            console.log('setValueDirect: 包含图片标记:', hasImage, '包含 data URL:', hasDataUrl, '包含 muya-local:', hasMuyaLocal);
            
            if (hasDataUrl) {
                // 提取并打印 data URL 的前100个字符
                const match = content.match(/data:image[^)]+/);
                if (match) {
                    console.log('setValueDirect: data URL 前缀:', match[0].substring(0, 100));
                }
            }
            
            if (hasMuyaLocal) {
                // 提取并打印 muya-local URL
                const match = content.match(/muya-local:\/\/[^)]+/);
                if (match) {
                    console.log('setValueDirect: muya-local URL:', match[0]);
                }
            }
            
            this.lastContent = content;
            this.muya.setContent(content);
            console.log('setValueDirect: 设置成功');
            
            // 延迟检查 DOM 中的图片并触发图片拦截器
            setTimeout(() => {
                const images = document.querySelectorAll('img');
                console.log('setValueDirect: DOM 中图片数量:', images.length);
                images.forEach((img, i) => {
                    const src = img.getAttribute('src') || img.src || '';
                    console.log('setValueDirect: 图片', i, 'src:', src.substring(0, 80));
                });
                // 触发图片拦截器扫描
                if (window.muyaImageInterceptor && window.muyaImageInterceptor.scanAllImages) {
                    console.log('setValueDirect: 触发图片拦截器扫描');
                    window.muyaImageInterceptor.scanAllImages();
                }
            }, 100);
            
            return true;
        } catch (e) {
            console.error('setValueDirect: 设置失败:', e);
            this.notifySwift('error', { message: '设置内容失败: ' + e.message });
            return false;
        }
    },
    
    /**
     * 设置 Markdown 内容（带图片预加载，已废弃）
     * @param {string} content - Markdown 内容
     * @returns {boolean} 是否成功
     */
    setValue: function(content) {
        // 直接调用 setValueDirect，图片预处理已在 Swift 端完成
        return this.setValueDirect(content);
    },
    
    /**
     * 获取 Markdown 内容
     * @returns {string} Markdown 内容
     */
    getValue: function() {
        if (!this.muya) return '';
        try {
            let content = this.muya.getMarkdown();
            // data URL 的转换在 Swift 端处理，这里不做处理
            return content;
        } catch (e) {
            this.notifySwift('error', { message: '获取内容失败: ' + e.message });
            return '';
        }
    },
    
    /**
     * 获取 HTML 内容
     * @returns {string} HTML 内容
     */
    getHTML: function() {
        if (!this.muya) return '';
        try {
            return this.muya.getHTML();
        } catch (e) {
            this.notifySwift('error', { message: '获取 HTML 失败: ' + e.message });
            return '';
        }
    },
    
    /**
     * 在光标位置插入内容
     * @param {string} value - 要插入的内容
     * @returns {boolean} 是否成功
     */
    insertValue: function(value) {
        if (!this.muya) return false;
        try {
            console.log('[muyaBridge] insertValue 调用:', value.substring(0, 50));
            
            // 方法1: 使用 document.execCommand (已废弃但仍有效)
            const result = document.execCommand('insertText', false, value);
            if (result) {
                console.log('[muyaBridge] insertValue: execCommand 成功');
                this.handleContentChange();
                return true;
            }
            
            // 方法2: 使用 Selection API 直接插入
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                range.deleteContents();
                
                // 创建文本节点
                const textNode = document.createTextNode(value);
                range.insertNode(textNode);
                
                // 移动光标到插入内容之后
                range.setStartAfter(textNode);
                range.setEndAfter(textNode);
                selection.removeAllRanges();
                selection.addRange(range);
                
                // 触发 input 事件让 Muya 感知变化
                const inputEvent = new InputEvent('input', {
                    bubbles: true,
                    cancelable: true,
                    inputType: 'insertText',
                    data: value
                });
                this.muya.domNode.dispatchEvent(inputEvent);
                
                console.log('[muyaBridge] insertValue: Selection API 成功');
                this.handleContentChange();
                return true;
            }
            
            console.warn('[muyaBridge] insertValue: 没有选区');
            return false;
        } catch (e) {
            console.error('[muyaBridge] insertValue 失败:', e);
            this.notifySwift('error', { message: '插入内容失败: ' + e.message });
            return false;
        }
    },
    
    // ==================== 格式化方法 ====================
    
    /**
     * 应用格式化
     * @param {string} type - 格式类型
     * @returns {boolean} 是否成功
     */
    format: function(type) {
        if (!this.muya) return false;
        try {
            this.muya.format(type);
            return true;
        } catch (e) {
            this.notifySwift('error', { message: '格式化失败: ' + e.message });
            return false;
        }
    },
    
    /**
     * 插入链接
     * @param {string} url - 链接地址
     * @param {string} text - 链接文本
     * @returns {boolean} 是否成功
     */
    insertLink: function(url, text) {
        if (!this.muya) return false;
        try {
            const linkText = text || url;
            return this.insertValue(`[${linkText}](${url})`);
        } catch (e) {
            this.notifySwift('error', { message: '插入链接失败: ' + e.message });
            return false;
        }
    },
    
    /**
     * 插入图片
     * @param {string} url - 图片地址（可以是 data URL、file URL、http URL 或本地路径）
     * @param {string} alt - 替代文本
     * @returns {boolean} 是否成功
     */
    insertImage: function(url, alt) {
        console.log('[muyaBridge] insertImage 调用:', url ? url.substring(0, 80) : 'null', 'alt:', alt);
        if (!this.muya) {
            console.error('[muyaBridge] insertImage: muya 实例不存在');
            return false;
        }
        try {
            const altText = alt || '';
            let imageUrl = url;
            
            // 处理不同类型的 URL
            if (url.startsWith('data:') || url.startsWith('http://') || url.startsWith('https://')) {
                // data URL 或网络 URL，直接使用
                imageUrl = url;
            } else if (url.startsWith('muya-local://')) {
                // 已经是 muya-local scheme，直接使用
                imageUrl = url;
            } else if (url.startsWith('file://')) {
                // file:// URL，转换为自定义 scheme
                const path = url.replace('file://', '');
                imageUrl = 'muya-local://local/absolute' + path;
            } else if (url.startsWith('/')) {
                // 绝对路径，转换为自定义 scheme
                imageUrl = 'muya-local://local/absolute' + url;
            } else if (url.startsWith('./') || url.startsWith('../') || !url.includes('://')) {
                // 相对路径，转换为自定义 scheme
                const cleanPath = url.startsWith('./') ? url.substring(2) : url;
                imageUrl = 'muya-local://local/relative/' + cleanPath;
            }
            
            // 保存原始路径映射（如果是本地路径）
            if (!url.startsWith('data:') && !url.startsWith('http')) {
                this.imagePathMap.set(imageUrl, url);
            }
            
            const markdown = `![${altText}](${imageUrl})`;
            console.log('[muyaBridge] insertImage: 插入 markdown:', markdown.substring(0, 100));
            const result = this.insertValue(markdown);
            console.log('[muyaBridge] insertImage: 插入结果:', result);
            return result;
        } catch (e) {
            console.error('[muyaBridge] insertImage 失败:', e);
            this.notifySwift('error', { message: '插入图片失败: ' + e.message });
            return false;
        }
    },
    
    /**
     * 插入代码块
     * @param {string} language - 编程语言
     * @returns {boolean} 是否成功
     */
    insertCodeBlock: function(language) {
        if (!this.muya) return false;
        try {
            const lang = language || '';
            this.insertValue(`\n\`\`\`${lang}\n\n\`\`\`\n`);
            return true;
        } catch (e) {
            this.notifySwift('error', { message: '插入代码块失败: ' + e.message });
            return false;
        }
    },
    
    /**
     * 插入数学公式块
     * @returns {boolean} 是否成功
     */
    insertMathBlock: function() {
        if (!this.muya) return false;
        try {
            this.insertValue('\n$$\n\n$$\n');
            return true;
        } catch (e) {
            this.notifySwift('error', { message: '插入数学公式失败: ' + e.message });
            return false;
        }
    },
    
    /**
     * 插入表格
     * @param {number} rows - 行数
     * @param {number} cols - 列数
     * @returns {boolean} 是否成功
     */
    insertTable: function(rows, cols) {
        if (!this.muya) return false;
        try {
            let table = '\n|';
            for (let c = 0; c < cols; c++) {
                table += ' 列' + (c + 1) + ' |';
            }
            table += '\n|';
            for (let c = 0; c < cols; c++) {
                table += ' --- |';
            }
            for (let r = 0; r < rows - 1; r++) {
                table += '\n|';
                for (let c = 0; c < cols; c++) {
                    table += '  |';
                }
            }
            table += '\n';
            this.insertValue(table);
            return true;
        } catch (e) {
            this.notifySwift('error', { message: '插入表格失败: ' + e.message });
            return false;
        }
    },
    
    // ==================== 主题方法 ====================
    
    /**
     * 设置主题
     * @param {string} theme - 主题名称 (light/dark)
     * @returns {boolean} 是否成功
     */
    setTheme: function(theme) {
        try {
            if (theme === 'dark') {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
            return true;
        } catch (e) {
            this.notifySwift('error', { message: '设置主题失败: ' + e.message });
            return false;
        }
    },
    
    /**
     * 设置内容主题（排版样式）
     * @param {string} themeName - 主题名称 (default/github/gothic/newsprint/night/pixyll/whitey/cement/cement-dark/everforest-light/everforest-dark)
     * @returns {boolean} 是否成功
     */
    setContentTheme: function(themeName) {
        try {
            // 移除旧的主题样式
            const oldThemeLink = document.getElementById('content-theme-css');
            if (oldThemeLink) {
                oldThemeLink.remove();
            }
            
            // 如果是默认主题，不加载额外 CSS
            if (!themeName || themeName === 'default') {
                document.body.classList.remove('dark-theme');
                return true;
            }
            
            // 加载新主题 CSS
            const link = document.createElement('link');
            link.id = 'content-theme-css';
            link.rel = 'stylesheet';
            link.href = `themes/${themeName}.css`;
            document.head.appendChild(link);
            
            // 深色主题需要添加 dark-theme class
            const darkThemes = ['night', 'cement-dark', 'everforest-dark', 'darcula'];
            if (darkThemes.includes(themeName)) {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
            
            return true;
        } catch (e) {
            this.notifySwift('error', { message: '设置内容主题失败: ' + e.message });
            return false;
        }
    },
    
    // ==================== 历史方法 ====================
    
    /**
     * 撤销
     * @returns {boolean} 是否成功
     */
    undo: function() {
        if (!this.muya) {
            console.warn('[muyaBridge] undo: muya 实例不存在');
            return false;
        }
        try {
            console.log('[muyaBridge] undo: 执行撤销');
            
            // 方法1: 使用 Muya 的 history API
            if (this.muya.history && typeof this.muya.history.undo === 'function') {
                console.log('[muyaBridge] undo: 使用 muya.history.undo()');
                this.muya.history.undo();
                this.handleContentChange();
                return true;
            }
            
            // 方法2: 使用 Muya 实例的 undo 方法
            if (typeof this.muya.undo === 'function') {
                console.log('[muyaBridge] undo: 使用 muya.undo()');
                this.muya.undo();
                this.handleContentChange();
                return true;
            }
            
            // 方法3: 使用 document.execCommand 作为后备
            console.log('[muyaBridge] undo: 使用 document.execCommand');
            const result = document.execCommand('undo', false, null);
            if (result) {
                this.handleContentChange();
            }
            return result;
        } catch (e) {
            console.error('[muyaBridge] undo 失败:', e);
            // 尝试使用 document.execCommand 作为后备
            try {
                const result = document.execCommand('undo', false, null);
                if (result) {
                    this.handleContentChange();
                }
                return result;
            } catch (e2) {
                this.notifySwift('error', { message: '撤销失败: ' + e.message });
                return false;
            }
        }
    },
    
    /**
     * 重做
     * @returns {boolean} 是否成功
     */
    redo: function() {
        if (!this.muya) {
            console.warn('[muyaBridge] redo: muya 实例不存在');
            return false;
        }
        try {
            console.log('[muyaBridge] redo: 执行重做');
            
            // 方法1: 使用 Muya 的 history API
            if (this.muya.history && typeof this.muya.history.redo === 'function') {
                console.log('[muyaBridge] redo: 使用 muya.history.redo()');
                this.muya.history.redo();
                this.handleContentChange();
                return true;
            }
            
            // 方法2: 使用 Muya 实例的 redo 方法
            if (typeof this.muya.redo === 'function') {
                console.log('[muyaBridge] redo: 使用 muya.redo()');
                this.muya.redo();
                this.handleContentChange();
                return true;
            }
            
            // 方法3: 使用 document.execCommand 作为后备
            console.log('[muyaBridge] redo: 使用 document.execCommand');
            const result = document.execCommand('redo', false, null);
            if (result) {
                this.handleContentChange();
            }
            return result;
        } catch (e) {
            console.error('[muyaBridge] redo 失败:', e);
            // 尝试使用 document.execCommand 作为后备
            try {
                const result = document.execCommand('redo', false, null);
                if (result) {
                    this.handleContentChange();
                }
                return result;
            } catch (e2) {
                this.notifySwift('error', { message: '重做失败: ' + e.message });
                return false;
            }
        }
    },
    
    /**
     * 是否可以撤销
     * @returns {boolean}
     */
    canUndo: function() {
        if (!this.muya) return false;
        try {
            if (this.muya.history && typeof this.muya.history.canUndo === 'function') {
                return this.muya.history.canUndo();
            }
            // 默认返回 true，让用户尝试
            return true;
        } catch (e) {
            return true;
        }
    },
    
    /**
     * 是否可以重做
     * @returns {boolean}
     */
    canRedo: function() {
        if (!this.muya) return false;
        try {
            if (this.muya.history && typeof this.muya.history.canRedo === 'function') {
                return this.muya.history.canRedo();
            }
            // 默认返回 true，让用户尝试
            return true;
        } catch (e) {
            return true;
        }
    },
    
    // ==================== 搜索替换方法 ====================
    
    /**
     * 搜索
     * @param {string} query - 搜索关键词
     * @param {object} options - 搜索选项
     * @returns {object} 搜索结果
     */
    search: function(query, options) {
        if (!this.muya) {
            return { success: false, count: 0, currentIndex: -1 };
        }
        try {
            const result = this.muya.search(query, options || {});
            return {
                success: true,
                count: result?.matches?.length || 0,
                currentIndex: result?.index || 0
            };
        } catch (e) {
            this.notifySwift('error', { message: '搜索失败: ' + e.message });
            return { success: false, count: 0, currentIndex: -1, error: e.message };
        }
    },
    
    /**
     * 查找下一个
     * @returns {object} 搜索结果
     */
    findNext: function() {
        if (!this.muya) {
            return { success: false, count: 0, currentIndex: -1 };
        }
        try {
            const result = this.muya.findNext();
            return {
                success: true,
                count: result?.matches?.length || 0,
                currentIndex: result?.index || 0
            };
        } catch (e) {
            return { success: false, count: 0, currentIndex: -1, error: e.message };
        }
    },
    
    /**
     * 查找上一个
     * @returns {object} 搜索结果
     */
    findPrevious: function() {
        if (!this.muya) {
            return { success: false, count: 0, currentIndex: -1 };
        }
        try {
            const result = this.muya.findPrevious();
            return {
                success: true,
                count: result?.matches?.length || 0,
                currentIndex: result?.index || 0
            };
        } catch (e) {
            return { success: false, count: 0, currentIndex: -1, error: e.message };
        }
    },
    
    /**
     * 替换当前匹配
     * @param {string} query - 搜索关键词
     * @param {string} replacement - 替换内容
     * @returns {object} 替换结果
     */
    replace: function(query, replacement) {
        if (!this.muya) {
            return { success: false, replaced: false, count: 0 };
        }
        try {
            const result = this.muya.replace(query, replacement);
            return {
                success: true,
                replaced: result?.replaced || false,
                count: result?.count || 0
            };
        } catch (e) {
            this.notifySwift('error', { message: '替换失败: ' + e.message });
            return { success: false, replaced: false, count: 0, error: e.message };
        }
    },
    
    /**
     * 替换所有匹配
     * @param {string} query - 搜索关键词
     * @param {string} replacement - 替换内容
     * @param {object} options - 搜索选项
     * @returns {object} 替换结果
     */
    replaceAll: function(query, replacement, options) {
        if (!this.muya) {
            return { success: false, replaced: false, count: 0 };
        }
        try {
            const result = this.muya.replaceAll(query, replacement, options || {});
            return {
                success: true,
                replaced: (result?.count || 0) > 0,
                count: result?.count || 0
            };
        } catch (e) {
            this.notifySwift('error', { message: '全部替换失败: ' + e.message });
            return { success: false, replaced: false, count: 0, error: e.message };
        }
    },
    
    // ==================== 焦点方法 ====================
    
    /**
     * 聚焦编辑器
     */
    focus: function() {
        if (!this.muya) return false;
        try {
            this.muya.focus();
            return true;
        } catch (e) {
            return false;
        }
    },
    
    /**
     * 取消聚焦
     */
    blur: function() {
        if (!this.muya) return false;
        try {
            this.muya.blur();
            return true;
        } catch (e) {
            return false;
        }
    },
    
    /**
     * 禁用编辑器
     */
    disable: function() {
        document.getElementById('editor').classList.add('disabled');
        return true;
    },
    
    /**
     * 启用编辑器
     */
    enable: function() {
        document.getElementById('editor').classList.remove('disabled');
        return true;
    },
    
    // ==================== 选择方法 ====================
    
    /**
     * 获取选中文本
     * @returns {string} 选中的文本
     */
    getSelection: function() {
        try {
            const selection = window.getSelection();
            return selection ? selection.toString() : '';
        } catch (e) {
            return '';
        }
    },
    
    /**
     * 获取光标位置
     * @returns {object} 光标位置信息
     */
    getCursorPosition: function() {
        if (!this.muya) return null;
        try {
            const cursor = this.muya.getCursor();
            return cursor ? {
                line: cursor.line,
                column: cursor.ch,
                offset: cursor.offset
            } : null;
        } catch (e) {
            return null;
        }
    },
    
    // ==================== 大纲方法 ====================
    
    /**
     * 获取文档大纲
     * @returns {Array} 大纲数组
     */
    getOutline: function() {
        if (!this.muya) return [];
        try {
            const toc = this.muya.getTOC();
            return toc || [];
        } catch (e) {
            return [];
        }
    },
    
    /**
     * 滚动到指定标题
     * @param {string} headingId - 标题 ID
     * @returns {boolean} 是否成功
     */
    scrollToHeading: function(headingId) {
        if (!this.muya) return false;
        try {
            this.muya.scrollToHeading(headingId);
            return true;
        } catch (e) {
            return false;
        }
    },
    
    // ==================== 计数方法 ====================
    
    /**
     * 获取计数信息
     * @returns {object} 计数信息
     */
    getCounter: function() {
        if (!this.muya) {
            return { wordCount: 0, characterCount: 0 };
        }
        try {
            const content = this.muya.getMarkdown();
            // 移除 Markdown 语法后计算
            const text = content
                .replace(/```[\s\S]*?```/g, '') // 移除代码块
                .replace(/`[^`]+`/g, '') // 移除行内代码
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 链接只保留文本
                .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // 移除图片
                .replace(/[#*_~`>\-+|]/g, '') // 移除 Markdown 符号
                .trim();
            
            // 中文字数统计
            const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
            // 英文单词统计
            const englishWords = (text.match(/[a-zA-Z]+/g) || []).length;
            
            return {
                wordCount: chineseChars + englishWords,
                characterCount: text.replace(/\s/g, '').length
            };
        } catch (e) {
            return { wordCount: 0, characterCount: 0 };
        }
    },
    
    // ==================== 任务列表方法 ====================
    
    /**
     * 折叠所有任务列表
     */
    collapseAllTaskLists: function() {
        // Muya 暂不支持此功能，预留接口
        return true;
    },
    
    /**
     * 展开所有任务列表
     */
    expandAllTaskLists: function() {
        // Muya 暂不支持此功能，预留接口
        return true;
    },
    
    /**
     * 获取任务列表折叠状态
     * @returns {object} 折叠状态
     */
    getTaskListCollapseStates: function() {
        return {};
    },
    
    /**
     * 恢复任务列表折叠状态
     * @param {object} states - 折叠状态
     */
    restoreTaskListCollapseStates: function(states) {
        return true;
    },
    
    // ==================== 工具方法 ====================
    
    /**
     * 显示提示信息
     * @param {string} message - 提示内容
     * @param {number} duration - 显示时长（毫秒）
     */
    showTip: function(message, duration) {
        // 创建提示元素
        const tip = document.createElement('div');
        tip.className = 'muya-tip';
        tip.textContent = message;
        tip.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 14px;
            z-index: 10000;
            transition: opacity 0.3s;
        `;
        document.body.appendChild(tip);
        
        setTimeout(() => {
            tip.style.opacity = '0';
            setTimeout(() => tip.remove(), 300);
        }, duration || 2000);
    },
    
    /**
     * 设置语言
     * @param {string} locale - 语言代码
     */
    setLocale: function(locale) {
        // Muya 语言在初始化时设置，运行时切换需要重新初始化
        return true;
    }
};
