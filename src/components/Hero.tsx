import { useEffect, useState } from 'react'
import { formatMadridTime, formatMadridDate } from '../lib/madridTime'

export default function Hero() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const time = formatMadridTime(now)
  const date = formatMadridDate(now)

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-orange-50">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
              Live from Madrid
            </span>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your complete guide to{' '}
              <span className="text-brand-500">Madrid</span>
            </h1>
            <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-gray-600">
              From first-time tourist essentials to local insider tips, we help
              you experience the real Madrid — its people, food, neighborhoods
              and rhythm.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#essentials"
                className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow-md"
              >
                Start exploring
                <span className="ml-2">→</span>
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all hover:border-gray-400 hover:bg-gray-50"
              >
                Get the weekly guide
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6 text-sm">
              <div>
                <dt className="text-gray-500">Visitors / year</dt>
                <dd className="mt-1 text-xl font-bold text-gray-900">10M+</dd>
              </div>
              <div>
                <dt className="text-gray-500">Sunny days</dt>
                <dd className="mt-1 text-xl font-bold text-gray-900">~300</dd>
              </div>
              <div>
                <dt className="text-gray-500">Tapas bars</dt>
                <dd className="mt-1 text-xl font-bold text-gray-900">∞</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-gray-100 sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Local time, Madrid
                  </p>
                  <p className="mt-1 text-sm text-gray-700">{date}</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  CET / CEST
                </span>
              </div>

              <div className="my-8 flex items-baseline justify-center">
                <span
                  className="font-mono text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl"
                  aria-live="polite"
                >
                  {time}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-gray-100 pt-6 text-sm">
                <div className="rounded-xl bg-gray-50 p-3">
                  <p className="text-gray-500">Today</p>
                  <p className="mt-1 font-semibold text-gray-900">☀️ 32°C / 19°C</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-3">
                  <p className="text-gray-500">AQI</p>
                  <p className="mt-1 font-semibold text-emerald-600">38 — Good</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
