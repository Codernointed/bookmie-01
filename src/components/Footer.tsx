
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-space-cadet-3 border-t border-orange-web/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/honeycomb-logo.svg" 
                alt="Bookmie Logo" 
                className="w-8 h-8"
              />
              <span className="font-orbitron text-xl font-bold text-floral-white">
                <span className="text-gradient">Bookmie</span> Devs
              </span>
            </div>
            <p className="text-floral-white/70 mb-4">
              We transform ideas into exceptional software solutions that drive business growth and innovation.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="#" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="#" icon={<Github size={18} />} label="GitHub" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-raleway font-bold text-lg mb-4 text-floral-white">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/services" label="Services" />
              <FooterLink href="/portfolio" label="Portfolio" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/blog" label="Blog" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-raleway font-bold text-lg mb-4 text-floral-white">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services/custom-development" label="Custom Software" />
              <FooterLink href="/services/cloud-solutions" label="Cloud Solutions" />
              <FooterLink href="/services/ai-ml" label="AI & Machine Learning" />
              <FooterLink href="/services/devops" label="DevOps" />
              <FooterLink href="/services/mobile-development" label="Mobile Development" />
              <FooterLink href="/services/cybersecurity" label="Cybersecurity" />
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-raleway font-bold text-lg mb-4 text-floral-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-floral-white/70">
                <Mail size={18} className="text-orange-web mt-1 flex-shrink-0" />
                <a href="mailto:hello@bookmie.dev" className="hover:text-orange-web transition-colors">hello@bookmie.dev</a>
              </li>
              <li className="flex items-start gap-2 text-floral-white/70">
                <Phone size={18} className="text-orange-web mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-orange-web transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start gap-2 text-floral-white/70">
                <MapPin size={18} className="text-orange-web mt-1 flex-shrink-0" />
                <address className="not-italic">
                  1234 Tech Avenue, <br />
                  Innovation District, <br />
                  San Francisco, CA 94107
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-floral-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-floral-white/60 text-sm">
          <div>
            © {currentYear} Bookmie Developers. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-floral-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-floral-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-floral-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-web transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link 
      to={href} 
      className="text-floral-white/70 hover:text-orange-web transition-colors"
    >
      {label}
    </Link>
  </li>
);

export default Footer;
