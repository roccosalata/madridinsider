
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ContentCard from '@/components/ContentCard';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Restaurant, Utensils, Cafe } from 'lucide-react';
import { useState } from 'react';

const FoodAndDrink = () => {
  const [activeTab, setActiveTab] = useState("restaurants");
  
  const restaurants = [
    {
      title: "Botín",
      description: "Founded in 1725, Botín is recognized by Guinness World Records as the oldest restaurant in the world. Famous for its roast suckling pig and Castilian lamb.",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
      link: "/food-and-drink/botin"
    },
    {
      title: "Casa Salvador",
      description: "Traditional Madrid restaurant serving classic Spanish cuisine with an emphasis on seafood and rice dishes.",
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
      link: "/food-and-drink/casa-salvador"
    },
    {
      title: "La Gabinoteca",
      description: "Modern Spanish restaurant with creative takes on traditional dishes and an excellent wine selection.",
      imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
      link: "/food-and-drink/la-gabinoteca"
    },
  ];
  
  const tapas = [
    {
      title: "Mercado de San Miguel",
      description: "Historic market turned gourmet food hall offering a wide variety of tapas, wines, and other Spanish delicacies.",
      imageUrl: "https://images.unsplash.com/photo-1600623050499-78e86650225c?auto=format&fit=crop&q=80&w=800",
      link: "/food-and-drink/mercado-san-miguel"
    },
    {
      title: "El Tigre",
      description: "Popular student hangout famous for serving generous free tapas with each drink order.",
      imageUrl: "https://images.unsplash.com/photo-1530990457142-bb18a441c52b?auto=format&fit=crop&q=80&w=800",
      link: "/food-and-drink/el-tigre"
    },
    {
      title: "La Latina Tapas Crawl",
      description: "A curated route of the best tapas bars in the La Latina neighborhood, perfect for Sunday afternoons.",
      imageUrl: "https://images.unsplash.com/photo-1529058993007-a1a7a9418f1a?auto=format&fit=crop&q=80&w=800",
      link: "/food-and-drink/la-latina-tapas"
    },
  ];
  
  const cafes = [
    {
      title: "Café Comercial",
      description: "One of Madrid's oldest and most iconic cafés, recently renovated while maintaining its historic charm.",
      imageUrl: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800",
      link: "/food-and-drink/cafe-comercial"
    },
    {
      title: "Toma Café",
      description: "A specialty coffee shop loved by locals for its expertly prepared brews and cozy atmosphere.",
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
      link: "/food-and-drink/toma-cafe"
    },
    {
      title: "Chocolatería San Ginés",
      description: "Historic café serving Madrid's best churros con chocolate since 1894, open 24 hours.",
      imageUrl: "https://images.unsplash.com/photo-1578314675249-a6910f80239a?auto=format&fit=crop&q=80&w=800",
      link: "/food-and-drink/san-gines"
    },
  ];

  return (
    <Layout>
      <HeroSection
        title="Eating & Drinking in Madrid"
        subtitle="Discover Madrid's culinary scene, from traditional restaurants to trendy tapas bars and charming cafés"
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">A Food Lover's Paradise</h2>
          <p className="text-gray-700 mb-2">
            Madrid's culinary scene is a delightful journey through Spanish gastronomy, from traditional taverns serving home-style cooking to innovative restaurants pushing culinary boundaries.
          </p>
          <p className="text-gray-700">
            As a true Madrileño eats, your day should start with a café con leche and toast, followed by a proper lunch (2-4pm), evening tapas with friends, and dinner from 9pm onwards. Don't rush—eating here is a social experience to be savored.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="restaurants" className="flex items-center gap-2">
              <Restaurant size={18} /> Restaurants
            </TabsTrigger>
            <TabsTrigger value="tapas" className="flex items-center gap-2">
              <Utensils size={18} /> Tapas Bars
            </TabsTrigger>
            <TabsTrigger value="cafes" className="flex items-center gap-2">
              <Cafe size={18} /> Cafés
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="restaurants" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Top Restaurants</h2>
              <p className="text-gray-600 mb-8">From centuries-old establishments to modern dining experiences, these restaurants showcase the best of Madrid's cuisine.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((item, index) => (
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
          
          <TabsContent value="tapas" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Best Tapas Bars</h2>
              <p className="text-gray-600 mb-8">Experience Madrid's tapas culture at these authentic bars where small plates accompany your drinks.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tapas.map((item, index) => (
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
          
          <TabsContent value="cafes" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Cozy Cafés</h2>
              <p className="text-gray-600 mb-8">Relax and recharge at Madrid's charming cafés, offering everything from traditional Spanish coffee to artisanal brews.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cafes.map((item, index) => (
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
            <h3 className="text-2xl font-bold mb-4">Insider Tip</h3>
            <p className="text-gray-700 italic">
              "For an authentic Madrid experience, join the locals in La Latina for 'el aperitivo' on Sunday afternoons. Start at Plaza de la Cebada and make your way through Cava Baja, stopping at tapas bars along the way. Order a 'caña' (small beer) and enjoy whatever tapa comes with it at each spot!"
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FoodAndDrink;
