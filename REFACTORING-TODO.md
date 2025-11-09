# Tarot Reading App - Refactoring & Validation TODO

**Created**: 2025-11-08
**Context**: After fixing deck clickability issue caused by file corruption during JavaScript edits

---

## 🔴 WHAT WENT WRONG (Context for Future Reference)

### The Problem:
1. Made changes to `index.html` to remove "Choose Different Deck" button
2. Updated `drawAnotherCard()` function to use same logic as `returnToDeckSelection()`
3. Used Python script to fix indentation and remove duplicate functions
4. **Script accidentally truncated file** - removed closing `</script>`, `</body>`, `</html>` tags
5. This caused `selectDeck` function to be undefined (scope issue)
6. Deck selection became unclickable

### Root Causes:
- **2600+ line monolithic HTML file** with embedded CSS and JavaScript
- **Unsafe string manipulation** using Python line operations on complex nested code
- **No validation** after modifications
- **No separation of concerns** - JS mixed with HTML makes edits risky
- **No automated testing** to catch errors before deployment

---

## 📋 COMPLETE REFACTORING PLAN

Execute these tasks in order. Each section is self-contained with all context needed.

---

## PHASE 1: Create Code Validation Skill ⭐ DO FIRST

### Goal:
Create a Claude skill that automatically validates HTML/JS files after editing to prevent future corruption.

### Task 1.1: Create Skill Directory
```bash
mkdir -p .claude/skills/code-validation/examples
```

### Task 1.2: Create SKILL.md
**File**: `.claude/skills/code-validation/SKILL.md`

```markdown
---
name: code-validation
description: Automatically validates HTML and JavaScript files after editing to prevent file corruption, missing closing tags, scope issues, and indentation errors. Use this skill whenever modifying HTML files with embedded JavaScript.
allowed-tools: Read, Grep, Glob, Bash
---

# Code Validation Skill

## Purpose
This skill validates HTML and JavaScript files after modifications to catch common errors that can break functionality.

## When to Use
Automatically trigger this skill after:
- Editing HTML files with embedded JavaScript
- Modifying JavaScript functions
- Using scripts to manipulate code files
- Making bulk changes to code structure

## Validation Checklist

### 1. HTML Structure Validation
Run these checks on the modified file:

```bash
# Count opening and closing script tags
grep -c "<script>" index.html
grep -c "</script>" index.html
# These should match (accounting for external scripts)

# Verify file ends properly
tail -5 index.html
# Should see: </script>, </body>, </html>

# Check for proper closing tags
grep -E "</(script|body|html)>" index.html | tail -3
```

### 2. JavaScript Function Scope Check
```bash
# Find all function definitions and their indentation
grep -n "^\s*function\s" index.html

# Check that functions at same level have same indentation
# Example: selectDeck, returnToDeckSelection, drawAnotherCard should all have 2 tabs
```

### 3. File Integrity Check
```bash
# Compare line count before and after modification
wc -l index.html
# If significantly different, investigate potential truncation

# Check file size
ls -lh index.html
# Verify reasonable file size (should be ~80-85KB for this project)
```

### 4. JavaScript Syntax Validation (if available)
```bash
# Check for basic syntax errors
node --check <(grep -A 99999 '<script>' index.html | grep -B 99999 '</script>')

# Or use ESLint if available
npx eslint --no-eslintrc --parser-options=ecmaVersion:2020 index.html
```

### 5. Function Accessibility Check
Use grep to verify critical functions are defined at global scope:
```bash
# Check these functions exist and are properly scoped
grep -n "function selectDeck" index.html
grep -n "function returnToDeckSelection" index.html
grep -n "function drawAnotherCard" index.html
grep -n "function shuffleAnimation" index.html
```

### 6. Indentation Consistency
```bash
# Check indentation of main functions (should be consistent)
grep -B 1 "^[[:space:]]*function" index.html | head -20
```

## Validation Report Template

After running checks, report:
```
✅ HTML Structure: [PASS/FAIL]
   - Opening <script> tags: X
   - Closing </script> tags: X
   - File ends with </html>: [YES/NO]

✅ JavaScript Functions: [PASS/FAIL]
   - All critical functions defined: [YES/NO]
   - Scope levels correct: [YES/NO]
   - Indentation consistent: [YES/NO]

✅ File Integrity: [PASS/FAIL]
   - Line count: X (expected ~2614)
   - File size: X KB (expected ~82KB)
   - No truncation detected: [YES/NO]

✅ Syntax: [PASS/FAIL]
   - No syntax errors: [YES/NO]
