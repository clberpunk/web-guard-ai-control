
import { Download, Eye, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const TranslatedSimplifiedHowItWorks = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const steps = [
    {
      icon: Download,
      title: t.howItWorks.installation,
      description: t.howItWorks.installationDesc,
      color: "text-blue-600",
      bg: "bg-blue-50",
      number: "01"
    },
    {
      icon: Eye,
      title: t.howItWorks.detection,
      description: t.howItWorks.detectionDesc,
      color: "text-amber-600",
      bg: "bg-amber-50",
      number: "02"
    },
    {
      icon: Shield,
      title: t.howItWorks.defense,
      description: t.howItWorks.defenseDesc,
      color: "text-teal-600",
      bg: "bg-teal-50",
      number: "03"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.howItWorks.title}
            <span className="block text-blue-600">{t.howItWorks.subtitle}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.howItWorks.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 relative">
              <CardContent className="p-8 text-center">
                <div className={`absolute -top-4 -right-4 w-12 h-12 ${step.bg} rounded-xl flex items-center justify-center`}>
                  <span className={`font-bold text-lg ${step.color}`}>{step.number}</span>
                </div>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bg} mb-6`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TranslatedSimplifiedHowItWorks;
