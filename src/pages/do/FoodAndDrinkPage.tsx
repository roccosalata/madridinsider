
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { foodSubCategories } from '@/data/do/food/foodSubCategories';

import CheapEatsSection from '@/components/do/food/CheapEatsSection';
import MenuDelDiaSection from '@/components/do/food/MenuDelDiaSection';
import DinersSection from '@/components/do/food/DinersSection';
import IceCreamSection from '@/components/do/food/IceCreamSection';
import TapasSection from '@/components/do/food/TapasSection';
import VegetarianSection from '@/components/do/food/VegetarianSection';

const sectionComponents: Record<string, React.FC> = {
  'Cheap Eats': CheapEatsSection,
  'Menu del Dia': MenuDelDiaSection,
  'Diners': DinersSection,
  'Ice Cream Parlours': IceCreamSection,
  'Tapas': TapasSection,
  'Vegetarian Food': VegetarianSection,
};

type FoodSectionTitle = keyof typeof sectionComponents;

const FoodAndDrinkPage = () => {
  const [selectedSection, setSelectedSection] = useState<FoodSectionTitle | null>(null);

  const handleSelectSection = (section: FoodSectionTitle) => {
    setSelectedSection(section);
    window.scrollTo(0, 0);
  };

  const handleGoBack = () => {
    setSelectedSection(null);
    window.scrollTo(0, 0);
  };
  
  const HubView = () => (
    <>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
        Madrid's culinary scene is a feast for the senses. From traditional tapas crawls and budget-friendly eats to gourmet markets and modern dining, there's a flavor for every palate. Explore the categories to start your gastronomic adventure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodSubCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card 
              key={category.title} 
              className="flex flex-col hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleSelectSection(category.title as FoodSectionTitle)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-madrid-red">
                  <Icon className="h-8 w-8" />
                  <span className="text-xl">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700">{category.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );

  const DetailView = ({ sectionTitle }: { sectionTitle: FoodSectionTitle }) => {
    const Component = sectionComponents[sectionTitle];

    return (
      <section>
        <div className="mb-8">
          <Button variant="outline" onClick={handleGoBack} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Food & Dining
          </Button>
        </div>
        <Component />
      </section>
    );
  };

  return (
    <Layout>
      <HeroSection
        title="Food & Dining"
        subtitle="Explore Madrid's vibrant culinary scene"
      />
      
      <div className="container mx-auto py-12 px-4">
        {selectedSection ? <DetailView sectionTitle={selectedSection} /> : <HubView />}
      </div>
    </Layout>
  );
};

export default FoodAndDrinkPage;
