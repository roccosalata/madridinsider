
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';

const FoodAndDrink = () => {
  return (
    <Layout>
      <HeroSection 
        title="Eat & Drink in Madrid" 
        subtitle="Savor Madrid: Your guide to the city's top restaurants, tapas bars, cafes, and foodie hotspots" 
      />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Eat & Drink in Madrid</h1>
        <p className="text-lg mb-12">Discover Madrid's vibrant food scene, from traditional tapas bars to trendy restaurants and cozy cafés.</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Restaurants (Guides & Reviews)</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon with guides and reviews of Madrid's best restaurants.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tapas Bars & Culture</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about Madrid's tapas scene and the culture surrounding it.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Cafes & Bakeries</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about Madrid's best cafes and bakeries.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Bars & Nightlife (Cocktails, Wine, Beer, Rooftops)</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about Madrid's vibrant bar scene and nightlife options.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Food Markets (for eating & atmosphere)</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about Madrid's famous food markets where you can both shop and dine.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Specialty Food Stores</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about specialty food stores in Madrid for gourmet ingredients and local products.</p>
            </CardContent>
          </Card>
        </section>
        
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
