// Single source of truth for events lives in /data/events.json.
// This file just gives the JSON a TypeScript type and re-exports it.

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
