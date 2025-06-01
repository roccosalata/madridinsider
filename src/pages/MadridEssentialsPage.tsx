
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const MadridEssentialsPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Madrid Essentials"
        subtitle="Everything you need to know about Madrid"
      />
      <div className="container mx-auto py-12 px-4">
        <p>Madrid Essentials content coming soon.</p>
      </div>
    </Layout>
  );
};

export default MadridEssentialsPage;
