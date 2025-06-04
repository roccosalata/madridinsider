
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MadridEssentials from "./pages/MadridEssentials";
import LivingMadridPage from "./pages/LivingMadridPage";
import SeeMadridPage from "./pages/SeeMadridPage";
import DoMadridPage from "./pages/DoMadridPage";
import MadridNowPage from "./pages/MadridNowPage";
import FoodAndDrink from "./pages/FoodAndDrink";
import HealthAndWellness from "./pages/HealthAndWellness";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

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

              {/* Main category routes */}
              <Route path="/madrid-essentials" element={<MadridEssentials />} />
              <Route path="/living-in-madrid" element={<LivingMadridPage />} />
              <Route path="/see-in-madrid" element={<SeeMadridPage />} />
              <Route path="/do-in-madrid" element={<DoMadridPage />} />
              <Route path="/madrid-now" element={<MadridNowPage />} />

              {/* Specific content routes */}
              <Route path="/do-in-madrid/food-drink" element={<FoodAndDrink />} />
              <Route path="/living-in-madrid/healthcare" element={<HealthAndWellness />} />

              {/* Legacy routes for backward compatibility */}
              <Route path="/food-and-drink" element={<FoodAndDrink />} />
              <Route path="/health-and-wellness" element={<HealthAndWellness />} />

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
