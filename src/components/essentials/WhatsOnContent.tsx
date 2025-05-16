
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, CloudSun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WhatsOnContent = () => {
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
    <div className="space-y-6">
      <p className="mb-4">Find the latest events and happenings in Madrid. Our curated calendar keeps you updated with the most important cultural, social, and seasonal events in the city.</p>
      
      <div className="grid grid-cols-1 gap-4">
        {upcomingEvents.map((event, index) => (
          <Card key={index} className="shadow-sm">
            <CardContent className="pt-6">
              <div className="border-b pb-3 last:border-b-0">
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.date}</p>
                <p className="text-gray-500 text-sm">{event.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 items-center text-madrid-red">
          <Calendar className="h-5 w-5" />
          <Clock className="h-5 w-5" />
          <CloudSun className="h-5 w-5" />
        </div>
        <Link to="/madrid-now" className="text-madrid-red hover:underline">
          Visit Madrid Now for more events →
        </Link>
      </div>
    </div>
  );
};

export default WhatsOnContent;
