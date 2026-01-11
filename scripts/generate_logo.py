#!/usr/bin/env python3
"""
生成 FlowTask 应用图标
设计：灰白色透明毛玻璃底 + 灰黑色对号
"""

from PIL import Image, ImageDraw, ImageFilter
import os

def create_icon(size):
    """创建指定尺寸的图标"""
    # 创建透明背景
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # 计算圆角矩形参数 (macOS 风格)
    margin = int(size * 0.1)
    corner_radius = int(size * 0.22)
    
    # 绘制毛玻璃底色 (灰白色半透明)
    # 使用多层叠加模拟毛玻璃效果
    glass_color = (245, 245, 247, 200)  # 灰白色，略透明
    
    # 绘制圆角矩形背景
    draw_rounded_rect(draw, margin, margin, size - margin, size - margin, 
                      corner_radius, glass_color)
    
    # 添加轻微的边框增强毛玻璃感
    border_color = (220, 220, 225, 150)
    draw_rounded_rect_outline(draw, margin, margin, size - margin, size - margin,
                              corner_radius, border_color, int(size * 0.01) + 1)
    
    # 绘制灰黑色对号
    checkmark_color = (60, 60, 65, 255)  # 灰黑色
    draw_checkmark(draw, size, checkmark_color)
    
    # 应用轻微模糊增强毛玻璃效果
    img = img.filter(ImageFilter.GaussianBlur(radius=0.5))
    
    return img

def draw_rounded_rect(draw, x1, y1, x2, y2, radius, color):
    """绘制圆角矩形"""
    # 绘制主体矩形
    draw.rectangle([x1 + radius, y1, x2 - radius, y2], fill=color)
    draw.rectangle([x1, y1 + radius, x2, y2 - radius], fill=color)
    
    # 绘制四个圆角
    draw.ellipse([x1, y1, x1 + 2*radius, y1 + 2*radius], fill=color)
    draw.ellipse([x2 - 2*radius, y1, x2, y1 + 2*radius], fill=color)
    draw.ellipse([x1, y2 - 2*radius, x1 + 2*radius, y2], fill=color)
    draw.ellipse([x2 - 2*radius, y2 - 2*radius, x2, y2], fill=color)

def draw_rounded_rect_outline(draw, x1, y1, x2, y2, radius, color, width):
    """绘制圆角矩形边框"""
    # 使用 arc 绘制圆角
    draw.arc([x1, y1, x1 + 2*radius, y1 + 2*radius], 180, 270, fill=color, width=width)
    draw.arc([x2 - 2*radius, y1, x2, y1 + 2*radius], 270, 360, fill=color, width=width)
    draw.arc([x1, y2 - 2*radius, x1 + 2*radius, y2], 90, 180, fill=color, width=width)
    draw.arc([x2 - 2*radius, y2 - 2*radius, x2, y2], 0, 90, fill=color, width=width)
    
    # 绘制直线边
    draw.line([x1 + radius, y1, x2 - radius, y1], fill=color, width=width)
    draw.line([x1 + radius, y2, x2 - radius, y2], fill=color, width=width)
    draw.line([x1, y1 + radius, x1, y2 - radius], fill=color, width=width)
    draw.line([x2, y1 + radius, x2, y2 - radius], fill=color, width=width)

def draw_checkmark(draw, size, color):
    """绘制对号"""
    # 对号的关键点 (相对于图标尺寸的比例)
    # 起点 (左侧)
    start_x = size * 0.25
    start_y = size * 0.52
    
    # 中间点 (底部转折点)
    mid_x = size * 0.42
    mid_y = size * 0.68
    
    # 终点 (右上)
    end_x = size * 0.75
    end_y = size * 0.35
    
    # 线条宽度
    line_width = int(size * 0.08)
    
    # 绘制对号的两条线
    draw.line([(start_x, start_y), (mid_x, mid_y)], fill=color, width=line_width)
    draw.line([(mid_x, mid_y), (end_x, end_y)], fill=color, width=line_width)
    
    # 在端点和转折点绘制圆形，使线条更圆润
    radius = line_width // 2
    draw.ellipse([start_x - radius, start_y - radius, 
                  start_x + radius, start_y + radius], fill=color)
    draw.ellipse([mid_x - radius, mid_y - radius, 
                  mid_x + radius, mid_y + radius], fill=color)
    draw.ellipse([end_x - radius, end_y - radius, 
                  end_x + radius, end_y + radius], fill=color)

def main():
    # 图标尺寸列表 (macOS 需要的所有尺寸)
    sizes = [
        (16, "icon_16x16.png"),
        (32, "icon_16x16@2x.png"),
        (32, "icon_32x32.png"),
        (64, "icon_32x32@2x.png"),
        (128, "icon_128x128.png"),
        (256, "icon_128x128@2x.png"),
        (256, "icon_256x256.png"),
        (512, "icon_256x256@2x.png"),
        (512, "icon_512x512.png"),
        (1024, "icon_512x512@2x.png"),
    ]
    
    output_dir = "FlowTask/Assets.xcassets/AppIcon.appiconset"
    
    for size, filename in sizes:
        print(f"生成 {filename} ({size}x{size})...")
        icon = create_icon(size)
        icon.save(os.path.join(output_dir, filename), "PNG")
    
    print("✅ 所有图标生成完成！")

if __name__ == "__main__":
    main()
