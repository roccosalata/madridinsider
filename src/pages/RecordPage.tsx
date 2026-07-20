import { Link } from '../components/Link'
import Breadcrumb, { recordBreadcrumb } from '../components/Breadcrumb'
import StatusBadge from '../components/StatusBadge'
import { Link as ExtLink } from '../components/Link'
import { categoryUrl, subcategoryUrl } from '../data/categories'
import { relatedRecords } from '../data/records'
import type { Category, Subcategory } from '../data/categories'
import type { Record } from '../data/records'

export default function RecordPage({
  record,
  category,
  subcategory,
  allRecords,
}: {
  record: Record
  category: Category
  subcategory: Subcategory
  allRecords: Record[]
}) {
  const related = relatedRecords(record.id)
  void allRecords
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <Breadcrumb items={recordBreadcrumb(record.id)} />

      <article className="mt-4">
        <header className="border-b border-gray-100 pb-5">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Link
              to={categoryUrl(category.id)}
              className="rounded-full bg-gray-100 px-2 py-0.5 font-semibold uppercase tracking-wider text-gray-700 hover:bg-gray-200"
            >
              {category.title}
            </Link>
            <Link
              to={subcategoryUrl(category.id, subcategory.id)}
              className="rounded-full bg-gray-50 px-2 py-0.5 text-gray-600 hover:bg-gray-100"
            >
              {subcategory.icon} {subcategory.title}
            </Link>
            <StatusBadge status={record.status} />
            {record.english_friendly && (
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-700">
                English-friendly
              </span>
            )}
          </div>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {record.title}
          </h1>
          <p className="mt-3 text-base text-gray-700 sm:text-lg">
            {record.summary}
          </p>
        </header>

        <div className="prose prose-sm mt-6 max-w-none text-gray-700 sm:prose-base">
          {record.content.split('\n\n').map((para, i) => (
            <p key={i} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {record.tags && record.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-1.5">
            {record.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600"
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-xs text-gray-600">
          <span>
            Last updated:{' '}
            <time dateTime={record.last_updated} className="font-semibold text-gray-900">
              {record.last_updated}
            </time>
          </span>
          {record.official_url && (
            <ExtLink
              to={record.official_url}
              external
              className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
            >
              Visit official site
              <span aria-hidden>↗</span>
            </ExtLink>
          )}
        </div>

        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="mt-8">
            <h2 id="related-heading" className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Related records
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.id}>
                  <Link
                    to={`/${r.category}/${r.subcategory}/${r.id}`}
                    className="group block rounded-lg border border-gray-100 bg-white p-3 transition hover:border-gray-200 hover:bg-gray-50"
                  >
                    <span className="block text-sm font-semibold text-gray-900 group-hover:text-brand-600">
                      {r.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-gray-500">
                      {category.title} → {subcategory.id}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </div>
  )
}
