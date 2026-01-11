#!/bin/bash

# FlowTask Release Build Script
# 用于构建和打包 FlowTask 应用

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 配置
PROJECT_NAME="FlowTask"
SCHEME="FlowTask"
BUILD_DIR="build"
RELEASE_DIR="release"
ARCHIVE_PATH="${BUILD_DIR}/${PROJECT_NAME}.xcarchive"
APP_PATH="${BUILD_DIR}/${PROJECT_NAME}.app"
DMG_PATH="${RELEASE_DIR}/${PROJECT_NAME}.dmg"

# 版本信息
VERSION=$(date +"%Y.%m.%d")
BUILD_NUMBER=$(date +"%H%M")

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  FlowTask Release Build Script${NC}"
echo -e "${BLUE}  Version: ${VERSION} (${BUILD_NUMBER})${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# 检查 Xcode
if ! command -v xcodebuild &> /dev/null; then
    echo -e "${RED}错误: 未找到 xcodebuild，请安装 Xcode${NC}"
    exit 1
fi

# 清理旧构建
echo -e "${YELLOW}[1/5] 清理旧构建...${NC}"
rm -rf "${BUILD_DIR}"
rm -rf "${RELEASE_DIR}"
mkdir -p "${BUILD_DIR}"
mkdir -p "${RELEASE_DIR}"

# 构建 Archive
echo -e "${YELLOW}[2/5] 构建 Archive...${NC}"
xcodebuild archive \
    -project "${PROJECT_NAME}.xcodeproj" \
    -scheme "${SCHEME}" \
    -configuration Release \
    -archivePath "${ARCHIVE_PATH}" \
    -destination "generic/platform=macOS" \
    MARKETING_VERSION="${VERSION}" \
    CURRENT_PROJECT_VERSION="${BUILD_NUMBER}" \
    CODE_SIGN_IDENTITY="-" \
    CODE_SIGNING_REQUIRED=NO \
    CODE_SIGNING_ALLOWED=NO \
    | xcpretty || true

# 导出 App
echo -e "${YELLOW}[3/5] 导出应用...${NC}"
if [ -d "${ARCHIVE_PATH}/Products/Applications/${PROJECT_NAME}.app" ]; then
    cp -R "${ARCHIVE_PATH}/Products/Applications/${PROJECT_NAME}.app" "${APP_PATH}"
else
    # 尝试其他路径
    APP_IN_ARCHIVE=$(find "${ARCHIVE_PATH}" -name "*.app" -type d | head -1)
    if [ -n "$APP_IN_ARCHIVE" ]; then
        cp -R "$APP_IN_ARCHIVE" "${APP_PATH}"
    else
        echo -e "${RED}错误: 未找到构建的应用${NC}"
        exit 1
    fi
fi

# 验证应用
if [ ! -d "${APP_PATH}" ]; then
    echo -e "${RED}错误: 应用导出失败${NC}"
    exit 1
fi

echo -e "${GREEN}应用已导出到: ${APP_PATH}${NC}"

# 创建美化 DMG
echo -e "${YELLOW}[4/5] 创建美化 DMG 安装包...${NC}"

# 删除旧的 DMG
rm -f "${DMG_PATH}"

# 使用 create-dmg 创建美化的 DMG
create-dmg \
    --volname "${PROJECT_NAME}" \
    --volicon "${APP_PATH}/Contents/Resources/AppIcon.icns" \
    --window-pos 200 120 \
    --window-size 540 380 \
    --icon-size 80 \
    --icon "${PROJECT_NAME}.app" 130 160 \
    --hide-extension "${PROJECT_NAME}.app" \
    --app-drop-link 410 160 \
    --background "scripts/dmg_resources/background.png" \
    "${DMG_PATH}" \
    "${APP_PATH}" \
    || {
        # 如果 create-dmg 失败，回退到简单方式
        echo -e "${YELLOW}  create-dmg 失败，使用简单方式...${NC}"
        DMG_TEMP="${BUILD_DIR}/dmg_temp"
        rm -rf "${DMG_TEMP}"
        mkdir -p "${DMG_TEMP}"
        cp -R "${APP_PATH}" "${DMG_TEMP}/"
        ln -s /Applications "${DMG_TEMP}/Applications"
        hdiutil create -volname "${PROJECT_NAME}" \
            -srcfolder "${DMG_TEMP}" \
            -ov -format UDZO \
            "${DMG_PATH}"
        rm -rf "${DMG_TEMP}"
    }

# 计算文件大小和校验和
echo -e "${YELLOW}[5/5] 生成发布信息...${NC}"

DMG_SIZE=$(du -h "${DMG_PATH}" | cut -f1)
DMG_SHA256=$(shasum -a 256 "${DMG_PATH}" | cut -d' ' -f1)

# 创建发布说明
cat > "${RELEASE_DIR}/RELEASE_NOTES.md" << EOF
# FlowTask ${VERSION}

## 下载

- **DMG 安装包**: [FlowTask.dmg](FlowTask.dmg)
- **文件大小**: ${DMG_SIZE}
- **SHA256**: \`${DMG_SHA256}\`

## 安装说明

1. 下载 \`FlowTask.dmg\`
2. 双击打开 DMG 文件
3. 将 FlowTask 拖入 Applications 文件夹
4. 首次运行时，右键点击应用选择"打开"

## 系统要求

- macOS 13.0 (Ventura) 或更高版本
- Apple Silicon 或 Intel 处理器

## 更新日志

- 查看 [CHANGELOG.md](../CHANGELOG.md) 了解详细更新内容

## 验证下载

\`\`\`bash
# 验证 SHA256 校验和
echo "${DMG_SHA256}  FlowTask.dmg" | shasum -a 256 -c
\`\`\`

---

构建时间: $(date "+%Y-%m-%d %H:%M:%S")
EOF

# 完成
echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  构建完成！${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "应用路径: ${BLUE}${APP_PATH}${NC}"
echo -e "DMG 路径: ${BLUE}${DMG_PATH}${NC}"
echo -e "文件大小: ${BLUE}${DMG_SIZE}${NC}"
echo -e "SHA256:   ${BLUE}${DMG_SHA256}${NC}"
echo ""
echo -e "${YELLOW}发布说明已生成: ${RELEASE_DIR}/RELEASE_NOTES.md${NC}"
