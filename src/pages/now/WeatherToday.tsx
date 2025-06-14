
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WeatherVisitInfo from '@/components/essentials/WeatherVisitInfo';
import PageNavigatorDropdown from '@/components/PageNavigatorDropdown';

const WeatherToday = () => {
  return (
    <Layout>
      <HeroSection
        title="Weather in Madrid"
        subtitle="Climate information and the best times to visit"
      />
      
      <div className="container mx-auto py-12 px-4">
        <PageNavigatorDropdown categoryTitle="Madrid Now" />
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Today's Weather in Madrid</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center py-4 text-gray-600 text-lg">
              Detailed forecast coming soon.
            </p>
          </CardContent>
        </Card>

        <WeatherVisitInfo />
      </div>
    </Layout>
  );
};

export default WeatherToday;
