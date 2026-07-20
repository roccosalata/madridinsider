import { useEffect, useState } from 'react'
import { Link } from './Link'
import type { Category } from '../data/categories'
import type { Record as MRecord } from '../data/records'

/**
 * "Madrid Right Now" sidebar — shown on the homepage.
 *
 * Shows live Madrid time, a weather stub, the top news headline,
 * 2-3 upcoming events, and the latest transit alert. All content
 * comes from records in the `now` category — no external APIs.
 *
 * Live time uses Intl.DateTimeFormat with Europe/Madrid timezone.
 * Weather is a stub until an API integration is added.
 */
export default function MadridNowBar({
  nowCategory,
  records,
}: {
  nowCategory?: Category
  records: MRecord[]
}) {
  const [now, setNow] = useState(() => formatMadridTime(new Date()))

  useEffect(() => {
    const id = setInterval(() => setNow(formatMadridTime(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  if (!nowCategory) return null

  const events = records
    .filter((r) => r.category === 'now' && r.subcategory === 'events')
    .slice(0, 3)
  const news = records
    .filter((r) => r.category === 'now' && r.subcategory === 'news')
    .slice(0, 1)
  const transit = records
    .filter((r) => r.category === 'now' && r.subcategory === 'transit')
    .slice(0, 1)
  const live = records
    .filter((r) => r.category === 'now' && r.subcategory === 'live')
    .slice(0, 1)

  return (
    <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4 sm:p-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Madrid Right Now
        </h2>
        <Link
          to="/now"
          className="text-xs font-medium text-brand-600 hover:underline"
        >
          Full view →
        </Link>
      </div>

      {/* Live time + weather */}
      <div className="mt-3 flex items-center gap-4 border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <span aria-hidden className="text-base">🕒</span>
          <span className="font-mono text-lg font-semibold tabular-nums text-gray-900 sm:text-xl">
            {now}
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-gray-400">
          Madrid
        </span>
      </div>

      {/* Weather stub */}
      <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
        <span aria-hidden>☀️</span>
        <span>
          <Link to="/now/live" className="font-medium text-gray-700 hover:text-brand-600 hover:underline">
            Live weather & AQI
          </Link>
          {live[0] && (
            <span className="text-gray-400"> — {live[0].summary.slice(0, 60)}…</span>
          )}
        </span>
      </div>

      {/* Top news */}
      {news[0] && (
        <div className="mt-3 border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            <span aria-hidden>📰</span> Top news
          </div>
          <Link
            to={`/${news[0].category}/${news[0].subcategory}/${news[0].id}`}
            className="mt-1 block text-sm font-medium text-gray-900 hover:text-brand-600 hover:underline"
          >
            {news[0].title}
          </Link>
        </div>
      )}

      {/* This week's events */}
      {events.length > 0 && (
        <div className="mt-3 border-t border-gray-100 pt-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              <span aria-hidden>🎟️</span> This week
            </div>
            <Link to="/now/events" className="text-[10px] text-brand-600 hover:underline">
              All events →
            </Link>
          </div>
          <ul className="mt-2 space-y-1.5">
            {events.map((ev) => (
              <li key={ev.id}>
                <Link
                  to={`/${ev.category}/${ev.subcategory}/${ev.id}`}
                  className="block text-xs text-gray-700 hover:text-brand-600 hover:underline"
                >
                  • {ev.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Transit alert */}
      {transit[0] && (
        <div className="mt-3 border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
            <span aria-hidden>🚧</span> Transit alert
          </div>
          <Link
            to={`/${transit[0].category}/${transit[0].subcategory}/${transit[0].id}`}
            className="mt-1 block text-xs font-medium text-gray-900 hover:text-brand-600 hover:underline"
          >
            {transit[0].title}
          </Link>
        </div>
      )}
    </div>
  )
}

function formatMadridTime(d: Date): string {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Europe/Madrid',
    }).format(d)
  } catch {
    return d.toLocaleTimeString()
  }
}
