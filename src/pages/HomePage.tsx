import { Link } from '../components/Link'
import MadridNowFeed from '../components/MadridNowFeed'
import RecordCard from '../components/RecordCard'
import type { Category } from '../data/categories'
import type { Record as MRecord } from '../data/records'

/**
 * Homepage layout (per CONSTITUTION.md Amendment 2, 2026-07-20):
 *
 *   ┌────────────────────────────────────────────────────────────┐
 *   │  HEADER (same on all pages): logo + slogan + 5 nav         │
 *   ├────────────────────────────────────────────────────────────┤
 *   │  TOP 1/3 — single centered block:                          │
 *   │     ┌─────────┬─────────┐                                  │
 *   │     │Essentials│ Living │   ← 2×2 table (centered)         │
 *   │     ├─────────┼─────────┤                                  │
 *   │     │   See   │   Do   │                                  │
 *   │     └─────────┴─────────┘                                  │
 *   │     WELCOME TO MADRID INSIDER     ← invisible row under    │
 *   │     [both left and right margins are free]                 │
 *   ├────────────────────────────────────────────────────────────┤
 *   │  POPULAR RECORDS (full width)                              │
 *   │  Top 8 most-linked records as quick-access cards           │
 *   ├────────────────────────────────────────────────────────────┤
 *   │  BOTTOM 2/3 — Madrid Now (full width, both margins free):  │
 *   │  Transit alerts | This week's events | Open exhibitions    │
 *   │  News & updates | Live info                                │
 *   ├────────────────────────────────────────────────────────────┤
 *   │  FOOTER (same on all pages)                                │
 *   └────────────────────────────────────────────────────────────┘
 */
export default function HomePage({
  categories,
  records,
}: {
  categories: Category[]
  records: MRecord[]
}) {
  const navCategories = categories.filter((c) => c.id !== 'now')

  // Popular records = records with the most related_records connections
  // (most-connected = most cross-referenced = most useful hub pages)
  const popularRecords = [...records]
    .filter((r) => r.status !== 'archived')
    .sort((a, b) => (b.related_records?.length ?? 0) - (a.related_records?.length ?? 0))
    .slice(0, 8)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* TOP 1/3: centered 2×2 table + welcome statement */}
      <section className="madrid-gradient border-b border-gray-100 py-8 sm:py-10">
        <div className="mx-auto max-w-2xl">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <CategoryCell category={navCategories[0]} />
                <CategoryCell category={navCategories[1]} />
              </tr>
              <tr>
                <CategoryCell category={navCategories[2]} />
                <CategoryCell category={navCategories[3]} />
              </tr>
              <tr>
                <td colSpan={2} className="p-2 pt-8 text-center">
                  <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    WELCOME TO MADRID INSIDER
                  </h1>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-brand-600 sm:text-base">
                    Your English-language directory for Madrid, Spain
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* POPULAR RECORDS — quick access to most-linked pages */}
      <section className="border-b border-gray-100 py-6 sm:py-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          Popular Resources
        </h2>
        <p className="mt-1 text-xs text-gray-400">
          The most cross-referenced guides on Madrid Insider — start here
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {popularRecords.map((r) => (
            <li key={r.id}>
              <RecordCard record={r} />
            </li>
          ))}
        </ul>
      </section>

      {/* BOTTOM 2/3: Madrid Now feed (full width) */}
      <section className="py-8 sm:py-10">
        <MadridNowFeed records={records} />
      </section>
    </div>
  )
}

function CategoryCell({ category }: { category: Category | undefined }) {
  if (!category) return <td className="p-2" />
  return (
    <td className="p-2 align-top">
      <Link
        to={`/${category.id}`}
        className="group block h-full rounded-xl border border-gray-200 bg-white p-5 text-center transition hover:border-brand-300 hover:bg-brand-50/30 hover:shadow-sm sm:p-6"
      >
        <div className="text-3xl sm:text-4xl" aria-hidden>
          {category.emoji}
        </div>
        <div className="mt-2 text-base font-bold text-gray-900 group-hover:text-brand-600 sm:text-lg">
          {category.title}
        </div>
        <div className="mt-1 text-[11px] leading-relaxed text-gray-500 sm:text-xs">
          {category.description}
        </div>
        <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400 group-hover:text-brand-500">
          {category.subcategories.length} subcategories →
        </div>
      </Link>
    </td>
  )
}
