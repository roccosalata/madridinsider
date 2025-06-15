
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Ticket, ArrowRight, Music, Sparkles, Telescope } from 'lucide-react';

const EntertainmentHub = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-madrid-red">
          <Ticket className="h-6 w-6" />
          <span className="text-xl">Entertainment & Shows</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <p className="text-gray-700 mb-4">
          Experience authentic Spanish culture and modern entertainment venues.
        </p>
        
        {/* Preview of available activities */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Ticket className="h-4 w-4" />
            <span>Bullfights at Las Ventas</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Music className="h-4 w-4" />
            <span>Flamenco Shows & Tablaos</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Telescope className="h-4 w-4" />
            <span>Planetarium & IMAX Madrid</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Sparkles className="h-4 w-4" />
            <span>Magic & Comedy Clubs</span>
          </div>
        </div>
        
        <Button asChild variant="outline" className="w-full mt-auto">
          <Link to="/do-in-madrid/entertainment" className="flex items-center justify-center gap-2">
            Explore Entertainment <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default EntertainmentHub;
