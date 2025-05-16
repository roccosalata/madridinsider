
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { CloudSun, Calendar } from 'lucide-react';

const WeatherVisitInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <CloudSun className="h-8 w-8 text-madrid-red" />
        <h3 className="text-xl font-semibold">Weather Information</h3>
      </div>
      
      <p className="mb-4">
        During the mid-winter months daytime temperatures in Madrid may drop to 7 degrees Centigrade (45 degrees Fahrenheit). 
        During the months of July and August temperatures are hot. Madrid enjoys a large number of sunny days.
      </p>
      
      <Card className="shadow-md">
        <CardContent className="pt-6">
          <h4 className="font-semibold mb-4">Seasonal Weather Guide</h4>
          <ul className="space-y-2">
            <li><strong>Spring (April-June):</strong> Mild temperatures and blooming parks make this an ideal time to visit.</li>
            <li><strong>Fall (September-October):</strong> Pleasant temperatures and fewer tourists than summer.</li>
            <li><strong>Summer (July-August):</strong> Hot weather (often 35°C+/95°F+), many locals leave for vacation.</li>
            <li><strong>Winter (November-March):</strong> Cooler temperatures, occasional rain or light snow, fewer crowds.</li>
          </ul>
        </CardContent>
      </Card>
      
      <div className="flex items-center gap-3 mt-8 mb-4">
        <Calendar className="h-8 w-8 text-madrid-red" />
        <h3 className="text-xl font-semibold">Best Time to Visit</h3>
      </div>
      
      <p className="mb-4">
        Madrid is a year-round destination, but the best times to visit are during spring (April to June) and fall 
        (September to October) when the weather is pleasant and there are fewer tourists.
      </p>
      
      <div className="border-t pt-6 mt-8">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">Current Weather & Events</h4>
          <Link to="/madrid-now" className="text-madrid-red hover:underline flex items-center gap-2">
            Check Madrid Now <CloudSun className="h-4 w-4" />
          </Link>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Visit our Madrid Now page for real-time weather updates and current events happening in the city.
        </p>
      </div>
    </div>
  );
};

export default WeatherVisitInfo;
