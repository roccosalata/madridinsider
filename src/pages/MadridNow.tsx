
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CloudSun } from 'lucide-react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const MadridNow = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  // Format date for Madrid (Spain)
  const formattedDate = currentTime.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Madrid'
  });

  // Format time for Madrid (Spain)
  const formattedTime = currentTime.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Madrid'
  });

  // Sample events - in a real app, this would come from an API or database
  const upcomingEvents = [
    { 
      date: 'May 15, 2025', 
      title: 'San Isidro Festival', 
      description: 'Madrid's biggest festival celebrating the city's patron saint.' 
    },
    { 
      date: 'June 5-7, 2025', 
      title: 'Madrid Book Fair', 
      description: 'Annual book fair in Retiro Park featuring authors and publishers.' 
    },
    { 
      date: 'July 1-31, 2025', 
      title: 'Madrid Summer Festival', 
      description: 'Concerts and cultural events throughout the city.' 
    }
  ];

  // Sample weather - in a real app, this would come from a weather API
  const currentWeather = {
    condition: 'Sunny',
    temperature: 24,
    high: 26,
    low: 18,
    humidity: '45%'
  };

  return (
    <Layout>
      <HeroSection
        title="Madrid Now"
        subtitle="Current time, weather, and upcoming events in Madrid"
        ctaText="Explore Events"
        ctaLink="#events"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Current Time */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4 text-madrid-red">
              <Clock size={24} className="mr-2" />
              <h2 className="text-xl font-bold">Current Time</h2>
            </div>
            <div className="text-center py-6">
              <p className="text-gray-600 mb-2">{formattedDate}</p>
              <p className="text-4xl font-bold">{formattedTime}</p>
              <p className="text-sm text-gray-500 mt-2">Central European Time (CET/CEST)</p>
            </div>
          </div>

          {/* Current Weather */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4 text-madrid-red">
              <CloudSun size={24} className="mr-2" />
              <h2 className="text-xl font-bold">Weather in Madrid</h2>
            </div>
            <div className="text-center py-6">
              <p className="text-gray-600 mb-2">{currentWeather.condition}</p>
              <p className="text-4xl font-bold">{currentWeather.temperature}°C</p>
              <div className="flex justify-center gap-4 mt-2">
                <p className="text-sm">H: {currentWeather.high}°C</p>
                <p className="text-sm">L: {currentWeather.low}°C</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">Humidity: {currentWeather.humidity}</p>
              <p className="text-xs text-gray-400 mt-4">
                * Weather data is simulated. Live data coming soon.
              </p>
            </div>
          </div>

          {/* Useful Information */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4 text-madrid-red">
              <Calendar size={24} className="mr-2" />
              <h2 className="text-xl font-bold">Quick Information</h2>
            </div>
            <ul className="space-y-3 py-2">
              <li className="flex items-start">
                <span className="font-bold mr-2">Emergency:</span> 
                <span>112</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">Police:</span> 
                <span>091</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">Tourist Information:</span> 
                <span>+34 91 578 78 10</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">Business Hours:</span> 
                <span>Most shops: 10:00-20:00<br />Restaurants: 13:00-16:00, 20:00-24:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Upcoming Events */}
        <section id="events" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Upcoming Events in Madrid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="text-madrid-red font-medium mb-1">{event.date}</p>
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            * Event information is for demonstration. Check official sources for current events.
          </p>
        </section>

        {/* Useful Links */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Useful Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="https://www.esmadrid.com/en" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded border border-gray-200 hover:bg-gray-50 transition-colors">
              <h3 className="font-bold">Official Madrid Tourism</h3>
              <p className="text-sm text-gray-600">Official tourism website for Madrid</p>
            </a>
            <a href="https://www.metromadrid.es/en" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded border border-gray-200 hover:bg-gray-50 transition-colors">
              <h3 className="font-bold">Metro Madrid</h3>
              <p className="text-sm text-gray-600">Public transportation information</p>
            </a>
            <a href="https://www.aemet.es/en/eltiempo/prediccion/municipios/madrid-id28079" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded border border-gray-200 hover:bg-gray-50 transition-colors">
              <h3 className="font-bold">AEMET Weather</h3>
              <p className="text-sm text-gray-600">Official Spanish weather service</p>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MadridNow;
