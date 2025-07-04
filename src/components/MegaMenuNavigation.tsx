import { useState, useEffect } from "react";
import { Shield, ChevronDown, Rocket, Users, Building2 } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const MegaMenuNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const productItems = [
    { id: "features", label: "Características", description: "Funcionalidades principales" },
    { id: "how-it-works", label: "Cómo Funciona", description: "Proceso en 3 pasos" },
    { id: "immediate-benefits", label: "Beneficios", description: "Ventajas inmediatas" },
    { id: "dashboard", label: "Dashboard", description: "Panel de control" }
  ];

  const useCasesItems = [
    { id: "what-we-do", label: "Qué Hacemos", description: "Detección y bloqueo" },
    { id: "industry-sectors", label: "Sectores", description: "Industrias compatibles" },
    { id: "testimonials", label: "Testimonios", description: "Casos de éxito" },
    { id: "comparison", label: "Comparativa", description: "Vs competencia" },
    { id: "enhanced-benefits", label: "Casos de Uso", description: "Problemas resueltos" }
  ];

  const corporateItems = [
    { id: "pricing", label: "Precios", description: "Planes y tarifas" },
    { id: "security-privacy", label: "Seguridad", description: "Privacidad y compliance" },
    { id: "contact", label: "Contacto", description: "Ponte en contacto" },
    { id: "technical-docs", label: "Documentación", description: "Guías técnicas" },
    { id: "stats", label: "Impacto Global", description: "Estadísticas de uso" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const allItems = [...productItems, ...useCasesItems, ...corporateItems];
      const sections = allItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(allItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFreeTrial = () => {
    window.open('https://ialert.ciberpunk.es/auth/login', '_blank');
  };

  const handleStartNow = () => {
    window.open('https://ialert.ciberpunk.es/auth/login', '_blank');
  };

  const MenuSection = ({ 
    title, 
    items, 
    highlightSection 
  }: { 
    title: string; 
    items: typeof productItems;
    highlightSection: { icon: any; title: string; description: string; color: string; bg: string; }
  }) => (
    <div className="w-[900px] p-8">
      <div className="grid grid-cols-3 gap-8">
        {/* Primera columna - Navegación principal */}
        <div>
          <h3 className="font-bold text-slate-900 mb-6 text-lg">{title}</h3>
          <div className="space-y-2">
            {items.map((item) => (
              <NavigationMenuLink
                key={item.id}
                className={`block p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer ${
                  activeSection === item.id ? "bg-blue-50 border-l-2 border-blue-500" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <div className="font-medium text-slate-900 mb-1">{item.label}</div>
                <div className="text-sm text-slate-600">{item.description}</div>
              </NavigationMenuLink>
            ))}
          </div>
        </div>

        {/* Segunda columna - Enlaces útiles */}
        <div>
          <h3 className="font-bold text-slate-900 mb-6 text-lg">Enlaces Útiles</h3>
          <div className="space-y-4">
            <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">
              Documentación API
            </a>
            <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">
              Guías de integración
            </a>
            <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">
              Centro de ayuda
            </a>
            <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">
              Blog técnico
            </a>
            <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">
              Estado del servicio
            </a>
            <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">
              Comunidad
            </a>
          </div>
        </div>

        {/* Tercera columna - Destacado */}
        <div className={`${highlightSection.bg} rounded-xl p-6 border border-opacity-20`}>
          <div className={`inline-flex items-center justify-center w-12 h-12 ${highlightSection.bg} rounded-lg mb-4 border border-opacity-30`}>
            <highlightSection.icon className={`h-6 w-6 ${highlightSection.color}`} />
          </div>
          <h4 className="font-bold text-slate-900 mb-3 text-lg">{highlightSection.title}</h4>
          <p className="text-sm text-slate-700 mb-4 leading-relaxed">{highlightSection.description}</p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full"
            onClick={handleStartNow}
          >
            Empezar Ahora
          </button>
        </div>
      </div>

      {/* Footer del menú */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-500">
            ¿Necesitas ayuda? Contacta con nuestro equipo de soporte
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600">Términos</a>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600">Privacidad</a>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600">Estado</a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => scrollToSection("hero")}
          >
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <span className="text-xl font-bold text-slate-900">iAlert</span>
          </div>
          
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600">
                  Producto
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
                  <MenuSection 
                    title="Producto" 
                    items={productItems} 
                    highlightSection={{
                      icon: Rocket,
                      title: "Integración Rápida",
                      description: "Instala iAlert en menos de 2 minutos con nuestro snippet HTML y empieza a proteger tu sitio web al instante.",
                      color: "text-blue-600",
                      bg: "bg-blue-50"
                    }}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600">
                  Casos de Uso
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
                  <MenuSection 
                    title="Casos de Uso" 
                    items={useCasesItems} 
                    highlightSection={{
                      icon: Users,
                      title: "Casos de Éxito",
                      description: "Descubre cómo empresas como la tuya protegen su contenido y mejoran su ROI con iAlert.",
                      color: "text-teal-600",
                      bg: "bg-teal-50"
                    }}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600">
                  Empresa
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
                  <MenuSection 
                    title="Empresa" 
                    items={corporateItems} 
                    highlightSection={{
                      icon: Building2,
                      title: "Soporte Enterprise",
                      description: "Soluciones personalizadas para grandes organizaciones con soporte 24/7 y SLA garantizado.",
                      color: "text-amber-600",
                      bg: "bg-amber-50"
                    }}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            onClick={handleFreeTrial}
          >
            Prueba Gratuita
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MegaMenuNavigation;
