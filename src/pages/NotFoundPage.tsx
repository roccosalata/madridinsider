import { Link } from '../components/Link'

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">404</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 text-sm text-gray-600 sm:text-base">
        That URL doesn't match any record. It may have been renamed, or
        the link may be out of date.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
        <Link
          to="/"
          className="rounded-md bg-brand-500 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-brand-600"
        >
          Go home
        </Link>
        <Link
          to="/essentials"
          className="rounded-md border border-gray-200 bg-white px-4 py-2 font-semibold text-gray-700 transition hover:bg-gray-50"
        >
          Madrid Essentials
        </Link>
        <Link
          to="/see"
          className="rounded-md border border-gray-200 bg-white px-4 py-2 font-semibold text-gray-700 transition hover:bg-gray-50"
        >
          See in Madrid
        </Link>
      </div>
    </div>
  )
}
