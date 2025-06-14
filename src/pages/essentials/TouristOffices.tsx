
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail, Globe } from 'lucide-react';

const TouristOffices = () => {
  const touristOffices = [
    {
      name: "Duque de Medinaceli",
      address: "Duque de Medinaceli, 2 (Metro: Sevilla)",
      hours: "Monday-Saturday: 9am-7pm\nSunday / Holiday: 9am-3pm",
      website: "www.madrid.org",
      email: "turismo@comadrid.es",
      phone: "902-100-007"
    },
    {
      name: "Madrid Information Tourist Office",
      address: "Plaza Mayor, 3 (Metro: Sol)",
      hours: "Monday-Saturday: 10am-8pm\nSunday / Holiday: 10am-3pm",
      website: "www.munimadrid.es",
      email: "inforturismo@munimadrid.es",
      phone: "915-881-636 / 913-665-477"
    },
    {
      name: "Estacion de Atocha",
      address: "Metro: Atocha Renfe",
      hours: "Daily: 9am-9pm",
      website: "www.madrid.org",
      email: "turismo@comadrid.es",
      phone: "902-100-007 / 913-159-976"
    },
    {
      name: "Estacion de Chamartin",
      address: "Vestibulo, puerta 14 (Metro: Chamartin)",
      hours: "Monday-Saturday: 8am-8pm\nSunday / Holiday: 9am-3pm",
      website: "www.madrid.org",
      email: "turismo@comadrid.es",
      phone: "902-100-007 / 913-159-976"
    },
    {
      name: "Estacion Sur de Autobuses",
      address: "Hall principal (Metro: Mendez Alvaro)",
      hours: "8am-9pm",
      website: "www.madrid.org",
      email: "turismo@comadrid.es",
      phone: "902-100-007 / 913-159-976"
    },
    {
      name: "Mercado Puerta de Toledo",
      address: "Ronda de Toledo, 1 Stand 3134 (Metro: Puerto de Toledo)",
      hours: "Monday-Saturday: 9am-7pm\nSunday / Holiday: 9am-3pm",
      website: "www.madrid.org",
      email: "turismo@comadrid.es",
      phone: "902-100-007"
    },
    {
      name: "Barajas Airport",
      address: "Terminal 1 Arrivals (Metro: Aeropuerto)",
      hours: "Daily: 8am-8pm",
      website: "www.madrid.org",
      email: "turismo@comadrid.es",
      phone: "902-100-007 / 913-058-656"
    }
  ];

  const additionalInfo = [
    {
      name: "Patronato Municipal de Turismo Ayuntamiento de Madrid",
      address: "Mayor, 69 (Metro: Sol / Opera)",
      website: "www.munimadrid.es",
      email: "descubremadrid@munimadrid.es",
      phone: "915-882-900"
    }
  ];

  const phoneLines = [
    "901-300-600 / 902-100-007",
    "10 (From inside Madrid)",
    "915-404-010 (From outside Madrid)",
    "915-881-636"
  ];

  return (
    <Layout>
      <HeroSection
        title="Tourist Offices"
        subtitle="Find maps, recommendations, and information about Madrid's must-see places, exhibitions, and shows at these tourist information points."
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-6">
            You need a map of the city and someone to recommend the places you cannot miss when you are visiting Madrid. 
            You want to know what exhibitions and shows you can go see. You are planning a tour for your friends who will be 
            in town this weekend... Don't think twice, you have to go by or contact one of the tourist information points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {touristOffices.map((office, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-madrid-red text-xl">{office.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-madrid-red mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{office.address}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-madrid-red mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 whitespace-pre-line">{office.hours}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-madrid-red flex-shrink-0" />
                  <p className="text-gray-700">{office.phone}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-madrid-red flex-shrink-0" />
                  <a href={`mailto:${office.email}`} className="text-madrid-red hover:underline">
                    {office.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-madrid-red flex-shrink-0" />
                  <a href={`https://${office.website}`} target="_blank" rel="noopener noreferrer" 
                     className="text-madrid-red hover:underline">
                    {office.website}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-madrid-red">Additional Tourist Information</CardTitle>
          </CardHeader>
          <CardContent>
            {additionalInfo.map((info, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-semibold text-lg">{info.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-madrid-red flex-shrink-0" />
                    <p className="text-gray-700">{info.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-madrid-red flex-shrink-0" />
                    <p className="text-gray-700">{info.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-madrid-red flex-shrink-0" />
                    <a href={`mailto:${info.email}`} className="text-madrid-red hover:underline">
                      {info.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-madrid-red flex-shrink-0" />
                    <a href={`https://${info.website}`} target="_blank" rel="noopener noreferrer" 
                       className="text-madrid-red hover:underline">
                      {info.website}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-madrid-red">Tourist & Cultural Information Lines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {phoneLines.map((line, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-madrid-red flex-shrink-0" />
                  <p className="text-gray-700">{line}</p>
                </div>
              ))}
              <div className="flex items-center gap-3 mt-4">
                <Mail className="h-5 w-5 text-madrid-red flex-shrink-0" />
                <a href="mailto:inforturismo@munimadrid.es" className="text-madrid-red hover:underline">
                  inforturismo@munimadrid.es
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TouristOffices;
