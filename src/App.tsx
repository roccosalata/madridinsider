import { useRoute, useLinkInterceptor } from './lib/router'
import { categories, categoryById } from './data/categories'
import { records } from './data/records'

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import SubcategoryPage from './pages/SubcategoryPage'
import RecordPage from './pages/RecordPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const route = useRoute()
  useLinkInterceptor()

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
