
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageNavigatorDropdown from '@/components/PageNavigatorDropdown';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const MarketsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Food Markets in Madrid"
        subtitle="Discover fresh produce, gourmet delights, and local flavors"
      />
      
      <div className="container mx-auto py-12 px-4">
        <PageNavigatorDropdown categoryTitle="Do in Madrid" />
        <Card>
          <CardHeader>
            <CardTitle>Madrid's Food Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Information about Mercado de San Miguel, Mercado de la Cebada, and other food markets is coming soon.</p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Looking for Flea Markets?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">
              For antiques, vintage clothing, and one-of-a-kind items, explore Madrid's famous flea markets, including the iconic El Rastro.
            </p>
            <Button asChild>
              <Link to="/living-in-madrid/flea-markets" className="flex items-center gap-2">
                Explore Flea Markets <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MarketsPage;
