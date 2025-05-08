
import { MapPin, Navigation, Utensils, Building, Calendar, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ContentCard from '@/components/ContentCard';
import FeatureSection from '@/components/FeatureSection';

const Index = () => {
  const exploreCards = [
    {
      title: "Essential Madrid",
      description: "Maps, tips, and important information for navigating Madrid like a local.",
      imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/essentials"
    },
    {
      title: "Transport Guide",
      description: "Everything you need to know about getting around Madrid efficiently.",
      imageUrl: "https://images.unsplash.com/photo-1517516794485-431f1c59191a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/transport"
    },
    {
      title: "See & Do",
      description: "Discover Madrid's attractions, activities, and hidden gems.",
      imageUrl: "https://images.unsplash.com/photo-1577782853630-673eafa2c209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/see-and-do"
    },
    {
      title: "Food & Drink",
      description: "The best places to eat, drink, and experience Madrid's culinary scene.",
      imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/food-and-drink"
    },
    {
      title: "Living in Madrid",
      description: "Practical advice for students and expats making Madrid their home.",
      imageUrl: "https://images.unsplash.com/photo-1551896235-94561d5d3fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/living"
    },
    {
      title: "Neighborhoods",
      description: "Explore Madrid's diverse neighborhoods and their unique character.",
      imageUrl: "https://images.unsplash.com/photo-1558370781-d6196949e317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/neighborhoods"
    }
  ];

  const features = [
    {
      icon: <MapPin size={40} />,
      title: "Insider Locations",
      description: "Discover hidden gems and local favorites that most tourists never find."
    },
    {
      icon: <Navigation size={40} />,
      title: "Easy Navigation",
      description: "Clear directions and transport tips to help you explore with confidence."
    },
    {
      icon: <Utensils size={40} />,
      title: "Authentic Dining",
      description: "From tapas bars to fine dining, experience the best of Madrid's cuisine."
    },
    {
      icon: <Building size={40} />,
      title: "Accommodation Guide",
      description: "Find the perfect neighborhood and accommodation for your stay or relocation."
    },
    {
      icon: <Calendar size={40} />,
      title: "Events & Activities",
      description: "Stay updated on seasonal events, festivals, and activities throughout the year."
    },
    {
      icon: <Flag size={40} />,
      title: "Cultural Insights",
      description: "Understand local customs and traditions to experience Madrid authentically."
    }
  ];

  return (
    <Layout>
      <HeroSection 
        title="Welcome to Madrid Insider" 
        subtitle="Your English-language guide to experiencing Madrid like a local" 
        ctaText="Explore Madrid" 
        ctaLink="/see-and-do" 
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Discover Madrid</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Whether you're visiting for a few days or planning to stay, Madrid Insider gives you the essential information you need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exploreCards.map((card, index) => (
              <ContentCard 
                key={index}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </section>

      <FeatureSection title="Why Madrid Insider?" features={features} />

      <section className="py-16 bg-madrid-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to explore Madrid?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey with our insider tips and recommendations.
          </p>
          <Link to="/essentials" className="inline-block bg-white text-madrid-red font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
            Get Started
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
