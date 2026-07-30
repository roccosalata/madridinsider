import { Link } from '../components/Link'
import MadridNowFeed from '../components/MadridNowFeed'
import RecordCard from '../components/RecordCard'
import type { Category } from '../data/categories'
import type { Record as MRecord } from '../data/records'

/**
 * Homepage layout:
 *
 *   ┌────────────────────────────────────────────────────────────┐
 *   │  HEADER                                                     │
 *   ├────────────────────────────────────────────────────────────┤
 *   │  TOP — centered 2×2 table + welcome                        │
 *   │     ┌─────────┬─────────┐                                   │
 *   │     │Essentials│ Living │                                   │
 *   │     ├─────────┼─────────┤                                   │
 *   │     │   See   │   Do   │                                   │
 *   │     └─────────┴─────────┘                                   │
 *   │     WELCOME TO MADRID INSIDER                               │
 *   ├──────────────────────────┬─────────────────────────────────┤
 *   │  POPULAR (left column)   │  MADRID NOW (right column)      │
 *   │  Top 6 quick-access      │  Weather + highlights           │
 *   │  record cards            │  (compact, not full version)    │
 *   ├──────────────────────────┴─────────────────────────────────┤
 *   │  FOOTER                                                     │
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

  // Popular records = most-connected (most cross-referenced = most useful hubs)
  const popularRecords = [...records]
    .filter((r) => r.status !== 'archived')
    .sort((a, b) => (b.related_records?.length ?? 0) - (a.related_records?.length ?? 0))
    .slice(0, 6)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* TOP: centered 2×2 table + welcome statement */}
      <section className="madrid-gradient border-b border-gray-100 py-4 sm:py-6">
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
                <td colSpan={2} className="p-2 pt-4 text-center">
                  <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                    WELCOME TO MADRID INSIDER
                  </h1>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-600 sm:text-sm">
                    Your English-language directory for Madrid, Spain
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* BOTTOM: two-column layout — Popular (left) + Madrid Now (right) */}
      <section className="py-4 sm:py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* LEFT: Popular Resources (top 2 + link to more) */}
          <div>
            <div className="flex items-baseline justify-between border-b border-gray-100 pb-3">
              <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
                <span aria-hidden className="mr-1.5">⭐</span>
                Popular Resources
              </h2>
              <Link
                to="/essentials"
                className="text-xs font-semibold text-brand-600 hover:underline"
              >
                View all →
              </Link>
            </div>
            <ul className="mt-4 space-y-2">
              {popularRecords.slice(0, 2).map((r) => (
                <li key={r.id}>
                  <RecordCard record={r} />
                </li>
              ))}
            </ul>
            <Link
              to="/essentials"
              className="mt-3 inline-block text-xs font-semibold text-brand-600 hover:underline"
            >
              Browse all {records.filter((r) => r.status !== 'archived').length} resources →
            </Link>
          </div>

          {/* RIGHT: Madrid Now (compact) */}
          <div>
            <MadridNowFeed records={records} />
          </div>

        </div>
      </section>
    </div>
  )
}

function CategoryCell({ category }: { category: Category | undefined }) {
  if (!category) return <td className="p-2" />
  return (
    <td className="p-1.5 align-top">
      <Link
        to={`/${category.id}`}
        className="group block h-full rounded-lg border border-gray-200 bg-white p-3 text-center transition hover:border-brand-300 hover:bg-brand-50/30 hover:shadow-sm sm:p-4"
      >
        <div className="text-2xl sm:text-3xl" aria-hidden>
          {category.emoji}
        </div>
        <div className="mt-1 text-sm font-bold text-gray-900 group-hover:text-brand-600 sm:text-base">
          {category.title}
        </div>
        <div className="mt-0.5 text-[10px] leading-snug text-gray-500 sm:text-[11px]">
          {category.description}
        </div>
        <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-gray-400 group-hover:text-brand-500">
          {category.subcategories.length} subcategories →
        </div>
      </Link>
    </td>
  )
}
