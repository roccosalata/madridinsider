import React, { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Leaf, Dumbbell, Footprints, Waves, Medal, ArrowRight, Trophy, Flag, Sailboat, Bike, Dribbble, Target, Heart, 
  Users, Award, MountainSnow, Dices, ArrowLeft, Snowflake 
} from 'lucide-react';

const sportsHubData = {
  "Wellness & Relaxation": {
    icon: Heart,
    description: "Focus on your mind and body with calming and rejuvenating activities.",
    categories: [
      { title: "Yoga & Wellness", description: "Find your balance with yoga studios, wellness centers, and healthy lifestyle options.", link: "/do-in-madrid/sports/yoga-wellness", icon: Leaf },
      { title: "Baths & Spas", description: "Relax and rejuvenate in traditional Arab baths and modern luxury spas.", link: "/do-in-madrid/sports/baths", icon: Heart },
    ]
  },
  "Team Sports": {
    icon: Users,
    description: "Join a team or watch a game. Experience Madrid's passion for collective sports.",
    categories: [
      { title: "Football (Fútbol)", description: "Experience the passion of Spanish football. Find info on stadiums, matches, and local teams.", link: "/do-in-madrid/sports/football", icon: Trophy },
      { title: "Basketball", description: "Find information on basketball events, including the Copa del Rey, and where to play in Madrid.", link: "/do-in-madrid/sports/basketball", icon: Dribbble },
      { title: "Other Team Sports", description: "Discover information about Volleyball, Rugby, and Cricket clubs in Madrid.", link: "/do-in-madrid/sports/other-sports#team-sports", icon: Users },
    ]
  },
  "Individual Fitness & Outdoors": {
    icon: Dumbbell,
    description: "Stay active on your own terms with gyms, parks, and various individual sports.",
    categories: [
      { title: "Gyms & Fitness", description: "Stay in shape with a wide range of gyms, fitness centers, and health clubs in Madrid.", link: "/do-in-madrid/sports/gyms", icon: Dumbbell },
      { title: "Running & Parks", description: "Discover the best running routes and parks for outdoor exercise.", link: "/do-in-madrid/sports/running", icon: Footprints },
      { title: "Swimming", description: "Cool off and get a great workout at Madrid's public and private swimming pools.", link: "/do-in-madrid/sports/swimming", icon: Waves },
      { title: "Cycling / Biking", description: "Rent, repair or buy a bike and explore the city on two wheels.", link: "/do-in-madrid/sports/cycling", icon: Bike },
    ]
  },
  "Racquet Sports": {
    icon: Award,
    description: "Information on tennis, padel, and other racquet sports in the city.",
    categories: [
      { title: "Tennis", description: "Learn about the Madrid Masters and find where to play.", link: "/do-in-madrid/sports/other-sports#racquet-sports", icon: Award },
    ]
  },
  "Winter Sports": {
    icon: MountainSnow,
    description: "Hit the slopes or the ice with skiing and skating options near Madrid.",
    categories: [
        { title: "Skiing & Snowboarding", description: "Find nearby ski resorts for a day trip from Madrid.", link: "/do-in-madrid/sports/other-sports#winter-sports", icon: MountainSnow },
        { title: "Ice Skating", description: "Enjoy ice skating at various rinks in the city.", link: "/do-in-madrid/sports/other-sports#winter-sports", icon: Snowflake },
    ]
  },
  "Leisure & Fun": {
    icon: Dices,
    description: "Enjoy a relaxed day out with some fun and friendly competition.",
    categories: [
      { title: "Golf", description: "Tee off at one of the many scenic golf courses in and around the Madrid region.", link: "/do-in-madrid/sports/golf", icon: Flag },
      { title: "Boating", description: "Enjoy a relaxing time on the water at Madrid's main parks.", link: "/do-in-madrid/sports/boating", icon: Sailboat },
      { title: "Bowling", description: "Challenge your friends at one of Madrid's bowling alleys.", link: "/do-in-madrid/sports/bowling", icon: Target },
      { title: "Karts & Billiards", description: "More fun activities, including go-karting and pool halls.", link: "/do-in-madrid/sports/other-sports#leisure-fun", icon: Medal },
    ]
  },
};

type SportsSectionTitle = keyof typeof sportsHubData;

const SportsPage = () => {
  const [selectedSection, setSelectedSection] = useState<SportsSectionTitle | null>(null);

  const handleSelectSection = (section: SportsSectionTitle) => {
    setSelectedSection(section);
    window.scrollTo(0, 0);
  };

  const handleGoBack = () => {
    setSelectedSection(null);
    window.scrollTo(0, 0);
  };
  
  const HubView = () => (
    <>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
        From world-class football to serene yoga studios, Madrid offers a diverse range of activities to keep you active and well. Explore the categories below to find your perfect way to move.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(sportsHubData).map(([title, data]) => {
          const Icon = data.icon;
          return (
            <Card 
              key={title} 
              className="flex flex-col hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleSelectSection(title as SportsSectionTitle)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-madrid-red">
                  <Icon className="h-8 w-8" />
                  <span className="text-xl">{title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700">{data.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );

  const DetailView = ({ sectionTitle }: { sectionTitle: SportsSectionTitle }) => {
    const sectionData = sportsHubData[sectionTitle];
    const Icon = sectionData.icon;

    return (
      <section>
        <div className="mb-8 flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={handleGoBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-4">
             <Icon className="h-8 w-8 text-madrid-red" />
             <h2 className="text-3xl font-bold text-madrid-red">{sectionTitle}</h2>
          </div>
        </div>
        <p className="text-lg text-gray-700 max-w-3xl mb-12">{sectionData.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionData.categories.map((category) => (
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
    );
  };

  return (
    <Layout>
      <HeroSection
        title="Sports & Recreation"
        subtitle="Get active with sports, recreational activities, and wellness in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        {selectedSection ? <DetailView sectionTitle={selectedSection} /> : <HubView />}
      </div>
    </Layout>
  );
};

export default SportsPage;
