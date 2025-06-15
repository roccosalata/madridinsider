
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe } from 'lucide-react';

const ProfessionalServicesInfo = () => (
  <Card id="professional-services">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Globe className="h-5 w-5" />
        Professional Services
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div>
        <h4 className="font-semibold mb-1">Bojagi Event Planning & Consulting</h4>
        <p className="text-sm text-gray-600">
          Organization of conventions, meetings, parties... etc.<br />
          Tel: 915-439-168<br />
          <a href="http://www.bojagievents.com" target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">www.bojagievents.com</a>
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-1">Night Travel Services</h4>
        <p className="text-sm text-gray-600">
          Cea Bermudez, 20 (Metro: Canal)<br />
          Night tours in Madrid: Flamenco, Routes, Modern Service, VIP Service, Magic Routes, Personalized Routes.<br />
          Tel: 915-352-821
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-1">Spanish Language Learning</h4>
        <p className="text-sm text-gray-600">
          <a href="http://www.howtolearnspanish.co.uk" target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">www.howtolearnspanish.co.uk</a>
        </p>
      </div>
    </CardContent>
  </Card>
);

export default ProfessionalServicesInfo;
