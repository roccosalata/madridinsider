
import React from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MainCategory } from "@/data/mainCategories";
import { cn } from "@/lib/utils";

type DropdownNavigationProps = {
  category: MainCategory;
};

const DropdownNavigation: React.FC<DropdownNavigationProps> = ({ category }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-madrid-red hover:bg-accent hover:text-accent-foreground bg-white text-madrid-red"
          )}
        >
          <span className="flex items-center gap-1">{category.icon}{category.title}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 z-50"
        align="start"
      >
        <DropdownMenuItem asChild>
          <Link
            to={category.link}
            className="font-bold text-madrid-red hover:underline hover:text-madrid-red"
          >
            {category.title} Overview
          </Link>
        </DropdownMenuItem>
        <div className="border-t my-1" />
        {category.subcategories.map((subcategory) => (
          <DropdownMenuItem asChild key={subcategory.title}>
            <Link
              to={subcategory.link}
              className="block w-full text-left text-gray-700 hover:text-madrid-red"
            >
              {subcategory.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNavigation;
