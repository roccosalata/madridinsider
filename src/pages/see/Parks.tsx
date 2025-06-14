
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { parksData } from '@/data/parksData';
import { TreePine, Sprout, ArrowRight } from 'lucide-react';

const Parks = () => {
  return (
    <Layout>
      <HeroSection
        title="Parks & Gardens"
        subtitle="Live Madrid's parks and gardens. They come in all shapes and forms: historical, modern, secluded, immense, some that are good for picnics, some that are good for sports."
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            Here is a selection of the parks and gardens in Madrid, both the famous ones and the best-kept secrets, that ought to be visited. These are indeed the best spots to take a walk, to rest or breathe some fresh air in the city.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parksData.map((park) => (
            <Card key={park.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TreePine className="h-6 w-6 text-green-600" />
                  {park.name}
                </CardTitle>
                {park.address && (
                  <CardDescription>{park.address}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                {park.description && <p className="text-gray-700 mb-4">{park.description}</p>}
                {park.hours && <p className="text-sm text-gray-600"><strong>Hours:</strong> {park.hours}</p>}
                {park.phone && <p className="text-sm text-gray-600"><strong>Tel:</strong> {park.phone}</p>}
              </CardContent>
            </Card>
          ))}
           <Card className="md:col-span-2 lg:col-span-3 bg-madrid-red/10 border-madrid-red/20">
             <CardHeader>
                <CardTitle className="flex items-center gap-2 text-madrid-red">
                  <Sprout className="h-6 w-6" />
                  More to Explore
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 mb-4">
                  For a unique view over the city and its parks, consider a ride on the Teleférico (Cable Car). It's a fun activity for all ages!
                </p>
                <Link to="/do-in-madrid/entertainment" className="font-semibold text-madrid-red hover:underline flex items-center gap-1">
                  Learn about the Teleférico <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
           </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Parks;
