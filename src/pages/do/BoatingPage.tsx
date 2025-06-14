
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { boatingInfo } from '@/data/sportsData';
import { Sailboat, MapPin } from 'lucide-react';

const BoatingPage = () => {
  return (
    <Layout>
      <HeroSection
        title={boatingInfo.title}
        subtitle="Enjoy boating activities in Madrid's parks."
      />
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {boatingInfo.locations.map((location) => (
            <Card key={location.name}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-madrid-red">
                    <Sailboat className="h-6 w-6" />
                    <span>{location.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {location.description && <p className="text-gray-700 mb-4">{location.description}</p>}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{location.address}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BoatingPage;
