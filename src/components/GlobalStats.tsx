
import { Shield, Users, Globe, Zap } from "lucide-react";

const GlobalStats = () => {
  const stats = [
    {
      icon: Globe,
      value: "2.5M+",
      label: "Sitios Web Protegidos",
      description: "Desde nuestro lanzamiento"
    },
    {
      icon: Shield,
      value: "847M",
      label: "Amenazas IA Bloqueadas",
      description: "En los últimos 30 días"
    },
    {
      icon: Users,
      value: "12,000+",
      label: "Empresas Confiando",
      description: "En nuestra plataforma"
    },
    {
      icon: Zap,
      value: "99.97%",
      label: "Uptime Garantizado",
      description: "Disponibilidad del servicio"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Protegiendo el futuro digital
            <span className="block text-blue-600">desde 2023</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Miles de empresas ya confían en nuestra tecnología para proteger 
            su contenido digital de inteligencias artificiales no autorizadas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-slate-800 mb-2">{stat.label}</div>
              <div className="text-slate-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalStats;
