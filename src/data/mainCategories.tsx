
import { Compass, Home, Eye, Activity, Clock } from 'lucide-react';

export interface MainCategory {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  icon: React.ReactNode;
  subcategories: Array<{
    title: string;
    link: string;
    icon?: React.ReactNode;
  }>;
}

export const mainCategories: MainCategory[] = [
  {
    title: "Madrid Essentials",
    description: "Essential information for tourists and first-time visitors to Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&auto=format&fit=crop",
    link: "/madrid-essentials",
    icon: <Compass className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Tourist Offices", link: "/madrid-essentials/tourist-offices" },
      { title: "Madrid Card", link: "/madrid-essentials/madrid-card" },
      { title: "Transport & Maps", link: "/madrid-essentials/transport-maps" },
      { title: "Weather & Climate", link: "/madrid-essentials/weather" },
      { title: "Currency & Money", link: "/madrid-essentials/currency" },
      { title: "Language Basics", link: "/madrid-essentials/language" },
      { title: "Safety Tips", link: "/madrid-essentials/safety" },
      { title: "Emergency Contacts", link: "/madrid-essentials/emergency" },
      { title: "Tourist Information", link: "/madrid-essentials/tourist-info" }
    ]
  },
  {
    title: "Living in Madrid",
    description: "Practical information for residents, students, and expats making Madrid their home.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    link: "/living-in-madrid",
    icon: <Home className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Paperwork & NIE/TIE", link: "/living-in-madrid/paperwork" },
      { title: "Finding Accommodation", link: "/living-in-madrid/accommodation" },
      { title: "Banking & Finances", link: "/living-in-madrid/banking" },
      { title: "Healthcare", link: "/living-in-madrid/healthcare" },
      { title: "Internet & Utilities", link: "/living-in-madrid/utilities" },
      { title: "Working in Madrid", link: "/living-in-madrid/work" },
      { title: "Education & Schools", link: "/living-in-madrid/education" },
      { title: "Shopping & Services", link: "/living-in-madrid/shopping-services" },
      { title: "Shopping Districts", link: "/do-in-madrid/shopping" }
    ]
  },
  {
    title: "See in Madrid",
    description: "Discover Madrid's incredible sights, from world-class museums to hidden architectural gems.",
    imageUrl: "https://images.unsplash.com/photo-1577782853630-673eafa2c209?q=80&w=800&auto=format&fit=crop",
    link: "/see-in-madrid",
    icon: <Eye className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Museums & Galleries", link: "/see-in-madrid/museums" },
      { title: "Royal Sites & Palaces", link: "/see-in-madrid/sightseeing" },
      { title: "Historic Sites & Monuments", link: "/see-in-madrid/sightseeing" },
      { title: "Parks & Gardens", link: "/see-in-madrid/parks" },
      { title: "Neighborhoods Guide", link: "/see-in-madrid/neighborhoods" },
      { title: "Viewpoints & Rooftops", link: "/see-in-madrid/sightseeing" }
    ]
  },
  {
    title: "Do in Madrid",
    description: "Experience Madrid's vibrant culture through food, nightlife, shopping, entertainment, and wellness activities.",
    imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=800&auto=format&fit=crop",
    link: "/do-in-madrid",
    icon: <Activity className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Food & Dining", link: "/do-in-madrid/food-drink" },
      { title: "Nightlife & Bars", link: "/do-in-madrid/nightlife" },
      { title: "Markets & Flea Markets", link: "/do-in-madrid/markets" },
      { title: "Entertainment & Shows", link: "/do-in-madrid/entertainment" },
      { title: "Sports & Recreation", link: "/do-in-madrid/sports" }
    ]
  },
  {
    title: "Madrid Now",
    description: "Current events, weather, and what's happening in Madrid right now.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    link: "/madrid-now",
    icon: <Clock className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Weather Today", link: "/madrid-now/weather-today" },
      { title: "Current Events", link: "/madrid-now/current-events" },
      { title: "What's On", link: "/madrid-now/whats-on" },
      { title: "Live Updates", link: "/madrid-now/live-updates" }
    ]
  }
];
```

Now I'll create the Madrid Card page:

<lov-write file_path="src/pages/essentials/MadridCard.tsx">
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Globe, CheckCircle, MapPin, Bus, CreditCard } from 'lucide-react';

const MadridCard = () => {
  const benefits = [
    "Access to the entire cultural offer in and around Madrid. Free entry to more than 40 of the major museums.",
    "As many journeys as you wish on the Madrid Visión tour bus.",
    "All visits which are part of the Discover Madrid programme.",
    "Madrid Fun Fair, Madrid Zoo and Aquarium, Cable Railway, Faunia, Imax...",
    "Take a casual stroll wherever you want in the Santiago Bernabéu stadium, thanks to the new Bernabéu Tour."
  ];

  const additionalBenefits = [
    "Considerable discounts in shops, restaurants, shows, nightclubs, discos and leisure centres for children and adults",
    "Free map of the city and comprehensive guide with information on all associated companies and institutions",
    "Brief descriptions, addresses, telephone numbers and discount information for all partners"
  ];

  return (
    <Layout>
      <HeroSection
        title="Madrid Card: The Tourist Card"
        subtitle="Your key to Madrid's cultural treasures and attractions with exclusive benefits and discounts"
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <Card className="bg-madrid-red text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-5 w-5" />
                <p>917-130-444 / 915-882-900</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Globe className="h-5 w-5" />
                <a href="https://www.madridcard.com" target="_blank" rel="noopener noreferrer" 
                   className="hover:underline">
                  www.madridcard.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:madridcard@madridcard.com" className="hover:underline">
                  madridcard@madridcard.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-madrid-red flex items-center gap-2">
                <CheckCircle className="h-6 w-6" />
                Main Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-madrid-red flex items-center gap-2">
                <CreditCard className="h-6 w-6" />
                Additional Advantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {additionalBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-madrid-red flex items-center gap-2">
              <Bus className="h-6 w-6" />
              Perfect Complement: Tourist Travel Pass
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-gray-700 mb-2">
                <strong>Note:</strong> The Tourist Travel Pass is not included in the price of the Madrid Card.
              </p>
              <p className="text-gray-700">
                Make the most of the Madrid public transport system, with unlimited use of the underground, bus and the Cercanías lines (suburban train network). The ideal complement to maximize your Madrid Card experience.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 bg-gradient-to-r from-madrid-red to-red-700 text-white rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Choose Madrid Card?</h3>
          <p className="text-lg text-center leading-relaxed">
            The Madrid Card enables cardholders to benefit from exclusive access to Madrid's cultural treasures, 
            convenient transportation, and significant savings on dining, shopping, and entertainment throughout the city.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default MadridCard;
```

