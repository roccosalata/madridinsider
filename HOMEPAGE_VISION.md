# Madrid Insider Homepage Vision

> **Amended 2026-07-20** — Madrid Now is now the homepage content.
> Top-level navigation reduced from 5 categories to 4.

## Homepage Purpose

The Madrid Insider homepage answers two questions in one screen:

1. **"What's happening in Madrid right now?"** — live time, weather,
   this week's events, current transit alerts, top news headline.
2. **"How do I navigate the rest of the site?"** — four big category
   links: Essentials, Living, See, Do.

## Primary Message

**ONE-STOP SITE ALL ABOUT MADRID**

Secondary tagline:

> The English-language operating manual for Madrid.

## Homepage Layout

```
┌──────────────────────────────────────────────────────────────────┐
│ [MI] Madrid Insider   ONE-STOP SITE ALL ABOUT MADRID             │
│                       Essentials · Living · See · Do        [🔍] │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─── MADRID RIGHT NOW ───────────┐  ┌─── FOUR WAYS IN ──────┐  │
│  │ 🕒 14:32:07  Madrid time        │  │                        │  │
│  │ ☀️ 24°C · AQI Good              │  │ 🎒 Madrid Essentials    │  │
│  │ ─────────────────────────────── │  │    6 subcategories     │  │
│  │ 📰 Top news headline            │  │                        │  │
│  │ ─────────────────────────────── │  │ 🏡 Living in Madrid    │  │
│  │ 🎟️ This week                    │  │    7 subcategories     │  │
│  │  • Veranos de la Villa          │  │                        │  │
│  │  • Real Madrid vs Sevilla       │  │ 🏛️ See in Madrid        │  │
│  │ ─────────────────────────────── │  │    7 subcategories     │  │
│  │ 🚧 Metro: L6 partial closure    │  │                        │  │
│  │                                 │  │ 🎉 Do in Madrid         │  │
│  │ [Full Madrid Now →]             │  │    7 subcategories     │  │
│  └─────────────────────────────────┘  └────────────────────────┘  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│ © 2026 Madrid Insider · Essentials · Living · See · Do · Now     │
└──────────────────────────────────────────────────────────────────┘
```

## Header Bar (every page)

- **Upper-left**: MI logo badge + "Madrid Insider" wordmark
- **Center-left**: Slogan "ONE-STOP SITE ALL ABOUT MADRID" (all caps,
  small tracking)
- **Center-right**: 4 category nav links (Essentials, Living, See, Do)
- **Far right**: Search icon (expands to search bar on click)
- On mobile: hamburger menu replaces the 4 nav links

## Homepage Main Content

Two-column layout on desktop (stacks on mobile):

### Left column — "Madrid Right Now" (sidebar, ~40% width)

- **Live Madrid time** — updates every second, Europe/Madrid timezone
- **Weather stub** — current temperature + condition (placeholder until
  weather API is integrated)
- **Top news headline** — latest from `/now/news`
- **This week's events** — 2-3 cards from `/now/events`
- **Current transit alert** — latest from `/now/transit`
- **"Full Madrid Now →"** link to `/now`

### Right column — "Four Ways In" (main, ~60% width)

The 4 categories as big clickable text rows (no cards, no shadows,
matching the original clean portal look). Each row shows:
- Emoji
- Category title (large, bold)
- One-line description
- Subcategory count
- Arrow → on hover

## Footer (every page)

- Copyright line
- 5 category links (Essentials, Living, See, Do, Now)
- Source link to GitHub
- About link

## User Personas

The homepage should immediately answer:

- I'm Visiting
- I'm Moving Here
- I'm a Student
- I'm an Expat
- I'm Here This Weekend

## Content Rules

- Madrid first.
- Spain second.
- Prioritize English-speaking services.
- Prefer official links.
- Favor interconnected records.

## Launch Checklist

- [x] Remove MiniMax branding
- [x] Add search
- [x] Add breadcrumbs
- [x] Add sitemap
- [x] Add related records
- [x] Implement English Friendly badges
- [x] Build first 25 Golden Records (90 records total)
- [x] Madrid Now as homepage content (Amendment 1, 2026-07-20)
- [x] 4-category top-level navigation (Amendment 1, 2026-07-20)
- [ ] Enrich all records with structured sections
- [ ] Map ~24 legacy article cards from original Madrid Insider
- [ ] Implement Arrive → Survive → Live → Explore → Enjoy user journeys
- [ ] Newsletter signup
- [ ] Interactive maps
- [ ] AI-assisted recommendations

This document serves as the UX specification for all future homepage implementations.
