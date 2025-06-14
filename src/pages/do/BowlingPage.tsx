
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { bowlingInfo } from '@/data/sportsData';
import { Phone, Globe, MapPin } from 'lucide-react';

const BowlingPage = () => {
  return (
    <Layout>
      <HeroSection
        title={bowlingInfo.title}
        subtitle="Find the best bowling alleys in Madrid."
      />
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bowlingInfo.venues.map((venue) => (
            <Card key={venue.name}>
              <CardHeader>
                <CardTitle>{venue.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                {venue.description && <p className="text-base text-gray-800">{venue.description}</p>}
                <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>{venue.address}</span>
                </div>
                {venue.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{venue.phone}</span>
                  </div>
                )}
                {venue.website && venue.website.length > 0 && (
                    <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <a href={`http://${venue.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{venue.website}</a>
                    </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BowlingPage;
