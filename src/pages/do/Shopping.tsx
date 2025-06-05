
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Shopping = () => {
  return (
    <Layout>
      <HeroSection
        title="Shopping Districts"
        subtitle="Best shopping areas and districts in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Madrid Shopping</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Guide to shopping districts, markets, and retail areas throughout Madrid.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Shopping;
