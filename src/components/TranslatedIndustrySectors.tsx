
import { ShoppingCart, FileText, Code, DollarSign, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const TranslatedIndustrySectors = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const sectors = [
    {
      icon: ShoppingCart,
      title: t.industrySectors.ecommerce,
      description: t.industrySectors.ecommerceDesc,
      color: "text-blue-400",
      bg: "bg-blue-50"
    },
    {
      icon: FileText,
      title: t.industrySectors.media,
      description: t.industrySectors.mediaDesc,
      color: "text-purple-400",
      bg: "bg-purple-50"
    },
    {
      icon: Code,
      title: t.industrySectors.saas,
      description: t.industrySectors.saasDesc,
      color: "text-green-400",
      bg: "bg-green-50"
    },
    {
      icon: DollarSign,
      title: t.industrySectors.finance,
      description: t.industrySectors.financeDesc,
      color: "text-amber-400",
      bg: "bg-amber-50"
    },
    {
      icon: GraduationCap,
      title: t.industrySectors.education,
      description: t.industrySectors.educationDesc,
      color: "text-teal-400",
      bg: "bg-teal-50"
    },
    {
      icon: Heart,
      title: t.industrySectors.healthcare,
      description: t.industrySectors.healthcareDesc,
      color: "text-red-400",
      bg: "bg-red-50"
    }
  ];

  return (
    <section id="industry-sectors" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.industrySectors.title}
            <span className="block text-blue-600">{t.industrySectors.subtitle}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.industrySectors.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Card key={index} className={`border-2 border-slate-200 ${sector.bg} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 mb-6`}>
                  <sector.icon className={`h-8 w-8 ${sector.color}`} />
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

export default TranslatedIndustrySectors;
