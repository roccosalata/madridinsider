
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import PageNavigatorDropdown from '@/components/PageNavigatorDropdown';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { emergencyContacts, policeContacts, policeStations } from '@/data/emergencyContacts';
import LocksmithInfo from '@/components/essentials/LocksmithInfo';
import { Phone, Shield, Building } from 'lucide-react';

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
                  <ul className="space-y-2">
                    {emergencyContacts.map((contact, index) => (
                        <li key={index}>
                            <span className="font-semibold">{contact.service}:</span>{' '}
                            <a href={`tel:${contact.phone}`} className="text-madrid-red hover:underline">{contact.phone}</a>
                            <p className="text-sm text-gray-600 pl-2">{contact.description}</p>
                        </li>
                    ))}
                  </ul>
              </CardContent>
            </Card>

            <LocksmithInfo />

            <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-madrid-red" />
                    Police Contacts
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <h4 className="font-semibold text-lg mb-2">Key Police Numbers</h4>
                  <ul className="space-y-2 mb-6">
                    {policeContacts.map((contact, index) => (
                        <li key={index}>
                            <span className="font-semibold">{contact.type}:</span>{' '}
                            <a href={`tel:${contact.phone}`} className="text-madrid-red hover:underline">{contact.phone}</a>
                        </li>
                    ))}
                  </ul>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Building className="h-5 w-5 text-gray-700" />
                    Main Police Stations (Comisarías)
                  </h4>
                  <ul className="space-y-3">
                    {policeStations.map((station, index) => (
                        <li key={index} className="border-t pt-3">
                            <p className="font-semibold">{station.name} ({station.district})</p>
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
        </div>
      </div>
    </Layout>
  );
};

export default EmergencyContactsPage;
