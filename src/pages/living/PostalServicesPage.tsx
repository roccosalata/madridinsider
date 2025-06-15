
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Building, Stamp } from 'lucide-react';
import { postAndMailInfo, postOffices } from '@/data/postalServices';
import PostAndMailInfo from '@/components/PostAndMailInfo';

const PostalServicesPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Post Office & Mail"
        subtitle="Your guide to sending and receiving mail in Madrid."
      />
      <div className="container mx-auto py-12 px-4">
        <Tabs defaultValue="guide" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="guide">
              <Mail className="mr-2 h-4 w-4" /> Mailing Guide
            </TabsTrigger>
            <TabsTrigger value="locations">
              <MapPin className="mr-2 h-4 w-4" /> Post Office Locations
            </TabsTrigger>
          </TabsList>
          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stamp className="h-6 w-6 text-madrid-red" />
                  Guide to Postal Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PostAndMailInfo info={postAndMailInfo} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="locations">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-6 w-6 text-madrid-red" />
                  Main Post Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {postOffices.map((office, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-lg">{office.name}</h3>
                    <p className="text-gray-600">{office.address}</p>
                    <p className="text-sm text-gray-500 mt-1"><strong>Hours:</strong> {office.hours}</p>
                    {office.phone && <p className="text-sm text-gray-500"><strong>Phone:</strong> {office.phone}</p>}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PostalServicesPage;
