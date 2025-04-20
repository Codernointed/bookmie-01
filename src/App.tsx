import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
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

  // Script to remove lovable tag
  useEffect(() => {
    const removeLovableTag = () => {
      try {
        const lovableTags = document.querySelectorAll('[class*="lovable"]');
        lovableTags.forEach(tag => tag.remove());
        
        const selectors = [
          '[id^="lovable"]', 
          '[class^="lovable"]',
          '[data-lovable]',
          '#select-button',
          '#lovable-tag'
        ];
        
        selectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(el => el.remove());
        });
        
        console.log("Removed lovable tags");
      } catch (error) {
        console.error("Error removing lovable tags:", error);
      }
    };
    
    // Run on mount
    removeLovableTag();
    
    // Also run after a short delay to catch any dynamically added elements
    const timeoutId = setTimeout(removeLovableTag, 1000);
    
    // Set up an interval to keep checking
    const intervalId = setInterval(removeLovableTag, 3000);
    
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ThemeWrapper>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
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
