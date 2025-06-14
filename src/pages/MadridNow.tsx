
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, CloudSun, Newspaper, Sun } from 'lucide-react';
import CategoryHubCard from '@/components/CategoryHubCard';

const MadridNow = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update time every minute
    return () => clearInterval(timer);
  }, []);
  
  const madridTime = format(currentTime, 'HH:mm');
  const madridDate = format(currentTime, 'EEEE, MMMM d, yyyy');
  
  return (
    <Layout>
      <HeroSection 
        title="Madrid Now" 
        subtitle="Current local time, weather, events, and what's happening in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Madrid at a Glance</h1>
        
        <div className="grid md:grid-cols-2 gap-8">

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
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

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CloudSun className="h-6 w-6 text-madrid-red" />
                Today's Weather
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-2">
                Get the latest weather forecast for Madrid.
              </p>
              <ul className="text-gray-600 text-sm mb-4 list-disc list-inside space-y-1">
                <li>🌞 Summers are hot and dry, often exceeding 35°C (95°F) in July & August.</li>
                <li>🌱 Spring and Fall are mild and pleasant, ideal for sightseeing.</li>
                <li>❄️ Winters are generally mild (5–15°C), but nights can feel chilly.</li>
                <li>☀️ Madrid enjoys about 2,800 hours of sunshine each year.</li>
              </ul>
              <p className="text-center py-2 text-gray-600 text-sm">
                (Detailed weather information coming soon)
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore What's Happening</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CategoryHubCard
              icon={<Calendar className="h-8 w-8" />}
              title="Current Events & Calendar"
              description="See a full calendar of festivals, concerts, exhibitions, and more."
              link="/madrid-now/current-events"
            />
            <CategoryHubCard
              icon={<Newspaper className="h-8 w-8" />}
              title="What's On in Madrid"
              description="Your guide to seasonal events, local tips, and what to do today."
              link="/madrid-now/whats-on"
            />
            <CategoryHubCard
              icon={<Sun className="h-8 w-8" />}
              title="Weather Guide"
              description="Get detailed weather forecasts and learn about Madrid's climate."
              link="/madrid-now/weather-today"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default MadridNow;
