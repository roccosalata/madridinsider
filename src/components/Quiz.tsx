import { useState } from 'react'

type Question = {
  q: string
  options: { label: string; value: 'foodie' | 'culture' | 'nightlife' | 'family' }[]
}

const questions: Question[] = [
  {
    q: 'A perfect Madrid morning starts with…',
    options: [
      { label: 'Café con tostada at a bar', value: 'foodie' },
      { label: 'The Prado before the crowds', value: 'culture' },
      { label: 'A walk in Retiro Park', value: 'family' },
      { label: 'Sleeping — last night was long', value: 'nightlife' },
    ],
  },
  {
    q: 'Your Madrid dinner usually ends at…',
    options: [
      { label: 'A barra with one more caña', value: 'foodie' },
      { label: 'A late concert or tablao', value: 'nightlife' },
      { label: 'A bookstore or wine bar', value: 'culture' },
      { label: 'Home with the kids', value: 'family' },
    ],
  },
  {
    q: 'Pick a must-see neighborhood:',
    options: [
      { label: 'La Latina (tapas)', value: 'foodie' },
      { label: 'Barrio de las Letras (literary)', value: 'culture' },
      { label: 'Malasaña (bars & live music)', value: 'nightlife' },
      { label: 'Chamberí (family cafés)', value: 'family' },
    ],
  },
]

type Result = {
  key: 'foodie' | 'culture' | 'nightlife' | 'family'
  title: string
  emoji: string
  description: string
  tips: string[]
}

const results: Record<Result['key'], Result> = {
  foodie: {
    key: 'foodie',
    title: 'You are a Madrid Foodie',
    emoji: '🥘',
    description:
      'You measure cities in plates, pintxos and glasses of vermú. Madrid will not disappoint.',
    tips: [
      'Tapas crawl in La Latina on Sunday',
      'Book Mercado de San Miguel for your first night',
      'Try cocido madrileño at least once',
      'Reserve a barra seat, not a table',
    ],
  },
  culture: {
    key: 'culture',
    title: 'You are a Madrid Culture Vulture',
    emoji: '🎨',
    description:
      'From Velázquez to Vermú, you’re here for the depth. Madrid has more museums per capita than anywhere.',
    tips: [
      'Free entry at the Prado (Mon–Sat 6–8pm, Sun 5–7pm)',
      'Skip-the-line Reina Sofía + Atocha walk',
      'Catch a small concert in Barrio de las Letras',
      'Read up on the Spanish Golden Age before you go',
    ],
  },
  nightlife: {
    key: 'nightlife',
    title: 'You are a Madrid Night Owl',
    emoji: '🦉',
    description:
      'Dinner at 10, drinks at midnight, the club at 3. Madrid starts where other cities call it a night.',
    tips: [
      'Start in Malasaña, end in Chueca or Lavapiés',
      'Dress smart — many clubs reject sneakers',
      'Cope with the mañana: nothing opens before noon',
      'Don’t call it a night before sunrise',
    ],
  },
  family: {
    key: 'family',
    title: 'You are a Madrid Family Explorer',
    emoji: '👨‍👩‍👧‍👦',
    description:
      'Madrid is wonderfully kid-friendly — parks, plazas, and a food culture that even picky eaters love.',
    tips: [
      'Row a boat in Retiro on Sunday',
      'Take the cable car over Casa de Campo',
      'Warner Bros. Park is 30 min by train',
      'Aim for early dinners (8pm) with kids',
    ],
  },
}

export default function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Result['key'][]>([])

  const pick = (val: Result['key']) => {
    const next = [...answers, val]
    setAnswers(next)
    setStep((s) => s + 1)
  }

  const reset = () => {
    setAnswers([])
    setStep(0)
  }

  const tally = answers.reduce<Record<string, number>>((acc, a) => {
    acc[a] = (acc[a] ?? 0) + 1
    return acc
  }, {})

  const winnerKey = (Object.keys(tally) as Result['key'][]).reduce<Result['key']>(
    (best, k) => (tally[k] > (tally[best] ?? -1) ? k : best),
    'foodie',
  )
  const winner = results[winnerKey]
  const done = step >= questions.length

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Discover your Madrid style
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Three quick questions. We’ll match you with the city.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-orange-50 p-6 shadow-card ring-1 ring-gray-100 sm:p-8">
          {!done ? (
            <>
              <div className="mb-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500">
                <span>
                  Question {step + 1} / {questions.length}
                </span>
                <span>{Math.round((step / questions.length) * 100)}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-brand-500 transition-all"
                  style={{ width: `${(step / questions.length) * 100}%` }}
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {questions[step].q}
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {questions[step].options.map((o) => (
                  <button
                    key={o.value + o.label}
                    onClick={() => pick(o.value)}
                    className="rounded-xl border border-gray-200 bg-white p-4 text-left text-sm font-medium text-gray-800 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 hover:shadow-sm"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div>
              <div className="flex items-center gap-4">
                <span className="text-5xl" aria-hidden>
                  {winner.emoji}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    Your Madrid style
                  </p>
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    {winner.title}
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-gray-700">{winner.description}</p>

              <ul className="mt-6 space-y-2">
                {winner.tips.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 rounded-lg bg-white p-3 ring-1 ring-gray-100"
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-sm text-gray-800">{t}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={reset}
                className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Retake the quiz ↺
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
