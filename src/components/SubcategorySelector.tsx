
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SubcategorySelectorProps {
  subcategories: string[];
  onSelect: (subcategory: string) => void;
  placeholder?: string;
}

const SubcategorySelector = ({ 
  subcategories, 
  onSelect, 
  placeholder = "Select a subcategory" 
}: SubcategorySelectorProps) => {
  return (
    <div className="mb-6">
      <Select onValueChange={onSelect}>
        <SelectTrigger className="w-full md:w-72">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {subcategories.map((subcategory) => (
              <SelectItem key={subcategory} value={subcategory}>
                {subcategory}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SubcategorySelector;
