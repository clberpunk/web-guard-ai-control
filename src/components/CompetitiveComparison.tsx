import { CheckCircle, XCircle, Rocket } from "lucide-react";

const CompetitiveComparison = () => {
  const features = [
    {
      name: "Detección de bots sin JS",
      aiShield: <CheckCircle className="text-green-500" />,
      alternative: <XCircle className="text-red-500" />
    },
    {
      name: "Licenciamiento granular por IA",
      aiShield: <CheckCircle className="text-green-500" />,
      alternative: <XCircle className="text-red-500" />
    },
    {
      name: "Integración en 2 minutos",
      aiShield: <CheckCircle className="text-green-500" />,
      alternative: <XCircle className="text-red-500" />
    },
    {
      name: "Alertas proactivas",
      aiShield: <CheckCircle className="text-green-500" />,
      alternative: <XCircle className="text-red-500" />
    },
    {
      name: "Planes pay-per-use",
      aiShield: <CheckCircle className="text-green-500" />,
      alternative: <XCircle className="text-red-500" />
    },
    {
      name: "Soporte prioritario",
      aiShield: <CheckCircle className="text-green-500" />,
      alternative: <XCircle className="text-red-500" />
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            IA Shield
            <span className="block text-blue-600">vs. Alternativas</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compara nuestras características con las de la competencia y descubre 
            por qué somos la mejor opción para proteger tu contenido.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-slate-200 rounded-2xl shadow-xl">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200">
                  Característica
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200">
                  IA Shield
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200">
                  Alternativa Típica
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 border-b border-slate-200">{feature.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-500 border-b border-slate-200">{feature.aiShield}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-500 border-b border-slate-200">{feature.alternative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center">
          <Rocket className="h-8 w-8 text-blue-600 mx-auto mb-4 animate-bounce" />
          <p className="text-xl text-slate-600">
            ¡Únete a la revolución de la protección IA!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveComparison;
