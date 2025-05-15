
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
    </Layout>
  );
};

export default Essentials;
