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
