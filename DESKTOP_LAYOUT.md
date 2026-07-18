# Desktop Homepage Layout Requirements

## Core Philosophy

The Madrid Insider homepage is a portal, not a content feed.

Homepage = Index Card.
Category Pages = Tables of Contents.
Record Pages = Content.

## Strict Viewport Constraints

- Target: 1920x1080.
- Zero vertical scrolling.
- Entire homepage must fit within 100vh.
- Enforce overflow-y: hidden on desktop.

## Layout

### Header (~15%)
- Logo
- Welcome statement

### Main Navigation (~60%)
- Madrid Essentials
- Living in Madrid
- See in Madrid
- Do in Madrid
- Madrid Now

NO:
- Cards
- Drop shadows
- Thumbnail images
- Bullets

### Optional Sidebar (~15%)
- Weather
- Transit alert
- Today's event

### Footer (~10%)
- Copyright
- No AI branding

## Never List

Reject the build if any of the following are present:

- Vertical scrolling.
- Hero images.
- Parallax.
- Content cards.
- Top 10 lists.
- Quizzes.
- Newsletter forms.
- Statistics counters.
- Large event feeds.
- MiniMax branding.

## Technical Guardrails

Keep:
- Vite
- JSON content model
- GitHub Actions
- GitHub Pages

Homepage routing examples:

- /essentials/transportation/metro
- /living/healthcare
- /see/museums/prado
- /do/food
- /now/events
