
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, MapPin, Clock, Users, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NeighborhoodCard = ({ 
  title, 
  description, 
  icon: Icon,
  character,
  bestFor,
  highlights,
  safety,
  transport
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  character: string;
  bestFor: string[];
  highlights: string[];
  safety: string;
  transport: string;
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
      <div className="bg-blue-50 p-3 rounded-md">
        <p className="text-sm text-blue-800"><strong>Character:</strong> {character}</p>
      </div>
      
      <div>
        <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
          <Users className="h-4 w-4" />
          Best for:
        </h4>
        <ul className="text-sm space-y-1">
          {bestFor.map((item, index) => (
            <li key={index} className="text-gray-600">• {item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
          <Zap className="h-4 w-4" />
          Highlights:
        </h4>
        <ul className="text-sm space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-gray-600">• {highlight}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-green-500" />
          <span className="text-gray-600"><strong>Safety:</strong> {safety}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span className="text-gray-600"><strong>Transport:</strong> {transport}</span>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full">
        Explore Neighborhood
      </Button>
    </CardFooter>
  </Card>
);

const NeighborhoodsHub = () => {
  const neighborhoods = [
    {
      title: "Sol & Centro",
      description: "Madrid's historic heart with major sights, shopping, and tourist attractions.",
      icon: MapPin,
      character: "Bustling tourist center with historic charm",
      bestFor: ["First-time visitors", "Sightseeing", "Shopping", "Central location"],
      highlights: [
        "Puerta del Sol (Kilometer Zero)",
        "Plaza Mayor & Royal Palace nearby",
        "Gran Vía shopping street",
        "Major metro connections"
      ],
      safety: "Very safe, well-patrolled",
      transport: "Metro lines 1, 2, 3 (Sol station)"
    },
    {
      title: "La Latina",
      description: "Traditional Madrid with winding streets, tapas bars, and Sunday flea markets.",
      icon: Home,
      character: "Authentic, traditional, lively on weekends",
      bestFor: ["Tapas enthusiasts", "Traditional atmosphere", "Weekend markets", "Historic charm"],
      highlights: [
        "El Rastro Sunday flea market",
        "Cava Baja tapas street",
        "Plaza de la Paja",
        "Traditional architecture"
      ],
      safety: "Safe, watch belongings at El Rastro",
      transport: "Metro La Latina (Line 5), Tirso de Molina (Line 1)"
    },
    {
      title: "Malasaña",
      description: "Hip, alternative neighborhood with indie shops, bars, and young creative energy.",
      icon: Zap,
      character: "Trendy, artistic, alternative, youthful",
      bestFor: ["Young travelers", "Nightlife", "Alternative culture", "Vintage shopping"],
      highlights: [
        "Plaza del Dos de Mayo",
        "Vintage and record shops",
        "Street art and murals",
        "Craft cocktail bars"
      ],
      safety: "Generally safe, livelier at night",
      transport: "Metro Tribunal (Lines 1, 10), Malasaña (Line 1)"
    },
    {
      title: "Chueca",
      description: "Vibrant LGBTQ+ friendly area with designer shops, restaurants, and nightlife.",
      icon: Heart,
      character: "Diverse, fashionable, inclusive, energetic",
      bestFor: ["LGBTQ+ travelers", "Fashion shopping", "International dining", "Nightlife"],
      highlights: [
        "Plaza de Chueca",
        "Designer boutiques",
        "International restaurants",
        "Pride celebration center"
      ],
      safety: "Very safe and welcoming",
      transport: "Metro Chueca (Line 5), Gran Vía (Lines 1, 5)"
    },
    {
      title: "Salamanca",
      description: "Upscale district with luxury shopping, fine dining, and elegant architecture.",
      icon: Users,
      character: "Elegant, sophisticated, expensive, refined",
      bestFor: ["Luxury shopping", "Fine dining", "High-end accommodations", "Business travelers"],
      highlights: [
        "Golden Mile shopping (Serrano/Ortega y Gasset)",
        "Michelin-starred restaurants",
        "Beautiful architecture",
        "El Retiro Park access"
      ],
      safety: "Very safe, upscale area",
      transport: "Metro Serrano (Line 4), Velázquez (Line 4)"
    },
    {
      title: "Lavapiés",
      description: "Multicultural, artistic neighborhood with diverse communities and affordable dining.",
      icon: Zap,
      character: "Diverse, multicultural, artistic, affordable",
      bestFor: ["Cultural diversity", "Affordable dining", "Alternative art", "Authentic local life"],
      highlights: [
        "International food scene",
        "Cultural centers and galleries",
        "Tabacalera art space",
        "Mix of cultures"
      ],
      safety: "Generally safe, be aware at night",
      transport: "Metro Lavapiés (Line 3), Embajadores (Lines 3, 5)"
    }
  ];

  const livingGuide = [
    {
      category: "Best for Families",
      areas: ["Salamanca", "Chamberí", "Moncloa"],
      reasons: ["Good schools", "Parks nearby", "Safe streets", "Family amenities"]
    },
    {
      category: "Best for Students",
      areas: ["Malasaña", "Lavapiés", "Universidad"],
      reasons: ["Affordable rent", "University proximity", "Young atmosphere", "Cheap dining"]
    },
    {
      category: "Best for Professionals",
      areas: ["Salamanca", "Chamberí", "Sol/Centro"],
      reasons: ["Business district access", "Good transport", "Professional services", "Networking opportunities"]
    },
    {
      category: "Best for Nightlife",
      areas: ["Malasaña", "Chueca", "La Latina"],
      reasons: ["Bar density", "Late hours", "Variety of venues", "Walking distance"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">Madrid Neighborhoods Hub</h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Discover Madrid's diverse neighborhoods, each with its own personality and attractions. 
          From historic centers to trendy districts, find the perfect area for your visit or new home.
        </p>
      </section>

      {/* Neighborhoods Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Key Madrid Neighborhoods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((neighborhood, index) => (
            <NeighborhoodCard key={index} {...neighborhood} />
          ))}
        </div>
      </section>

      {/* Living Guide */}
      <section className="bg-slate-50 p-6 rounded-lg">
        <h3 className="font-bold text-xl mb-4">Neighborhood Selection Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {livingGuide.map((guide, index) => (
            <div key={index} className="bg-white p-4 rounded-md">
              <h4 className="font-semibold mb-2 text-madrid-red">{guide.category}</h4>
              <div className="mb-3">
                <strong className="text-sm">Recommended areas:</strong>
                <span className="text-sm text-gray-600 ml-2">{guide.areas.join(", ")}</span>
              </div>
              <ul className="text-sm space-y-1">
                {guide.reasons.map((reason, i) => (
                  <li key={i} className="text-gray-600">• {reason}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

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
