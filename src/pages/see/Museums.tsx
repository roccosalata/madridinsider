
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Museums = () => {
  return (
    <Layout>
      <HeroSection
        title="Museums & Galleries"
        subtitle="World-class museums and art galleries in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Madrid Museums</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Comprehensive guide to Madrid's famous museums including Prado, Reina Sofia, and more.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Museums;
