import { Link } from './Link'
import { useState, useEffect } from 'react'
import type { Record as MRecord } from '../data/records'

/**
 * Madrid Now HIGHLIGHTS — compact teaser for the homepage.
 *
 * Shows just a few highlights (1 most-urgent transit alert + 2 upcoming
 * events + 1 top news headline) + LIVE WEATHER from Open-Meteo API.
 * The full Madrid Now feed lives on the /now page.
 */

type WeatherData = {
  temp: number
  condition: string
  icon: string
  feelsLike: number
  humidity: number
  windSpeed: number
}

// Weather code → emoji + description (Open-Meteo WMO codes)
const WEATHER_CODES: Record<number, { icon: string; desc: string }> = {
  0: { icon: '☀️', desc: 'Clear sky' },
  1: { icon: '🌤️', desc: 'Mainly clear' },
  2: { icon: '⛅', desc: 'Partly cloudy' },
  3: { icon: '☁️', desc: 'Overcast' },
  45: { icon: '🌫️', desc: 'Fog' },
  48: { icon: '🌫️', desc: 'Rime fog' },
  51: { icon: '🌦️', desc: 'Light drizzle' },
  53: { icon: '🌦️', desc: 'Drizzle' },
  55: { icon: '🌧️', desc: 'Heavy drizzle' },
  61: { icon: '🌧️', desc: 'Light rain' },
  63: { icon: '🌧️', desc: 'Rain' },
  65: { icon: '🌧️', desc: 'Heavy rain' },
  71: { icon: '🌨️', desc: 'Light snow' },
  73: { icon: '🌨️', desc: 'Snow' },
  75: { icon: '❄️', desc: 'Heavy snow' },
  80: { icon: '🌦️', desc: 'Rain showers' },
  81: { icon: '🌧️', desc: 'Rain showers' },
  82: { icon: '⛈️', desc: 'Violent showers' },
  95: { icon: '⛈️', desc: 'Thunderstorm' },
  96: { icon: '⛈️', desc: 'Thunderstorm + hail' },
  99: { icon: '⛈️', desc: 'Severe thunderstorm' },
}

export default function MadridNowFeed({ records }: { records: MRecord[] }) {
  const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    // Fetch live weather from Open-Meteo (free, no API key)
    // Madrid: lat 40.4168, lon -3.7038
    fetch('https://api.open-meteo.com/v1/forecast?latitude=40.4168&longitude=-3.7038&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=Europe/Madrid')
      .then(res => res.json())
      .then(data => {
        if (data?.current) {
          const code = data.current.weather_code
          const w = WEATHER_CODES[code] || { icon: '🌡️', desc: 'Unknown' }
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            condition: w.desc,
            icon: w.icon,
            feelsLike: Math.round(data.current.apparent_temperature),
            humidity: data.current.relative_humidity_2m,
            windSpeed: Math.round(data.current.wind_speed_10m),
          })
        }
      })
      .catch(() => {
        // Silent fail — weather is a nice-to-have, not critical
      })
  }, [])

  const transit = records
    .filter((r) => r.category === 'now' && r.subcategory === 'transit')
    .slice(0, 1)
  const events = records
    .filter((r) => r.category === 'now' && r.subcategory === 'events')
    .slice(0, 2)
  const news = records
    .filter((r) => r.category === 'now' && r.subcategory === 'news')
    .slice(0, 1)

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

      {/* Live weather bar — real data from Open-Meteo */}
      {weather && (
        <div className="mt-3 flex items-center gap-4 rounded-lg border border-blue-100 bg-blue-50/40 px-4 py-2.5">
          <span className="text-2xl" aria-hidden>{weather.icon}</span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900">{weather.temp}°C</span>
            <span className="text-xs text-gray-600">{weather.condition}</span>
          </div>
          <span className="text-[10px] text-gray-400">·</span>
          <span className="text-xs text-gray-500">Feels {weather.feelsLike}°C</span>
          <span className="text-[10px] text-gray-400">·</span>
          <span className="text-xs text-gray-500">💧 {weather.humidity}%</span>
          <span className="text-[10px] text-gray-400">·</span>
          <span className="text-xs text-gray-500">💨 {weather.windSpeed} km/h</span>
          <span className="ml-auto text-[10px] text-blue-500">Live</span>
        </div>
      )}

      {/* Compact highlights grid — single row of 3-4 cards */}
      {highlightCount > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {transit.map((r) => (
            <HighlightCard key={r.id} record={r} icon="🚧" label="Transit alert" accent="amber" />
          ))}
          {events.map((r) => (
            <HighlightCard key={r.id} record={r} icon="🎟️" label="This week" accent="brand" />
          ))}
          {news.map((r) => (
            <HighlightCard key={r.id} record={r} icon="📰" label="Top news" accent="blue" />
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
