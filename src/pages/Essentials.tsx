
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import QuickFacts from '@/components/essentials/QuickFacts';
import VisitTiming from '@/components/essentials/VisitTiming';
import EssentialResources from '@/components/essentials/EssentialResources';
import EssentialTips from '@/components/essentials/EssentialTips';
import EventsSection from '@/components/essentials/EventsSection';

const Essentials = () => {
  return (
    <Layout>
      <HeroSection 
        title="Essential Madrid" 
        subtitle="Everything you need to know for your visit to Madrid" 
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Madrid at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <QuickFacts />
            <VisitTiming />
          </div>

          <EssentialResources />
          <EssentialTips />
        </div>
      </section>

      <EventsSection />

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Madrid Card: The Tourist Card</h2>
          <p className="text-lg mb-4">
            The Madrid Card for tourists enables cardholders to benefit from:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Access to the entire cultural offer in and around Madrid. Free entry to more than 40 of the major museums.</li>
            <li>As many journeys as you wish on the Madrid Visión tour bus.</li>
            <li>All visits which are part of the Discover Madrid programme.</li>
            <li>Madrid Fun Fair, Madrid Zoo and Aquarium, Cable Railway, Faunia, Imax...</li>
            <li>Take a casual stroll wherever you want in the Santiago Bernabéu stadium, thanks to the new Bernabéu Tour.</li>
          </ul>
          <p className="text-lg mb-4">
            Besides, holders of the Madrid Card will obtain considerable discounts in shops, restaurants, shows, nightclubs, discos and leisure centres for children and adults.
          </p>
          <p className="text-lg mb-4">
            With the Madrid Card you will also receive a map of the city and a guide with information on all the companies and institutions associated with the Madrid Card product, together with a brief description, the address, telephone number and, if applicable, information on the discounts they offer.
          </p>
          <p className="text-lg mb-4">
            The ideal compliment to the Madrid Card is the Tourist Travel Pass (not included in the price of the card). Make the most of the Madrid public transport system, with unlimited use of the underground, bus and the Cercanias lines (suburban train network).
          </p>
          <p className="text-lg"><strong>Tel:</strong> 917-130-444 / 915-882-900 | <strong>Website:</strong> <a href="http://www.madridcard.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.madridcard.com</a> | <strong>Email:</strong> <a href="mailto:madridcard@madridcard.com" className="text-blue-600 hover:underline">madridcard@madridcard.com</a></p>
        </div>
      </section>
    </Layout>
  );
};

export default Essentials;
