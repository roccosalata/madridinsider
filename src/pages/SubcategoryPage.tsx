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
  // Group records by subsubcategory (if present).
  // Records without subsubcategory go in a default group (rendered without a heading).
  const groups = groupBySubsubcategory(records)
  const hasGroups = groups.some((g) => g.name !== null)

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

      {/* Tips / practical advice — shown between the header and the record list */}
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
        // Render grouped by subsubcategory with section headings
        <div className="mt-6 space-y-8">
          {groups.map((group) => (
            <section key={group.name ?? 'default'}>
              {group.name && (
                <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
                  {group.name}
                  <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
                    {group.records.length}
                  </span>
                </h2>
              )}
              <ul className={`grid gap-3 ${group.name ? 'sm:grid-cols-2' : 'sm:grid-cols-2'}`}>
                {group.records.map((r) => (
                  <li key={r.id}>
                    <RecordCard record={r} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        // No sub-subcategories — render flat
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

/**
 * Group records by subsubcategory.
 * Returns an array of { name, records } pairs.
 * Records without a subsubcategory go in the first group with name=null.
 * If all records lack a subsubcategory, returns a single group with name=null.
 */
function groupBySubsubcategory(records: MRecord[]): { name: string | null; records: MRecord[] }[] {
  const groupMap = new Map<string, MRecord[]>()
  const ungrouped: MRecord[] = []

  for (const r of records) {
    const subsub = (r as Record<string, unknown>).subsubcategory as string | undefined
    if (subsub) {
      if (!groupMap.has(subsub)) groupMap.set(subsub, [])
      groupMap.get(subsub)!.push(r)
    } else {
      ungrouped.push(r)
    }
  }

  const groups: { name: string | null; records: MRecord[] }[] = []

  // Ungrouped records first (no heading), if any
  if (ungrouped.length > 0) {
    groups.push({ name: null, records: ungrouped })
  }

  // Then named groups, sorted alphabetically
  for (const [name, recs] of Array.from(groupMap.entries()).sort((a, b) => a[0].localeCompare(b[0]))) {
    groups.push({ name, records: recs })
  }

  return groups
}