```

## Common Issues to Detect

### Issue 1: Missing Closing Tags
**Symptoms**: File doesn't end with `</html>`
**Fix**: Add missing `</script>`, `</body>`, `</html>` tags

### Issue 2: Function Scope Problems
**Symptoms**: Function has wrong indentation level (e.g., 3 tabs instead of 2)
**Fix**: Correct indentation to match other global functions

### Issue 3: File Truncation
**Symptoms**: Line count significantly lower than expected
**Fix**: Restore from backup or redo changes carefully

### Issue 4: Nested Functions
**Symptoms**: Function defined inside another function unintentionally
**Fix**: Move function to correct scope level

## Automated Validation Script

If creating a validation script, include these checks:
```bash
#!/bin/bash
# validate-html-js.sh

FILE="$1"
ERRORS=0

# Check HTML structure
SCRIPT_OPEN=$(grep -c "<script>" "$FILE")
SCRIPT_CLOSE=$(grep -c "</script>" "$FILE")

if [ "$SCRIPT_OPEN" -ne "$SCRIPT_CLOSE" ]; then
    echo "❌ Script tag mismatch: $SCRIPT_OPEN opening, $SCRIPT_CLOSE closing"
    ERRORS=$((ERRORS + 1))
fi

# Check file ending
LAST_LINE=$(tail -1 "$FILE")
if [[ "$LAST_LINE" != "</html>" ]]; then
    echo "❌ File doesn't end with </html>"
    ERRORS=$((ERRORS + 1))
fi

# Check critical functions
for func in "selectDeck" "drawAnotherCard" "shuffleAnimation"; do
    if ! grep -q "function $func" "$FILE"; then
        echo "❌ Missing function: $func"
        ERRORS=$((ERRORS + 1))
    fi
done

if [ $ERRORS -eq 0 ]; then
    echo "✅ All validation checks passed!"
    exit 0
else
    echo "❌ $ERRORS validation errors found"
    exit 1
fi
```

## Usage in Claude Workflow

1. **Before making changes**: Note current line count and file size
2. **During changes**: Use safe tools (Edit, not custom scripts)
3. **After changes**: THIS SKILL RUNS AUTOMATICALLY
4. **Review results**: Check validation report
5. **If errors**: Fix immediately before proceeding

## Prevention Tips

- Prefer Edit tool over custom Python/bash scripts for code changes
- Always validate after bulk operations
- Keep backups before major refactoring
- Test in browser after file modifications
- Use git to track changes and enable easy rollback
```

### Task 1.3: Create Validation Checklist
**File**: `.claude/skills/code-validation/validation-checklist.md`

```markdown
# Quick Validation Checklist

Use this checklist after editing `index.html`:

## Immediate Checks (30 seconds)
- [ ] File ends with `</html>` (check with `tail -1 index.html`)
- [ ] Line count ~2614 lines (check with `wc -l index.html`)
- [ ] File size ~82KB (check with `ls -lh index.html`)

## Structure Checks (1 minute)
- [ ] Opening/closing `<script>` tags match
- [ ] Opening/closing `<body>` tags match
- [ ] Opening/closing `<html>` tags match
- [ ] No orphaned closing braces `}`

## Function Checks (2 minutes)
- [ ] `selectDeck` function exists
- [ ] `returnToDeckSelection` function exists
- [ ] `drawAnotherCard` function exists
- [ ] `shuffleAnimation` function exists
- [ ] All functions have consistent indentation

## Browser Test (1 minute)
- [ ] Open index.html in browser
- [ ] No console errors
- [ ] Deck selection clickable
- [ ] Can select a deck successfully

Total time: ~5 minutes
```

### Task 1.4: Create Common Issues Examples
**File**: `.claude/skills/code-validation/examples/common-issues.md`

```markdown
# Common Issues and How to Detect Them

## Issue 1: File Truncation

**What it looks like:**
```bash
$ tail -5 index.html
                }, 2000);
            })();
    }
# Missing </script>, </body>, </html>
```

**How to detect:**
```bash
tail -5 index.html | grep -c "</html>"
# Should return 1, if 0 then file is truncated
```

**How to fix:**
Add missing tags:
```html
    </script>
</body>
</html>
```

## Issue 2: Wrong Function Indentation

**What it looks like:**
```javascript
    function returnToDeckSelection() {
        // code
    }

        function drawAnotherCard() {  // <-- Extra tab!
        // code
    }
```

**How to detect:**
```bash
grep -n "^\s*function" index.html | head -10
# Check that global functions have same indentation
```

**How to fix:**
Remove extra indentation to match other functions at same scope.

## Issue 3: Missing Closing Script Tag

**What it looks like:**
```html
<script>
    function myFunction() {
        // code
    }
