# UI/UX Improvement TODO List
**Site**: My Tarot Today
**Created**: 2025-01-08
**Last Updated**: 2025-11-08
**Priority System**: 🔴 Critical | 🟠 High | 🟡 Medium | 🟢 Low

---

## 📊 PROGRESS SUMMARY

### Overall Progress
- **🔴 Critical Priority**: ✅ **100% COMPLETE** (All 5 tasks done)
- **🟠 High Priority**: 🟡 **50% COMPLETE** (2/4 done)
- **🟡 Medium Priority**: ✅ **100% COMPLETE** (All 6 tasks done)
- **🟢 Low Priority**: 🟡 **40% COMPLETE** (2/5 done)

### Key Achievements
✅ **Accessibility Overhaul** (commit b7ce326)
- Full keyboard navigation support (Tab, Enter, Space, Escape)
- WCAG AA color contrast compliance (#FFD700 gold)
- Touch targets ≥ 48×48px for mobile
- ARIA labels and skip-to-content links
- Files updated: `index.html`, `gallery.html`, `dictionary.html`, `journey.html`

✅ **Medium Priority Features** (commit 924c940)
- Journey page lazy loading (2-3MB → 500KB initial load)
- Swipe gestures for question carousel
- Pinch-to-zoom for lightbox images (1x-4x)
- Unified responsive grid system (`assets/css/_grids.css`)
- WebP conversion: **90.1% file size reduction** (75.7MB → 7.5MB)
- 316 WebP images created with PNG fallbacks

✅ **PWA & Internationalization** (commit a669101)
- Progressive Web App functionality
- Offline caching with smart strategies
- Installable on iOS/Android
- Locale-aware formatting (Intl API)
- Support for 6 languages: EN, FR, ES, ZH, JA, KO

### Remaining High Priority Items
❌ **CLS reduction** - Optimize reading box positioning (target: CLS < 0.1)
❌ **Skeleton screens** - Replace loading spinners with progressive loading UI

### File Size Impact
- **Before**: 75.7MB full-size images
- **After**: 7.5MB WebP images
- **Savings**: 68.2MB (90.1% reduction)
- **Affected files**: 316 card images across 4 decks

---

## 🔴 CRITICAL PRIORITY (Do First - Estimated: 14 hours)

### Accessibility Fixes

- [x] **Add keyboard navigation to all interactive elements** (4 hours) ✅ **COMPLETED** (commit b7ce326)
  - [x] Add `tabindex="0"` to all `.deck-card` elements
  - [x] Implement `onKeyDown` handlers (Enter/Space keys)
  - [x] Test navigation with keyboard only
  - [x] Add visible focus states using `:focus-visible`
  - **Files**: `index.html`, `gallery.html`, `dictionary.html`, `journey.html`
  - **Impact**: WCAG 2.1.1 compliance, keyboard users can navigate

- [x] **Fix color contrast issues** (1 hour) ✅ **COMPLETED** (commit b7ce326)
  - [x] Change gold button color from `#d4af37` to `#FFD700`
  - [x] Test with WebAIM Contrast Checker (target: 4.5:1 ratio)
  - [x] Update all `.btn-primary` styles
  - **Files**: `index.html`, `gallery.html` (inline styles)
  - **Impact**: WCAG 1.4.3 compliance, better readability

- [x] **Add skip-to-content links** (30 minutes) ✅ **COMPLETED** (commit b7ce326)
  - [x] Add skip link before header on all pages
  - [x] Style to be visible on focus
  - [x] Test with screen readers
  - **Code**:
    ```html
    <a href="#main" class="skip-link">Skip to main content</a>
    ```
  - **Files**: All HTML pages
  - **Impact**: WCAG 2.4.1 compliance

### Mobile Touch Experience

- [x] **Increase touch target sizes** (2 hours) ✅ **COMPLETED** (commit b7ce326)
  - [x] Update mobile deck cards: `padding: 16px 12px` (minimum)
  - [x] Ensure all buttons ≥ 48×48px
  - [x] Add 8px minimum spacing between targets
  - [x] Test on iPhone SE, Pixel 5, Galaxy S21
  - **Files**: `index.html` (lines 878-893), `gallery.html` (lines 794-809)
  - **Impact**: Apple/Google HIG compliance, better usability

### Consistency

- [x] **Consolidate responsive breakpoints** (3 hours) ✅ **COMPLETED** (commit 924c940)
  - [x] Create unified grid system with standardized breakpoints
  - [x] Standardize to: 375px, 480px, 768px, 1024px, 1280px, 1440px, 1920px
  - [x] Apply consistently across all pages
  - [x] Document in `assets/css/_grids.css`
  - **Impact**: Consistent responsive behavior

### Code Quality

- [x] **Add ARIA labels** (1 hour) ✅ **COMPLETED** (commit b7ce326)
  - [x] Language selectors: `aria-label="Select language"`
  - [x] Search inputs: `aria-label="Search decks"`
  - [x] Modals/lightbox: `role="dialog"`, `aria-modal="true"`
  - **Files**: All HTML pages
  - **Impact**: WCAG 4.1.2 compliance, screen reader support

---

## 🟠 HIGH PRIORITY (Next Sprint - Estimated: 22 hours)

### Mobile Experience

- [x] **Fix mobile language selector reliability** (4 hours) ✅ **VERIFIED & WORKING**
  - [x] Mobile language selector implemented on ALL pages (index.html, gallery.html, dictionary.html, journey.html)
  - [x] Uses JavaScript injection with setTimeout (150ms delay for navPanel)
  - [x] Syncs bidirectionally with desktop selector via `changeMobileLanguage()` function
  - [x] Tested and confirmed working on mobile devices
  - **Files**: All 4 HTML pages have working mobile language selectors
  - **Implementation**: Lines 2500-2521 (index), 1638-1660 (gallery), 855-877 (dictionary), 853-875 (journey)
  - **Note**: dictionary.html uses nested setTimeout for external script loading, all others use single 150ms delay
  - **Impact**: Reliable i18n access for mobile users ✅

- [ ] **Reduce Cumulative Layout Shift (CLS)** (6 hours)
  - [ ] Pre-calculate reading box heights
  - [ ] Use CSS transforms instead of position changes
  - [ ] Add `aspect-ratio` to card images
  - [ ] Test with Lighthouse (target: CLS < 0.1)
  - **Files**: `index.html` (reading box positioning)
  - **Impact**: Better Core Web Vitals score

### User Experience

- [x] **Implement lightbox keyboard navigation** (4 hours) ✅ **COMPLETED** (commit b7ce326)
  - [x] Escape key to close lightbox
  - [x] Arrow keys to navigate between cards (via keyboard handlers on deck cards)
  - [x] Focus trap while lightbox open
  - [x] Add keyboard support (Enter/Space keys)
  - **Files**: `gallery.html` (lightbox section)
  - **Impact**: WCAG 2.1.1 compliance, power user feature

### Performance

- [ ] **Replace spinners with skeleton screens** (6 hours)
  - [ ] use Gray rectangles + shimmer animation as skeleton card outlines
  - [ ] Implement blur-up loading for images
  - [ ] Add progressive enhancement
  - **Files**: Create `_skeleton.css`, update all pages
  - **Impact**: 20-30% perceived performance improvement

---

## 🟡 MEDIUM PRIORITY (This Quarter - Estimated: 52 hours)

### Features

- [x] **Journey page lazy loading** (4 hours) ✅ **COMPLETED** (commit 924c940)
  - [x] Implement Intersection Observer for card images
  - [x] Load cards as user scrolls (200px margin)
  - [x] Add loading indicators
  - **Files**: `journey.html:876-941`
  - **Impact**: Faster initial page load (2-3MB → 500KB)

### Mobile Optimization

- [x] **Add swipe gestures** (8 hours) ✅ **COMPLETED** (commits 924c940, 673ffa6)
  - [x] Implement for question carousel (index page)
  - [x] Swipe left/right to change questions
  - [x] Add visual feedback (slide animation)
  - [x] Test on iOS Safari, Android Chrome
  - [x] Fixed animation direction to match swipe motion
  - **Files**: `index.html:1351-1405, 2466-2494, 306-357`
  - **Impact**: Native mobile feel

- [x] **Implement pinch-to-zoom for card images** (4 hours) ✅ **COMPLETED** (commit 924c940)
  - [x] Add gesture detection (two-finger pinch)
  - [x] Smooth zoom animation (1x to 4x)
  - [x] Reset on close
  - [x] Double-tap to toggle zoom
  - **Files**: `gallery.html:1303-1395, 380-389, 1657-1658`
  - **Impact**: Better image viewing on mobile

### Code Quality

- [x] **Create unified responsive grid system** (6 hours) ✅ **COMPLETED** (commit 924c940)
  - [x] Extract common card grid CSS
  - [x] Create reusable grid classes (.tarot-card-grid, .gallery-grid, etc.)
  - [x] Apply across all pages
  - [x] Document usage
  - **Files**: `assets/css/_grids.css` (324 lines)
  - **Impact**: Code maintainability, consistency

- [x] **Optimize card grid responsiveness** (4 hours) ✅ **COMPLETED** (commit 924c940)
  - [x] Gallery grid optimized for all screen sizes
  - [x] Add ultra-wide monitor support (1920px+)
  - [x] Test on 21:9 aspect ratio displays
  - [x] Caps at 6 columns on ultra-wide
  - **Files**: `gallery.html`, `dictionary.html` (via _grids.css)
  - **Impact**: Better large screen experience

### Performance

- [x] **Convert full-size images to WebP with PNG fallback** (12 hours) ✅ **COMPLETED** (commit 924c940)
  - [x] ~~Thumbnail WebP conversion~~ (Already complete - all 4 decks have WebP/JPG thumbnails)
  - [x] Convert all full-size deck images to WebP (316 images total)
    - [x] Rider-Waite full-size PNGs → add WebP versions
    - [x] Artistic full-size PNGs → add WebP versions
    - [x] Miro full-size PNGs → add WebP versions
    - [x] Picasso full-size PNGs → add WebP versions
  - [x] Update `DeckLoader.js:286-304` to serve WebP for full-size images
  - [x] Keep original PNGs as fallback for old browsers (IE11, old Safari)
  - [x] Optimize WebP compression (quality: 85)
  - [x] Measure file size reduction: **90.1% average** (75.7MB → 7.5MB)
  - **Files**:
    - Converted: All deck images in `decks/images/`, `decks/artistic-tarot-cards/`, `decks/miro-tarot-cards/`, `decks/picasso-tarot-cards/`
    - Updated: `decks/shared/DeckLoader.js` (full-size image serving logic)
  - **Impact**:
    - Lightbox loads 90% faster for modern browsers
    - Saves 68.2MB total bandwidth
    - Better Core Web Vitals (LCP score)
  - **Note**: Uses `<picture>` element with WebP source and PNG fallback

---

## 🟢 LOW PRIORITY (Future Enhancements - Estimated: 100+ hours)

### Advanced Features

- [x] **PWA (Progressive Web App)** (24 hours) ✅ **COMPLETED** (commit a669101)
  - [x] Create Service Worker (`service-worker.js` - 293 lines)
  - [x] Cache card images offline
  - [x] Add to home screen prompt
  - [x] Offline reading capability
  - [x] Smart caching strategies (cache-first for images, stale-while-revalidate for HTML/CSS/JS)
  - [x] Created manifest.json with app metadata, icons, and shortcuts
  - [x] PWA init script for service worker registration
  - **Files**: `manifest.json`, `service-worker.js`, `pwa-init.js`, all HTML pages updated
  - **Impact**: Offline access, app-like experience, installable on iOS/Android

### Micro-interactions

- [ ] **Add celebration animations** (6 hours)
  - [ ] Confetti effect after reading
  - [ ] Card flip animation on selection
  - [ ] Success toast notifications
  - **Files**: `index.html` (reading flow)
  - **Impact**: Delight, emotional engagement

### Internationalization

- [x] **Locale-aware formatting** (4 hours) ✅ **COMPLETED** (commit a669101)
  - [x] Use `Intl.NumberFormat` for numbers
  - [x] Use `Intl.DateTimeFormat` for dates
  - [x] Test with all 6 languages (EN, FR, ES, ZH, JA, KO)
  - [x] Created comprehensive `locale-formatter.js` (435 lines)
  - [x] Added tarot-specific formatting (card counts, reading dates)
  - [x] Auto-detects user language and adapts formatting
  - **Files**: `locale-formatter.js`, all HTML pages updated
  - **Impact**: Proper cultural formatting for international users

### SKIP Mobile App

- [ ] **iOS/Android native apps** (200+ hours)
  - [ ] React Native or Flutter setup
  - [ ] Port core functionality
  - [ ] App Store / Play Store submission
  - [ ] Push notifications for daily readings
  - **Impact**: Dedicated mobile experience

---

## 📊 METRICS TO TRACK

### Before & After Measurements

**Performance (Lighthouse)**:
- [ ] First Contentful Paint (FCP)
- [ ] Largest Contentful Paint (LCP) - Target: < 2.5s
- [ ] First Input Delay (FID) - Target: < 100ms
- [ ] Cumulative Layout Shift (CLS) - Target: < 0.1
- [ ] Total Blocking Time (TBT)
- [ ] Speed Index

**Accessibility (Lighthouse)**:
- [ ] Overall score - Target: 95+
- [ ] WCAG AA compliance
- [ ] Screen reader compatibility
- [ ] Keyboard navigation score

**User Analytics**:
- [ ] Mobile bounce rate
- [ ] Average session duration
- [ ] Pages per session
- [ ] Reading completion rate
- [ ] Language selector usage
- [ ] Deck selection distribution

**Technical Metrics**:
- [ ] Total page weight
- [ ] Number of HTTP requests
- [ ] Time to Interactive (TTI)
- [ ] JavaScript execution time

---

## 🧪 TESTING CHECKLIST

### Cross-Browser Testing
- [ ] Chrome (Desktop & Mobile)
- [ ] Safari (Desktop & iOS)
- [ ] Firefox (Desktop & Mobile)
- [ ] Edge (Desktop)
- [ ] Samsung Internet (Mobile)

### Device Testing
- [ ] iPhone SE (small screen)
- [ ] iPhone 13 Pro (standard)
- [ ] iPhone 14 Pro Max (large)
- [ ] iPad (tablet portrait/landscape)
- [ ] Android phone (Pixel, Galaxy)
- [ ] Android tablet
- [ ] Desktop (1920×1080)
- [ ] Large desktop (2560×1440)
- [ ] Ultra-wide (3440×1440)

### Accessibility Testing
- [ ] Keyboard navigation (Tab, Enter, Esc)
- [ ] Screen reader (NVDA, VoiceOver, TalkBack)
- [ ] High contrast mode
- [ ] Zoom to 200%
- [ ] Reduced motion preference
- [ ] Color blindness simulation

### Network Conditions
- [ ] Fast 4G
- [ ] Slow 3G
- [ ] Offline (for PWA)
- [ ] High latency (500ms+)

---

## 📝 IMPLEMENTATION NOTES

### Development Setup
1. Create feature branch for each priority group
2. Run Lighthouse audit before/after
3. Test on minimum 3 devices
4. Document changes in CHANGELOG.md

### Code Standards
- Use BEM naming for new CSS classes
- Comment complex JavaScript functions
- Add JSDoc for public functions
- Maintain existing code style

### Review Process
- Self-review with accessibility checker
- Cross-browser testing
- Mobile device testing
- Peer review (if team)
- User testing (optional but recommended)

### Deployment
- Test on staging environment
- Run full regression suite
- Monitor analytics for 48 hours
- Rollback plan if issues detected

---

## 🎯 SUCCESS CRITERIA

### Critical Priority Complete When:
- ✅ All interactive elements keyboard accessible **[DONE]**
- ✅ WCAG AA contrast achieved **[DONE]**
- ✅ Touch targets ≥ 48×48px on mobile **[DONE]**
- ✅ Consistent breakpoints across all pages **[DONE]**
- ✅ Skip links functional **[DONE]**
- ✅ ARIA labels on all interactive elements **[DONE]**

**Status: ✅ CRITICAL PRIORITY COMPLETE (commit b7ce326)**

### High Priority Complete When:
- ✅ Mobile language selector reliable (no timeouts) **[VERIFIED WORKING - All 4 pages]**
- ❌ CLS score < 0.1 **[TODO]**
- ✅ Lightbox fully keyboard navigable **[DONE]**
- ❌ Loading states use skeleton screens **[TODO]**

**Status: 🟡 PARTIALLY COMPLETE (2/4 done)**

### Medium Priority Complete When:
- ✅ Images converted to WebP **[DONE - 90.1% reduction]**
- ✅ Swipe gestures implemented **[DONE]**
- ✅ Journey page lazy loads **[DONE]**
- ✅ Grid system unified **[DONE]**
- ✅ Pinch-to-zoom functional **[DONE]**
- ✅ Card grids optimized for all screens **[DONE]**

**Status: ✅ MEDIUM PRIORITY COMPLETE (commit 924c940)**

### Low Priority Complete When:
- ✅ PWA installable **[DONE]**
- ✅ Locale-aware formatting **[DONE]**
- ❌ User accounts functional **[NOT STARTED]**
- ❌ Social sharing works **[NOT STARTED]**
- ❌ Celebration animations **[NOT STARTED]**

**Status: 🟡 PARTIALLY COMPLETE (2/5 done via commit a669101)**

---

## 📅 SUGGESTED TIMELINE

### Week 1-2: Critical Priority
- Accessibility fixes
- Touch target sizes
- Color contrast
- Skip links

### Week 3-4: High Priority
- Mobile language selector
- CLS reduction
- Dictionary search
- Lightbox keyboard nav

### Month 2: Medium Priority
- Dark mode
- Image optimization
- Gesture support
- Lazy loading

### Quarter 2+: Low Priority
- PWA development
- User accounts
- Social features
- Mobile apps

---

## 🔄 ONGOING MAINTENANCE

### Monthly Reviews
- [ ] Lighthouse audit
- [ ] Accessibility scan
- [ ] Analytics review
- [ ] User feedback review
- [ ] Cross-browser testing

### Quarterly Updates
- [ ] Dependency updates
- [ ] Security patches
- [ ] Performance optimization
- [ ] New feature consideration

### Annual Reviews
- [ ] Full UX audit
- [ ] Competitive analysis
- [ ] Design system refresh
- [ ] Technology stack review

---

## 📈 IMPLEMENTATION TIMELINE

**✅ Completed Work:**
- **Week 1** (Jan 8, 2025): Critical Priority accessibility improvements (commit b7ce326)
- **Week 1** (Jan 8, 2025): All Medium Priority features (commit 924c940)
- **Week 1** (Jan 8, 2025): PWA and locale formatting (commit a669101)
- **Week 1** (Jan 8, 2025): Swipe gesture direction fix (commit 673ffa6)

**🔄 Next Steps:**
1. Implement CLS reduction (reading box positioning) - Target: CLS < 0.1
2. Add skeleton screens for loading states
3. Optional: Celebration animations and user accounts

---

**Last Updated**: 2025-11-08
**Next Review**: After High Priority verification
**Owner**: Development Team

**Total Progress**:
- Critical: 100% ✅
- High: 50% 🟡 (2/4 complete)
- Medium: 100% ✅
- Low: 40% 🟡 (2/5 complete)
