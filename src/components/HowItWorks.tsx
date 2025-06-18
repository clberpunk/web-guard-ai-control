import { Copy, Settings, Shield, BarChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Copy,
      title: "Copia y Pega",
      description: "Copia nuestro código de seguimiento en las páginas que quieras proteger. 2 minutos de instalación.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Settings,
      title: "Configura Reglas",
      description: "Accede a tu panel de control y establece qué IAs pueden acceder y bajo qué condiciones.",
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: Shield,
      title: "Protección Activa",
      description: "Bloquea, permite o limita el acceso según tus reglas. Controla el uso de tu contenido.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: BarChart,
      title: "Análisis y Reportes",
      description: "Recibe informes detallados y alertas sobre toda la actividad de IAs en tu sitio web.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como funciona
            <span className="block text-blue-400">en 4 pasos simples</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Sin cambiar tu infraestructura, sin plugins, sin dramas. 
            Protección completa en minutos.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step number */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110`}>
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">{step.description}</p>
                
                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Code example */}
          <div className="mt-16 bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Copy className="h-5 w-5 mr-2 text-blue-400" />
              Ejemplo de código (solo copia y pega)
            </h3>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <code className="text-green-400">
                {`<!-- Pega este código antes del </body> -->`}
                <br />
                <span className="text-blue-400">{`<script`}</span>
                <span className="text-white"> src=</span>
                <span className="text-amber-400">"https://protect.aicontrol.es/track.js"</span>
                <br />
                <span className="text-white">        data-domain=</span>
                <span className="text-amber-400">"tudominio.com"</span>
                <span className="text-blue-400">{`></script>`}</span>
                <br />
                <span className="text-slate-500">{`<!-- ¡Ya está! 5KB que protegen todo tu sitio -->`}</span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
