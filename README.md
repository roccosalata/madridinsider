# Madrid Insider

> 🌐 **The live, production site for [madridinsider.com](https://www.madridinsider.com/)**
> Your complete English-language guide to Madrid — attractions, food, neighborhoods, and what's happening right now.

This repository is the **single source of truth for what users see on the live site**. Multiple people collaborate here — content editors, designers, developers — and every commit on `main` is what gets served to visitors.

---

## 🔗 The four-repo family

| Repo | Role | Owned by |
| --- | --- | --- |
| **[roccosalata/madridinsider](https://github.com/roccosalata/madridinsider)** | ✅ **This repo** — production live site, multi-collaborator | Public, everyone |
| [roccosalata/madridinsider-explorer](https://github.com/roccosalata/madridinsider-explorer) | Mavis's private dev sandbox where new features originate | Mavis only |
| [roccosalata/madridinsider-data](https://github.com/roccosalata/madridinsider-data) | The content "database" — categories, events, quick-access entries (JSON) | Editors + Mavis |
| [roccosalata/madridinsider-lab](https://github.com/roccosalata/madridinsider-lab) | Throwaway testbed for risky experiments before they reach production | Mavis only |

### The flow

```
Mavis (explorer)  ──►  Data updates (data)  ──►  Lab experiments (lab)  ──►  Production (madridinsider)  ──►  madridinsider.com
```

1. **Explore** in `madridinsider-explorer` — new components, refactors, dependencies.
2. **Author content** in `madridinsider-data` — categories, events, copy.
3. **Sanity-check** in `madridinsider-lab` — does it look right at scale? Mobile? Edge cases?
4. **Promote** to `madridinsider` (this repo) — open a PR, get review, merge, deploy.

---

## ✨ Features

- 🕒 **Live Madrid time** — updates every second, Europe/Madrid timezone
- 📡 **Madrid Right Now** — current weather, time, AQI and top news
- 🗂️ **Five curated categories** — Essentials, Living, See, Do, Now
- 🎟️ **This week's events** — concerts, festivals, matches, food
- ⚡ **Quick access** — the 10 most-asked questions, one tap away
- 🎯 **Madrid Style Quiz** — find your Madrid match in 3 questions
- 📬 **Newsletter signup** — weekly digest, no spam

---

## 📝 How to update content (no coding required)

The site's text, events, and links all live in three easy-to-edit files in `src/data/`. Open one, change the words, save, and redeploy. ChatGPT can help you with this too.

| File | What's in it |
| --- | --- |
| `src/data/categories.ts` | The 5 main categories (Essentials, Living, See, Do, Now) |
| `src/data/events.ts` | The "What's on this week" event cards |
| `src/data/quickAccess.ts` | The 10 "Quick access" cards |

Each file is plain text with the same pattern: a title, a short description, an emoji, and a link. Just edit the text between the quotes and you're done.

> The canonical machine-readable copy of this data lives in
> [`roccosalata/madridinsider-data`](https://github.com/roccosalata/madridinsider-data)
> as JSON. When the data repo changes, those JSON files are mirrored into `src/data/`
> before the next deploy.

---

## 🛠️ Tech stack

- [Vite](https://vitejs.dev/) — build tool & dev server
- [React 18](https://react.dev/) — UI framework
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Tailwind CSS 3](https://tailwindcss.com/) — utility-first styling
- Inter — font family (Google Fonts)

---

## 🚀 Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project structure

```
madridinsider/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── MadridNow.tsx
│   │   ├── CategoryCards.tsx
│   │   ├── EventsSection.tsx
│   │   ├── QuickAccess.tsx
│   │   ├── Quiz.tsx
│   │   ├── Newsletter.tsx
│   │   └── Footer.tsx
│   ├── data/             # Static content (categories, events, etc.)
│   │   ├── categories.ts
│   │   ├── events.ts
│   │   └── quickAccess.ts
│   ├── lib/              # Utilities
│   │   └── madridTime.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 🎨 Design tokens

- **Brand color**: `brand-500` = `#f97316` (orange)
- **Fonts**: Inter, weights 300–800
- **Category colors**:
  - Madrid Essentials — red
  - Living in Madrid — blue
  - See in Madrid — green
  - Do in Madrid — purple
  - Madrid Now — orange (brand)

---

## 🚢 Deploying

`main` is auto-deployed. The build output (`dist/`) is what the live site serves.

1. Make your change on a branch.
2. Open a PR → CI runs the build.
3. Get a review from at least one other collaborator.
4. Merge to `main` → production deploy kicks off.
5. Verify at [madridinsider.com](https://www.madridinsider.com/).

If you don't have merge access, ask in the PR and a maintainer will land it.

---

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide — branching, PR conventions, code style, and how to add a new content section.

New here? Look for issues labeled **`good first issue`** to start.

---

## 📄 License

MIT — fork, customize, ship.
