
import MegaMenuNavigation from "@/components/MegaMenuNavigation";
import TranslatedHero from "@/components/TranslatedHero";
import TranslatedFeatures from "@/components/TranslatedFeatures";
import WhatWeDetect from "@/components/WhatWeDetect";
import SimplifiedHowItWorks from "@/components/SimplifiedHowItWorks";
import ImmediateBenefits from "@/components/ImmediateBenefits";
import Dashboard from "@/components/Dashboard";
import IndustrySectors from "@/components/IndustrySectors";
import Testimonials from "@/components/Testimonials";
import CompetitiveComparison from "@/components/CompetitiveComparison";
import EnhancedBenefits from "@/components/EnhancedBenefits";
import Pricing from "@/components/Pricing";
import SecurityPrivacy from "@/components/SecurityPrivacy";
import ContactForm from "@/components/ContactForm";
import TechnicalDocs from "@/components/TechnicalDocs";
import GlobalStats from "@/components/GlobalStats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MegaMenuNavigation />
      
      {/* HERO */}
      <div id="hero">
        <TranslatedHero />
      </div>
      
      {/* PRODUCTO */}
      <div id="features">
        <TranslatedFeatures />
      </div>
      <div id="how-it-works">
        <SimplifiedHowItWorks />
      </div>
      <div id="immediate-benefits">
        <ImmediateBenefits />
      </div>
      <div id="dashboard">
        <Dashboard />
      </div>
      
      {/* CASOS DE USO */}
      <div id="what-we-do">
        <WhatWeDetect />
      </div>
      <div id="industry-sectors">
        <IndustrySectors />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="comparison">
        <CompetitiveComparison />
      </div>
      <div id="enhanced-benefits">
        <EnhancedBenefits />
      </div>
      
      {/* EMPRESA */}
      <div id="pricing">
        <Pricing />
      </div>
      <div id="security-privacy">
        <SecurityPrivacy />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <div id="technical-docs">
        <TechnicalDocs />
      </div>
      <div id="stats">
        <GlobalStats />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
