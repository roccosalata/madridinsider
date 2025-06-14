
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CategoryHubCard from '@/components/CategoryHubCard';
import { mainCategories } from '@/data/mainCategories';

const category = mainCategories.find(c => c.title === "See in Madrid");

const SeeMadridPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="See Madrid"
        subtitle="Discover Madrid's iconic landmarks, historical sites, beautiful parks, world-class museums, and vibrant neighborhoods."
      />
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">See & Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {category?.subcategories.map((sub) => (
            <CategoryHubCard
              key={sub.link}
              title={sub.title}
              link={sub.link}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SeeMadridPage;
