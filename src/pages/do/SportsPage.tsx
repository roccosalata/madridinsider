
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Leaf, Dumbbell, Footprints, Waves, Medal, ArrowRight, Trophy, Flag, Sailboat, Bike, Dribbble, Target, Heart } from 'lucide-react';

const sportsSections = {
  "Wellness & Relaxation": [
    {
      title: "Yoga & Wellness",
      description: "Find your balance with yoga studios, wellness centers, and healthy lifestyle options.",
      link: "/do-in-madrid/sports/yoga-wellness",
      icon: Leaf,
    },
    {
      title: "Baths & Spas",
      description: "Relax and rejuvenate in traditional Arab baths and modern luxury spas.",
      link: "/do-in-madrid/sports/baths",
      icon: Heart,
    },
  ],
  "Team Sports": [
    {
      title: "Football (Fútbol)",
      description: "Experience the passion of Spanish football. Find info on stadiums, matches, and local teams.",
      link: "/do-in-madrid/sports/football",
      icon: Trophy,
    },
    {
      title: "Basketball",
      description: "Find information on basketball events, including the Copa del Rey, and where to play in Madrid.",
      link: "/do-in-madrid/sports/basketball",
      icon: Dribbble,
    },
  ],
  "Individual Fitness & Outdoors": [
    {
      title: "Gyms & Fitness",
      description: "Stay in shape with a wide range of gyms, fitness centers, and health clubs in Madrid.",
      link: "#",
      icon: Dumbbell,
    },
    {
      title: "Running & Parks",
      description: "Discover the best running routes and parks for outdoor exercise, like Retiro and Casa de Campo.",
      link: "/do-in-madrid/sports/running",
      icon: Footprints,
    },
    {
      title: "Swimming",
      description: "Cool off and get a great workout at Madrid's public and private swimming pools.",
      link: "/do-in-madrid/sports/swimming",
      icon: Waves,
    },
    {
      title: "Cycling / Biking",
      description: "Rent, repair or buy a bike and explore the city on two wheels.",
      link: "/do-in-madrid/sports/cycling",
      icon: Bike,
    },
  ],
  "Leisure Activities": [
    {
      title: "Golf",
      description: "Tee off at one of the many scenic golf courses in and around the Madrid region.",
      link: "/do-in-madrid/sports/golf",
      icon: Flag,
    },
    {
      title: "Boating",
      description: "Enjoy a relaxing time on the water at Madrid's main parks.",
      link: "/do-in-madrid/sports/boating",
      icon: Sailboat,
    },
    {
      title: "Bowling",
      description: "Challenge your friends at one of Madrid's bowling alleys.",
      link: "/do-in-madrid/sports/bowling",
      icon: Target,
    },
    {
      title: "Other Sports",
      description: "Discover more activities like team sports, winter sports, racquet sports, and other fun leisure options.",
      link: "/do-in-madrid/sports/other-sports",
      icon: Medal,
    },
  ]
};


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

        <div className="space-y-12">
          {Object.entries(sportsSections).map(([sectionTitle, categories]) => (
            <section key={sectionTitle}>
              <h2 className="text-3xl font-bold mb-8 text-madrid-red">{sectionTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
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
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SportsPage;
