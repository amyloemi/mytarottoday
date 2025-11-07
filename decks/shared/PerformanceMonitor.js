/**
 * PerformanceMonitor.js
 * Track image load times and performance metrics
 * Helps identify performance bottlenecks and slow image loads
 */

class PerformanceMonitor {
    /**
     * Log image load performance
     * @param {string} deckId - Deck identifier
     * @param {string} cardName - Card name
     * @param {number} loadTime - Load time in milliseconds
     */
    static logImageLoad(deckId, cardName, loadTime) {
        // Log slow loads to console for debugging
        if (loadTime > 1000) {
            console.warn(`⚠️  Slow image load: ${deckId}/${cardName} (${loadTime.toFixed(0)}ms)`);
        } else {
            console.log(`✓ Image loaded: ${deckId}/${cardName} (${loadTime.toFixed(0)}ms)`);
        }

        // Send to Google Analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'image_load', {
                deck: deckId,
                card: cardName,
                duration: Math.round(loadTime),
                event_category: 'performance',
                is_slow: loadTime > 1000
            });
        }

        // Store metrics for analysis
        this.storeMetric(deckId, cardName, loadTime);
    }

    /**
     * Measure image load time and log it
     * @param {HTMLImageElement} imgElement - Image element to track
     * @param {string} deckId - Deck identifier
     * @param {string} cardName - Card name
     */
    static measureImageLoad(imgElement, deckId, cardName) {
        const startTime = performance.now();

        imgElement.addEventListener('load', () => {
            const loadTime = performance.now() - startTime;
            this.logImageLoad(deckId, cardName, loadTime);
        }, { once: true });

        imgElement.addEventListener('error', () => {
            const loadTime = performance.now() - startTime;
            console.error(`❌ Image load error: ${deckId}/${cardName} (${loadTime.toFixed(0)}ms)`);

            // Log error to analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'image_error', {
                    deck: deckId,
                    card: cardName,
                    duration: Math.round(loadTime),
                    event_category: 'error'
                });
            }
        }, { once: true });
    }

    /**
     * Store performance metric
     * @param {string} deckId - Deck identifier
     * @param {string} cardName - Card name
     * @param {number} loadTime - Load time in milliseconds
     */
    static storeMetric(deckId, cardName, loadTime) {
        if (!window.performanceMetrics) {
            window.performanceMetrics = [];
        }

        window.performanceMetrics.push({
            deck: deckId,
            card: cardName,
            loadTime: loadTime,
            timestamp: Date.now()
        });

        // Keep only last 100 metrics
        if (window.performanceMetrics.length > 100) {
            window.performanceMetrics.shift();
        }
    }

    /**
     * Get performance statistics
     * @returns {object} Performance statistics
     */
    static getStats() {
        if (!window.performanceMetrics || window.performanceMetrics.length === 0) {
            return {
                count: 0,
                avgLoadTime: 0,
                minLoadTime: 0,
                maxLoadTime: 0,
                slowLoads: 0
            };
        }

        const metrics = window.performanceMetrics;
        const loadTimes = metrics.map(m => m.loadTime);

        return {
            count: metrics.length,
            avgLoadTime: loadTimes.reduce((a, b) => a + b, 0) / loadTimes.length,
            minLoadTime: Math.min(...loadTimes),
            maxLoadTime: Math.max(...loadTimes),
            slowLoads: metrics.filter(m => m.loadTime > 1000).length
        };
    }

    /**
     * Print performance report to console
     */
    static printReport() {
        const stats = this.getStats();

        console.group('📊 Performance Report');
        console.log(`Total images loaded: ${stats.count}`);
        console.log(`Average load time: ${stats.avgLoadTime.toFixed(0)}ms`);
        console.log(`Fastest load: ${stats.minLoadTime.toFixed(0)}ms`);
        console.log(`Slowest load: ${stats.maxLoadTime.toFixed(0)}ms`);
        console.log(`Slow loads (>1s): ${stats.slowLoads}`);
        console.groupEnd();
    }
}

// Export for use in browser
if (typeof window !== 'undefined') {
    window.PerformanceMonitor = PerformanceMonitor;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PerformanceMonitor;
}
