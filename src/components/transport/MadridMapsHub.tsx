
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Navigation, MapPinned, Route, Navigation2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MapCard = ({ 
  title, 
  description, 
  icon: Icon,
  linkUrl = "#",
  linkText = "View Map"
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  linkUrl?: string;
  linkText?: string;
}) => (
  <Card className="h-full">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="bg-madrid-red/10 p-2 rounded-md">
          <Icon className="h-6 w-6 text-madrid-red" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-2">
      {/* Map content placeholder */}
      <div className="bg-gray-100 rounded-md aspect-video flex items-center justify-center">
        <span className="text-gray-500 text-sm">Map preview</span>
      </div>
    </CardContent>
    <CardFooter>
      <Button asChild variant="outline" className="w-full">
        <Link to={linkUrl}>
          {linkText}
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

const MadridMapsHub = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-6">Madrid Maps Hub</h2>
        <p className="mb-8">
          Navigate Madrid like a local with our comprehensive collection of maps. From metro routes to neighborhood guides, 
          find everything you need to explore the city confidently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MapCard
            title="Metro & Public Transport Map"
            description="Complete map of Madrid's metro network, bus routes, and commuter trains."
            icon={Route}
          />
          
          <MapCard
            title="Tourist Attractions Map"
            description="All major sights, museums, and points of interest in central Madrid."
            icon={MapPin}
          />
          
          <MapCard
            title="Neighborhood Maps"
            description="Detailed maps of Madrid's diverse neighborhoods and districts."
            icon={MapPinned}
          />
          
          <MapCard
            title="Walking Tour Routes"
            description="Self-guided walking routes through Madrid's most scenic areas."
            icon={Navigation}
          />
          
          <MapCard
            title="Day Trips Map"
            description="Popular destinations within easy reach of Madrid for day excursions."
            icon={Navigation2}
          />
          
          <MapCard
            title="Interactive City Map"
            description="Customizable map with filters for restaurants, shopping, and more."
            icon={MapPin}
          />
        </div>
      </section>

      <section className="bg-slate-50 p-6 rounded-lg">
        <h3 className="font-bold text-xl mb-4">Download Official Madrid Maps</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Button variant="outline" className="w-full">Metro Map PDF</Button>
          <Button variant="outline" className="w-full">Tourist Map PDF</Button>
          <Button variant="outline" className="w-full">City Center Map PDF</Button>
        </div>
      </section>

      <section className="border-t pt-6">
        <h3 className="font-bold text-xl mb-4">Map Resources & Apps</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google Maps - Best for general navigation and live traffic updates</li>
          <li>Citymapper - Excellent for public transport journey planning</li>
          <li>Metro de Madrid Official App - Real-time metro information</li>
          <li>EMT Madrid - Bus routes and real-time arrivals</li>
          <li>BiciMAD - Bike sharing stations location and availability</li>
        </ul>
      </section>
    </div>
  );
};

export default MadridMapsHub;
