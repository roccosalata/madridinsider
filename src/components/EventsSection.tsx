import { thisWeekEvents } from '../data/events'

const categoryColor: Record<string, string> = {
  Music: 'bg-purple-100 text-purple-700',
  Culture: 'bg-blue-100 text-blue-700',
  Food: 'bg-brand-100 text-brand-700',
  Sport: 'bg-emerald-100 text-emerald-700',
  Family: 'bg-pink-100 text-pink-700',
}

export default function EventsSection() {
  return (
    <section id="now" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What’s on this week
            </h2>
            <p className="mt-2 text-gray-600">
              Hand-picked concerts, festivals, matches and food events happening
              in the next 7 days.
            </p>
          </div>
          <a
            href="#newsletter"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Get the weekly digest →
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {thisWeekEvents.map((evt) => (
            <article
              key={evt.id}
              className="group flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
            >
              <div className="flex h-16 w-16 flex-none flex-col items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  {evt.month}
                </span>
                <span className="text-2xl font-extrabold leading-none">
                  {evt.day}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                      categoryColor[evt.category] ?? 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {evt.category}
                  </span>
                  {evt.free && (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                      Free
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-base font-bold leading-snug text-gray-900 group-hover:text-brand-600">
                  {evt.title}
                </h3>
                <p className="mt-1 truncate text-sm text-gray-600">{evt.venue}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
