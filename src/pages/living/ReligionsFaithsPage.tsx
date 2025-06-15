
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { religions } from '@/data/placesOfWorship';
import PlacesOfWorshipList from '@/components/PlacesOfWorshipList';
import { Church } from 'lucide-react';

const ReligionsFaithsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Religions & Faiths"
        subtitle="Find places of worship and spiritual communities in Madrid."
      />
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Church className="h-6 w-6 text-madrid-red" />
              Places of Worship
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-gray-600">
              Madrid is a diverse city with a wide range of religious and spiritual communities. Below is a list of some international and English-speaking places of worship. It's always a good idea to check their websites or call ahead for service times and event schedules.
            </p>
            <PlacesOfWorshipList places={religions} />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ReligionsFaithsPage;
