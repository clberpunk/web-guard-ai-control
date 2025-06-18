
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marta Alonso",
      role: "Directora de Marketing Digital",
      company: "TechFlow Solutions",
      case: "Trademark Impersonation and Reputational Damage",
      image: "/placeholder.svg",
      testimonial: "Detectamos que varias IAs estaban usando nuestra marca registrada para generar contenido competidor. AI SHIELD nos alertó inmediatamente y pudimos bloquear estos usos no autorizados, protegiendo nuestra reputación online.",
      rating: 5,
      results: "95% reducción en uso no autorizado de marca"
    },
    {
      name: "Juan Antonio Méndez",
      role: "CTO",
      company: "InnovaManufacturing",
      case: "Protection of Industrial Processes and Patents",
      image: "/placeholder.svg",
      testimonial: "Nuestros procesos industriales patentados estaban siendo analizados por crawlers de IA. Con AI SHIELD pudimos crear una zona de licenciamiento específica que nos genera ingresos adicionales mientras protegemos nuestra propiedad intelectual.",
      rating: 5,
      results: "€50K anuales en licencias de IA"
    },
    {
      name: "Carmen Rivera",
      role: "Escritora y Guionista",
      company: "Independent Creator",
      case: "Writer, Translator, and Screenwriter: Content Protection",
      image: "/placeholder.svg",
      testimonial: "Como creadora de contenido, era crucial proteger mis obras originales. AI SHIELD me permite controlar exactamente qué IAs pueden acceder a mi trabajo y bajo qué términos, monetizando mi contenido de forma justa.",
      rating: 5,
      results: "300% aumento en ingresos por licencias"
    },
    {
      name: "Roberto Silva",
      role: "SEO Manager",
      company: "Digital Marketing Pro",
      case: "Marketing Agency: SEO Improvement",
      image: "/placeholder.svg",
      testimonial: "El tráfico de bots estaba distorsionando nuestras métricas de SEO. AI SHIELD nos permite diferenciar claramente entre tráfico humano y de IA, mejorando significativamente nuestros informes y estrategias SEO.",
      rating: 5,
      results: "40% mejora en métricas SEO reales"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Casos de éxito reales
            <span className="block text-blue-600">de nuestros clientes</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Descubre cómo empresas de diferentes sectores han protegido y monetizado 
            su contenido digital con AI SHIELD.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full bg-slate-200 mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{testimonial.name}</h3>
                  <p className="text-blue-600 font-medium">{testimonial.role}</p>
                  <p className="text-slate-600">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  {testimonial.case}
                </span>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-blue-200 mb-4" />
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.testimonial}"
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-green-800 font-semibold text-sm">Resultado:</div>
                <div className="text-green-700 font-bold">{testimonial.results}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
