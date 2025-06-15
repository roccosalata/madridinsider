
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { gymsData } from '@/data/gymsData';
import GymList from '@/components/do/GymList';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const GymsPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Health Clubs & Gyms"
        subtitle="Find the perfect place to work out, stay fit, and meet new people in Madrid."
      />

      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
            <Button asChild variant="outline">
              <Link to="/do-in-madrid/sports" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Sports & Recreation
              </Link>
            </Button>
        </div>

        <GymList gyms={gymsData} />
      </div>
    </Layout>
  );
};

export default GymsPage;
