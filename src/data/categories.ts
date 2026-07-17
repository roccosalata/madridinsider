// Single source of truth for the site's content lives in /data/*.json
// (kept at the repo root, not in src/, so it's easy to find and edit).
// This file just gives the JSON a TypeScript type and re-exports it.

import data from '../../data/categories.json'

export type Category = {
  id: string
  title: string
  description: string
  emoji: string
  color: 'red' | 'blue' | 'green' | 'purple' | 'orange'
  bullets: string[]
}

export const categories: Category[] = data as Category[]
