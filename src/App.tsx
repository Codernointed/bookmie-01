
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const queryClient = new QueryClient();

// Create a wrapper component to apply theme
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`${theme} min-h-screen bg-background text-foreground`}>
      {children}
    </div>
  );
};

const AppContent = () => {
  // Add class for smoother scrolling
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    <ThemeWrapper>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* PLACEHOLDER ROUTES - These would be implemented as needed */}
            <Route path="/services" element={<NotFound />} />
            <Route path="/portfolio" element={<NotFound />} />
            <Route path="/about" element={<NotFound />} />
            <Route path="/blog" element={<NotFound />} />
            <Route path="/contact" element={<NotFound />} />
            <Route path="/privacy" element={<NotFound />} />
            <Route path="/terms" element={<NotFound />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeWrapper>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
