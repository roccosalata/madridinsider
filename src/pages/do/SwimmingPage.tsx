
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { swimmingPools } from '@/data/sportsData';
import { MapPin, Phone, Info } from 'lucide-react';

const PoolCard = ({ pool }: { pool: { name: string, address: string, description: string, phone?: string, details?: string } }) => (
  <Card className="flex flex-col">
    <CardHeader>
      <CardTitle>{pool.name}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col gap-2">
      <div className="flex items-start gap-2 text-sm text-gray-700">
        <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
        <span>{pool.address}</span>
      </div>
      {pool.description && <CardDescription>{pool.description}</CardDescription>}
      {pool.details && (
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <Info className="h-4 w-4 mt-1 flex-shrink-0" />
          <span>{pool.details}</span>
        </div>
      )}
      {pool.phone && (
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-auto pt-2">
          <Phone className="h-4 w-4" />
          <span>{pool.phone}</span>
        </div>
      )}
    </CardContent>
  </Card>
);

const SwimmingPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Swimming Pools in Madrid"
        subtitle="Dive into Madrid's best public, private, and hotel pools."
      />
      <div className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-madrid-red">Municipal Pools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {swimmingPools.municipal.map((pool) => <PoolCard key={pool.name} pool={pool} />)}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-madrid-red">Madrid Community Pools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {swimmingPools.community.map((pool) => <PoolCard key={pool.name} pool={pool} />)}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-madrid-red">Hotel Pools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {swimmingPools.hotel.map((pool) => <PoolCard key={pool.name} pool={pool} />)}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SwimmingPage;
