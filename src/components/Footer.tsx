const footerLinks = [
  {
    title: 'Explore',
    links: [
      { label: 'Madrid Essentials', href: '#essentials' },
      { label: 'Living in Madrid', href: '#living' },
      { label: 'See in Madrid', href: '#see' },
      { label: 'Do in Madrid', href: '#do' },
      { label: 'Madrid Now', href: '#now' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Quick access', href: '#quick' },
      { label: 'Madrid quiz', href: '#quiz' },
      { label: 'Newsletter', href: '#newsletter' },
      { label: 'Contact', href: 'mailto:hello@madridinsider.com' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About us', href: '#about' },
      { label: 'Editorial standards', href: '#standards' },
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2 font-bold text-gray-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white shadow-sm">
                <span className="text-sm font-extrabold tracking-tight">MI</span>
              </span>
              <span className="text-lg">Madrid Insider</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-gray-600">
              Your comprehensive English-language guide to Madrid, written by
              people who live here. Updated for 2026.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-gray-600 transition-colors hover:text-brand-600"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-gray-100 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Madrid Insider. All rights reserved.</p>
          <p>
            Made with <span className="text-brand-500">♥</span> in Madrid
          </p>
        </div>
      </div>
    </footer>
  )
}
