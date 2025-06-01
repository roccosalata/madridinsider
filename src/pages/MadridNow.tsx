
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
        subtitle="Current local calendar, time, and weather information for Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Madrid Now</h1>
        <p className="text-lg mb-12">Stay updated with the latest information about Madrid, including current time, weather, and upcoming events.</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Today's Weather in Madrid</h2>
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <p className="text-center py-4 text-gray-600">
                Weather information coming soon. This section will display current weather conditions in Madrid.
              </p>
              <a 
                href="https://www.aemet.es/en/eltiempo/prediccion/municipios/madrid-id28079" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center text-madrid-red hover:underline"
              >
                Check AEMET (Spanish Weather Service)
              </a>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Events & Calendar</h2>
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-b pb-3 last:border-b-0">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.date}</p>
                    <p className="text-gray-500 text-sm">{event.location}</p>
                  </div>
                ))}
                <p className="text-center py-4 text-gray-600">
                  More event listings coming soon. This section will contain a comprehensive calendar of Madrid events.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Current Time in Madrid</h2>
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-4xl font-bold">{madridTime}</p>
                <p className="text-gray-600 mt-2">{madridDate}</p>
                <p className="mt-4 text-sm text-gray-500">Central European Time (CET/CEST)</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default MadridNow;
