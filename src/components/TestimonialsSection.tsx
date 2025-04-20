
import { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight, MessageSquareQuote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Morgan",
    position: "CTO",
    company: "TechVista Inc.",
    content: "Bookmie transformed our outdated system into a modern, cloud-based solution that's increased our productivity by 40%. Their technical expertise and project management made the transition seamless.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Founder",
    company: "InnovateMed",
    content: "We approached Bookmie with a complex healthcare application idea. Not only did they understand our vision perfectly, but they also improved upon it with their technical insights. The final product exceeded our expectations.",
    rating: 5
  },
  {
    id: 3,
    name: "David Chen",
    position: "Product Manager",
    company: "FinTech Solutions",
    content: "The AI-powered analytics dashboard Bookmie built for us has completely revolutionized how we make decisions. Their team's attention to detail and commitment to our success was evident throughout the project.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 400);
  };
  
  const prevTestimonial = () => {
    if (animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setAnimating(false);
    }, 400);
  };
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-space-cadet relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-orange-web/5 opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-orange-web/5 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-floral-white/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative">
            <div className="absolute top-6 right-8 text-5xl font-serif text-orange-web opacity-20">
              <MessageSquareQuote size={48} />
            </div>
            
            <div 
              className={`transition-all duration-300 ${
                animating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
            >
              <p className="text-lg md:text-xl italic mb-8 text-floral-white/90">
                "{testimonials[activeTestimonial].content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-raleway font-bold text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-floral-white/70">
                    {testimonials[activeTestimonial].position}, {testimonials[activeTestimonial].company}
                  </div>
                </div>
                
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < testimonials[activeTestimonial].rating ? "#FBB03B" : "transparent"}
                      stroke={i < testimonials[activeTestimonial].rating ? "#FBB03B" : "#FBF9EE"}
                      className="text-orange-web"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-space-cadet-2 hover:bg-orange-web/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={24} className="text-floral-white" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === idx ? 'bg-orange-web scale-125' : 'bg-floral-white/30'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                >
                  <span className="sr-only">Testimonial {idx + 1}</span>
                </button>
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-space-cadet-2 hover:bg-orange-web/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={24} className="text-floral-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
