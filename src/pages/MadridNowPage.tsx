
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const MadridNowPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Madrid Now"
        subtitle="Current events and what's happening in Madrid right now"
      />
      <div className="container mx-auto py-12 px-4">
        <p>Madrid Now content coming soon.</p>
      </div>
    </Layout>
  );
};

export default MadridNowPage;
