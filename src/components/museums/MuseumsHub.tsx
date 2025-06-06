
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Clock, MapPin, Star, Euro, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MuseumCard = ({ 
  title, 
  description, 
  icon: Icon,
  highlights,
  address,
  hours,
  admission,
  specialNote
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
  address: string;
  hours: string;
  admission: string;
  specialNote?: string;
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

const MuseumsHub = () => {
  const museums = [
    {
      title: "Prado Museum",
      description: "World's premier collection of European art, featuring masterpieces by Velázquez, Goya, and El Greco.",
      icon: Palette,
      address: "Calle de Ruiz de Alarcón, 23",
      hours: "Mon-Sat 10:00-20:00, Sun 10:00-19:00",
      admission: "€15 (Free Mon-Sat 18:00-20:00, Sun 17:00-19:00)",
      highlights: [
        "Las Meninas by Velázquez",
        "Goya's Black Paintings",
        "The Garden of Earthly Delights by Bosch"
      ],
      specialNote: "Book online to skip queues. Free entry for EU citizens under 25."
    },
    {
      title: "Reina Sofía Museum",
      description: "Spain's national museum of contemporary art, home to Picasso's Guernica and modern Spanish masterpieces.",
      icon: Palette,
      address: "Calle de Santa Isabel, 52",
      hours: "Mon, Wed-Sat 10:00-21:00, Sun 10:00-19:00 (Closed Tue)",
      admission: "€12 (Free Mon, Wed-Sat 19:00-21:00, Sun 13:30-19:00)",
      highlights: [
        "Guernica by Picasso",
        "Works by Dalí and Miró",
        "Contemporary Spanish artists"
      ],
      specialNote: "Free for EU citizens under 25 and over 65."
    },
    {
      title: "Thyssen-Bornemisza Museum",
      description: "Completes Madrid's Golden Triangle, featuring an exceptional private collection spanning 700 years of art.",
      icon: Palette,
      address: "Paseo del Prado, 8",
      hours: "Tue-Sun 10:00-19:00 (Closed Mon)",
      admission: "€13 (Reduced €9)",
      highlights: [
        "Impressionist and Post-Impressionist works",
        "American paintings collection",
        "Medieval to contemporary art"
      ],
      specialNote: "Monday free for residents of Madrid region with ID."
    },
    {
      title: "Royal Palace",
      description: "Official residence of Spanish royalty with stunning baroque architecture and opulent royal apartments.",
      icon: MapPin,
      address: "Calle de Bailén, s/n",
      hours: "Daily 10:00-18:00 (Oct-Mar), 10:00-20:00 (Apr-Sep)",
      admission: "€13 (EU citizens €7, Free for EU under 25)",
      highlights: [
        "Royal Armory collection",
        "Throne Room",
        "Stradivarius Room"
      ],
      specialNote: "Closed during state ceremonies. Check calendar online."
    }
  ];

  const artDistricts = [
    {
      name: "Art Golden Triangle",
      description: "Prado, Reina Sofía, and Thyssen-Bornemisza museums",
      walkingTime: "15 minutes between all three"
    },
    {
      name: "Malasaña Art Scene",
      description: "Contemporary galleries and street art",
      highlights: ["Independent galleries", "Street art tours", "Artist studios"]
    },
    {
      name: "Chueca Galleries",
      description: "Modern art spaces and design studios",
      highlights: ["Design galleries", "Photography exhibitions", "Fashion art"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">Madrid Museums & Galleries Hub</h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Discover Madrid's incredible art scene, from world-renowned museums to contemporary galleries. 
          Home to some of the world's most important art collections and vibrant modern art districts.
        </p>
      </section>

      {/* Major Museums Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Major Museums & Cultural Sites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {museums.map((museum, index) => (
            <MuseumCard key={index} {...museum} />
          ))}
        </div>
      </section>

      {/* Art Districts */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Art Districts & Gallery Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {artDistricts.map((district, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-base">{district.name}</CardTitle>
                <CardDescription>{district.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {district.walkingTime && (
                  <p className="text-sm text-gray-600 mb-2">🚶 {district.walkingTime}</p>
                )}
                {district.highlights && (
                  <ul className="text-sm space-y-1">
                    {district.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-600">• {highlight}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Practical Tips */}
      <section className="bg-slate-50 p-6 rounded-lg">
        <h3 className="font-bold text-xl mb-4">Museum Tips & Passes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Madrid Museum Pass</h4>
            <ul className="text-sm space-y-1">
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-madrid-red" />
                <span>€32 for 1 year, skip-the-line access</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-madrid-red" />
                <span>Includes 50+ museums and cultural sites</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-madrid-red" />
                <span>Valid for multiple visits within the year</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Free Museum Hours</h4>
            <ul className="text-sm space-y-1">
              <li>• Prado: Mon-Sat 18:00-20:00, Sun 17:00-19:00</li>
              <li>• Reina Sofía: Mon & Wed-Sat 19:00-21:00, Sun 13:30-19:00</li>
              <li>• Many smaller museums free on Sundays</li>
              <li>• EU citizens under 25 get free entry to major museums</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="border-t pt-6">
        <h3 className="font-bold text-xl mb-4">Museum Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="w-full">Madrid Museums Official App</Button>
          <Button variant="outline" className="w-full">Art Route Maps PDF</Button>
          <Button variant="outline" className="w-full">Gallery Opening Times</Button>
        </div>
      </section>
    </div>
  );
};

export default MuseumsHub;
