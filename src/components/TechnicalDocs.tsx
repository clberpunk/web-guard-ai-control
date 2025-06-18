
import { Download, FileText, Code, BookOpen, ExternalLink } from "lucide-react";

const TechnicalDocs = () => {
  const documents = [
    {
      icon: FileText,
      title: "Documentación Técnica Completa",
      description: "Guía completa de implementación y configuración de AI SHIELD",
      size: "2.3 MB",
      format: "PDF",
      type: "technical"
    },
    {
      icon: Code,
      title: "Guía de Integración API",
      description: "Documentación de nuestra API REST y ejemplos de código",
      size: "1.8 MB",
      format: "PDF",
      type: "api"
    },
    {
      icon: BookOpen,
      title: "Whitepaper: Detección de IA",
      description: "Paper técnico sobre nuestros algoritmos de detección",
      size: "1.2 MB",
      format: "PDF",
      type: "research"
    },
    {
      icon: FileText,
      title: "Casos de Uso Empresariales",
      description: "Estudios de caso detallados y mejores prácticas",
      size: "3.1 MB",
      format: "PDF",
      type: "cases"
    }
  ];

  const resources = [
    {
      title: "Centro de Desarrolladores",
      description: "Documentación online, ejemplos y tutoriales",
      link: "#",
      icon: Code
    },
    {
      title: "Comunidad GitHub",
      description: "Código fuente de ejemplos y librerías oficiales",
      link: "#",
      icon: ExternalLink
    },
    {
      title: "Blog Técnico",
      description: "Artículos técnicos y actualizaciones del producto",
      link: "#",
      icon: BookOpen
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Documentación Técnica
            <span className="block text-blue-600">y Recursos</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Accede a toda la documentación técnica, whitepapers y recursos 
            necesarios para implementar AI SHIELD en tu infraestructura.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Downloads */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Descargas Disponibles</h3>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-all duration-300 border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <doc.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{doc.title}</h4>
                      <p className="text-slate-600 mb-3">{doc.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <span>{doc.format}</span>
                          <span>{doc.size}</span>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center">
                          <Download className="h-4 w-4 mr-2" />
                          Descargar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Online Resources */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Recursos Online</h3>
            <div className="space-y-4 mb-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-blue-50 rounded-2xl p-6 hover:bg-blue-100 transition-all duration-300 border border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-200 rounded-xl flex items-center justify-center">
                        <resource.icon className="h-6 w-6 text-blue-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{resource.title}</h4>
                      <p className="text-slate-600 mb-3">{resource.description}</p>
                      <a 
                        href={resource.link}
                        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                      >
                        Acceder
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Quick Start */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-4">Instalación Rápida</h4>
              <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                <code className="text-green-400">
                  {`<!-- Copia este código en tu web -->`}
                  <br />
                  <span className="text-blue-400">{`<script`}</span>
                  <span className="text-white"> src=</span>
                  <span className="text-amber-400">"https://cdn.aishield.es/v1/shield.js"</span>
                  <br />
                  <span className="text-white">        data-key=</span>
                  <span className="text-amber-400">"tu-api-key"</span>
                  <span className="text-blue-400">{`></script>`}</span>
                </code>
              </div>
              <p className="text-slate-300 text-sm">
                Solo 2 líneas de código para empezar a proteger tu sitio web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalDocs;
