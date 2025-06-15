
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TalentAgency } from '@/data/living/talentAgencies';
import { Phone, Mail, Globe, MapPin, Printer, User } from 'lucide-react';

interface TalentAgenciesListProps {
  agencies: TalentAgency[];
}

const TalentAgenciesList: React.FC<TalentAgenciesListProps> = ({ agencies }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Talent Agencies</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {agencies.map((agency, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="pt-4 flex-grow flex flex-col">
                <h4 className="font-semibold text-madrid-red mb-2">{agency.name}</h4>
                <div className="space-y-1 text-sm text-gray-700 flex-grow">
                  {agency.address && <p className="flex items-start gap-2"><MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" /><span>{agency.address}{agency.metro && ` (Metro: ${agency.metro})`}</span></p>}
                  {agency.contactPerson && <p className="flex items-center gap-2"><User className="h-4 w-4 flex-shrink-0" />{agency.contactPerson}</p>}
                  {agency.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" />{agency.phone}</p>}
                  {agency.fax && <p className="flex items-center gap-2"><Printer className="h-4 w-4 flex-shrink-0" />{agency.fax}</p>}
                  {agency.email && <a href={`mailto:${agency.email}`} className="flex items-center gap-2 text-blue-600 hover:underline"><Mail className="h-4 w-4 flex-shrink-0" />{agency.email}</a>}
                  {agency.website && <a href={agency.website.startsWith('http') ? agency.website : `http://${agency.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline"><Globe className="h-4 w-4 flex-shrink-0" />{agency.website}</a>}
                  {agency.notes && <p className="text-sm text-blue-600 font-medium mt-2">{agency.notes}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TalentAgenciesList;
