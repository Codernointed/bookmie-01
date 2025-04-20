
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, features, icon, delay = 0 }: { 
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="glass-card p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.01] border border-white/10"
    >
      <div className="text-orange-web mb-4">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold font-raleway mb-2 text-floral-white">{title}</h3>
      <p className="text-floral-white/70 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-floral-white/80">
            <CheckCircle size={18} className="text-orange-web mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="btn-secondary inline-flex items-center">
        Learn More <ArrowRight size={16} className="ml-2" />
      </button>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen relative">
      <NavBar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-4 text-floral-white">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-floral-white/70">
              End-to-end solutions that transform ideas into powerful software products.
              From concept to deployment, we handle every step with expertise and precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard 
              title="Custom Software Development"
              description="Tailored software solutions designed to address your unique business challenges."
              features={[
                "Full-cycle development",
                "Agile methodology",
                "Scalable architecture",
                "Cross-platform compatibility"
              ]}
              icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M10 13l-1 2l1 2"></path><path d="M14 13l1 2l-1 2"></path></svg>}
              delay={0.1}
            />
            
            <ServiceCard 
              title="Cloud Solutions"
              description="Harness the power of cloud computing with our expertly managed cloud services."
              features={[
                "AWS, Azure & Google Cloud",
                "Cloud migration",
                "Serverless architecture",
                "24/7 monitoring & support"
              ]}
              icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12"></path></svg>}
              delay={0.2}
            />
            
            <ServiceCard 
              title="AI & Machine Learning"
              description="Turn data into insights with our advanced AI and machine learning solutions."
              features={[
                "Predictive analytics",
                "Natural language processing",
                "Computer vision",
                "Custom AI development"
              ]}
              icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path><path d="M9.7 17l4.6 0"></path></svg>}
              delay={0.3}
            />
            
            <ServiceCard 
              title="DevOps"
              description="Streamline your development pipeline with our DevOps practices and tools."
              features={[
                "CI/CD implementation",
                "Infrastructure as code",
                "Container orchestration",
                "Automated testing"
              ]}
              icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>}
              delay={0.4}
            />
            
            <ServiceCard 
              title="Mobile Development"
              description="Create powerful, engaging mobile apps for iOS and Android platforms."
              features={[
                "Native app development",
                "Cross-platform solutions",
                "UI/UX design",
                "App store optimization"
              ]}
              icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path><path d="M12 17.75l0 2.25"></path><path d="M8.5 17.75l-3.5 -2"></path><path d="M15.5 17.75l3.5 -2"></path><path d="M9 11l3 -8l3 8"></path><path d="M10 11l5 0"></path></svg>}
              delay={0.5}
            />
            
            <ServiceCard 
              title="Cybersecurity"
              description="Protect your digital assets with our comprehensive security solutions."
              features={[
                "Security audits",
                "Penetration testing",
                "Compliance consulting",
                "Security training"
              ]}
              icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path><path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12l0 2.5"></path></svg>}
              delay={0.6}
            />
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-orange-web/10 to-space-cadet"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-4 text-floral-white">
                Our <span className="text-gradient">Process</span>
              </h2>
              <p className="text-lg text-floral-white/70">
                We follow a proven methodology to ensure your project is delivered on time, 
                within budget, and exceeds your expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessStep 
                number="01"
                title="Discovery"
                description="We dive deep into your business needs, objectives, and challenges to define the project scope."
                delay={0.1}
              />
              
              <ProcessStep 
                number="02"
                title="Design"
                description="Our team creates detailed wireframes and prototypes to visualize the final product."
                delay={0.3}
              />
              
              <ProcessStep 
                number="03"
                title="Development"
                description="We build your solution using the latest technologies and best practices in agile development."
                delay={0.5}
              />
              
              <ProcessStep 
                number="04"
                title="Delivery"
                description="We deploy your solution, provide training, and ensure a smooth transition to operations."
                delay={0.7}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const ProcessStep = ({ number, title, description, delay }: {
  number: string;
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative p-6 glass-card border border-white/10"
    >
      <span className="absolute -top-6 -left-2 text-6xl font-bold text-orange-web/20 font-orbitron">
        {number}
      </span>
      <h3 className="text-xl font-bold mb-3 text-floral-white relative z-10 font-raleway">{title}</h3>
      <p className="text-floral-white/70">{description}</p>
    </motion.div>
  );
};

export default Services;
