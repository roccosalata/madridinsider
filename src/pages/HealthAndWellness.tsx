
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HealthAndWellness: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Health & Wellness"
        subtitle="Your guide to healthcare and wellness services in Madrid"
      />
      
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Health & Wellness Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Comprehensive health and wellness information for Madrid is coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default HealthAndWellness;
