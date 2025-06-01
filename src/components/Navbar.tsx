
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mainCategories } from '@/pages/Index';
import DropdownNavigation from './DropdownNavigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-madrid-red">Madrid<span className="text-gray-800">Insider</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <DropdownNavigation />
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
        <div className="md:hidden bg-white pb-4 px-4 animate-fade-in border-t">
          <div className="flex flex-col space-y-2 pt-4">
            {mainCategories.map(category => (
              <div key={category.title} className="border-b border-gray-100 pb-3 last:border-b-0">
                <MobileNavLink
                  to={category.link}
                  onClick={toggleMenu}
                  icon={category.icon}
                  className="font-semibold text-madrid-red mb-2"
                >
                  {category.title}
                </MobileNavLink>
                <div className="ml-4 space-y-1">
                  {category.subcategories.slice(0, 4).map((subcategory) => (
                    <MobileNavLink
                      key={subcategory.title}
                      to={subcategory.link}
                      onClick={toggleMenu}
                      className="text-sm text-gray-600"
                    >
                      {subcategory.title}
                    </MobileNavLink>
                  ))}
                  {category.subcategories.length > 4 && (
                    <MobileNavLink
                      to={category.link}
                      onClick={toggleMenu}
                      className="text-sm text-madrid-red"
                    >
                      View all →
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
  className = ""
}: { 
  to: string; 
  children: React.ReactNode; 
  onClick: () => void; 
  icon?: React.ReactNode;
  className?: string;
}) => (
  <Link 
    to={to} 
    className={`block px-2 py-1 text-gray-800 hover:text-madrid-red hover:bg-gray-50 rounded-md flex items-center gap-2 transition-colors ${className}`}
    onClick={onClick}
  >
    {icon}
    {children}
  </Link>
);

export default Navbar;
