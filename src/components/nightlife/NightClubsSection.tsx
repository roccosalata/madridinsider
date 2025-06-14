
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PartyPopper, MapPin, Clock, Ticket } from 'lucide-react';
import { nightClubs } from '@/data/nightlifeData';

const NightClubsSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <PartyPopper className="h-8 w-8 text-madrid-red" />
        Night Clubs & Dancing
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {nightClubs.map(club => (
          <Card key={club.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle>{club.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700 mb-4">{club.description}</p>
              <div className="space-y-2 text-sm text-gray-600">
                {club.address && <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {club.address}</p>}
                {club.hours && <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-madrid-red" /> <strong>Hours:</strong> {club.hours}</p>}
                {club.coverCharge && <p className="flex items-center gap-2"><Ticket className="h-4 w-4 text-madrid-red" /> <strong>Cover Charge:</strong> {club.coverCharge}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NightClubsSection;
