# My Tarot Today

A beautiful, interactive tarot reading web application with multi-language support and the complete Rider-Waite tarot deck.

🔮 **Live Site**: [https://mytarottoday.com](https://mytarottoday.com) (also available at [https://amyloemi.github.io/mytarottoday/](https://amyloemi.github.io/mytarottoday/))

## Features

✨ **Card of Today** - Draw a daily tarot card for guidance
🌍 **Multi-Language Support** - Available in 6 languages:
- English
- Français (French)
- Español (Spanish)
- 中文 (Chinese)
- 日本語 (Japanese)
- 한국어 (Korean)

🎴 **Complete Rider-Waite Deck** - All 78 cards included:
- 22 Major Arcana cards
- 56 Minor Arcana cards (Cups, Pentacles, Swords, Wands)

🔄 **Reversed Card Support** - Cards can appear upright or reversed with different meanings
💾 **Language Preference Memory** - Your language choice is saved automatically
🎨 **Beautiful UI** - Light blue theme with smooth animations
📱 **Responsive Design** - Works on desktop, tablet, and mobile
🔒 **Privacy-Focused** - All readings happen in your browser, nothing is stored on servers

## How It Works

1. **Visit the site** at [mytarottoday.com](https://mytarottoday.com)
2. **Select your language** from the dropdown (top-right)
3. **Click on the card** to reveal your daily guidance
4. **Draw a new card** anytime with the button

The app uses real-time translation to provide authentic tarot readings in your chosen language. Each reading is tailored to the specific card drawn and its orientation.

## Project Structure

```
TarotReading/
├── README.md                      # This file
├── index.html                     # Main application (Card of Today)
├── card-of-today.html            # Backup of main page
├── tarot_card_meanings.json      # Complete database of all 78 cards
├── reading_methodology.md        # Interpretation techniques
├── reading_examples.md           # Example readings
├── download_cards_fast.sh        # Script to download card images
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages deployment
└── images/                       # Rider-Waite tarot deck images
    ├── major_arcana/             # 22 Major Arcana cards
    └── minor_arcana/             # 56 Minor Arcana cards
        ├── cups/
        ├── pentacles/
        ├── swords/
        └── wands/
```

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (no frameworks)
- **Translation**: MyMemory Translation API
- **Images**: High-resolution Rider-Waite tarot cards (400+ dpi)
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions (automatic)

## Card Meanings Database

### Major Arcana (22 cards)
Represent life's big lessons and spiritual themes:
- The Fool, The Magician, The High Priestess, The Empress, The Emperor
- The Hierophant, The Lovers, The Chariot, Strength, The Hermit
- Wheel of Fortune, Justice, The Hanged Man, Death, Temperance
- The Devil, The Tower, The Star, The Moon, The Sun
- Judgement, The World

### Minor Arcana (56 cards)
Organized by four suits representing different life aspects:

- **Cups** (Water): Emotions, relationships, intuition - 14 cards
- **Pentacles** (Earth): Material world, finances, career - 14 cards
- **Swords** (Air): Thoughts, intellect, communication - 14 cards
- **Wands** (Fire): Action, passion, creativity - 14 cards

Each suit contains: Ace, 2-10, Page, Knight, Queen, King

## Card Images

- **Format**: PNG
- **Resolution**: 400+ dpi (high quality)
- **Source**: Internet Archive (Public Domain)
- **Total Size**: ~306MB
- **License**: Public Domain Mark 1.0

### Image Naming Convention

**Major Arcana**: `NN-card-name.png`
- Example: `00-the-fool.png`, `13-death.png`

**Minor Arcana**: `rank-of-suit.png`
- Example: `ace-of-cups.png`, `knight-of-swords.png`

## Local Development

### Prerequisites
- Modern web browser
- Python 3 (for local server)

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/amyloemi/mytarottoday.git
cd mytarottoday
```

2. Start a local server:
```bash
python3 -m http.server 8000
```

3. Open in browser:
```
http://localhost:8000
```

### Re-downloading Card Images

If you need to re-download the card images:

```bash
chmod +x download_cards_fast.sh
./download_cards_fast.sh
```

This will download all 78 cards from the Internet Archive.

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the `main` branch.

### Custom Domain Setup

The site is configured to use the custom domain `mytarottoday.com`:

1. **GitHub Pages**: Settings → Pages → Custom domain
2. **DNS Configuration** (GoDaddy):
   - A records pointing to GitHub Pages IPs
   - CNAME record for www subdomain
3. **HTTPS**: Automatically enforced via GitHub Pages

## Reading Philosophy

This app uses a balanced approach to tarot reading:

- **Traditional Meanings**: Based on Rider-Waite symbolism
- **Contextual Application**: Readings adapt to your question
- **Empowering Framework**: Focus on growth and insight
- **Neutral Stance**: Non-judgmental, balanced perspective
- **Authentic Translation**: Full readings translated, not just keywords

## Resources

- **Card Meanings**: Compiled from Labyrinthos and traditional sources
- **Images**: Internet Archive Rider-Waite Tarot Deck
- **Translation API**: MyMemory Translation Service
- **Methodology**: Based on established tarot reading principles

## Privacy & Data

- ✅ No user data is collected or stored on servers
- ✅ Language preference stored locally in browser only
- ✅ All readings happen client-side
- ✅ No tracking or analytics
- ✅ No cookies (except for localStorage language preference)

## Browser Support

Works on all modern browsers:
- Chrome/Edge (90+)
- Firefox (88+)
- Safari (14+)
- Opera (76+)

## Contributing

This is a personal project. If you'd like to create your own version:

1. Fork the repository
2. Make your changes
3. Deploy to your own GitHub Pages

## License

- **Card Images**: Public Domain (Rider-Waite Tarot)
- **Card Meanings**: Compiled from public tarot resources
- **Code**: Open source
- **Documentation**: Created for educational purposes

## Acknowledgments

- Rider-Waite Tarot Deck (Public Domain)
- Labyrinthos for tarot card meanings reference
- Internet Archive for hosting the original card images
- MyMemory for translation services
- Claude Code for assistance in development

---

**Built with** ❤️ **and** 🔮 **by Amy**

🌟 [Visit My Tarot Today](https://mytarottoday.com) 🌟
