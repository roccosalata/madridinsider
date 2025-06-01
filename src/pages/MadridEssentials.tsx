
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import MapHubLink from '@/components/transport/MapHubLink';
import UsefulInformation from '@/components/essentials/UsefulInformation';
import WeatherVisitInfo from '@/components/essentials/WeatherVisitInfo';
import SpanishCustomsInfo from '@/components/essentials/SpanishCustomsInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MadridEssentials = () => {
  return (
    <Layout>
      <HeroSection 
        title="Madrid Essentials" 
        subtitle="Your starting point: Essential information, maps, weather, and first-timer tips for Madrid." 
      />
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="first-timer" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="first-timer">First-Timer Tips</TabsTrigger>
            <TabsTrigger value="weather">Weather & Visit</TabsTrigger>
            <TabsTrigger value="customs">Spanish Culture</TabsTrigger>
            <TabsTrigger value="maps">Maps & Navigation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="first-timer">
            <Card>
              <CardContent className="pt-6">
                <UsefulInformation />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weather">
            <Card>
              <CardContent className="pt-6">
                <WeatherVisitInfo />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customs">
            <Card>
              <CardContent className="pt-6">
                <SpanishCustomsInfo />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="maps">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Maps & Navigation</h3>
                <MapHubLink />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Emergency & Safety Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Emergency Contacts</h3>
                <ul className="space-y-2">
                  <li><strong>General Emergency:</strong> 112</li>
                  <li><strong>Police:</strong> 091</li>
                  <li><strong>Medical Emergency:</strong> 061</li>
                  <li><strong>Fire Department:</strong> 080</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Tourist Police</h3>
                <p className="text-sm mb-2">Specialized help for tourists</p>
                <p><strong>Phone:</strong> 915 48 85 37</p>
                <p><strong>Location:</strong> Calle Leganitos, 19</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Embassy Contacts</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4">Embassy contact information and registration services for international visitors.</p>
              <p className="text-sm text-gray-600">Detailed embassy listings coming soon.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Essential Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Post Office & Mail</h3>
                <p className="text-sm text-gray-600">Post office locations and mail services information coming soon.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Internet & WiFi</h3>
                <p className="text-sm text-gray-600">Free WiFi locations and internet access guide coming soon.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MadridEssentials;
