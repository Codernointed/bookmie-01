
import { useState } from 'react';
import { Code, Cloud, Database, Cpu, Server, Lock, Fingerprint } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address your unique business challenges and requirements.",
    icon: <Code size={32} className="text-orange-web" />
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description: "Scalable, secure cloud architectures built on AWS, Azure, or Google Cloud to power your business.",
    icon: <Cloud size={32} className="text-orange-web" />
  },
  {
    id: 3,
    title: "Database Design & Optimization",
    description: "Robust database architectures that ensure data integrity, performance, and scalability.",
    icon: <Database size={32} className="text-orange-web" />
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description: "Intelligent systems that learn and improve over time, delivering valuable insights and automation.",
    icon: <Cpu size={32} className="text-orange-web" />
  },
  {
    id: 5,
    title: "DevOps & Infrastructure",
    description: "Streamlined development operations with CI/CD pipelines, container orchestration, and infrastructure as code.",
    icon: <Server size={32} className="text-orange-web" />
  },
  {
    id: 6,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security measures to protect your applications, data, and infrastructure from threats.",
    icon: <Lock size={32} className="text-orange-web" />
  }
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  return (
    <section id="services" className="py-20 bg-space-cadet-2 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-floral-white/80 max-w-2xl mx-auto">
            We deliver end-to-end solutions that transform ideas into powerful, scalable software products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card p-6 transition-all duration-300 hover:bg-white/10 hover-lift"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="mb-4 transform transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-raleway font-bold mb-3">{service.title}</h3>
              <p className="text-floral-white/80">{service.description}</p>
              <div 
                className={`mt-4 h-0.5 bg-orange-web transform origin-left transition-transform duration-300 ${
                  hoveredService === service.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              ></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="btn-secondary inline-flex items-center">
            <span>View All Services</span>
            <Fingerprint size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
