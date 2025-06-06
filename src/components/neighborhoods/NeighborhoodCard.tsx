
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Zap, Heart, Euro, Shield, Train } from 'lucide-react';

interface NeighborhoodCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  character: string;
  bestFor: string[];
  highlights: string[];
  safety: string;
  transport: string;
  priceLevel?: string;
  metroStations?: string[];
}

const NeighborhoodCard = ({ 
  title, 
  description, 
  icon: Icon,
  character,
  bestFor,
  highlights,
  safety,
  transport,
  priceLevel,
  metroStations
}: NeighborhoodCardProps) => (
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
          <Shield className="h-4 w-4 text-green-500" />
          <span className="text-gray-600"><strong>Safety:</strong> {safety}</span>
        </div>
        <div className="flex items-center gap-2">
          <Train className="h-4 w-4 text-blue-500" />
          <span className="text-gray-600"><strong>Transport:</strong> {transport}</span>
        </div>
        {priceLevel && (
          <div className="flex items-center gap-2">
            <Euro className="h-4 w-4 text-orange-500" />
            <span className="text-gray-600"><strong>Price Level:</strong> {priceLevel}</span>
          </div>
        )}
        {metroStations && metroStations.length > 0 && (
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-red-500" />
            <span className="text-gray-600"><strong>Metro:</strong> {metroStations.join(', ')}</span>
          </div>
        )}
      </div>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full">
        Explore Neighborhood
      </Button>
    </CardFooter>
  </Card>
);

export default NeighborhoodCard;
