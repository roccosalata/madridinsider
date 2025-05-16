
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import TabSections from '@/components/essentials/TabSections';
import RelatedCategories from '@/components/essentials/RelatedCategories';
import MapHubLink from '@/components/transport/MapHubLink';

const MadridEssentials = () => {
  return (
    <Layout>
      <HeroSection 
        title="Madrid Essentials" 
        subtitle="Your starting point: What's new, current events, key maps, city layout, and first-timer tips for Madrid." 
      />
      
      <div className="container mx-auto px-4 py-8">
        <TabSections />
        
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Maps & Navigation</h2>
          <MapHubLink />
        </div>
        
        <RelatedCategories />
      </div>
    </Layout>
  );
};

export default MadridEssentials;
