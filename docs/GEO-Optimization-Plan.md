# Generative Engine Optimization (GEO) Plan for My Tarot Today

## What is GEO?

Generative Engine Optimization (GEO) is the process of optimizing content to increase visibility and citations in AI-powered search engines like ChatGPT, Perplexity, Google Gemini, and Claude. Unlike traditional SEO that focuses on ranking in search results, GEO optimizes for being cited, referenced, and mentioned in AI-generated responses.

## Why GEO Matters

- **Growing AI Search Usage**: Research predicts LLM traffic will overtake traditional Google search by end of 2027
- **Citation Opportunities**: AI engines cite sources 2-7 times per response on average
- **Dual Benefits**: GEO strategies strengthen both AI visibility AND traditional SEO
- **Expected Timeline**: Most sites see measurable improvements in 3-6 months

## Key GEO Principles

1. **Structured Content**: AI favors clear Q&A formatting, headers, bullets, short paragraphs
2. **Visible Text Over Hidden Schema**: Recent research shows AI prioritizes visible content over hidden structured data
3. **Freshness**: AI strongly favors newer, recently updated content
4. **Authority & Citations**: Transparent sources and data-backed claims improve citation rates
5. **Natural Language**: Conversational tone that matches how people ask questions

---

## Phase 1: Technical Foundation (Quick Wins)

### 🎯 Priority: HIGH | Timeline: Week 1

#### ✅ Task 1.1: Enable AI Crawler Access
**File**: `robots.txt`

Add specific user-agent rules for AI crawlers:
```
# AI Search Engine Crawlers
User-agent: GPTBot
Allow: /
Crawl-delay: 1

User-agent: ChatGPT-User
Allow: /
Crawl-delay: 1

User-agent: PerplexityBot
Allow: /
Crawl-delay: 1

User-agent: Claude-Web
Allow: /
Crawl-delay: 1

User-agent: Google-Extended
Allow: /
Crawl-delay: 1

User-agent: Anthropic-AI
Allow: /
Crawl-delay: 1
```

**Why**: Without explicit permission, some AI crawlers won't index your content
**Impact**: Foundational requirement for all AI search visibility

---

#### ✅ Task 1.2: Add AI-Friendly Meta Tags
**Files**: All HTML pages

Add to each page's `<head>`:
```html
<!-- AI-Friendly Metadata -->
<meta name="author" content="My Tarot Today Team" />
<meta name="datePublished" content="2024-XX-XX" />
<meta name="dateModified" content="2025-XX-XX" />
<meta name="citation-policy" content="You may cite this content with attribution to My Tarot Today (mytarottoday.com)" />
```

**Why**: AI systems prioritize content with clear authorship and recency signals
**Impact**: Improves trust signals and citation likelihood

---

## Phase 2: Content Structure Optimization

### 🎯 Priority: HIGH | Timeline: Week 2-3

#### ✅ Task 2.1: Add Visible Q&A Sections
**Files**: `index.html`, `pages/dictionary.html`, `pages/gallery.html`

Add prominent Q&A sections at the top of each page (BEFORE existing content):

**index.html** - Add section:
```html
<section id="quick-answers">
  <h2>Quick Answers About Tarot Readings</h2>

  <div class="qa-block">
    <h3>What is a daily tarot reading?</h3>
    <p>A daily tarot reading draws one card to provide guidance for your day. It offers insights into challenges, opportunities, and themes you may encounter in the next 24 hours.</p>
  </div>

  <div class="qa-block">
    <h3>How accurate are tarot readings?</h3>
    <p>Tarot accuracy depends on your interpretation and intuition. Cards reflect possibilities and patterns rather than fixed predictions, offering perspective to help you make informed decisions.</p>
  </div>

  <div class="qa-block">
    <h3>Can I do tarot readings for myself?</h3>
    <p>Yes! Self-readings are common and valuable. My Tarot Today provides AI-powered interpretations to guide your understanding while you develop your own intuitive connection with the cards.</p>
  </div>
</section>
```

