# 🧪 Automated Test Suite

Comprehensive tests for the Unified Deck System (DeckRegistry, PathResolver, DeckLoader).

---

## 📋 Test Coverage

### DeckRegistry Tests
- ✅ Deck configuration validation
- ✅ Card catalog structure (78 cards)
- ✅ Deck-specific quirks (folder structure, suit order, numbering offsets)
- ✅ Major arcana (22 cards)
- ✅ Minor arcana (4 suits × 14 cards)

### PathResolver Tests
- ✅ Base path detection (root vs `/pages/` subfolder)
- ✅ Path resolution from different locations
- ✅ Subfolder detection
- ✅ Current page identification

### DeckLoader Tests
- ✅ Card lookup (by ID, by name)
- ✅ Image path generation (all 4 decks)
- ✅ Thumbnail path generation (WebP + JPEG)
- ✅ Rider-Waite filename transformations
- ✅ Responsive image creation (`<picture>` elements)
- ✅ All 78 cards × 4 decks = 312 combinations

### Integration Tests
- ✅ Complete workflows (find card → generate paths → create image)
- ✅ Cross-deck compatibility
- ✅ Path resolution from different page locations

### Card Meanings Tests
- ✅ JSON validation
- ✅ Data structure (major + minor arcana)
- ✅ Upright/reversed meanings for all cards

**Total: 30+ test cases**

---

## 🚀 Running Tests

### Option 1: Browser-Based Test Runner (Recommended)

1. **Start a local web server:**
   ```bash
   # Using Python 3
   python3 -m http.server 8000

   # Or using Python 2
   python -m SimpleHTTPServer 8000

   # Or using Node.js (if http-server is installed)
   npx http-server -p 8000
   ```

2. **Open test runner in browser:**
   ```
   http://localhost:8000/tests/test-runner.html
   ```

3. **View results:**
   - Tests run automatically on page load
   - Click "Run All Tests" button to re-run
   - View detailed results with pass/fail indicators
   - Check browser console for additional details

**Advantages:**
- ✅ Tests run in actual browser environment
- ✅ Visual test results with colored pass/fail indicators
- ✅ No build step required
- ✅ Tests DOM creation, responsive images, etc.

### Option 2: Node.js Test Runner (Future)

**Note:** The Node.js test runner (`deck-loader.test.js`) is currently not functional because the deck modules are designed for browser environments. Future work could include:
- Converting modules to UMD/CommonJS format
- Creating a headless browser test environment (Puppeteer/Playwright)
- Building a separate test bundle

---

## 📊 Example Test Output

```
🧪 Unified Deck System - Automated Test Suite

DeckRegistry (6/6 passed)
✅ DeckRegistry should be defined
✅ DeckRegistry should have 4 decks
✅ All required decks should exist
✅ Rider-Waite deck should have correct configuration
✅ Card catalog should have 22 major arcana
✅ Each minor arcana suit should have 14 cards

PathResolver (4/4 passed)
✅ PathResolver should be defined
✅ getBasePath should work from tests subfolder
✅ resolve should build paths correctly
✅ isInSubfolder should detect subfolder

DeckLoader (10/10 passed)
✅ DeckLoader should be defined
✅ getAllCards should return 78 cards
✅ getCardById should find The Fool
✅ getCardByName should find The Magician
✅ getCardByName should handle minor arcana
✅ getImagePath should generate paths for all decks
✅ getThumbnailPath should generate WebP and JPEG paths
✅ transformRiderWaiteFilename should convert number words
✅ createResponsiveImage should create picture element
✅ All 78 cards should generate valid paths

Integration Tests (2/2 passed)
✅ Complete workflow: Get card, generate paths, create image
✅ All decks should work with all 78 cards

📊 Overall Results: 22 passed, 0 failed, 22 total
🎉 All tests passed!
```

---

## 🔧 Adding New Tests

### Browser Tests (test-runner.html)

Add new tests to the appropriate test suite:

```javascript
// Add to existing suite
loaderTests.test('New test description', function() {
    const result = DeckLoader.someMethod();
    this.assertEqual(result, expectedValue);
});

// Or create new suite
const newSuite = new TestSuite('New Feature');
newSuite.test('Should do something', function() {
    this.assertTrue(condition);
});

// Add to test runner
const suites = [registryTests, pathTests, loaderTests, integrationTests, newSuite];
```

### Available Assertions

```javascript
this.assertEqual(actual, expected, message)       // Strict equality
this.assertTrue(value, message)                   // Truthy value
this.assertFalse(value, message)                  // Falsy value
this.assertContains(str, substring, message)      // String contains
this.assertNotNull(value, message)                // Not null/undefined
this.assertArrayLength(arr, length, message)      // Array length
```

---

## 🐛 Debugging Failed Tests

1. **Check browser console:**
   - Detailed error messages
   - Stack traces
   - Test execution logs

2. **Enable debug mode:**
   ```javascript
   window.DEBUG_DECK_LOADER = true;  // Before running tests
   ```

3. **Inspect specific test:**
   - Modify test to include `console.log()` statements
   - Use browser DevTools to step through code

4. **Common issues:**
   - **Path errors:** Check `PathResolver.getBasePath()` for current location
   - **Card not found:** Verify card name spelling matches registry
   - **Image path errors:** Check deck configuration in `DeckRegistry`

---

## 📁 Test Files

```
tests/
├── README.md              # This file
├── test-runner.html       # Browser-based test runner (RECOMMENDED)
└── deck-loader.test.js    # Node.js tests (future enhancement)
```

---

## 🎯 Test Philosophy

**Goals:**
1. **Comprehensive coverage** - Test all core functionality
2. **Fast execution** - Tests should run in < 1 second
3. **Clear feedback** - Obvious which tests failed and why
4. **Easy to maintain** - Simple assertion API, no complex setup

**What We Test:**
- ✅ Core functionality (path generation, card lookup)
- ✅ Edge cases (Rider-Waite transformations, Picasso offsets)
- ✅ Integration (complete workflows)
- ✅ Data integrity (all 78 cards, all 4 decks)

**What We Don't Test:**
- ❌ UI/UX (visual appearance, animations)
- ❌ Network requests (image loading)
- ❌ Browser compatibility (manual testing)
- ❌ Performance benchmarks (separate tool)

---

## 🚧 Future Enhancements

**Planned:**
1. **CI/CD Integration** - Run tests automatically on git push
2. **Code Coverage** - Track which lines are tested
3. **Performance Tests** - Measure load times, render speed
4. **Visual Regression Tests** - Detect UI changes
5. **Headless Browser Tests** - Puppeteer/Playwright integration
6. **Test Reports** - Generate HTML/JSON test reports

**Nice to Have:**
- Snapshot testing for generated HTML
- Property-based testing (QuickCheck-style)
- Mutation testing
- Automated accessibility testing

---

## 📞 Support

**Questions about tests?**
- Review: `docs/ARCHITECTURE.md` - System architecture
- Review: `docs/REFACTORING_PLAN.md` - Design decisions
- Check: Browser console for detailed error messages

**Adding new features?**
- Write tests first (TDD approach)
- Ensure all existing tests still pass
- Add integration tests for new workflows

---

**Last Updated:** November 7, 2025
**Test Coverage:** 30+ test cases
**Status:** ✅ All tests passing
