
import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ContentCard from '@/components/ContentCard';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Map, Film, Music, ShoppingBag, MapPin } from 'lucide-react';

const ThingsToDo = () => {
  const [activeTab, setActiveTab] = useState("attractions");

  const attractions = [
    {
      title: "Prado Museum",
      description: "Spain's main national art museum, featuring one of the world's finest collections of European art from the 12th to early 20th century.",
      imageUrl: "https://images.unsplash.com/photo-1580323956656-26bbb1206e34?auto=format&fit=crop&q=80&w=800",
      link: "/things-to-do/prado-museum"
    },
    {
      title: "Royal Palace of Madrid",
      description: "The official residence of the Spanish royal family, this opulent palace is one of the largest in Western Europe.",
      imageUrl: "https://images.unsplash.com/photo-1558661167-bb85426feefc?auto=format&fit=crop&q=80&w=800",
      link: "/things-to-do/royal-palace"
    },
    {
      title: "Retiro Park",
      description: "Madrid's most popular park, featuring beautiful gardens, a lake where you can rent rowboats, and the stunning Crystal Palace.",
      imageUrl: "https://images.unsplash.com/photo-1573064230902-58aa047ebfb5?auto=format&fit=crop&q=80&w=800",
      link: "/things-to-do/retiro-park"
    },
  ];

  const activities = [
    {
      title: "Walking Tour of Historic Madrid",
      description: "Explore the Habsburg district, Plaza Mayor, and old Madrid's charming streets with knowledgeable local guides.",
      imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=800",
      link: "/things-to-do/walking-tours"
    },
    {
      title: "Bicycle Tour Through Madrid Rio",
      description: "Cycle along Madrid's revitalized riverside park with rentals available throughout the route.",
      imageUrl: "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?auto=format&fit=crop&q=80&w=800",
      link: "/things-to-do/bicycle-tours"
    },
    {
      title: "Cooking Class: Spanish Cuisine",
      description: "Learn to make authentic paella, tortilla española, and other Spanish classics from local chefs.",
      imageUrl: "https://images.unsplash.com/photo-1556269923-e4ef51d69638?auto=format&fit=crop&q=80&w=800",
      link: "/things-to-do/cooking-classes"
    },
  ];

  const entertainment = [
    {
      title: "Flamenco Show at Tablao Villa Rosa",
      description: "Experience authentic flamenco performed by talented dancers, singers, and guitarists in an intimate venue.",
      imageUrl: "https://images.unsplash.com/photo-1535486607281-4fc90307a8bb?auto=format&fit=crop&q=80&w=800",
      link: "/things-to-do/flamenco-shows"
    },
    {
      title: "Teatro Real Opera House",
      description: "Madrid's prestigious opera house offering world-class performances in a stunning historic building.",
      imageUrl: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800",
      link: "/things-to-do/teatro-real"
    },
    {
      title: "Cine Doré - Filmoteca Española",
      description: "Historic cinema showing classic films and foreign movies at bargain prices in a beautiful vintage setting.",
      imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
      link: "/things-to-do/cine-dore"
    },
  ];

  const shopping = [
    {
      title: "Gran Vía",
      description: "Madrid's main shopping street featuring international brands, Spanish retailers, and beautiful architecture.",
      imageUrl: "https://images.unsplash.com/photo-1558370781-d6196949e317?auto=format&fit=crop&q=80&w=800",
      link: "/things-to-do/gran-via"
    },
    {
      title: "El Rastro Flea Market",
      description: "Madrid's largest open-air flea market, held every Sunday morning in La Latina district.",
      imageUrl: "https://images.unsplash.com/photo-1555443805-658637491dd4?auto=format&fit=crop&q=80&w=800",
      link: "/things-to-do/el-rastro"
    },
    {
      title: "Mercado de San Miguel",
      description: "Gourmet food market in a historic iron structure offering Spanish delicacies and unique souvenirs.",
      imageUrl: "https://images.unsplash.com/photo-1600623050499-78e86650225c?auto=format&fit=crop&q=80&w=800",
      link: "/things-to-do/mercado-san-miguel"
    },
  ];

  const heroImage = "https://images.unsplash.com/photo-1558370781-d6196949e317?auto=format&fit=crop&q=80&w=1600";

  return (
    <Layout>
      <HeroSection
        title="Things To Do in Madrid"
        subtitle="Explore the best attractions, activities, entertainment, and shopping experiences that Madrid has to offer"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="attractions" className="flex items-center gap-2">
              <MapPin size={18} /> Attractions
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center gap-2">
              <Map size={18} /> Activities
            </TabsTrigger>
            <TabsTrigger value="entertainment" className="flex items-center gap-2">
              <Film size={18} /> Entertainment
            </TabsTrigger>
            <TabsTrigger value="shopping" className="flex items-center gap-2">
              <ShoppingBag size={18} /> Shopping
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="attractions" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Top Attractions</h2>
              <p className="text-gray-600 mb-8">Madrid's must-see museums, monuments, and landmarks that showcase the city's rich history and culture.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {attractions.map((item, index) => (
                  <ContentCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="activities" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Fun Activities</h2>
              <p className="text-gray-600 mb-8">Interactive experiences and tours that let you engage with Madrid's culture and lifestyle.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((item, index) => (
                  <ContentCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="entertainment" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Entertainment</h2>
              <p className="text-gray-600 mb-8">From traditional flamenco to modern cinema, discover Madrid's vibrant entertainment scene.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {entertainment.map((item, index) => (
                  <ContentCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="shopping" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Shopping</h2>
              <p className="text-gray-600 mb-8">From luxury boutiques to local markets, Madrid offers diverse shopping opportunities for every taste and budget.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shopping.map((item, index) => (
                  <ContentCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-12 bg-gray-50">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4">Local Tip</h3>
            <p className="text-gray-700 italic">
              "Many of Madrid's major museums offer free entry during certain hours or days. The Prado is free daily from 6-8pm on weekdays and 5-7pm on Sundays and holidays. 
              Check museum websites before visiting to take advantage of these opportunities!"
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ThingsToDo;
