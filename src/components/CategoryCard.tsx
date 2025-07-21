
import React from 'react';
import { MainCategory } from '@/data/mainCategories';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: MainCategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <article className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-within:shadow-xl border border-gray-200 hover:border-madrid-red/20">
      <div className="relative">
        <img 
          src={category.imageUrl} 
          alt={`${category.title} - ${category.description}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          width="400"
          height="192"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true"></div>
        <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
          <div className="bg-madrid-red p-2 rounded-lg shadow-md" aria-hidden="true">
            {category.icon}
          </div>
          <h2 className="text-xl font-bold">{category.title}</h2>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-6 leading-relaxed">{category.description}</p>
        
        {/* Preview Subcategories */}
        <div className="mb-6">
          <nav aria-label={`${category.title} quick links`}>
            <ul className="space-y-2">
              {category.subcategories.slice(0, 3).map((sub, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-madrid-red rounded-full mr-3 flex-shrink-0" />
                  <span>{sub.title}</span>
                </li>
              ))}
            </ul>
            {category.subcategories.length > 3 && (
              <p className="text-sm text-madrid-red mt-3 font-medium">
                + {category.subcategories.length - 3} more sections
              </p>
            )}
          </nav>
        </div>
        
        {/* Enhanced CTA Button */}
        <Button 
          asChild
          className="w-full bg-madrid-red hover:bg-madrid-red/90 text-white font-semibold group-hover:shadow-lg transition-all duration-300 text-sm py-3"
        >
          <a href={category.link} aria-label={`Explore all ${category.title} content`}>
            Explore {category.title}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </article>
  );
};

export default CategoryCard;
