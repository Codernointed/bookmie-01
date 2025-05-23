
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import WorkSection from '@/components/WorkSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import CodeBackground from '@/components/CodeBackground';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* Background code snippets */}
      <CodeBackground />
      
      {/* Navigation */}
      <NavBar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        <WorkSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
