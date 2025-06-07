
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Phone, Euro, Star, Camera, Map, Ticket } from 'lucide-react';
import { madridAttractions, touristServices, getAttractionsByCategory, type SightseeingAttraction } from '@/data/sightseeingData';

const AttractionCard = ({ attraction }: { attraction: SightseeingAttraction }) => (
  <Card className="h-full">
    <CardHeader>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <CardTitle className="text-lg mb-2">{attraction.name}</CardTitle>
          <Badge variant="secondary" className="mb-2">{attraction.category}</Badge>
        </div>
      </div>
      <CardDescription>{attraction.description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-gray-600">{attraction.address}</span>
            <div className="text-xs text-gray-500 mt-1">
              Metro: {attraction.metroStations.join(', ')}
            </div>
          </div>
        </div>
        
        {attraction.openingHours && (
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{attraction.openingHours}</span>
          </div>
        )}
        
        {attraction.phone && (
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{attraction.phone}</span>
          </div>
        )}
        
        {attraction.admissionFees && (
          <div className="flex items-start gap-2">
            <Euro className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{attraction.admissionFees}</span>
          </div>
        )}
      </div>
      
      <div>
        <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
        <ul className="text-sm space-y-1">
          {attraction.highlights.map((highlight, index) => (
            <li key={index} className="flex items-center gap-2">
              <Star className="h-3 w-3 text-madrid-red" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      
      {attraction.specialNotes && (
        <div className="bg-blue-50 p-3 rounded-md">
          <p className="text-sm text-blue-800">{attraction.specialNotes}</p>
        </div>
      )}
    </CardContent>
  </Card>
);

const SightseeingHub = () => {
  const [activeCategory, setActiveCategory] = useState<SightseeingAttraction['category']>('Historic Sites');
  
  const categories: SightseeingAttraction['category'][] = [
    'Historic Sites', 'Religious Sites', 'Palaces', 'Plazas', 'Markets', 'Theaters', 'Viewpoints'
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">Madrid Sightseeing & Attractions</h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Discover Madrid's incredible heritage, from royal palaces and historic plazas to 
          vibrant markets and stunning viewpoints. Explore the city's most iconic attractions 
          with practical information for your visit.
        </p>
      </section>

      {/* Tourist Services */}
      <section className="bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Tourist Services & Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {touristServices.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-madrid-red" />
                  {service.name}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {'benefits' in service ? (
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm flex items-center gap-2">
                        <Star className="h-3 w-3 text-madrid-red" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div>
                    <p className="text-sm font-medium mb-2">Locations:</p>
                    <p className="text-sm text-gray-600">{service.locations.join(', ')}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Attractions by Category */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Attractions by Category</h2>
        <Tabs value={activeCategory} onValueChange={(value) => setActiveCategory(value as SightseeingAttraction['category'])}>
          <TabsList className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 w-full mb-6">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs">
                {category.replace(' Sites', '')}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getAttractionsByCategory(category).map((attraction) => (
                  <AttractionCard key={attraction.id} attraction={attraction} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Quick Tour Options */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
        <h3 className="font-bold text-xl mb-4">Guided Tour Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">The Ages of Madrid</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                One century, one building. Travel through history visiting places that best represent Madrid's essence.
              </p>
              <p className="text-xs text-gray-500">
                Includes: Chapel of Santa María, Casa de los Lujanes, Monastery of Descalzas Reales, Plaza Mayor, El Prado, and more.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Monumental Madrid</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Virtual tour through Madrid's historical evolution via buildings and monuments from each era.
              </p>
              <p className="text-xs text-gray-500">
                Explore how Madrid preserves traditions while embracing the avant-garde and future.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Teleférico (Sky Lift)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Aerial views of Madrid from the cable car system connecting Casa de Campo with the city center.
              </p>
              <p className="text-xs text-gray-500">
                Perfect for photography and getting a unique perspective of the city layout.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Practical Information */}
      <section className="border-t pt-6">
        <h3 className="font-bold text-xl mb-4">Planning Your Visit</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="w-full flex items-center gap-2">
            <Map className="h-4 w-4" />
            Attraction Maps
          </Button>
          <Button variant="outline" className="w-full flex items-center gap-2">
            <Camera className="h-4 w-4" />
            Photo Guidelines
          </Button>
          <Button variant="outline" className="w-full flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Opening Hours
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SightseeingHub;
