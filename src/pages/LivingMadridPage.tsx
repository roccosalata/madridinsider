
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CategoryHubCard from '@/components/CategoryHubCard';
import { mainCategories } from '@/data/mainCategories';

const category = mainCategories.find(c => c.title === "Living in Madrid");

const LivingMadridPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Living in Madrid"
        subtitle="Your guide to making Madrid your home, from settling in to daily life."
      />
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Living Topics</h2>
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

export default LivingMadridPage;
