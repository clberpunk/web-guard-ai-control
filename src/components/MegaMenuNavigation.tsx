
import { useState, useEffect } from "react";
import { Shield, ChevronDown } from "lucide-react";
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
    { id: "hero", label: "Inicio", description: "Presentación del producto" },
    { id: "features", label: "Características", description: "Funcionalidades principales" },
    { id: "what-we-do", label: "Qué Hacemos", description: "Detección y bloqueo" },
    { id: "how-it-works", label: "Cómo Funciona", description: "Proceso en 3 pasos" },
    { id: "immediate-benefits", label: "Beneficios", description: "Ventajas inmediatas" },
    { id: "dashboard", label: "Dashboard", description: "Panel de control" },
    { id: "pricing", label: "Precios", description: "Planes y tarifas" }
  ];

  const useCasesItems = [
    { id: "industry-sectors", label: "Sectores", description: "Industrias compatibles" },
    { id: "testimonials", label: "Testimonios", description: "Casos de éxito" },
    { id: "comparison", label: "Comparativa", description: "Vs competencia" },
    { id: "enhanced-benefits", label: "Casos de Uso", description: "Problemas resueltos" },
    { id: "security-privacy", label: "Seguridad", description: "Privacidad y compliance" }
  ];

  const corporateItems = [
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

  const MenuSection = ({ title, items }: { title: string; items: typeof productItems }) => (
    <div className="w-80 p-6">
      <h3 className="font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <NavigationMenuLink
            key={item.id}
            className={`block p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer ${
              activeSection === item.id ? "bg-blue-50 border-l-4 border-blue-500" : ""
            }`}
            onClick={() => scrollToSection(item.id)}
          >
            <div className="font-medium text-slate-900">{item.label}</div>
            <div className="text-sm text-slate-600">{item.description}</div>
          </NavigationMenuLink>
        ))}
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <span className="text-xl font-bold text-slate-900">AI SHIELD</span>
          </div>
          
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600">
                  Producto
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MenuSection title="Producto" items={productItems} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600">
                  Casos de Uso
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MenuSection title="Casos de Uso" items={useCasesItems} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600">
                  Empresa
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MenuSection title="Empresa" items={corporateItems} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Prueba Gratuita
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MegaMenuNavigation;
