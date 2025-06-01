
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';

const MadridStartHere = () => {
  return (
    <Layout>
      <HeroSection 
        title="Madrid: Start Here" 
        subtitle="Your starting point: What's new, current events, key maps, city layout, and first-timer tips for Madrid" 
      />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Madrid: Start Here</h1>
        <p className="text-lg mb-12">Your essential starting point for discovering Madrid, with all the information you need to get oriented in the city.</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest from Madrid Insider (Blog/Updates)</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon with the latest updates and blog posts from Madrid Insider.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What's On / Current Events in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about current and upcoming events in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Madrid Maps Hub</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon with useful maps of Madrid for tourists and residents.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Madrid Districts at a Glance</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon with an overview of Madrid's main districts and neighborhoods.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Essential First-Timer Tips for Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon with essential tips for first-time visitors to Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Understanding Madrid's Layout</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about Madrid's urban layout and geography.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Weather & Best Time to Visit Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about Madrid's climate and the best seasons to visit.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Basic Spanish Customs & Greetings</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about essential Spanish phrases and customs for visitors to Madrid.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default MadridStartHere;
