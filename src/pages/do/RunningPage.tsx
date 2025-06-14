
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { runningInfo } from '@/data/sportsData';
import { Footprints, Mail } from 'lucide-react';

const RunningPage = () => {
  return (
    <Layout>
      <HeroSection
        title={runningInfo.title}
        subtitle="Join running communities and explore the best routes in Madrid."
      />
      <div className="container mx-auto py-12 px-4 space-y-12">
        {runningInfo.clubs.map(club => (
          <Card key={club.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-madrid-red">
                <Footprints className="h-6 w-6" />
                <span className="text-2xl">{club.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4 whitespace-pre-wrap">{club.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{club.contact}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default RunningPage;
