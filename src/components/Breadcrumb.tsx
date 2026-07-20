import { Link } from './Link'
import { categoryById, subcategoryUrl } from '../data/categories'
import { recordById } from '../data/records'

export type Crumb = {
  label: string
  to?: string
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-gray-500">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((c, i) => {
          const last = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-1.5">
              {c.to && !last ? (
                <Link to={c.to} className="hover:text-brand-600 hover:underline">
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={last ? 'text-gray-700' : ''}>
                  {c.label}
                </span>
              )}
              {!last && <span aria-hidden>›</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/** Build the breadcrumb trail for a record page. */
export function recordBreadcrumb(
  recordId: string
): Crumb[] {
  const rec = recordById(recordId)
  if (!rec) return [{ label: 'Home', to: '/' }]
  const cat = categoryById(rec.category)
  const sub = cat?.subcategories.find((s) => s.id === rec.subcategory)
  const trail: Crumb[] = [{ label: 'Home', to: '/' }]
  if (cat) trail.push({ label: cat.title, to: `/${cat.id}` })
  if (cat && sub) {
    trail.push({ label: sub.title, to: subcategoryUrl(cat.id, sub.id) })
  }
  trail.push({ label: rec.title })
  return trail
}
