// TypeScript wrapper for data/records.json (the production mirror of
// roccosalata/madridinsider-data/data/records.json — the canonical
// content database, kept in sync by `npm run sync-data`).
//
// Schema is documented in /workspace/repos/madridinsider-data/SCHEMA.md.

import data from '../../data/records.json'

export type RecordStatus = 'evergreen' | 'annual review' | 'dynamic' | 'legacy' | 'archived'

export type Record = {
  id: string
  title: string
  category: string
  subcategory: string
  summary: string
  content: string
  last_updated: string
  status: RecordStatus
  official_url: string
  english_friendly: boolean
  related_records: string[]
  tags?: string[]
}

export const records: Record[] = data as Record[]

// ---------- Lookups ----------

export function recordById(id: string): Record | undefined {
  return records.find((r) => r.id === id)
}

export function recordsByCategory(categoryId: string): Record[] {
  return records.filter((r) => r.category === categoryId)
}

export function recordsBySubcategory(categoryId: string, subcategoryId: string): Record[] {
  return records.filter(
    (r) => r.category === categoryId && r.subcategory === subcategoryId
  )
}

export function recordsByTag(tag: string): Record[] {
  return records.filter((r) => r.tags?.includes(tag))
}

export function relatedRecords(id: string): Record[] {
  const r = recordById(id)
  if (!r) return []
  return r.related_records
    .map((rid) => recordById(rid))
    .filter((x): x is Record => Boolean(x))
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

    let score = 0
    const matched: string[] = []

    for (const t of terms) {
      if (title.includes(t)) { score += 10; matched.push('title') }
      if (id === t)        { score += 8 }
      if (id.includes(t))   { score += 4 }
      if (summary.includes(t)) { score += 5; matched.push('summary') }
      if (content.includes(t)) { score += 2; matched.push('content') }
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

  hits.sort((a, b) => b.score - a.score || a.record.title.localeCompare(b.record.title))
  return hits
}
