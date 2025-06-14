
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShopContact } from '@/data/shoppingServicesData';
import { Phone, Globe, Mail } from 'lucide-react';

interface ShopListProps {
  title: string;
  shops: ShopContact[];
  icon: React.ReactNode;
}

const ShopList: React.FC<ShopListProps> = ({ title, shops, icon }) => {
  if (!shops || shops.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {shops.map((shop, index) => (
          <div key={shop.name + index} className={index > 0 ? "border-t pt-4" : ""}>
            <h4 className="font-semibold text-lg">{shop.name}</h4>
            {shop.address && <p className="text-sm text-gray-600">{shop.address}</p>}
            {shop.metro && <p className="text-sm text-gray-600">Metro: {shop.metro}</p>}
            {shop.description && <p className="text-gray-700 my-2">{shop.description}</p>}
            {shop.notes && <p className="text-sm text-gray-500 italic">Note: {shop.notes}</p>}
            {shop.hours && <p className="text-sm text-gray-500">Hours: {shop.hours}</p>}
            <div className="flex flex-wrap gap-x-6 gap-y-2 items-center mt-2">
              {shop.phone && (
                <a href={`tel:${shop.phone.split('/')[0].replace(/\s/g, '')}`} className="flex items-center gap-2 text-madrid-red hover:underline text-sm">
                  <Phone className="h-4 w-4" />
                  {shop.phone}
                </a>
              )}
              {shop.website && (
                <a href={shop.website.startsWith('http') ? shop.website : `http://${shop.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-madrid-red hover:underline text-sm">
                  <Globe className="h-4 w-4" />
                  Website
                </a>
              )}
               {shop.email && (
                <a href={`mailto:${shop.email}`} className="flex items-center gap-2 text-madrid-red hover:underline text-sm">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ShopList;
