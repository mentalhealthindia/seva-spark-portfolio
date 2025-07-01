
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
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
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="font-montserrat font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 animate-fade-in drop-shadow-2xl leading-tight">
          We Focus On Education, Health, And Social Welfare Through Dedicated Service And Reliable Supply Work That Makes A 
          <span className="block text-white mt-2 drop-shadow-2xl">Real Difference</span>
        </h1>
        
        <p className="font-open-sans text-base md:text-lg lg:text-xl xl:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-left drop-shadow-lg">
          Join Gopal Educational and Social Welfare Society in transforming communities.
        </p>

        <div className="flex justify-center animate-scale-in">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-black font-montserrat font-semibold px-8 py-6 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection('#contact')}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
