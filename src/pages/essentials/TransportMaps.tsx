
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TransportHub from '@/components/transport/TransportHub';
import MadridMapsHub from '@/components/maps/MadridMapsHub';

const TransportMaps = () => {
  return (
    <Layout>
      <HeroSection
        title="Transport & Maps"
        subtitle="Everything you need to navigate Madrid efficiently - from public transport guides to comprehensive maps"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Tabs defaultValue="transport" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="transport">Transport Guide</TabsTrigger>
            <TabsTrigger value="maps">Maps & Navigation</TabsTrigger>
          </TabsList>

          <TabsContent value="transport" className="mt-6">
            <TransportHub />
          </TabsContent>

          <TabsContent value="maps" className="mt-6">
            <MadridMapsHub />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default TransportMaps;
