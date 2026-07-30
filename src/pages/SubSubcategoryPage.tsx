import { Link } from '../components/Link'
import Breadcrumb from '../components/Breadcrumb'
import SearchBar from '../components/SearchBar'
import RecordCard from '../components/RecordCard'
import { categoryUrl, subcategoryUrl } from '../data/categories'
import type { Category, Subcategory } from '../data/categories'
import type { Record as MRecord } from '../data/records'

const categoryAccent: Record<string, string> = {
  essentials: 'border-red-200 bg-red-50/40',
  living:     'border-blue-200 bg-blue-50/40',
  see:        'border-emerald-200 bg-emerald-50/40',
  do:         'border-purple-200 bg-purple-50/40',
  now:        'border-brand-200 bg-brand-50/40',
}

export default function SubSubcategoryPage({
  category,
  subcategory,
  subsubName,
  records,
}: {
  category: Category
  subcategory: Subcategory
  subsubName: string
  records: MRecord[]
}) {
  const accent = categoryAccent[category.id] ?? 'border-gray-200 bg-gray-50/40'

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: category.title, to: categoryUrl(category.id) },
          { label: subcategory.title, to: subcategoryUrl(category.id, subcategory.id) },
          { label: subsubName },
        ]}
      />

      <header className={`mt-4 rounded-2xl border ${accent} p-6 sm:p-8`}>
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-white text-2xl shadow-sm" aria-hidden>
            {subcategory.icon}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              {category.title} → {subcategory.title}
            </p>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {subsubName}
            </h1>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-400">
          {records.length} record{records.length === 1 ? '' : 's'} in this group
        </p>
      </header>

      {/* Tips */}
      {subcategory.tips && (
        <div className="mt-4 rounded-xl border border-brand-200 bg-brand-50/40 p-4 sm:p-5">
          <div className="flex items-start gap-2">
            <span aria-hidden className="text-base leading-none mt-0.5">💡</span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                Tips &amp; Practical Info
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-800 sm:text-sm">
                {subcategory.tips}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="max-w-xl flex-1">
          <SearchBar
            placeholder={`Filter ${subsubName}…`}
            scope={{ category: category.id, subcategory: subcategory.id }}
            limit={20}
          />
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="font-semibold">English:</span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-amber-400" title="EN★ Primary" />
            <span className="h-2 w-2 rounded-full bg-green-500" title="EN Available" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" title="EN Partial" />
            <span className="h-2 w-2 rounded-full bg-gray-300" title="ES Only" />
          </span>
        </div>
      </div>

      {records.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-sm text-gray-500">
          No records in this group yet.
        </div>
      ) : (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {records.map((r) => (
            <li key={r.id}>
              <RecordCard record={r} />
            </li>
          ))}
        </ul>
      )}

      {/* Back to subcategory */}
      <div className="mt-8">
        <Link
          to={subcategoryUrl(category.id, subcategory.id)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline"
        >
          <span aria-hidden>←</span>
          Back to {subcategory.title}
        </Link>
      </div>
    </div>
  )
}
