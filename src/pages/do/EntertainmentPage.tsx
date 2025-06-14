
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Film, Zap, FerrisWheel, Tent, Dice5, VenetianMask } from 'lucide-react'; // Tent for Water Parks, VenetianMask for Shows

const entertainmentSections = [
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
    icon: <Dice5 className="h-6 w-6 text-madrid-red" />,
    description: 'Try your luck at Madrid\'s casinos and gaming venues.',
    placeholder: 'Information on casinos and gambling locations is coming soon.'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entertainmentSections.map((section) => (
            <Card key={section.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">{section.description}</p>
                <p className="text-gray-500 text-sm italic">{section.placeholder}</p>
                {/* You can add links or more specific components here later */}
              </CardContent>
            </Card>
          ))}
        </div>
         <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Contribute Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              This section is actively being updated. If you have information about entertainment venues or shows in Madrid, please let us know!
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default EntertainmentPage;
