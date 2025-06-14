
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { volleyballInfo, tennisInfo } from '@/data/sportsData';
import { Mail } from 'lucide-react';

const OtherSportsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Other Sports in Madrid"
        subtitle="Explore volleyball, tennis, and more in the city."
      />
      <div className="container mx-auto py-12 px-4 space-y-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-madrid-red">
              <span className="text-2xl">{volleyballInfo.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{volleyballInfo.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <span>Contact: {volleyballInfo.contact}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-madrid-red">
              <span className="text-2xl">{tennisInfo.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{tennisInfo.description}</p>
            <p className="text-sm text-gray-600"><strong>More Information:</strong> {tennisInfo.moreInfo}</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default OtherSportsPage;
