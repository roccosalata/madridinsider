
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { embassies } from '@/data/embassies';
import { Globe, Phone, MapPin, Mail } from 'lucide-react';

const EmbassiesPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Embassies & Consulates"
        subtitle="Contact information for foreign embassies in Madrid."
      />
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Embassy Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-gray-600">
              Most embassies ask you to register with them if you are staying for an extended period of time. Apart from the benefits of official protection this gives you, keeping in touch with your agency can also be a source of information about job opportunities as well as a means of keeping on top of news from home. Contact your embassy as it can be the easiest way to answer all of your questions about documentation, what to do in an emergency, useful contacts etc.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {embassies.map((embassy, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{embassy.country}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1 text-gray-600 flex-shrink-0" />
                      <p>{embassy.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-600 flex-shrink-0" />
                      <a href={`tel:${embassy.phone.replace(/\s/g, '')}`} className="text-madrid-red hover:underline">{embassy.phone}</a>
                    </div>
                    {embassy.website && (
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-gray-600 flex-shrink-0" />
                        <a href={embassy.website.startsWith('http') ? embassy.website : `http://${embassy.website}`} target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline break-all">{embassy.website}</a>
                      </div>
                    )}
                    {embassy.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-600 flex-shrink-0" />
                        <a href={`mailto:${embassy.email}`} className="text-madrid-red hover:underline break-all">{embassy.email}</a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default EmbassiesPage;
