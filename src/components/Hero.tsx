
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/342333493.sd.mp4?s=54c5f8bdedf98c16d6a9b2d3b7d5e33b04e7e9e1&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-6 animate-fade-in">
          Empowering Lives Through
          <span className="block text-gradient text-secondary mt-2">Education</span>
        </h1>
        
        <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-left">
          Join Gopal Educational and Social Welfare Society in transforming communities across Uttar Pradesh through quality education, skill development, and social empowerment programs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-black font-montserrat font-semibold px-8 py-6 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection('#donate')}
          >
            Donate Now
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary font-montserrat font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm"
            onClick={() => scrollToSection('#programs')}
          >
            Explore Programs
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#mission')}
            className="text-white hover:text-secondary transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
