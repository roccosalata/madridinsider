
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Nightlife = () => {
  return (
    <Layout>
      <HeroSection
        title="Nightlife & Bars"
        subtitle="Madrid's vibrant nightlife scene"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Madrid Nightlife</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Explore Madrid's famous nightlife, bars, clubs, and late-night dining scene.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Nightlife;
