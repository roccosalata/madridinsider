
import React from 'react';
import { Compass, Home, Eye, Activity, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const mainCategories = [
  {
    title: "Madrid Essentials",
    description: "Essential information for tourists visiting Madrid - from weather to emergency contacts.",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&auto=format&fit=crop",
    link: "/madrid-essentials",
    icon: <Compass className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Getting Started Guide", link: "/madrid-essentials/getting-started" },
      { title: "Weather & Climate", link: "/madrid-essentials/weather" },
      { title: "Emergency Contacts", link: "/madrid-essentials/emergency" },
      { title: "Maps & Navigation", link: "/madrid-essentials/maps" },
      { title: "Currency & Money", link: "/madrid-essentials/currency" },
      { title: "Language Basics", link: "/madrid-essentials/language" },
      { title: "Safety Tips", link: "/madrid-essentials/safety" },
      { title: "Tourist Information", link: "/madrid-essentials/tourist-info" },
      { title: "Embassies & Consulates", link: "/madrid-essentials/embassies" },
      { title: "What's On Today", link: "/madrid-essentials/whats-on" }
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
      { title: "Healthcare System", link: "/living-in-madrid/healthcare" },
      { title: "Banking & Finances", link: "/living-in-madrid/banking" },
      { title: "Working in Madrid", link: "/living-in-madrid/work" },
      { title: "Student Life", link: "/living-in-madrid/student-life" },
      { title: "Education & Schools", link: "/living-in-madrid/education" },
      { title: "Internet & Utilities", link: "/living-in-madrid/utilities" },
      { title: "Community & Expat Groups", link: "/living-in-madrid/community" },
      { title: "Daily Services", link: "/living-in-madrid/services" },
      { title: "Legal Services", link: "/living-in-madrid/legal" },
      { title: "Places of Worship", link: "/living-in-madrid/worship" }
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
      { title: "Architecture Tours", link: "/see-in-madrid/architecture" },
      { title: "Viewpoints & Rooftops", link: "/see-in-madrid/viewpoints" },
      { title: "Art Galleries", link: "/see-in-madrid/galleries" },
      { title: "Street Art & Murals", link: "/see-in-madrid/street-art" },
      { title: "Hidden Gems", link: "/see-in-madrid/hidden-gems" }
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
      { title: "Sports & Recreation", link: "/do-in-madrid/sports" },
      { title: "Entertainment & Shows", link: "/do-in-madrid/entertainment" },
      { title: "Tours & Experiences", link: "/do-in-madrid/tours" },
      { title: "Day Trips from Madrid", link: "/do-in-madrid/day-trips" },
      { title: "Spa & Wellness", link: "/do-in-madrid/wellness" },
      { title: "Festivals & Events", link: "/do-in-madrid/festivals" }
    ]
  },
  {
    title: "Madrid Now",
    description: "Stay updated with current events, weather, and what's happening in Madrid today.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    link: "/madrid-now",
    icon: <Clock className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Current Events", link: "/madrid-now/events" },
      { title: "Weather Today", link: "/madrid-now/weather" },
      { title: "Local Calendar", link: "/madrid-now/calendar" },
      { title: "Festivals This Month", link: "/madrid-now/festivals" },
      { title: "Transportation Updates", link: "/madrid-now/transport" },
      { title: "Construction & Closures", link: "/madrid-now/closures" },
      { title: "New Openings", link: "/madrid-now/openings" },
      { title: "News & Updates", link: "/madrid-now/news" }
    ]
  }
];

const IndexPage = () => {
  console.log('Index page rendering successfully');
  
  return (
    <Layout>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-madrid-red text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      
      <HeroSection 
        title="Welcome to Madrid Insider"
        subtitle="Your comprehensive English-language directory for Madrid - whether you're visiting for a few days or making Madrid your home."
      />
      
      <main id="main-content" className="container mx-auto py-16 px-4">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Explore Madrid Your Way</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Navigate through our main categories to find exactly what you need, from tourist attractions to practical living information.
          </p>
        </header>
        
        <section aria-label="Main categories" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainCategories.map(category => (
            <article key={category.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-within:shadow-xl">
              <div className="relative">
                <img 
                  src={category.imageUrl} 
                  alt={`${category.title} - ${category.description}`}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  width="400"
                  height="224"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                  <div className="bg-madrid-red p-2 rounded-lg shadow-md" aria-hidden="true">
                    {category.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold">{category.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6 text-base leading-relaxed">{category.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3">Quick Access:</h3>
                  <nav aria-label={`${category.title} subcategories`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.subcategories.slice(0, 4).map((sub, index) => (
                        <a 
                          key={index}
                          href={sub.link}
                          className="text-sm text-gray-600 hover:text-madrid-red transition-colors p-2 rounded-md hover:bg-gray-50 focus:bg-gray-50 focus:text-madrid-red focus:outline-none focus:ring-2 focus:ring-madrid-red/20"
                        >
                          • {sub.title}
                        </a>
                      ))}
                    </div>
                    {category.subcategories.length > 4 && (
                      <p className="text-sm text-madrid-red mt-3 font-medium" aria-label={`${category.subcategories.length - 4} more sections available`}>
                        + {category.subcategories.length - 4} more sections
                      </p>
                    )}
                  </nav>
                </div>
                
                <a 
                  href={category.link}
                  className="inline-flex items-center justify-center w-full bg-madrid-red text-white px-6 py-3 rounded-lg hover:bg-madrid-red/90 transition-all duration-200 font-medium shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-madrid-red focus:ring-offset-2"
                  aria-label={`Explore all ${category.title} content`}
                >
                  Explore All →
                </a>
              </div>
            </article>
          ))}
        </section>
        
        <section className="bg-gradient-to-r from-madrid-red to-red-600 rounded-2xl p-8 md:p-12 text-white" aria-labelledby="about-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">About Madrid Insider</h2>
            <p className="text-lg md:text-xl mb-6 text-white/95 leading-relaxed">
              Madrid Insider is your comprehensive English-language directory for everything Madrid. We serve both tourists looking for the best experiences and residents (expats, students, locals) who need practical information for daily life.
            </p>
            <p className="text-base md:text-lg text-white/85 leading-relaxed">
              Our content is organized into logical hubs to help you find exactly what you need, when you need it. From emergency contacts to the best tapas bars, from NIE paperwork to hidden neighborhood gems - we've got you covered.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
export { mainCategories };
