
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Utensils, Wine, ShoppingBag, Ticket, Dumbbell, ArrowRight } from 'lucide-react';

const doCategories = [
  {
    title: "Food & Dining",
    description: "Explore Madrid's culinary scene, from traditional tapas to Michelin-starred restaurants.",
    link: "/do-in-madrid/food-drink",
    icon: Utensils,
  },
  {
    title: "Nightlife & Bars",
    description: "Experience Madrid's legendary nightlife, with endless options for bars, clubs, and live music.",
    link: "/do-in-madrid/nightlife",
    icon: Wine,
  },
  {
    title: "Markets",
    description: "Discover vibrant markets like El Rastro, Mercado de San Miguel, and local food markets.",
    link: "/do-in-madrid/markets",
    icon: ShoppingBag,
  },
  {
    title: "Entertainment & Shows",
    description: "Enjoy world-class theater, flamenco shows, concerts, and other live performances.",
    link: "/do-in-madrid/entertainment",
    icon: Ticket,
  },
  {
    title: "Sports & Recreation",
    description: "Stay active with football matches, gyms, parks, wellness, and a variety of recreational activities.",
    link: "/do-in-madrid/sports",
    icon: Dumbbell,
  },
];


const DoMadridPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Do in Madrid"
        subtitle="Experience Madrid's vibrant culture through food, nightlife, markets, entertainment, and recreational activities."
      />

      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">What to Do in Madrid</h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Dive into the heart of Spanish culture. Whether you're a foodie, a night owl, a culture enthusiast, or seeking recreation, Madrid has something for everyone. Explore our guides to make the most of your time in the city.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doCategories.map((category) => (
            <Card key={category.title} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-madrid-red">
                  <category.icon className="h-6 w-6" />
                  <span className="text-xl">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-gray-700 mb-4 flex-grow">{category.description}</p>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link to={category.link} className="flex items-center justify-center gap-2">
                    Explore {category.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DoMadridPage;
