/**
 * Madrid time helpers — Europe/Madrid timezone.
 * Pure formatting utilities; live time is supplied by the component
 * via state + setInterval so the UI updates once per second.
 */

const madridFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Madrid',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

const madridDateFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Europe/Madrid',
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const madridWeekdayFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Europe/Madrid',
  weekday: 'short',
})

const madridMonthFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Europe/Madrid',
  month: 'short',
})

export function formatMadridTime(date: Date): string {
  return madridFormatter.format(date)
}

export function formatMadridDate(date: Date): string {
  return madridDateFormatter.format(date)
}

export function formatMadridWeekday(date: Date): string {
  return madridWeekdayFormatter.format(date)
}

export function formatMadridMonth(date: Date): string {
  return madridMonthFormatter.format(date)
}
