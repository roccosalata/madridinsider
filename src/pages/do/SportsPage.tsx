
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';

const SportsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Sports & Recreation"
        subtitle="Get active with sports, recreational activities, and wellness in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Madrid Sports & Recreation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about sports venues, teams, and recreational opportunities are coming soon.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-madrid-red">
                  <Leaf className="h-6 w-6" />
                  <span className="text-xl">Yoga & Wellness</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Find your balance with yoga studios, wellness centers, and healthy lifestyle options across the city.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/do-in-madrid/yoga-wellness" className="flex items-center justify-center gap-2">
                  Explore Yoga & Wellness <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SportsPage;
