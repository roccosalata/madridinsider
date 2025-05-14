
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Compass, Map, Star, Utensils, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="hidden md:flex space-x-1">
            <NavLink to="/" icon={<Compass className="h-4 w-4 mr-1" />}>Madrid: Start Here</NavLink>
            <NavLink to="/transport" icon={<Map className="h-4 w-4 mr-1" />}>Getting Around</NavLink>
            <NavLink to="/things-to-do" icon={<Star className="h-4 w-4 mr-1" />}>See, Do & Explore</NavLink>
            <NavLink to="/food-and-drink" icon={<Utensils className="h-4 w-4 mr-1" />}>Eat & Drink</NavLink>
            <NavLink to="/living" icon={<Home className="h-4 w-4 mr-1" />}>Madrid Life</NavLink>
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
            <MobileNavLink to="/" onClick={toggleMenu} icon={<Compass className="h-4 w-4 mr-1" />}>Madrid: Start Here</MobileNavLink>
            <MobileNavLink to="/transport" onClick={toggleMenu} icon={<Map className="h-4 w-4 mr-1" />}>Getting Around</MobileNavLink>
            <MobileNavLink to="/things-to-do" onClick={toggleMenu} icon={<Star className="h-4 w-4 mr-1" />}>See, Do & Explore</MobileNavLink>
            <MobileNavLink to="/food-and-drink" onClick={toggleMenu} icon={<Utensils className="h-4 w-4 mr-1" />}>Eat & Drink</MobileNavLink>
            <MobileNavLink to="/living" onClick={toggleMenu} icon={<Home className="h-4 w-4 mr-1" />}>Madrid Life</MobileNavLink>
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
