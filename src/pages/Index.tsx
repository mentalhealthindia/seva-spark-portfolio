
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Navigation />
      <Hero />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
