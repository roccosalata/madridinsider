
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Parks = () => {
  return (
    <Layout>
      <HeroSection
        title="Parks & Gardens"
        subtitle="Beautiful green spaces throughout Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Madrid Parks & Gardens</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover Retiro Park, Casa de Campo, and other beautiful green spaces in Madrid.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Parks;
