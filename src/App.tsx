
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./styles/animations.css";
import ThemeProvider from "@/components/ThemeProvider";
import { initSpotlightEffects } from "@/utils/spotlightEffect";

const queryClient = new QueryClient();

const App = () => {
  // Initialize spotlight effects when component mounts
  useEffect(() => {
    // Wait for DOM to be fully loaded
    setTimeout(() => {
      initSpotlightEffects();
    }, 500);
  }, []);

  return (
    <ThemeProvider initialTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
