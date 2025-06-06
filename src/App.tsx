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

// Madrid Essentials subcategories
import GettingStarted from "./pages/essentials/GettingStarted";
import Maps from "./pages/essentials/Maps";
import Weather from "./pages/essentials/Weather";

// Living in Madrid subcategories
import Paperwork from "./pages/living/Paperwork";
import Accommodation from "./pages/living/Accommodation";

// See in Madrid subcategories
import Museums from "./pages/see/Museums";
import Parks from "./pages/see/Parks";
import Neighborhoods from "./pages/see/Neighborhoods";

// Do in Madrid subcategories
import Nightlife from "./pages/do/Nightlife";
import Shopping from "./pages/do/Shopping";

// Madrid Now subcategories
import CurrentEvents from "./pages/now/CurrentEvents";
import WeatherToday from "./pages/now/WeatherToday";

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

              {/* Madrid Essentials subcategory routes */}
              <Route path="/madrid-essentials/getting-started" element={<GettingStarted />} />
              <Route path="/madrid-essentials/maps" element={<Maps />} />
              <Route path="/madrid-essentials/weather" element={<Weather />} />

              {/* Living in Madrid subcategory routes */}
              <Route path="/living-in-madrid/paperwork" element={<Paperwork />} />
              <Route path="/living-in-madrid/accommodation" element={<Accommodation />} />
              <Route path="/living-in-madrid/healthcare" element={<HealthAndWellness />} />

              {/* See in Madrid subcategory routes */}
              <Route path="/see-in-madrid/museums" element={<Museums />} />
              <Route path="/see-in-madrid/parks" element={<Parks />} />
              <Route path="/see-in-madrid/neighborhoods" element={<Neighborhoods />} />

              {/* Do in Madrid subcategory routes */}
              <Route path="/do-in-madrid/food-drink" element={<FoodAndDrink />} />
              <Route path="/do-in-madrid/nightlife" element={<Nightlife />} />
              <Route path="/do-in-madrid/shopping" element={<Shopping />} />

              {/* Madrid Now subcategory routes */}
              <Route path="/madrid-now/events" element={<CurrentEvents />} />
              <Route path="/madrid-now/weather" element={<WeatherToday />} />

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
