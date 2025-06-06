
import React, { useState, useEffect } from 'react';
import { Compass, Home, Eye, Activity, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { format } from 'date-fns';

const mainCategories = [
  {
    title: "Madrid Essentials",
    description: "Essential information for tourists and first-time visitors to Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&auto=format&fit=crop",
    link: "/madrid-essentials",
    icon: <Compass className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Getting Started Guide", link: "/madrid-essentials/getting-started" },
      { title: "Maps & Navigation", link: "/madrid-essentials/maps" },
      { title: "Weather & Climate", link: "/madrid-essentials/weather" },
      { title: "Currency & Money", link: "/madrid-essentials/currency" },
      { title: "Language Basics", link: "/madrid-essentials/language" },
      { title: "Safety Tips", link: "/madrid-essentials/safety" },
      { title: "Emergency Contacts", link: "/madrid-essentials/emergency" }
    ]
  },
  {
    title: "Living in Madrid",
    description: "Practical information for residents, students, and expats making Madrid their home.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    link: "/living-in-madrid",
    icon: <Home className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Paperwork & NIE/TIE", link: "/living-in-madrid/paperwork" },
      { title: "Finding Accommodation", link: "/living-in-madrid/accommodation" },
      { title: "Banking & Finances", link: "/living-in-madrid/banking" },
      { title: "Healthcare System", link: "/living-in-madrid/healthcare" },
      { title: "Internet & Utilities", link: "/living-in-madrid/utilities" },
      { title: "Working in Madrid", link: "/living-in-madrid/work" }
    ]
  },
  {
    title: "See in Madrid",
    description: "Discover Madrid's incredible sights, from world-class museums to hidden architectural gems.",
    imageUrl: "https://images.unsplash.com/photo-1577782853630-673eafa2c209?q=80&w=800&auto=format&fit=crop",
    link: "/see-in-madrid",
    icon: <Eye className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Museums & Galleries", link: "/see-in-madrid/museums" },
      { title: "Royal Sites & Palaces", link: "/see-in-madrid/royal-sites" },
      { title: "Historic Sites & Monuments", link: "/see-in-madrid/historic" },
      { title: "Parks & Gardens", link: "/see-in-madrid/parks" },
      { title: "Neighborhoods Guide", link: "/see-in-madrid/neighborhoods" },
      { title: "Viewpoints & Rooftops", link: "/see-in-madrid/viewpoints" }
    ]
  },
  {
    title: "Do in Madrid",
    description: "Experience Madrid's vibrant culture through food, nightlife, shopping, and entertainment.",
    imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=800&auto=format&fit=crop",
    link: "/do-in-madrid",
    icon: <Activity className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Food & Dining", link: "/do-in-madrid/food-drink" },
      { title: "Nightlife & Bars", link: "/do-in-madrid/nightlife" },
      { title: "Shopping Districts", link: "/do-in-madrid/shopping" },
      { title: "Markets & Flea Markets", link: "/do-in-madrid/markets" },
      { title: "Entertainment & Shows", link: "/do-in-madrid/entertainment" },
      { title: "Sports & Recreation", link: "/do-in-madrid/sports" }
    ]
  }
];

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
  
  console.log('Index page rendering successfully');
  
  return (
    <Layout>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-madrid-red text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      
      {/* Enhanced Hero Section with Madrid Now integrated */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Madrid Insider
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your comprehensive English-language directory for Madrid - whether you're visiting for a few days or making Madrid your home.
            </p>
          </div>
          
          {/* Madrid Now integrated into hero */}
          <div className="bg-gradient-to-r from-madrid-red to-red-600 rounded-xl p-6 text-white max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Clock className="h-6 w-6" />
                  Madrid Now
                </h2>
                <p className="text-white/90">Current time in Madrid</p>
              </div>
              <div className="text-center md:text-right">
                <div className="text-3xl font-bold">{madridTime}</div>
                <div className="text-white/90">{madridDate}</div>
                <div className="text-sm text-white/75 mt-1">CET/CEST</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <a href="/madrid-now/weather" className="hover:text-white/80 transition-colors">
                  📊 Weather Today
                </a>
                <a href="/madrid-now/events" className="hover:text-white/80 transition-colors">
                  🎭 Current Events
                </a>
                <a href="/madrid-now/transport" className="hover:text-white/80 transition-colors">
                  🚇 Transport Updates
                </a>
                <a href="/madrid-now" className="hover:text-white/80 transition-colors font-medium">
                  View All →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main id="main-content" className="container mx-auto py-12 px-4">
        {/* Main Categories in a 2x2 grid */}
        <section aria-label="Main categories" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainCategories.map(category => (
            <article key={category.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-within:shadow-xl">
              <div className="relative">
                <img 
                  src={category.imageUrl} 
                  alt={`${category.title} - ${category.description}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  width="400"
                  height="192"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                  <div className="bg-madrid-red p-2 rounded-lg shadow-md" aria-hidden="true">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-bold">{category.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{category.description}</p>
                
                <div className="mb-4">
                  <nav aria-label={`${category.title} quick links`}>
                    <div className="grid grid-cols-1 gap-1">
                      {category.subcategories.slice(0, 3).map((sub, index) => (
                        <a 
                          key={index}
                          href={sub.link}
                          className="text-sm text-gray-600 hover:text-madrid-red transition-colors p-1 rounded hover:bg-gray-50 focus:bg-gray-50 focus:text-madrid-red focus:outline-none"
                        >
                          • {sub.title}
                        </a>
                      ))}
                    </div>
                    {category.subcategories.length > 3 && (
                      <p className="text-sm text-madrid-red mt-2 font-medium">
                        + {category.subcategories.length - 3} more sections
                      </p>
                    )}
                  </nav>
                </div>
                
                <a 
                  href={category.link}
                  className="inline-flex items-center justify-center w-full bg-madrid-red text-white px-4 py-2 rounded-lg hover:bg-madrid-red/90 transition-all duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-madrid-red focus:ring-offset-2"
                  aria-label={`Explore all ${category.title} content`}
                >
                  Explore All →
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
export { mainCategories };
