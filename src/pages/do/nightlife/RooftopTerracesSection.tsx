
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { rooftopTerraceVenues } from '@/data/nightlifeData';

const RooftopTerracesSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        {rooftopTerraceVenues.icon}
        {rooftopTerraceVenues.title}
      </h2>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">{rooftopTerraceVenues.description}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooftopTerraceVenues.venues.map(venue => (
          <Card key={venue.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle>{venue.name}</CardTitle>
              <CardDescription className="flex items-center gap-2 pt-1"><MapPin className="h-4 w-4" />{venue.address}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700">{venue.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RooftopTerracesSection;
