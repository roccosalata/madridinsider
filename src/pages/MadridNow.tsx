
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, CloudSun } from 'lucide-react';

const MadridNow = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format the time for Madrid (UTC+1 in winter, UTC+2 in summer)
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
        subtitle="Stay updated with current local time, weather, and upcoming events in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-2xl font-bold">Local Time</CardTitle>
              <Clock className="h-6 w-6 text-madrid-red" />
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{madridTime}</p>
              <p className="text-gray-600 mt-2">{madridDate}</p>
              <p className="mt-4 text-sm text-gray-500">Central European Time (CET/CEST)</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-2xl font-bold">Weather</CardTitle>
              <CloudSun className="h-6 w-6 text-madrid-red" />
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <p className="text-sm text-gray-500">Current conditions in Madrid</p>
                <p className="text-gray-600 mt-4">For live weather updates, please check a weather service.</p>
                <a 
                  href="https://www.aemet.es/en/eltiempo/prediccion/municipios/madrid-id28079" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-madrid-red hover:underline"
                >
                  Check AEMET (Spanish Weather Service)
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md md:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-2xl font-bold">Upcoming Events</CardTitle>
              <Calendar className="h-6 w-6 text-madrid-red" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-b pb-3 last:border-b-0">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.date}</p>
                    <p className="text-gray-500 text-sm">{event.location}</p>
                  </div>
                ))}
                <a 
                  href="https://www.esmadrid.com/en/whats-on-madrid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-madrid-red hover:underline"
                >
                  See more events
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mt-12 bg-gray-50">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4">Insider Tip</h3>
            <p className="text-gray-700 italic">
              "Many Madrid museums have free entry times, usually in the late afternoons or evenings. The Prado Museum offers free entry from Monday to Saturday 6-8 pm, and Sundays and holidays from 5-7 pm. Check museum websites for the most current information!"
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MadridNow;
