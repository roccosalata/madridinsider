
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const SeeMadridPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="See Madrid"
        subtitle="Discover the amazing sights and attractions in Madrid"
      />
      <div className="container mx-auto py-12 px-4">
        <p>See Madrid content coming soon.</p>
      </div>
    </Layout>
  );
};

export default SeeMadridPage;
