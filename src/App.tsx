import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient } from 'react-query';
import Layout from './components/Layout';
import Home from './pages/Home';
import See from './pages/See';
import Eat from './pages/Eat';
import Stay from './pages/Stay';
import Plan from './pages/Plan';
import About from './pages/About';
import Museums from './pages/see/Museums';
import Neighborhoods from './pages/see/Neighborhoods';
import Sightseeing from './pages/see/Sightseeing';

function App() {
  return (
    <QueryClient>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/see" element={<See />} />
            <Route path="/eat" element={<Eat />} />
            <Route path="/stay" element={<Stay />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/about" element={<About />} />
            <Route path="/see/museums" element={<Museums />} />
            <Route path="/see/neighborhoods" element={<Neighborhoods />} />
            <Route path="/see/sightseeing" element={<Sightseeing />} />
          </Routes>
        </div>
      </Router>
    </QueryClient>
  );
}

export default App;
