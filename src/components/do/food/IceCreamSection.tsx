
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IceCreamCone, Phone, MapPin } from 'lucide-react';
import { iceCreamParlours } from '@/data/do/food/iceCream';

const IceCreamSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <IceCreamCone className="h-8 w-8 text-madrid-red" />
        Ice Cream Parlours
      </h2>
       <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">The best ice-creams in Madrid are a refreshing option with their creativity, natural ingredients and careful home-made methods. In long-established patisseries, under a sunshade in a terraza (outdoor seating areas) or in modern and avant-garde atmospheres. Enjoying one of the creamy frozen temptations prepared by the best traditional ice-cream parlours in Madrid is the most gratifying way of defying the heat. There are infinite flavours, from the most traditional to the most unusual and attractive. A genuine culinary pleasure that you won´t be able to resist.</p>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {iceCreamParlours.map(item => (
          <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700 mb-4">{item.description}</p>
               <div className="space-y-2 text-sm text-gray-600">
                {item.address && <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {item.address}</p>}
                {item.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-madrid-red" /> {item.phone}</p>}
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default IceCreamSection;
