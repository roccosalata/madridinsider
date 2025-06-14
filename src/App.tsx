
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import IndexPage from './pages/Index';
import Museums from './pages/see/Museums';
import Neighborhoods from './pages/see/Neighborhoods';
import Sightseeing from './pages/see/Sightseeing';
import MadridNow from './pages/MadridNow';
import WeatherToday from './pages/now/WeatherToday';
import CurrentEvents from './pages/now/CurrentEvents';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/see/museums" element={<Museums />} />
            <Route path="/see/neighborhoods" element={<Neighborhoods />} />
            <Route path="/see/sightseeing" element={<Sightseeing />} />
            <Route path="/madrid-now" element={<MadridNow />} />
            <Route path="/now/weather-today" element={<WeatherToday />} />
            <Route path="/now/current-events" element={<CurrentEvents />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
