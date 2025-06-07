
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Star, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MuseumCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
  address: string;
  hours: string;
  admission: string;
  specialNote?: string;
}

const MuseumCard = ({ 
  title, 
  description, 
  icon: Icon,
  highlights,
  address,
  hours,
  admission,
  specialNote
}: MuseumCardProps) => (
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
          <span className="text-gray-600">{address}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <Clock className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-600">{hours}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <Euro className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-600">{admission}</span>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
        <ul className="text-sm space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center gap-2">
              <Star className="h-3 w-3 text-madrid-red" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      
      {specialNote && (
        <div className="bg-blue-50 p-3 rounded-md">
          <p className="text-sm text-blue-800">{specialNote}</p>
        </div>
      )}
    </CardContent>
    <CardFooter className="flex gap-2">
      <Button variant="outline" size="sm" className="flex-1">
        Visit Website
      </Button>
      <Button size="sm" className="flex-1">
        Get Directions
      </Button>
    </CardFooter>
  </Card>
);

export default MuseumCard;
