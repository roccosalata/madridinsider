
import { Compass, Map, Star, Utensils, Home, Calendar, Clock, CloudSun } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ContentCard from '@/components/ContentCard';
import FeatureSection from '@/components/FeatureSection';

const Index = () => {
  const mainCategories = [
    {
      title: "Madrid Essentials",
      description: "Your starting point: What's new, current events, key maps, city layout, and first-timer tips for Madrid.",
      imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1000&auto=format&fit=crop",
      link: "/madrid-essentials",
      icon: <Compass className="h-6 w-6" />
    },
    {
      title: "Getting Around",
      description: "Navigate Madrid: Metro, buses, taxis, airport/station transfers, and car rentals.",
      imageUrl: "https://images.unsplash.com/photo-1517516794485-431f1c59191a?q=80&w=1000&auto=format&fit=crop",
      link: "/transport",
      icon: <Map className="h-6 w-6" />
    },
    {
      title: "See, Do & Explore",
      description: "Discover Madrid's best: Attractions, activities, entertainment, shopping, and in-depth neighborhood guides.",
      imageUrl: "https://images.unsplash.com/photo-1577782853630-673eafa2c209?q=80&w=1000&auto=format&fit=crop",
      link: "/see-do-explore", // Updated link
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Eat & Drink",
      description: "Savor Madrid: Your guide to the city's top restaurants, tapas bars, cafes, and foodie hotspots.",
      imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=1000&auto=format&fit=crop",
      link: "/food-and-drink",
      icon: <Utensils className="h-6 w-6" />
    },
    {
      title: "Madrid Life: Practical Guide",
      description: "Make Madrid home: Advice on accommodation, paperwork, and daily services for students, expats, and long-term residents.",
      imageUrl: "https://images.unsplash.com/photo-1551896235-94561d5d3fcc?q=80&w=1000&auto=format&fit=crop",
      link: "/living",
      icon: <Home className="h-6 w-6" />
    },
    {
      title: "Madrid Now",
      description: "Current local calendar, time, and weather information for Madrid.",
      imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1000&auto=format&fit=crop",
      link: "/madrid-now",
      icon: <div className="flex space-x-1">
        <Calendar className="h-5 w-5" />
        <Clock className="h-5 w-5" />
        <CloudSun className="h-5 w-5" />
      </div>
    }
  ];

  const features = [
    {
      icon: <Map size={40} />,
      title: "Insider Locations",
      description: "Discover hidden gems and local favorites that most tourists never find."
    },
    {
      icon: <Utensils size={40} />,
      title: "Authentic Dining",
      description: "From tapas bars to fine dining, experience the best of Madrid's cuisine."
    },
    {
      icon: <Calendar size={40} />,
      title: "Events & Activities",
      description: "Stay updated on seasonal events, festivals, and activities throughout the year."
    },
    {
      icon: <CloudSun size={40} />,
      title: "Cultural Insights",
      description: "Understand local customs and traditions to experience Madrid authentically."
    }
  ];

  return (
    <Layout>
      <HeroSection 
        title="Welcome to Madrid Insider" 
        subtitle="Your English-language guide to experiencing Madrid like a local - discover the city whether you're visiting for a few days or planning to stay." 
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainCategories.map((card, index) => (
              <ContentCard 
                key={index}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                link={card.link}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <FeatureSection title="" features={features} />

      <section className="py-16 bg-madrid-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to explore Madrid?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey with our insider tips and recommendations.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
