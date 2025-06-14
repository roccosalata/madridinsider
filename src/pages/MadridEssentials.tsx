
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CategoryHubCard from '@/components/CategoryHubCard';
import { mainCategories } from '@/data/mainCategories';

const category = mainCategories.find(c => c.title === "Madrid Essentials");

const MadridEssentials = () => {
  return (
    <Layout>
      <HeroSection 
        title="Madrid Essentials" 
        subtitle="Your tourist starting point: Essential information, maps, emergency contacts, and first-timer tips for visiting Madrid." 
      />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Essential Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {category?.subcategories.map((sub) => (
            <CategoryHubCard
              key={sub.link}
              title={sub.title}
              link={sub.link}
              icon={category.icon}
              // Optional: description can be supplied if you want to add more context per subcategory
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MadridEssentials;
