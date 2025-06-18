
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    interest: "pricing"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para proteger
            <span className="block text-blue-400">tu contenido digital?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Contacta con nuestro equipo para una consulta personalizada y descubre 
            cómo AI SHIELD puede proteger tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-4" />
                  <span className="text-slate-300">hola@aishield.es</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-4" />
                  <span className="text-slate-300">+34 900 123 456</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                  <span className="text-slate-300">Madrid, España</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-4">Respuesta Garantizada</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Consulta gratuita en 24h</li>
                <li>• Demo personalizada disponible</li>
                <li>• Soporte técnico especializado</li>
                <li>• Onboarding guiado incluido</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Empresa</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Interés Principal</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="pricing">Información de Precios</option>
                  <option value="demo">Solicitar Demo</option>
                  <option value="enterprise">Solución Enterprise</option>
                  <option value="integration">Consulta de Integración</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                />
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                Enviar Consulta
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
