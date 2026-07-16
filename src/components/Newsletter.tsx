import { useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    // Simulate async submit — wire to your provider of choice (Mailchimp, ConvertKit, Buttondown, etc.)
    window.setTimeout(() => setStatus('success'), 600)
  }

  return (
    <section id="newsletter" className="bg-gray-900 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          The Madrid Insider weekly
        </h2>
        <p className="mt-3 text-lg text-gray-300">
          One short email every Friday. The week’s events, a food tip, a hidden
          spot, and one practical thing you actually need to know.
        </p>

        <form
          onSubmit={submit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === 'error' || status === 'success') setStatus('idle')
            }}
            placeholder="you@example.com"
            className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
            required
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-600 disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : 'Subscribe'}
          </button>
        </form>

        {status === 'error' && (
          <p className="mt-3 text-sm text-red-400">
            Please enter a valid email address.
          </p>
        )}
        {status === 'success' && (
          <p className="mt-3 text-sm text-emerald-400">
            ✓ You’re in. Check your inbox to confirm.
          </p>
        )}
        {status === 'idle' && (
          <p className="mt-3 text-xs text-gray-400">
            No spam, ever. Unsubscribe in one click.
          </p>
        )}
      </div>
    </section>
  )
}
