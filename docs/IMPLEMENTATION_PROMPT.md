# Implementation Prompt for Tarot Dictionary Overlay Redesign

## Task
Modify the Tarot Dictionary page to change how card descriptions are displayed when users interact with cards.

## Context
- Working directory: `/Users/amy/TarotReading/github-deploy/`
- Main file: `dictionary.html`
- The page displays 78 tarot cards in a 3-column grid
- Cards are currently 270px wide (1.8x scaled)
- Full implementation plan is in: `DICTIONARY_OVERLAY_PLAN.md`

## Changes Needed

### 1. Make keywords smaller and left-aligned
- Change keyword font-size from 1.35em to 0.9em
- Change card-info text-align from center to left

### 2. Redesign overlay to cover ONLY the card image (not the whole card)
- Position overlay inside `.card-image` div
- Overlay should be 100% width and height of image
- Background: black with 0.85-0.9 opacity
- Show only the 50-word description (white text, no card name)
- Keywords remain visible below image at all times

### 3. Interaction behavior
- **Desktop**: Show overlay on hover (CSS only)
- **Mobile**: Show overlay on tap/click, hide on second tap or tap outside (JavaScript)

### 4. Remove old overlay system
- Remove external popup overlay that appears next to cards
- Remove smart positioning logic
- Simplify to show overlay only within image bounds

## Requirements
- Grid layout must remain stable (no shifting)
- All 78 cards must work correctly
- Responsive design for mobile/tablet/desktop
- Use existing cardDescriptions data for the 50-word stories

## Implementation Steps
1. Read `/Users/amy/TarotReading/github-deploy/DICTIONARY_OVERLAY_PLAN.md` for full details
2. Modify CSS for overlay positioning and keyword styling
3. Update JavaScript to change overlay behavior
4. Update HTML structure in createCardElement function
5. Test on a few cards to verify functionality

Please implement these changes to dictionary.html following the detailed plan.
