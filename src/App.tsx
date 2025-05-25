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
import SeeDoExplore from "./pages/SeeDoExplore";
import SeeDoExplorePage from './pages/SeeDoExplorePage';
import SightsAttractionsPage from './pages/SightsAttractionsPage';
import ActivitiesEntertainmentPage from './pages/ActivitiesEntertainmentPage';
import FoodAndDrink from "./pages/FoodAndDrink";
import Living from "@/pages/Living"; // Corrected import path
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

              {/* Updated routing for See, Do & Explore */}
              {/* /see-do-explore now points to the overview page */}
              <Route path="/see-do-explore" element={<SeeDoExplore />} />
              {/* /see-do-explore/:secondCategory will point to the dynamic page */}
              <Route path="/see-do-explore/:secondCategory" element={<SeeDoExplorePage />} />

              {/* Keep specific routes for now, potentially refactor later */}
              <Route path="/see-do-explore/sights-attractions" element={<SightsAttractionsPage />} />
              <Route path="/see-do-explore/activities-entertainment" element={<ActivitiesEntertainmentPage />} />

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