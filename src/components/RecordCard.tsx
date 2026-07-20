import { Link } from './Link'
import StatusBadge from './StatusBadge'
import type { Record as MRecord } from '../data/records'
import { categoryById, recordUrl } from '../data/categories'

const categoryColor: Record<string, string> = {
  essentials: 'text-red-600',
  living:     'text-blue-600',
  see:        'text-emerald-600',
  do:         'text-purple-600',
  now:        'text-orange-600',
}

export default function RecordCard({ record, compact = false }: { record: MRecord; compact?: boolean }) {
  const cat = categoryById(record.category)
  const href = recordUrl(record.category, record.subcategory, record.id)
  const dotColor = categoryColor[record.category] ?? 'text-gray-500'

  return (
    <Link
      to={href}
      className="group block rounded-lg border border-gray-100 bg-white p-4 transition hover:border-gray-200 hover:bg-gray-50"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className={`text-sm font-semibold text-gray-900 group-hover:${dotColor} line-clamp-2`}>
          {record.title}
        </h3>
        <StatusBadge status={record.status} />
      </div>
      {!compact && (
        <p className="mt-1.5 text-xs leading-relaxed text-gray-600 line-clamp-2">
          {record.summary}
        </p>
      )}
      <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-gray-500">
        {cat && <span className={`font-semibold uppercase tracking-wider ${dotColor}`}>{cat.title}</span>}
        {record.english_friendly && (
          <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-semibold text-emerald-700">
            EN
          </span>
        )}
        <span aria-hidden>·</span>
        <span>Updated {record.last_updated}</span>
      </div>
    </Link>
  )
}
