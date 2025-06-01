
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WeatherVisitInfo = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-3">Weather Overview</h3>
          <p className="mb-4">Madrid enjoys a continental Mediterranean climate with hot summers and mild winters.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Summer (June-August)</h4>
              <p>• Average: 25-35°C (77-95°F)</p>
              <p>• Very hot and dry</p>
              <p>• Perfect for terraces and outdoor activities</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Winter (December-February)</h4>
              <p>• Average: 5-15°C (41-59°F)</p>
              <p>• Mild with occasional rain</p>
              <p>• Great for museums and indoor attractions</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-3">Best Time to Visit</h3>
          <ul className="space-y-2">
            <li>• <strong>Spring (March-May):</strong> Pleasant temperatures, blooming parks</li>
            <li>• <strong>Fall (September-November):</strong> Comfortable weather, fewer crowds</li>
            <li>• <strong>Summer:</strong> Peak tourist season, very hot but vibrant nightlife</li>
            <li>• <strong>Winter:</strong> Fewer tourists, Christmas atmosphere, mild temperatures</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherVisitInfo;
