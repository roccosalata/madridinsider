
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Wine, ArrowRight, Music2, Moon, GlassWater } from 'lucide-react';

const NightlifeHub = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-madrid-red">
          <Wine className="h-6 w-6" />
          <span className="text-xl">Nightlife & Bars</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <p className="text-gray-700 mb-4">
          Experience Madrid's legendary nightlife, with endless options for bars, clubs, and live music.
        </p>
        
        {/* Preview of nightlife options */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <GlassWater className="h-4 w-4" />
            <span>Cocktail Bars & Lounges</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Music2 className="h-4 w-4" />
            <span>Live Music Venues</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Moon className="h-4 w-4" />
            <span>Night Clubs & Dancing</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Wine className="h-4 w-4" />
            <span>Rooftop Terraces</span>
          </div>
        </div>
        
        <Button asChild variant="outline" className="w-full mt-auto">
          <Link to="/do-in-madrid/nightlife" className="flex items-center justify-center gap-2">
            Explore Nightlife <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default NightlifeHub;
