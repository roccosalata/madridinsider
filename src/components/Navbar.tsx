
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Compass, Map, Star, Utensils, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mainCategories } from '@/pages/Index'; // Assuming mainCategories is exported from Index.tsx

import SubcategorySelector from './SubcategorySelector';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 

  const handleSubcategorySelect = (subcategoryTitle: string) => {
    // Find the subcategory link and navigate
    let foundLink: string | null = null;
    for (const category of mainCategories) {
      const subcategory = category.subcategories.find(sub => sub.title === subcategoryTitle);
      if (subcategory) {
        foundLink = subcategory.link;
        break;
      }
    }
    if (foundLink) {
      navigate(foundLink);
    } else {
      console.warn(`Subcategory with title "${subcategoryTitle}" not found.`);
      // Optional: display an error or handle the case where the link is not found
    }
  };


  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-madrid-red">Madrid<span className="text-gray-800">Insider</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4"> {/* Added items-center for vertical alignment */}
            {/* Iterate through mainCategories for desktop navigation */}
 {mainCategories.map(category => (
 <SubcategorySelector // Using SubcategorySelector as it suggests dropdown behavior
 key={category.title}
 categoryTitle={category.title}
 // For now, subcategories will be empty or placeholder.
 // We will define the actual second-tier options later.
 subcategories={[]}
 // The onSelect handler might need adjustment later based on how
 // second-tier navigation is implemented.
 onSelect={() => console.log(`Clicked on ${category.title}`)}
 />
 ))}
 </div>






          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {/* Mobile Navigation - Display categories as clickable links */}
 {mainCategories.map(category => (
 <MobileNavLink
 key={category.title}
 to={category.link}
 onClick={toggleMenu} // Close menu on click
 >{category.title}</MobileNavLink>
 ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, icon }: { to: string; children: React.ReactNode; icon?: React.ReactNode }) => (
  <Link 
    to={to} 
    className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-madrid-red hover:bg-gray-50 rounded-md transition-colors flex items-center"
  >
    {icon}
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick, icon }: { to: string; children: React.ReactNode; onClick: () => void; icon?: React.ReactNode }) => (
  <Link 
    to={to} 
    className="px-4 py-2 text-base font-medium text-gray-800 hover:text-madrid-red hover:bg-gray-50 rounded-md flex items-center transition-colors"
    onClick={onClick}
  >
    {icon}
    {children}
  </Link>
);

export default Navbar;
