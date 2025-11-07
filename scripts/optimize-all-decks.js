#!/usr/bin/env node
/**
 * Generate optimized thumbnails for all decks
 * Uses sharp library for image processing
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const CONFIG = {
    thumbnailWidth: 300,
    webpQuality: 82,
    jpegQuality: 85,
};

const DECKS = [
    {
        name: 'Artistic',
        sourceDir: 'decks/artistic-tarot-cards',
        outputDir: 'decks/artistic-tarot-cards-thumbnails',
        pattern: '*.png'
    },
    {
        name: 'Miro',
        sourceDir: 'decks/miro-tarot-cards',
        outputDir: 'decks/miro-tarot-cards-thumbnails',
        pattern: '*.png'
    },
    {
        name: 'Picasso',
        sourceDir: 'decks/picasso-tarot-cards',
        outputDir: 'decks/picasso-tarot-cards-thumbnails',
        pattern: '*.png'
    }
];

async function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

async function getImageFiles(dir) {
    const files = fs.readdirSync(dir);
    return files.filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
}

async function optimizeDeck(deck) {
    console.log(`\n📦 Processing ${deck.name}...`);

    await ensureDir(deck.outputDir);

    const files = await getImageFiles(deck.sourceDir);
    console.log(`   Found ${files.length} images`);

    let processed = 0;
    for (const file of files) {
        const sourcePath = path.join(deck.sourceDir, file);
        const basename = path.basename(file, path.extname(file));

        try {
            // Generate WebP
            await sharp(sourcePath)
                .resize(CONFIG.thumbnailWidth, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .webp({ quality: CONFIG.webpQuality })
                .toFile(path.join(deck.outputDir, `${basename}.webp`));

            // Generate JPEG
            await sharp(sourcePath)
                .resize(CONFIG.thumbnailWidth, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .jpeg({ quality: CONFIG.jpegQuality, mozjpeg: true })
                .toFile(path.join(deck.outputDir, `${basename}.jpg`));

            processed++;
            if (processed % 10 === 0) {
                console.log(`   Processed ${processed}/${files.length}...`);
            }
        } catch (err) {
            console.error(`   ❌ Error processing ${file}:`, err.message);
        }
    }

    console.log(`   ✅ Completed: ${processed} cards optimized`);
    return processed;
}

async function main() {
    console.log('🎨 Optimizing Tarot Card Images\n');
    console.log('Configuration:');
    console.log(`  Width: ${CONFIG.thumbnailWidth}px`);
    console.log(`  WebP Quality: ${CONFIG.webpQuality}%`);
    console.log(`  JPEG Quality: ${CONFIG.jpegQuality}%`);

    let totalProcessed = 0;

    for (const deck of DECKS) {
        const count = await optimizeDeck(deck);
        totalProcessed += count;
    }

    console.log(`\n✅ All done! ${totalProcessed} total images optimized`);
}

main().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
