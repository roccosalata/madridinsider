
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Euro } from 'lucide-react';
import { madridSpecialties } from '@/data/do/food/madridSpecialties';

const MadridSpecialtiesSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <Star className="h-8 w-8 text-madrid-red" />
        Madrid Specialties
      </h2>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
        Experience the authentic flavors of Madrid with these traditional dishes that define the city's culinary identity.
      </p>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {madridSpecialties.map(specialty => (
          <Card key={specialty.name} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col ${specialty.mustTry ? 'ring-2 ring-madrid-red/20' : ''}`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="flex-1">{specialty.name}</CardTitle>
                <div className="flex gap-2">
                  {specialty.mustTry && <Badge variant="destructive">Must Try</Badge>}
                  {specialty.vegetarian && <Badge variant="secondary">Vegetarian</Badge>}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-gray-700">{specialty.description}</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Euro className="h-4 w-4 text-madrid-red" />
                  <span className="font-medium">Price:</span> {specialty.price}
                </p>
                <div>
                  <p className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-madrid-red" />
                    <span className="font-medium">Where to find:</span>
                  </p>
                  <ul className="list-disc list-inside text-gray-600 ml-6">
                    {specialty.whereToFind.map((place, index) => (
                      <li key={index}>{place}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MadridSpecialtiesSection;
