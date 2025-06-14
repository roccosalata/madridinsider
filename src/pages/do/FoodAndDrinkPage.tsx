
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FoodAndDrinkPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Food & Dining"
        subtitle="Explore Madrid's vibrant culinary scene"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Madrid Food & Dining</CardTitle>
          </CardHeader>
          <CardContent>
            <p>A comprehensive guide to Madrid's restaurants, tapas bars, and culinary experiences is coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FoodAndDrinkPage;
