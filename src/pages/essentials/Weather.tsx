
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Weather = () => {
  return (
    <Layout>
      <HeroSection
        title="Weather & Climate"
        subtitle="Madrid's weather patterns and seasonal information"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Madrid Weather & Climate</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Seasonal weather information and climate guide for Madrid.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Weather;
