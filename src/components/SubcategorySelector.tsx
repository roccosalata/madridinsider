
import React, { useState } from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SubcategorySelectorProps {
  subcategories: Record<string, string[]>;
  onSelect: (subcategory: string) => void;
  placeholder?: string;
}

const SubcategorySelector = ({ 
  subcategories, 
  onSelect,
  placeholder = "Select a subcategory" 
}: SubcategorySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const handleSelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    onSelect(subcategory);
    setIsOpen(false);
  };

  const categoryNames = Object.keys(subcategories);

  return (
    <div className="mb-6">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger className="flex items-center justify-between w-full md:w-72 h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <span className="text-sm text-gray-600">
            {selectedSubcategory || placeholder}
          </span>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 bg-white">
          {categoryNames.map((category) => (
            <React.Fragment key={category}>
              <DropdownMenuLabel>{category}</DropdownMenuLabel>
              <DropdownMenuGroup>
                {subcategories[category].map((subcategory) => (
                  <DropdownMenuItem 
                    key={subcategory} 
                    onClick={() => handleSelect(subcategory)}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    {subcategory}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              {category !== categoryNames[categoryNames.length - 1] && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SubcategorySelector;
