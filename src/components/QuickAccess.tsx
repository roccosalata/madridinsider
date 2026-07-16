import { quickAccess } from '../data/quickAccess'

export default function QuickAccess() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Quick access
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The ten things travelers ask us about most — answered, linked, and
            ready in one tap.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {quickAccess.map((q) => (
            <a
              key={q.id}
              href={q.href}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
            >
              <span className="text-3xl" aria-hidden>
                {q.emoji}
              </span>
              <h3 className="mt-3 text-sm font-bold text-gray-900 group-hover:text-brand-600">
                {q.title}
              </h3>
              <p className="mt-1 text-xs text-gray-600">{q.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
