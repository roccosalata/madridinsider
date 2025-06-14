
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import SightseeingHub from '@/components/sightseeing/SightseeingHub';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark, Clock, Building } from 'lucide-react';

const Sightseeing = () => {
  return (
    <Layout>
      <HeroSection
        title="Sightseeing & Attractions"
        subtitle="Discover Madrid's iconic landmarks and hidden gems"
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-madrid-red">
                <Clock className="h-6 w-6" />
                The Ages of Madrid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">One century, one building. We travel through history visiting places that, due to their architectural value, best represent the essence of Madrid: the Chapel of Santa María de la Antigua, Casa de los Lujanes, the Monastery of the Descalzas Reales, Plaza Mayor, El Prado museum, the Bank of Spain, the Cybele Palace, etc.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-madrid-red">
                <Building className="h-6 w-6" />
                Monumental Madrid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">With a past full of history, Madrid is working hard to preserve the traditions still to be found in its oldest neighbourhoods whilst keeping up with the avant-garde and the future. We invite you to a virtual tour over the historical evolution of Madrid through the buildings and monuments erected at each time.</p>
            </CardContent>
          </Card>
        </div>
        <SightseeingHub />
      </div>
    </Layout>
  );
};

export default Sightseeing;
