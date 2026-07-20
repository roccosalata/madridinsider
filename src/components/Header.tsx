import { Link } from './Link'
import { useState } from 'react'
import { usePath } from '../lib/router'

const navLinks = [
  { href: '/essentials', label: 'Essentials' },
  { href: '/living',     label: 'Living' },
  { href: '/see',        label: 'See' },
  { href: '/do',         label: 'Do' },
  { href: '/now',        label: 'Now' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const path = usePath()

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-gray-900"
          aria-label="Madrid Insider — home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-500 text-white">
            <span className="text-xs font-extrabold tracking-tight">MI</span>
          </span>
          <span className="hidden text-base sm:inline">Madrid Insider</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((l) => {
            const active = path === l.href || path.startsWith(l.href + '/')
            return (
              <Link
                key={l.href}
                to={l.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? 'text-brand-600'
                    : 'text-gray-600 hover:text-brand-600'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <nav className="space-y-1 px-4 py-3" aria-label="Mobile">
            {navLinks.map((l) => {
              const active = path === l.href || path.startsWith(l.href + '/')
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    active
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
