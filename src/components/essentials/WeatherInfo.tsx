
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

const WeatherInfo = () => (
  <Card id="weather">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Clock className="h-5 w-5" />
        Weather & Climate
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">
        During the mid-winter months daytime temperatures in Madrid may drop to 7 degrees Centigrade (45 degrees Farenheit). During the months of July and August temperatures are hot. Madrid enjoys a large number of sunny days.
      </p>
    </CardContent>
  </Card>
);

export default WeatherInfo;
