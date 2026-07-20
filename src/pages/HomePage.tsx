import { Link } from '../components/Link'
import { categoryRecordCount } from '../data/categories'
import type { Category } from '../data/categories'
import type { Record as MRecord } from '../data/records'
import SearchBar from '../components/SearchBar'
import Sidebar from '../components/Sidebar'

/**
 * Homepage = portal. No cards, no shadows, no hero. The five
 * permanent categories are the entire main navigation, as big
 * clickable text. The page fits in 100vh on desktop.
 *
 * See DESKTOP_LAYOUT.md for the design spec.
 */
export default function HomePage({
  categories,
  records,
}: {
  categories: Category[]
  records: MRecord[]
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      {/* Welcome band — header-like, part of main */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Madrid Insider
          </h1>
          <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
            The English-language operating manual for Madrid. Five ways in.
            Each one curated, official-source-verified, and updated for
            2026.
          </p>
          <div className="mt-3 max-w-2xl">
            <SearchBar
              placeholder="Search the directory (try “metro”, “nie”, “prado”)…"
              autoFocus={false}
              limit={8}
            />
          </div>
        </div>
      </section>

      {/* Main navigation — the five categories. Big, plain, no cards. */}
      <nav
        aria-label="Categories"
        className="flex-1 bg-white"
      >
        <ul className="mx-auto flex max-w-7xl flex-col">
          {categories.map((cat) => {
            const count = categoryRecordCount(cat.id, records)
            return (
              <li key={cat.id} className="border-b border-gray-100 last:border-b-0">
                <Link
                  to={`/${cat.id}`}
                  className="group flex items-baseline gap-4 px-4 py-5 transition hover:bg-gray-50 sm:px-6 sm:py-7 lg:px-8"
                >
                  <span className="text-2xl sm:text-3xl" aria-hidden>
                    {cat.emoji}
                  </span>
                  <span className="flex-1">
                    <span className="block text-xl font-bold text-gray-900 group-hover:text-brand-600 sm:text-2xl">
                      {cat.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-gray-500 sm:text-sm">
                      {cat.description}
                    </span>
                  </span>
                  <span className="text-xs text-gray-400 sm:text-sm">
                    {count} record{count === 1 ? '' : 's'}
                  </span>
                  <span
                    className="text-lg text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-brand-500 sm:text-xl"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <Sidebar />
    </div>
  )
}
