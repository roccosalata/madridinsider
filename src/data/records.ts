// TypeScript wrapper for data/records.json (the production mirror of
// roccosalata/madridinsider-data/data/records.json — the canonical
// content database, kept in sync by `npm run sync-data`).
//
// Schema is documented in madridinsider-data/SCHEMA.md.

import data from '../../data/records.json'

export type RecordStatus = 'evergreen' | 'annual review' | 'dynamic' | 'legacy' | 'archived'

// ---------- English availability tiers ----------
//
// 4-tier system layered on top of the legacy `english_friendly` boolean.
// The boolean stays as a derived field (true for tiers 1-3, false for
// tier 4) so existing records keep working — they default to tier 2
// (`english-available`) when `english_level` is missing.
//
// Tier 1 — english-primary:    Official source is primarily English,
//                              OR has a complete English version with
//                              full content parity. (US Embassy Madrid,
//                              English-language churches, Prado /en)
// Tier 2 — english-available:  Official source has a dedicated English
//                              version (may be incomplete or summary).
//                              (Metro /en, Atocha info)
// Tier 3 — english-partial:    Some English info (basic page, key
//                              facts), most content Spanish.
//                              (Some govt services, smaller museums)
// Tier 4 — spanish-only:       No English from the official source. We
//                              describe it in English on Madrid Insider
//                              but the user needs Spanish/Translate to
//                              actually use the resource.
//                              (Empadronamiento, EOI, public healthcare)

export type EnglishLevel = 'english-primary' | 'english-available' | 'english-partial' | 'spanish-only'

// Numeric rank for sorting (1 = best, 4 = worst). Lower sorts first.
// Note: using `{ [K in EnglishLevel]: number }` instead of `Record<EnglishLevel, number>`
// because we also export a type named `Record` which shadows the built-in utility.
export const ENGLISH_LEVEL_RANK: { [K in EnglishLevel]: number } = {
  'english-primary':   1,
  'english-available': 2,
  'english-partial':   3,
  'spanish-only':      4,
}

// Default tier for records that have english_friendly=true but no
// explicit english_level. These will be audited in salvage pass 2.
const DEFAULT_TIER: EnglishLevel = 'english-available'

/** Resolve the english_level of a record, defaulting missing values. */
export function englishLevel(r: Record): EnglishLevel {
  if (r.english_level) return r.english_level
  return r.english_friendly ? DEFAULT_TIER : 'spanish-only'
}

// ---------- Structured content sections ----------
//
// A record may carry an optional `sections` array. When present, the
// record page renders these structured blocks instead of the flat
// `content` string. The `content` field is always required (it powers
// search and is used as a fallback).
//
// Each section has a `type` discriminator and type-specific fields.

export type SectionTone = 'info' | 'warning' | 'success' | 'danger'

export type StatItem = { label: string; value: string }

export type ListItem = {
  title: string
  body?: string
  meta?: string[]   // small grey sub-lines (e.g. "Metro: Callao", "Mon–Fri 9–14")
}

export type StepItem = {
  title: string
  body: string
  tip?: string       // optional highlighted tip inside a step
}

export type Section =
  | { type: 'text';     heading: string; body: string }
  | { type: 'callout';  heading: string; body: string; tone?: SectionTone }
  | { type: 'stats';    heading: string; items: StatItem[] }
  | { type: 'checklist'; heading: string; items: ListItem[] }
  | { type: 'list';     heading: string; items: ListItem[] }
  | { type: 'steps';    heading: string; items: StepItem[] }
  | { type: 'do_dont';  heading: string; do: string[]; dont: string[] }
  | { type: 'table';    heading: string; columns: string[]; rows: string[][] }

export type Record = {
  id: string
  title: string
  category: string
  subcategory: string
  summary: string
  content: string                 // always required (search + fallback)
  last_updated: string
  status: RecordStatus
  official_url: string
  english_friendly: boolean              // derived: true for tiers 1-3
  english_level?: EnglishLevel           // optional but recommended (4-tier)
  related_records: string[]
  tags?: string[]
  sections?: Section[]                   // optional. if present, renderer uses this
}

export const records: Record[] = data as Record[]

// ---------- Lookups ----------
//
// All listing functions sort by English tier first (tier 1 → 4) so
// English-friendly records surface above Spanish-only ones, then
// alphabetically by title. This implements the project's English-first
// content priority (see AGENT_INSTRUCTIONS.md).

