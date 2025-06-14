
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import PageNavigatorDropdown from '@/components/PageNavigatorDropdown';
import LocksmithInfo from '@/components/essentials/LocksmithInfo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

const ShopsAndServicesPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Shops & Services"
        subtitle="Essential shops and services for daily life in Madrid."
      />
      
      <div className="container mx-auto py-12 px-4">
        <PageNavigatorDropdown categoryTitle="Living in Madrid" />
        
        <div className="space-y-8">
          <LocksmithInfo />

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-madrid-red" />
                Other Essential Shops
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Madrid offers a wide range of shops for all your daily needs.</p>
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Optical Shops (Ópticas):</span> Find eyewear and contact lenses throughout the city.</li>
                <li><span className="font-semibold">Bookstores (Librerías):</span> Many shops offer books in English and other languages.</li>
                <li><span className="font-semibold">International Groceries:</span> Find ingredients from around the world in various specialty stores.</li>
                <li><span className="font-semibold">Hair Salons (Peluquerías):</span> Services available for all hair types and styles.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ShopsAndServicesPage;
