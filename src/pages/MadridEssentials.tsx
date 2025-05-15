
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MadridEssentials = () => {
  const sections = [
    {
      id: 'latest',
      title: 'Useful Information',
      content: (
        <div>
          <h3 className="font-semibold mb-4">Consumer Information (OMIC)</h3>
          <p className="mb-2">Mayor, 83, 2 (Metro: Sol)</p>
          <p className="mb-4">Tel. 010</p>
          
          <h3 className="font-semibold mb-4">Lost & Found</h3>
          <p className="mb-2">Paseo del Molino, 7</p>
          <p className="mb-2">Tel. 91 527 9590</p>
          <p className="mb-2">Plaza de Legazpi, 7 (Metro: Legazpi)</p>
          <p className="mb-4">Tel. 915-884-346</p>
          
          <h3 className="font-semibold mb-4">Guia de Madrid</h3>
          <p className="mb-2">Info & guides</p>
          <p className="mb-2">www.esmadrid.com</p>
          <p className="mb-2">www.guiademadrid.com</p>
          <p className="mb-4">webmaster@guiademadrid.com</p>
          
          <h3 className="font-semibold mb-4">Bojagi Event Planning & Consulting</h3>
          <p className="mb-2">Organization of conventions, meetings, parties... etc.</p>
          <p className="mb-2">Tel. 915-439-168</p>
          <p className="mb-4">www.bojagievents.com</p>
          
          <h3 className="font-semibold mb-4">Night Travel Services</h3>
          <p className="mb-2">Cea Bermudez, 20 (Metro: Canal)</p>
          <p className="mb-2">Night tours in Madrid: Flamenco, Routes, Modern Service, VIP Service, Magic Routes, Personalized Routes.</p>
          <p className="mb-4">Tel. 915-352-821</p>
          
          <h3 className="font-semibold mb-4">How to Learn Spanish</h3>
          <p className="mb-4">www.howtolearnspanish.co.uk</p>
          
          <h3 className="font-semibold mb-4">Weather Information</h3>
          <p className="mb-4">During the mid-winter months daytime temperatures in Madrid may drop to 7 degrees Centigrade (45 degrees Fahrenheit). During the months of July and August temperatures are hot. Madrid enjoys a large number of sunny days.</p>
          
          <h3 className="font-semibold mb-4">Safety Tips</h3>
          <p className="mb-2">While Madrid is generally safe, bag-snatching and wallet-lifting are unfortunately all too common. But with a little planning ahead and a lot of paying attention, you can travel around more securely.</p>
          
          <p className="mb-2 font-medium">Before you go out:</p>
          <ul className="list-disc pl-6 mb-2">
            <li>Do not carry everything with you. Only take one or two credit/bank cards, a little cash and, most importantly, a copy of your passport with you.</li>
            <li>Write down the numbers of the credit/bank cards that you are taking with you and the phone numbers listed on the back.</li>
            <li>Carry your valuables in a secure place. Use a bag that rests snugly under your arm in the armpit region or directly in front of you.</li>
            <li>Beware the backpack. Use a suitcase or combination lock.</li>
          </ul>
          
          <p className="mb-2 font-medium">While you're out and about:</p>
          <ul className="list-disc pl-6 mb-2">
            <li>Beware, most pocket-pickers work in teams and observe potential targets ahead of time. Their chief tool is distraction.</li>
            <li>Beware of people asking you for directions, shoving maps in your face, asking if you've noticed a stain on your shirt, etc.</li>
            <li>In crowded places, you're already expecting to be bumped into, making you an easier target.</li>
            <li>When sitting, keep your bag physically touching you, preferably in your lap or linked onto your body.</li>
          </ul>
          
          <p className="mb-2 font-medium">If you've been mugged:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Establish what you have lost and take appropriate action.</li>
            <li>For lost credit/bank cards, make the necessary phone calls.</li>
            <li>For lost passports, go to the nearest police station to file a report, then take it to your embassy.</li>
          </ul>
          
          <p className="mb-2">Emergency phone service: 112. Available toll-free from any phone for any emergency.</p>
        </div>
      ),
    },
    {
      id: 'events',
      title: 'What\'s On / Current Events in Madrid',
      content: (
        <div>
          <p className="mb-4">Find the latest events and happenings in Madrid.</p>
          <Link to="/madrid-now" className="text-madrid-red hover:underline">
            Visit Madrid Now for current events and calendar
          </Link>
        </div>
      ),
    },
    {
      id: 'maps',
      title: 'Madrid Maps Hub',
      content: 'Essential maps to help you navigate Madrid like a local.',
    },
    {
      id: 'first-timer',
      title: 'Essential First-Timer Tips for Madrid',
      content: 'Must-know information for your first visit to Madrid.',
    },
    {
      id: 'weather',
      title: 'Weather & Best Time to Visit Madrid',
      content: 'Seasonal information and tips on when to visit Madrid.',
    },
    {
      id: 'customs',
      title: 'Basic Spanish Customs & Greetings',
      content: 'Learn essential Spanish phrases and cultural etiquette.',
    }
  ];

  return (
    <Layout>
      <HeroSection 
        title="Madrid Essentials" 
        subtitle="Your starting point: What's new, current events, key maps, city layout, and first-timer tips for Madrid." 
      />
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="latest" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-8">
            {sections.slice(0, 3).map((section) => (
              <TabsTrigger key={section.id} value={section.id}>
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-8">
            {sections.slice(3).map((section) => (
              <TabsTrigger key={section.id} value={section.id}>
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {sections.map((section) => (
            <TabsContent key={section.id} value={section.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>Essential information for visitors</CardDescription>
                </CardHeader>
                <CardContent>
                  {typeof section.content === 'string' ? (
                    <>
                      <p className="mb-4">{section.content}</p>
                      <p className="text-sm text-gray-500">More detailed information coming soon.</p>
                    </>
                  ) : (
                    section.content
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CategoryLink 
              to="/transport" 
              title="Getting Around" 
              description="Find transportation options in Madrid" 
            />
            <CategoryLink 
              to="/things-to-do" 
              title="See, Do & Explore" 
              description="Discover attractions and activities" 
            />
            <CategoryLink 
              to="/food-and-drink" 
              title="Eat & Drink" 
              description="Best food and drink experiences" 
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const CategoryLink = ({ to, title, description }: { to: string; title: string; description: string }) => (
  <Link to={to} className="no-underline">
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-madrid-red">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </Link>
);

export default MadridEssentials;
