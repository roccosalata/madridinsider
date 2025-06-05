
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GettingStarted = () => {
  return (
    <Layout>
      <HeroSection
        title="Getting Started Guide"
        subtitle="Essential first steps for new visitors to Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started in Madrid</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This comprehensive guide will help you navigate your first days in Madrid.
            </p>
            <p>Content will be added from your original site materials.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default GettingStarted;
