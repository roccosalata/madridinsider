
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import PlanetariumIMAXCard from '@/components/do/PlanetariumIMAXCard';
import MagicComedyCard from '@/components/do/MagicComedyCard';
import BullfightsCard from '@/components/do/BullfightsCard';
import FlamencoVenuesCard from '@/components/do/FlamencoVenuesCard';

const Entertainment = () => {
  return (
    <Layout>
      <HeroSection
        title="Entertainment & Shows"
        subtitle="Discover Madrid's vibrant entertainment scene from traditional Spanish experiences to modern attractions"
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="space-y-12">
          {/* Spanish Cultural Experiences */}
          <section>
            <h2 className="text-3xl font-bold mb-2 text-center">Authentic Spanish Experiences</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Immerse yourself in Spain's most iconic cultural traditions right in the heart of Madrid.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BullfightsCard />
              <FlamencoVenuesCard />
            </div>
          </section>

          {/* Entertainment & Activities */}
          <section>
            <h2 className="text-3xl font-bold mb-2 text-center">Entertainment & Activities</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Discover unique entertainment options from science to comedy throughout Madrid.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PlanetariumIMAXCard />
              <MagicComedyCard />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Entertainment;
