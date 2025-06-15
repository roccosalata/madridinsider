
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Ticket, ArrowRight } from 'lucide-react';

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
          Enjoy world-class theater, flamenco shows, concerts, and other live performances.
        </p>
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
