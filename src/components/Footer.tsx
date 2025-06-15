
import { Link } from 'react-router-dom';

const highlights = [
  {
    label: "Tourist Offices",
    to: "/madrid-essentials/tourist-offices"
  },
  {
    label: "Paperwork & NIE/TIE",
    to: "/living-in-madrid/paperwork"
  },
  {
    label: "Museums & Galleries",
    to: "/see-in-madrid/museums"
  },
  {
    label: "Food & Dining",
    to: "/do-in-madrid/food-drink"
  },
  {
    label: "Weather Today",
    to: "/madrid-now/weather-today"
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white border-t border-gray-700 py-2">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between min-h-[48px]">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <span className="text-lg font-bold text-madrid-red">Madrid</span>
          <span className="text-lg font-bold text-white">Insider</span>
        </div>
        <nav className="flex flex-wrap gap-4 justify-center">
          {highlights.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-300 hover:text-white text-sm transition-colors px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-madrid-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="text-xs text-gray-400 mt-2 md:mt-0 whitespace-nowrap">
          © {currentYear} Madrid Insider
        </div>
      </div>
    </footer>
  );
};

export default Footer;
