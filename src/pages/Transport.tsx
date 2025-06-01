
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const Transport = () => {
  return (
    <Layout>
      <HeroSection
        title="Transport"
        subtitle="Getting around Madrid - metro, bus, taxi and more"
      />
      <div className="container mx-auto py-12 px-4">
        <p>Transport information coming soon.</p>
      </div>
    </Layout>
  );
};

export default Transport;
