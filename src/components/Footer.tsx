
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-400 mr-3" />
              <span className="text-2xl font-bold">AI Control</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              La primera plataforma de protección y control de contenido digital 
              frente a inteligencias artificiales. Protege tu negocio con tecnología avanzada.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">tw</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">li</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">gh</span>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentación</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Integraciones</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Estado del Servicio</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Seguridad</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>
        
        {/* Contact info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-400 mr-3" />
              <span className="text-slate-300">hola@aicontrol.es</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-blue-400 mr-3" />
              <span className="text-slate-300">+34 900 123 456</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-blue-400 mr-3" />
              <span className="text-slate-300">Madrid, España</span>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 AI Control. Todos los derechos reservados.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0">
            Hecho con ❤️ para proteger el futuro digital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
