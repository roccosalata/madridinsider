
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import NeighborhoodCard from './NeighborhoodCard';
import NeighborhoodGuide from './NeighborhoodGuide';
import { madridBarrios, getBarriosByPriceLevel, getBarriosForStudents, getSafeBarrios } from '@/data/madridBarrios';
import { MapPin, Home, Zap, Heart, Users, Euro, Filter } from 'lucide-react';

const NeighborhoodsHub = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Main tourist-friendly neighborhoods for overview
  const mainNeighborhoods = [
    {
      title: "Sol & Centro",
      description: "Madrid's historic heart with major sights, shopping, and tourist attractions.",
      icon: MapPin,
      character: "Bustling tourist center with historic charm",
      bestFor: ["First-time visitors", "Sightseeing", "Shopping", "Central location"],
      highlights: ["Puerta del Sol (Kilometer Zero)", "Plaza Mayor & Royal Palace nearby", "Gran Vía shopping street", "Major metro connections"],
      safety: "Very safe, well-patrolled",
      transport: "Metro lines 1, 2, 3 (Sol station)"
    },
    {
      title: "La Latina",
      description: "Traditional Madrid with winding streets, tapas bars, and Sunday flea markets.",
      icon: Home,
      character: "Authentic, traditional, lively on weekends",
      bestFor: ["Tapas enthusiasts", "Traditional atmosphere", "Weekend markets", "Historic charm"],
      highlights: ["El Rastro Sunday flea market", "Cava Baja tapas street", "Plaza de la Paja", "Traditional architecture"],
      safety: "Safe, watch belongings at El Rastro",
      transport: "Metro La Latina (Line 5), Tirso de Molina (Line 1)"
    },
    {
      title: "Malasaña",
      description: "Hip, alternative neighborhood with indie shops, bars, and young creative energy.",
      icon: Zap,
      character: "Trendy, artistic, alternative, youthful",
      bestFor: ["Young travelers", "Nightlife", "Alternative culture", "Vintage shopping"],
      highlights: ["Plaza del Dos de Mayo", "Vintage and record shops", "Street art and murals", "Craft cocktail bars"],
      safety: "Generally safe, livelier at night",
      transport: "Metro Tribunal (Lines 1, 10), Malasaña (Line 1)"
    },
    {
      title: "Chueca",
      description: "Vibrant LGBTQ+ friendly area with designer shops, restaurants, and nightlife.",
      icon: Heart,
      character: "Diverse, fashionable, inclusive, energetic",
      bestFor: ["LGBTQ+ travelers", "Fashion shopping", "International dining", "Nightlife"],
      highlights: ["Plaza de Chueca", "Designer boutiques", "International restaurants", "Pride celebration center"],
      safety: "Very safe and welcoming",
      transport: "Metro Chueca (Line 5), Gran Vía (Lines 1, 5)"
    },
    {
      title: "Salamanca",
      description: "Upscale district with luxury shopping, fine dining, and elegant architecture.",
      icon: Users,
      character: "Elegant, sophisticated, expensive, refined",
      bestFor: ["Luxury shopping", "Fine dining", "High-end accommodations", "Business travelers"],
      highlights: ["Golden Mile shopping (Serrano/Ortega y Gasset)", "Michelin-starred restaurants", "Beautiful architecture", "El Retiro Park access"],
      safety: "Very safe, upscale area",
      transport: "Metro Serrano (Line 4), Velázquez (Line 4)"
    },
    {
      title: "Lavapiés",
      description: "Multicultural, artistic neighborhood with diverse communities and affordable dining.",
      icon: Zap,
      character: "Diverse, multicultural, artistic, affordable",
      bestFor: ["Cultural diversity", "Affordable dining", "Alternative art", "Authentic local life"],
      highlights: ["International food scene", "Cultural centers and galleries", "Tabacalera art space", "Mix of cultures"],
      safety: "Generally safe, be aware at night",
      transport: "Metro Lavapiés (Line 3), Embajadores (Lines 3, 5)"
    }
  ];

  const getFilteredBarrios = () => {
    switch (selectedFilter) {
      case 'budget':
        return getBarriosByPriceLevel('Low').concat(getBarriosByPriceLevel('Very Low'));
      case 'students':
        return getBarriosForStudents();
      case 'safe':
        return getSafeBarrios();
      case 'luxury':
        return getBarriosByPriceLevel('High').concat(getBarriosByPriceLevel('Very High'));
      default:
        return madridBarrios;
    }
  };

  const convertBarrioToCard = (barrio: typeof madridBarrios[0]) => ({
    title: barrio.name,
    description: barrio.description,
    icon: MapPin,
    character: barrio.character,
    bestFor: barrio.bestFor,
    highlights: barrio.highlights,
    safety: barrio.safety,
    transport: barrio.metroStations.length > 0 ? `Metro: ${barrio.metroStations.join(', ')}` : 'Check local transport',
    priceLevel: barrio.priceLevel,
    metroStations: barrio.metroStations
  });

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">Madrid Neighborhoods & Barrios Hub</h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Discover Madrid's diverse neighborhoods and barrios, each with its own personality and attractions. 
          From historic centers to trendy districts, find the perfect area for your visit or new home.
        </p>
      </section>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="all-barrios">All Barrios</TabsTrigger>
          <TabsTrigger value="guide">Selection Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-6">Key Madrid Neighborhoods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainNeighborhoods.map((neighborhood, index) => (
                <NeighborhoodCard key={index} {...neighborhood} />
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="all-barrios" className="space-y-6">
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={selectedFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('all')}
            >
              All Areas
            </Button>
            <Button
              variant={selectedFilter === 'budget' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('budget')}
            >
              <Euro className="h-4 w-4 mr-1" />
              Budget-Friendly
            </Button>
            <Button
              variant={selectedFilter === 'students' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('students')}
            >
              <Users className="h-4 w-4 mr-1" />
              Students
            </Button>
            <Button
              variant={selectedFilter === 'safe' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('safe')}
            >
              Safe Areas
            </Button>
            <Button
              variant={selectedFilter === 'luxury' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('luxury')}
            >
              Luxury
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredBarrios().map((barrio, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{barrio.name}</CardTitle>
                    <Badge variant={
                      barrio.priceLevel === 'Very Low' || barrio.priceLevel === 'Low' ? 'secondary' :
                      barrio.priceLevel === 'Medium' ? 'outline' : 'destructive'
                    }>
                      {barrio.priceLevel}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{barrio.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-md">
                    <p className="text-sm text-blue-800"><strong>Character:</strong> {barrio.character}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Best for:</h4>
                    <div className="flex flex-wrap gap-1">
                      {barrio.bestFor.slice(0, 3).map((item, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{item}</Badge>
                      ))}
                    </div>
                  </div>

                  {barrio.metroStations.length > 0 && (
                    <div className="text-sm">
                      <strong>Metro:</strong> {barrio.metroStations.join(', ')}
                    </div>
                  )}

                  <div className="text-sm">
                    <strong>Safety:</strong> {barrio.safety}
                  </div>

                  {barrio.warnings && barrio.warnings.length > 0 && (
                    <div className="bg-yellow-50 p-2 rounded text-sm">
                      <strong className="text-yellow-800">Note:</strong> {barrio.warnings.join(', ')}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="guide">
          <NeighborhoodGuide />
        </TabsContent>
      </Tabs>

      {/* Quick Resources */}
      <section className="border-t pt-6">
        <h3 className="font-bold text-xl mb-4">Neighborhood Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <Button variant="outline" className="w-full">Interactive Map</Button>
          <Button variant="outline" className="w-full">Housing Guide</Button>
          <Button variant="outline" className="w-full">Safety Information</Button>
          <Button variant="outline" className="w-full">Transport Connections</Button>
        </div>
      </section>
    </div>
  );
};

export default NeighborhoodsHub;
