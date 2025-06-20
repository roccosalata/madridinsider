
import { Link } from 'react-router-dom';

// Already the 5 most popular/essential highlights are used here.
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
    <footer className="bg-gray-800 text-white border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col min-h-[48px] py-2">
        <div className="flex flex-row items-center justify-between w-full mb-1">
          {/* Brand left-aligned */}
          <div className="flex items-center gap-2 min-w-[120px]">
            <span className="text-lg font-bold text-madrid-red">Madrid</span>
            <span className="text-lg font-bold text-white">Insider</span>
          </div>
          {/* Centered highlight links */}
          <nav className="flex-1 flex flex-wrap gap-4 justify-center items-center">
            {highlights.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-300 hover:text-white text-sm transition-colors px-3 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-madrid-red"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Spacer for mobile symmetry (hidden on larger screens) */}
          <div className="min-w-[120px] hidden md:block" />
        </div>
      </div>
      <div className="text-xs text-gray-400 text-center py-2 border-t border-gray-700">
        © {currentYear} Madrid Insider
      </div>
    </footer>
  );
};

export default Footer;
