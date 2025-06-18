
import { Newspaper, GraduationCap, Palette, Code, Flask, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const IndustrySectors = () => {
  const sectors = [
    {
      icon: Newspaper,
      title: "Medios y Comunicación",
      description: "Protección especializada para contenido editorial",
      color: "text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Educación",
      description: "Soluciones para universidades y material didáctico",
      color: "text-teal-600"
    },
    {
      icon: Palette,
      title: "Arte y Diseño",
      description: "Herramientas para creaciones artísticas únicas",
      color: "text-amber-600"
    },
    {
      icon: Code,
      title: "Industria Tecnológica",
      description: "Protección de código y documentación técnica",
      color: "text-blue-600"
    },
    {
      icon: Flask,
      title: "Farmacéutica y Biotech",
      description: "Salvaguarda de investigación médica",
      color: "text-teal-600"
    },
    {
      icon: Building,
      title: "Sector Público",
      description: "Protección institucional para gobiernos y ONGs",
      color: "text-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Adaptabilidad a
            <span className="block text-blue-600">Sectores Clave</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nuestras herramientas están diseñadas para satisfacer las necesidades específicas 
            de cada sector, con opciones de personalización y soporte dedicado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-6 ${sector.color}`}>
                  <sector.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{sector.title}</h3>
                <p className="text-slate-600 leading-relaxed">{sector.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySectors;
