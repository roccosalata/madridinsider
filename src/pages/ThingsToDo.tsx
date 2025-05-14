
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';

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
          <h2 className="text-2xl font-bold mb-6">Explore by Neighborhood</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about Madrid's diverse neighborhoods, each with its own character and attractions.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Sights & Attractions</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about Madrid's landmarks, museums, parks, planetarium, and other must-see attractions.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Activities & Entertainment</h2>
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
