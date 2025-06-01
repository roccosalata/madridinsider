
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import UsefulInformation from './UsefulInformation';
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
      <TabsList className="grid grid-cols-3 mb-8">
        {sections.map((section) => (
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
              {section.content}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabSections;
