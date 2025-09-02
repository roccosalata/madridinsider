import React from 'react';

interface CategoryNavigationProps {
  categories: Array<{
    id: string;
    label: string;
  }>;
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryNavigation = ({ categories, activeCategory, onCategoryChange }: CategoryNavigationProps) => {
  return (
    <div className="flex justify-center flex-wrap gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryNavigation;