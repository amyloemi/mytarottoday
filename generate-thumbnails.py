#!/usr/bin/env python3
"""
Thumbnail Generation Script for Tarot Card Images
Generates optimized thumbnails at 300x520px using PIL/Pillow
Reduces image size by ~90% for faster mobile gallery loading
"""

import os
import sys
from pathlib import Path
from PIL import Image

# Configuration
SOURCE_DIR = './decks/images'
THUMBNAIL_DIR = './decks/images-thumbnails'
THUMBNAIL_WIDTH = 300
THUMBNAIL_HEIGHT = 520
JPEG_QUALITY = 80
WEBP_QUALITY = 80

def create_thumbnail(source_path, target_dir):
    """Generate JPEG and WebP thumbnails for a single image"""
    try:
        # Open image
        with Image.open(source_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background

            # Calculate new size maintaining aspect ratio
            img.thumbnail((THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT), Image.LANCZOS)

            # Get filename without extension
            base_name = Path(source_path).stem

            # Save as JPEG
            jpeg_path = os.path.join(target_dir, f"{base_name}.jpg")
            img.save(jpeg_path, 'JPEG', quality=JPEG_QUALITY, optimize=True)
            jpeg_size = os.path.getsize(jpeg_path)

            # Save as WebP
            webp_path = os.path.join(target_dir, f"{base_name}.webp")
            img.save(webp_path, 'WEBP', quality=WEBP_QUALITY)
            webp_size = os.path.getsize(webp_path)

            original_size = os.path.getsize(source_path)
            reduction = ((original_size - webp_size) / original_size * 100)

            return {
                'success': True,
                'original_size': original_size,
                'jpeg_size': jpeg_size,
                'webp_size': webp_size,
                'reduction': reduction
            }
    except Exception as e:
        return {'success': False, 'error': str(e)}

def main():
    print("🎴 Tarot Card Thumbnail Generator\n")
    print(f"Configuration:")
    print(f"  Source: {SOURCE_DIR}")
    print(f"  Output: {THUMBNAIL_DIR}")
    print(f"  Size: {THUMBNAIL_WIDTH}×{THUMBNAIL_HEIGHT}px")
    print(f"  Quality: WebP {WEBP_QUALITY}%, JPEG {JPEG_QUALITY}%\n")

    # Check if PIL/Pillow is installed
    try:
        from PIL import Image
    except ImportError:
        print("❌ Pillow not found. Please install it:")
        print("   pip3 install Pillow")
        sys.exit(1)

    # Check source directory
    if not os.path.exists(SOURCE_DIR):
        print(f"❌ Source directory not found: {SOURCE_DIR}")
        sys.exit(1)

    # Get all image files
    print("📁 Scanning for images...")
    image_files = []
    for root, dirs, files in os.walk(SOURCE_DIR):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                image_files.append(os.path.join(root, file))

    total_images = len(image_files)
    print(f"Found {total_images} images\n")

    if total_images == 0:
        print(f"❌ No images found in {SOURCE_DIR}")
        sys.exit(1)

    # Create thumbnail directory
    os.makedirs(THUMBNAIL_DIR, exist_ok=True)

    # Process images
    print("🔄 Generating thumbnails...\n")
    successful = 0
    failed = 0
    total_original = 0
    total_webp = 0
    total_jpeg = 0

    for idx, source_file in enumerate(image_files, 1):
        # Get relative path
        rel_path = os.path.relpath(source_file, SOURCE_DIR)
        rel_dir = os.path.dirname(rel_path)

        print(f"[{idx}/{total_images}] Processing: {rel_path}")

        # Create target directory
        target_dir = os.path.join(THUMBNAIL_DIR, rel_dir)
        os.makedirs(target_dir, exist_ok=True)

        # Generate thumbnail
        result = create_thumbnail(source_file, target_dir)

        if result['success']:
            print(f"  ✓ WebP: {result['webp_size']/1024:.1f}KB | "
                  f"JPEG: {result['jpeg_size']/1024:.1f}KB | "
                  f"Reduction: {result['reduction']:.1f}%")
            successful += 1
            total_original += result['original_size']
            total_webp += result['webp_size']
            total_jpeg += result['jpeg_size']
        else:
            print(f"  ✗ Error: {result['error']}")
            failed += 1

    # Summary
    print("\n" + "=" * 60)
    print("📊 Summary")
    print("=" * 60)
    print(f"✓ Successful: {successful}")
    print(f"✗ Failed: {failed}")
    print(f"💾 Original size: {total_original/1024/1024:.1f}MB")
    print(f"💾 WebP size: {total_webp/1024/1024:.1f}MB")
    print(f"💾 JPEG size: {total_jpeg/1024/1024:.1f}MB")

    if total_original > 0:
        avg_reduction = ((total_original - total_webp) / total_original * 100)
        print(f"📉 Average reduction: {avg_reduction:.1f}%")

    print("=" * 60)
    print("\n✨ Thumbnail generation complete!")

if __name__ == '__main__':
    main()
