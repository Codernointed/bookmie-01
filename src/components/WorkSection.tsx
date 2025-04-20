
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cloud Migration Platform",
    subtitle: "Enterprise Infrastructure Solution",
    description: "A comprehensive platform for migrating legacy systems to modern cloud infrastructure with zero downtime and minimal risk.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=500&fit=crop",
    tech: ["AWS", "Terraform", "Docker", "Kubernetes", "Go"]
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    subtitle: "Data Visualization Tool",
    description: "Real-time data analytics platform with AI-driven insights for business intelligence and predictive decision-making.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=500&fit=crop",
    tech: ["React", "Python", "TensorFlow", "D3.js", "MongoDB"]
  },
  {
    id: 3,
    title: "FinTech Payment Gateway",
    subtitle: "Secure Transaction System",
    description: "High-security payment processing system with blockchain integration for transparent, immutable transaction records.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    tech: ["Node.js", "Solidity", "PostgreSQL", "Stripe API", "TypeScript"]
  }
];

const WorkSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const nextProject = () => {
    if (animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setAnimating(false);
    }, 400);
  };
  
  const prevProject = () => {
    if (animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setAnimating(false);
    }, 400);
  };
  
  return (
    <section className="py-20 bg-space-cadet-3 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-floral-white/80 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped our clients achieve their goals.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Project Showcase */}
          <div className="glass-card p-6 md:p-10 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Project Image */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
                <div 
                  className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
                  style={{ height: '300px' }}
                >
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Project Info */}
              <div className="w-full lg:w-1/2 lg:pl-4">
                <div className={`transition-all duration-300 ${animating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                  <div className="mb-4">
                    <span className="text-orange-web font-medium">{projects[currentProject].subtitle}</span>
                    <h3 className="text-2xl font-raleway font-bold mt-1">{projects[currentProject].title}</h3>
                  </div>
                  
                  <p className="text-floral-white/80 mb-6">
                    {projects[currentProject].description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="block text-sm text-floral-white/70 mb-2">Technologies:</span>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-space-cadet text-floral-white/90 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-orange-web hover:underline"
                  >
                    View Case Study <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevProject}
              className="p-2 rounded-full bg-space-cadet border border-orange-web/30 hover:bg-orange-web/20 transition-colors"
            >
              <ChevronLeft size={24} className="text-floral-white" />
            </button>
            
            <div className="flex items-center gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProject(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentProject === idx ? 'bg-orange-web w-5' : 'bg-floral-white/30'
                  }`}
                >
                  <span className="sr-only">Go to project {idx + 1}</span>
                </button>
              ))}
            </div>
            
            <button
              onClick={nextProject}
              className="p-2 rounded-full bg-space-cadet border border-orange-web/30 hover:bg-orange-web/20 transition-colors"
            >
              <ChevronRight size={24} className="text-floral-white" />
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-secondary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
