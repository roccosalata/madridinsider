// Minimal History API router — no dependencies, no providers.
//
// Usage:
//   const route = useRoute()
//   if (route.name === 'record') return <RecordPage record={route.params.record} />
//
// Navigation: import { navigate } and call navigate('/essentials/transportation/metro-de-madrid')

import { useEffect, useState } from 'react'
import { categoryById } from '../data/categories'
import { recordById } from '../data/records'

export type Route =
  | { name: 'home' }
  | { name: 'category'; categoryId: string }
  | { name: 'subcategory'; categoryId: string; subcategorySlug: string }
  | {
      name: 'record'
      categoryId: string
      subcategorySlug: string
      recordId: string
    }
  | { name: 'notfound'; path: string }

function currentPath(): string {
  // With base: '/' and a custom domain, the pathname is what we want.
  // If the app was opened via the 404.html trick, the path is preserved
  // in the search string as ?p=...; resolve that here.
  if (typeof window === 'undefined') return '/'
  const fromQuery = new URLSearchParams(window.location.search).get('p')
  if (fromQuery) {
    return fromQuery.startsWith('/') ? fromQuery : `/${fromQuery}`
  }
  return window.location.pathname || '/'
}

export function usePath(): string {
  const [path, setPath] = useState<string>(currentPath)
  useEffect(() => {
    const onPop = () => setPath(currentPath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return path
}

export function navigate(to: string, opts?: { replace?: boolean }): void {
  if (typeof window === 'undefined') return
  if (to === currentPath()) return
  if (opts?.replace) {
    window.history.replaceState({}, '', to)
  } else {
    window.history.pushState({}, '', to)
  }
  // dispatch popstate so usePath updates
  window.dispatchEvent(new PopStateEvent('popstate'))
  // ensure the new view is scrolled to the top
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
}

/** Intercept in-app <a> clicks and use navigate() instead of full page loads. */
export function useLinkInterceptor(): void {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // Only left-click without modifiers
      if (e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

      let el = e.target as HTMLElement | null
      while (el && el.tagName !== 'A') el = el.parentElement
      const a = el as HTMLAnchorElement | null
      if (!a) return

      const href = a.getAttribute('href')
      if (!href) return
      // Skip external, mailto, tel, anchor, target=_blank
      if (a.target === '_blank') return
      if (href.startsWith('http://') || href.startsWith('https://')) return
      if (href.startsWith('mailto:') || href.startsWith('tel:')) return
      if (href.startsWith('#')) return
      if (a.hasAttribute('download')) return
      if (a.dataset['external'] === 'true') return

      e.preventDefault()
      navigate(href)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])
}

/**
 * Parse a pathname into a Route. The string is split into segments and
 * matched against the canonical categories / subcategories / records.
 */
export function matchRoute(path: string): Route {
  const segments = path.split('/').map(decodeURIComponent).filter(Boolean)

  if (segments.length === 0) return { name: 'home' }

  if (segments.length === 1) {
    const cat = categoryById(segments[0])
    return cat ? { name: 'category', categoryId: cat.id } : { name: 'notfound', path }
  }

  if (segments.length === 2) {
    const cat = categoryById(segments[0])
    if (!cat) return { name: 'notfound', path }
    const sub = cat.subcategories.find((s) => (s.slug ?? s.id) === segments[1])
    return sub
      ? { name: 'subcategory', categoryId: cat.id, subcategorySlug: sub.slug ?? sub.id }
      : { name: 'notfound', path }
  }

  if (segments.length === 3) {
    const cat = categoryById(segments[0])
    if (!cat) return { name: 'notfound', path }
    const sub = cat.subcategories.find((s) => (s.slug ?? s.id) === segments[1])
    if (!sub) return { name: 'notfound', path }
    const rec = recordById(segments[2])
    if (rec && rec.category === cat.id && rec.subcategory === sub.id) {
      return {
        name: 'record',
        categoryId: cat.id,
        subcategorySlug: sub.slug ?? sub.id,
        recordId: rec.id,
      }
    }
    return { name: 'notfound', path }
  }

  return { name: 'notfound', path }
}

export function useRoute(): Route {
  const path = usePath()
  // Re-derive the route whenever the path changes. Wrapping in a useMemo-
  // style recompute is intentionally simple — matchRoute is cheap.
  return matchRoute(path)
}
