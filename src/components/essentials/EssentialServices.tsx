
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import EnglishRadioCard from "@/components/essentials/EnglishRadioCard";

const EssentialServices = () => (
  <Card id="services">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Phone className="h-5 w-5" />
        Essential Services & Contacts
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
        <p className="text-gray-600">
            For emergencies, police, and lost & found, please see our dedicated <a href="/essentials/emergency-contacts" className="text-madrid-red hover:underline font-semibold">Emergency Contacts page</a>.
        </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold mb-2">Consumer Information (OMIC)</h4>
          <p className="text-sm text-gray-600">
            Mayor, 83, 2 (Metro: Sol)<br />
            Tel: 010
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Tourism Information</h4>
          <div className="text-sm text-gray-600">
            <p><strong>Guía de Madrid</strong><br />
            Info & guides<br />
            <a href="http://www.esmadrid.com" target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">www.esmadrid.com</a><br />
            <a href="http://www.guiademadrid.com" target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">www.guiademadrid.com</a><br />
            <a href="mailto:webmaster@guiademadrid.com" className="text-madrid-red hover:underline">webmaster@guiademadrid.com</a></p>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <EnglishRadioCard />
      </div>
    </CardContent>
  </Card>
);

export default EssentialServices;