<!-- Missing </script> here! -->
</body>
</html>
```

**How to detect:**
```bash
# Count tags
grep -c "<script>" index.html  # Returns 2
grep -c "</script>" index.html # Returns 1 (mismatch!)
```

## Issue 4: Function Defined in Wrong Scope

**What it looks like:**
```javascript
function outerFunction() {
    // ...

    function innerFunction() {  // <-- Nested, not global!
        // This won't be accessible globally
    }
}
```

**How to detect:**
Check indentation levels of function definitions.

**Impact:**
`Uncaught ReferenceError: innerFunction is not defined`
```

---

## PHASE 2: Extract JavaScript from index.html

### Goal:
Separate JavaScript into external files to make code easier to maintain and reduce risk of HTML corruption during JS edits.

### Current State:
- `index.html`: ~2614 lines
- Embedded `<script>` block: Lines ~1202-2605
- All JavaScript mixed with HTML/CSS

### Target State:
```
assets/js/
├── translations.js      # Language data and translation functions
├── card-logic.js        # Card reading and display logic
├── animations.js        # Shuffle animation functions
├── ui-helpers.js        # UI utility functions
└── app.js              # Main application logic (load last)
```

### Task 2.1: Create translations.js
**File**: `assets/js/translations.js`

**Extract from index.html lines ~1203-1268:**
- `translations` object (all language data)
- `updateLanguage(lang)` function
- `translatePage()` function
- Language switching logic

**Template:**
```javascript
// Language translations
const translations = {
    en: { /* ... */ },
    fr: { /* ... */ },
    es: { /* ... */ },
    zh: { /* ... */ },
    ja: { /* ... */ },
    ko: { /* ... */ }
};

let currentLanguage = 'en';

function updateLanguage(lang) {
    // Extract this function from index.html
}

function translatePage() {
    // Extract this function from index.html
}

// Language switcher event listeners
// Extract from index.html
```

### Task 2.2: Create card-logic.js
**File**: `assets/js/card-logic.js`

**Extract functions:**
- `showReadingBox(card, isReversed, reading)`
- `displayCard(cardData)`
- `getReadingFromJSON(deckType, cardName, question, isReversed)`
- Card rendering logic

**Variables needed:**
```javascript
let currentCard = null;
let readingsData = {};
```

### Task 2.3: Create animations.js
**File**: `assets/js/animations.js`

**Extract functions:**
- `createShuffleDeck()`
- `shuffleAnimation()`
- `selectAnimatedCard(selectedCard, tarotCard)`
- `setInstruction(text)`

**Variables needed:**
```javascript
let animCards = [];
let isAnimating = false;
let canPickCard = false;
let selectedCardElement = null;
let selectedCardScale = 1;
let selectedCardTopPosition = 0;
```

**Line numbers in current index.html:**
- `shuffleAnimation`: ~1688-1806
- `selectAnimatedCard`: ~1914-2083
- `createShuffleDeck`: Find in current file
- Animation helper functions: Find in current file

### Task 2.4: Create ui-helpers.js
**File**: `assets/js/ui-helpers.js`

**Extract functions:**
- Question cycling logic
- Skeleton loader functions (`showSkeleton`, `hideSkeletonShowContent`)
- `setInstruction(text)` (or move to animations.js)
- Tap hint logic
- Any other UI utility functions

### Task 2.5: Create app.js (Main Application)
**File**: `assets/js/app.js`

**Extract functions:**
- `selectDeck(deckType)` - Line ~2189
- `returnToDeckSelection()` - Line ~2219
- `drawAnotherCard()` - Line ~2276

**Variables needed:**
```javascript
let currentDeck = null;
```

**Must be loaded LAST** (depends on other files)

### Task 2.6: Update index.html
**Remove:** Entire `<script>` block (lines ~1202-2605)

**Add before `</body>`:**
```html
<!-- Application JavaScript (in dependency order) -->
<script src="assets/js/translations.js"></script>
<script src="assets/js/card-logic.js"></script>
<script src="assets/js/animations.js"></script>
<script src="assets/js/ui-helpers.js"></script>
<script src="assets/js/app.js"></script>

<!-- Locale Formatter -->
<script src="/locale-formatter.js"></script>

<!-- PWA Initialization -->
<script src="/pwa-init.js"></script>
</body>
</html>
```

### Task 2.7: Testing Checklist
After extraction, verify:

**Browser Console Tests:**
```javascript
// In browser console, verify these are defined:
typeof selectDeck              // should be "function"
typeof drawAnotherCard         // should be "function"
typeof shuffleAnimation        // should be "function"
typeof translations            // should be "object"
```

**Functional Tests:**
- [ ] Page loads without console errors
- [ ] Deck selection cards are visible
- [ ] Clicking a deck triggers selection
- [ ] Shuffle animation plays
- [ ] Card can be selected from animation
- [ ] Card reading displays correctly
- [ ] "Draw Another Card" button works
- [ ] Language switching works
- [ ] All 3 decks work (Rider-Waite, Artistic, Miró)

