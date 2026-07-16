# Madrid Insider

Your complete English-language guide to Madrid — attractions, food, neighborhoods, and what's happening right now.

> A clean, fast, opinionated travel site for Madrid.
> Built with Vite + React + TypeScript + Tailwind CSS.

## ✨ Features

- 🕒 **Live Madrid time** — updates every second, Europe/Madrid timezone
- 📡 **Madrid Right Now** — current weather, time, AQI and top news
- 🗂️ **Five curated categories** — Essentials, Living, See, Do, Now
- 🎟️ **This week's events** — concerts, festivals, matches, food
- ⚡ **Quick access** — the 10 most-asked questions, one tap away
- 🎯 **Madrid Style Quiz** — find your Madrid match in 3 questions
- 📬 **Newsletter signup** — weekly digest, no spam

## 🛠️ Tech stack

- [Vite](https://vitejs.dev/) — build tool & dev server
- [React 18](https://react.dev/) — UI framework
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Tailwind CSS 3](https://tailwindcss.com/) — utility-first styling
- Inter — font family (Google Fonts)

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

## 📁 Project structure

```
madridinsider-explorer/
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

## 🎨 Design tokens

- **Brand color**: `brand-500` = `#f97316` (orange)
- **Fonts**: Inter, weights 300–800
- **Category colors**:
  - Madrid Essentials — red
  - Living in Madrid — blue
  - See in Madrid — green
  - Do in Madrid — purple
  - Madrid Now — orange (brand)

## 📝 License

MIT — fork, customize, ship.
