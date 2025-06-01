
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
      { title: "Language Basics", link: "/madrid-essentials/language" }
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
      { title: "Paperwork & Formalities", link: "/living-in-madrid/paperwork" },
      { title: "Banking & Finances", link: "/living-in-madrid/banking" },
      { title: "Healthcare Guide", link: "/living-in-madrid/healthcare" },
      { title: "Education & Childcare", link: "/living-in-madrid/education" },
      { title: "Working in Madrid", link: "/living-in-madrid/work" }
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
      { title: "Historic Sites", link: "/see-in-madrid/historic" },
      { title: "Parks & Gardens", link: "/see-in-madrid/parks" },
      { title: "Architecture", link: "/see-in-madrid/architecture" },
      { title: "Viewpoints", link: "/see-in-madrid/viewpoints" },
      { title: "Neighborhoods", link: "/see-in-madrid/neighborhoods" }
    ]
  },
  {
    title: "Do in Madrid",
    description: "Find activities and experiences in Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=1000&auto=format&fit=crop",
    link: "/do-in-madrid",
    icon: <Activity className="h-6 w-6" />,
    subcategories: [
      { title: "Entertainment", link: "/do-in-madrid/entertainment" },
      { title: "Sports & Recreation", link: "/do-in-madrid/sports" },
      { title: "Shopping", link: "/do-in-madrid/shopping" },
      { title: "Food & Drink", link: "/do-in-madrid/food-drink" },
      { title: "Tours & Experiences", link: "/do-in-madrid/tours" },
      { title: "Nightlife", link: "/do-in-madrid/nightlife" }
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
      { title: "Festivals & Celebrations", link: "/madrid-now/festivals" },
      { title: "News & Updates", link: "/madrid-now/news" },
      { title: "Local Calendar", link: "/madrid-now/calendar" }
    ]
  }
];

const IndexPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Madrid Insider</h1>
        <p className="text-lg mb-12">Your comprehensive guide to Madrid - explore our main categories:</p>
        
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
      </div>
    </Layout>
  );
};

export default IndexPage;
export { mainCategories };
