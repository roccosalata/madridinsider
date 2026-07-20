import { useEffect, useState } from 'react'
import { Link } from './Link'

/**
 * Compact live-info bar for the homepage right margin.
 * Shows current Madrid time (updates every second) and a weather stub.
 * Keeps the sidebar narrow — the full Madrid Now feed lives in the
 * main content area (see MadridNowFeed).
 */
export default function LiveInfoBar() {
  const [now, setNow] = useState(() => formatMadridTime(new Date()))

  useEffect(() => {
    const id = setInterval(() => setNow(formatMadridTime(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex flex-col gap-3">
      {/* Live time */}
      <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4 text-center">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
          Madrid time
        </div>
        <div className="mt-1 font-mono text-2xl font-bold tabular-nums text-gray-900">
          {now}
        </div>
        <div className="mt-0.5 text-[10px] text-gray-400">Europe/Madrid</div>
      </div>

      {/* Weather stub — links to /now/live for details */}
      <Link
        to="/now/live"
        className="block rounded-xl border border-gray-100 bg-gray-50/60 p-4 text-center transition hover:border-brand-200 hover:bg-brand-50/40"
      >
        <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
          Weather
        </div>
        <div className="mt-1 text-2xl" aria-hidden>☀️</div>
        <div className="mt-0.5 text-xs font-medium text-gray-700">
          Live weather &amp; AQI
        </div>
        <div className="mt-0.5 text-[10px] text-brand-600 hover:underline">
          View details →
        </div>
      </Link>
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
