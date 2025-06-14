
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MarketsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Markets in Madrid"
        subtitle="Discover the best traditional and modern markets"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Madrid Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Information about El Rastro, Mercado de San Miguel, and other markets is coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MarketsPage;
