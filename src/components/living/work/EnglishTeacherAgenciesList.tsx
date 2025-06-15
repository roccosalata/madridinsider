
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Globe, Printer } from 'lucide-react';
import { EnglishTeacherAgency } from '@/data/living/englishTeacherAgencies';

interface EnglishTeacherAgenciesListProps {
  agencies: EnglishTeacherAgency[];
}

const EnglishTeacherAgenciesList: React.FC<EnglishTeacherAgenciesListProps> = ({ agencies }) => (
  <Card>
    <CardHeader>
      <CardTitle>English Teacher Agencies</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {agencies.map((agency) => (
          <div key={agency.name}>
            <h4 className="font-semibold text-madrid-red mb-2">{agency.name}</h4>
            <div className="space-y-1 text-sm text-gray-700">
              {agency.address?.map(addr => <p key={addr}>{addr}</p>)}
              {agency.tel?.map(phone => <p key={phone} className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" />{phone}</p>)}
              {agency.email && agency.email.split(',').map(e => <a key={e.trim()} href={`mailto:${e.trim()}`} className="flex items-center gap-2 text-blue-600 hover:underline break-all"><Mail className="h-4 w-4 flex-shrink-0" />{e.trim()}</a>)}
              {agency.website && <a href={!agency.website.startsWith('http') ? `http://${agency.website}` : agency.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline"><Globe className="h-4 w-4 flex-shrink-0" />{agency.website}</a>}
              {agency.fax && <p className="flex items-center gap-2"><Printer className="h-4 w-4 flex-shrink-0" />Fax: {agency.fax}</p>}
              {agency.contact && <p>{agency.contact}</p>}
              {agency.notes && <p className="text-xs italic mt-1">{agency.notes}</p>}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default EnglishTeacherAgenciesList;
