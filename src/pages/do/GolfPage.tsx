
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { golfInfo } from '@/data/sportsData';
import { Phone, MapPin } from 'lucide-react';

const GolfPage = () => {
  return (
    <Layout>
      <HeroSection
        title={golfInfo.title}
        subtitle="Find the best golf courses in and around Madrid."
      />
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {golfInfo.courses.map((course) => (
            <Card key={course.name}>
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>{course.address}</span>
                </div>
                {course.phone && course.phone.trim() && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{course.phone}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GolfPage;
