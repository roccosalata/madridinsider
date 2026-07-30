// TypeScript wrapper for data/categories.json.
// See SCHEMA.md (in madridinsider-data) for the schema.

import data from '../../data/categories.json'

export type Subcategory = {
  id: string
  slug?: string
  title: string
  icon: string
  summary: string
  tips?: string                    // optional practical advice shown on subcategory page
}

export type Category = {
  id: string
  title: string
  description: string
  emoji: string
  color: 'red' | 'blue' | 'green' | 'purple' | 'orange'
  subcategories: Subcategory[]
}

export const categories: Category[] = data as Category[]

// ---------- Lookups ----------

export function categoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}

export function subcategoryById(
  categoryId: string,
  subcategoryId: string
): Subcategory | undefined {
  return categoryById(categoryId)?.subcategories.find((s) => s.id === subcategoryId)
}

/** Resolve the URL slug for a subcategory, falling back to its id. */
export function subcategorySlug(
  categoryId: string,
  subcategoryId: string
): string {
  const sub = subcategoryById(categoryId, subcategoryId)
  return sub?.slug ?? sub?.id ?? subcategoryId
}

// ---------- URL helpers ----------

export function categoryUrl(categoryId: string): string {
  return `/${categoryId}`
}

export function subcategoryUrl(categoryId: string, subcategoryId: string): string {
  return `/${categoryId}/${subcategorySlug(categoryId, subcategoryId)}`
}

export function recordUrl(
  categoryId: string,
  subcategoryId: string,
  recordId: string
): string {
  return `/${categoryId}/${subcategorySlug(categoryId, subcategoryId)}/${recordId}`
}

// ---------- Counts ----------

export function categoryRecordCount(categoryId: string, allRecords: { category: string }[]): number {
  return allRecords.filter((r) => r.category === categoryId).length
}

export function subcategoryRecordCount(
  categoryId: string,
  subcategoryId: string,
  allRecords: { category: string; subcategory: string }[]
): number {
  return allRecords.filter(
    (r) => r.category === categoryId && r.subcategory === subcategoryId
  ).length
}

// ---------- Sub-subcategory (group) helpers ----------

/** Convert a subsubcategory display name to a URL slug. */
export function subsubSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Build the URL for a subsubcategory group page. */
export function subsubUrl(
  categoryId: string,
  subcategoryId: string,
  subsubName: string
): string {
  return `/${categoryId}/${subcategorySlug(categoryId, subcategoryId)}/${subsubSlug(subsubName)}`
}

/** Find the subsubcategory display name from a URL slug, given matching records. */
export function subsubFromSlug(
  slug: string,
  scopedRecords: { subsubcategory?: string }[]
): string | undefined {
  const names = new Set(
    scopedRecords
      .map((r) => r.subsubcategory)
      .filter((n): n is string => !!n)
  )
  for (const name of names) {
    if (subsubSlug(name) === slug) return name
  }
  return undefined
}

/** Get distinct subsubcategory names from a list of records. */
export function distinctSubsubs(
  scopedRecords: { subsubcategory?: string }[]
): string[] {
  const names = new Set(
    scopedRecords
      .map((r) => r.subsubcategory)
      .filter((n): n is string => !!n)
  )
  return Array.from(names).sort()
}
