
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceOfWorship } from '@/data/essentialsData';

interface PlacesOfWorshipListProps {
  places: PlaceOfWorship[];
}

const PlacesOfWorshipList: React.FC<PlacesOfWorshipListProps> = ({ places }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {places.map((place, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">{place.name}</CardTitle>
            <p className="text-sm text-gray-600">{place.religion}</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2">{place.address}</p>
            {place.phone && <p className="text-sm mb-1"><strong>Phone:</strong> {place.phone}</p>}
            {place.website && (
              <p className="text-sm mb-1">
                <strong>Website:</strong> 
                <a href={place.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  {place.website}
                </a>
              </p>
            )}
            {place.notes && <p className="text-sm text-gray-600 mt-2">{place.notes}</p>}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PlacesOfWorshipList;
