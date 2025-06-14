
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Martini, MapPin, Clock, Phone } from 'lucide-react';
import { barsAndCafes } from '@/data/nightlifeData';

const BarsAndCafesSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <Martini className="h-8 w-8 text-madrid-red" />
        Bars, Cafés & Cocktails
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {barsAndCafes.map(bar => (
          <Card key={bar.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle>{bar.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700 mb-4">{bar.description}</p>
              <div className="space-y-2 text-sm text-gray-600">
                {bar.address && <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {bar.address}</p>}
                {bar.hours && <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-madrid-red" /> <strong>Hours:</strong> {bar.hours}</p>}
                {bar.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-madrid-red" /> {bar.phone}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BarsAndCafesSection;
