
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
import TransportMaps from './pages/essentials/TransportMaps';
import MadridEssentials from './pages/MadridEssentials';
import SeeMadridPage from './pages/SeeMadridPage';
import DoMadridPage from './pages/DoMadridPage';
import LivingMadridPage from './pages/LivingMadridPage';

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
            
            {/* See in Madrid */}
            <Route path="/see-in-madrid" element={<SeeMadridPage />} />
            <Route path="/see-in-madrid/museums" element={<Museums />} />
            <Route path="/see-in-madrid/neighborhoods" element={<Neighborhoods />} />
            <Route path="/see-in-madrid/sightseeing" element={<Sightseeing />} />
            <Route path="/see-in-madrid/parks" element={<Parks />} />
            
            {/* Do in Madrid */}
            <Route path="/do-in-madrid" element={<DoMadridPage />} />
            <Route path="/do-in-madrid/baths" element={<BathsPage />} />
            <Route path="/do-in-madrid/entertainment" element={<EntertainmentPage />} />
            
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
