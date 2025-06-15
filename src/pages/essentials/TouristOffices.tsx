
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, Users, CheckCircle } from 'lucide-react';
import { touristOffices } from '@/data/practicalInfoData';

const TouristOffices = () => {
  return (
    <Layout>
      <HeroSection
        title="Tourist Offices"
        subtitle="Find maps, recommendations, and information about Madrid's must-see places, exhibitions, and shows at these tourist information points."
      />
      
      <div className="container mx-auto py-12 px-4">
        <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Need a city map, recommendations for can't-miss spots, or info on current exhibitions and shows? Head to one of Madrid's helpful tourist information points.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {touristOffices.map((office, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-madrid-red text-xl">{office.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow flex flex-col">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-madrid-red mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{office.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-madrid-red mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{office.hours}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-madrid-red mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{office.phone}</p>
                </div>

                <div className="mt-auto pt-4">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-600" /> Services Offered</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.services.map(service => <span key={service} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">{service}</span>)}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm"><Users className="h-4 w-4 text-blue-600" /> Languages Spoken</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.languages.map(lang => <span key={lang} className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded-full">{lang}</span>)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TouristOffices;
