
import React from 'react';
import CategoryLink from './CategoryLink';

const RelatedCategories = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CategoryLink 
          to="/transport" 
          title="Getting Around" 
          description="Find transportation options in Madrid" 
        />
        <CategoryLink 
          to="/things-to-do" 
          title="See, Do & Explore" 
          description="Discover attractions and activities" 
        />
        <CategoryLink 
          to="/food-and-drink" 
          title="Eat & Drink" 
          description="Best food and drink experiences" 
        />
      </div>
    </div>
  );
};

export default RelatedCategories;
