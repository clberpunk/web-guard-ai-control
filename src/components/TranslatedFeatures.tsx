
import { Shield, Zap, BarChart3, Bell, Code, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const TranslatedFeatures = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const features = [
    {
      icon: Zap,
      title: t.features.instantInstall,
      description: t.features.instantInstallDesc,
      color: "text-amber-400"
    },
    {
      icon: Shield,
      title: t.features.totalControl,
      description: t.features.totalControlDesc,
      color: "text-blue-400"
    },
    {
      icon: BarChart3,
      title: t.features.advancedAnalysis,
      description: t.features.advancedAnalysisDesc,
      color: "text-teal-400"
    },
    {
      icon: Bell,
      title: t.features.securityAlerts,
      description: t.features.securityAlertsDesc,
      color: "text-amber-400"
    },
    {
      icon: Code,
      title: t.features.noTechnicalImpact,
      description: t.features.noTechnicalImpactDesc,
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: t.features.collaborativeManagement,
      description: t.features.collaborativeManagementDesc,
      color: "text-teal-400"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.features.title}
            <span className="block text-blue-600">{t.features.subtitle}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.features.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-6 ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TranslatedFeatures;
