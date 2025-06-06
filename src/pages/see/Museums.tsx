
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import MuseumsHub from '@/components/museums/MuseumsHub';

const Museums = () => {
  return (
    <Layout>
      <HeroSection
        title="Museums & Galleries"
        subtitle="World-class museums and art galleries in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <MuseumsHub />
      </div>
    </Layout>
  );
};

export default Museums;