**dictionary.html** - Add:
- "What does The Fool card mean?"
- "How do I interpret reversed tarot cards?"
- "What's the difference between Major and Minor Arcana?"

**gallery.html** - Add:
- "What are the 22 Major Arcana cards?"
- "What do the four tarot suits represent?"
- "How many cards are in a complete tarot deck?"

**Why**: AI systems extract and cite well-formatted Q&A content directly
**Impact**: High - Increases chances of being cited in conversational AI responses
**Note**: Keep answers under 300 characters for optimal AI extraction

---

#### ✅ Task 2.2: Add TL;DR Summaries
**Files**: All main HTML pages

Add at the very top of main content:
```html
<div class="tldr-summary">
  <strong>TL;DR:</strong> [Concise 1-2 sentence summary of the page's main value]
</div>
```

**Examples**:
- **index.html**: "Get instant, free tarot card readings from artistic decks with AI-powered interpretations in 6 languages - no signup required."
- **dictionary.html**: "Learn all 78 tarot card meanings with upright and reversed interpretations from the traditional Rider-Waite deck."
- **gallery.html**: "Browse 312 unique tarot cards across multiple artistic styles including Rider-Waite, Miró, and modern interpretations."

**Why**: AI models prioritize content with clear, upfront summaries
**Impact**: Improves content comprehension and citation accuracy

---

#### ✅ Task 2.3: Expand FAQ Schema
**Files**: All HTML pages

Expand existing FAQPage schema from 5 questions to 10-15 questions per page.

**Focus on**:
- Long-tail queries: "what does the fool card mean in a love reading"
- Conversational questions: "how do I know if my tarot reading is accurate"
- Comparison queries: "what's the difference between rider-waite and modern tarot"
- Beginner questions: "do I need to memorize all 78 tarot cards"
- Practical questions: "what time of day is best for tarot readings"

**Why**: More comprehensive FAQ schema = more opportunities for AI citation
**Impact**: Medium-High - Provides more entry points for AI to reference your content

---

## Phase 3: Advanced Schema Markup

### 🎯 Priority: MEDIUM-HIGH | Timeline: Week 3-4

#### ✅ Task 3.1: Add HowTo Schema
**File**: `index.html`

Add new structured data for "How to do a tarot reading":
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Do a Daily Tarot Card Reading",
  "description": "Step-by-step guide to drawing and interpreting your daily tarot card",
  "totalTime": "PT5M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Choose Your Deck",
      "text": "Select from our artistic decks: Rider-Waite Classic, Artistic, or Miró Surrealism."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Set Your Intention",
      "text": "Pick a focus area: General Guidance, Love & Relationships, Career & Finance, or Personal Growth."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Draw Your Card",
      "text": "Click 'Draw Card' to receive your daily card with upright or reversed orientation."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Read Your Interpretation",
      "text": "Review the AI-powered interpretation specific to your question and card orientation."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Reflect and Apply",
      "text": "Consider how the card's message applies to your current situation and day ahead."
    }
  ]
}
```

**Why**: HowTo schema is highly favored by AI for instructional queries
**Impact**: High for queries like "how to do a tarot reading"

---

#### ✅ Task 3.2: Enhance Organization Schema
**File**: `index.html`

Update existing Organization schema to include:
```json
"founder": {
  "@type": "Person",
  "name": "My Tarot Today Team"
},
"datePublished": "2024-XX-XX",
"dateModified": "2025-01-XX",
"knowsAbout": ["Tarot Reading", "Divination", "Spiritual Guidance", "Card Interpretation"],
"areaServed": "Worldwide",
"availableLanguage": ["English", "French", "Spanish", "Chinese", "Japanese", "Korean"]
```

**Why**: More detailed Organization schema builds authority signals
**Impact**: Medium - Strengthens overall site credibility for AI

---

#### ✅ Task 3.3: Add Article Schema for Dictionary Entries
**File**: `pages/dictionary.html`

Add Article schema for the dictionary page:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Tarot Card Dictionary - All 78 Card Meanings",
  "description": "Comprehensive guide to all 78 tarot cards with upright and reversed meanings",
  "author": {
    "@type": "Organization",
    "name": "My Tarot Today"
  },
  "publisher": {
    "@type": "Organization",
    "name": "My Tarot Today",
    "url": "https://mytarottoday.com"
  },
  "datePublished": "2024-XX-XX",
  "dateModified": "2025-01-XX",
  "mainEntityOfPage": "https://mytarottoday.com/pages/dictionary.html",
  "articleSection": "Tarot Education",
  "wordCount": "XXXX",
  "inLanguage": "en"
}
```

