
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import IndexPage from './pages/Index';
import Museums from './pages/see/Museums';
import Neighborhoods from './pages/see/Neighborhoods';
import Sightseeing from './pages/see/Sightseeing';

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
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
