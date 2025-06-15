
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import PageNavigatorDropdown from '@/components/PageNavigatorDropdown';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { emergencyContacts, policeStations, otherImportantContacts, lostPropertyOffices } from '@/data/emergencyContacts';
import { Phone, Shield, Building, AlertTriangle, FileQuestion } from 'lucide-react';

const EmergencyContactsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Emergency Contacts"
        subtitle="Important numbers and services for emergencies in Madrid."
      />
      
      <div className="container mx-auto py-12 px-4">
        <PageNavigatorDropdown categoryTitle="Madrid Essentials" />
        
        <div className="space-y-8">
            <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-6 w-6 text-madrid-red" />
                    General Emergency Numbers
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <ul className="space-y-3">
                    {emergencyContacts.map((contact, index) => (
                        <li key={index}>
                            <span className="font-semibold">{contact.service}:</span>{' '}
                            <a href={`tel:${contact.phone}`} className="text-madrid-red hover:underline text-lg font-bold">{contact.phone}</a>
                            <p className="text-sm text-gray-600 pl-2">{contact.description}</p>
                        </li>
                    ))}
                  </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-madrid-red" />
                    Other Important Contacts
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <ul className="space-y-3">
                    {otherImportantContacts.map((contact, index) => (
                        <li key={index}>
                            <span className="font-semibold">{contact.service}:</span>{' '}
                            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-madrid-red hover:underline font-semibold">{contact.phone}</a>
                            {contact.description && <p className="text-sm text-gray-600 pl-2">{contact.description}</p>}
                        </li>
                    ))}
                  </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-madrid-red" />
                    Police Information
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Building className="h-5 w-5 text-gray-700" />
                    Local Police Stations (Comisarías)
                  </h4>
                  <ul className="space-y-3">
                    {policeStations.map((station, index) => (
                        <li key={index} className="border-t pt-3">
                            <p className="font-semibold">{station.name}</p>
                            <p className="text-sm text-gray-600">{station.address}</p>
                            <a href={`tel:${station.phone.replace(/\s/g, '')}`} className="text-sm text-madrid-red hover:underline flex items-center gap-1 mt-1">
                                <Phone className="h-3 w-3" />
                                {station.phone}
                            </a>
                        </li>
                    ))}
                  </ul>
              </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileQuestion className="h-6 w-6 text-madrid-red" />
                        Lost Property
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {lostPropertyOffices.map((office, index) => (
                             <li key={index}>
                                <p className="font-semibold">{office.address}</p>
                                <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-sm text-madrid-red hover:underline flex items-center gap-1 mt-1">
                                    <Phone className="h-3 w-3" />
                                    {office.phone}
                                </a>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </Layout>
  );
};

export default EmergencyContactsPage;
