
import { Server, ShieldCheck, FileText, Users } from "lucide-react";

const ImmediateBenefits = () => {
  const benefits = [
    {
      icon: Server,
      emoji: "💰",
      title: "Ahorra recursos",
      description: "Reduce el tráfico IA que agota CPU, RAM y ancho de banda de tus servidores.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: ShieldCheck,
      emoji: "🚫",
      title: "Evita fraudes",
      description: "Bloquea bots que abusan de formularios, descuentos o manipulan métricas.",
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      icon: FileText,
      emoji: "🔒",
      title: "Protege tu contenido",
      description: "Impide que modelos LLM copien tu web para entrenarse sin permiso.",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      icon: Users,
      emoji: "👥",
      title: "Solo humanos",
      description: "Activa filtros invisibles para garantizar que quien entra... es real.",
      color: "text-green-600",
      bg: "bg-green-50"
    }
  ];

  return (
    <section id="immediate-benefits" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            🧩 ¿Qué gana tu negocio
            <span className="block text-blue-600">con IA SHIELD?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Beneficios inmediatos desde el primer día de implementación
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`${benefit.bg} rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-opacity-20`}>
              <div className="text-4xl mb-4">{benefit.emoji}</div>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${benefit.bg} border border-opacity-30`}>
                <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
              <p className="text-slate-700 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImmediateBenefits;
