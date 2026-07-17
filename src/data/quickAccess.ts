// Single source of truth for quick-access items lives in /data/quickAccess.json.
// This file just gives the JSON a TypeScript type and re-exports it.

import data from '../../data/quickAccess.json'

export type QuickAccessItem = {
  id: string
  title: string
  description: string
  emoji: string
  href: string
}

export const quickAccess: QuickAccessItem[] = data as QuickAccessItem[]
