
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/essentials">Essentials</NavLink>
            <NavLink to="/transport">Transport</NavLink>
            <NavLink to="/see-and-do">See & Do</NavLink>
            <NavLink to="/food-and-drink">Food & Drink</NavLink>
            <NavLink to="/living">Living</NavLink>
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
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/essentials" onClick={toggleMenu}>Essentials</MobileNavLink>
            <MobileNavLink to="/transport" onClick={toggleMenu}>Transport</MobileNavLink>
            <MobileNavLink to="/see-and-do" onClick={toggleMenu}>See & Do</MobileNavLink>
            <MobileNavLink to="/food-and-drink" onClick={toggleMenu}>Food & Drink</MobileNavLink>
            <MobileNavLink to="/living" onClick={toggleMenu}>Living</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-madrid-red hover:bg-gray-50 rounded-md transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link 
    to={to} 
    className="px-4 py-2 text-base font-medium text-gray-800 hover:text-madrid-red hover:bg-gray-50 rounded-md block transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
