# Madrid Insider — Agent Instructions

> 📋 **Canonical brief for AI agents (Z.ai / Claude / GPT / future contributors)
> working on this repository.** Read this BEFORE making any changes.
>
> This file supersedes and replaces the previous `MINIMAX_INSTRUCTIONS.md`.
> The MiniMax agent stepped down on 2026-07-20; Z.ai is now the primary
> build agent. The constitution (`CONSTITUTION.md`), homepage vision
> (`HOMEPAGE_VISION.md`), and roadmap (`ROADMAP.md`) still apply unchanged.

---

## 🧭 Repository Ecosystem

| Repo | Role |
| --- | --- |
| [`roccosalata/madridinsider`](https://github.com/roccosalata/madridinsider) | **This repo.** Production live site. Vite + React 18 + TS + Tailwind. Auto-deploys to GitHub Pages on every push to `main`. Served at [www.madridinsider.com](https://www.madridinsider.com/). |
| [`roccosalata/madridinsider-data`](https://github.com/roccosalata/madridinsider-data) | **Canonical content database.** Plain JSON. Every build syncs from here via `npm run sync-data`. To change content, edit JSON here and open a PR. |
| [`roccosalata/madridinsider-lab`](https://github.com/roccosalata/madridinsider-lab) | Sandbox for risky experiments. Next.js 14 reference build with deep content pages — used as a **content source for salvage**. Nothing user-facing. |
| ~~`madridinsider-explorer`~~ | Deprecated dev sandbox (currently contains unrelated agent skills, ignore). |

### The flow

```
content edit (madridinsider-data)  ──►  merge  ──►  sync on next build  ──►  live site
       ▲
       └──── salvaged from lab / Wayback / legacy HTML
```

---

## 📚 Read these files BEFORE making any changes

In this order:

1. `README.md` — what the project is
2. `CONSTITUTION.md` — non-negotiable rules (5 categories, mission, scope)
3. `HOMEPAGE_VISION.md` — UX spec for the homepage
4. `DESKTOP_LAYOUT.md` — strict desktop layout requirements
5. `ROADMAP.md` — 4-phase plan and current priorities
6. `GOLDEN_RECORDS.md` — the canonical 25 records
7. `AGENT_INSTRUCTIONS.md` — **this file** (you are here)
8. `CONTRIBUTING.md` — collaboration conventions

Then in `madridinsider-data`:

9. `SCHEMA.md` — the exact shape of every JSON file
10. `AGENT_GUIDELINES.md` — content rules

---

## 🚫 NON-NEGOTIABLE RULES

### Rule #1 — Homepage navigation (amended 2026-07-20)

The homepage has **4 top-level navigation categories** in the header bar:

- Madrid Essentials
- Living in Madrid
- See in Madrid
- Do in Madrid

**Madrid Now** is the homepage *content* (live time, weather, events, transit) and is also accessible at `/now` as a full category page. It is NOT in the top-level nav. See `CONSTITUTION.md` Amendment 1.

The 5 categories are constitution-level. Do not add, remove, rename, or reorder them.

### Rule #2 — Madrid first. Spain second.

✅ Good: "From Madrid to Toledo", "Metro de Madrid", "Madrid-Barajas Airport"
❌ Bad: "Spain travel guide", "Spanish tourism", generic Iberian content

### Rule #3 — Build RECORDS, not pages

Every piece of content is a **record** in `data/records.json` with this shape:

```json
{
  "id": "kebab-case-unique",
  "category": "essentials|living|see|do|now",
  "subcategory": "matches a subcategory ID in categories.json",
  "title": "Human-readable name",
  "summary": "1–2 sentence elevator pitch (search results, cards)",
  "content": "1–3 paragraph body (always required, used for search + fallback)",
  "sections": [ ... ],             // OPTIONAL structured content (see below)
  "last_updated": "YYYY-MM-DD",
  "status": "evergreen|annual review|dynamic|legacy|archived",
  "official_url": "https://...",
  "english_friendly": true|false,  // derived: true for tiers 1-3
  "english_level": "english-primary|english-available|english-partial|spanish-only",
  "related_records": ["record-id-1", "record-id-2"],
  "tags": ["optional", "kebab-case"]
}
```

### Rule #4 — English-first content priority (expanded 2026-07-20)

Madrid Insider's edge is providing English speakers access to resources that are only/usually available in Spanish for Madrid locals. **The spanish-only records are our primary value proposition** — we are the English bridge to resources English speakers can't otherwise use.

Every record must be classified into one of 4 English-availability tiers via the `english_level` field:

| Tier | `english_level` value | What it means | Badge |
| --- | --- | --- | --- |
| 1 | `english-primary` | Official source is primarily in English, OR has a complete English version with full content parity | 🌟 EN★ (gold) |
| 2 | `english-available` | Official source has a dedicated English version (may be incomplete or summary) | 🟢 EN (green) |
| 3 | `english-partial` | Some English info available, most content Spanish | 🟡 EN~ (amber) |
| 4 | `spanish-only` | No English from the official source — we describe it in English and link to the Spanish source. **This is Madrid Insider's value-add.** The record page shows a "🗝️ Madrid Insider translation" callout. | 🗝️ MI (brand gold) |

**Operational rules:**

- The `english_friendly` boolean is derived from `english_level`: `true` for tiers 1–3, `false` for tier 4. They must be consistent (the validator enforces this).
- **Sorting**: all record listings (subcategory pages, related records, search results) sort by tier first (1→4), then alphabetically. English-available records surface first for usability; spanish-only records follow (they're valuable but require our translation to use).
- **Search**: ties in relevance score are broken by English tier — higher-tier records rank first.
- **When auditing existing records** (salvage pass 2): check the `official_url` — does it have an `/en` section? Is the English version complete or partial? Set `english_level` accordingly.
- **When adding new records**: prefer sources with English versions. If a topic only has Spanish sources, still add it — these spanish-only records are our most valuable content. Mark them `spanish-only` so the "Madrid Insider translation" callout appears.
- **Spanish-only records get a special callout** on the record page: "This resource is only available in Spanish on the official site. We've translated the key information above so you know what it is and how to use it."

### Rule #7 — Editorial format: list of lists, fleshed out (added 2026-07-20)

Madrid Insider is **the list of lists (links), fleshed out**. We are a curated directory of official Madrid resources, not a blog or travel magazine.

**What every record should be:**

1. **A brief English description** — just enough context so the user knows what this resource is and why they might need it (2–4 sentences in `content`, or structured `sections` for complex topics like NIE/TIE).
2. **The official link** — `official_url` is the primary call to action. Every record page shows a prominent "Visit official site ↗" button right under the title.
3. **Tips (optional)** — if we know a tip that isn't on the official site (e.g. "book at 9 AM when slots open", "avoid the free evening hours if you don't like crowds"), include it. If we don't know a tip, don't invent one.

**What we are NOT:**

- ❌ A blog — no editorializing, no personal narratives, no "my experience at…"
- ❌ A travel magazine — no listicles like "Top 10 things to do in Madrid"
- ❌ A content farm — no SEO-padding, no word-count targets, no filler
- ❌ A substitute for the official source — we link OUT, we don't reproduce

**Content length guidance:**

- `summary`: 1–2 sentences (60–120 chars). Shown in cards and search results.
- `content`: 1–3 short paragraphs (150–400 words). Just enough English context.
- `sections` (optional): use for complex procedures (NIE, empadronamiento) where structured steps/checklists/tables help. Don't use sections for simple records — `content` is enough.

### Rule #5 — 'Arrive, Survive, Live, Explore, Enjoy' are NOT homepage categories

These are **secondary tags / filters / user journeys**. They may never replace the four homepage categories.

### Rule #6 — Every record links to an official source

`official_url` must be the primary, authoritative URL for the resource (museum site, transit authority, government portal, embassy, etc.). No affiliate links, no Tripadvisor, no Wikipedia.

---

## 🆕 Structured content sections (added 2026-07-20)

A record may optionally carry a `sections` array. When present, the record page renders these structured blocks instead of the flat `content` string. The `content` field is **always required** (it powers search and is the fallback if `sections` is empty).

### Section types

| `type` | Required fields | Optional fields | Use for |
| --- | --- | --- | --- |
| `text` | `heading`, `body` | — | Plain prose section (intro, history, explanation) |
| `callout` | `heading`, `body` | `tone` (`info` \| `warning` \| `success` \| `danger`) | Highlighted note, tip, warning, danger |
| `stats` | `heading`, `items[]` | — | Quick facts (cost, hours, validity) |
| `checklist` | `heading`, `items[]` | — | Required documents, prep list |
| `list` | `heading`, `items[]` | — | Tips, cards, highlights, named items |
| `steps` | `heading`, `items[]` | — | Step-by-step process (with optional `tip` per step) |
| `do_dont` | `heading`, `do[]`, `dont[]` | — | Etiquette, rules |
| `table` | `heading`, `columns[]`, `rows[][]` | — | Prices, hours, comparisons |

### Item shape

- `stats.items[]`: `{ "label": "Cost", "value": "€9.64" }`
- `checklist.items[]` and `list.items[]`: `{ "title": "EX-15 Form", "body": "Download from...", "meta": ["optional", "grey subline"] }`
- `steps.items[]`: `{ "title": "Book appointment", "body": "Visit sede.administracionespublicas.gob.es...", "tip": "Check daily at 9 AM" }`

### Example

```json
{
  "id": "nie-tie",
  "...": "...other required fields...",
  "content": "NIE (Número de Identidad de Extranjero): apply at any Oficina...",
  "sections": [
    {
      "type": "callout",
      "heading": "What is a NIE Number?",
      "body": "The NIE is a unique identification number assigned to all foreigners in Spain...",
      "tone": "warning"
    },
    {
      "type": "stats",
      "heading": "Quick Facts",
      "items": [
        { "label": "Cost", "value": "€9.64" },
        { "label": "Processing Time", "value": "Same day" }
      ]
    },
    {
      "type": "steps",
      "heading": "Step-by-Step Process",
      "items": [
        { "title": "Book an Appointment", "body": "Visit sede.administracionespublicas.gob.es...", "tip": "Check daily at 9 AM" }
      ]
    }
  ]
}
```

Full schema: see `madridinsider-data/SCHEMA.md`. The validator in `scripts/sync-data.mjs` enforces all of this at build time.

---

## 🔄 Content salvage workflow

When salvaging content from the lab repo, Wayback Machine snapshots, or legacy HTML:

1. **Identify the source record** in `data/records.json` (or create a new one).
2. **Read the source material** (e.g. `madridinsider-lab/app/essentials/metro-guide/page.tsx`).
3. **Decompose into sections** — extract structured content (quick facts, steps, checklists, tables, tips).
4. **Update `content`** with a 1–3 paragraph plain-text summary (for search + fallback).
5. **Add `sections`** with the structured blocks.
6. **Bump `last_updated`** to today's date.
7. **Add `salvage-pilot` or `salvaged` tag** for traceability.
8. **Run `npm run sync-data` and `npm run build`** to verify.
9. **Commit** to `madridinsider-data` first, then to `madridinsider` (which will re-sync on next build).

### Where to find salvageable content

- **`madridinsider-lab/app/`** — Next.js reference build with deep content pages (Metro, Airport, NIE, Prado, etc.)
- **`madridinsider-data/archive/legacy-static-site.html`** — ChatGPT's rebuild of the original Madrid Insider site from Wayback Machine (Jan 2021 snapshot). Original categories: Planning, Neighborhoods, Food & Drink, Arts & Culture, Itineraries — these need to be remapped into the new 5-category structure.
- **Wayback Machine** — `http://web.archive.org/web/2021*/madridinsider.com` for additional snapshots.

---

## ✅ Current priorities (as of 2026-07-20)

Per `ROADMAP.md`:

- [x] GitHub Pages deployment — working, auto-deploys on push to `main`
- [x] Remove MiniMax branding — done
- [x] First 25 Golden Records — done (90 records total)
- [x] Search, breadcrumbs, sitemap, related records — done
- [x] English-friendly priority tags — 85/90 records flagged
- [x] Structured content schema (this commit) — done, 4 pilot records enriched
- [ ] **Enrich remaining 86 records with structured content** (salvage from lab + Wayback)
- [ ] **Map ~24 legacy article cards** from original Madrid Insider into the new structure
- [ ] Implement Arrive → Survive → Live → Explore → Enjoy user journeys
- [ ] Newsletter signup
- [ ] Interactive maps
- [ ] AI-assisted recommendations

---

## 🛠️ Development commands

```bash
# Install dependencies
npm install

# Sync content from madridinsider-data (runs automatically before build)
npm run sync-data

# Local dev server
npm run dev

# Production build
npm run build

# Lint
npm run lint

# Override the data source (e.g. for testing a fork)
SYNC_DATA_REPO=otheruser/madridinsider-data npm run sync-data
```

---

## 🤝 Commit conventions

Follow the existing commit style:

- `feat:` new feature
- `content:` content addition or edit
- `fix:` bug fix
- `docs:` documentation change
- `chore:` build/tooling change
- `refactor:` code change that neither fixes a bug nor adds a feature

**One logical change per commit.** Don't bundle 5 record enrichments into one commit — split them so each is reviewable.

---

## 🧪 Testing checklist before pushing

- [ ] `npm run sync-data` succeeds with no validation errors
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes
- [ ] Manually click through the affected routes at `http://localhost:5173`
- [ ] Verify mobile and desktop layouts
- [ ] If you added a new record, add it to `related_records` of its related records (bidirectional)
- [ ] If you added a new subcategory, update `categories.json` and the sitemap

---

## 📄 License

MIT — fork, customize, ship.
