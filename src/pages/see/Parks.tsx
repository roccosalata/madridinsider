
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import NeighborhoodsHub from '@/components/neighborhoods/NeighborhoodsHub';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Parks = () => {
  return (
    <Layout>
      <HeroSection
        title="Parks & Gardens"
        subtitle="Beautiful green spaces throughout Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Madrid Parks & Gardens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Discover Retiro Park, Casa de Campo, and other beautiful green spaces in Madrid.</p>
              
              {/* Link to Neighborhoods Hub for park information */}
              <div className="bg-madrid-red/10 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="h-5 w-5 text-madrid-red" />
                  <h3 className="font-bold">Find Parks by Neighborhood</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Each Madrid neighborhood has its own green spaces and parks. Check our neighborhoods guide 
                  to find parks near your accommodation or areas you're exploring.
                </p>
                <Button asChild>
                  <Link to="/see-in-madrid/neighborhoods">Explore Neighborhoods & Their Parks</Link>
                </Button>
              </div>
              
              <p>Detailed park information including opening hours, activities, and accessibility will be added from existing files.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Parks;
