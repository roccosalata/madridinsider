import { Link } from './Link'
import type { Record as MRecord } from '../data/records'

/**
 * Dynamic Madrid Now feed — the bottom 2/3 of the homepage.
 *
 * Shows the latest content from the 5 Madrid Now subcategories:
 *   - This week's events
 *   - Open exhibitions
 *   - News & updates
 *   - Transit alerts
 *   - Live info
 *
 * This is the "dynamic" part of the homepage — it changes as records
 * in the `now` category are updated.
 */
export default function MadridNowFeed({ records }: { records: MRecord[] }) {
  const events = records.filter((r) => r.category === 'now' && r.subcategory === 'events')
  const exhibitions = records.filter((r) => r.category === 'now' && r.subcategory === 'exhibitions')
  const news = records.filter((r) => r.category === 'now' && r.subcategory === 'news')
  const transit = records.filter((r) => r.category === 'now' && r.subcategory === 'transit')
  const live = records.filter((r) => r.category === 'now' && r.subcategory === 'live')

  return (
    <div className="space-y-6">
      {/* Section heading */}
      <div className="flex items-baseline justify-between border-b border-gray-100 pb-2">
        <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
          <span aria-hidden className="mr-1.5">📡</span>
          Madrid Now
        </h2>
        <Link
          to="/now"
          className="text-xs font-medium text-brand-600 hover:underline"
        >
          Full Madrid Now →
        </Link>
      </div>

      {/* Transit alert — most urgent, show first if present */}
      {transit.length > 0 && (
        <section>
          <SectionLabel icon="🚧" label="Transit alerts" count={transit.length} href="/now/transit" />
          <ul className="mt-2 space-y-1.5">
            {transit.slice(0, 2).map((r) => (
              <li key={r.id}>
                <Link
                  to={`/${r.category}/${r.subcategory}/${r.id}`}
                  className="block rounded-md border border-amber-200 bg-amber-50/50 px-3 py-2 text-xs transition hover:bg-amber-50"
                >
                  <span className="font-semibold text-amber-900">{r.title}</span>
                  <span className="mt-0.5 block text-amber-800 line-clamp-2">{r.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Two-column grid: events + exhibitions */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* This week's events */}
        {events.length > 0 && (
          <section>
            <SectionLabel icon="🎟️" label="This week's events" count={events.length} href="/now/events" />
            <ul className="mt-2 space-y-1.5">
              {events.slice(0, 4).map((r) => (
                <li key={r.id}>
                  <Link
                    to={`/${r.category}/${r.subcategory}/${r.id}`}
                    className="block rounded-md border border-gray-100 bg-white px-3 py-2 text-xs transition hover:border-gray-200 hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900">{r.title}</span>
                    <span className="mt-0.5 block text-gray-600 line-clamp-2">{r.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Open exhibitions */}
        {exhibitions.length > 0 && (
          <section>
            <SectionLabel icon="🖼️" label="Open exhibitions" count={exhibitions.length} href="/now/exhibitions" />
            <ul className="mt-2 space-y-1.5">
              {exhibitions.slice(0, 4).map((r) => (
                <li key={r.id}>
                  <Link
                    to={`/${r.category}/${r.subcategory}/${r.id}`}
                    className="block rounded-md border border-gray-100 bg-white px-3 py-2 text-xs transition hover:border-gray-200 hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900">{r.title}</span>
                    <span className="mt-0.5 block text-gray-600 line-clamp-2">{r.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* News */}
      {news.length > 0 && (
        <section>
          <SectionLabel icon="📰" label="News & updates" count={news.length} href="/now/news" />
          <ul className="mt-2 space-y-1.5">
            {news.slice(0, 3).map((r) => (
              <li key={r.id}>
                <Link
                  to={`/${r.category}/${r.subcategory}/${r.id}`}
                  className="block rounded-md border border-gray-100 bg-white px-3 py-2 text-xs transition hover:border-gray-200 hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-900">{r.title}</span>
                  <span className="mt-0.5 block text-gray-600 line-clamp-2">{r.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Live info (sunrise/sunset, etc.) */}
      {live.length > 0 && (
        <section>
          <SectionLabel icon="🕒" label="Live info" count={live.length} href="/now/live" />
          <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {live.slice(0, 4).map((r) => (
              <li key={r.id}>
                <Link
                  to={`/${r.category}/${r.subcategory}/${r.id}`}
                  className="block rounded-md border border-gray-100 bg-white px-3 py-2 text-xs transition hover:border-gray-200 hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-900">{r.title}</span>
                  <span className="mt-0.5 block text-gray-600 line-clamp-1">{r.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

function SectionLabel({
  icon,
  label,
  count,
  href,
}: {
  icon: string
  label: string
  count: number
  href: string
}) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
        <span aria-hidden>{icon}</span>
        {label}
      </h3>
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] font-semibold text-gray-600">
          {count}
        </span>
        <Link to={href} className="text-[10px] text-brand-600 hover:underline">
          All →
        </Link>
      </div>
    </div>
  )
}
