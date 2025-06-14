import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import WhatsOnContent from '@/components/essentials/WhatsOnContent';
import { Calendar, Clock, CloudSun, Newspaper, ArrowRight } from 'lucide-react';

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
  
  const upcomingEvents = [
    {
      title: "Madrid Fashion Week",
      date: "October 15-20, 2025",
      location: "IFEMA Madrid"
    },
    {
      title: "San Isidro Festival",
      date: "May 15, 2025",
      location: "Various Venues"
    },
    {
      title: "International Book Fair",
      date: "June 2-18, 2025",
      location: "Retiro Park"
    }
  ];
  
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
              <div className="flex flex-col items-center space-y-3 mt-3">
                <Button asChild variant="outline">
                  <a 
                    href="https://www.aemet.es/en/eltiempo/prediccion/municipios/madrid-id28079" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Check AEMET Official Forecast <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild>
                  <Link to="/now/weather-today" className="flex items-center gap-2">
                    View Our Weather Guide <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calendar className="h-6 w-6 text-madrid-red" />
                Current & Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {upcomingEvents.slice(0,3).map((event, index) => (
                  <div key={index} className="border-b pb-3 last:border-b-0">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.date}</p>
                    <p className="text-gray-500 text-sm">{event.location}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button asChild>
                  <Link to="/now/current-events" className="flex items-center gap-2">
                    See All Events & Calendar <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold my-8 text-center flex items-center justify-center gap-2">
              <Newspaper className="h-8 w-8 text-madrid-red" />
              What's On in Madrid
            </h2>
            <WhatsOnContent />
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default MadridNow;
