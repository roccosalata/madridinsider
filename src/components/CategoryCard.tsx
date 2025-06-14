
import React from 'react';
import { MainCategory } from '@/data/mainCategories';

interface CategoryCardProps {
  category: MainCategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-within:shadow-xl">
      <div className="relative">
        <img 
          src={category.imageUrl} 
          alt={`${category.title} - ${category.description}`}
          className="w-full h-48 object-cover"
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
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">{category.description}</p>
        
        <div className="mb-4">
          <nav aria-label={`${category.title} quick links`}>
            <div className="grid grid-cols-1 gap-1">
              {category.subcategories.slice(0, 3).map((sub, index) => (
                <a 
                  key={index}
                  href={sub.link}
                  className="text-sm text-gray-600 hover:text-madrid-red transition-colors p-1 rounded hover:bg-gray-50 focus:bg-gray-50 focus:text-madrid-red focus:outline-none flex items-center gap-1"
                >
                  {sub.icon && React.cloneElement(sub.icon as React.ReactElement, { className: "h-4 w-4"})} 
                  {sub.title}
                </a>
              ))}
            </div>
            {category.subcategories.length > 3 && (
              <p className="text-sm text-madrid-red mt-2 font-medium">
                + {category.subcategories.length - 3} more sections
              </p>
            )}
          </nav>
        </div>
        
        <a 
          href={category.link}
          className="inline-flex items-center justify-center w-full bg-madrid-red text-white px-4 py-2 rounded-lg hover:bg-madrid-red/90 transition-all duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-madrid-red focus:ring-offset-2"
          aria-label={`Explore all ${category.title} content`}
        >
          Explore All →
        </a>
      </div>
    </article>
  );
};

export default CategoryCard;
