
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Train, Bus, Car, Bike, Plane, Clock, Euro, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TransportCard = ({ 
  title, 
  description, 
  icon: Icon,
  schedule,
  pricing,
  coverage,
  tips,
  appName
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  schedule: string;
  pricing: string;
  coverage: string;
  tips: string[];
  appName?: string;
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
      <div className="space-y-2">
        <div className="flex items-start gap-2 text-sm">
          <Clock className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-600">{schedule}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <Euro className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-600">{pricing}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-600">{coverage}</span>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold text-sm mb-2">Pro Tips:</h4>
        <ul className="text-sm space-y-1">
          {tips.map((tip, index) => (
            <li key={index} className="text-gray-600">• {tip}</li>
          ))}
        </ul>
      </div>
      
      {appName && (
        <div className="bg-blue-50 p-3 rounded-md">
          <p className="text-sm text-blue-800">📱 Download: {appName}</p>
        </div>
      )}
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full">
        Get Real-time Info
      </Button>
    </CardFooter>
  </Card>
);

const TransportHub = () => {
  const transportModes = [
    {
      title: "Metro (Underground)",
      description: "Fast, efficient subway system covering most of Madrid with 12 color-coded lines.",
      icon: Train,
      schedule: "Daily 6:00-01:30 (Fri-Sat until 02:00)",
      pricing: "Single: €1.50-2.00, 10-trip: €12.20, Monthly: €54.60",
      coverage: "12 lines, 300+ stations, reaches most tourist areas",
      tips: [
        "Avoid rush hours 8:00-9:30 & 18:00-20:00",
        "Keep ticket until exit - needed for validation",
        "Line 8 connects to airport (supplement required)",
        "Free transfers between lines within time limit"
      ],
      appName: "Metro Madrid Official App"
    },
    {
      title: "City Buses (EMT)",
      description: "Comprehensive bus network covering areas metro doesn't reach, including night buses.",
      icon: Bus,
      schedule: "Most routes 6:00-23:30, Night buses 24:00-06:00",
      pricing: "Single: €1.50, Same pricing as metro with transfers",
      coverage: "200+ routes, entire Madrid region including suburbs",
      tips: [
        "Same transport card as metro",
        "Night buses ('Búhos') run when metro closes",
        "Front door entry, validate card immediately",
        "Bus 200 is express airport connection"
      ],
      appName: "EMT Madrid (official bus app)"
    },
    {
      title: "Cercanías Trains",
      description: "Commuter rail connecting Madrid center with suburbs and nearby towns.",
      icon: Train,
      schedule: "5:30-23:30 daily, reduced weekend service",
      pricing: "Zone-based: €1.70-€4.60, integrated with metro/bus",
      coverage: "9 lines radiating from city center to suburbs",
      tips: [
        "Great for day trips to Toledo, Segovia, Alcalá",
        "Validate ticket before boarding",
        "Line C1 connects Atocha and Chamartín stations",
        "Some destinations require transfers"
      ],
      appName: "Renfe Cercanías app"
    },
    {
      title: "BiciMAD (Bike Share)",
      description: "Electric bike sharing system with stations throughout central Madrid.",
      icon: Bike,
      schedule: "24/7 availability",
      pricing: "Annual: €25, 1-3 day passes available, usage fees apply",
      coverage: "250+ stations in central districts",
      tips: [
        "Electric bikes make hills easier",
        "30-minute free period, then usage charges",
        "Return to any station, check availability",
        "Helmet not required but recommended"
      ],
      appName: "BiciMAD official app"
    },
    {
      title: "Taxis & Ride-sharing",
      description: "Traditional white taxis and ride-sharing apps for door-to-door transport.",
      icon: Car,
      schedule: "24/7 availability",
      pricing: "Taxis: €2.50 start + €1.10/km, Uber/Cabify similar",
      coverage: "Entire Madrid region",
      tips: [
        "White taxis are official, avoid unmarked cars",
        "Airport supplement €6.70 from/to airport",
        "Uber and Cabify widely available",
        "Tipping not required but 5-10% appreciated"
      ],
      appName: "Uber, Cabify, Free Now"
    },
    {
      title: "Airport Connections",
      description: "Multiple options to reach Barajas Airport from city center.",
      icon: Plane,
      schedule: "24/7 various options available",
      pricing: "Metro: €4.50-6.00, Bus: €5.00, Taxi: €30-40",
      coverage: "Airport Express Bus 203, Metro Line 8, Cercanías C1",
      tips: [
        "Airport Express runs 24/7 every 15-20 minutes",
        "Metro Line 8 requires airport supplement",
        "Taxi flat rate €30 to city center",
        "Allow 45-60 minutes from city center"
      ],
      appName: "Madrid Airport app"
    }
  ];

  const ticketOptions = [
    {
      name: "Single Ticket",
      price: "€1.50-2.00",
      validity: "One journey",
      bestFor: "Rare use, tourists staying central"
    },
    {
      name: "10-Journey Card",
      price: "€12.20",
      validity: "10 separate journeys",
      bestFor: "Short stays, multiple people sharing"
    },
    {
      name: "Tourist Travel Pass",
      price: "€8.40-35.40",
      validity: "1-7 days unlimited",
      bestFor: "Tourists using transport frequently"
    },
    {
      name: "Monthly Pass",
      price: "€54.60",
      validity: "Calendar month",
      bestFor: "Residents, long stays"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">Madrid Transport Hub</h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Navigate Madrid efficiently with comprehensive public transport information. 
          From metro and buses to bikes and taxis, find the best way to get around the city.
        </p>
      </section>

      {/* Transport Modes */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Transportation Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transportModes.map((mode, index) => (
            <TransportCard key={index} {...mode} />
          ))}
        </div>
      </section>

      {/* Maps Hub Link */}
      <section className="bg-madrid-red/10 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="h-6 w-6 text-madrid-red" />
          <h3 className="font-bold text-xl">Need Transport Maps?</h3>
        </div>
        <p className="mb-4 text-gray-700">
          Find detailed metro maps, bus route maps, and navigation guides in our comprehensive Madrid Maps Hub.
        </p>
        <Button asChild>
          <Link to="/madrid-essentials/maps">View All Transport Maps</Link>
        </Button>
      </section>

      {/* Ticket Options */}
      <section className="bg-slate-50 p-6 rounded-lg">
        <h3 className="font-bold text-xl mb-4">Ticket & Pass Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ticketOptions.map((ticket, index) => (
            <div key={index} className="bg-white p-4 rounded-md">
              <h4 className="font-semibold text-madrid-red mb-2">{ticket.name}</h4>
              <div className="space-y-1 text-sm">
                <p><strong>Price:</strong> {ticket.price}</p>
                <p><strong>Valid:</strong> {ticket.validity}</p>
                <p><strong>Best for:</strong> {ticket.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Resources */}
      <section className="border-t pt-6">
        <h3 className="font-bold text-xl mb-4">Transport Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <Button variant="outline" className="w-full">Real-time Apps</Button>
          <Button variant="outline" className="w-full">Route Planner</Button>
          <Button variant="outline" className="w-full">Accessibility Info</Button>
          <Button variant="outline" className="w-full">Service Updates</Button>
        </div>
      </section>
    </div>
  );
};

export default TransportHub;
