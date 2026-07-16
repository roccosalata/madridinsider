import { useEffect, useState } from 'react'
import { formatMadridTime, formatMadridDate, formatMadridWeekday } from '../lib/madridTime'

type Tile = {
  id: string
  label: string
  value: string
  hint?: string
  icon: string
  tone: 'orange' | 'blue' | 'green' | 'purple'
}

export default function MadridNow() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const tiles: Tile[] = [
    {
      id: 'time',
      label: 'Local time',
      value: formatMadridTime(now),
      hint: formatMadridWeekday(now),
      icon: '🕒',
      tone: 'orange',
    },
    {
      id: 'date',
      label: 'Today',
      value: formatMadridDate(now).split(',').slice(1).join(',').trim(),
      hint: 'Europe/Madrid',
      icon: '📅',
      tone: 'blue',
    },
    {
      id: 'weather',
      label: 'Weather',
      value: '32°C',
      hint: 'Sunny · Feels 33°',
      icon: '☀️',
      tone: 'green',
    },
    {
      id: 'news',
      label: 'Top story',
      value: 'Metro line 8 back to schedule',
      hint: 'Updated 2h ago',
      icon: '📰',
      tone: 'purple',
    },
  ]

  const toneMap: Record<Tile['tone'], string> = {
    orange: 'from-brand-50 to-orange-50 text-brand-700',
    blue: 'from-blue-50 to-sky-50 text-blue-700',
    green: 'from-emerald-50 to-green-50 text-emerald-700',
    purple: 'from-purple-50 to-fuchsia-50 text-purple-700',
  }

  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Madrid right now
            </h2>
            <p className="mt-2 text-gray-600">
              Live data, fresh every minute. Plan your day with what’s actually
              happening.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Updated continuously
          </span>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => (
            <div
              key={t.id}
              className={`rounded-2xl bg-gradient-to-br ${toneMap[t.tone]} p-5 shadow-sm ring-1 ring-white`}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80">
                  {t.label}
                </p>
                <span className="text-xl" aria-hidden>
                  {t.icon}
                </span>
              </div>
              <p
                className="mt-3 text-2xl font-bold text-gray-900"
                aria-live={t.id === 'time' ? 'polite' : 'off'}
              >
                {t.value}
              </p>
              {t.hint && <p className="mt-1 text-xs text-gray-600">{t.hint}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
