
import { ArrowRight, Shield, Brain, Lock, Activity, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Floating AI icons */}
      <div className="absolute top-20 left-10 animate-bounce delay-100">
        <Brain className="h-8 w-8 text-blue-400/30" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-300">
        <Shield className="h-6 w-6 text-amber-400/30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce delay-500">
        <Lock className="h-7 w-7 text-teal-400/30" />
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left column - Text content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <Shield className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm font-medium">Protección IA Empresarial</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in delay-100">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                People has rights,
              </span>
              <br />
              <span className="text-white">AI follow rules.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 mb-8 animate-fade-in delay-200">
              Limita el uso que hace la IA de tu web aplicando tus normas y condiciones.
              <span className="block mt-2 text-base text-slate-400">
                Protege, controla y monetiza tu contenido digital frente a IAs fraudulentas.
              </span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in delay-300">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                Empezar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg rounded-xl transition-all duration-300">
                Ver Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in delay-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-2">2min</div>
                <div className="text-slate-400 text-sm">Instalación</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">0</div>
                <div className="text-slate-400 text-sm">Plugins necesarios</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400 mb-2">30</div>
                <div className="text-slate-400 text-sm">Días garantía</div>
              </div>
            </div>
          </div>
          
          {/* Right column - Light Dashboard mockup */}
          <div className="animate-fade-in delay-500">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl border border-slate-200 overflow-hidden shadow-2xl">
              {/* Dashboard header */}
              <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-b border-slate-200">
                <div className="flex items-center space-x-4">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-900 font-medium">Control de IAs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-green-600 text-xs">Activo</span>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="p-6 space-y-4 bg-white">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100">
                    <Activity className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-slate-900 font-bold text-lg">147</div>
                    <div className="text-blue-600 text-xs">IAs Detectadas</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center border border-red-100">
                    <AlertTriangle className="h-5 w-5 text-red-600 mx-auto mb-1" />
                    <div className="text-slate-900 font-bold text-lg">23</div>
                    <div className="text-red-600 text-xs">Bloqueadas</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center border border-green-100">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <div className="text-slate-900 font-bold text-lg">124</div>
                    <div className="text-green-600 text-xs">Permitidas</div>
                  </div>
                </div>
                
                {/* AI Activity List */}
                <div className="space-y-3">
                  {[
                    { name: "GPT-4", status: "Bloqueada", color: "text-red-600", bg: "bg-red-50", border: "border-red-200" },
                    { name: "Claude AI", status: "Permitida", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" },
                    { name: "Unknown Bot", status: "Revisando", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
                    { name: "Bard", status: "Limitada", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" }
                  ].map((ai, index) => (
                    <div key={index} className={`flex items-center justify-between bg-slate-50 rounded-lg p-3 border border-slate-200`}>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-slate-900 text-sm font-medium">{ai.name}</span>
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

export default Hero;
