
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";
import { ArrowRight, Shield, Brain, Lock, Activity, AlertTriangle, CheckCircle, Zap, Eye, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const TranslatedHero = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const handleFreeTrial = () => {
    window.open('https://ialert.ciberpunk.es/auth/login', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark-bg via-slate-900 to-dark-surface relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(132,255,149,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(132,255,149,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Floating neon elements */}
      <div className="absolute top-20 left-10 animate-float delay-100">
        <div className="relative">
          <Brain className="h-10 w-10 text-neon-lime animate-pulse-neon" />
          <div className="absolute inset-0 h-10 w-10 bg-neon-lime/20 rounded-full blur-xl"></div>
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float delay-300">
        <div className="relative">
          <Shield className="h-8 w-8 text-neon-cyan animate-pulse-neon" />
          <div className="absolute inset-0 h-8 w-8 bg-neon-cyan/20 rounded-full blur-xl"></div>
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float delay-500">
        <div className="relative">
          <Lock className="h-9 w-9 text-neon-purple animate-pulse-neon" />
          <div className="absolute inset-0 h-9 w-9 bg-neon-purple/20 rounded-full blur-xl"></div>
        </div>
      </div>
      <div className="absolute top-1/2 right-10 animate-float delay-700">
        <div className="relative">
          <Zap className="h-7 w-7 text-neon-pink animate-pulse-neon" />
          <div className="absolute inset-0 h-7 w-7 bg-neon-pink/20 rounded-full blur-xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left column - Text content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-neon-lime/10 border border-neon-lime/30 rounded-full px-4 py-2 mb-8 animate-fade-in neon-border">
              <Shield className="h-4 w-4 text-neon-lime mr-2" />
              <span className="text-neon-lime text-sm font-medium">{t.hero.badge || "Protección IA Empresarial"}</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in delay-100">
              <span className="bg-gradient-to-r from-neon-lime via-neon-cyan to-neon-lime bg-clip-text text-transparent neon-text">
                {t.hero.title}
              </span>
              <br />
              <span className="text-white">{t.hero.subtitle}</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 mb-8 animate-fade-in delay-200">
              {t.hero.description}
              <span className="block mt-2 text-base text-slate-400">
                {t.hero.subdescription || "Protege, controla y monetiza tu contenido digital frente a IAs fraudulentas."}
              </span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in delay-300">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-lime to-neon-cyan hover:from-neon-lime-dark hover:to-neon-cyan text-dark-bg px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 neon-glow font-bold"
                onClick={handleFreeTrial}
              >
                {t.hero.startNow}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-neon-lime/50 text-neon-lime hover:bg-neon-lime/10 hover:border-neon-lime px-8 py-4 text-lg rounded-xl transition-all duration-300 neon-border"
                onClick={handleFreeTrial}
              >
                {t.hero.freeTrial}
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in delay-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-lime mb-2 neon-text">2min</div>
                <div className="text-slate-400 text-sm">{t.hero.installation || "Instalación"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-cyan mb-2 neon-text">0</div>
                <div className="text-slate-400 text-sm">{t.hero.plugins || "Plugins necesarios"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-purple mb-2 neon-text">30</div>
                <div className="text-slate-400 text-sm">{t.hero.guarantee || "Días garantía"}</div>
              </div>
            </div>
          </div>
          
          {/* Right column - Futuristic Dashboard mockup */}
          <div className="animate-fade-in delay-500">
            <div className="bg-dark-surface/95 backdrop-blur-lg rounded-2xl border border-neon-lime/30 overflow-hidden shadow-2xl neon-border">
              {/* Dashboard header */}
              <div className="bg-gradient-to-r from-dark-bg to-dark-surface px-6 py-4 flex items-center justify-between border-b border-neon-lime/20">
                <div className="flex items-center space-x-4">
                  <Shield className="h-5 w-5 text-neon-lime" />
                  <span className="text-white font-medium">{t.hero.dashboardTitle || "Control de IAs"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-neon-lime animate-pulse-neon"></div>
                  <span className="text-neon-lime text-xs">{t.hero.active || "Activo"}</span>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="p-6 space-y-4 bg-dark-surface">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-neon-lime/10 rounded-lg p-3 text-center border border-neon-lime/30 neon-border">
                    <Activity className="h-5 w-5 text-neon-lime mx-auto mb-1" />
                    <div className="text-white font-bold text-lg">147</div>
                    <div className="text-neon-lime text-xs">{t.hero.detected || "IAs Detectadas"}</div>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-3 text-center border border-red-500/30">
                    <AlertTriangle className="h-5 w-5 text-red-400 mx-auto mb-1" />
                    <div className="text-white font-bold text-lg">23</div>
                    <div className="text-red-400 text-xs">{t.hero.blocked || "Bloqueadas"}</div>
                  </div>
                  <div className="bg-neon-cyan/10 rounded-lg p-3 text-center border border-neon-cyan/30">
                    <CheckCircle className="h-5 w-5 text-neon-cyan mx-auto mb-1" />
                    <div className="text-white font-bold text-lg">124</div>
                    <div className="text-neon-cyan text-xs">{t.hero.allowed || "Permitidas"}</div>
                  </div>
                </div>
                
                {/* AI Activity List */}
                <div className="space-y-3">
                  {[
                    { name: "GPT-4", status: t.hero.statusBlocked || "Bloqueada", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/30" },
                    { name: "Claude AI", status: t.hero.statusAllowed || "Permitida", color: "text-neon-cyan", bg: "bg-neon-cyan/10", border: "border-neon-cyan/30" },
                    { name: "Unknown Bot", status: t.hero.statusReviewing || "Revisando", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
                    { name: "Bard", status: t.hero.statusLimited || "Limitada", color: "text-neon-purple", bg: "bg-neon-purple/10", border: "border-neon-purple/30" }
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
      
      {/* Bottom wave with neon effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path d="M0,0V120H1200V0C1200,0 600,60 0,0Z" fill="white"/>
          <path d="M0,0V120H1200V0C1200,0 600,60 0,0Z" fill="url(#neonGradient)" fillOpacity="0.1"/>
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--neon-lime))" />
              <stop offset="50%" stopColor="hsl(var(--neon-cyan))" />
              <stop offset="100%" stopColor="hsl(var(--neon-lime))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default TranslatedHero;
