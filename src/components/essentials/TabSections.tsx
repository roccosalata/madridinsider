
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import UsefulInformation from './UsefulInformation';
import WhatsOnContent from './WhatsOnContent';

const TabSections = () => {
  const sections = [
    {
      id: 'latest',
      title: 'Useful Information',
      content: <UsefulInformation />,
    },
    {
      id: 'events',
      title: 'What\'s On / Current Events in Madrid',
      content: <WhatsOnContent />,
    },
    {
      id: 'maps',
      title: 'Madrid Maps Hub',
      content: 'Essential maps to help you navigate Madrid like a local.',
    },
    {
      id: 'first-timer',
      title: 'Essential First-Timer Tips for Madrid',
      content: 'Must-know information for your first visit to Madrid.',
    },
    {
      id: 'weather',
      title: 'Weather & Best Time to Visit Madrid',
      content: 'Weather & Best Time to Visit Madrid',
    },
    {
      id: 'customs',
      title: 'Basic Spanish Customs & Greetings',
      content: 'Learn essential Spanish phrases and cultural etiquette.',
    }
  ];

  return (
    <Tabs defaultValue="latest" className="w-full">
      <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-8">
        {sections.slice(0, 3).map((section) => (
          <TabsTrigger key={section.id} value={section.id}>
            {section.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-8">
        {sections.slice(3).map((section) => (
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
              {typeof section.content === 'string' ? (
                <>
                  <p className="mb-4">{section.content}</p>
                  <p className="text-sm text-gray-500">More detailed information coming soon.</p>
                </>
              ) : (
                section.content
              )}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabSections;
