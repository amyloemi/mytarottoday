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
