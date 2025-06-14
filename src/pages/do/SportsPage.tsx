
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Yoga, Award, Dumbbell, Footprints, Waves, Medal, ArrowRight } from 'lucide-react';

const sportCategories = [
  {
    title: "Yoga & Wellness",
    description: "Find your balance with yoga studios, wellness centers, and healthy lifestyle options across the city.",
    link: "/do-in-madrid/yoga-wellness",
    icon: Yoga,
  },
  {
    title: "Football (Fútbol)",
    description: "Experience the passion of Spanish football. Find info on stadiums, matches, and local teams.",
    link: "#",
    icon: Award,
  },
  {
    title: "Gyms & Fitness",
    description: "Stay in shape with a wide range of gyms, fitness centers, and health clubs in Madrid.",
    link: "#",
    icon: Dumbbell,
  },
  {
    title: "Running & Parks",
    description: "Discover the best running routes and parks for outdoor exercise, like Retiro and Casa de Campo.",
    link: "#",
    icon: Footprints,
  },
  {
    title: "Swimming",
    description: "Cool off and get a great workout at Madrid's public and private swimming pools.",
    link: "#",
    icon: Waves,
  },
  {
    title: "Other Sports",
    description: "Explore opportunities for tennis, basketball, paddle tennis, and more throughout the city.",
    link: "#",
    icon: Medal,
  },
];

const SportsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Sports & Recreation"
        subtitle="Get active with sports, recreational activities, and wellness in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          From world-class football to serene yoga studios, Madrid offers a diverse range of activities to keep you active and well. Explore the categories below to find your perfect way to move.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportCategories.map((category) => (
            <Card key={category.title} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-madrid-red">
                  <category.icon className="h-6 w-6" />
                  <span className="text-xl">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-gray-700 mb-4 flex-grow">{category.description}</p>
                <Button asChild variant="outline" className="w-full mt-auto" disabled={category.link === '#'}>
                  <Link to={category.link} className="flex items-center justify-center gap-2">
                    {category.link === '#' ? "Coming Soon" : `Explore ${category.title}`}
                    {category.link !== '#' && <ArrowRight className="h-4 w-4" />}
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

export default SportsPage;
