import { Link } from './Link'
import { useState } from 'react'
import { usePath } from '../lib/router'

// 5 nav links: the 4 content categories + Madrid Now (= homepage).
// Madrid Now is both a nav link AND the homepage content — clicking it
// brings the user back to / where the live Madrid Now feed is displayed.
// See CONSTITUTION.md Amendment 2 (2026-07-20).
const navLinks = [
  { href: '/essentials', label: 'Essentials' },
  { href: '/living',     label: 'Living' },
  { href: '/see',        label: 'See' },
  { href: '/do',         label: 'Do' },
  { href: '/',           label: 'Madrid Now' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const path = usePath()

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo upper-left + wordmark */}
        <Link
          to="/"
          className="flex flex-none items-center gap-2 font-bold text-gray-900"
          aria-label="Madrid Insider — home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-500 text-white shadow-sm">
            <span className="text-sm font-extrabold tracking-tight">MI</span>
          </span>
          <span className="hidden text-base sm:inline">Madrid Insider</span>
        </Link>

        {/* Slogan — hidden on small screens, visible on sm+ */}
        <span
          className="hidden flex-1 truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 sm:inline md:text-[11px] lg:tracking-[0.22em]"
          aria-hidden
        >
          One-Stop Site All About Madrid
        </span>

        {/* 4-category nav — desktop */}
        <nav className="hidden items-center gap-5 md:flex" aria-label="Main">
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

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
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
            <Link
              to="/now"
              onClick={() => setMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50"
            >
              Madrid Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
