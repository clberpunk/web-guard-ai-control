
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Dashboard from "@/components/Dashboard";
import EnhancedBenefits from "@/components/EnhancedBenefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CompetitiveComparison from "@/components/CompetitiveComparison";
import ContactForm from "@/components/ContactForm";
import TechnicalDocs from "@/components/TechnicalDocs";
import IndustrySectors from "@/components/IndustrySectors";
import SecurityPrivacy from "@/components/SecurityPrivacy";
import GlobalStats from "@/components/GlobalStats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <Features />
      <HowItWorks />
      <Benefits />
      <Dashboard />
      <EnhancedBenefits />
      <Testimonials />
      <Pricing />
      <CompetitiveComparison />
      <ContactForm />
      <TechnicalDocs />
      <IndustrySectors />
      <SecurityPrivacy />
      <GlobalStats />
      <Footer />
    </div>
  );
};

export default Index;
