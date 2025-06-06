
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import MadridMapsHub from '@/components/maps/MadridMapsHub';

const Maps = () => {
  return (
    <Layout>
      <HeroSection
        title="Maps & Navigation"
        subtitle="Complete navigation guide for every way to travel around Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <MadridMapsHub />
      </div>
    </Layout>
  );
};

export default Maps;
