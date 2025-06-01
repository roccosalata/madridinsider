
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import TabSections from '@/components/essentials/TabSections';
import RelatedCategories from '@/components/essentials/RelatedCategories';
import { embassies } from '../data/essentialsData';
import PlacesOfWorshipList from '@/components/PlacesOfWorshipList';
import { Card, CardContent } from '@/components/ui/card';
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
        
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Emergencies</h2>
          <p className="mb-4">Emergency contact information is coming soon.</p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Embassies</h2>
          <p className="mb-4">Find contact information for embassies of several countries in Madrid.</p>
          <p className="mb-4">
            Embassies ask you to register with them if you are staying for an extended period of time. Apart from the benefits of official protection this gives you, keeping in touch with your agency can also be a source of information about job opportunities as well as a means of keeping on top of news from home.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Post Office & Mail</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Post office and mail information is coming soon.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Local Police Stations</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Here you can find information about local police stations and other relevant contacts in Madrid.</p>
            </CardContent>
          </Card>
        </section>

        <RelatedCategories />
      </div>
    </Layout>
  );
};

export default MadridEssentials;
