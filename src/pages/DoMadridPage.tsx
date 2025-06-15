
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CategoryHubCard from '@/components/CategoryHubCard';
import { doCategories } from '@/data/do/doCategories';

const DoMadridPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Do in Madrid"
        subtitle="Experience Madrid's vibrant culture through food, nightlife, markets, entertainment, and recreational activities."
      />

      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">What to Do in Madrid</h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Dive into the heart of Spanish culture. Whether you're a foodie, a night owl, a culture enthusiast, or seeking recreation, Madrid has something for everyone.
        </p>
        
        {/* Main Category Hubs */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {doCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <CategoryHubCard
                  key={category.link}
                  title={category.title}
                  link={category.link}
                  icon={<IconComponent className="h-8 w-8 mb-2 text-madrid-red" />}
                  description={category.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DoMadridPage;
