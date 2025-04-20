
import { ChevronRight, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const CtaSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would handle the actual form submission
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-web/20 to-space-cadet"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Ready to <span className="text-gradient">Transform</span> Your Ideas Into Reality?
          </h2>
          
          <p className="text-lg text-floral-white/80 mb-8">
            Let's build something amazing together. Get in touch to discuss your project or subscribe for updates.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
            <a 
              href="/contact" 
              className="btn-primary inline-flex items-center"
            >
              Start Your Project <ChevronRight size={20} className="ml-2" />
            </a>
            
            <div className="text-floral-white/60">or</div>
            
            <form 
              onSubmit={handleSubmit}
              className="relative flex w-full max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-l-md bg-white/10 border border-white/30 focus:outline-none focus:border-orange-web text-floral-white placeholder:text-floral-white/50"
                required
              />
              <button
                type="submit"
                className={`px-4 py-3 rounded-r-md text-space-cadet font-medium transition-all ${
                  submitted 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-orange-web hover:bg-orange-web/90'
                }`}
              >
                {submitted ? <CheckCircle size={20} /> : <Send size={20} />}
                <span className="sr-only">Subscribe</span>
              </button>
            </form>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-floral-white/60">
            <span className="flex items-center">
              <CheckCircle size={16} className="mr-2 text-orange-web" />
              No obligation consultation
            </span>
            <span className="flex items-center">
              <CheckCircle size={16} className="mr-2 text-orange-web" />
              Transparent pricing
            </span>
            <span className="flex items-center">
              <CheckCircle size={16} className="mr-2 text-orange-web" />
              Expert advice
            </span>
            <span className="flex items-center">
              <CheckCircle size={16} className="mr-2 text-orange-web" />
              24/7 support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
