
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ShopList from '@/components/essentials/ShopList';
import { 
  opticalShops,
  bookStores,
  internationalGroceries,
  barberShops,
  musicStores,
  computerStores,
  electronicStores,
  locksmiths
} from '@/data/shops';
import { Eye, BookOpen, Globe2, Scissors, Music, Laptop, Cpu, Wrench } from 'lucide-react';

const shopCategories = [
  {
    title: 'Locksmiths',
    data: locksmiths,
    icon: <Wrench className="h-6 w-6 text-madrid-red" />,
  },
  {
    title: 'Optical Shops',
    data: opticalShops,
    icon: <Eye className="h-6 w-6 text-madrid-red" />,
  },
  {
    title: 'Book Stores',
    data: bookStores,
    icon: <BookOpen className="h-6 w-6 text-madrid-red" />,
  },
  {
    title: 'International Grocery Stores',
    data: internationalGroceries,
    icon: <Globe2 className="h-6 w-6 text-madrid-red" />,
  },
  {
    title: 'Barbers / Hair Dressers',
    data: barberShops,
    icon: <Scissors className="h-6 w-6 text-madrid-red" />,
  },
  {
    title: 'Music Stores',
    data: musicStores,
    icon: <Music className="h-6 w-6 text-madrid-red" />,
  },
  {
    title: 'Computer Stores',
    data: computerStores,
    icon: <Laptop className="h-6 w-6 text-madrid-red" />,
  },
  {
    title: 'Electronic Components',
    data: electronicStores,
    icon: <Cpu className="h-6 w-6 text-madrid-red" />,
  },
];


const ShopsAndServicesPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Shops & Services"
        subtitle="Essential shops and services for daily life in Madrid."
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="space-y-8">
          {shopCategories.map(category => (
            <ShopList
              key={category.title}
              title={category.title}
              shops={category.data}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ShopsAndServicesPage;
