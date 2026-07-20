import { Link } from './Link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-brand-500 text-[10px] font-extrabold text-white">
            MI
          </span>
          <span>© {year} Madrid Insider — One-Stop Site All About Madrid</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1" aria-label="Footer">
          <Link to="/essentials" className="hover:text-gray-900">Essentials</Link>
          <Link to="/living" className="hover:text-gray-900">Living</Link>
          <Link to="/see" className="hover:text-gray-900">See</Link>
          <Link to="/do" className="hover:text-gray-900">Do</Link>
          <Link to="/now" className="hover:text-gray-900">Now</Link>
          <span aria-hidden className="text-gray-300">·</span>
          <a
            href="https://github.com/roccosalata/madridinsider"
            className="hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source ↗
          </a>
        </nav>
      </div>
    </footer>
  )
}
