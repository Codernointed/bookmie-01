
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4 hero-gradient">
        <div className="glass-card p-8 md:p-12 max-w-lg w-full text-center">
          <div className="mb-6">
            <h1 className="text-7xl md:text-9xl font-orbitron font-bold text-orange-web mb-4">404</h1>
            <div className="w-24 h-1 bg-orange-web mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-raleway font-bold mb-4">Page Not Found</h2>
            <p className="text-lg text-floral-white/80 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="btn-primary inline-flex items-center justify-center"
            >
              <Home size={18} className="mr-2" />
              Return Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center justify-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
