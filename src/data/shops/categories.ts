
import React from 'react';
import { ShopContact } from './types';
import { opticalShops } from './optical';
import { bookStores } from './books';
import { internationalGroceries } from './groceries';
import { barberShops } from './barbers';
import { musicStores } from './music';
import { computerStores } from './computers';
import { electronicStores } from './electronics';
import { locksmiths } from './locksmiths';
import { Eye, BookOpen, Globe2, Scissors, Music, Laptop, Cpu, Wrench } from 'lucide-react';

export interface ShopCategory {
  title: string;
  data: ShopContact[];
  icon: React.ReactNode;
  slug: string;
  link: string;
}

const toKebabCase = (str: string) => str.toLowerCase().replace(/ \/ /g, '-').replace(/\s+/g, '-').replace(/[&,]/g, '');

const categories = [
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

export const shopCategories: ShopCategory[] = categories.map(category => {
    const slug = toKebabCase(category.title);
    return {
        ...category,
        slug,
        link: `/living-in-madrid/shopping-services/${slug}`
    };
});
