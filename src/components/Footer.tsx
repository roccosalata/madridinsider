import { Link } from './Link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>© {year} Madrid Insider. An English-language guide to Madrid.</p>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1" aria-label="Footer">
          <Link to="/essentials" className="hover:text-gray-900">Essentials</Link>
          <Link to="/living" className="hover:text-gray-900">Living</Link>
          <Link to="/see" className="hover:text-gray-900">See</Link>
          <Link to="/do" className="hover:text-gray-900">Do</Link>
          <Link to="/now" className="hover:text-gray-900">Now</Link>
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
