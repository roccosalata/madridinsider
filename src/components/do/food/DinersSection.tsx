
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Clock, Phone, Mail, Globe, MapPin } from 'lucide-react';
import { diners } from '@/data/do/food/diners';

const DinersSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <Utensils className="h-8 w-8 text-madrid-red" />
        Diners
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {diners.map(item => (
          <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-2 text-sm text-gray-600">
              {item.address && <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {item.address}</p>}
              {item.description && <p className="text-gray-700 mb-2">{item.description}</p>}
              {item.schedule && <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-madrid-red" /> {item.schedule}</p>}
              {item.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-madrid-red" /> {item.phone}</p>}
              {item.email && <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-madrid-red" /> <a href={`mailto:${item.email}`} className="text-madrid-red hover:underline">{item.email}</a></p>}
              {item.website && <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-madrid-red" /> <a href={`http://${item.website}`} target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">{item.website}</a></p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DinersSection;
