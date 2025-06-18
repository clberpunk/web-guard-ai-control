
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GlobalStats from "@/components/GlobalStats";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Dashboard from "@/components/Dashboard";
import EnhancedBenefits from "@/components/EnhancedBenefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CompetitiveComparison from "@/components/CompetitiveComparison";
import ContactForm from "@/components/ContactForm";
import TechnicalDocs from "@/components/TechnicalDocs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <Features />
      <GlobalStats />
      <HowItWorks />
      <Benefits />
      <Dashboard />
      <EnhancedBenefits />
      <Testimonials />
      <Pricing />
      <CompetitiveComparison />
      <ContactForm />
      <TechnicalDocs />
      <Footer />
    </div>
  );
};

export default Index;
