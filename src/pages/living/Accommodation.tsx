
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Accommodation = () => {
  return (
    <Layout>
      <HeroSection
        title="Finding Accommodation"
        subtitle="Guide to finding housing in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Housing in Madrid</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Tips and resources for finding apartments and housing in Madrid.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Accommodation;
