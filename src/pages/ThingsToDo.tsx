
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { MapPinned, Landmark, Building, Compass } from 'lucide-react';
import MapHubLink from '@/components/transport/MapHubLink';
import NeighborhoodGuide from '@/components/attractions/NeighborhoodGuide';

const ThingsToDo = () => {
  return (
    <Layout>
      <HeroSection 
        title="See, Do & Explore Madrid" 
        subtitle="Discover Madrid's best: Attractions, activities, entertainment, shopping, and in-depth neighborhood guides" 
      />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">See, Do & Explore Madrid</h1>
        <p className="text-lg mb-12">Discover the best attractions, activities, entertainment, and shopping experiences that Madrid has to offer.</p>
        
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Compass className="h-6 w-6 text-madrid-red" />
            <h2 className="text-2xl font-bold">Explore Madrid's Neighborhoods</h2>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <MapPinned className="h-5 w-5 text-madrid-red" />
            <MapHubLink variant="compact" />
          </div>
          <NeighborhoodGuide />
        </section>
        
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Landmark className="h-6 w-6 text-madrid-red" />
            <h2 className="text-2xl font-bold">Sights & Attractions</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about Madrid's landmarks, museums, parks, planetarium, and other must-see attractions.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Building className="h-6 w-6 text-madrid-red" />
            <h2 className="text-2xl font-bold">Activities & Entertainment</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about shows, cinemas, theme parks, sports/fitness/wellness activities, and casinos in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Shopping Guide</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about shopping areas, malls, and markets in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Workshops & Classes</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about workshops and classes available in Madrid, from cooking to art and dance.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default ThingsToDo;
