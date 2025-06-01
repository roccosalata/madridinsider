import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SeeDoExplore from "./pages/SeeDoExplore";
import SeeDoExplorePage from './pages/SeeDoExplorePage';
import MadridEssentialsPage from './pages/MadridEssentialsPage';
import SeeMadridPage from './pages/SeeMadridPage';
import DoMadridPage from './pages/DoMadridPage';
import FoodAndDrink from "./pages/FoodAndDrink";
import LivingMadridPage from "@/pages/LivingMadridPage";
import Transport from "./pages/Transport";
import MadridNowPage from "./pages/MadridNowPage";
import NotFound from "./pages/NotFound"; // Keep NotFound import

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Updated routing for See, Do & Explore */}
              <Route path="/see-do-explore" element={<SeeDoExplore />} />
              <Route path="/see-do-explore/:secondCategory" element={<SeeDoExplorePage />} />

              {/* Main Top-Level Routes */}
              <Route path="/madrid-essentials" element={<MadridEssentialsPage />} />
              <Route path="/living-madrid" element={<LivingMadridPage />} />
              <Route path="/see-madrid" element={<SeeMadridPage />} />
              <Route path="/do-madrid" element={<DoMadridPage />} />
              <Route path="/madrid-now" element={<MadridNowPage />} />

              {/* Legacy and specific content routes */}
              <Route path="/food-and-drink" element={<FoodAndDrink />} />
              <Route path="/transport" element={<Transport />} />

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
