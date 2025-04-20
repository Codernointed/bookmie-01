
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { Toggle } from '@/components/ui/toggle';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu on resize to desktop
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-space-cadet/90 dark:bg-space-cadet-3/90 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/honeycomb-logo.svg" 
            alt="Bookmie Logo" 
            className="w-10 h-10 animate-pulse-light"
          />
          <span className="font-orbitron text-xl md:text-2xl font-bold text-floral-white">
            <span className="text-gradient">Bookmie</span> Devs
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/services" label="Services" />
          <NavLink to="/portfolio" label="Portfolio" />
          <NavLink to="/about" label="About" />
          <NavLink to="/blog" label="Blog" />
          <NavLink to="/contact" label="Contact" />
          
          <Toggle 
            pressed={isDarkMode}
            onPressedChange={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full"
          >
            {isDarkMode ? <Sun size={20} className="text-orange-web" /> : <Moon size={20} className="text-floral-white" />}
          </Toggle>
          
          <Button className="btn-primary">
            Start Your Project
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Toggle 
            pressed={isDarkMode}
            onPressedChange={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full"
          >
            {isDarkMode ? <Sun size={20} className="text-orange-web" /> : <Moon size={20} className="text-floral-white" />}
          </Toggle>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-floral-white hover:text-orange-web transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-space-cadet-2/95 dark:bg-space-cadet-3/95 backdrop-blur-md py-4 px-4 absolute top-full left-0 w-full animate-fade-in">
          <div className="flex flex-col gap-4">
            <MobileNavLink to="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/services" label="Services" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/portfolio" label="Portfolio" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/about" label="About" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/blog" label="Blog" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/contact" label="Contact" onClick={() => setMobileMenuOpen(false)} />
            
            <Button className="btn-primary w-full mt-2">
              Start Your Project
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link 
    to={to} 
    className="font-medium text-floral-white hover:text-orange-web transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-orange-web after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {label}
  </Link>
);

const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="font-medium text-floral-white hover:text-orange-web py-2 transition-colors duration-300 border-b border-floral-white/10"
  >
    {label}
  </Link>
);

export default NavBar;
