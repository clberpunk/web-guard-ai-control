
import { Server, ShieldCheck, FileText, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const TranslatedImmediateBenefits = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const benefits = [
    {
      icon: Server,
      title: t.immediateBenefits.saveResources,
      description: t.immediateBenefits.saveResourcesDesc,
      color: "text-blue-400",
      bg: "bg-blue-50"
    },
    {
      icon: ShieldCheck,
      title: t.immediateBenefits.avoidFraud,
      description: t.immediateBenefits.avoidFraudDesc,
      color: "text-amber-400",
      bg: "bg-amber-50"
    },
    {
      icon: FileText,
      title: t.immediateBenefits.protectContent,
      description: t.immediateBenefits.protectContentDesc,
      color: "text-teal-400",
      bg: "bg-teal-50"
    },
    {
      icon: Users,
      title: t.immediateBenefits.onlyHumans,
      description: t.immediateBenefits.onlyHumansDesc,
      color: "text-purple-400",
      bg: "bg-purple-50"
    }
  ];

  return (
    <section id="immediate-benefits" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.immediateBenefits.title}
            <span className="block text-blue-600">{t.immediateBenefits.subtitle}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.immediateBenefits.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.bg} mb-6`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TranslatedImmediateBenefits;
