
import { CheckCircle, Cpu, FileText, Bot, BarChart3, Shield, Feather, Settings } from "lucide-react";

const EnhancedBenefits = () => {
  const problems = [
    {
      icon: Cpu,
      problem: "Bots consumen tu CPU y ancho de banda",
      solution: "Activa solo en tráfico IA. No impacta al servidor ni a tus visitantes reales.",
      emoji: "💡"
    },
    {
      icon: FileText,
      problem: "Te copian contenidos para entrenar IAs",
      solution: "Redirige a página de licenciamiento automático. Protege tu propiedad intelectual.",
      emoji: "🚫"
    },
    {
      icon: Bot,
      problem: "Llenan formularios, boicotean productos",
      solution: "Detecta automatismos sospechosos. Bloquea uso fraudulento de cupones, carritos y campañas.",
      emoji: "🛡️"
    },
    {
      icon: BarChart3,
      problem: "Distorsionan tus métricas de tráfico y reputación",
      solution: "Panel real‑time que diferencia humano vs IA. Alertas vía email o Slack.",
      emoji: "📊"
    },
    {
      icon: Shield,
      problem: "Usan bots sin JS o evaden detección",
      solution: "Honeypots HTML y detección sin JS con <noscript>. Caza incluso crawlers invisibles.",
      emoji: "👁️"
    },
    {
      icon: Feather,
      problem: "Integrar soluciones como DataDome es caro y complejo",
      solution: "10 líneas de código, sin SDK, sin cookies. Plug & play en cualquier web o CMS.",
      emoji: "🪶"
    },
    {
      icon: Settings,
      problem: "Quieres controlar qué IA puede acceder",
      solution: "Listas blancas por IA, IP o User-Agent. También puedes monetizar el acceso a ciertos modelos.",
      emoji: "🎛️"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-8">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-green-700 text-sm font-medium">Beneficios desde el primer segundo</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">🧩 Problema Resuelto</span>
            <span className="block mt-2">🧠 Lo que iAlert te permite</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {problems.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.problem}</h3>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <p className="text-slate-700 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedBenefits;
