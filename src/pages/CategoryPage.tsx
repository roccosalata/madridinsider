import { Link } from '../components/Link'
import Breadcrumb from '../components/Breadcrumb'
import SearchBar from '../components/SearchBar'
import { categoryUrl, subcategoryUrl, subcategoryRecordCount } from '../data/categories'
import type { Category } from '../data/categories'
import type { Record as MRecord } from '../data/records'

const categoryAccent: Record<string, string> = {
  essentials: 'border-red-200 bg-red-50/40',
  living:     'border-blue-200 bg-blue-50/40',
  see:        'border-emerald-200 bg-emerald-50/40',
  do:         'border-purple-200 bg-purple-50/40',
  now:        'border-brand-200 bg-brand-50/40',
}

export default function CategoryPage({
  category,
  records,
}: {
  category: Category
  records: MRecord[]
}) {
  const accent = categoryAccent[category.id] ?? 'border-gray-200 bg-gray-50/40'
  const total = records.filter((r) => r.category === category.id).length

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: category.title },
        ]}
      />

      <header className={`mt-4 rounded-2xl border ${accent} madrid-gradient p-6 sm:p-8`}>
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm sm:h-14 sm:w-14 sm:text-3xl" aria-hidden>
            {category.emoji}
          </span>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {category.title}
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-600 sm:text-base">
              {category.description}
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs uppercase tracking-wider text-gray-500">
          {category.subcategories.length} subcategories · {total} records
        </p>
      </header>

      <div className="mt-6 max-w-xl">
        <SearchBar
          placeholder={`Search in ${category.title}…`}
          scope={{ category: category.id }}
          limit={10}
        />
      </div>

      <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
        Subcategories
      </h2>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {category.subcategories.map((sub) => {
          const count = subcategoryRecordCount(category.id, sub.id, records)
          return (
            <li key={sub.id}>
              <Link
                to={subcategoryUrl(category.id, sub.id)}
                className="group flex h-full flex-col rounded-xl border border-gray-100 bg-white p-4 transition hover:border-gray-200 hover:bg-gray-50"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-2xl" aria-hidden>{sub.icon}</span>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
                    {count}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-bold text-gray-900 group-hover:text-brand-600">
                  {sub.title}
                </h3>
                <p className="mt-1 flex-1 text-xs leading-relaxed text-gray-600">
                  {sub.summary}
                </p>
                <span className="mt-2 text-xs font-semibold text-gray-400 group-hover:text-brand-600">
                  Open →
                </span>
              </Link>
            </li>
          )
        })}
      </ul>

      <p className="mt-10 text-xs text-gray-400">
        <Link to={categoryUrl(category.id)} className="hover:underline">
          {category.title}
        </Link>{' '}
        · canonical category · {records.length} total records across all categories
      </p>
    </div>
  )
}
