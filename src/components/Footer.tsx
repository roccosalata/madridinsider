
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
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              Madrid<span className="text-madrid-red">Insider</span>
            </h3>
            <p className="text-gray-300 text-sm max-w-sm">
              Your up-to-date, English-language guide. Discover, explore, and thrive in Madrid.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Highlights</h4>
            <ul className="space-y-2">
              {highlights.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {currentYear} Madrid Insider. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
