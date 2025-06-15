
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Wine, Music2, Moon, GlassWater, MapPin } from 'lucide-react';

const nightlifeSections = [
    {
        id: 'salsa',
        title: 'Salsa & Bachata Clubs',
        icon: <Music2 className="h-8 w-8 text-madrid-red" />,
        description: "Feel the Latin rhythm at Madrid's best salsa and bachata clubs. Many offer beginner classes before the main party starts.",
        venues: [
            { name: "El Son", address: "Calle de la Victoria, 6", details: "A classic for salsa lovers, always crowded and full of energy." },
            { name: "Azúcar", address: "Calle de Atocha, 107", details: "Offers different rooms for salsa, bachata, and kizomba." },
            { name: "Cats", address: "Calle de Julián Romea, 4", details: "Popular with students, hosts big Latin parties." },
        ]
    },
    {
        id: 'clubs',
        title: 'Nightclubs & Discotecas',
        icon: <Moon className="h-8 w-8 text-madrid-red" />,
        description: "Madrid is famous for its 'discotecas' that stay open until dawn. From multi-story mega-clubs to exclusive venues, there's a dance floor for everyone.",
        venues: [
            { name: "Teatro Kapital", address: "Calle de Atocha, 125", details: "A massive 7-story club with different music on each floor." },
            { name: "Fabrik", address: "Av. de la Industria, 82, Humanes de Madrid", details: "One of the world's top techno clubs, located outside the city." },
            { name: "Joy Eslava", address: "Calle del Arenal, 11", details: "A historic theater turned into an iconic nightclub near Sol." },
        ]
    },
    {
        id: 'bars',
        title: 'Cocktail Bars & Trendy Spots',
        icon: <GlassWater className="h-8 w-8 text-madrid-red" />,
        description: "For a more relaxed evening, explore Madrid's sophisticated cocktail bars and trendy hotspots in neighborhoods like Malasaña and Salamanca.",
        venues: [
            { name: "Salmon Guru", address: "Calle de Echegaray, 21", details: "An award-winning bar with creative and exotic cocktails." },
            { name: "1862 Dry Bar", address: "Calle del Pez, 27", details: "Classic cocktails in a stylish, vintage atmosphere in Malasaña." },
            { name: "Harvey's Cocktail Bar", address: "Calle de Fuencarral, 70", details: "American-style cocktails and a cozy vibe." },
        ]
    },
    {
        id: 'terraces',
        title: 'Rooftop Terraces',
        icon: <Wine className="h-8 w-8 text-madrid-red" />,
        description: "Enjoy stunning views of the city skyline from one of Madrid's many rooftop bars. Perfect for sunset drinks and warm summer nights.",
        venues: [
            { name: "Círculo de Bellas Artes", address: "Calle de Alcalá, 42", details: "Offers one of the most famous panoramic views of Madrid." },
            { name: "The Hat Madrid", address: "Calle Imperial, 9", details: "A trendy and relaxed rooftop bar on top of a hostel in La Latina." },
            { name: "Ginkgo Sky Bar", address: "Plaza de España, 3", details: "A chic bar with a pool and spectacular views over Plaza de España." },
        ]
    }
];

const Nightlife = () => {
  return (
    <Layout>
      <HeroSection
        title="Nightlife & Bars"
        subtitle="Discover Madrid's vibrant nightlife, from energetic salsa clubs to trendy bars and super-clubs."
      />
      
      <div className="container mx-auto py-12 px-4 space-y-16">
        {nightlifeSections.map(section => (
          <section key={section.id}>
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              {section.icon}
              {section.title}
            </h2>
            <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">{section.description}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.venues.map(venue => (
                <Card key={venue.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <CardHeader>
                    <CardTitle>{venue.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 pt-1"><MapPin className="h-4 w-4" />{venue.address}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700">{venue.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default Nightlife;
