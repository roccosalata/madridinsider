
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CategoryHubCard from '@/components/CategoryHubCard';
import { livingCategories } from '@/data/living/livingCategories';

const LivingMadridPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Living in Madrid"
        subtitle="Your guide to making Madrid your home, from settling in to daily life."
      />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Living in Madrid</h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          From finding a flat to navigating paperwork and enjoying daily life, this section is your comprehensive guide to settling into Madrid. Explore the categories below to find essential information for making Madrid your home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {livingCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <CategoryHubCard
                key={category.slug}
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

export default LivingMadridPage;
