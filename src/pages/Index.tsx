
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import CategoryCard from '@/components/CategoryCard';
import MadridNowSection from '@/components/MadridNowSection';
import { mainCategories } from '@/data/mainCategories';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_BG =
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80";

const IndexPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  const madridTime = format(currentTime, 'HH:mm');
  const madridDate = format(currentTime, 'EEEE, MMMM d');
  
  console.log('Index page rendering successfully with updated categories');
  
  return (
    <Layout>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-madrid-red text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      
      {/* Enhanced Hero Section */}
      <div
        className="relative py-20 md:py-32"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
              Welcome to Madrid
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 drop-shadow-lg mb-8">
              Your comprehensive English-language guide to Madrid. From tourist essentials to local insider tips.
            </p>
            
            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                asChild
                size="lg"
                className="bg-madrid-red hover:bg-madrid-red/90 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link to="/madrid-essentials">
                  Start Exploring <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold shadow-xl backdrop-blur-sm bg-white/10"
              >
                <Link to="/madrid-now">
                  What's Happening Now
                </Link>
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center text-white">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="h-8 w-8 text-madrid-red mr-2" />
                <span className="text-4xl font-bold">1000+</span>
              </div>
              <p className="text-lg opacity-90">Attractions Covered</p>
            </div>
            <div className="text-center text-white">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-madrid-red mr-2" />
                <span className="text-4xl font-bold">500K+</span>
              </div>
              <p className="text-lg opacity-90">Happy Visitors</p>
            </div>
            <div className="text-center text-white">
              <div className="flex items-center justify-center mb-3">
                <Globe className="h-8 w-8 text-madrid-red mr-2" />
                <span className="text-4xl font-bold">50+</span>
              </div>
              <p className="text-lg opacity-90">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
      
      <main id="main-content" className="container mx-auto py-16 px-4">
        {/* Value Proposition */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Explore Madrid Your Way
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're a first-time visitor or a long-term resident, our comprehensive guides help you discover and navigate Madrid with confidence.
          </p>
        </section>

        {/* Enhanced Category Cards */}
        <section aria-label="Main categories" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainCategories.filter(category => category.title !== "Madrid Now").map(category => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </section>

        {/* Quick Access Section */}
        <section className="bg-gray-50 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Quick Access</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Jump directly to our most popular content hubs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button 
              asChild
              variant="outline"
              className="h-auto p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border-2"
            >
              <Link to="/madrid-essentials/transport-maps">
                <div className="mb-3">
                  <div className="w-12 h-12 bg-madrid-red/10 rounded-full flex items-center justify-center mb-2">
                    <MapPin className="h-6 w-6 text-madrid-red" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Transportation Hub</h3>
                  <p className="text-sm text-gray-600">Metro, buses, taxis, and airport connections</p>
                </div>
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="h-auto p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border-2"
            >
              <Link to="/see-in-madrid/neighborhoods">
                <div className="mb-3">
                  <div className="w-12 h-12 bg-madrid-red/10 rounded-full flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-madrid-red" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Neighborhoods Guide</h3>
                  <p className="text-sm text-gray-600">Discover Madrid's unique districts and areas</p>
                </div>
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="h-auto p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border-2"
            >
              <Link to="/do-in-madrid/food-drink">
                <div className="mb-3">
                  <div className="w-12 h-12 bg-madrid-red/10 rounded-full flex items-center justify-center mb-2">
                    <Globe className="h-6 w-6 text-madrid-red" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Food & Dining</h3>
                  <p className="text-sm text-gray-600">Tapas, restaurants, and culinary experiences</p>
                </div>
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="h-auto p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border-2"
            >
              <Link to="/madrid-essentials/emergency">
                <div className="mb-3">
                  <div className="w-12 h-12 bg-madrid-red/10 rounded-full flex items-center justify-center mb-2">
                    <ArrowRight className="h-6 w-6 text-madrid-red" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Emergency Info</h3>
                  <p className="text-sm text-gray-600">Important contacts and safety information</p>
                </div>
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
export { mainCategories };

