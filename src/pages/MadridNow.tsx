
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, CloudSun, Newspaper } from 'lucide-react';

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
        subtitle="Current events, what's happening today, weather, and real-time information for Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <Tabs defaultValue="events" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="events">What's On</TabsTrigger>
            <TabsTrigger value="time-weather">Time & Weather</TabsTrigger>
            <TabsTrigger value="news">News & Updates</TabsTrigger>
            <TabsTrigger value="temporary">Temporary Info</TabsTrigger>
          </TabsList>
          
          <TabsContent value="events">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Current Events & What's On
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Today's Events</h3>
                    <p className="mb-4">Stay updated with what's happening in Madrid today.</p>
                    <ul className="space-y-2">
                      <li>• Check local newspapers like El País or ABC for current events</li>
                      <li>• Visit madrid.es for official city events and announcements</li>
                      <li>• Follow @madrid on social media for real-time updates</li>
                      <li>• Ask at your hotel or tourist information centers for event calendars</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Upcoming Events</h3>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="border-b pb-3 last:border-b-0">
                          <h4 className="font-semibold">{event.title}</h4>
                          <p className="text-gray-600 text-sm">{event.date}</p>
                          <p className="text-gray-500 text-sm">{event.location}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Seasonal Events</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Spring/Summer</h4>
                        <p>• Outdoor concerts in parks</p>
                        <p>• Terrace season begins</p>
                        <p>• San Isidro Festival (May)</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Fall/Winter</h4>
                        <p>• Christmas markets</p>
                        <p>• New Year celebrations at Puerta del Sol</p>
                        <p>• Three Kings Day (January 6)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="time-weather">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Current Time in Madrid
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-4xl font-bold">{madridTime}</p>
                    <p className="text-gray-600 mt-2">{madridDate}</p>
                    <p className="mt-4 text-sm text-gray-500">Central European Time (CET/CEST)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CloudSun className="h-5 w-5" />
                    Today's Weather in Madrid
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
            </div>
          </TabsContent>

          <TabsContent value="news">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Newspaper className="h-5 w-5" />
                  News & Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Local News Sources</h3>
                    <ul className="space-y-1">
                      <li>• El País (Spanish)</li>
                      <li>• ABC Madrid (Spanish)</li>
                      <li>• Madrid.es (Official city website)</li>
                      <li>• The Local Spain (English)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Transportation Updates</h3>
                    <p className="text-sm text-gray-600">Current metro delays, construction, and service changes.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Emergency Notices</h3>
                    <p className="text-sm text-gray-600">Important safety and security updates for Madrid.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="temporary">
            <Card>
              <CardHeader>
                <CardTitle>Temporary Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Holiday Hours</h3>
                    <p className="text-sm text-gray-600">Special opening hours during holidays and festivals.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Special Events</h3>
                    <p className="text-sm text-gray-600">Limited-time events and activities happening in Madrid.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Seasonal Activities</h3>
                    <p className="text-sm text-gray-600">Activities and attractions that are only available during certain seasons.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default MadridNow;
