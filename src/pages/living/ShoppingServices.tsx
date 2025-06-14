
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail, Globe, Eye, Music, Zap, Monitor, Book, ShoppingBag, Scissors } from 'lucide-react';
import { 
  opticalShops, 
  musicStores, 
  electronicStores, 
  computerStores, 
  bookStores, 
  internationalGroceries, 
  barberShops,
  ShopContact 
} from '@/data/shoppingServicesData';

const ShopCard = ({ shop }: { shop: ShopContact }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-lg">{shop.name}</CardTitle>
    </CardHeader>
    <CardContent>
      {shop.description && (
        <p className="text-gray-700 mb-3 text-sm">{shop.description}</p>
      )}
      <div className="space-y-2 text-sm text-gray-600">
        {shop.address && (
          <p className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-madrid-red mt-0.5 flex-shrink-0" />
            <span>
              {shop.address}
              {shop.metro && <span className="block text-xs text-gray-500">Metro: {shop.metro}</span>}
            </span>
          </p>
        )}
        {shop.phone && (
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-madrid-red" />
            {shop.phone}
          </p>
        )}
        {shop.hours && (
          <p className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-madrid-red mt-0.5 flex-shrink-0" />
            <span className="text-xs">{shop.hours}</span>
          </p>
        )}
        {shop.email && (
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-madrid-red" />
            <a href={`mailto:${shop.email}`} className="text-blue-600 hover:underline text-xs">
              {shop.email}
            </a>
          </p>
        )}
        {shop.website && (
          <p className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-madrid-red" />
            <a href={`http://${shop.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
              {shop.website}
            </a>
          </p>
        )}
        {shop.notes && (
          <p className="text-xs text-gray-500 italic">{shop.notes}</p>
        )}
      </div>
    </CardContent>
  </Card>
);

const ShoppingSection = ({ 
  title, 
  icon, 
  shops, 
  description 
}: { 
  title: string; 
  icon: React.ReactNode; 
  shops: ShopContact[]; 
  description?: string;
}) => (
  <section className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      {icon}
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
    {description && (
      <p className="text-gray-700 mb-6">{description}</p>
    )}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shops.map((shop, index) => (
        <ShopCard key={`${shop.name}-${index}`} shop={shop} />
      ))}
    </div>
  </section>
);

const ShoppingServices = () => {
  return (
    <Layout>
      <HeroSection
        title="Shopping & Services"
        subtitle="Essential shops and services for daily life in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        <ShoppingSection
          title="Optical Shops"
          icon={<Eye className="h-8 w-8 text-madrid-red" />}
          shops={opticalShops}
          description="Contact lenses, glasses, and eye care services in central Madrid."
        />

        <ShoppingSection
          title="Music & Instrument Stores"
          icon={<Music className="h-8 w-8 text-madrid-red" />}
          shops={musicStores}
          description="Find musical instruments, sheet music, and audio equipment."
        />

        <ShoppingSection
          title="Electronic Components"
          icon={<Zap className="h-8 w-8 text-madrid-red" />}
          shops={electronicStores}
          description="Electronic components and specialized equipment suppliers."
        />

        <ShoppingSection
          title="Computer Stores"
          icon={<Monitor className="h-8 w-8 text-madrid-red" />}
          shops={computerStores}
          description="Computer sales, repairs, and Mac specialists."
        />

        <ShoppingSection
          title="Book Stores"
          icon={<Book className="h-8 w-8 text-madrid-red" />}
          shops={bookStores}
          description="New and used books in multiple languages, including English-language specialists."
        />

        <ShoppingSection
          title="International Grocery Stores"
          icon={<ShoppingBag className="h-8 w-8 text-madrid-red" />}
          shops={internationalGroceries}
          description="Find ingredients and products from your home country, including British, American, Asian, and specialty international foods."
        />

        <ShoppingSection
          title="Barber Shops & Hair Dressers"
          icon={<Scissors className="h-8 w-8 text-madrid-red" />}
          shops={barberShops}
          description="Professional hair care services, including English-speaking stylists and mobile services."
        />

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Shopping Tips for Madrid</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Many shops close for siesta (around 2-5 PM), especially smaller family-run businesses</li>
            <li>• Some international grocery stores offer online ordering and home delivery</li>
            <li>• Always call ahead to confirm opening hours, especially during holidays</li>
            <li>• Many English-speaking services require advance booking due to high demand</li>
            <li>• Payment methods vary - some smaller shops may only accept cash</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingServices;
