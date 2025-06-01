
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Transport: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Getting Around Madrid"
        subtitle="Your complete guide to Madrid's transportation system"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Transportation Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Transportation information for Madrid is coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Transport;
