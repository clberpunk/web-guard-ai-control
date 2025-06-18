
import { Shield, Zap, BarChart3, Bell, Code, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Instalación Inmediata",
      description: "Click, paste y listo. Sin software ni plugins adicionales en cualquier entorno web.",
      color: "text-amber-400"
    },
    {
      icon: Shield,
      title: "Control Total de IAs",
      description: "Bloquea o permite las IAs que quieras desde tu panel de control. Genera informes completos.",
      color: "text-blue-400"
    },
    {
      icon: BarChart3,
      title: "Análisis Avanzado",
      description: "Detecta visitas artificiales y decide cómo se comportan en tu sitio. Optimiza tu SEO para IAs.",
      color: "text-teal-400"
    },
    {
      icon: Bell,
      title: "Alertas de Seguridad",
      description: "Recibe notificaciones por anomalías y actividad sospechosa en tiempo real.",
      color: "text-amber-400"
    },
    {
      icon: Code,
      title: "Sin Impacto Técnico",
      description: "No afecta a SEO, SEM, analytics ni experiencia de usuario. Solo 5KB de código.",
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: "Gestión Colaborativa",
      description: "Múltiples usuarios en el panel de control con diferentes niveles de acceso.",
      color: "text-teal-400"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Protege tu contenido digital
            <span className="block text-blue-600">sin complicaciones</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Todas las IAs no están para ayudar. Cuando visitan tu web, analizan tu negocio, 
            copian tus productos y utilizan tus contenidos sin consentimiento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-6 ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
