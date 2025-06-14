
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { basketballInfo } from '@/data/sportsData';
import { Dribbble, Users, Globe, Mail } from 'lucide-react';

const BasketballPage = () => {
  return (
    <Layout>
      <HeroSection
        title={basketballInfo.title}
        subtitle="Find information about basketball events and clubs in Madrid."
      />
      <div className="container mx-auto py-12 px-4 space-y-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-madrid-red">
              <Dribbble className="h-6 w-6" />
              <span className="text-2xl">{basketballInfo.copaDelRey.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{basketballInfo.copaDelRey.description}</p>
            <CardDescription className="whitespace-pre-wrap">{basketballInfo.copaDelRey.moreInfo}</CardDescription>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-madrid-red">
                    <Users className="h-6 w-6" />
                    <span className="text-2xl">{basketballInfo.practice.title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <p className="text-gray-700">{basketballInfo.practice.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>{basketballInfo.practice.contact}</span>
                </div>
                 {basketballInfo.practice.website && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Globe className="h-4 w-4" />
                        <a href={`http://${basketballInfo.practice.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{basketballInfo.practice.website}</a>
                    </div>
                )}
            </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BasketballPage;
