
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Star } from 'lucide-react';
import { foodMarkets } from '@/data/do/food/foodMarkets';

const FoodMarketsSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <MapPin className="h-8 w-8 text-madrid-red" />
        Food Markets
      </h2>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
        Explore Madrid's vibrant food markets for fresh produce, gourmet delights, and authentic local flavors.
      </p>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {foodMarkets.map(market => (
          <Card key={market.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="flex-1">{market.name}</CardTitle>
                <Badge 
                  variant={market.priceLevel === 'Upscale' ? 'destructive' : market.priceLevel === 'Mid-range' ? 'default' : 'secondary'}
                >
                  {market.priceLevel}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-gray-700">{market.description}</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-madrid-red" />
                  {market.address}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-madrid-red" />
                  {market.hours}
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 mb-2 font-medium">
                  <Star className="h-4 w-4 text-madrid-red" />
                  Highlights:
                </p>
                <div className="flex flex-wrap gap-1">
                  {market.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FoodMarketsSection;
