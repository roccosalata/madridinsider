
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Paperwork = () => {
  return (
    <Layout>
      <HeroSection
        title="Paperwork & NIE/TIE"
        subtitle="Essential documentation for living in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Spanish Paperwork & Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Guide to NIE, TIE, and other essential paperwork for residents.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Paperwork;
