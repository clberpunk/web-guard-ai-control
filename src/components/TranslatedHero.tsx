
import { ArrowRight, Shield, Brain, Lock, Activity, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const TranslatedHero = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3e635_0.5px,transparent_0.5px),linear-gradient(to_bottom,#a3e635_0.5px,transparent_0.5px)] bg-[size:24px_24px] opacity-5"></div>
      
      {/* Floating AI icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Brain className="h-8 w-8 text-neon-lime/30 neon-glow" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-300">
        <Shield className="h-6 w-6 text-neon-cyan/30 neon-glow" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float delay-500">
        <Lock className="h-7 w-7 text-neon-purple/30 neon-glow" />
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left column - Text content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-neon-lime/10 border neon-border rounded-full px-4 py-2 mb-8 animate-fade-in">
              <Shield className="h-4 w-4 text-neon-lime mr-2" />
              <span className="text-neon-lime text-sm font-medium">{t.hero.badge}</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in delay-100">
              <span className="bg-gradient-to-r from-neon-lime to-neon-cyan bg-clip-text text-transparent neon-text">
                People has rights,
              </span>
              <br />
              <span className="text-white">AI follow rules.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 mb-8 animate-fade-in delay-200">
              {t.hero.description}
              <span className="block mt-2 text-base text-slate-400">
                {t.hero.subdescription}
              </span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in delay-300">
              <Button size="lg" className="bg-neon-lime hover:bg-neon-lime-dark text-dark-bg px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 neon-glow">
                {t.hero.startNow}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg rounded-xl transition-all duration-300">
                {t.hero.freeTrial}
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in delay-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-lime mb-2">2min</div>
                <div className="text-slate-400 text-sm">{t.hero.installation}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-cyan mb-2">0</div>
                <div className="text-slate-400 text-sm">{t.hero.plugins}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-purple mb-2">30</div>
                <div className="text-slate-400 text-sm">{t.hero.guarantee}</div>
              </div>
            </div>
          </div>
          
          {/* Right column - Neon Dashboard mockup */}
          <div className="animate-fade-in delay-500">
            <div className="bg-dark-surface/95 backdrop-blur-lg rounded-2xl neon-border overflow-hidden shadow-2xl">
              {/* Dashboard header */}
              <div className="bg-dark-bg px-6 py-4 flex items-center justify-between border-b border-neon-lime/20">
                <div className="flex items-center space-x-4">
                  <Shield className="h-5 w-5 text-neon-lime" />
                  <span className="text-white font-medium">{t.hero.dashboardTitle}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-neon-lime animate-pulse-neon"></div>
                  <span className="text-neon-lime text-xs">{t.hero.active}</span>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="p-6 space-y-4 bg-dark-surface">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-neon-lime/10 rounded-lg p-3 text-center neon-border">
                    <Activity className="h-5 w-5 text-neon-lime mx-auto mb-1" />
                    <div className="text-white font-bold text-lg">147</div>
                    <div className="text-neon-lime text-xs">{t.hero.detected}</div>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-3 text-center border border-red-500/20">
                    <AlertTriangle className="h-5 w-5 text-red-400 mx-auto mb-1" />
                    <div className="text-white font-bold text-lg">23</div>
                    <div className="text-red-400 text-xs">{t.hero.blocked}</div>
                  </div>
                  <div className="bg-neon-cyan/10 rounded-lg p-3 text-center border border-cyan-400/20">
                    <CheckCircle className="h-5 w-5 text-neon-cyan mx-auto mb-1" />
                    <div className="text-white font-bold text-lg">124</div>
                    <div className="text-neon-cyan text-xs">{t.hero.allowed}</div>
                  </div>
                </div>
                
                {/* AI Activity List */}
                <div className="space-y-3">
                  {[
                    { name: "GPT-4", status: t.hero.statusBlocked, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
                    { name: "Claude AI", status: t.hero.statusAllowed, color: "text-neon-cyan", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                    { name: "Unknown Bot", status: t.hero.statusReviewing, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                    { name: "Bard", status: t.hero.statusLimited, color: "text-neon-purple", bg: "bg-purple-500/10", border: "border-purple-500/20" }
                  ].map((ai, index) => (
                    <div key={index} className={`flex items-center justify-between bg-dark-bg/50 rounded-lg p-3 border border-slate-700`}>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-neon-lime animate-pulse"></div>
                        <span className="text-white text-sm font-medium">{ai.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${ai.bg} ${ai.color} ${ai.border} border`}>
                        {ai.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path d="M0,0V120H1200V0C1200,0 600,60 0,0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default TranslatedHero;
