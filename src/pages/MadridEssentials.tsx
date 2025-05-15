
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MadridEssentials = () => {
  const sections = [
    {
      id: 'latest',
      title: 'Latest from Madrid Insider',
      content: 'Stay updated with our latest blog posts and news about Madrid.',
    },
    {
      id: 'events',
      title: 'What\'s On / Current Events in Madrid',
      content: 'Discover upcoming events, festivals, and activities happening in Madrid.',
    },
    {
      id: 'maps',
      title: 'Madrid Maps Hub',
      content: 'Essential maps to help you navigate Madrid like a local.',
    },
    {
      id: 'districts',
      title: 'Key Madrid Districts at a Glance',
      content: 'Quick overview of Madrid\'s most important neighborhoods and districts.',
    },
    {
      id: 'first-timer',
      title: 'Essential First-Timer Tips for Madrid',
      content: 'Must-know information for your first visit to Madrid.',
    },
    {
      id: 'layout',
      title: 'Understanding Madrid\'s Layout',
      content: 'Get familiar with how Madrid is structured and organized.',
    },
    {
      id: 'weather',
      title: 'Weather & Best Time to Visit Madrid',
      content: 'Seasonal information and tips on when to visit Madrid.',
    },
    {
      id: 'customs',
      title: 'Basic Spanish Customs & Greetings',
      content: 'Learn essential Spanish phrases and cultural etiquette.',
    }
  ];

  return (
    <Layout>
      <HeroSection 
        title="Madrid Essentials" 
        subtitle="Your starting point: What's new, current events, key maps, city layout, and first-timer tips for Madrid." 
      />
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="latest" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {sections.slice(0, 4).map((section) => (
              <TabsTrigger key={section.id} value={section.id}>
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {sections.slice(4).map((section) => (
              <TabsTrigger key={section.id} value={section.id}>
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {sections.map((section) => (
            <TabsContent key={section.id} value={section.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>Essential information for visitors</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{section.content}</p>
                  <p className="text-sm text-gray-500">More detailed information coming soon.</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CategoryLink 
              to="/transport" 
              title="Getting Around" 
              description="Find transportation options in Madrid" 
            />
            <CategoryLink 
              to="/things-to-do" 
              title="See, Do & Explore" 
              description="Discover attractions and activities" 
            />
            <CategoryLink 
              to="/food-and-drink" 
              title="Eat & Drink" 
              description="Best food and drink experiences" 
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const CategoryLink = ({ to, title, description }: { to: string; title: string; description: string }) => (
  <Link to={to} className="no-underline">
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-madrid-red">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </Link>
);

export default MadridEssentials;
