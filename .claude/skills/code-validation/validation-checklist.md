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
