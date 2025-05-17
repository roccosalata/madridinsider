
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MadridEssentials from "./pages/MadridEssentials";
import Essentials from "./pages/Essentials";
import Transport from "./pages/Transport";
import SeeDoExplorePage from './pages/SeeDoExplorePage';
import SightsAttractionsPage from './pages/SightsAttractionsPage';
import ThingsToDo from "./pages/ThingsToDo";
import FoodAndDrink from "./pages/FoodAndDrink";
import Living from "./pages/Living";
import MadridNow from "./pages/MadridNow";
import NotFound from "./pages/NotFound";

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
              <Route path="/madrid-essentials" element={<MadridEssentials />} />
              <Route path="/essentials" element={<Essentials />} />
              <Route path="/transport" element={<Transport />} />
              <Route path="/things-to-do" element={<SeeDoExplore />} />              
              <Route path="/see-do-explore" element={<SeeDoExplorePage />} />
              <Route path="/see-do-explore/sights-attractions" element={<SightsAttractionsPage />} />
              <Route path="/food-and-drink" element={<FoodAndDrink />} />
              <Route path="/living" element={<Living />} />
              <Route path="/madrid-now" element={<MadridNow />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
