
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SportsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Sports & Recreation"
        subtitle="Get active with sports and recreational activities in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Madrid Sports & Recreation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Details about sports venues, teams, and recreational opportunities are coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SportsPage;
