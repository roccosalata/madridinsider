import Header from './components/Header'
import Hero from './components/Hero'
import CategoryCards from './components/CategoryCards'
import MadridNow from './components/MadridNow'
import EventsSection from './components/EventsSection'
import QuickAccess from './components/QuickAccess'
import Quiz from './components/Quiz'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <MadridNow />
        <CategoryCards />
        <EventsSection />
        <QuickAccess />
        <Quiz />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
