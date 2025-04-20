
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Calendar, Award, Rocket, Users, BarChart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen relative">
      <NavBar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-6 text-floral-white">
                About <span className="text-gradient">Bookmie</span>
              </h1>
              
              <p className="text-lg text-floral-white/70 mb-6">
                Founded in 2020, Bookmie Developers is a team of passionate technology experts dedicated 
                to transforming innovative ideas into powerful software solutions. We combine technical 
                excellence with creative problem-solving to deliver products that exceed expectations.
              </p>
              
              <p className="text-lg text-floral-white/70 mb-8">
                Our mission is to make cutting-edge technology accessible to businesses of all sizes, 
                empowering them to thrive in an increasingly digital world. With a client-first approach 
                and commitment to quality, we've helped dozens of companies achieve their digital transformation goals.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="glass-card p-4 border border-white/10">
                  <div className="text-orange-web text-3xl font-bold mb-1">50+</div>
                  <div className="text-floral-white/70">Projects Completed</div>
                </div>
                
                <div className="glass-card p-4 border border-white/10">
                  <div className="text-orange-web text-3xl font-bold mb-1">30+</div>
                  <div className="text-floral-white/70">Happy Clients</div>
                </div>
                
                <div className="glass-card p-4 border border-white/10">
                  <div className="text-orange-web text-3xl font-bold mb-1">15+</div>
                  <div className="text-floral-white/70">Team Members</div>
                </div>
                
                <div className="glass-card p-4 border border-white/10">
                  <div className="text-orange-web text-3xl font-bold mb-1">5+</div>
                  <div className="text-floral-white/70">Years of Experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <img 
                src="/placeholder.svg" 
                alt="Our Team" 
                className="w-full h-auto rounded-2xl shadow-xl glass-card p-2"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-orange-web text-space-cadet p-3 rounded-lg shadow-lg font-bold">
                Est. 2020
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-space-cadet-2/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-floral-white">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-lg text-floral-white/70">
                These core principles guide everything we do at Bookmie Developers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueCard 
                icon={<Rocket className="w-8 h-8" />}
                title="Innovation"
                description="We constantly explore new technologies and approaches to deliver cutting-edge solutions."
                delay={0.1}
              />
              
              <ValueCard 
                icon={<Users className="w-8 h-8" />}
                title="Collaboration"
                description="We believe in the power of teamwork, both within our team and with our clients."
                delay={0.2}
              />
              
              <ValueCard 
                icon={<Award className="w-8 h-8" />}
                title="Excellence"
                description="We strive for excellence in every line of code, every design, and every interaction."
                delay={0.3}
              />
              
              <ValueCard 
                icon={<BarChart className="w-8 h-8" />}
                title="Impact"
                description="We measure our success by the positive impact our solutions have on our clients' businesses."
                delay={0.4}
              />
              
              <ValueCard 
                icon={<Heart className="w-8 h-8" />}
                title="Passion"
                description="We're passionate about technology and problem-solving, bringing enthusiasm to every project."
                delay={0.5}
              />
              
              <ValueCard 
                icon={<Calendar className="w-8 h-8" />}
                title="Reliability"
                description="We deliver on our promises, meeting deadlines and exceeding expectations consistently."
                delay={0.6}
              />
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-floral-white">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-floral-white/70">
              From a small startup to an industry leader, here's how we've grown over the years.
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-web/30 transform md:translate-x-[-0.5px]"></div>
            
            <div className="space-y-12">
              <TimelineItem 
                year="2020"
                title="Bookmie Developers Founded"
                description="Started as a small team of three developers working from a shared workspace."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2021"
                title="First Major Client"
                description="Secured our first enterprise client and expanded the team to 8 members."
                isLeft={false}
              />
              
              <TimelineItem 
                year="2022"
                title="Office Expansion"
                description="Moved to our current headquarters and doubled our team size to accommodate growth."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2023"
                title="International Expansion"
                description="Opened our first international office and began serving clients globally."
                isLeft={false}
              />
              
              <TimelineItem 
                year="2024"
                title="Technology Innovation Award"
                description="Recognized for our contributions to the tech community with a prestigious industry award."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2025"
                title="AI Division Launch"
                description="Established a specialized AI division to focus on cutting-edge machine learning solutions."
                isLeft={false}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const ValueCard = ({ icon, title, description, delay }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="glass-card p-6 border border-white/10 hover:border-orange-web/30 transition-all duration-300"
    >
      <div className="bg-orange-web/10 w-16 h-16 rounded-full flex items-center justify-center text-orange-web mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-floral-white font-raleway">{title}</h3>
      <p className="text-floral-white/70">{description}</p>
    </motion.div>
  );
};

const TimelineItem = ({ year, title, description, isLeft }: {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}) => {
  return (
    <div className={`relative ${isLeft ? 'md:pl-0 md:pr-1/2' : 'md:pl-1/2 md:pr-0'} pl-10 md:transform md:translate-y-6`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`glass-card p-6 ml-0 md:ml-12 mr-0 md:mr-12 border border-white/10 ${isLeft ? 'md:text-right' : 'text-left'}`}
      >
        <div className="absolute top-6 left-0 md:left-auto md:right-auto md:-translate-x-0">
          <div className={`w-8 h-8 rounded-full bg-orange-web flex items-center justify-center text-space-cadet font-bold text-sm absolute -left-4 md:left-auto ${isLeft ? 'md:-right-4' : 'md:-left-4'} transform translate-y-0`}>
            {year.slice(-2)}
          </div>
        </div>
        
        <div className="text-orange-web font-bold mb-1">{year}</div>
        <h3 className="text-xl font-bold mb-2 text-floral-white font-raleway">{title}</h3>
        <p className="text-floral-white/70">{description}</p>
      </motion.div>
    </div>
  );
};

export default About;
