
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, CloudSun, Newspaper, Satellite } from 'lucide-react';
import CategoryHubCard from '@/components/CategoryHubCard';

const MadridNow = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const madridTime = format(currentTime, 'HH:mm');
  const madridDate = format(currentTime, 'EEEE, MMMM d, yyyy');

  // Madrid Now "hub" sections
  const hubCards = [
    {
      icon: <CloudSun className="h-8 w-8" />,
      title: "Weather Today",
      description: "Today's weather forecast and climate information for Madrid.",
      link: "/madrid-now/weather-today",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Current Events",
      description: "See what's happening in Madrid right now: festivals, fairs, and key city events.",
      link: "/madrid-now/current-events",
    },
    {
      icon: <Newspaper className="h-8 w-8" />,
      title: "What's On",
      description: "Guides to seasonal activities, trending things to do, and local tips for today.",
      link: "/madrid-now/whats-on",
    },
    {
      icon: <Satellite className="h-8 w-8" />,
      title: "Live Updates",
      description: "Transport alerts, emergency notices, and real-time happenings in Madrid.",
      link: "/madrid-now/live-updates",
    },
  ];

  return (
    <Layout>
      <HeroSection 
        title="Madrid Now" 
        subtitle="Current local time, weather, events, and what's happening in Madrid"
      />

      <div className="container mx-auto py-12 px-4">
        <section className="mb-10">
          <Card className="shadow-lg max-w-xl mx-auto mb-10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Clock className="h-6 w-6 text-madrid-red" />
                Current Time in Madrid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-5xl font-bold">{madridTime}</p>
                <p className="text-gray-600 mt-2 text-lg">{madridDate}</p>
                <p className="mt-4 text-sm text-gray-500">Central European Time (CET/CEST)</p>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mb-8 text-center">Madrid Now Hub</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {hubCards.map(card => (
              <CategoryHubCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MadridNow;
