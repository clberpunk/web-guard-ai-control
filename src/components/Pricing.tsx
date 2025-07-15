
import { Check, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "siempre",
      icon: Star,
      iconColor: "text-neon-lime",
      bgGradient: "from-neon-lime/10 to-dark-surface",
      borderColor: "neon-border",
      features: [
        "Detección básica de IAs",
        "Reportes semanales",
        "1 dominio protegido",
        "Hasta 10,000 análisis/mes",
        "Soporte por email",
        "Panel de control básico"
      ]
    },
    {
      name: "Pro",
      price: "119",
      period: "año",
      icon: Crown,
      iconColor: "text-neon-cyan",
      bgGradient: "from-neon-cyan/10 to-dark-surface",
      borderColor: "border border-cyan-400/20",
      popular: true,
      features: [
        "Detección avanzada de IAs",
        "Bloqueo y disuasión activa",
        "Dominios ilimitados",
        "Análisis ilimitados",
        "Reportes en tiempo real",
        "Alertas personalizadas",
        "Reglas de control granular",
        "Soporte prioritario 24h",
        "API completa",
        "Integración con webhooks"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Elige tu nivel de
            <span className="block bg-gradient-to-r from-neon-lime to-neon-cyan bg-clip-text text-transparent">
              protección
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Dos planes simples: empieza gratis para detectar IAs, o pasa a Pro para bloquear y controlar completamente.
          </p>
          <div className="inline-flex items-center bg-neon-lime/10 text-neon-lime-dark px-4 py-2 rounded-full font-medium neon-border">
            🎉 30 días de garantía de devolución
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.borderColor} bg-gradient-to-br ${plan.bgGradient}`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-neon-cyan to-neon-lime text-dark-bg text-center py-2 text-sm font-semibold">
                  ⭐ Más Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dark-surface shadow-lg mb-4 ${plan.iconColor} neon-glow`}>
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
                      <Check className="h-5 w-5 text-neon-lime mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full py-3 font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-neon-cyan hover:bg-cyan-400 text-dark-bg neon-glow' 
                    : 'bg-neon-lime hover:bg-lime-400 text-dark-bg neon-glow'
                }`}>
                  {plan.popular ? 'Empezar Ahora' : 'Comenzar Gratis'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">¿Necesitas algo personalizado para tu empresa?</p>
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
            Contactar Ventas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