**Why**: Article schema helps AI understand content type and authority
**Impact**: Medium - Improves chances of being cited as educational resource

---

#### ✅ Task 3.4: Add ImageObject Schema
**File**: `pages/gallery.html`

For each tarot card image, add ImageObject schema (can be generated dynamically):
```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://mytarottoday.com/decks/rider-waite/the-fool.jpg",
  "name": "The Fool Tarot Card - Rider-Waite",
  "description": "The Fool represents new beginnings, innocence, and spontaneous adventure in tarot readings",
  "creator": {
    "@type": "Organization",
    "name": "My Tarot Today"
  },
  "creditText": "My Tarot Today - Rider-Waite Tarot Deck",
  "copyrightNotice": "© My Tarot Today"
}
```

**Why**: Helps AI understand and reference specific card images
**Impact**: Medium - Important for visual queries and multimodal AI

---

## Phase 4: Citation-Worthy Content

### 🎯 Priority: MEDIUM | Timeline: Week 4-6

#### ✅ Task 4.1: Add Original Statistics Section
**File**: `index.html` or create new `pages/statistics.html`

Create data-backed content AI can cite:
```html
<section id="tarot-statistics">
  <h2>Tarot Reading Insights & Statistics</h2>

  <div class="stat-block">
    <h3>Most Popular Tarot Cards Drawn</h3>
    <p>Based on our platform data:</p>
    <ul>
      <li>The Fool - 8.2% of all readings</li>
      <li>The Lovers - 7.8% of all readings</li>
      <li>The Star - 7.1% of all readings</li>
    </ul>
    <p><small>Data from 10,000+ readings on My Tarot Today (2024-2025)</small></p>
  </div>

  <div class="stat-block">
    <h3>Most Common Reading Questions</h3>
    <ol>
      <li>Love & Relationships - 42%</li>
      <li>Career & Finance - 28%</li>
      <li>Personal Growth - 20%</li>
      <li>General Guidance - 10%</li>
    </ol>
  </div>
</section>
```

**Why**: AI engines heavily favor and cite original data and statistics
**Impact**: High - Original stats are citation magnets for AI
**Note**: Use real data if available, or clearly mark as sample/illustrative

---

#### ✅ Task 4.2: Create Comprehensive Guide Pages
**Create new files**: `pages/beginners-guide.html`, `pages/card-meanings-guide.html`

**Beginners Guide** should include:
- What is tarot? (history and modern use)
- How tarot readings work
- Major vs Minor Arcana explained
- How to interpret cards
- Common tarot spreads
- Tips for beginners

**Card Meanings Guide** should include:
- All 78 cards organized by suit
- Keywords for each card
- Upright meanings
- Reversed meanings
- Card in different contexts (love, career, personal)

**Why**: Comprehensive, authoritative content gets cited by AI as definitive resources
**Impact**: High - Creates pillar content that AI can reference repeatedly
**Format**: Use clear headers, short paragraphs, bullet points, tables

---

#### ✅ Task 4.3: Add Transparent Citations & Sources
**Files**: All content pages

Add "Sources & References" section to educational pages:
```html
<section id="sources">
  <h3>Sources & References</h3>
  <ul>
    <li>Traditional Rider-Waite tarot symbolism (A.E. Waite, 1909)</li>
    <li>Modern tarot interpretation methods</li>
    <li>User reading data from My Tarot Today platform (2024-2025)</li>
  </ul>
  <p><em>Our interpretations combine traditional tarot meanings with modern AI-assisted insights.</em></p>
</section>
```

**Why**: AI systems reward transparent citations and source attribution
**Impact**: Medium - Builds trust and authority signals

