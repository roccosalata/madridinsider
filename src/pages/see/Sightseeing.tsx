
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import SightseeingHub from '@/components/sightseeing/SightseeingHub';

const Sightseeing = () => {
  return (
    <Layout>
      <HeroSection
        title="Sightseeing & Attractions"
        subtitle="Discover Madrid's iconic landmarks and hidden gems"
      />
      
      <div className="container mx-auto py-12 px-4">
        <SightseeingHub />
      </div>
    </Layout>
  );
};

export default Sightseeing;
