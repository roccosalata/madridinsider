# Contributing to Madrid Insider

Welcome! 🎉 This is the production repo for [madridinsider.com](https://www.madridinsider.com/). Anyone can contribute — content, code, copy edits, bug reports.

---

## TL;DR

1. **Fork** the repo (or create a branch if you have write access).
2. **Make your change** — keep it focused, one thing per PR.
3. **Open a Pull Request** against `main`.
4. **Get a review** from at least one other collaborator.
5. **Merge** → auto-deploy to production.

If you're just editing text, copy, events, or links, jump to [Updating content](#updating-content-no-coding-required). You don't need to know React.

---

## Branch naming

Use a short, descriptive slug prefixed with the kind of change:

| Prefix | Use it for |
| --- | --- |
| `content/` | Copy, events, categories, quick-access items |
| `fix/` | Bug fixes |
| `feat/` | New features or components |
| `chore/` | Deps, tooling, refactors with no user-visible change |
| `docs/` | README, CONTRIBUTING, this file |

Examples: `content/august-events`, `fix/quiz-scroll`, `feat/newsletter-modal`.

---

## Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
content(events): add August Veranos de la Villa dates
fix(quiz): reset selection on category change
feat(newsletter): add Mailchimp integration
chore(deps): bump vite to 5.4.12
docs: clarify data flow in README
```

---

## Updating content (no coding required)

The site's text, events, and links live in three files under `src/data/`. Edit the strings, save, and open a PR. The shape of each file:

### `src/data/categories.ts`

```ts
{
  id: 'essentials',           // unique slug, lowercase
  title: 'Madrid Essentials', // shown as card heading
  description: '...',         // shown as card subtext
  emoji: '🎒',                // one emoji
  color: 'red',               // 'red' | 'blue' | 'green' | 'purple' | 'orange'
  bullets: [                  // 3-5 short phrases
    'Visa & entry requirements',
    'Currency, tipping & budgets',
  ],
}
```

### `src/data/events.ts`

```ts
{
  id: 'evt-1',                       // unique
  title: 'Veranos de la Villa ...',  // event name
  date: '15 Jul',                    // human-friendly
  day: '15',                         // numeric day
  month: 'JUL',                      // 3-letter month
  venue: 'Multiple venues',          // where
  category: 'Music',                 // 'Music' | 'Culture' | 'Food' | 'Sport' | 'Family'
  free: false,                       // boolean
}
```

### `src/data/quickAccess.ts`

```ts
{
  id: 'qa-1',
  title: 'Madrid Metro Map',
  description: 'Navigate the 12 lines, 300+ stations.',
  emoji: '🚇',
  href: '#essentials',  // in-page anchor or external URL
}
```

> 💡 **Heads up:** the canonical machine-readable copy of this content lives in
> [`roccosalata/madridinsider-data`](https://github.com/roccosalata/madridinsider-data)
> as JSON. If you're editing the TypeScript files here, please also update
> (or ask someone to update) the matching JSON file in the data repo so the
> two stay in sync.

---

## Code style

- **TypeScript strict mode** — no `any` unless you really mean it.
- **Tailwind only** for styling — no new CSS files.
- **One component per file**, file name matches the component (`Header.tsx` → `Header`).
- **Props typed inline** for small components, separate `*.types.ts` for big ones.
- Run `npm run build` locally before opening a PR. The CI runs the same check.

---

## Pull request checklist

- [ ] Branch name follows the convention above
- [ ] Commit messages follow Conventional Commits
- [ ] `npm run build` passes locally
- [ ] PR description says **what** changed and **why**
- [ ] Screenshots/Looms included for any user-visible change
- [ ] Linked to a GitHub issue if one exists (`Fixes #123`)

---

## Reviewing

When reviewing someone else's PR:

- Be kind, be specific, and assume good intent.
- Distinguish **blocking** comments from **nitpicks** (`nit:` prefix).
- Approve once you're happy — don't gate on style preferences.

---

## Code of conduct

Be excellent to each other. We're building a public resource about Madrid for the world. Disagreements happen; harassment doesn't.

---

## Questions?

Open an issue, mention `@roccosalata`, or leave a comment on the relevant PR. We're responsive.
