
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Navigation, MapPinned, Route, Navigation2, Train, Bus, Car, Bike, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapCard = ({ 
  title, 
  description, 
  icon: Icon,
  features,
  downloadLink = "#",
  interactiveLink = "#"
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  downloadLink?: string;
  interactiveLink?: string;
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
    <CardContent className="space-y-3">
      <div className="bg-gray-100 rounded-md aspect-video flex items-center justify-center">
        <span className="text-gray-500 text-sm">Interactive Map Preview</span>
      </div>
      <ul className="text-sm space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-madrid-red rounded-full"></div>
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="flex gap-2">
      <Button variant="outline" size="sm" className="flex-1">
        Download PDF
      </Button>
      <Button size="sm" className="flex-1">
        View Interactive
      </Button>
    </CardFooter>
  </Card>
);

const TransportMethodCard = ({
  title,
  icon: Icon,
  mapTypes,
  color
}: {
  title: string;
  icon: React.ElementType;
  mapTypes: string[];
  color: string;
}) => (
  <Card className="h-full">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-md ${color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <ul className="text-sm space-y-1">
        {mapTypes.map((type, index) => (
          <li key={index} className="text-gray-600">• {type}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const MadridMapsHub = () => {
  const primaryMaps = [
    {
      title: "Metro & Public Transport Map",
      description: "Complete network map of Madrid's metro, bus routes, and commuter trains with real-time information.",
      icon: Route,
      features: [
        "All 12 metro lines with stations",
        "Bus route connections",
        "Cercanías train network",
        "Real-time service updates",
        "Accessibility information"
      ]
    },
    {
      title: "Tourist Attractions Map",
      description: "All major sights, museums, and points of interest in central Madrid with walking routes.",
      icon: MapPin,
      features: [
        "Top 50 tourist attractions",
        "Museum locations & hours",
        "Walking tour routes",
        "Photo opportunities",
        "Restaurant recommendations"
      ]
    },
    {
      title: "Neighborhood Explorer",
      description: "Detailed maps of Madrid's diverse neighborhoods with local insights and hidden gems.",
      icon: MapPinned,
      features: [
        "22 district breakdowns",
        "Local business directories",
        "Cultural highlights",
        "Safety information",
        "Local transportation hubs"
      ]
    },
    {
      title: "Interactive City Map",
      description: "Customizable map with filters for restaurants, shopping, nightlife, and more.",
      icon: Navigation,
      features: [
        "Filter by category",
        "User reviews & ratings",
        "Opening hours",
        "Price ranges",
        "Booking integration"
      ]
    }
  ];

  const transportMethods = [
    {
      title: "Metro Maps",
      icon: Train,
      color: "bg-blue-500",
      mapTypes: ["Network overview", "Line-by-line maps", "Station accessibility", "Service disruptions"]
    },
    {
      title: "Bus Route Maps",
      icon: Bus,
      color: "bg-green-500",
      mapTypes: ["Day routes", "Night buses (Búhos)", "Airport express", "Tourist bus routes"]
    },
    {
      title: "Driving Maps",
      icon: Car,
      color: "bg-red-500",
      mapTypes: ["Traffic zones", "Parking locations", "Madrid Central restrictions", "Ring road system"]
    },
    {
      title: "Cycling Maps",
      icon: Bike,
      color: "bg-orange-500",
      mapTypes: ["Bike lanes", "BiciMAD stations", "Cycling routes", "Bike parking"]
    },
    {
      title: "Airport Connections",
      icon: Plane,
      color: "bg-purple-500",
      mapTypes: ["Transport to/from airport", "Terminal maps", "Connection guides", "Timing estimates"]
    },
    {
      title: "Walking Routes",
      icon: Navigation2,
      color: "bg-teal-500",
      mapTypes: ["Historic center routes", "Park connections", "Shopping districts", "Scenic walks"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">Madrid Maps Hub</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Navigate Madrid like a local with our comprehensive collection of maps. From metro routes to neighborhood guides, 
          find everything you need to explore the city confidently using any mode of transportation.
        </p>
      </section>

      {/* Primary Maps Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Essential Madrid Maps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {primaryMaps.map((map, index) => (
            <MapCard key={index} {...map} />
          ))}
        </div>
      </section>

      {/* Transport Method Breakdown */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Maps by Transportation Method</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transportMethods.map((method, index) => (
            <TransportMethodCard key={index} {...method} />
          ))}
        </div>
      </section>

      {/* Quick Download Section */}
      <section className="bg-slate-50 p-6 rounded-lg">
        <h3 className="font-bold text-xl mb-4">Quick Downloads</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Button variant="outline" className="w-full">Metro Map PDF</Button>
          <Button variant="outline" className="w-full">Bus Routes PDF</Button>
          <Button variant="outline" className="w-full">Tourist Map PDF</Button>
          <Button variant="outline" className="w-full">City Center Map</Button>
        </div>
      </section>

      {/* Resources Section */}
      <section className="border-t pt-6">
        <h3 className="font-bold text-xl mb-4">Recommended Map Apps & Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Navigation Apps</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-madrid-red rounded-full"></div>
                <strong>Google Maps</strong> - Best for general navigation and live traffic
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-madrid-red rounded-full"></div>
                <strong>Citymapper</strong> - Excellent for public transport planning
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-madrid-red rounded-full"></div>
                <strong>Moovit</strong> - Real-time public transport updates
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Official Transport Apps</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-madrid-red rounded-full"></div>
                <strong>Metro Madrid</strong> - Official metro app with real-time info
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-madrid-red rounded-full"></div>
                <strong>EMT Madrid</strong> - Bus routes and real-time arrivals
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-madrid-red rounded-full"></div>
                <strong>BiciMAD</strong> - Bike sharing stations and availability
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MadridMapsHub;
