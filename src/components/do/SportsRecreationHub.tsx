
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowRight } from 'lucide-react';
import { sportsPreview } from '@/data/do/sportsPreview';

const SportsRecreationHub = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-madrid-red">
          <Dumbbell className="h-6 w-6" />
          <span className="text-xl">Sports & Recreation</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <p className="text-gray-700 mb-4">
          Stay active with football matches, gyms, parks, wellness, and recreational activities.
        </p>
        
        {/* Preview of sports and recreation options */}
        <div className="space-y-2 mb-4 text-sm">
          {sportsPreview.map((item, index) => (
             <div key={index} className="flex items-center gap-2 text-gray-600">
               {item.icon}
               <span>{item.text}</span>
             </div>
          ))}
        </div>
        
        <Button asChild variant="outline" className="w-full mt-auto">
          <Link to="/do-in-madrid/sports" className="flex items-center justify-center gap-2">
            Explore Sports & Recreation <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default SportsRecreationHub;