---

## Phase 5: Platform-Specific Optimization

### 🎯 Priority: MEDIUM-LOW | Timeline: Ongoing

#### ✅ Task 5.1: Enhance Conversational Tone
**Files**: All content

Rewrite key sections to match natural language patterns:

**Before**: "Tarot cards provide divinatory insights through symbolic imagery."
**After**: "How do tarot cards work? They use symbolic images to help you reflect on your life's questions and find guidance."

**Before**: "The Rider-Waite deck consists of 78 cards divided into Major and Minor Arcana."
**After**: "A complete Rider-Waite tarot deck has 78 cards. These split into two groups: 22 Major Arcana cards (the big life themes) and 56 Minor Arcana cards (everyday situations)."

**Why**: AI favors conversational, natural language that matches how people ask questions
**Impact**: Medium - Improves extraction quality and citation accuracy

---

#### ✅ Task 5.2: Add Freshness Signals
**Files**: All HTML pages

Add visible "Last Updated" dates prominently:
```html
<div class="content-freshness">
  <p><small>Last Updated: January 2025 | Reviewed Monthly</small></p>
</div>
```

Set calendar reminder to update these dates monthly, even for minor content refreshes.

**Why**: AI strongly prioritizes fresh, recently updated content
**Impact**: High - Regular updates signal active maintenance and current information
**Action**: Update at least monthly, add to calendar

---

#### ✅ Task 5.3: Add Multimedia Schema (If Applicable)
**Files**: Any pages with audio/video

If you add pronunciation guides or video tutorials:
```json
{
  "@context": "https://schema.org",
  "@type": "AudioObject",
  "name": "How to Pronounce Tarot Card Names",
  "description": "Audio pronunciation guide for all 78 tarot cards",
  "contentUrl": "https://mytarottoday.com/audio/pronunciations.mp3",
  "encodingFormat": "audio/mpeg"
}
```

**Why**: Multimodal AI systems can reference audio/video content
**Impact**: Low (unless you have multimedia) - Future-proofing

---

## Phase 6: Monitoring & Iteration

### 🎯 Priority: ONGOING | Timeline: After initial implementation

#### ✅ Task 6.1: Monitor AI Visibility
**Tools to use**:
- Manually search ChatGPT, Perplexity, Gemini for tarot-related queries
- Document when/how your site is cited
- Track citation frequency and context

**Example test queries**:
- "what does the fool tarot card mean"
- "how to do a daily tarot reading"
- "free online tarot reading"
- "tarot card meanings for beginners"
- "difference between upright and reversed tarot cards"

**Frequency**: Weekly for first month, then monthly

---

#### ✅ Task 6.2: Collect User Questions
**Action**: Document actual questions users ask (from customer support, social media, etc.)

Create a spreadsheet:
- Column 1: Actual user question
- Column 2: Is it answered on site?
- Column 3: Priority to add/improve

**Why**: Real user questions = queries AI will receive
**Impact**: High - Ensures you're optimizing for actual demand

---

#### ✅ Task 6.3: Regular Content Updates
**Schedule**: Monthly

Update priority:
1. Statistics and data (monthly)
2. FAQ answers (quarterly)
3. Card meanings and interpretations (bi-annually)
4. Technical schema updates (as needed)

**Why**: Freshness is a major AI ranking factor
**Impact**: High - Consistent updates maintain visibility

---

## Expected Timeline & Results

### Month 1-2: Foundation
- AI crawlers can access site
- Structured content in place
- Enhanced schema markup deployed

### Month 3-6: Initial Visibility
- First citations in AI responses
- Visibility for branded queries ("My Tarot Today")
- Some citations for general tarot queries

### Month 6-12: Growing Authority
- Regular citations for common tarot questions
- Appearing in comparative answers
- Increased share of voice in tarot niche

### Month 12+: Established Presence
- Consistent citations across platforms
- Authority source for tarot information
- Measurable AI-driven traffic

---

## Priority Matrix

