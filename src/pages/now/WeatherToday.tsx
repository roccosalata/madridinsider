
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WeatherToday = () => {
  return (
    <Layout>
      <HeroSection
        title="Weather Today"
        subtitle="Current weather conditions in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Today's Weather in Madrid</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Current weather conditions and forecast for Madrid.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default WeatherToday;