**Validation Tests:**
```bash
# Run validation skill
# File should still end with </html>
tail -1 index.html

# File should be much smaller now (~800-1000 lines)
wc -l index.html

# All JS files should exist
ls -la assets/js/
```

### Task 2.8: Backup and Rollback Plan

**Before starting extraction:**
```bash
# Create backup
cp index.html index.html.before-refactor
cp index.html index.html.backup-$(date +%Y%m%d-%H%M%S)

# Initialize git if not already done
git init
git add .
git commit -m "Backup before JavaScript extraction"
```

**If something breaks:**
```bash
# Quick rollback
cp index.html.before-refactor index.html

# Or use git
git checkout index.html
```

---

## PHASE 3: Additional Improvements (Optional)

### Task 3.1: Add ESLint Configuration
Create `.eslintrc.json`:
```json
{
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "script"
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-undef": "error"
  }
}
```

Run: `npx eslint assets/js/*.js`

### Task 3.2: Add HTML Validation
```bash
# Install validator
npm install -g html-validate

# Create config
cat > .htmlvalidate.json << 'EOF'
{
  "extends": ["html-validate:recommended"]
}
EOF

# Run validation
html-validate index.html
```

### Task 3.3: Create Validation NPM Script
Add to `package.json`:
```json
{
  "scripts": {
    "validate": "html-validate index.html && eslint assets/js/*.js",
    "validate:html": "html-validate index.html",
    "validate:js": "eslint assets/js/*.js"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "html-validate": "^8.0.0"
  }
}
```

Usage: `npm run validate`

### Task 3.4: Add Pre-commit Hook (Git)
Create `.git/hooks/pre-commit`:
```bash
#!/bin/bash

echo "Running validation checks..."

# Validate HTML
if ! tail -1 index.html | grep -q "</html>"; then
    echo "❌ index.html doesn't end with </html>"
    exit 1
fi

# Check file integrity
LINES=$(wc -l < index.html)
if [ "$LINES" -lt 500 ]; then
    echo "❌ index.html seems truncated (only $LINES lines)"
    exit 1
fi

echo "✅ Validation passed"
exit 0
```

Make executable: `chmod +x .git/hooks/pre-commit`

---

## EXECUTION INSTRUCTIONS

### Quick Start (Recommended Order):
```bash
# 1. Create validation skill
mkdir -p .claude/skills/code-validation/examples

# 2. Copy skill files from this TODO
# (Use Claude to create the 3 files listed in Phase 1)

# 3. Test validation skill on current index.html
# (Claude should automatically use the skill)

# 4. Create backup before refactoring
cp index.html index.html.before-refactor

# 5. Start JavaScript extraction
# (Work through Phase 2 tasks with Claude)

# 6. Test thoroughly after each file extraction

# 7. Run validation skill after all changes

# 8. Optional: Add additional tooling (Phase 3)
```

### Estimated Time:
- **Phase 1** (Validation Skill): 30 minutes
- **Phase 2** (JS Extraction): 2-3 hours
- **Phase 3** (Additional Tools): 1 hour
- **Total**: 4-5 hours

### Success Criteria:
✅ Validation skill created and working
✅ All JavaScript extracted to separate files
✅ index.html reduced to ~800-1000 lines
✅ All functionality still works (test checklist passes)
✅ No console errors
✅ Code easier to maintain and edit
✅ Validation catches future errors automatically

---

## TROUBLESHOOTING

### Issue: "selectDeck is not defined"
**Solution**: Check that functions in app.js are not wrapped in a closure. They must be global.

### Issue: Variables undefined between files
**Solution**: Ensure files loaded in correct order. Variables must be declared before use.

### Issue: Validation skill not triggering
**Solution**: Skill description may need refinement. Manually invoke with: "Please validate index.html using the code-validation skill"

### Issue: File truncation during extraction
**Solution**: Restore from backup: `cp index.html.before-refactor index.html`

---

## NOTES

- **Current file**: index.html has 2614 lines, ~82KB
- **Main script block**: Lines 1202-2605
- **Critical functions**: selectDeck, drawAnotherCard, returnToDeckSelection, shuffleAnimation
- **Load order matters**: translations → card-logic → animations → ui-helpers → app
- **Test after each extraction**: Don't extract everything at once
- **Keep backups**: Use git or file copies

---

## CONTACT / REFERENCE

**Related Files:**
- `index.html` - Main HTML file
- `index.html.skel-backup` - Backup with proper ending

**Key Directories:**
- `assets/js/` - JavaScript files (after extraction)
- `.claude/skills/code-validation/` - Validation skill
- `decks/` - Tarot deck data and images

**Git Repository:**
- Working directory: `/Users/amy/CCWorkSpace/TarotReading/github-deploy`
- Remember to commit after successful refactoring

---

**END OF TODO - Good luck! 🎴**
