import Breadcrumb from '../components/Breadcrumb'
import SearchBar from '../components/SearchBar'
import RecordCard from '../components/RecordCard'
import { categoryUrl } from '../data/categories'
import type { Category, Subcategory } from '../data/categories'
import type { Record as MRecord } from '../data/records'

export default function SubcategoryPage({
  category,
  subcategory,
  records,
}: {
  category: Category
  subcategory: Subcategory
  records: MRecord[]
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: category.title, to: categoryUrl(category.id) },
          { label: subcategory.title },
        ]}
      />

      <header className="mt-4 flex items-start gap-4 border-b border-gray-100 pb-6">
        <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gray-50 text-2xl" aria-hidden>
          {subcategory.icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            {category.title}
          </p>
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {subcategory.title}
          </h1>
          <p className="mt-1 text-sm text-gray-600 sm:text-base">
            {subcategory.summary}
          </p>
          <p className="mt-2 text-xs text-gray-400">
            {records.length} record{records.length === 1 ? '' : 's'} in this subcategory
          </p>
        </div>
      </header>

      <div className="mt-6 max-w-xl">
        <SearchBar
          placeholder={`Filter ${subcategory.title}…`}
          scope={{ category: category.id, subcategory: subcategory.id }}
          limit={20}
        />
      </div>

      {records.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-sm text-gray-500">
          No records in this subcategory yet.
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
    </div>
  )
}
