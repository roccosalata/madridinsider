import type { Section, SectionTone } from '../data/records'

// ---------------------------------------------------------------------------
// Tone → Tailwind classes
// ---------------------------------------------------------------------------

const CALLOUT_TONES: Record<SectionTone, { box: string; heading: string; icon: string }> = {
  info:    { box: 'bg-blue-50 border-blue-200',   heading: 'text-blue-900',   icon: 'ℹ️' },
  warning: { box: 'bg-amber-50 border-amber-300', heading: 'text-amber-900',  icon: '⚠️' },
  success: { box: 'bg-emerald-50 border-emerald-200', heading: 'text-emerald-900', icon: '✓' },
  danger:  { box: 'bg-red-50 border-red-200',     heading: 'text-red-900',    icon: '✗' },
}

// ---------------------------------------------------------------------------
// Section heading
// ---------------------------------------------------------------------------

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-8 mb-3 text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
      {children}
    </h2>
  )
}

// ---------------------------------------------------------------------------
// Individual section renderers
// ---------------------------------------------------------------------------

function TextSection({ s }: { s: Extract<Section, { type: 'text' }> }) {
  return (
    <section>
      <SectionHeading>{s.heading}</SectionHeading>
      <div className="space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
        {s.body.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  )
}

function CalloutSection({ s }: { s: Extract<Section, { type: 'callout' }> }) {
  const tone = s.tone ?? 'info'
  const styles = CALLOUT_TONES[tone]
  return (
    <section className={`mt-6 rounded-xl border p-4 sm:p-5 ${styles.box}`}>
      <div className="flex items-start gap-3">
        <span aria-hidden className="text-lg leading-none">{styles.icon}</span>
        <div className="min-w-0 flex-1">
          <p className={`text-sm font-bold sm:text-base ${styles.heading}`}>{s.heading}</p>
          <div className="mt-1.5 space-y-2 text-sm leading-relaxed text-gray-800">
            {s.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection({ s }: { s: Extract<Section, { type: 'stats' }> }) {
  return (
    <section>
      <SectionHeading>{s.heading}</SectionHeading>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {s.items.map((stat, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-3 text-center"
          >
            <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              {stat.label}
            </div>
            <div className="mt-1 text-sm font-bold text-gray-900 sm:text-base">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ListSection({ s, variant }: { s: Extract<Section, { type: 'list' | 'checklist' }>; variant: 'list' | 'checklist' }) {
  return (
    <section>
      <SectionHeading>{s.heading}</SectionHeading>
      <ul className={`grid gap-2 ${variant === 'checklist' ? 'sm:grid-cols-2' : ''}`}>
        {s.items.map((item, i) => (
          <li
            key={i}
            className={`rounded-lg border border-gray-100 bg-white p-3 ${variant === 'checklist' ? 'flex items-start gap-2.5' : 'p-4'}`}
          >
            {variant === 'checklist' && (
              <span
                aria-hidden
                className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700"
              >
                ✓
              </span>
            )}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-900">{item.title}</p>
              {item.body && (
                <p className="mt-0.5 text-xs leading-relaxed text-gray-600 sm:text-sm">{item.body}</p>
              )}
              {item.meta && item.meta.length > 0 && (
                <ul className="mt-1.5 space-y-0.5">
                  {item.meta.map((m, j) => (
                    <li key={j} className="text-[11px] text-gray-500">
                      <span aria-hidden className="mr-1">·</span>{m}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function StepsSection({ s }: { s: Extract<Section, { type: 'steps' }> }) {
  return (
    <section>
      <SectionHeading>{s.heading}</SectionHeading>
      <ol className="space-y-3">
        {s.items.map((step, i) => (
          <li key={i} className="flex gap-3 sm:gap-4">
            <span
              aria-hidden
              className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white sm:h-8 sm:w-8"
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1 border-b border-gray-100 pb-3">
              <p className="text-sm font-bold text-gray-900 sm:text-base">{step.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-700 sm:text-sm">{step.body}</p>
              {step.tip && (
                <div className="mt-2 rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-900">
                  <span className="font-semibold">Tip:</span> {step.tip}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function DoDontSection({ s }: { s: Extract<Section, { type: 'do_dont' }> }) {
  return (
    <section>
      <SectionHeading>{s.heading}</SectionHeading>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
          <p className="mb-2 text-sm font-bold text-emerald-700">✓ Do</p>
          <ul className="space-y-1.5 text-xs text-gray-700 sm:text-sm">
            {s.do.map((d, i) => (
              <li key={i} className="flex gap-1.5">
                <span aria-hidden className="text-emerald-500">·</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50/50 p-4">
          <p className="mb-2 text-sm font-bold text-red-700">✗ Don't</p>
          <ul className="space-y-1.5 text-xs text-gray-700 sm:text-sm">
            {s.dont.map((d, i) => (
              <li key={i} className="flex gap-1.5">
                <span aria-hidden className="text-red-500">·</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function TableSection({ s }: { s: Extract<Section, { type: 'table' }> }) {
  return (
    <section>
      <SectionHeading>{s.heading}</SectionHeading>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              {s.columns.map((col, i) => (
                <th
                  key={i}
                  scope="col"
                  className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-600 sm:px-4 sm:py-2.5 sm:text-xs"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {s.rows.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/60">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-3 py-2 text-xs text-gray-800 sm:px-4 sm:py-2.5 sm:text-sm ${
                      j === 0 ? 'font-medium text-gray-900' : ''
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Dispatcher
// ---------------------------------------------------------------------------

export default function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
    case 'text':      return <TextSection s={section} />
    case 'callout':   return <CalloutSection s={section} />
    case 'stats':     return <StatsSection s={section} />
    case 'checklist': return <ListSection s={section} variant="checklist" />
    case 'list':      return <ListSection s={section} variant="list" />
    case 'steps':     return <StepsSection s={section} />
    case 'do_dont':   return <DoDontSection s={section} />
    case 'table':     return <TableSection s={section} />
    default:
      // Exhaustiveness check — if a new section type is added to the union
      // without a renderer, TypeScript will complain here at build time.
      return null
  }
}
