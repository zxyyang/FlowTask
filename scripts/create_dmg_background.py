#!/usr/bin/env python3
"""
创建 DMG 安装器背景图
设计：深色渐变背景 + 安装提示箭头
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_dmg_background():
    """创建 DMG 背景图 (540x380)"""
    width, height = 540, 380
    
    # 创建深色渐变背景
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    
    # 绘制渐变背景 (深灰到更深灰)
    for y in range(height):
        # 从上到下渐变
        ratio = y / height
        r = int(45 + (25 - 45) * ratio)
        g = int(45 + (25 - 45) * ratio)
        b = int(50 + (30 - 50) * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    # 添加微妙的噪点纹理
    import random
    for _ in range(1000):
        x = random.randint(0, width - 1)
        y = random.randint(0, height - 1)
        pixel = img.getpixel((x, y))
        noise = random.randint(-5, 5)
        new_pixel = tuple(max(0, min(255, c + noise)) for c in pixel)
        img.putpixel((x, y), new_pixel)
    
    # 绘制安装提示箭头 (从左到右)
    arrow_y = height // 2 + 20
    arrow_start_x = 160
    arrow_end_x = 380
    arrow_color = (120, 120, 130)
    
    # 箭头主线 (虚线效果)
    dash_length = 15
    gap_length = 10
    x = arrow_start_x
    while x < arrow_end_x - 30:
        end_x = min(x + dash_length, arrow_end_x - 30)
        draw.line([(x, arrow_y), (end_x, arrow_y)], fill=arrow_color, width=3)
        x = end_x + gap_length
    
    # 箭头头部
    arrow_head_x = arrow_end_x - 20
    draw.polygon([
        (arrow_end_x, arrow_y),
        (arrow_head_x, arrow_y - 12),
        (arrow_head_x, arrow_y + 12)
    ], fill=arrow_color)
    
    # 添加安装提示文字
    try:
        # 尝试使用系统字体
        font_large = ImageFont.truetype("/System/Library/Fonts/PingFang.ttc", 16)
        font_small = ImageFont.truetype("/System/Library/Fonts/PingFang.ttc", 12)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # 提示文字
    text_color = (160, 160, 170)
    text = "拖动到 Applications 文件夹完成安装"
    
    # 计算文字位置 (居中)
    try:
        bbox = draw.textbbox((0, 0), text, font=font_large)
        text_width = bbox[2] - bbox[0]
    except:
        text_width = len(text) * 10
    
    text_x = (width - text_width) // 2
    text_y = arrow_y + 40
    draw.text((text_x, text_y), text, fill=text_color, font=font_large)
    
    # 底部版权信息
    copyright_text = "© 2026 FlowTask"
    try:
        bbox = draw.textbbox((0, 0), copyright_text, font=font_small)
        copyright_width = bbox[2] - bbox[0]
    except:
        copyright_width = len(copyright_text) * 8
    
    draw.text(
        ((width - copyright_width) // 2, height - 30),
        copyright_text,
        fill=(80, 80, 90),
        font=font_small
    )
    
    # 保存
    output_dir = "scripts/dmg_resources"
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, "background.png")
    img.save(output_path, "PNG")
    print(f"✅ DMG 背景图已创建: {output_path}")
    
    # 同时创建 @2x 版本
    img_2x = img.resize((width * 2, height * 2), Image.Resampling.LANCZOS)
    output_path_2x = os.path.join(output_dir, "background@2x.png")
    img_2x.save(output_path_2x, "PNG")
    print(f"✅ DMG 背景图 @2x 已创建: {output_path_2x}")

if __name__ == "__main__":
    create_dmg_background()
