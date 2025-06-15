
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Utensils, ArrowRight, Coffee, Wine, ChefHat, Globe } from 'lucide-react';
import { diningCategories } from '@/data/do/food/diningCategories';

const categoryIcons: { [key: string]: React.ReactElement } = {
  "Traditional Tapas Bars": <Wine className="h-4 w-4" />,
  "Traditional Restaurants (Tabernas)": <Utensils className="h-4 w-4" />,
  "Modern Spanish Cuisine": <ChefHat className="h-4 w-4" />,
  "International Cuisine": <Globe className="h-4 w-4" />,
  "Rooftop & Terrace Dining": <Coffee className="h-4 w-4" />,
};

const FoodDrinkHub = () => {
  const previewCategories = diningCategories.slice(0, 4);

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-madrid-red">
          <Utensils className="h-6 w-6" />
          <span className="text-xl">Food & Dining</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <p className="text-gray-700 mb-4">
          Explore Madrid's culinary scene, from traditional tapas to Michelin-starred restaurants.
        </p>
        
        {/* Preview of available dining options */}
        <div className="space-y-2 mb-4 text-sm">
          {previewCategories.map((category) => (
            <div key={category.name} className="flex items-center gap-2 text-gray-600">
              {categoryIcons[category.name] || <Utensils className="h-4 w-4" />}
              <span>{category.name}</span>
            </div>
          ))}
        </div>
        
        <Button asChild variant="outline" className="w-full mt-auto">
          <Link to="/do-in-madrid/food-drink" className="flex items-center justify-center gap-2">
            Explore Food & Dining <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default FoodDrinkHub;
