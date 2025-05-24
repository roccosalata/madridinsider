// src/pages/SeeDoExplorePage.tsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SeeDoExplorePage.css'; // We'll create this CSS file
import { directoryData } from '@/data/directoryData';

const SeeDoExplorePage: React.FC = () => {
  const { primaryCategory, secondCategory } = useParams<{ primaryCategory: string, secondCategory: string }>();
  const [categoryData, setCategoryData] = useState<{[key: string]: string[]} | undefined>(undefined);


  useEffect(() => {
    if (primaryCategory && secondCategory) {
      // Access the data using the primary and second categories
      const primary = directoryData[primaryCategory as keyof typeof directoryData];
      const data = primary ? primary[secondCategory as keyof typeof primary] as {[key: string]: string[]} | undefined : undefined;
      
      setCategoryData(data);
      console.log(`Data for ${primaryCategory}/${secondCategory}:`, data);
    }
  }, [primaryCategory, secondCategory]);


  return (
    <div className="see-do-explore-page container mx-auto py-12 px-4">
      <header className="page-header">
        <h1>{secondCategory ? secondCategory.replace(/-/g, ' ') : 'Category'}</h1>
        <p>Explore the various options within {secondCategory ? secondCategory.replace(/-/g, ' ').toLowerCase() : 'this category'}.</p>
      </header>

      <div className="category-content">
        {categoryData && Object.keys(categoryData).map(subCategory => (
          <div key={subCategory} className="sub-category-section">
            <h3>{subCategory}</h3>
            <ul>
              {categoryData[subCategory].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeeDoExplorePage;
