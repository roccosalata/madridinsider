
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CategoryHubCard from '@/components/CategoryHubCard';
import { nightlifeCategories } from '@/data/do/nightlifeCategories';

const NightlifePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Nightlife & Bars"
        subtitle="Discover Madrid's vibrant nightlife, from energetic salsa clubs to trendy bars and super-clubs."
      />

      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Explore Nightlife</h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          From sunset drinks on a rooftop to dancing until dawn, find the perfect spot for your night out in Madrid. Choose a category to get started.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {nightlifeCategories.map((category) => {
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
    </Layout>
  );
};

export default NightlifePage;
