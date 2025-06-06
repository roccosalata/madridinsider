
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed, Clock, MapPin, Star, Euro, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RestaurantCard = ({ 
  title, 
  description, 
  icon: Icon,
  specialties,
  priceRange,
  bestTime,
  location,
  tip
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  specialties: string[];
  priceRange: string;
  bestTime: string;
  location: string;
  tip?: string;
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
          <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-600">{location}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <Clock className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-600">{bestTime}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <Euro className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-600">{priceRange}</span>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold text-sm mb-2">Must-try dishes:</h4>
        <ul className="text-sm space-y-1">
          {specialties.map((specialty, index) => (
            <li key={index} className="flex items-center gap-2">
              <Star className="h-3 w-3 text-madrid-red" />
              {specialty}
            </li>
          ))}
        </ul>
      </div>
      
      {tip && (
        <div className="bg-orange-50 p-3 rounded-md">
          <p className="text-sm text-orange-800">💡 {tip}</p>
        </div>
      )}
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full">
        Find Restaurants
      </Button>
    </CardFooter>
  </Card>
);

const FoodDiningHub = () => {
  const foodCategories = [
    {
      title: "Traditional Tapas Bars",
      description: "Authentic Spanish small plates experience with local wines and atmosphere.",
      icon: UtensilsCrossed,
      location: "Throughout Madrid, especially La Latina & Malasaña",
      bestTime: "Evening 19:00-23:00, avoid tourist traps",
      priceRange: "€2-8 per tapa, €15-25 per person",
      specialties: [
        "Jamón Ibérico & Manchego cheese",
        "Patatas bravas (spicy potatoes)",
        "Gambas al ajillo (garlic shrimp)",
        "Croquetas (various fillings)"
      ],
      tip: "Order one drink per tapa. Standing at the bar is often cheaper than tables."
    },
    {
      title: "Cocido Madrileño Restaurants",
      description: "Madrid's signature hearty chickpea stew, traditionally served in three courses.",
      icon: UtensilsCrossed,
      location: "Traditional restaurants citywide",
      bestTime: "Lunch 14:00-16:00 (typically Thursday special)",
      priceRange: "€18-35 per person",
      specialties: [
        "Three-course cocido service",
        "Chickpeas, meats, and vegetables",
        "Served with soup, meats, then vegetables",
        "Traditional preparation methods"
      ],
      tip: "Try Malacatín, Casa Carola, or Taberna Real for authentic versions."
    },
    {
      title: "Modern Spanish Cuisine",
      description: "Contemporary interpretations of Spanish classics by innovative chefs.",
      icon: Wine,
      location: "Salamanca, Chamberí, city center",
      bestTime: "Dinner 21:00-23:30",
      priceRange: "€40-120 per person",
      specialties: [
        "Deconstructed Spanish classics",
        "Molecular gastronomy techniques",
        "Local ingredient focus",
        "Wine pairing menus"
      ],
      tip: "Book well in advance for Michelin-starred restaurants. Many offer lunch menus."
    },
    {
      title: "Market Food Halls",
      description: "Gourmet food markets combining traditional vendors with modern dining concepts.",
      icon: MapPin,
      location: "Mercado San Miguel, Platea, Mercado San Antón",
      bestTime: "Lunch 12:00-16:00, Evening 19:00-midnight",
      priceRange: "€8-25 per person",
      specialties: [
        "Artisanal products",
        "International street food",
        "Spanish gourmet specialties",
        "Wine and craft beer"
      ],
      tip: "Mercado San Miguel is touristy but convenient. Try others for more authentic experiences."
    }
  ];

  const neighborhoods = [
    {
      name: "La Latina",
      type: "Traditional Tapas",
      highlights: ["Sunday tapas crawls", "Cava Baja street", "Traditional atmosphere"]
    },
    {
      name: "Malasaña",
      type: "Hip & Alternative",
      highlights: ["Craft cocktails", "Fusion cuisine", "Young crowd"]
    },
    {
      name: "Chueca",
      type: "International & LGBTQ+",
      highlights: ["International cuisine", "Trendy restaurants", "Diverse options"]
    },
    {
      name: "Salamanca",
      type: "Upscale Dining",
      highlights: ["Michelin restaurants", "Fine dining", "Expensive but quality"]
    }
  ];

  const eatingSchedule = [
    { time: "7:00-10:00", meal: "Desayuno (Breakfast)", typical: "Coffee + pastry or toast" },
    { time: "11:00-12:00", meal: "Second Breakfast", typical: "Café con leche + bocadillo" },
    { time: "14:00-16:00", meal: "Almuerzo (Lunch)", typical: "Main meal of the day, 2-3 courses" },
    { time: "18:00-20:00", meal: "Merienda (Snack)", typical: "Coffee + pastry or light snack" },
    { time: "21:00-23:30", meal: "Cena (Dinner)", typical: "Lighter than lunch, often tapas" }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">Madrid Food & Dining Hub</h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Experience Madrid's incredible culinary scene, from traditional tapas bars to innovative restaurants. 
          Discover authentic Spanish flavors and modern interpretations in the heart of Spain.
        </p>
      </section>

      {/* Food Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Madrid Dining Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {foodCategories.map((category, index) => (
            <RestaurantCard key={index} {...category} />
          ))}
        </div>
      </section>

      {/* Neighborhoods */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Best Food Neighborhoods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {neighborhoods.map((neighborhood, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-base">{neighborhood.name}</CardTitle>
                <CardDescription>{neighborhood.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  {neighborhood.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-600">• {highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Spanish Eating Schedule */}
      <section className="bg-slate-50 p-6 rounded-lg">
        <h3 className="font-bold text-xl mb-4">Spanish Eating Schedule</h3>
        <p className="text-gray-600 mb-4">
          Understanding Spanish meal times is crucial for dining in Madrid. Restaurants and kitchens follow these traditional schedules.
        </p>
        <div className="space-y-3">
          {eatingSchedule.map((meal, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-4 p-3 bg-white rounded-md">
              <div className="flex items-center gap-2 md:w-32">
                <Clock className="h-4 w-4 text-madrid-red" />
                <span className="font-semibold text-sm">{meal.time}</span>
              </div>
              <div className="md:w-40">
                <span className="font-medium text-sm">{meal.meal}</span>
              </div>
              <div className="flex-1">
                <span className="text-sm text-gray-600">{meal.typical}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Resources */}
      <section className="border-t pt-6">
        <h3 className="font-bold text-xl mb-4">Dining Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <Button variant="outline" className="w-full">Restaurant Apps</Button>
          <Button variant="outline" className="w-full">Food Tours</Button>
          <Button variant="outline" className="w-full">Market Guide</Button>
          <Button variant="outline" className="w-full">Spanish Menu Terms</Button>
        </div>
      </section>
    </div>
  );
};

export default FoodDiningHub;
