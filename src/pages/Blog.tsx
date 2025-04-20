
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, Tag, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build, test, and deploy software applications.",
    image: "/placeholder.svg",
    date: "April 15, 2025",
    author: "Sarah Johnson",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Software Development", "Future Tech"]
  },
  {
    id: 2,
    title: "Optimizing React Performance: Best Practices",
    excerpt: "Learn how to make your React applications lightning-fast with these proven optimization techniques and tools.",
    image: "/placeholder.svg",
    date: "April 10, 2025",
    author: "Michael Chang",
    readTime: "8 min read",
    category: "Frontend Development",
    tags: ["React", "Performance", "JavaScript"]
  },
  {
    id: 3,
    title: "Transitioning from Monolith to Microservices",
    excerpt: "A step-by-step guide to breaking down your monolithic application into scalable, maintainable microservices.",
    image: "/placeholder.svg",
    date: "April 5, 2025",
    author: "David Wilson",
    readTime: "12 min read",
    category: "Backend Development",
    tags: ["Microservices", "Architecture", "DevOps"]
  },
  {
    id: 4,
    title: "Cybersecurity Essentials for Modern Applications",
    excerpt: "Protect your applications from common vulnerabilities with these essential cybersecurity practices and tools.",
    image: "/placeholder.svg",
    date: "March 28, 2025",
    author: "Emma Rodriguez",
    readTime: "7 min read",
    category: "Cybersecurity",
    tags: ["Security", "Best Practices", "Protection"]
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    excerpt: "A comprehensive guide to making your web applications accessible to users of all abilities.",
    image: "/placeholder.svg",
    date: "March 20, 2025",
    author: "Alex Kumar",
    readTime: "9 min read",
    category: "Web Development",
    tags: ["Accessibility", "UI/UX", "HTML"]
  },
  {
    id: 6,
    title: "Getting Started with WebAssembly",
    excerpt: "An introduction to WebAssembly and how it's changing the landscape of web application performance.",
    image: "/placeholder.svg",
    date: "March 15, 2025",
    author: "Olivia Chen",
    readTime: "10 min read",
    category: "Web Technologies",
    tags: ["WebAssembly", "Performance", "Web Development"]
  }
];

const categories = [
  { name: "Artificial Intelligence", count: 8 },
  { name: "Frontend Development", count: 12 },
  { name: "Backend Development", count: 10 },
  { name: "DevOps", count: 7 },
  { name: "Cybersecurity", count: 6 },
  { name: "Web Technologies", count: 14 }
];

const popularTags = [
  "JavaScript", "React", "Node.js", "AI", "DevOps", "Performance", "Cloud", "Security", "API", "Docker"
];

const BlogPostCard = ({ post, index }: { post: typeof blogPosts[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card border border-white/10 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-orange-web text-space-cadet px-2 py-1 text-sm font-medium rounded">
          {post.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-floral-white/60 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-floral-white font-raleway group-hover:text-orange-web transition-colors">
          {post.title}
        </h3>
        
        <p className="text-floral-white/70 mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-4">
          <div className="flex items-center gap-2 text-sm">
            <User size={14} className="text-orange-web" />
            <span className="text-floral-white/70">By <span className="text-floral-white">{post.author}</span></span>
          </div>
          
          <Button variant="link" className="text-orange-web p-0 hover:text-orange-web/80">
            Read More
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen relative">
      <NavBar />
      
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-4 text-floral-white">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-floral-white/70">
              Insights, tutorials, and industry news from our expert team.
              Stay updated with the latest in technology and software development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Post */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card border border-white/10 mb-10 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Featured Post" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-cadet to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4 bg-orange-web text-space-cadet px-3 py-1 font-medium rounded-full">
                    Featured
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-floral-white/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      April 20, 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      John Smith
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      15 min read
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-floral-white font-raleway group-hover:text-orange-web transition-colors">
                    The Complete Guide to Serverless Architecture in 2025
                  </h2>
                  
                  <p className="text-floral-white/70 mb-6">
                    Explore the evolution of serverless architecture, best practices for implementation, and how it's 
                    transforming the way businesses build and deploy applications in the cloud. This comprehensive 
                    guide covers everything from basic concepts to advanced patterns.
                  </p>
                  
                  <Button className="btn-primary">Read Full Article</Button>
                </div>
              </motion.div>
              
              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {blogPosts.map((post, index) => (
                  <BlogPostCard key={post.id} post={post} index={index} />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full border-white/20">
                    &lt;
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full border-orange-web bg-orange-web/10 text-orange-web">1</Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full border-white/20">2</Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full border-white/20">3</Button>
                  <span className="text-floral-white/70 px-2">...</span>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full border-white/20">8</Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full border-white/20">
                    &gt;
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Search */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card border border-white/10 p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-floral-white font-raleway">Search</h3>
                <div className="relative">
                  <Input 
                    placeholder="Search articles..." 
                    className="bg-white/5 border-white/20 text-floral-white"
                  />
                  <Button className="absolute right-0 top-0 h-full aspect-square bg-orange-web text-space-cadet hover:bg-orange-web/90">
                    <Search size={18} />
                  </Button>
                </div>
              </motion.div>
              
              {/* Categories */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card border border-white/10 p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-floral-white font-raleway">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <a href="#" className="text-floral-white/70 hover:text-orange-web transition-colors">
                        {category.name}
                      </a>
                      <span className="bg-white/10 text-floral-white/90 px-2 py-0.5 text-xs rounded-full">
                        {category.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Popular Tags */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card border border-white/10 p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-floral-white font-raleway">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <span key={index} className="bg-white/10 text-floral-white/90 px-3 py-1 text-sm rounded-full flex items-center gap-1 hover:bg-orange-web/20 hover:border-orange-web/30 cursor-pointer transition-colors">
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              {/* Newsletter */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card border border-white/10 p-6"
              >
                <h3 className="text-xl font-bold mb-2 text-floral-white font-raleway">Newsletter</h3>
                <p className="text-floral-white/70 mb-4">Subscribe to get the latest articles and updates.</p>
                <div className="space-y-3">
                  <Input 
                    placeholder="Your email address" 
                    type="email"
                    className="bg-white/5 border-white/20 text-floral-white"
                  />
                  <Button className="w-full btn-primary">Subscribe</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
