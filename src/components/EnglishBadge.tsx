import { englishLevel, type EnglishLevel } from '../data/records'

// 4-tier English availability badge.
//
// IMPORTANT: tier 4 (spanish-only) is NOT a negative — it's Madrid Insider's
// primary value proposition. We provide English access to resources that are
// only available in Spanish for Madrid locals. The badge celebrates this,
// it doesn't warn against it.
//
// See AGENT_INSTRUCTIONS.md Rule #4 for the tier definitions.

const TIER_STYLES: Record<EnglishLevel, { label: string; classes: string; title: string }> = {
  'english-primary': {
    label: 'EN ★',
    classes: 'bg-amber-100 text-amber-800 ring-1 ring-amber-300',
    title: 'English-primary: the official source is primarily in English, or has a complete English version',
  },
  'english-available': {
    label: 'EN',
    classes: 'bg-emerald-100 text-emerald-700',
    title: 'English-available: the official source has a dedicated English version',
  },
  'english-partial': {
    label: 'EN ~',
    classes: 'bg-yellow-100 text-yellow-800',
    title: 'English-partial: some English info available, most content Spanish',
  },
  'spanish-only': {
    // POSITIVE framing: this is our value-add. We translate Madrid's
    // Spanish-only resources into English. The gold/amber color signals
    // "premium" / "insider" — the same treatment as english-primary.
    label: 'MI',
    classes: 'bg-brand-100 text-brand-800 ring-1 ring-brand-300',
    title: 'Madrid Insider translation: the official source is Spanish-only — we have translated the essentials above. Visit the official site for full details (browser auto-translate helps).',
  },
}

export default function EnglishBadge({
  record,
  className = '',
}: {
  record: { english_friendly: boolean; english_level?: EnglishLevel }
  className?: string
}) {
  const level = englishLevel(record as Parameters<typeof englishLevel>[0])
  const style = TIER_STYLES[level]
  return (
    <span
      className={`inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${style.classes} ${className}`}
      title={style.title}
      aria-label={`English availability: ${level.replace('-', ' ')}`}
    >
      {style.label}
    </span>
  )
}
