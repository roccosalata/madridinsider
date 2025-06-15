
import React from 'react';
import { Pizza, ClipboardList, Coffee, IceCream2, Grape, Leaf } from 'lucide-react';

type FoodSubCategory = {
    title: string;
    description: string;
    icon: React.ElementType;
}

export const foodSubCategories: FoodSubCategory[] = [
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
