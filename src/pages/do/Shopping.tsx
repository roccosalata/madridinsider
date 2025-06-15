
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Store, MapPin, Shirt } from 'lucide-react';

const shoppingSections = [
  {
    id: 'luxury',
    title: 'Gran Vía & The Golden Mile',
    icon: <Shirt className="h-6 w-6 text-madrid-red" />,
    description: "Madrid's hub for luxury shopping. The Salamanca district, particularly Calle de Serrano, is known as the 'Golden Mile', featuring top international designers and boutiques. Gran Vía offers a mix of famous international brands and large department stores.",
    highlights: ['Loewe, Prada, Chanel (Salamanca)', 'El Corte Inglés (Department Store)', 'Zara Flagship on Gran Vía'],
  },
  {
    id: 'markets',
    title: 'Local Markets & Artisans',
    icon: <Store className="h-6 w-6 text-madrid-red" />,
    description: "Discover unique finds and local crafts at Madrid's bustling markets. El Rastro, the famous Sunday flea market, is a must-visit for antiques, second-hand goods, and a vibrant atmosphere.",
    highlights: ['El Rastro (Sundays)', 'Mercado de San Miguel (Gourmet)', 'Mercado de Motores (Monthly)'],
  },
  {
    id: 'boutiques',
    title: 'Neighborhood Boutiques',
    icon: <MapPin className="h-6 w-6 text-madrid-red" />,
    description: "Explore the charming streets of Malasaña and Chueca for independent boutiques, vintage shops, and alternative fashion. These trendy neighborhoods are perfect for finding one-of-a-kind pieces.",
    highlights: ['Calle Fuencarral (Trendy fashion)', 'Malasaña (Vintage & alternative)', 'Chueca (Chic boutiques)'],
  },
  {
    id: 'malls',
    title: 'Shopping Centers & Malls',
    icon: <ShoppingBag className="h-6 w-6 text-madrid-red" />,
    description: 'For a convenient all-in-one shopping experience, Madrid has several large shopping centers that host a wide variety of brands, restaurants, and cinemas.',
    highlights: ['Plaza Río 2', 'Príncipe Pío', 'La Gavia'],
  }
];

const Shopping = () => {
  return (
    <Layout>
      <HeroSection
        title="Shopping in Madrid"
        subtitle="From luxury avenues to bohemian boutiques and vibrant markets"
      />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">A Shopper's Paradise</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {shoppingSections.map((section) => (
            <Card key={section.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 mb-4">{section.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-md text-gray-800">Key Spots:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {section.highlights.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Shopping;
