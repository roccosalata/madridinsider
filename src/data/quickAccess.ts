// Legacy quick-access data — being phased out in favour of records.

import data from '../../data/quickAccess.json'

export type QuickAccessItem = {
  id: string
  title: string
  description: string
  emoji: string
  href: string
}

export const quickAccess: QuickAccessItem[] = data as QuickAccessItem[]
