
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Utensils, Wine, Coffee } from 'lucide-react';
import { diningEtiquette } from '@/data/do/food/diningEtiquette';

const DiningEtiquetteSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <Utensils className="h-8 w-8 text-madrid-red" />
        Spanish Dining Culture
      </h2>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
        Understanding Spanish meal times and dining customs will enhance your culinary experience in Madrid.
      </p>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-madrid-red" />
              Meal Times
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-medium text-madrid-red">Breakfast</p>
              <p className="text-sm text-gray-600">{diningEtiquette.mealTimes.breakfast}</p>
            </div>
            <div>
              <p className="font-medium text-madrid-red">Lunch</p>
              <p className="text-sm text-gray-600">{diningEtiquette.mealTimes.lunch}</p>
            </div>
            <div>
              <p className="font-medium text-madrid-red">Dinner</p>
              <p className="text-sm text-gray-600">{diningEtiquette.mealTimes.dinner}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-madrid-red" />
              Dining Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {diningEtiquette.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-madrid-red">•</span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wine className="h-5 w-5 text-madrid-red" />
              Drinking Culture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {diningEtiquette.drinkingCulture.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-madrid-red">•</span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DiningEtiquetteSection;
