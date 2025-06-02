
import React from 'react';
import { Compass, Home, Eye, Activity, Clock } from 'lucide-react';
import Layout from '@/components/Layout';

const mainCategories = [
  {
    title: "Madrid Essentials",
    description: "Essential information for tourists visiting Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1000&auto=format&fit=crop",
    link: "/madrid-essentials",
    icon: <Compass className="h-6 w-6" />,
    subcategories: [
      { title: "Maps & Navigation", link: "/madrid-essentials/maps" },
      { title: "Emergency Contacts", link: "/madrid-essentials/emergency" },
      { title: "Getting Started Guide", link: "/madrid-essentials/getting-started" },
      { title: "Weather & Climate", link: "/madrid-essentials/weather" },
      { title: "Currency & Money", link: "/madrid-essentials/currency" },
      { title: "Language Basics", link: "/madrid-essentials/language" },
      { title: "Embassies & Consulates", link: "/madrid-essentials/embassies" },
      { title: "Post Office & Mail", link: "/madrid-essentials/post-office" },
      { title: "Tourist Information", link: "/madrid-essentials/tourist-info" },
      { title: "Safety Tips", link: "/madrid-essentials/safety" }
    ]
  },
  {
    title: "Living in Madrid",
    description: "Essential information and resources for residents, students, and expats.",
    imageUrl: "https://images.unsplash.com/photo-1551896235-94561d5d3fcc?q=80&w=1000&auto=format&fit=crop",
    link: "/living-in-madrid",
    icon: <Home className="h-6 w-6" />,
    subcategories: [
      { title: "Finding Accommodation", link: "/living-in-madrid/accommodation" },
      { title: "Paperwork & NIE/TIE", link: "/living-in-madrid/paperwork" },
      { title: "Banking & Finances", link: "/living-in-madrid/banking" },
      { title: "Healthcare System", link: "/living-in-madrid/healthcare" },
      { title: "Education & Schools", link: "/living-in-madrid/education" },
      { title: "Working in Madrid", link: "/living-in-madrid/work" },
      { title: "Student Life", link: "/living-in-madrid/student-life" },
      { title: "Internet & Utilities", link: "/living-in-madrid/utilities" },
      { title: "Community & Expat Groups", link: "/living-in-madrid/community" },
      { title: "Daily Services", link: "/living-in-madrid/services" },
      { title: "Places of Worship", link: "/living-in-madrid/worship" },
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
      { title: "Historic Sites & Monuments", link: "/see-in-madrid/historic" },
      { title: "Parks & Gardens", link: "/see-in-madrid/parks" },
      { title: "Architecture Tours", link: "/see-in-madrid/architecture" },
      { title: "Viewpoints & Rooftops", link: "/see-in-madrid/viewpoints" },
      { title: "Neighborhoods Guide", link: "/see-in-madrid/neighborhoods" },
      { title: "Royal Sites", link: "/see-in-madrid/royal-sites" },
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
      { title: "Sports & Recreation", link: "/do-in-madrid/sports" },
      { title: "Entertainment & Shows", link: "/do-in-madrid/entertainment" },
      { title: "Tours & Experiences", link: "/do-in-madrid/tours" },
      { title: "Markets & Flea Markets", link: "/do-in-madrid/markets" },
      { title: "Spa & Wellness", link: "/do-in-madrid/wellness" },
      { title: "Day Trips", link: "/do-in-madrid/day-trips" },
      { title: "Festivals & Events", link: "/do-in-madrid/festivals" }
    ]
  },
  {
    title: "Madrid Now",
    description: "Latest events and happenings in Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1000&auto=format&fit=crop",
    link: "/madrid-now",
    icon: <Clock className="h-6 w-6" />,
    subcategories: [
      { title: "Current Events", link: "/madrid-now/events" },
      { title: "Weather Today", link: "/madrid-now/weather" },
      { title: "Festivals This Month", link: "/madrid-now/festivals" },
      { title: "News & Updates", link: "/madrid-now/news" },
      { title: "Local Calendar", link: "/madrid-now/calendar" },
      { title: "Transportation Updates", link: "/madrid-now/transport" },
      { title: "Construction & Closures", link: "/madrid-now/closures" },
      { title: "New Openings", link: "/madrid-now/openings" }
    ]
  }
];

const IndexPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Madrid Insider</h1>
        <p className="text-lg mb-6">Your comprehensive English-language directory for Madrid - whether you're visiting for a few days or making Madrid your home.</p>
        <p className="text-md text-gray-600 mb-12">Navigate through our main categories to find exactly what you need:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainCategories.map(category => (
            <div key={category.title} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={category.imageUrl} 
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {category.icon}
                  <h2 className="text-xl font-bold">{category.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                {/* Show first 4 subcategories as preview */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500 mb-2">Includes:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.subcategories.slice(0, 4).map((sub, index) => (
                      <li key={index}>• {sub.title}</li>
                    ))}
                    {category.subcategories.length > 4 && (
                      <li className="text-madrid-red">• And {category.subcategories.length - 4} more...</li>
                    )}
                  </ul>
                </div>
                
                <a 
                  href={category.link}
                  className="text-madrid-red hover:underline font-semibold"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">About Madrid Insider</h2>
          <p className="text-gray-700 mb-4">
            Madrid Insider is your comprehensive English-language directory for everything Madrid. We serve both tourists looking for the best experiences and residents (expats, students, locals) who need practical information for daily life.
          </p>
          <p className="text-gray-700">
            Our content is organized into logical hubs to help you find exactly what you need, when you need it. From emergency contacts to the best tapas bars, from NIE paperwork to hidden neighborhood gems - we've got you covered.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
export { mainCategories };
