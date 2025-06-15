
import React from 'react';
import { Pizza, ClipboardList, Coffee, IceCream2, Grape, Leaf, Star, MapPin, Utensils } from 'lucide-react';

type FoodSubCategory = {
    title: string;
    description: string;
    icon: React.ElementType;
}

export const foodSubCategories: FoodSubCategory[] = [
    {
        title: 'Madrid Specialties',
        description: 'Traditional Madrid dishes you must try while visiting the city.',
        icon: Star,
    },
    {
        title: 'Dining Culture & Etiquette',
        description: 'Learn Spanish dining customs and meal times.',
        icon: Utensils,
    },
    {
        title: 'Food Markets',
        description: 'Explore vibrant markets for fresh produce and gourmet foods.',
        icon: MapPin,
    },
    {
        title: 'Cheap Eats',
        description: "Great food that won't break the bank.",
        icon: Pizza,
    },
    {
        title: 'Menu del Dia',
        description: "Discover the best value lunch deals in Madrid.",
        icon: ClipboardList,
    },
    {
        title: 'Diners',
        description: 'Find American-style diners for a taste of home.',
        icon: Coffee,
    },
    {
        title: 'Ice Cream Parlours',
        description: 'Cool down with the best ice cream in the city.',
        icon: IceCream2,
    },
    {
        title: 'Tapas',
        description: 'Experience the quintessential Spanish dining tradition.',
        icon: Grape,
    },
    {
        title: 'Vegetarian Food',
        description: 'Find vegetarian and vegan-friendly options.',
        icon: Leaf,
    },
];