### MUST DO FIRST (Highest ROI)
1. ✅ Task 1.1: Enable AI Crawler Access
2. ✅ Task 1.2: Add AI-Friendly Meta Tags
3. ✅ Task 2.1: Add Visible Q&A Sections
4. ✅ Task 2.2: Add TL;DR Summaries
5. ✅ Task 3.1: Add HowTo Schema
6. ✅ Task 5.2: Add Freshness Signals

### DO SOON (High Value)
7. ✅ Task 2.3: Expand FAQ Schema
8. ✅ Task 3.2: Enhance Organization Schema
9. ✅ Task 4.1: Add Original Statistics
10. ✅ Task 4.2: Create Comprehensive Guides

### DO LATER (Medium Value)
11. ✅ Task 3.3: Add Article Schema
12. ✅ Task 4.3: Add Citations & Sources
13. ✅ Task 5.1: Enhance Conversational Tone

### OPTIONAL (Lower Priority / Conditional)
14. ✅ Task 3.4: Add ImageObject Schema
15. ✅ Task 5.3: Add Multimedia Schema

### ONGOING (Maintenance)
16. ✅ Task 6.1: Monitor AI Visibility
17. ✅ Task 6.2: Collect User Questions
18. ✅ Task 6.3: Regular Content Updates

---

## Success Metrics

Track these metrics monthly:

### AI Visibility Metrics
- [ ] Number of citations in ChatGPT (test 10 queries monthly)
- [ ] Number of citations in Perplexity (test 10 queries monthly)
- [ ] Number of citations in Gemini (test 10 queries monthly)
- [ ] Position of citation (1st, 2nd, 3rd, etc.)
- [ ] Context quality (is your site cited accurately?)

### Technical Metrics
- [ ] AI crawler activity in server logs
- [ ] Schema markup validation (no errors)
- [ ] Page load speed (under 3 seconds)
- [ ] Mobile responsiveness score

### Content Metrics
- [ ] Number of FAQ entries (target: 15+ per page)
- [ ] Number of Q&A sections (target: 5+ per page)
- [ ] Content freshness (updated within 30 days)
- [ ] Average content length (target: 1000+ words for key pages)

---

## Additional Resources

### Tools for GEO
- **Schema Validator**: https://validator.schema.org/
- **AI Search Testing**: Manually test ChatGPT, Perplexity, Gemini
- **Structured Data Testing**: Google Rich Results Test

### Further Reading
- Backlinko GEO Guide: https://backlinko.com/generative-engine-optimization-geo
- First Page Sage GEO Best Practices
- Search Engine Journal GEO Strategies

---

## Notes & Considerations

### What Makes Content Citation-Worthy for AI?
1. **Clear, direct answers** to common questions
2. **Original data** and statistics
3. **Authoritative tone** with source attribution
4. **Recent publication** or update dates
5. **Well-structured** with headers and lists
6. **Comprehensive coverage** of topics
7. **Natural language** that matches queries

### GEO vs SEO: Key Differences
- **SEO**: Optimizes for ranking in search results
- **GEO**: Optimizes for being cited in AI responses
- **Overlap**: Many strategies benefit both
- **Focus**: GEO prioritizes visible text over hidden metadata

### Platform Preferences
- **ChatGPT**: Favors high-authority sites, LinkedIn, academic sources
- **Perplexity**: Prefers transparent citations, YouTube, Reddit
- **Gemini**: Cites Medium, Reddit, YouTube frequently
- **All platforms**: Favor fresh, well-structured content

---

## Quick Start Checklist

To begin GEO optimization TODAY:

- [ ] Update robots.txt with AI crawler access (15 minutes)
- [ ] Add "Last Updated" dates to all pages (30 minutes)
- [ ] Create 3 visible Q&A blocks on homepage (1 hour)
- [ ] Add TL;DR summary to homepage (15 minutes)
- [ ] Expand FAQ schema from 5 to 10 questions (1 hour)
- [ ] Add HowTo schema for tarot reading process (45 minutes)

**Total time to get started: ~4 hours**

---

*Document Created: January 2025*
*Last Updated: January 2025*
*Review Schedule: Monthly*
