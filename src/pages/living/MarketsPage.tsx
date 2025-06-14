
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageNavigatorDropdown from '@/components/PageNavigatorDropdown';

const MarketsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Markets in Madrid"
        subtitle="From bustling flea markets to fresh food stalls, discover Madrid's vibrant market scene"
      />
      
      <div className="container mx-auto py-12 px-4">
        <PageNavigatorDropdown categoryTitle="Living in Madrid" />
        
        <div className="space-y-8">
            <Card>
              <CardHeader>
                  <CardTitle>Flea Markets</CardTitle>
              </CardHeader>
              <CardContent>
                  <p>Discover unique finds and local treasures at Madrid's flea markets. The most famous is El Rastro, held every Sunday, where you can find everything from antiques and vintage clothing to handmade crafts.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                  <CardTitle>Food Markets</CardTitle>
              </CardHeader>
              <CardContent>
                  <p>Explore Madrid's vibrant food markets for fresh produce, gourmet delights, and local flavors. Popular markets include Mercado de San Miguel for tapas and Mercado de la Cebada for a more traditional experience.</p>
              </CardContent>
            </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MarketsPage;
