
import { Shield, Lock, FileCheck, Award } from "lucide-react";

const SecurityPrivacy = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Cifrado End-to-End",
      description: "Todos tus datos se cifran con AES-256 tanto en tránsito como en reposo. Nunca almacenamos contenido sin cifrar."
    },
    {
      icon: Shield,
      title: "Privacidad por Diseño",
      description: "Seguimos principios de minimización de datos. Solo procesamos lo necesario para proteger tu contenido."
    },
    {
      icon: FileCheck,
      title: "Cumplimiento Normativo",
      description: "Cumplimos con GDPR, CCPA y otras regulaciones internacionales de protección de datos."
    }
  ];

  const certifications = [
    { icon: "🔒", name: "ISO 27001", color: "bg-blue-100 text-blue-800" },
    { icon: "🛡️", name: "SOC 2 Type II", color: "bg-teal-100 text-teal-800" },
    { icon: "🌍", name: "GDPR", color: "bg-amber-100 text-amber-800" },
    { icon: "🇺🇸", name: "CCPA", color: "bg-green-100 text-green-800" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Seguridad y
            <span className="block text-blue-600">Privacidad</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tu información y datos están protegidos con los más altos estándares 
            de seguridad y privacidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Certificaciones */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Certificaciones y Estándares
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={`${cert.color} rounded-xl p-6 text-center transition-all duration-300 hover:scale-105`}>
                <div className="text-2xl mb-2">{cert.icon}</div>
                <div className="font-semibold">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityPrivacy;
