import { Link } from '../components/Link'
import Breadcrumb from '../components/Breadcrumb'
import SearchBar from '../components/SearchBar'
import RecordCard from '../components/RecordCard'
import { categoryUrl, subsubUrl, distinctSubsubs } from '../data/categories'
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
  // Check if records have subsubcategory groups
  const groups = distinctSubsubs(records)
  const hasGroups = groups.length >= 2

  // Group records by subsubcategory
  const groupMap = new Map<string, MRecord[]>()
  const ungrouped: MRecord[] = []
  for (const r of records) {
    const ss = (r as Record<string, unknown>).subsubcategory as string | undefined
    if (ss) {
      if (!groupMap.has(ss)) groupMap.set(ss, [])
      groupMap.get(ss)!.push(r)
    } else {
      ungrouped.push(r)
    }
  }

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
            {hasGroups ? ` · ${groups.length} groups` : ''}
          </p>
        </div>
      </header>

      {/* Tips / practical advice */}
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
      ) : hasGroups ? (
        // SHOW GROUP CARDS (like CategoryPage shows subcategory cards)
        <div className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Groups
          </h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((groupName) => {
              const groupRecords = groupMap.get(groupName) ?? []
              const count = groupRecords.length
              return (
                <li key={groupName}>
                  <Link
                    to={subsubUrl(category.id, subcategory.id, groupName)}
                    className="group flex h-full flex-col rounded-xl border border-gray-100 bg-white p-4 transition hover:border-gray-200 hover:bg-gray-50"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-2xl" aria-hidden>📁</span>
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
                        {count}
                      </span>
                    </div>
                    <h3 className="mt-2 text-sm font-bold text-gray-900 group-hover:text-brand-600">
                      {groupName}
                    </h3>
                    <p className="mt-1 flex-1 text-xs leading-relaxed text-gray-600">
                      {count} record{count === 1 ? '' : 's'} in this group
                    </p>
                    <span className="mt-2 text-xs font-semibold text-gray-400 group-hover:text-brand-600">
                      Open →
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
        // NO GROUPS — render records flat (original behavior)
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
