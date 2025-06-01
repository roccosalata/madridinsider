
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MadridEssentialsPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Madrid Essentials"
        subtitle="Your starting point: What's new, current events, key maps, city layout, and first-timer tips for Madrid."
      />
      
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Madrid Essentials Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Essential information for Madrid is coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MadridEssentialsPage;
