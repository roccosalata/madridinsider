
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import UsefulInformation from './UsefulInformation';
import WhatsOnContent from './WhatsOnContent';
import WeatherVisitInfo from './WeatherVisitInfo';
import SpanishCustomsInfo from './SpanishCustomsInfo';

const TabSections = () => {
  const sections = [
    {
      id: 'useful',
      title: 'Useful Information & First-Timer Tips',
      content: <UsefulInformation />,
    },
    {
      id: 'events',
      title: 'What\'s On / Current Events in Madrid',
      content: <WhatsOnContent />,
    },
    {
      id: 'weather',
      title: 'Weather & Best Time to Visit Madrid',
      content: <WeatherVisitInfo />,
    },
    {
      id: 'customs',
      title: 'Spanish Customs, Culture & Greetings',
      content: <SpanishCustomsInfo />,
    }
  ];

  return (
    <Tabs defaultValue="useful" className="w-full">
      <TabsList className="grid grid-cols-2 mb-8">
        {sections.slice(0, 2).map((section) => (
          <TabsTrigger key={section.id} value={section.id}>
            {section.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsList className="grid grid-cols-2 mb-8">
        {sections.slice(2).map((section) => (
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
