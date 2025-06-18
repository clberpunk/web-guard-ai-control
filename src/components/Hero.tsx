
import { ArrowRight, Shield, Brain, Lock } from "lucide-react";
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Shield className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">Protección IA Empresarial</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in delay-100">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Human has rights.
            </span>
            <br />
            <span className="text-white">AI rules.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto animate-fade-in delay-200">
            Limita el uso que hace la IA de tu web aplicando tus normas y condiciones.
            <span className="block mt-2 text-lg text-slate-400">
              Protege, controla y monetiza tu contenido digital frente a IAs fraudulentas.
            </span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-300">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
              Empezar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg rounded-xl transition-all duration-300">
              Ver Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in delay-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">2min</div>
              <div className="text-slate-400 text-sm">Instalación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
              <div className="text-slate-400 text-sm">Plugins necesarios</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">30</div>
              <div className="text-slate-400 text-sm">Días garantía</div>
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
