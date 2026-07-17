# Madrid Insider

> 🌐 **The live, production site for [madridinsider.com](https://www.madridinsider.com/)**
> Your complete English-language guide to Madrid — attractions, food, neighborhoods, and what's happening right now.

This repository is the **single source of truth for what users see on the live site**. Every push to `main` is auto-deployed to GitHub Pages and served at `madridinsider.com`.

---

## 🚀 How the site is built & deployed

1. **Edit content** in `data/*.json` (the only place you need to touch for copy changes).
2. **Push to `main`** — a GitHub Action builds the Vite app and publishes the static output to GitHub Pages.
3. **Live at [madridinsider.com](https://www.madridinsider.com/)** (or [roccosalata.github.io/madridinsider](https://roccosalata.github.io/madridinsider/) until DNS is updated).

No Vercel, no Netlify, no other services. The whole stack lives in this one repo.

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

The site's text and events all live in three plain JSON files at the repo root. Edit a string, push, the site updates.

| File | What's in it |
| --- | --- |
| `data/categories.json` | The 5 main categories (Essentials, Living, See, Do, Now) |
| `data/events.json` | The "What's on this week" event cards |
| `data/quickAccess.json` | The 10 "Quick access" cards |

Each file is a JSON array. Open it, edit the text between the quotes, commit, push. The build will pick it up on the next deploy.

> 💡 **Tip:** to validate your JSON before pushing, paste it into <https://jsonlint.com> or run `python3 -m json.tool < data/categories.json` locally.

---

## 🛠️ Tech stack

- [Vite](https://vitejs.dev/) — build tool & dev server
- [React 18](https://react.dev/) — UI framework
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Tailwind CSS 3](https://tailwindcss.com/) — utility-first styling
- Inter — font family (Google Fonts)
- [GitHub Pages](https://pages.github.com/) — hosting (free, automatic on push to `main`)

---

## 🧑‍💻 Local development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview the production build
npm run preview
```

---

## 📁 Project structure

```
madridinsider/
├── data/                       # ← Edit content here (the only canonical source)
│   ├── categories.json         #   5 homepage category cards
│   ├── events.json             #   "What's on this week" events
│   └── quickAccess.json        #   10 "Quick access" cards
├── src/
│   ├── components/             # React components (Header, Hero, MadridNow, etc.)
│   ├── data/                   # Thin TS wrappers that re-export the JSON with types
│   ├── lib/                    # Utilities (e.g. madridTime.ts)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/workflows/
│   └── deploy.yml              # Auto-builds & deploys to GitHub Pages on push to main
├── public/                     # Static assets (favicon, etc.)
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

## 🤝 Contributing

1. **Fork** (or branch if you have push access).
2. **Edit** the JSON in `data/*.json` for content, or `src/components/*.tsx` for code.
3. **Open a PR** with a clear title (`content(events): add August Verbena dates`, etc.).
4. **Merge to `main`** → GitHub Action auto-deploys to the live site.

For full conventions, see [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## 📄 License

MIT — fork, customize, ship.
