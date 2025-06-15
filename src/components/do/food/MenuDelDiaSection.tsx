
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, Phone, MapPin } from 'lucide-react';
import { menuDelDia } from '@/data/do/food/menuDelDia';

const MenuDelDiaSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <CalendarDays className="h-8 w-8 text-madrid-red" />
        Menú del Día
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuDelDia.map(item => (
          <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {item.address}</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-madrid-red" /> {item.schedule}</p>
              {item.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-madrid-red" /> {item.phone}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MenuDelDiaSection;
