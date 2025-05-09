
import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { directoryData } from '@/data/directoryData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Home, Theater, Info, Heart, ShoppingBag, MapPin, Users, Activity, GraduationCap, Plane, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Directory = () => {
  const [activeCategory, setActiveCategory] = useState("foodAndDrink");
  
  // Function to get the section link based on category key
  const getCategoryLink = (categoryKey: string) => {
    const linkMap: Record<string, string> = {
      foodAndDrink: "/food-and-drink",
      living: "/living",
      artsAndEntertainment: "/things-to-do",
      sightseeing: "/things-to-do",
      travel: "/transport",
      // Add more mappings as needed
    };
    return linkMap[categoryKey] || "/";
  };
  
  // Get the icon for each category
  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, JSX.Element> = {
      foodAndDrink: <Utensils size={24} />,
      living: <Home size={24} />,
      artsAndEntertainment: <Theater size={24} />,
      genInfoAndServices: <Info size={24} />,
      healthAndMedical: <Heart size={24} />,
      shopsAndServices: <ShoppingBag size={24} />,
      sightseeing: <MapPin size={24} />,
      socializingAndFun: <Users size={24} />,
      sportsAndRecreation: <Activity size={24} />,
      studyAndStudentLife: <GraduationCap size={24} />,
      travel: <Plane size={24} />,
      workAndResidency: <Briefcase size={24} />
    };
    return iconMap[category] || <Info size={24} />;
  };
  
  const categoryLabels: Record<string, string> = {
    foodAndDrink: "Food & Drink",
    living: "Living",
    artsAndEntertainment: "Arts & Entertainment",
    genInfoAndServices: "General Info & Services",
    healthAndMedical: "Health & Medical",
    shopsAndServices: "Shops & Services",
    sightseeing: "Sightseeing",
    socializingAndFun: "Socializing & Fun",
    sportsAndRecreation: "Sports & Recreation",
    studyAndStudentLife: "Study & Student Life",
    travel: "Travel",
    workAndResidency: "Work & Residency"
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
            {Object.keys(directoryData[activeCategory as keyof typeof directoryData]).map((section) => (
              <div key={section} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{section}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  {directoryData[activeCategory as keyof typeof directoryData][section].map((item) => (
                    <li key={item} className="text-gray-700 hover:text-madrid-red">
                      <Link 
                        to={`${getCategoryLink(activeCategory)}?subcategory=${encodeURIComponent(item)}`}
                        className="flex items-center py-2"
                      >
                        <span className="text-gray-400 mr-2">•</span>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="mt-6 text-center">
              <Link 
                to={getCategoryLink(activeCategory)}
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
