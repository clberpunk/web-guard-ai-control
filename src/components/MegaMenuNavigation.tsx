import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Shield, Rocket, Users, Building2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const productItems = [
  { id: "features", label: "Características", description: "Descubre todas las funcionalidades" },
  { id: "howItWorks", label: "Cómo Funciona", description: "Proceso simple en 3 pasos" },
  { id: "benefits", label: "Beneficios", description: "Ventajas inmediatas para tu negocio" },
  { id: "dashboard", label: "Panel de Control", description: "Gestión centralizada e intuitiva" },
];

const useCasesItems = [
  { id: "whatWeDo", label: "Qué Detectamos", description: "Tipos de amenazas que identificamos" },
  { id: "sectors", label: "Sectores", description: "Industrias que pueden beneficiarse" },
  { id: "testimonials", label: "Testimonios", description: "Lo que dicen nuestros clientes" },
  { id: "comparison", label: "Comparativa", description: "iAlert vs alternativas" },
  { id: "enhancedBenefits", label: "Beneficios Avanzados", description: "Soluciones completas a problemas reales" },
];

const corporateItems = [
  { id: "pricing", label: "Precios", description: "Planes adaptados a tu negocio" },
  { id: "security", label: "Seguridad", description: "Privacidad y cumplimiento normativo" },
  { id: "contact", label: "Contacto", description: "Ponte en contacto con nosotros" },
  { id: "documentation", label: "Documentación", description: "Guías técnicas y API" },
  { id: "stats", label: "Estadísticas", description: "Números que avalan nuestra eficacia" },
];

const MegaMenuNavigation = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      const sections = [
        "hero",
        "features",
        "whatWeDetect",
        "howItWorks",
        "immediateBenefits",
        "dashboard",
        "industrySectors",
        "globalStats",
        "testimonials",
        "technicalDocs",
        "comparison",
        "enhancedBenefits",
        "pricing",
        "contact",
      ];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + sectionHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
                  activeSection === item.id ? "bg-neon-lime/10 border-l-2 border-neon-lime" : ""
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
          <h3 className="font-bold text-slate-900 mb-6 text-lg">{t.megamenu.usefulLinks}</h3>
          <div className="space-y-4">
            <a href="#" className="block text-slate-600 hover:text-neon-lime transition-colors">
              {t.megamenu.apiDocs}
            </a>
            <a href="#" className="block text-slate-600 hover:text-neon-lime transition-colors">
              {t.megamenu.integrationGuides}
            </a>
            <a href="#" className="block text-slate-600 hover:text-neon-lime transition-colors">
              {t.megamenu.helpCenter}
            </a>
            <a href="#" className="block text-slate-600 hover:text-neon-lime transition-colors">
              {t.megamenu.techBlog}
            </a>
            <a href="#" className="block text-slate-600 hover:text-neon-lime transition-colors">
              {t.megamenu.serviceStatus}
            </a>
            <a href="#" className="block text-slate-600 hover:text-neon-lime transition-colors">
              {t.megamenu.community}
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
          <button className="bg-neon-lime hover:bg-neon-lime-dark text-dark-bg px-4 py-2 rounded-lg font-medium transition-colors w-full neon-glow">
            {t.hero.startNow}
          </button>
        </div>
      </div>

      {/* Footer del menú */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-500">
            {t.megamenu.needHelp}
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-slate-500 hover:text-neon-lime">{t.megamenu.terms}</a>
            <a href="#" className="text-sm text-slate-500 hover:text-neon-lime">{t.megamenu.privacy}</a>
            <a href="#" className="text-sm text-slate-500 hover:text-neon-lime">{t.megamenu.status}</a>
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
            <Shield className="h-8 w-8 text-neon-lime mr-3" />
            <span className="text-xl font-bold text-slate-900">iAlert</span>
          </div>
          
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-neon-lime">
                  {t.nav.product}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-1/2 top-0 -translate-x-1/2 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
                  <MenuSection 
                    title={t.nav.product}
                    items={productItems} 
                    highlightSection={{
                      icon: Rocket,
                      title: t.megamenu.quickIntegration,
                      description: t.megamenu.quickIntegrationDesc,
                      color: "text-neon-lime",
                      bg: "bg-neon-lime/10"
                    }}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-neon-lime">
                  {t.nav.useCases}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-1/2 top-0 -translate-x-1/2 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
                  <MenuSection 
                    title={t.nav.useCases}
                    items={useCasesItems} 
                    highlightSection={{
                      icon: Users,
                      title: t.megamenu.successCases,
                      description: t.megamenu.successCasesDesc,
                      color: "text-neon-cyan",
                      bg: "bg-neon-cyan/10"
                    }}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-neon-lime">
                  {t.nav.company}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-1/2 top-0 -translate-x-1/2 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
                  <MenuSection 
                    title={t.nav.company}
                    items={corporateItems} 
                    highlightSection={{
                      icon: Building2,
                      title: t.megamenu.enterpriseSupport,
                      description: t.megamenu.enterpriseSupportDesc,
                      color: "text-neon-purple",
                      bg: "bg-neon-purple/10"
                    }}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <button className="bg-neon-lime hover:bg-neon-lime-dark text-dark-bg px-4 py-2 rounded-lg font-medium transition-colors neon-glow">
            {t.nav.freeTrial}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MegaMenuNavigation;
