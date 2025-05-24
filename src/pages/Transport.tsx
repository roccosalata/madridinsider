import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection, { HeroSectionProps } from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { directoryData } from '@/data/directoryData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MadridMapsHub from '@/components/transport/MadridMapsHub';
import { MapPinned } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Transport = () => {
  const location = useLocation();
  const { primaryCategory, secondCategory } = useParams<{ primaryCategory: string; secondCategory: string }>();
  const [activeTab, setActiveTab] = useState('data'); // Default to a tab for dynamic data content
  const [categoryData, setCategoryData] = useState<{[key: string]: string[]} | undefined>(undefined);

  // Handle direct navigation to specific tabs via URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && ['data', 'maps'].includes(tab)) {
      setActiveTab(tab); // Set active tab based on URL parameter if it's 'data' or 'maps'
    }
  }, [location]);

  useEffect(() => {
    if (primaryCategory && secondCategory) {
      const data = directoryData[primaryCategory as keyof typeof directoryData]?.[secondCategory] as {[key: string]: string[]} | undefined;
      console.log(`Data for ${primaryCategory}/${secondCategory}:`, data);
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
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="data">Information</TabsTrigger> {/* Renamed for clarity */}
            <TabsTrigger value="maps">Madrid Maps Hub</TabsTrigger>
          </TabsList>

          <TabsContent value="data">
            {/* Dynamic content will be rendered here */}
            <h1 className="text-4xl font-bold mb-8">{secondCategory ? secondCategory.replace(/-/g, ' ') : 'Travel & Transport'}</h1>
            <p className="text-lg mb-12">Explore the various transportation options in Madrid.</p>

          </TabsContent>

          <TabsContent value="maps">
            <MadridMapsHub />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};
