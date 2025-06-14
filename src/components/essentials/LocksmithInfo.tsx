
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Globe, Wrench } from 'lucide-react';

const locksmiths = [
  {
    name: "Madrid Locksmiths (Cerrajeros Madrid)",
    description: "24 hours service. 24/7. Repair & Replacement. We never make people wait, if it has a key talk to us about it, thanks.",
    phones: ["91 534 28 32", "902 73 73 73"],
    website: "http://www.urgemadrid.com"
  },
  {
    name: "Locksmith",
    description: "Twenty-four hour service. If you call them during regular working hours, they won't charge you for the visit, just the fees for changing the locks.",
    phones: ["91 380 1093", "91 303 4138"],
    website: null
  }
];

const LocksmithInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-madrid-red" />
            Locksmiths (Cerrajeros)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {locksmiths.map((locksmith, index) => (
          <div key={index} className={index > 0 ? "border-t pt-4" : ""}>
            <h4 className="font-semibold text-lg mb-2">{locksmith.name}</h4>
            <p className="text-gray-700 mb-3">{locksmith.description}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
              {locksmith.phones.map((phone, i) => (
                <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-madrid-red hover:underline">
                  <Phone className="h-4 w-4" />
                  {phone}
                </a>
              ))}
              {locksmith.website && (
                <a href={locksmith.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-madrid-red hover:underline">
                  <Globe className="h-4 w-4" />
                  Website
                </a>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default LocksmithInfo;
