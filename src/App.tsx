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
            
            {/* Living in Madrid */}
            <Route path="/living-in-madrid" element={<LivingMadridPage />} />
            <Route path="/living-in-madrid/healthcare" element={<Healthcare />} />
            
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
            <Route path="/do-in-madrid/yoga-wellness" element={<YogaWellnessPage />} />
            <Route path="/do-in-madrid/baths" element={<BathsPage />} />
            
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
