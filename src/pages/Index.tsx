
import React from 'react';
import { Compass, Home, Eye, Activity, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const mainCategories = [
  {
    title: "Madrid Essentials",
    description: "Essential information for tourists visiting Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1000&auto=format&fit=crop",
    link: "/madrid-essentials",
    icon: <Compass className="h-6 w-6" />,
    subcategories: [
      { title: "Getting Started Guide", link: "/madrid-essentials/getting-started" },
      { title: "Maps & Navigation", link: "/madrid-essentials/maps" },
      { title: "Emergency Contacts", link: "/madrid-essentials/emergency" },
      { title: "Weather & Climate", link: "/madrid-essentials/weather" },
      { title: "Currency & Money", link: "/madrid-essentials/currency" },
      { title: "Language Basics", link: "/madrid-essentials/language" },
      { title: "Safety Tips", link: "/madrid-essentials/safety" },
      { title: "Tourist Information", link: "/madrid-essentials/tourist-info" },
      { title: "Embassies & Consulates", link: "/madrid-essentials/embassies" },
      { title: "Post Office & Mail", link: "/madrid-essentials/post-office" }
    ]
  },
  {
    title: "Living in Madrid",
    description: "Essential information and resources for residents, students, and expats.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop",
    link: "/living-in-madrid",
    icon: <Home className="h-6 w-6" />,
    subcategories: [
      { title: "Paperwork & NIE/TIE", link: "/living-in-madrid/paperwork" },
      { title: "Finding Accommodation", link: "/living-in-madrid/accommodation" },
      { title: "Banking & Finances", link: "/living-in-madrid/banking" },
      { title: "Healthcare System", link: "/living-in-madrid/healthcare" },
      { title: "Internet & Utilities", link: "/living-in-madrid/utilities" },
      { title: "Working in Madrid", link: "/living-in-madrid/work" },
      { title: "Student Life", link: "/living-in-madrid/student-life" },
      { title: "Education & Schools", link: "/living-in-madrid/education" },
      { title: "Places of Worship", link: "/living-in-madrid/worship" },
      { title: "Community & Expat Groups", link: "/living-in-madrid/community" },
      { title: "Daily Services", link: "/living-in-madrid/services" },
      { title: "Legal Services", link: "/living-in-madrid/legal" }
    ]
  },
  {
    title: "See in Madrid",
    description: "Explore the sights and attractions of Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1577782853630-673eafa2c209?q=80&w=1000&auto=format&fit=crop",
    link: "/see-in-madrid",
    icon: <Eye className="h-6 w-6" />,
    subcategories: [
      { title: "Museums & Galleries", link: "/see-in-madrid/museums" },
      { title: "Royal Sites", link: "/see-in-madrid/royal-sites" },
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
    description: "Find activities and experiences in Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=1000&auto=format&fit=crop",
    link: "/do-in-madrid",
    icon: <Activity className="h-6 w-6" />,
    subcategories: [
      { title: "Food & Dining", link: "/do-in-madrid/food-drink" },
      { title: "Nightlife & Bars", link: "/do-in-madrid/nightlife" },
      { title: "Shopping Districts", link: "/do-in-madrid/shopping" },
      { title: "Markets & Flea Markets", link: "/do-in-madrid/markets" },
      { title: "Sports & Recreation", link: "/do-in-madrid/sports" },
      { title: "Entertainment & Shows", link: "/do-in-madrid/entertainment" },
      { title: "Tours & Experiences", link: "/do-in-madrid/tours" },
      { title: "Day Trips", link: "/do-in-madrid/day-trips" },
      { title: "Spa & Wellness", link: "/do-in-madrid/wellness" },
      { title: "Festivals & Events", link: "/do-in-madrid/festivals" }
    ]
  },
  {
    title: "Madrid Now",
    description: "Latest events and happenings in Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
    link: "/madrid-now",
    icon: <Clock className="h-6 w-6" />,
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
  return (
    <Layout>
      <HeroSection 
        title="Welcome to Madrid Insider"
        subtitle="Your comprehensive English-language directory for Madrid - whether you're visiting for a few days or making Madrid your home."
      />
      
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Explore Madrid Your Way</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Navigate through our main categories to find exactly what you need, from tourist attractions to practical living information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainCategories.map(category => (
            <div key={category.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={category.imageUrl} 
                  alt={category.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <div className="bg-madrid-red p-2 rounded-lg">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-bold">{category.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Quick Access:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {category.subcategories.slice(0, 4).map((sub, index) => (
                      <a 
                        key={index}
                        href={sub.link}
                        className="text-xs text-gray-600 hover:text-madrid-red transition-colors p-2 rounded-md hover:bg-gray-50"
                      >
                        • {sub.title}
                      </a>
                    ))}
                  </div>
                  {category.subcategories.length > 4 && (
                    <p className="text-xs text-madrid-red mt-2 font-medium">
                      + {category.subcategories.length - 4} more sections
                    </p>
                  )}
                </div>
                
                <a 
                  href={category.link}
                  className="inline-flex items-center justify-center w-full bg-madrid-red text-white px-4 py-3 rounded-lg hover:bg-madrid-red/90 transition-colors font-medium"
                >
                  Explore All →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-madrid-red to-red-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About Madrid Insider</h2>
            <p className="text-lg mb-6 text-white/90">
              Madrid Insider is your comprehensive English-language directory for everything Madrid. We serve both tourists looking for the best experiences and residents (expats, students, locals) who need practical information for daily life.
            </p>
            <p className="text-base text-white/80">
              Our content is organized into logical hubs to help you find exactly what you need, when you need it. From emergency contacts to the best tapas bars, from NIE paperwork to hidden neighborhood gems - we've got you covered.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
export { mainCategories };
