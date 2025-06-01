
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SeeDoExplorePage: React.FC = () => {
  const { primaryCategory, secondCategory } = useParams<{ primaryCategory: string, secondCategory: string }>();

  return (
    <Layout>
      <HeroSection
        title={secondCategory ? secondCategory.replace(/-/g, ' ') : 'Category'}
        subtitle={`Explore the various options within ${secondCategory ? secondCategory.replace(/-/g, ' ').toLowerCase() : 'this category'}.`}
      />
      
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>{secondCategory ? secondCategory.replace(/-/g, ' ') : 'Category'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Content for this category is coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SeeDoExplorePage;
