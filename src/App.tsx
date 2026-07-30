import { useRoute, useLinkInterceptor } from './lib/router'
import { categories, categoryById, subsubFromSlug } from './data/categories'
import { records } from './data/records'
import { useEffect } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import SubcategoryPage from './pages/SubcategoryPage'
import SubSubcategoryPage from './pages/SubSubcategoryPage'
import RecordPage from './pages/RecordPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const route = useRoute()
  useLinkInterceptor()

  // Dynamic SEO — update document title and meta tags per route
  useSEO(route)

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-brand-500 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" className="min-h-[calc(100vh-4rem)]">
        {renderRoute(route)}
      </main>
      <Footer />
    </div>
  )
}

/**
 * Dynamic SEO — updates <title> and <meta> tags based on the current route.
 */
function useSEO(route: ReturnType<typeof useRoute>) {
  useEffect(() => {
    let title = 'Madrid Insider — The English-language operating manual for Madrid'
    let description = 'The English-language operating manual for Madrid. Visas, transport, housing, museums, tapas, metro, and what is happening this week. All records link to official sources.'

    switch (route.name) {
      case 'home':
        title = 'Madrid Insider — One-Stop Site All About Madrid'
        description = 'Your English-language directory for Madrid, Spain. Five categories: Essentials, Living, See, Do, and Madrid Now. Live weather, events, transit alerts, and 424+ records with official links.'
        break
      case 'category': {
        const cat = categoryById(route.categoryId)
        if (cat) {
          title = `${cat.title} — Madrid Insider`
          description = cat.description
        }
        break
      }
      case 'subcategory': {
        const cat = categoryById(route.categoryId)
        if (cat) {
          const sub = cat.subcategories.find((s) => (s.slug ?? s.id) === route.subcategorySlug)
          if (sub) {
            title = `${sub.title} — ${cat.title} — Madrid Insider`
            description = sub.summary
          }
        }
        break
      }
      case 'subsubcategory': {
        const cat = categoryById(route.categoryId)
        if (cat) {
          const sub = cat.subcategories.find((s) => (s.slug ?? s.id) === route.subcategorySlug)
          if (sub) {
            const scoped = records.filter(
              (r) => r.category === cat.id && r.subcategory === sub.id
            )
            const name = subsubFromSlug(route.subsubSlug, scoped)
            if (name) {
              title = `${name} — ${sub.title} — ${cat.title} — Madrid Insider`
              description = `${name} group within ${sub.title}. ${scoped.filter(r => (r as Record<string, unknown>).subsubcategory === name).length} records.`
            }
          }
        }
        break
      }
      case 'record': {
        const rec = records.find((r) => r.id === route.recordId)
        if (rec) {
          title = `${rec.title} — Madrid Insider`
          description = rec.summary
        }
        break
      }
      case 'notfound':
        title = 'Page not found — Madrid Insider'
        description = 'The page you are looking for does not exist.'
        break
    }

    document.title = title

    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', description)
    } else {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      metaDesc.setAttribute('content', description)
      document.head.appendChild(metaDesc)
    }

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)
  }, [route])
}

function renderRoute(route: ReturnType<typeof useRoute>) {
  switch (route.name) {
    case 'home':
      return <HomePage categories={categories} records={records} />
    case 'category': {
      const cat = categoryById(route.categoryId)
      if (!cat) return <NotFoundPage />
      return <CategoryPage category={cat} records={records} />
    }
    case 'subcategory': {
      const cat = categoryById(route.categoryId)
      if (!cat) return <NotFoundPage />
      const sub = cat.subcategories.find(
        (s) => (s.slug ?? s.id) === route.subcategorySlug
      )
      if (!sub) return <NotFoundPage />
      return (
        <SubcategoryPage
          category={cat}
          subcategory={sub}
          records={records.filter(
            (r) => r.category === cat.id && r.subcategory === sub.id
          )}
        />
      )
    }
    case 'subsubcategory': {
      const cat = categoryById(route.categoryId)
      if (!cat) return <NotFoundPage />
      const sub = cat.subcategories.find(
        (s) => (s.slug ?? s.id) === route.subcategorySlug
      )
      if (!sub) return <NotFoundPage />
      const scoped = records.filter(
        (r) => r.category === cat.id && r.subcategory === sub.id
      )
      const name = subsubFromSlug(route.subsubSlug, scoped)
      if (!name) return <NotFoundPage />
      const groupRecords = scoped.filter(
        (r) => (r as Record<string, unknown>).subsubcategory === name
      )
      return (
        <SubSubcategoryPage
          category={cat}
          subcategory={sub}
          subsubName={name}
          records={groupRecords}
        />
      )
    }
    case 'record': {
      const rec = records.find((r) => r.id === route.recordId)
      if (!rec) return <NotFoundPage />
      const cat = categoryById(rec.category)
      const sub = cat?.subcategories.find((s) => s.id === rec.subcategory)
      if (!cat || !sub) return <NotFoundPage />
      return (
        <RecordPage
          record={rec}
          category={cat}
          subcategory={sub}
          allRecords={records}
        />
      )
    }
    case 'notfound':
      return <NotFoundPage />
  }
}
