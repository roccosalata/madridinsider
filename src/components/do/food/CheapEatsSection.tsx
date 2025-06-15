
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Utensils, MapPin } from 'lucide-react';
import { cheapEats } from '@/data/do/food/cheapEats';

const CheapEatsSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <Utensils className="h-8 w-8 text-madrid-red" />
        Cheap Eats
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {cheapEats.map(item => (
          <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription className="flex items-center gap-2 pt-1"><MapPin className="h-4 w-4" />{item.address}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CheapEatsSection;
