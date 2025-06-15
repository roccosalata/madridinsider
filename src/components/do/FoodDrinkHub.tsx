
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Utensils, ArrowRight } from 'lucide-react';

const FoodDrinkHub = () => {
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
