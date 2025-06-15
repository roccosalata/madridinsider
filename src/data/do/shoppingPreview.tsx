
import React from 'react';
import { Store, MapPin, Shirt, ShoppingBag } from 'lucide-react';

export interface PreviewItem {
  icon: React.ReactElement;
  text: string;
}

export const shoppingPreview: PreviewItem[] = [
  {
    icon: <Shirt className="h-4 w-4" />,
    text: "Gran Vía & Golden Mile",
  },
  {
    icon: <Store className="h-4 w-4" />,
    text: "Local Markets & Artisans",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    text: "Neighborhood Boutiques",
  },
  {
    icon: <ShoppingBag className="h-4 w-4" />,
    text: "Shopping Centers & Malls",
  },
];
