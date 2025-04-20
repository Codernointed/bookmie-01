
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and then hide the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-space-cadet-3 z-[9999] flex flex-col items-center justify-center">
      <div className="relative">
        <img 
          src="/honeycomb-logo.svg" 
          alt="Bookmie Logo" 
          className="w-24 h-24 animate-pulse-light"
        />
        <div className="absolute inset-0 bg-orange-web rounded-full blur-xl opacity-30 animate-pulse"></div>
      </div>
      
      <h1 className="mt-6 text-3xl font-orbitron font-bold text-floral-white">
        <span className="text-gradient">Bookmie</span> Devs
      </h1>
      
      <div className="mt-8 w-40 h-2 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-orange-web animate-[slide-in-right_2s_ease-out]"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
