
import { Check, X, Zap } from "lucide-react";

const CompetitiveComparison = () => {
  const comparisons = [
    {
      feature: "Instalación",
      traditional: "Lenta, técnica, APIs + SDKs",
      aiShield: "Solo un snippet. Sin configuración ni servidor extra.",
      icon: "🔧"
    },
    {
      feature: "Detección de bots sin JS",
      traditional: "Limitada",
      aiShield: "Honeypot HTML + noscript",
      icon: "🧲"
    },
    {
      feature: "Cumplimiento GDPR / cookies",
      traditional: "Cookies técnicas sí o sí",
      aiShield: "100% sin cookies, sin fingerprinting",
      icon: "✅"
    },
    {
      feature: "Personalización por IA",
      traditional: "Poca (nivel IP/User-Agent)",
      aiShield: "Control por modelo (ChatGPT, Claude, Bard, etc.)",
      icon: "🎛️"
    },
    {
      feature: "Coste",
      traditional: "Alto fijo mensual",
      aiShield: "Freemium + pago solo por detecciones sospechosas",
      icon: "💰"
    },
    {
      feature: "Escalabilidad a APIs / endpoints",
      traditional: "Sólo web / CDN",
      aiShield: "Protección también en APIs y microservicios",
      icon: "🌐"
    },
    {
      feature: "UX y rendimiento",
      traditional: "Afecta tiempos de carga",
      aiShield: "Invisible. Activación condicional solo ante anomalías",
      icon: "⚡"
    },
    {
      feature: "Licenciamiento de contenido para IA",
      traditional: "No ofrecen",
      aiShield: "Monetiza el acceso: da licencias en vez de bloquear",
      icon: "💼"
    },
    {
      feature: "Soporte técnico",
      traditional: "Lento y corporativo",
      aiShield: "Onboarding guiado + equipo humano dedicado",
      icon: "🚀"
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Zap className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">Estrategia Océano Azul</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🧬 Diferencias clave
            <span className="block text-blue-400">frente a la competencia</span>
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="bg-slate-800/50 p-6 border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">Característica Crítica</h3>
              </div>
              <div className="bg-red-900/20 p-6 border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="text-xl font-bold text-red-300 mb-2">DataDome & WAFs tradicionales</h3>
              </div>
              <div className="bg-blue-900/30 p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-2">AI SHIELD</h3>
              </div>
            </div>
            
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
                <div className="p-6 border-b md:border-b-0 md:border-r border-white/10">
                  <div className="font-semibold text-white">{item.feature}</div>
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-r border-white/10">
                  <div className="flex items-center text-red-200">
                    <X className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                    <span className="text-sm">{item.traditional}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-blue-200">
                    <span className="mr-2">{item.icon}</span>
                    <span className="text-sm">{item.aiShield}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveComparison;
