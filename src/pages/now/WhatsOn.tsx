
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import WhatsOnContent from '@/components/essentials/WhatsOnContent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';
import PageNavigatorDropdown from '@/components/PageNavigatorDropdown';

const WhatsOn = () => {
  return (
    <Layout>
      <HeroSection
        title="What's On in Madrid"
        subtitle="Your guide to current happenings, seasonal events, and local tips"
      />
      <div className="container mx-auto py-12 px-4">
        <PageNavigatorDropdown categoryTitle="Madrid Now" />
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Newspaper className="h-6 w-6 text-madrid-red" />
              What's On in Madrid
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <WhatsOnContent />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default WhatsOn;
