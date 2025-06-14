
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Umbrella, MapPin, Clock, Phone } from 'lucide-react';
import { terraces, terracesIntro } from '@/data/nightlifeData';

const TerracesSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <Umbrella className="h-8 w-8 text-madrid-red" />
        Terraces / Terrazas
      </h2>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">{terracesIntro}</p>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {terraces.map(terrace => (
          <Card key={terrace.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle>{terrace.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-2 text-sm text-gray-600">
                {terrace.address && <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {terrace.address}</p>}
                {terrace.hours && <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-madrid-red" /> <strong>Hours:</strong> {terrace.hours}</p>}
                {terrace.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-madrid-red" /> {terrace.phone}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TerracesSection;
