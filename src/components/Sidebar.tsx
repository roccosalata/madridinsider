import { useEffect, useState } from 'react'
import { Link } from './Link'
import { recordsByCategory } from '../data/records'

/**
 * Compact sidebar for the homepage: live time, weather placeholder, current
 * events. Per DESKTOP_LAYOUT.md the sidebar should be ~15% of the viewport.
 */
export default function Sidebar() {
  const [now, setNow] = useState(() => formatMadridTime(new Date()))
  useEffect(() => {
    const id = setInterval(() => setNow(formatMadridTime(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  const upcoming = recordsByCategory('now')
    .filter((r) => r.subcategory === 'events' || r.subcategory === 'transit')
    .slice(0, 3)

  return (
    <aside
      aria-label="City snapshot"
      className="border-t border-gray-100 bg-gray-50/60"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 py-3 sm:grid-cols-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span aria-hidden>🕒</span>
          <span className="font-mono text-sm text-gray-900">{now}</span>
          <span className="text-gray-400">Madrid</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span aria-hidden>🚇</span>
          <Link to="/now/transit" className="text-gray-700 hover:text-brand-600 hover:underline">
            Metro &amp; transit
          </Link>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span aria-hidden>🎟️</span>
          <Link to="/now/events" className="text-gray-700 hover:text-brand-600 hover:underline">
            This week in Madrid
          </Link>
        </div>
        {upcoming[0] && (
          <div className="col-span-1 truncate text-xs text-gray-500 sm:col-span-3">
            <span className="text-gray-400">Latest: </span>
            <Link
              to={`/${upcoming[0].category}/${upcoming[0].subcategory}/${upcoming[0].id}`}
              className="text-gray-700 hover:text-brand-600 hover:underline"
            >
              {upcoming[0].title}
            </Link>
          </div>
        )}
      </div>
    </aside>
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
