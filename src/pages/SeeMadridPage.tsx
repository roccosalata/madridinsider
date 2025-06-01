
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import SightCard from '../components/SightCard';
import { sights as sightsData } from '../data/sightsData';

const SeeMadridPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="See Madrid"
        subtitle="Discover Madrid's iconic landmarks, historical sites, beautiful parks, world-class museums, and more."
      />

      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Sights & Attractions</h1>
        <p className="text-lg mb-12">Discover Madrid's iconic landmarks, historical sites, beautiful parks, world-class museums, and more.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sights-list">
          {sightsData.length > 0 ? (
            sightsData.map(sight => (
              <SightCard key={sight.id} sight={sight} />
            ))
          ) : (
            <p>No sights and attractions listed yet. Please check back soon!</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SeeMadridPage;