function sortByEnglishThenTitle(a: Record, b: Record): number {
  const rankA = ENGLISH_LEVEL_RANK[englishLevel(a)]
  const rankB = ENGLISH_LEVEL_RANK[englishLevel(b)]
  if (rankA !== rankB) return rankA - rankB
  return a.title.localeCompare(b.title)
}

export function recordById(id: string): Record | undefined {
  return records.find((r) => r.id === id)
}

export function recordsByCategory(categoryId: string): Record[] {
  return records.filter((r) => r.category === categoryId).sort(sortByEnglishThenTitle)
}

export function recordsBySubcategory(categoryId: string, subcategoryId: string): Record[] {
  return records
    .filter((r) => r.category === categoryId && r.subcategory === subcategoryId)
    .sort(sortByEnglishThenTitle)
}

export function recordsByTag(tag: string): Record[] {
  return records.filter((r) => r.tags?.includes(tag)).sort(sortByEnglishThenTitle)
}

export function relatedRecords(id: string): Record[] {
  const r = recordById(id)
  if (!r) return []
  return r.related_records
    .map((rid) => recordById(rid))
    .filter((x): x is Record => Boolean(x))
    .sort(sortByEnglishThenTitle)
}

// ---------- Search ----------

export type SearchHit = {
  record: Record
  score: number
  matchedFields: string[]
}

/**
 * Case-insensitive substring search across title, summary, content, tags.
 * Returns matches ordered by score (title hits > summary > content > tags).
 */
export function searchRecords(query: string, opts?: {
  category?: string
  subcategory?: string
}): SearchHit[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const terms = q.split(/\s+/).filter(Boolean)

  const hits: SearchHit[] = []
  for (const r of records) {
    if (opts?.category && r.category !== opts.category) continue
    if (opts?.subcategory && r.subcategory !== opts.subcategory) continue

    const title = r.title.toLowerCase()
    const summary = r.summary.toLowerCase()
    const content = r.content.toLowerCase()
    const tags = (r.tags ?? []).map((t) => t.toLowerCase())
    const id = r.id.toLowerCase()

    // Flatten the structured sections into a single searchable string
    // so search hits also match content that only lives in `sections`.
    const sectionsText = (r.sections ?? []).map((s) => {
      switch (s.type) {
        case 'text':
        case 'callout':
          return `${s.heading} ${s.body}`.toLowerCase()
        case 'stats':
          return `${s.heading} ${s.items.map((i) => `${i.label} ${i.value}`).join(' ')}`.toLowerCase()
        case 'checklist':
        case 'list':
          return `${s.heading} ${s.items.map((i) => `${i.title} ${i.body ?? ''} ${(i.meta ?? []).join(' ')}`).join(' ')}`.toLowerCase()
        case 'steps':
          return `${s.heading} ${s.items.map((i) => `${i.title} ${i.body} ${i.tip ?? ''}`).join(' ')}`.toLowerCase()
        case 'do_dont':
          return `${s.heading} ${s.do.join(' ')} ${s.dont.join(' ')}`.toLowerCase()
        case 'table':
          return `${s.heading} ${s.columns.join(' ')} ${s.rows.map((row) => row.join(' ')).join(' ')}`.toLowerCase()
      }
    }).join(' ')

    let score = 0
    const matched: string[] = []

    for (const t of terms) {
      if (title.includes(t)) { score += 10; matched.push('title') }
      if (id === t)        { score += 8 }
      if (id.includes(t))   { score += 4 }
      if (summary.includes(t)) { score += 5; matched.push('summary') }
      if (content.includes(t)) { score += 2; matched.push('content') }
      if (sectionsText.includes(t)) { score += 2; matched.push('sections') }
      if (tags.some((tag) => tag.includes(t))) {
        score += 3
        matched.push('tag')
      }
    }

    if (score > 0) {
      hits.push({
        record: r,
        score,
        matchedFields: Array.from(new Set(matched)),
      })
    }
  }

  // Sort by raw score first, then break ties using English tier
  // (English-primary > available > partial > spanish-only), then
  // alphabetically. This implements the project's English-first policy
  // for search results.
  hits.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score
    const rankA = ENGLISH_LEVEL_RANK[englishLevel(a.record)]
    const rankB = ENGLISH_LEVEL_RANK[englishLevel(b.record)]
    if (rankA !== rankB) return rankA - rankB
    return a.record.title.localeCompare(b.record.title)
  })
  return hits
}
