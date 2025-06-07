
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ArtDistrict {
  name: string;
  description: string;
  walkingTime?: string;
  highlights?: string[];
}

interface ArtDistrictsProps {
  districts: ArtDistrict[];
}

const ArtDistricts = ({ districts }: ArtDistrictsProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Art Districts & Gallery Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {districts.map((district, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle className="text-base">{district.name}</CardTitle>
              <CardDescription>{district.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {district.walkingTime && (
                <p className="text-sm text-gray-600 mb-2">🚶 {district.walkingTime}</p>
              )}
              {district.highlights && (
                <ul className="text-sm space-y-1">
                  {district.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-600">• {highlight}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ArtDistricts;
