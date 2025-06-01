import React from 'react';
import { Compass, Home, Eye, Activity, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export const mainCategories = [
  {
    title: "Madrid Essentials",
    description: "Essential information for tourists visiting Madrid - first-timer tips, maps, emergencies, and practical info.",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1000&auto=format&fit=crop",
    link: "/madrid-essentials",
    icon: <Compass className="h-6 w-6" />,
    subcategories: [
      { title: "First-Timer Information", link: "/madrid-essentials#first-timer" },
      { title: "Maps & Navigation", link: "/madrid-essentials#maps" },
      { title: "Weather & Best Time to Visit", link: "/madrid-essentials#weather" },
      { title: "Emergency & Safety", link: "/madrid-essentials#emergency" },
      { title: "Essential Services", link: "/madrid-essentials#services" },
    ]
  },
  {
    title: "Living in Madrid",
    description: "Everything for residents, students, and expats - from finding accommodation to daily life essentials.",
    imageUrl: "https://images.unsplash.com/photo-1551896235-94561d5d3fcc?q=80&w=1000&auto=format&fit=crop",
    link: "/living-madrid",
    icon: <Home className="h-6 w-6" />,
    subcategories: [
      { title: "Accommodation", link: "/living-madrid#accommodation" },
      { title: "Paperwork & Legal", link: "/living-madrid#paperwork" },
      { title: "Banking & Finances", link: "/living-madrid#banking" },
      { title: "Healthcare System", link: "/living-madrid#healthcare" },
      { title: "Education & Childcare", link: "/living-madrid#education" },
      { title: "Working in Madrid", link: "/living-madrid#working" },
      { title: "Daily Life Services", link: "/living-madrid#daily-services" },
      { title: "Community & Integration", link: "/living-madrid#community" },
    ]
  },
  {
    title: "See in Madrid",
    description: "Discover Madrid's iconic landmarks, historical sites, beautiful parks, world-class museums, and neighborhoods.",
    imageUrl: "https://images.unsplash.com/photo-1577782853630-673eafa2c209?q=80&w=1000&auto=format&fit=crop",
    link: "/see-madrid",
    icon: <Eye className="h-6 w-6" />,
    subcategories: [
      { title: "Iconic Sights & Landmarks", link: "/see-madrid#sights" },
      { title: "Museums & Galleries", link: "/see-madrid#museums" },
      { title: "Parks & Green Spaces", link: "/see-madrid#parks" },
      { title: "Architecture & Buildings", link: "/see-madrid#architecture" },
      { title: "Neighborhoods Guide", link: "/see-madrid#neighborhoods" },
      { title: "Day Trips from Madrid", link: "/see-madrid#day-trips" },
    ]
  },
  {
    title: "Do in Madrid",
    description: "Activities, entertainment, sports, shopping, and experiences to enjoy in Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=1000&auto=format&fit=crop",
    link: "/do-madrid",
    icon: <Activity className="h-6 w-6" />,
    subcategories: [
      { title: "Entertainment & Culture", link: "/do-madrid#entertainment" },
      { title: "Sports & Recreation", link: "/do-madrid#sports" },
      { title: "Shopping", link: "/do-madrid#shopping" },
      { title: "Nightlife & Social", link: "/do-madrid#nightlife" },
      { title: "Food & Dining", link: "/food-and-drink" },
      { title: "Health & Wellness", link: "/health-and-wellness" },
      { title: "Transportation", link: "/transport" },
    ]
  },
  {
    title: "Madrid Now",
    description: "Current events, what's happening now, weather, and real-time information about Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1000&auto=format&fit=crop",
    link: "/madrid-now",
    icon: <Clock className="h-6 w-6" />,
    subcategories: [
      { title: "Current Events & What's On", link: "/madrid-now#events" },
      { title: "Time & Weather", link: "/madrid-now#time-weather" },
      { title: "News & Updates", link: "/madrid-now#news" },
      { title: "Temporary Information", link: "/madrid-now#temporary" },
    ]
  }
];

const IndexPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Welcome to Madrid Insider</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive English-language guide to Madrid, Spain. Whether you're visiting, living, or just exploring, 
            we've got everything you need to make the most of your Madrid experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCategories.map(category => (
            <Link key={category.title} to={category.link} className="no-underline">
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={category.imageUrl} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-madrid-red">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/madrid-essentials#maps" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-madrid-red">Maps</h3>
              <p className="text-sm text-gray-600">Navigate Madrid</p>
            </Link>
            <Link to="/madrid-now#events" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-madrid-red">What's On</h3>
              <p className="text-sm text-gray-600">Current events</p>
            </Link>
            <Link to="/do-madrid#transportation" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-madrid-red">Transport</h3>
              <p className="text-sm text-gray-600">Getting around</p>
            </Link>
            <Link to="/madrid-essentials#emergency" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-madrid-red">Emergency</h3>
              <p className="text-sm text-gray-600">Important contacts</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
