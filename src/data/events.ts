// Legacy events data — being phased out in favour of records in
// data/records.json under category=now, subcategory=events.

import data from '../../data/events.json'

export type MadridEvent = {
  id: string
  title: string
  date: string
  day: string
  month: string
  venue: string
  category: 'Music' | 'Culture' | 'Food' | 'Sport' | 'Family'
  free: boolean
}

export const thisWeekEvents: MadridEvent[] = data as MadridEvent[]
