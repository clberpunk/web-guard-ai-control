
import { Monitor, Database, Settings, FileText, Zap, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const TranslatedDashboard = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const features = [
    {
      icon: Monitor,
      title: t.dashboard.realTimeMonitoring,
      description: t.dashboard.realTimeMonitoringDesc,
      color: "text-blue-400"
    },
    {
      icon: Database,
      title: t.dashboard.aiDatabase,
      description: t.dashboard.aiDatabaseDesc,
      color: "text-teal-400"
    },
    {
      icon: Settings,
      title: t.dashboard.customRules,
      description: t.dashboard.customRulesDesc,
      color: "text-purple-400"
    },
    {
      icon: FileText,
      title: t.dashboard.detailedReports,
      description: t.dashboard.detailedReportsDesc,
      color: "text-amber-400"
    },
    {
      icon: Zap,
      title: t.dashboard.apiIntegration,
      description: t.dashboard.apiIntegrationDesc,
      color: "text-green-400"
    },
    {
      icon: Bell,
      title: t.dashboard.alertSystem,
      description: t.dashboard.alertSystemDesc,
      color: "text-red-400"
    }
  ];

  return (
    <section id="dashboard" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.dashboard.title}
            <span className="block text-blue-600">{t.dashboard.subtitle}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.dashboard.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-6`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
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

export default TranslatedDashboard;
