
import { Download, Search, Shield } from "lucide-react";

const SimplifiedHowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Instalación",
      description: "Agrega un snippet HTML único a tu web. 🚀",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Search,
      title: "Detección",
      description: "IA SHIELD detecta bots con JS, bots sin JS y distingue IA amigas.",
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: Shield,
      title: "Defensa",
      description: "Bloquea, desafía o licencia en tiempo real según tus reglas.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-blue-400">Así de</span>
            <span className="block text-white">Sencillo</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tres pasos simples para proteger tu web completamente
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${step.bgColor} rounded-3xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110`}>
                    <step.icon className={`h-10 w-10 ${step.color}`} />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedHowItWorks;
