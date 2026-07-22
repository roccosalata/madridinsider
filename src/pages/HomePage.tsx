import { Link } from '../components/Link'
import MadridNowFeed from '../components/MadridNowFeed'
import type { Category } from '../data/categories'
import type { Record as MRecord } from '../data/records'

/**
 * Homepage layout (per CONSTITUTION.md Amendment 2, 2026-07-20):
 *
 *   ┌────────────────────────────────────────────────────────────┐
 *   │  HEADER (same on all pages): logo + slogan + 5 nav         │
 *   ├────────────────────────────────────────────────────────────┤
 *   │  TOP 1/3 — single centered block:                          │
 *   │                                                            │
 *   │     ┌─────────┬─────────┐                                  │
 *   │     │Essentials│ Living │   ← 2×2 table (centered)         │
 *   │     ├─────────┼─────────┤                                  │
 *   │     │   See   │   Do   │                                  │
 *   │     └─────────┴─────────┘                                  │
 *   │                                                            │
 *   │     WELCOME TO MADRID INSIDER     ← invisible row under    │
 *   │     Your English-language          the table (centered)    │
 *   │     directory for Madrid, Spain                           │
 *   │                                                            │
 *   │     [both left and right margins are free]                 │
 *   ├────────────────────────────────────────────────────────────┤
 *   │  BOTTOM 2/3 — Madrid Now (full width, both margins free):  │
 *   │  Transit alerts | This week's events | Open exhibitions    │
 *   │  News & updates | Live info                                │
 *   ├────────────────────────────────────────────────────────────┤
 *   │  FOOTER (same on all pages)                                │
 *   └────────────────────────────────────────────────────────────┘
 *
 * The 2×2 table + welcome statement form a single centered block
 * in the top third. Both left and right margins are free (empty).
 * Madrid Now fills the entire bottom 2/3 at full width.
 */
export default function HomePage({
  categories,
  records,
}: {
  categories: Category[]
  records: MRecord[]
}) {
  // The 4 content categories (excluding Madrid Now, which IS the homepage)
  const navCategories = categories.filter((c) => c.id !== 'now')

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* ============================================================ */}
      {/* TOP 1/3: centered 2×2 table + welcome statement             */}
      {/* Both left and right margins are free.                        */}
      {/* ============================================================ */}
      <section className="madrid-gradient border-b border-gray-100 py-8 sm:py-10">
        <div className="mx-auto max-w-2xl">
          {/* 2×2 category table */}
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
              {/* Invisible row underneath — holds the welcome statement, */}
              {/* centered, spanning both columns. */}
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

      {/* ============================================================ */}
      {/* BOTTOM 2/3: Madrid Now feed (full width, both margins free) */}
      {/* ============================================================ */}
      <section className="py-8 sm:py-10">
        <MadridNowFeed records={records} />
      </section>
    </div>
  )
}

/**
 * A single cell in the 2×2 category grid. Renders as a clickable
 * link to the category page, with the emoji, title, and description.
 */
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
