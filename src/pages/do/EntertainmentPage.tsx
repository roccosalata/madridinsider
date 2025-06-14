
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Film, Zap, FerrisWheel, Tent, Casino, VenetianMask, Cable } from 'lucide-react'; // Tent for Water Parks, VenetianMask for Shows

const entertainmentSections = [
  {
    id: 'teleferico',
    title: 'Teleférico / Cable Car',
    icon: <Cable className="h-6 w-6 text-madrid-red" />,
    address: 'Paseo del Pintor Rosales, s/n (Metro: Arguelles)',
    description: `A sky lift ride that goes through the Parque del Oeste, la Rosaleda, the Principe Pio railway station, the famous hermitage of San Antonio de la Florida, with its twin and the Manzanares river is the first thing that calls your attention. While enjoying the panoramic views, you can also see the Ministry of the Air building, the Egyptian Temple of Debod, the skyscrapers of Plaza de España, the famous Torrespaña tower, the Palacio de Oriente and the Campo del Moro Gardens, the Almudena Cathedral, and the San Francisco el Grande church with its huge dome. And when flying over the Casa de Campo, you can see the immense expanse of the landscape, the spices, and the vegetation, surrounded by the entertainment facilities of Lago and Parque de Atracciones.`,
    hours: 'Spring-Summer: Starting 11:00 AM, Fall-Winter: Starting 12:00 noon',
    website: 'www.teleferico.com',
    email: 'terosa@teleferico.com',
    phone: '915-417-450 / 915-411-118',
    placeholder: ''
  },
  {
    id: 'theme-parks',
    title: 'Theme Parks',
    icon: <FerrisWheel className="h-6 w-6 text-madrid-red" />,
    description: 'Rollercoasters, attractions, and fun for all ages.',
    placeholder: 'Details about Madrid\'s theme parks are coming soon!'
  },
  {
    id: 'water-parks',
    title: 'Water Parks',
    icon: <Tent className="h-6 w-6 text-madrid-red" />, // Using Tent as a placeholder, could change
    description: 'Cool off and have a splash at Madrid\'s water parks.',
    placeholder: 'Information on water parks will be available shortly.'
  },
  {
    id: 'zoo-aquarium',
    title: 'Zoo / Aquarium',
    icon: <Zap className="h-6 w-6 text-madrid-red" />, // Using Zap as a placeholder (like animal life), could change
    description: 'Discover diverse wildlife from around the world.',
    placeholder: 'Zoo and aquarium details will be updated soon.'
  },
  {
    id: 'casinos-gambling',
    title: 'Casinos & Gambling',
    icon: <Casino className="h-6 w-6 text-madrid-red" />,
    description: 'Casino Gran Madrid offers a wide variety of games including poker, roulette, blackjack, and 170+ slot machines. Conditions for admission: Persons over 18 years of age. A special offer for admission plus a drink is available for 6 euros.',
    address: 'Autovía A 6, Km 29. Free buses from Plaza de España and Plaza de Colón.',
    hours: '4:00 p.m. - 5:00 a.m. (until 6:00 a.m. on Fridays, Saturdays and holiday eves)',
    phone: '900 900 810 / 91-856-1100',
    website: 'www.casinogranmadrid.es',
    placeholder: 'For documentation details, please call or inquire at your hotel.',
  },
  {
    id: 'shows-performances',
    title: 'Shows & Performances',
    icon: <VenetianMask className="h-6 w-6 text-madrid-red" />,
    description: 'Theatre, concerts, flamenco, and other live performances.',
    placeholder: 'Details on current shows and performances will be listed here.'
  }
];

const EntertainmentPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Entertainment & Shows in Madrid"
        subtitle="Explore theme parks, zoos, casinos, live shows, and more exciting activities."
      />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Madrid's Entertainment Scene</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {entertainmentSections.map((section) => (
            <Card key={section.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  {section.icon}
                  {section.title}
                </CardTitle>
                {section.address && <CardDescription>{section.address}</CardDescription>}
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 mb-3">{section.description}</p>
                {section.hours && <p className="text-sm text-gray-600 mb-1"><strong>Hours:</strong> {section.hours}</p>}
                {section.phone && <p className="text-sm text-gray-600 mb-1"><strong>Phone:</strong> {section.phone}</p>}
                {section.website && <p className="text-sm text-gray-600 mb-1"><strong>Website:</strong> <a href={`http://${section.website}`} target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">{section.website}</a></p>}
                {section.email && <p className="text-sm text-gray-600"><strong>Email:</strong> <a href={`mailto:${section.email}`} className="text-madrid-red hover:underline">{section.email}</a></p>}
                
                {section.placeholder && <p className="text-gray-500 text-sm italic mt-4">{section.placeholder}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
         <Card className="mt-8 shadow-lg bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">Looking for More Parks & Attractions?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-2">
              For a comprehensive directory of theme parks, zoos, aquariums, and water parks in Madrid and across Spain, check out Parques Reunidos.
            </p>
            <a href="http://www.parquesreunidos.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-madrid-red hover:underline">
              Visit www.parquesreunidos.com →
            </a>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default EntertainmentPage;
