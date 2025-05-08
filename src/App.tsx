
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Essentials from "./pages/Essentials";
import Transport from "./pages/Transport";
import ThingsToDo from "./pages/ThingsToDo";
import FoodAndDrink from "./pages/FoodAndDrink";
import Living from "./pages/Living";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/essentials" element={<Essentials />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/food-and-drink" element={<FoodAndDrink />} />
          <Route path="/living" element={<Living />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