Finally, I'll add the route to the App.tsx file:

<lov-write file_path="src/App.tsx">
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import IndexPage from './pages/Index';
import Museums from './pages/see/Museums';
import Neighborhoods from './pages/see/Neighborhoods';
import Sightseeing from './pages/see/Sightseeing';
import Parks from './pages/see/Parks';
import MadridNow from './pages/MadridNow';
import WeatherToday from './pages/now/WeatherToday';
import CurrentEvents from './pages/now/CurrentEvents';
import BathsPage from './pages/do/BathsPage';
import EntertainmentPage from './pages/do/EntertainmentPage';
import YogaWellnessPage from './pages/do/YogaWellnessPage';
import Healthcare from './pages/living/Healthcare';
import TransportMaps from './pages/essentials/TransportMaps';
import TouristOffices from './pages/essentials/TouristOffices';
import MadridCard from './pages/essentials/MadridCard';
import MadridEssentials from './pages/MadridEssentials';
import SeeMadridPage from './pages/SeeMadridPage';
import DoMadridPage from './pages/DoMadridPage';
import LivingMadridPage from './pages/LivingMadridPage';
import FoodAndDrinkPage from './pages/do/FoodAndDrinkPage';
import Nightlife from './pages/do/Nightlife';
import Shopping from './pages/do/Shopping';
import MarketsPage from './pages/do/MarketsPage';
import SportsPage from './pages/do/SportsPage';
import SwimmingPage from './pages/do/SwimmingPage';
import OtherSportsPage from './pages/do/OtherSportsPage';
import FootballPage from './pages/do/FootballPage';
import RunningPage from './pages/do/RunningPage';
import GolfPage from './pages/do/GolfPage';
import BasketballPage from './pages/do/BasketballPage';
import CyclingPage from './pages/do/CyclingPage';
import BoatingPage from './pages/do/BoatingPage';
import BowlingPage from './pages/do/BowlingPage';
import ShoppingServices from './pages/living/ShoppingServices';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            
            {/* Madrid Essentials */}
            <Route path="/madrid-essentials" element={<MadridEssentials />} />
            <Route path="/madrid-essentials/transport-maps" element={<TransportMaps />} />
            <Route path="/madrid-essentials/tourist-offices" element={<TouristOffices />} />
            <Route path="/madrid-essentials/madrid-card" element={<MadridCard />} />
            
            {/* Living in Madrid */}
            <Route path="/living-in-madrid" element={<LivingMadridPage />} />
            <Route path="/living-in-madrid/healthcare" element={<Healthcare />} />
            <Route path="/living-in-madrid/shopping-services" element={<ShoppingServices />} />
            
            {/* See in Madrid */}
            <Route path="/see-in-madrid" element={<SeeMadridPage />} />
            <Route path="/see-in-madrid/museums" element={<Museums />} />
            <Route path="/see-in-madrid/neighborhoods" element={<Neighborhoods />} />
            <Route path="/see-in-madrid/sightseeing" element={<Sightseeing />} />
            <Route path="/see-in-madrid/parks" element={<Parks />} />
            
            {/* Do in Madrid */}
            <Route path="/do-in-madrid" element={<DoMadridPage />} />
            <Route path="/do-in-madrid/food-drink" element={<FoodAndDrinkPage />} />
            <Route path="/do-in-madrid/nightlife" element={<Nightlife />} />
            <Route path="/do-in-madrid/shopping" element={<Shopping />} />
            <Route path="/do-in-madrid/markets" element={<MarketsPage />} />
            <Route path="/do-in-madrid/entertainment" element={<EntertainmentPage />} />
            <Route path="/do-in-madrid/sports" element={<SportsPage />} />
            <Route path="/do-in-madrid/sports/football" element={<FootballPage />} />
            <Route path="/do-in-madrid/sports/running" element={<RunningPage />} />
            <Route path="/do-in-madrid/sports/swimming" element={<SwimmingPage />} />
            <Route path="/do-in-madrid/sports/golf" element={<GolfPage />} />
            <Route path="/do-in-madrid/sports/other-sports" element={<OtherSportsPage />} />
            <Route path="/do-in-madrid/sports/basketball" element={<BasketballPage />} />
            <Route path="/do-in-madrid/sports/cycling" element={<CyclingPage />} />
            <Route path="/do-in-madrid/sports/boating" element={<BoatingPage />} />
            <Route path="/do-in-madrid/sports/bowling" element={<BowlingPage />} />
            <Route path="/do-in-madrid/sports/yoga-wellness" element={<YogaWellnessPage />} />
            <Route path="/do-in-madrid/sports/baths" element={<BathsPage />} />
            
            {/* Madrid Now */}
            <Route path="/madrid-now" element={<MadridNow />} />
            <Route path="/madrid-now/weather-today" element={<WeatherToday />} />
            <Route path="/madrid-now/current-events" element={<CurrentEvents />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
```
