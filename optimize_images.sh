#!/bin/bash

# Script to optimize tarot card images for web use
# Reduces file size while maintaining good quality

echo "🎴 Optimizing Tarot Card Images for Web..."
echo ""

# Create backup directory
mkdir -p images_backup
echo "📦 Creating backup of original images..."
cp -r images/ images_backup/

# Counter
total=0
optimized=0

# Function to optimize image
optimize_image() {
    local img="$1"
    local original_size=$(stat -f%z "$img")

    # Resize to max width 800px (maintaining aspect ratio) and reduce quality
    sips -Z 800 --setProperty formatOptions 70 "$img" > /dev/null 2>&1

    local new_size=$(stat -f%z "$img")
    local saved=$((original_size - new_size))
    local saved_mb=$(echo "scale=2; $saved / 1048576" | bc)

    echo "  ✓ $(basename "$img"): $(echo "scale=1; $original_size / 1048576" | bc)MB → $(echo "scale=1; $new_size / 1048576" | bc)MB (saved ${saved_mb}MB)"

    total=$((total + saved))
    optimized=$((optimized + 1))
}

# Optimize Major Arcana
echo "🌟 Optimizing Major Arcana (22 cards)..."
for img in images/major_arcana/*.png; do
    optimize_image "$img"
done

echo ""
echo "⚔️ Optimizing Minor Arcana - Swords (14 cards)..."
for img in images/minor_arcana/swords/*.png; do
    optimize_image "$img"
done

echo ""
echo "🏆 Optimizing Minor Arcana - Cups (14 cards)..."
for img in images/minor_arcana/cups/*.png; do
    optimize_image "$img"
done

echo ""
echo "💰 Optimizing Minor Arcana - Pentacles (14 cards)..."
for img in images/minor_arcana/pentacles/*.png; do
    optimize_image "$img"
done

echo ""
echo "🔥 Optimizing Minor Arcana - Wands (14 cards)..."
for img in images/minor_arcana/wands/*.png; do
    optimize_image "$img"
done

echo ""
echo "================================"
echo "✅ Optimization Complete!"
echo ""
echo "📊 Statistics:"
echo "   Cards optimized: $optimized"
echo "   Total space saved: $(echo "scale=2; $total / 1048576" | bc)MB"
echo ""
echo "💾 Original images backed up to: images_backup/"
echo ""
