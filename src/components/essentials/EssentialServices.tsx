
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone } from 'lucide-react';

const EssentialServices = () => (
  <Card id="services">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Phone className="h-5 w-5" />
        Essential Services & Contacts
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-semibold text-red-800 mb-2">Emergency Services</h4>
          <p className="text-sm text-red-700">
            <strong>Emergency phone service: 112</strong><br />
            Available toll-free from any phone. Tell the operator the problem type (medical, fire, criminal) 
            and they'll connect you to the appropriate department. They can even transfer you over to an English-speaking operator if your English happens to be better than your Spanish in an emergency situation.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Consumer Information (OMIC)</h4>
          <p className="text-sm text-gray-600">
            Mayor, 83, 2 (Metro: Sol)<br />
            Tel: 010
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Lost & Found</h4>
          <div className="text-sm text-gray-600 space-y-2">
            <p>Paseo del Molino, 7<br />Tel: 91 527 9590</p>
            <p>Plaza de Legazpi, 7 (Metro: Legazpi)<br />Tel: 915-884-346</p>
          </div>
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
    </CardContent>
  </Card>
);

export default EssentialServices;
