import { Link } from './Link'
import type { Record as MRecord } from '../data/records'

/**
 * Madrid Now HIGHLIGHTS — compact teaser for the homepage.
 *
 * Shows just a few highlights (1 most-urgent transit alert + 2 upcoming
 * events + 1 top news headline). The full Madrid Now feed lives on the
 * dedicated /now page, which has the whole page to work with.
 *
 * The "View full Madrid Now →" call-to-action is prominent so users
 * know there's more to see.
 */
export default function MadridNowFeed({ records }: { records: MRecord[] }) {
  // Pick just the highlights — at most 4 items total
  const transit = records
    .filter((r) => r.category === 'now' && r.subcategory === 'transit')
    .slice(0, 1)  // 1 most-urgent transit alert
  const events = records
    .filter((r) => r.category === 'now' && r.subcategory === 'events')
    .slice(0, 2)  // 2 upcoming events
  const news = records
    .filter((r) => r.category === 'now' && r.subcategory === 'news')
    .slice(0, 1)  // 1 top headline

  const highlightCount = transit.length + events.length + news.length

  return (
    <div>
      {/* Section heading with prominent CTA */}
      <div className="flex items-baseline justify-between border-b border-gray-100 pb-3">
        <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
          <span aria-hidden className="mr-1.5">📡</span>
          Madrid Now
        </h2>
        <Link
          to="/now"
          className="inline-flex items-center gap-1 rounded-md bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 transition hover:bg-brand-100"
        >
          View full Madrid Now
          <span aria-hidden>→</span>
        </Link>
      </div>

      {/* Compact highlights grid — single row of 3-4 cards */}
      {highlightCount > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* Transit alert (amber, urgent) */}
          {transit.map((r) => (
            <HighlightCard
              key={r.id}
              record={r}
              icon="🚧"
              label="Transit alert"
              accent="amber"
            />
          ))}

          {/* Events */}
          {events.map((r) => (
            <HighlightCard
              key={r.id}
              record={r}
              icon="🎟️"
              label="This week"
              accent="brand"
            />
          ))}

          {/* News */}
          {news.map((r) => (
            <HighlightCard
              key={r.id}
              record={r}
              icon="📰"
              label="Top news"
              accent="blue"
            />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm text-gray-500">
          No current Madrid Now highlights.{' '}
          <Link to="/now" className="text-brand-600 hover:underline">
            View the full Madrid Now page →
          </Link>
        </p>
      )}

      {/* Subtle reminder that there's more on /now */}
      <p className="mt-4 text-center text-xs text-gray-400">
        Plus exhibitions, live info, and more on the{' '}
        <Link to="/now" className="font-medium text-brand-600 hover:underline">
          full Madrid Now page
        </Link>
        .
      </p>
    </div>
  )
}

/**
 * A single highlight card — compact, scannable.
 */
function HighlightCard({
  record,
  icon,
  label,
  accent,
}: {
  record: MRecord
  icon: string
  label: string
  accent: 'amber' | 'brand' | 'blue'
}) {
  const accentClasses = {
    amber: 'border-amber-200 bg-amber-50/40 hover:bg-amber-50',
    brand: 'border-gray-100 bg-white hover:border-brand-200 hover:bg-brand-50/30',
    blue:  'border-gray-100 bg-white hover:border-blue-200 hover:bg-blue-50/30',
  }[accent]

  const labelClasses = {
    amber: 'text-amber-700',
    brand: 'text-gray-500',
    blue:  'text-blue-600',
  }[accent]

  return (
    <Link
      to={`/${record.category}/${record.subcategory}/${record.id}`}
      className={`group block rounded-lg border p-3 transition ${accentClasses}`}
    >
      <div className={`flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider ${labelClasses}`}>
        <span aria-hidden>{icon}</span>
        {label}
      </div>
      <div className="mt-1.5 text-sm font-semibold text-gray-900 group-hover:text-brand-600 line-clamp-2">
        {record.title}
      </div>
      <div className="mt-1 text-xs text-gray-600 line-clamp-2">
        {record.summary}
      </div>
    </Link>
  )
}
