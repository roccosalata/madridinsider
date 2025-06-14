
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin } from 'lucide-react';

export interface Provider {
  name: string;
  address?: string;
  phone?: string;
  metro?: string;
  note?: string;
  email?: string;
  website?: string;
  specialty?: string;
}

interface ProviderListProps {
  title: string;
  providers: Provider[];
  icon?: React.ReactNode;
}

const ProviderList = ({ title, providers, icon }: ProviderListProps) => (
  <section className="mb-12">
    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
      {icon}
      {title}
    </h3>
    <div className="grid md:grid-cols-2 gap-4">
      {providers.map((item, index) => (
        <Card key={index}>
          <CardContent className="pt-4">
            <h4 className="font-semibold text-madrid-red mb-2">{item.name}</h4>
            <div className="space-y-1 text-sm text-gray-600">
              {item.specialty && <p className="text-sm text-gray-600 mb-2">{item.specialty}</p>}
              {item.address && <p className="flex items-center gap-2"><MapPin className="h-4 w-4 flex-shrink-0" />{item.address}</p>}
              {item.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" />{item.phone}</p>}
              {item.metro && <p>Metro: {item.metro}</p>}
              {item.email && <p>Email: {item.email}</p>}
              {item.website && <p>Website: <a href={`http://${item.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{item.website}</a></p>}
              {item.note && <p className="text-blue-600 font-medium mt-2">{item.note}</p>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default ProviderList;
