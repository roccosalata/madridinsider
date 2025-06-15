
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Globe, Clock, Info, Euro, User } from 'lucide-react';
import { Gym } from '@/data/gymsData';

interface GymListProps {
  gyms: Gym[];
}

const GymList = ({ gyms }: GymListProps) => (
  <div className="space-y-6">
    {gyms.map((gym, index) => (
      <Card key={index}>
        <CardHeader>
          <CardTitle>{gym.name}</CardTitle>
        </CardHeader>
        <CardContent>
          {gym.description && <p className="mb-4 text-gray-700">{gym.description}</p>}
          
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              {gym.address && <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 flex-shrink-0" /><span>{gym.address}</span></p>}
              {gym.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" />{gym.phone}</p>}
              {gym.metro && <p className="flex items-center gap-2"><span className="font-semibold">Metro:</span> {gym.metro}</p>}
              {gym.website && <p className="flex items-center gap-2"><Globe className="h-4 w-4 flex-shrink-0" /><a href={`http://${gym.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{gym.website}</a></p>}
            </div>
            <div className="space-y-2">
              {gym.hours && <p className="flex items-start gap-2"><Clock className="h-4 w-4 mt-1 flex-shrink-0" /><span>{gym.hours}</span></p>}
              {gym.fees && <p className="flex items-start gap-2"><Euro className="h-4 w-4 mt-1 flex-shrink-0" /><span>{gym.fees}</span></p>}
              {gym.contact && <p className="flex items-center gap-2"><User className="h-4 w-4 flex-shrink-0" /><span>Contact: {gym.contact}</span></p>}
              {gym.note && <p className="flex items-start gap-2"><Info className="h-4 w-4 mt-1 flex-shrink-0" /><span className="text-blue-600 font-medium">{gym.note}</span></p>}
            </div>
          </div>

          {gym.prices && (
            <div className="mt-4 pt-4 border-t">
              <h4 className="font-semibold mb-2">Prices:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                {gym.prices.map((price, i) => <li key={i}>{price}</li>)}
              </ul>
            </div>
          )}
          
          {gym.locations && (
            <div className="mt-4 pt-4 border-t">
              <h4 className="font-semibold mb-2">Locations:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {gym.locations.map((loc, i) => (
                  <div key={i} className="p-2 border rounded-md text-sm">
                    <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 flex-shrink-0" /><span>{loc.address}</span></p>
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" />{loc.tel}</p>
                    {loc.metro && <p><span className="font-semibold">Metro:</span> {loc.metro}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
);

export default GymList;
