
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bath } from 'lucide-react';

const BathsPage = () => {
  const bathInfo = {
    name: "Hammam Baños Arabes",
    address: "Atocha, 14 (Metro: Sol and Tirso de Molina)",
    description: "After a long day of sightseeing in Madrid there´s nothing better than a relaxing bath and a massage in our authentic Hammam. Discover the magic of water and let you seduce into the Arabic atmosphere in the center of Madrid.",
    website: "www.grupoalandalus.com",
    email: "reservasmayrit@grupoalandalus.com",
    phone: "Tel. 902 333 334"
  };

  return (
    <Layout>
      <HeroSection
        title="Baths in Madrid"
        subtitle="Relax and rejuvenate at Madrid's traditional baths and modern spas."
      />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Discover Madrid's Baths</h1>

        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Bath className="h-6 w-6 text-madrid-red" />
              {bathInfo.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-2"><strong>Address:</strong> {bathInfo.address}</p>
            <p className="text-gray-700 mb-4">{bathInfo.description}</p>
            <p className="text-gray-700"><strong>Website:</strong> <a href={`http://${bathInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">{bathInfo.website}</a></p>
            <p className="text-gray-700"><strong>Email:</strong> <a href={`mailto:${bathInfo.email}`} className="text-madrid-red hover:underline">{bathInfo.email}</a></p>
            <p className="text-gray-700"><strong>Phone:</strong> {bathInfo.phone}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">More Baths & Spas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Information about other baths and spas in Madrid will be added here soon.
              You can contribute by providing details for your favorite spots!
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BathsPage;
