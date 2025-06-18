
import { CheckCircle, X, ArrowRight } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      category: "SEO & Performance",
      items: [
        { text: "No afecta a SEO, SEM o AIO", included: true },
        { text: "No afecta a analytics", included: true },
        { text: "Solo 5KB de código", included: true },
        { text: "No cookies necesarias", included: true }
      ]
    },
    {
      category: "Seguridad & Compliance",
      items: [
        { text: "No afecta política de privacidad", included: true },
        { text: "No interfiere con firewalls", included: true },
        { text: "Enterprise compliance", included: true },
        { text: "No almacena datos de humanos", included: true }
      ]
    },
    {
      category: "Técnico & Mantenimiento",
      items: [
        { text: "Sin plugins que desactualizar", included: true },
        { text: "Sin cambios de proveedor", included: true },
        { text: "Sin costes ocultos", included: true },
        { text: "Sin mantenimiento de software", included: true }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Sin impacto negativo
            <span className="block text-blue-600">en tu infraestructura</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nuestra solución está diseñada para integrarse perfectamente sin afectar 
            el rendimiento, SEO o experiencia de usuario existente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                {category.category}
              </h3>
              
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    {item.included ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    )}
                    <span className="text-slate-700 leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Listo para proteger tu contenido?
            </h3>
            <p className="text-slate-600 mb-6">
              Únete a cientos de empresas que ya protegen su contenido digital con nuestra plataforma.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
              Empezar Prueba Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
