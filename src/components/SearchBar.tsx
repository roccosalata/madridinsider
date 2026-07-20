import { useState, useEffect, useRef } from 'react'
import { searchRecords, type SearchHit } from '../data/records'
import { Link } from './Link'
import { recordUrl } from '../data/categories'

export default function SearchBar({
  initialQuery = '',
  placeholder = 'Search records…',
  scope,
  limit = 20,
  autoFocus = false,
}: {
  initialQuery?: string
  placeholder?: string
  scope?: { category?: string; subcategory?: string }
  limit?: number
  autoFocus?: boolean
}) {
  const [q, setQ] = useState(initialQuery)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus()
  }, [autoFocus])

  const hits: SearchHit[] = q.trim() ? searchRecords(q, scope).slice(0, limit) : []

  return (
    <div className="w-full">
      <label htmlFor="record-search" className="sr-only">
        Search records
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          aria-hidden
        >
          🔍
        </span>
        <input
          id="record-search"
          ref={inputRef}
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm placeholder-gray-400 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          autoComplete="off"
        />
      </div>

      {q.trim() && (
        <div className="mt-2 text-xs text-gray-500" aria-live="polite">
          {hits.length === 0
            ? `No records match “${q}”.`
            : `${hits.length} record${hits.length === 1 ? '' : 's'} match.`}
        </div>
      )}

      {hits.length > 0 && (
        <ul className="mt-2 space-y-1">
          {hits.map((h) => (
            <li key={h.record.id}>
              <Link
                to={recordUrl(h.record.category, h.record.subcategory, h.record.id)}
                className="block rounded-md px-3 py-2 text-sm text-gray-800 transition hover:bg-gray-50"
                onClick={() => setQ('')}
              >
                <span className="font-semibold">{h.record.title}</span>
                <span className="ml-2 text-xs text-gray-500">{h.record.category}/{h.record.subcategory}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
