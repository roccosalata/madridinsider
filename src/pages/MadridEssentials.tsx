
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import TabSections from '@/components/essentials/TabSections';
import RelatedCategories from '@/components/essentials/RelatedCategories';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Navigation } from 'lucide-react';
import { embassies } from '../data/embassies';
import PlacesOfWorshipList from '@/components/PlacesOfWorshipList';

const MadridEssentials = () => {
  return (
    <Layout>
      <HeroSection 
        title="Madrid Essentials" 
        subtitle="Your starting point: What's new, current events, key maps, city layout, and first-timer tips for Madrid." 
      />
      
      <div className="container mx-auto px-4 py-8">
        <TabSections />
        
        {/* Transport & Maps Hub Link */}
        <section className="my-12">
          <Card className="bg-madrid-red/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-madrid-red">
                <MapPin className="h-6 w-6" />
                Transport & Maps Hub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 mb-4">
                Everything you need to navigate Madrid efficiently - comprehensive transport guides, metro maps, 
                bus routes, and interactive city maps all in one place.
              </p>
              <Button asChild>
                <Link to="/madrid-essentials/transport-maps" className="flex items-center gap-2">
                  <Navigation className="h-4 w-4" />
                  Explore Transport & Maps
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
        
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Emergencies</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Emergency contact information coming soon.</p>
            </CardContent>
          </Card>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Embassies</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4">Find contact information for embassies of several countries in Madrid. This information is loaded from <code>src/data/essentialsData.ts</code>.</p>
              <p className="mb-4">
                Embassies ask you to register with them if you are staying for an extended period of time. Apart from the benefits of official protection this gives you, keeping in touch with your agency can also be a source of information about job opportunities as well as a means of keeping on top of news from home. Contact your embassy with the info above as it can be the easiest way to answer all of your questions about documentation, what to do in an emergency, useful contacts etc.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Post Office & Mail</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Post office and mail information coming soon.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Local Police Stations</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Here you can find information about local police stations and other relevant contacts in Madrid, loaded from our essentials data.</p>
            </CardContent>
          </Card>
        </section>

        <RelatedCategories />
      </div>
    </Layout>
  );
};

export default MadridEssentials;
