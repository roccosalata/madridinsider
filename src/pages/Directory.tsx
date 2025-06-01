
import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { directoryData } from '@/data/directoryData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Home, Theater, Info, Heart, ShoppingBag, MapPin, Users, Activity, GraduationCap, Plane, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Directory = () => {
  const [activeCategory, setActiveCategory] = useState("living-in-madrid");
  
  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, JSX.Element> = {
      'living-in-madrid': <Home size={24} />
    };
    return iconMap[category] || <Info size={24} />;
  };
  
  const categoryLabels: Record<string, string> = {
    'living-in-madrid': "Living in Madrid"
  };

  return (
    <Layout>
      <HeroSection
        title="Madrid Insider Directory"
        subtitle="Your comprehensive guide to Madrid - browse all categories and find exactly what you're looking for"
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-700 mb-6">
            Our directory provides detailed information across a wide range of categories to help you navigate life in Madrid, whether you're visiting for a few days or planning to stay longer.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {Object.keys(directoryData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                  activeCategory === category 
                  ? 'bg-madrid-red text-white shadow-lg' 
                  : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="mb-2">
                  {getCategoryIcon(category)}
                </div>
                <span className="text-sm text-center font-medium">{categoryLabels[category]}</span>
              </button>
            ))}
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              {getCategoryIcon(activeCategory)}
              <span>{categoryLabels[activeCategory]}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {Object.entries(directoryData[activeCategory as keyof typeof directoryData]).map(([sectionKey, section]) => (
              <div key={sectionKey} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.introduction}</p>
              </div>
            ))}
            
            <div className="mt-6 text-center">
              <Link 
                to={`/${activeCategory}`}
                className="inline-block bg-madrid-red text-white font-medium px-6 py-2 rounded-md hover:bg-madrid-red/90 transition-colors"
              >
                View all {categoryLabels[activeCategory]} content
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Directory;
