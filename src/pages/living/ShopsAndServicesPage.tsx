
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CategoryHubCard from '@/components/CategoryHubCard';
import { shopCategories } from '@/data/shops';

const ShopsAndServicesPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Shops & Services"
        subtitle="Essential shops and services for daily life in Madrid."
      />
      
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop & Service Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {shopCategories.map(category => (
            <CategoryHubCard
              key={category.title}
              title={category.title}
              link={category.link}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ShopsAndServicesPage;
