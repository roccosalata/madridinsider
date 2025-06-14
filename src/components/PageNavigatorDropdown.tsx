
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SubcategorySelector from './SubcategorySelector';
import { mainCategories } from '@/data/mainCategories';

interface PageNavigatorDropdownProps {
  categoryTitle: string;
}

const PageNavigatorDropdown: React.FC<PageNavigatorDropdownProps> = ({ categoryTitle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = mainCategories.find(c => c.title === categoryTitle);

  if (!category) {
    return null;
  }

  const subcategoriesForSelector = {
    [category.title]: category.subcategories.map(s => s.title),
  };
  
  const currentSubcategory = category.subcategories.find(s => s.link === location.pathname);
  const placeholder = currentSubcategory ? currentSubcategory.title : `Select from ${category.title}`;

  const handleSelect = (subcategoryTitle: string) => {
    const subcategory = category.subcategories.find(s => s.title === subcategoryTitle);
    if (subcategory && subcategory.link && subcategory.link !== location.pathname) {
      navigate(subcategory.link);
    }
  };

  return (
    <div className="mb-8">
      <SubcategorySelector 
        subcategories={subcategoriesForSelector}
        onSelect={handleSelect}
        placeholder={placeholder}
      />
    </div>
  );
};

export default PageNavigatorDropdown;
