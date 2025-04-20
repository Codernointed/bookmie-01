
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen relative">
      <NavBar />
      
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-4 text-floral-white">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-floral-white/70">
              Have a project in mind? We'd love to hear from you.
              Let's work together to bring your ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card border border-white/10 p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-floral-white font-raleway">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/20 border border-green-500/30 text-green-300 p-4 rounded-md flex items-center gap-3 mb-6"
                  >
                    <MessageSquare size={20} />
                    <span>Thank you! Your message has been sent successfully. We'll be in touch soon.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-floral-white mb-2">Your Name</label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                          className="bg-white/5 border-white/20 text-floral-white"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-floral-white mb-2">Email Address</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-white/5 border-white/20 text-floral-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-floral-white mb-2">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="bg-white/5 border-white/20 text-floral-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-floral-white mb-2">Your Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and timeline..."
                        rows={6}
                        required
                        className="bg-white/5 border-white/20 text-floral-white resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="btn-primary w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={18} /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div className="glass-card border border-white/10 p-8">
                  <h2 className="text-2xl font-bold mb-6 text-floral-white font-raleway">Contact Information</h2>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="bg-orange-web/20 p-3 rounded-full text-orange-web">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3 className="text-floral-white font-medium mb-1">Email Us</h3>
                        <a href="mailto:hello@bookmie.dev" className="text-floral-white/70 hover:text-orange-web transition-colors">
                          hello@bookmie.dev
                        </a>
                        <p className="text-floral-white/50 text-sm mt-1">For general inquiries</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4">
                      <div className="bg-orange-web/20 p-3 rounded-full text-orange-web">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h3 className="text-floral-white font-medium mb-1">Call Us</h3>
                        <a href="tel:+12345678901" className="text-floral-white/70 hover:text-orange-web transition-colors">
                          +1 (234) 567-8901
                        </a>
                        <p className="text-floral-white/50 text-sm mt-1">Mon-Fri, 9am-5pm EST</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4">
                      <div className="bg-orange-web/20 p-3 rounded-full text-orange-web">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="text-floral-white font-medium mb-1">Visit Us</h3>
                        <p className="text-floral-white/70">
                          1234 Tech Avenue, <br />
                          Innovation District, <br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4">
                      <div className="bg-orange-web/20 p-3 rounded-full text-orange-web">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h3 className="text-floral-white font-medium mb-1">Business Hours</h3>
                        <p className="text-floral-white/70">
                          Monday - Friday: 9am - 5pm <br />
                          Saturday: 10am - 2pm <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-card border border-white/10 p-8">
                  <h3 className="text-xl font-bold mb-4 text-floral-white font-raleway">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-web transition-colors"
                      aria-label="Facebook"
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-web transition-colors"
                      aria-label="Twitter"
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-web transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-web transition-colors"
                      aria-label="Instagram"
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-web transition-colors"
                      aria-label="GitHub"
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="container mx-auto px-4">
          <div className="glass-card border border-white/10 p-4 h-80">
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-orange-web mx-auto mb-4 opacity-50" />
                <p className="text-floral-white">Interactive map would be embedded here</p>
                <p className="text-floral-white/50 text-sm">(Google Maps or similar service)</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
