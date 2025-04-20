
import { useState } from 'react';
import { RotateCw } from 'lucide-react';

interface TechCategory {
  name: string;
  techs: string[];
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    techs: ["React", "Angular", "Vue", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "Backend",
    techs: ["Node.js", "Python", "Java", "Go", ".NET", "Ruby on Rails"]
  },
  {
    name: "Cloud",
    techs: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"]
  },
  {
    name: "Database",
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB"]
  },
  {
    name: "DevOps",
    techs: ["CI/CD", "Jenkins", "GitHub Actions", "Ansible", "Prometheus", "Grafana"]
  }
];

const TechStackSection = () => {
  const [spinning, setSpinning] = useState(false);
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(0);
  
  const handleSpin = () => {
    setSpinning(true);
    setActiveTech(null);
    
    setTimeout(() => {
      const randomCategory = Math.floor(Math.random() * techCategories.length);
      const randomTech = Math.floor(Math.random() * techCategories[randomCategory].techs.length);
      
      setSelectedCategory(randomCategory);
      setActiveTech(techCategories[randomCategory].techs[randomTech]);
      setSpinning(false);
    }, 1000);
  };
  
  return (
    <section className="py-20 bg-space-cadet relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Our Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-lg text-floral-white/80 max-w-2xl mx-auto">
            We use the latest technologies to build scalable, high-performance solutions for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Tech Categories */}
          <div className="order-2 lg:order-1 lg:col-span-1">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 text-center lg:text-left">Technology Categories</h3>
              <div className="flex flex-col gap-2">
                {techCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(index)}
                    className={`p-3 text-left rounded-md transition-all ${
                      selectedCategory === index 
                        ? 'bg-orange-web text-space-cadet font-medium' 
                        : 'hover:bg-white/10'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Tech Stack Wheel */}
          <div className="order-1 lg:order-2 lg:col-span-1">
            <div className="relative flex justify-center">
              <div className={`relative w-64 h-64 rounded-full bg-space-cadet-2 border-4 border-dashed border-orange-web/30 ${spinning ? 'animate-rotate-slow' : ''}`}>
                {techCategories[selectedCategory].techs.map((tech, i) => {
                  const angle = (i * (360 / techCategories[selectedCategory].techs.length));
                  const radian = angle * (Math.PI / 180);
                  const x = Math.cos(radian) * 100 + 100;
                  const y = Math.sin(radian) * 100 + 100;
                  
                  return (
                    <div
                      key={tech}
                      className={`absolute text-sm font-medium p-2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        activeTech === tech 
                          ? 'text-orange-web scale-150 font-bold' 
                          : 'text-floral-white'
                      }`}
                      style={{ left: `${x}px`, top: `${y}px` }}
                    >
                      {tech}
                    </div>
                  );
                })}
                
                <button
                  onClick={handleSpin}
                  disabled={spinning}
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-orange-web text-space-cadet flex items-center justify-center font-bold text-sm transition-transform hover:scale-110"
                >
                  <RotateCw size={24} className={spinning ? 'animate-spin' : ''} />
                  <span className="sr-only">Spin</span>
                </button>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-floral-white/80 text-sm">Click the wheel to discover random technologies</p>
              {activeTech && (
                <p className="text-orange-web font-bold mt-2 text-xl animate-scale-in">{activeTech}</p>
              )}
            </div>
          </div>
          
          {/* Selected Tech Info */}
          <div className="order-3 lg:col-span-1">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Technologies</h3>
              <ul className="grid grid-cols-2 gap-y-2">
                {techCategories[selectedCategory].techs.map((tech) => (
                  <li 
                    key={tech} 
                    className={`flex items-center ${tech === activeTech ? 'text-orange-web' : ''}`}
                  >
                    <span className="inline-block w-2 h-2 mr-2 bg-orange-web rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
