import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MadridMapsHub from '@/components/transport/MadridMapsHub';
import { MapPinned } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Transport = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Handle direct navigation to specific tabs via URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && ['overview', 'maps', 'public-transport', 'other-options'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [location]);

  return (
    <Layout>
      <HeroSection 
        title="Getting Around Madrid" 
        subtitle="Navigate Madrid: Metro, buses, taxis, airport/station transfers, and car rentals" 
      />
      
      <div className="container mx-auto py-12 px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="maps">Madrid Maps Hub</TabsTrigger>
            <TabsTrigger value="public-transport">Public Transport</TabsTrigger>
            <TabsTrigger value="other-options">Other Options</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <h1 className="text-4xl font-bold mb-8">Getting Around Madrid</h1>
            <p className="text-lg mb-12">Everything you need to know about navigating Madrid's excellent public transportation system.</p>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">From Airport & Train Stations to the City</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about transportation options from Madrid's airports and train stations to the city center.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Madrid Public Transport In-Depth (Metro, Bus, Cercanías, BiciMAD)</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about Madrid's comprehensive public transportation system, including the metro, buses, commuter trains, and bike-sharing program.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Taxis & Ridesharing in Madrid</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about taxi services and ridesharing options in Madrid.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Car Rentals & Driving in Madrid</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about renting and driving cars in Madrid, including parking and traffic regulations.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Accessible Transportation in Madrid</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about accessibility options for transportation in Madrid.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Tour Buses (Hop-On/Hop-Off)</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about tourist bus services in Madrid.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Using National Trains & Buses (for trips FROM Madrid)</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about how to use national train and bus services for day trips and excursions from Madrid.</p>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
          
          <TabsContent value="maps">
            <MadridMapsHub />
          </TabsContent>
          
          <TabsContent value="public-transport">
            <h1 className="text-4xl font-bold mb-8">Getting Around Madrid</h1>
            <p className="text-lg mb-12">Everything you need to know about navigating Madrid's excellent public transportation system.</p>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">From Airport & Train Stations to the City</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about transportation options from Madrid's airports and train stations to the city center.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Madrid Public Transport In-Depth (Metro, Bus, Cercanías, BiciMAD)</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about Madrid's comprehensive public transportation system, including the metro, buses, commuter trains, and bike-sharing program.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Taxis & Ridesharing in Madrid</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about taxi services and ridesharing options in Madrid.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Car Rentals & Driving in Madrid</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about renting and driving cars in Madrid, including parking and traffic regulations.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Accessible Transportation in Madrid</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about accessibility options for transportation in Madrid.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Tour Buses (Hop-On/Hop-Off)</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about tourist bus services in Madrid.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Using National Trains & Buses (for trips FROM Madrid)</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about how to use national train and bus services for day trips and excursions from Madrid.</p>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
          
          <TabsContent value="other-options">
            <h1 className="text-4xl font-bold mb-8">Getting Around Madrid</h1>
            <p className="text-lg mb-12">Everything you need to know about navigating Madrid's excellent public transportation system.</p>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">From Airport & Train Stations to the City</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about transportation options from Madrid's airports and train stations to the city center.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Madrid Public Transport In-Depth (Metro, Bus, Cercanías, BiciMAD)</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about Madrid's comprehensive public transportation system, including the metro, buses, commuter trains, and bike-sharing program.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Taxis & Ridesharing in Madrid</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about taxi services and ridesharing options in Madrid.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Car Rentals & Driving in Madrid</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about renting and driving cars in Madrid, including parking and traffic regulations.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Accessible Transportation in Madrid</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about accessibility options for transportation in Madrid.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Tour Buses (Hop-On/Hop-Off)</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about tourist bus services in Madrid.</p>
                </CardContent>
              </Card>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Using National Trains & Buses (for trips FROM Madrid)</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Details coming soon about how to use national train and bus services for day trips and excursions from Madrid.</p>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Transport;
