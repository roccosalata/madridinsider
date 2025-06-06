
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FoodDiningHub from '@/components/food/FoodDiningHub';

const FoodAndDrink = () => {
  return (
    <Layout>
      <HeroSection
        title="Food & Dining"
        subtitle="Discover Madrid's incredible culinary scene"
      />
      
      <div className="container mx-auto py-12 px-4">
        <FoodDiningHub />
      </div>
    </Layout>
  );
};

export default FoodAndDrink;
