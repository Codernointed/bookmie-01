
import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheme } from '@/context/ThemeContext';

const taglines = [
  "We Build. We Scale. We Innovate.",
  "Your Vision. Our Code. Infinite Possibilities.",
  "From Concept to Code to Cloud.",
  "Crafted Code, Delivered Daily."
];

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const typingRef = useRef<HTMLSpanElement>(null);
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Cycle through taglines with typing animation
  useEffect(() => {
    const cycleTaglines = () => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setIsVisible(true);
      }, 1000);
    };
    
    const interval = setInterval(cycleTaglines, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-24 md:w-36 h-24 md:h-36 rounded-full bg-orange-web/10 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-36 md:w-48 h-36 md:h-48 rounded-full bg-orange-web/5 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 md:w-24 h-16 md:h-24 rounded-full bg-orange-web/15 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional responsive elements */}
        <div className="absolute bottom-1/5 left-1/5 w-20 h-20 rounded-full bg-gradient-to-br from-orange-web/20 to-transparent backdrop-blur-sm animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-12 h-12 rounded-full bg-gradient-to-tl from-orange-web/25 to-transparent backdrop-blur-sm animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-orbitron font-bold mb-4 md:mb-6">
            Welcome to <span className="text-gradient animate-pulse-glow">Bookmie</span>
          </h1>
          
          <div className="h-12 sm:h-16 md:h-20 mb-6 md:mb-8 flex items-center justify-center">
            <h2 
              className={`text-lg sm:text-xl md:text-3xl font-raleway font-medium transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <span 
                ref={typingRef}
                className={isVisible ? "typing-animation" : ""}
              >
                {taglines[currentTagline]}
              </span>
            </h2>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-floral-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
            Get started building your dream projects with developers with a track record of delivering the best software.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary group">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={isMobile ? 16 : 20} />
            </Button>
            <Button className="btn-secondary">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center scroll-indicator">
        <span className="text-xs sm:text-sm text-floral-white/60 mb-12">Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
