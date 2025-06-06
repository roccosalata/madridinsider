
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import NeighborhoodsHub from '@/components/neighborhoods/NeighborhoodsHub';

const Neighborhoods = () => {
  return (
    <Layout>
      <HeroSection
        title="Neighborhoods Guide"
        subtitle="Discover Madrid's diverse districts and areas"
      />
      
      <div className="container mx-auto py-12 px-4">
        <NeighborhoodsHub />
      </div>
    </Layout>
  );
};

export default Neighborhoods;
