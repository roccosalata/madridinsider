
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mainCategories } from '@/data/mainCategories';
import DropdownNavigation from './DropdownNavigation';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-madrid-red rounded-md p-1"
            aria-label="Madrid Insider home page"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-madrid-red rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">📍</span>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-madrid-red">Madrid</span><span className="text-gray-800">Insider</span>
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4" role="menubar">
            {mainCategories.map(category => (
              <DropdownNavigation key={category.title} category={category} />
            ))}
            <SearchModal />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-white pb-4 px-4 animate-fade-in border-t shadow-lg"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col space-y-2 pt-4">
            {mainCategories.map(category => (
              <div key={category.title} className="border-b border-gray-100 pb-3 last:border-b-0">
                <MobileNavLink
                  to={category.link}
                  onClick={toggleMenu}
                  icon={category.icon}
                  className="font-semibold text-madrid-red mb-2"
                  role="menuitem"
                >
                  {category.title}
                </MobileNavLink>
                <div className="ml-4 space-y-1" role="group" aria-labelledby={`${category.title}-subcategories`}>
                  {category.subcategories.slice(0, 4).map((subcategory) => (
                    <MobileNavLink
                      key={subcategory.title}
                      to={subcategory.link}
                      onClick={toggleMenu}
                      className="text-sm text-gray-600"
                      role="menuitem"
                    >
                      {subcategory.title}
                    </MobileNavLink>
                  ))}
                  {category.subcategories.length > 4 && (
                    <MobileNavLink
                      to={category.link}
                      onClick={toggleMenu}
                      className="text-sm text-madrid-red font-medium"
                      role="menuitem"
                    >
                      View all {category.subcategories.length - 4} more →
                    </MobileNavLink>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const MobileNavLink = ({ 
  to, 
  children, 
  onClick, 
  icon, 
  className = "",
  role = "menuitem"
}: { 
  to: string; 
  children: React.ReactNode; 
  onClick: () => void; 
  icon?: React.ReactNode;
  className?: string;
  role?: string;
}) => (
  <Link 
    to={to} 
    className={`block px-3 py-2 text-gray-800 hover:text-madrid-red hover:bg-gray-50 rounded-md flex items-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-madrid-red focus:bg-gray-50 ${className}`}
    onClick={onClick}
    role={role}
  >
    {icon && <span aria-hidden="true">{icon}</span>}
    {children}
  </Link>
);

export default Navbar;
