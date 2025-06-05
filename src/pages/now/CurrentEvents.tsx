
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CurrentEvents = () => {
  return (
    <Layout>
      <HeroSection
        title="Current Events"
        subtitle="What's happening in Madrid right now"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Current Events in Madrid</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Stay updated with the latest events, festivals, and happenings in Madrid.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CurrentEvents;
