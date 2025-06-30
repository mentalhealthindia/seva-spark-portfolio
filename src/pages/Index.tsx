
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import ImpactStories from "@/components/ImpactStories";
import DonationHub from "@/components/DonationHub";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Navigation />
      <Hero />
      <Mission />
      <Programs />
      <ImpactStories />
      <DonationHub />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
