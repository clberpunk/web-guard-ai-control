
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import GlobalStats from "@/components/GlobalStats";
import Features from "@/components/Features";
import EnhancedBenefits from "@/components/EnhancedBenefits";
import CompetitiveComparison from "@/components/CompetitiveComparison";
import HowItWorks from "@/components/HowItWorks";
import Dashboard from "@/components/Dashboard";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
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
      <GlobalStats />
      <Features />
      <EnhancedBenefits />
      <CompetitiveComparison />
      <HowItWorks />
      <Dashboard />
      <Testimonials />
      <Benefits />
      <Pricing />
      <ContactForm />
      <TechnicalDocs />
      <Footer />
    </div>
  );
};

export default Index;
