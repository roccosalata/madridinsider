
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { bikesInfo } from '@/data/sportsData';
import { Bike, Phone, Globe, Mail, MapPin } from 'lucide-react';

const CyclingPage = () => {
  return (
    <Layout>
      <HeroSection
        title={bikesInfo.title}
        subtitle="Rent, repair or buy a bike in Madrid."
      />
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bikesInfo.services.map((service) => (
            <Card key={service.name}>
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                {service.description && <p className="text-base text-gray-800">{service.description}</p>}
                {service.address && 
                    <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                        <span>{service.address}</span>
                    </div>
                }
                {service.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{service.phone}</span>
                  </div>
                )}
                {service.website && service.website.length > 0 && (
                    <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <a href={`http://${service.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{service.website}</a>
                    </div>
                )}
                 {service.email && service.email.length > 0 && (
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${service.email}`} className="hover:underline">{service.email}</a>
                    </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CyclingPage;
