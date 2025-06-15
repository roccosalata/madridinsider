
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import TabSections from '@/components/essentials/TabSections';

const MadridEssentialsPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Madrid Essentials"
        subtitle="Your starting point: What's new, current events, key maps, city layout, and first-timer tips for Madrid."
      />
      
      <div className="container mx-auto px-4 py-8">
        <TabSections />
      </div>
    </Layout>
  );
};

export default MadridEssentialsPage;
