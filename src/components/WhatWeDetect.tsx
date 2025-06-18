
import { AlertTriangle, Shield, Zap, CheckCircle, Code, Eye } from "lucide-react";

const WhatWeDetect = () => {
  const threats = [
    {
      icon: AlertTriangle,
      title: "Clicks fraudulentos en publicidad",
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      icon: Shield,
      title: "Abuso de promociones y descuentos",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      icon: Code,
      title: "Scrapers y scrapers sin JS",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Eye,
      title: "Falsas reseñas y registros automáticos",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Zap,
      title: "Manipulación de stocks y formularios",
      color: "text-green-600",
      bg: "bg-green-50"
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: 'Integración "copy-&-paste" en 2 minutos',
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Code,
      title: "Honeypot HTML + <noscript> para bots sin JS",
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      icon: Shield,
      title: "Licenciamiento granular por modelo de IA",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      icon: Eye,
      title: "Dashboard en tiempo real y alertas proactivas",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: CheckCircle,
      title: "Planes freemium y pay-per-use flexibles",
      color: "text-green-600",
      bg: "bg-green-50"
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - What we detect */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              ¿Qué detectamos y
              <span className="block text-red-600">bloqueamos?</span>
            </h2>
            
            <div className="space-y-4">
              {threats.map((threat, index) => (
                <div key={index} className={`${threat.bg} rounded-xl p-4 border border-opacity-20 hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 ${threat.bg} rounded-lg flex items-center justify-center border border-opacity-30`}>
                      <threat.icon className={`h-5 w-5 ${threat.color}`} />
                    </div>
                    <span className="text-slate-800 font-medium">{threat.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Why choose us */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              ¿Por qué
              <span className="block text-blue-600">elegirnos?</span>
            </h2>
            
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className={`${advantage.bg} rounded-xl p-4 border border-opacity-20 hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 ${advantage.bg} rounded-lg flex items-center justify-center border border-opacity-30`}>
                      <advantage.icon className={`h-5 w-5 ${advantage.color}`} />
                    </div>
                    <span className="text-slate-800 font-medium">{advantage.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDetect;
