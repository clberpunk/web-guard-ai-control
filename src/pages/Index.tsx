
import MegaMenuNavigation from "@/components/MegaMenuNavigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhatWeDetect from "@/components/WhatWeDetect";
import SimplifiedHowItWorks from "@/components/SimplifiedHowItWorks";
import ImmediateBenefits from "@/components/ImmediateBenefits";
import Dashboard from "@/components/Dashboard";
import EnhancedBenefits from "@/components/EnhancedBenefits";
import IndustrySectors from "@/components/IndustrySectors";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CompetitiveComparison from "@/components/CompetitiveComparison";
import SecurityPrivacy from "@/components/SecurityPrivacy";
import ContactForm from "@/components/ContactForm";
import TechnicalDocs from "@/components/TechnicalDocs";
import GlobalStats from "@/components/GlobalStats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MegaMenuNavigation />
      
      {/* PRODUCTO */}
      <div id="hero">
        <Hero />
      </div>
      <Features />
      <WhatWeDetect />
      <SimplifiedHowItWorks />
      <ImmediateBenefits />
      <Dashboard />
      <Pricing />
      
      {/* CASOS DE USO */}
      <IndustrySectors />
      <Testimonials />
      <CompetitiveComparison />
      <EnhancedBenefits />
      <SecurityPrivacy />
      
      {/* EMPRESA */}
      <ContactForm />
      <TechnicalDocs />
      <GlobalStats />
      <Footer />
    </div>
  );
};

export default Index;
