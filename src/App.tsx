import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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

<<<<<<< HEAD
              {/* Generic route for the five main categories */}
              <Route path="/directory/madrid-essentials" element={<CategoryPage />} />
              <Route path="/directory/living-in-madrid" element={<CategoryPage />} />
              <Route path="/directory/see-in-madrid" element={<CategoryPage />} />
              <Route path="/directory/do-in-madrid" element={<CategoryPage />} />
              <Route path="/directory/madrid-now" element={<CategoryPage />} />
=======
              {/* Updated routing for See, Do & Explore */}
              <Route path="/see-do-explore" element={<SeeDoExplore />} />
              <Route path="/see-do-explore/:secondCategory" element={<SeeDoExplorePage />} />

              {/* Main Top-Level Routes */}
              <Route path="/madrid-essentials" element={<MadridEssentialsPage />} />
              <Route path="/living-madrid" element={<LivingMadridPage />} />
              <Route path="/see-madrid" element={<SeeMadridPage />} />
              <Route path="/do-madrid" element={<DoMadridPage />} />
              <Route path="/madrid-now" element={<MadridNowPage />} />
>>>>>>> b83373d30ebbf796363fa4771555c52212127cb1

              {/* Legacy and specific content routes */}
              <Route path="/food-and-drink" element={<FoodAndDrink />} />

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
