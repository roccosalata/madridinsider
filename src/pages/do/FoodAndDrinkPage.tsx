
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CheapEatsSection from '@/components/do/food/CheapEatsSection';
import MenuDelDiaSection from '@/components/do/food/MenuDelDiaSection';
import DinersSection from '@/components/do/food/DinersSection';
import IceCreamSection from '@/components/do/food/IceCreamSection';
import TapasSection from '@/components/do/food/TapasSection';
import VegetarianSection from '@/components/do/food/VegetarianSection';

const FoodAndDrinkPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Food & Dining"
        subtitle="Explore Madrid's vibrant culinary scene"
      />
      
      <div className="container mx-auto py-12 px-4 space-y-16">
        
        <CheapEatsSection />
        <MenuDelDiaSection />
        <DinersSection />
        <IceCreamSection />
        <TapasSection />
        <VegetarianSection />

      </div>
    </Layout>
  );
};

export default FoodAndDrinkPage;
