
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ExternalLink, Code, Users, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "HealthTech Patient Portal",
    category: "Healthcare",
    description: "A comprehensive patient management system with real-time appointment scheduling, secure messaging, and medical record access.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    client: "MedCare Solutions",
    date: "January 2025",
    link: "#"
  },
  {
    id: 2,
    title: "FinTrack Investment Dashboard",
    category: "Finance",
    description: "Advanced financial analytics platform with real-time market data integration, portfolio management, and predictive modeling.",
    image: "/placeholder.svg",
    tags: ["Vue.js", "Python", "TensorFlow", "AWS"],
    client: "Global Investments Inc.",
    date: "December 2024",
    link: "#"
  },
  {
    id: 3,
    title: "EcoSmart Smart Home System",
    category: "IoT",
    description: "IoT-based home automation solution with energy usage monitoring, AI-powered optimization, and mobile control interface.",
    image: "/placeholder.svg",
    tags: ["Flutter", "Golang", "MQTT", "TensorFlow Lite"],
    client: "EcoTech Innovations",
    date: "November 2024",
    link: "#"
  },
  {
    id: 4,
    title: "RetailPro E-Commerce Platform",
    category: "E-Commerce",
    description: "Scalable e-commerce solution with inventory management, payment processing, and personalized recommendation engine.",
    image: "/placeholder.svg",
    tags: ["Next.js", "PostgreSQL", "Stripe API", "Docker"],
    client: "Retail Solutions Group",
    date: "October 2024",
    link: "#"
  },
  {
    id: 5,
    title: "EduLearn LMS Platform",
    category: "Education",
    description: "Comprehensive learning management system with course creation tools, student progress tracking, and interactive assessments.",
    image: "/placeholder.svg",
    tags: ["Angular", "Firebase", "WebRTC", "Kubernetes"],
    client: "Global Education Partners",
    date: "September 2024",
    link: "#"
  },
  {
    id: 6,
    title: "TravelBuddy Booking App",
    category: "Travel",
    description: "All-in-one travel companion app with flight booking, hotel reservations, itinerary planning, and local recommendations.",
    image: "/placeholder.svg",
    tags: ["React Native", "GraphQL", "AWS Amplify", "Google Maps API"],
    client: "Travel Tech Solutions",
    date: "August 2024",
    link: "#"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden border border-white/10 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-cadet to-transparent opacity-70"></div>
        <span className="absolute top-4 left-4 bg-orange-web text-space-cadet px-2 py-1 text-sm font-medium rounded">
          {project.category}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-floral-white font-raleway">{project.title}</h3>
        <p className="text-floral-white/70 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="bg-white/10 text-floral-white/90 px-2 py-0.5 text-xs rounded flex items-center gap-1">
              <Tag size={12} /> {tag}
            </span>
          ))}
        </div>
        
        <div className="border-t border-white/10 pt-4 mt-4 flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-floral-white/60">
            <Users size={14} className="text-orange-web" />
            <span>Client:</span>
            <span className="text-floral-white">{project.client}</span>
          </div>
          
          <div className="flex items-center gap-2 text-floral-white/60">
            <Calendar size={14} className="text-orange-web" />
            <span>Completed:</span>
            <span className="text-floral-white">{project.date}</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <Button variant="link" className="text-orange-web p-0 hover:text-orange-web/80">
            View Details
          </Button>
          
          <a 
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-floral-white/60 hover:text-orange-web transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen relative">
      <NavBar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-4 text-floral-white">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-floral-white/70">
              Explore our showcase of successful projects across various industries.
              Each project demonstrates our commitment to excellence and innovation.
            </p>
          </div>
          
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Button variant="outline" className="border-orange-web text-orange-web hover:bg-orange-web/10">
              All Projects
            </Button>
            <Button variant="ghost" className="text-floral-white/70 hover:text-orange-web">
              Web Apps
            </Button>
            <Button variant="ghost" className="text-floral-white/70 hover:text-orange-web">
              Mobile Apps
            </Button>
            <Button variant="ghost" className="text-floral-white/70 hover:text-orange-web">
              E-Commerce
            </Button>
            <Button variant="ghost" className="text-floral-white/70 hover:text-orange-web">
              Enterprise
            </Button>
            <Button variant="ghost" className="text-floral-white/70 hover:text-orange-web">
              AI & ML
            </Button>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
