
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wine, Phone, Mail, MapPin } from 'lucide-react';
import { tapasIntro, tapasTour, tapasBars } from '@/data/do/food/tapas';

const TapasSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <Wine className="h-8 w-8 text-madrid-red" />
        Tapas
      </h2>
      <Card className="mb-8 shadow-lg">
        <CardContent className="pt-6">
          <p className="text-gray-700">{tapasIntro}</p>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        <Card key={tapasTour.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <CardHeader><CardTitle>{tapasTour.name}</CardTitle></CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-700 mb-4">{tapasTour.description}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-madrid-red" /> {tapasTour.phone}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-madrid-red" /> <a href={`mailto:${tapasTour.email}`} className="text-madrid-red hover:underline">{tapasTour.email}</a></p>
            </div>
          </CardContent>
        </Card>
        {tapasBars.map(item => (
          <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader><CardTitle>{item.name}</CardTitle></CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {item.address}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TapasSection;
