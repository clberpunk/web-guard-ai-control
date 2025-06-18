
import { Check, Star, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Individual",
      price: "799",
      period: "año",
      icon: Zap,
      iconColor: "text-blue-500",
      bgGradient: "from-blue-50 to-white",
      borderColor: "border-blue-200",
      features: [
        "1 dominio protegido",
        "Páginas ilimitadas",
        "5 usuarios panel de control",
        "100.000 análisis al mes",
        "Tickets de soporte 72h",
        "Alertas por correo"
      ]
    },
    {
      name: "PYME",
      price: "3.999",
      period: "año",
      icon: Star,
      iconColor: "text-amber-500",
      bgGradient: "from-amber-50 to-white",
      borderColor: "border-amber-200",
      popular: true,
      features: [
        "5 dominios protegidos",
        "15 usuarios panel",
        "1.000.000 análisis al mes",
        "Consultoría post instalación 1h",
        "Tickets prioritarios 24h",
        "Alertas telefónicas"
      ]
    },
    {
      name: "Paranoid",
      price: "11.999",
      period: "año",
      icon: Crown,
      iconColor: "text-purple-500",
      bgGradient: "from-purple-50 to-white",
      borderColor: "border-purple-200",
      features: [
        "Servidor tier 2 en España",
        "Cloud propia para análisis",
        "Protección backend completa",
        "Machine learning + IA",
        "Contactos avanzados con IAs",
        "Instalación por nuestro equipo"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Elige tu nivel de
            <span className="block text-blue-600">protección</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Planes diseñados para cada tipo de negocio, desde emprendedores hasta empresas paranoides de la seguridad.
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            🎉 30 días de garantía de devolución
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.borderColor} bg-gradient-to-br ${plan.bgGradient}`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-center py-2 text-sm font-semibold">
                  ⭐ Más Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-4 ${plan.iconColor}`}>
                  <plan.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}€</span>
                  <span className="text-slate-600">/{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full py-3 font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}>
                  {plan.popular ? 'Empezar Ahora' : 'Seleccionar Plan'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">¿Necesitas algo personalizado?</p>
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
            Contactar Ventas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
