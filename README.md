# Madrid Insider

> 🌐 **The live, production site for [madridinsider.com](https://www.madridinsider.com/)**
> The English-language operating manual for Madrid — helping visitors, expats, students, and future residents navigate Spain's capital.

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

- Vite
- React 18
- TypeScript
- Tailwind CSS 3
- Inter
- GitHub Pages

---

## 🎯 Editorial Mission

Madrid Insider exists to answer one question:

> "How do English speakers successfully visit, survive, live, explore, and enjoy Madrid?"

Content should prioritize:

1. Transportation
2. Housing
3. Healthcare
4. Bureaucracy
5. Attractions
6. Food
7. Day Trips
8. Current Events

---

## 📄 License

MIT — fork, customize, ship.
