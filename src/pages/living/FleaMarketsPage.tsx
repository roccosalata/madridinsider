
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageNavigatorDropdown from '@/components/PageNavigatorDropdown';

const FleaMarketsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Flea Markets in Madrid"
        subtitle="Discover unique finds and local treasures at Madrid's flea markets"
      />
      
      <div className="container mx-auto py-12 px-4">
        <PageNavigatorDropdown categoryTitle="Living in Madrid" />
        <Card>
          <CardHeader>
            <CardTitle>Madrid's Flea Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Information about El Rastro, Madrid's most famous flea market, and other local markets is coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FleaMarketsPage;
