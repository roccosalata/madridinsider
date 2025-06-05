
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Maps = () => {
  return (
    <Layout>
      <HeroSection
        title="Maps & Navigation"
        subtitle="Essential maps and navigation tools for Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Madrid Maps & Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Interactive maps, metro maps, and navigation guides for Madrid.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Maps;
