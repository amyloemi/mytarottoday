# Tarot Dictionary - Overlay Redesign Plan

## Current State
- Location: `/Users/amy/TarotReading/github-deploy/dictionary.html`
- Grid layout: 3 cards per row
- Cards are 270px wide with 1.8x scaling applied
- Current overlay appears NEXT TO card (not covering it)
- Keywords are center-aligned with font-size 1.35em

## Changes Required

### 1. Left-Align Keywords
- Change `.card-info` from `text-align: center` to `text-align: left`
- Keywords will align to the left side of the card

### 2. Make Keywords Smaller
- Reduce `.card-keywords` font-size from `1.35em` to `0.9em`
- Keep card name at current size (1.6em)

### 3. Redesign Overlay - Cover Image Only (Option B)

**Key Requirements:**
- Overlay covers ONLY the card image area (not the whole card)
- Keywords remain visible below the image at all times
- Overlay shows 50-word description text ONLY (no card name)
- Background: Black with opacity 0.85-0.9
- Text: White color for readability

**Structure:**
```
┌──────────────┐
│              │
│  Card Image  │  ← Overlay covers THIS AREA ONLY on hover/click
│              │     (black semi-transparent + white description)
├──────────────┤
│ Card Name    │  ← Always visible (not covered by overlay)
│ ⬆ Upright... │  ← Always visible, left-aligned, smaller
│ ⬇ Reversed...│  ← Always visible, left-aligned, smaller
└──────────────┘
```

### 4. Interaction Logic

**Desktop (non-touch devices):**
- Show overlay on mouse hover over card image
- Hide overlay when mouse leaves
- Use CSS `:hover` pseudo-class

**Mobile/Touch devices:**
- Show overlay on tap/click on card image
- Tap again or tap outside to hide
- Use JavaScript click handler
- Prevent hover effects on touch devices

### 5. Technical Implementation Details

**CSS Changes:**
1. Add `position: relative` to `.card-image`
2. Position overlay absolutely within `.card-image` (not `.tarot-card`)
3. Overlay dimensions: `width: 100%; height: 100%;` (covers entire image)
4. Background: `rgba(0, 0, 0, 0.85)` or `rgba(0, 0, 0, 0.9)`
5. Text color: `#ffffff` or `#f0f0f0`
6. Display description text centered vertically and horizontally
7. Add smooth fade-in/fade-out transition
8. Left-align keywords in `.card-info`

**JavaScript Changes:**
1. Remove current overlay positioning logic (positionOverlay function)
2. Simplify overlay to only show/hide within image bounds
3. Add touch device detection
4. For touch devices: toggle overlay on click
5. For desktop: use CSS hover (no JS needed)
6. Update createCardElement to attach overlay to `.card-image` instead of `.tarot-card`

**HTML Structure Change:**
```html
<div class="tarot-card">
  <div class="card-image">
    <img src="..." alt="...">
    <!-- Overlay positioned here, inside card-image -->
    <div class="card-overlay">
      <div class="overlay-description">
        [50-word description only, no card name]
      </div>
    </div>
  </div>
  <div class="card-info">
    <div class="card-name">The Fool</div>
    <div class="card-keywords">
      <span class="keyword-upright">⬆ innocence, new beginnings</span>
      <span class="keyword-reversed">⬇ recklessness, taken advantage</span>
    </div>
  </div>
</div>
```

### 6. Expected Result

**Benefits:**
- Cleaner, more compact design
- Grid layout remains 100% stable
- Keywords always visible for quick reference
- Description appears directly on image hover/click
- No external popups or card shifting
- Mobile-friendly tap interaction

**Visual Experience:**
- Hover over image → smooth dark overlay fades in with description
- Move away → overlay fades out
- Mobile: tap → overlay appears, tap again → overlay disappears
- Keywords stay visible for easy scanning

## Files to Modify
- `/Users/amy/TarotReading/github-deploy/dictionary.html`
  - CSS section (overlay styles, keyword alignment, font sizes)
  - JavaScript section (overlay logic, event handlers)

## Testing Checklist
- [ ] Keywords left-aligned
- [ ] Keywords smaller font size
- [ ] Overlay covers only image area
- [ ] Overlay shows description only (no card name)
- [ ] Desktop hover works smoothly
- [ ] Mobile tap/click works
- [ ] Grid layout never shifts
- [ ] All 78 cards work correctly
- [ ] Responsive on mobile/tablet/desktop
