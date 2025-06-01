
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';

const FoodAndDrink = () => {
  return (
    <Layout>
      <HeroSection
        title="Food & Drink"
        subtitle="Discover the various options within food & drink in Madrid."
      />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Food & Drink in Madrid</h1>
        <p className="text-lg mb-12">Explore the vibrant culinary landscape of Madrid.</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Dining Etiquette in Madrid</h2> 
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about local dining customs and etiquette in Madrid.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default FoodAndDrink;
