
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Museum, TreePine, MapPin, Landmark, ArrowRight } from 'lucide-react';

const SeeMadridPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="See Madrid"
        subtitle="Discover Madrid's iconic landmarks, historical sites, beautiful parks, world-class museums, and vibrant neighborhoods."
      />

      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Explore Madrid's Best Attractions</h1>
        <p className="text-lg mb-12 text-gray-700">
          From world-renowned museums to hidden neighborhood gems, from royal palaces to tranquil parks - 
          discover everything Madrid has to offer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Museums & Galleries */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-madrid-red">
                <Museum className="h-6 w-6" />
                Museums & Galleries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Home to some of the world's most important art collections including the Prado, Reina Sofia, 
                and Thyssen-Bornemisza museums. Explore Madrid's incredible art scene.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/see-in-madrid/museums" className="flex items-center gap-2">
                  Explore Museums <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Neighborhoods */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-madrid-red">
                <MapPin className="h-6 w-6" />
                Neighborhoods Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Discover Madrid's diverse districts from trendy Chueca and artistic Malasaña to 
                upscale Salamanca and historic La Latina. Each has its own unique character.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/see-in-madrid/neighborhoods" className="flex items-center gap-2">
                  Explore Neighborhoods <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Parks & Gardens */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-madrid-red">
                <TreePine className="h-6 w-6" />
                Parks & Gardens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                From the iconic Retiro Park to the vast Casa de Campo, discover Madrid's green spaces. 
                Perfect for picnics, walks, or escaping the city bustle.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/see-in-madrid/parks" className="flex items-center gap-2">
                  Explore Parks <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Sightseeing & Attractions */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-madrid-red">
                <Landmark className="h-6 w-6" />
                Royal Sites & Historic Monuments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Visit the magnificent Royal Palace, historic Plaza Mayor, and other iconic landmarks. 
                Explore centuries of Spanish history and architecture.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/see-in-madrid/sightseeing" className="flex items-center gap-2">
                  Explore Sights <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Tips Section */}
        <Card className="bg-gray-50">
          <CardHeader>
            <CardTitle>Planning Your Sightseeing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Art Triangle Pass</h4>
                <p className="text-sm text-gray-600">
                  Save money with a combined ticket for Prado, Reina Sofia, and Thyssen museums.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Best Times to Visit</h4>
                <p className="text-sm text-gray-600">
                  Early mornings and late afternoons are ideal for sightseeing, especially in summer.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Free Museum Hours</h4>
                <p className="text-sm text-gray-600">
                  Many museums offer free admission during specific hours - check individual pages for details.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Walking Routes</h4>
                <p className="text-sm text-gray-600">
                  Madrid's compact center makes it perfect for walking tours connecting multiple attractions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SeeMadridPage;
