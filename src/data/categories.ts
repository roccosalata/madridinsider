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
