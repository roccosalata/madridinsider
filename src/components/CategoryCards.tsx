import { categories } from '../data/categories'

const colorMap: Record<string, { bg: string; text: string; ring: string; chip: string }> = {
  red: {
    bg: 'bg-red-50',
    text: 'text-red-600',
    ring: 'hover:ring-red-200',
    chip: 'bg-red-100 text-red-700',
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    ring: 'hover:ring-blue-200',
    chip: 'bg-blue-100 text-blue-700',
  },
  green: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    ring: 'hover:ring-emerald-200',
    chip: 'bg-emerald-100 text-emerald-700',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    ring: 'hover:ring-purple-200',
    chip: 'bg-purple-100 text-purple-700',
  },
  orange: {
    bg: 'bg-brand-50',
    text: 'text-brand-600',
    ring: 'hover:ring-brand-200',
    chip: 'bg-brand-100 text-brand-700',
  },
}

export default function CategoryCards() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Pick your path into Madrid
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Five ways in. Each one curated, opinionated, and updated regularly
            by people who actually live here.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const c = colorMap[cat.color]
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                id={cat.id}
                className={`group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-card ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-cardHover ${c.ring}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${c.bg}`}
                    aria-hidden
                  >
                    {cat.emoji}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${c.chip}`}
                  >
                    5 guides
                  </span>
                </div>

                <h3 className={`mt-5 text-xl font-bold ${c.text}`}>
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {cat.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  {cat.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 flex-none rounded-full ${c.text.replace('text', 'bg')}`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <span
                  className={`mt-6 inline-flex items-center text-sm font-semibold ${c.text} group-hover:underline`}
                >
                  Explore {cat.title}
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
