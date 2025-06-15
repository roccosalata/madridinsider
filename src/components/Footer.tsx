
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Madrid<span className="text-madrid-red">Insider</span></h3>
            <p className="text-gray-300 text-sm">
              Your comprehensive English-language guide to Madrid, Spain. Helping tourists, students, and expats navigate and enjoy this vibrant city.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Madrid Essentials</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/madrid-essentials/tourist-offices" className="text-gray-300 hover:text-white text-sm">
                  Tourist Offices
                </Link>
              </li>
              <li>
                <Link to="/madrid-essentials/madrid-card" className="text-gray-300 hover:text-white text-sm">
                  Madrid Card
                </Link>
              </li>
              <li>
                <Link to="/madrid-essentials/transport-maps" className="text-gray-300 hover:text-white text-sm">
                  Transport & Maps
                </Link>
              </li>
              <li>
                <Link to="/madrid-essentials/currency" className="text-gray-300 hover:text-white text-sm">
                  Currency & Money
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Living in Madrid</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/living-in-madrid/paperwork" className="text-gray-300 hover:text-white text-sm">
                  Paperwork & NIE/TIE
                </Link>
              </li>
              <li>
                <Link to="/living-in-madrid/accommodation" className="text-gray-300 hover:text-white text-sm">
                  Finding Accommodation
                </Link>
              </li>
              <li>
                <Link to="/living-in-madrid/banking" className="text-gray-300 hover:text-white text-sm">
                  Banking & Finances
                </Link>
              </li>
              <li>
                <Link to="/living-in-madrid/healthcare" className="text-gray-300 hover:text-white text-sm">
                  Healthcare
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">See & Do</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/see-in-madrid/museums" className="text-gray-300 hover:text-white text-sm">
                  Museums & Galleries
                </Link>
              </li>
              <li>
                <Link to="/see-in-madrid/parks" className="text-gray-300 hover:text-white text-sm">
                  Parks & Gardens
                </Link>
              </li>
              <li>
                <Link to="/do-in-madrid/food-drink" className="text-gray-300 hover:text-white text-sm">
                  Food & Dining
                </Link>
              </li>
              <li>
                <Link to="/do-in-madrid/nightlife" className="text-gray-300 hover:text-white text-sm">
                  Nightlife & Bars
                </Link>
              </li>
            </ul>
            <h4 className="text-lg font-semibold mt-6 mb-3">Madrid Now</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/madrid-now/weather-today" className="text-gray-300 hover:text-white text-sm">
                  Weather Today
                </Link>
              </li>
              <li>
                <Link to="/madrid-now/current-events" className="text-gray-300 hover:text-white text-sm">
                  Current Events
                </Link>
              </li>
              <li>
                <Link to="/madrid-now/whats-on" className="text-gray-300 hover:text-white text-sm">
                  What's On
                </Link>
              </li>
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
