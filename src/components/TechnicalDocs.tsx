
import { Book, Code, Wrench, Lightbulb, HelpCircle, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const TechnicalDocs = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const docs = [
    {
      icon: Lightbulb,
      title: t.technicalDocs.quickStart,
      description: t.technicalDocs.quickStartDesc,
      color: "text-amber-400",
      bg: "bg-amber-50"
    },
    {
      icon: Code,
      title: t.technicalDocs.apiReference,
      description: t.technicalDocs.apiReferenceDesc,
      color: "text-blue-400",
      bg: "bg-blue-50"
    },
    {
      icon: Book,
      title: t.technicalDocs.integrationGuides,
      description: t.technicalDocs.integrationGuidesDesc,
      color: "text-green-400",
      bg: "bg-green-50"
    },
    {
      icon: Wrench,
      title: t.technicalDocs.bestPractices,
      description: t.technicalDocs.bestPracticesDesc,
      color: "text-purple-400",
      bg: "bg-purple-50"
    },
    {
      icon: HelpCircle,
      title: t.technicalDocs.troubleshooting,
      description: t.technicalDocs.troubleshootingDesc,
      color: "text-red-400",
      bg: "bg-red-50"
    },
    {
      icon: Package,
      title: t.technicalDocs.sdkLibraries,
      description: t.technicalDocs.sdkLibrariesDesc,
      color: "text-teal-400",
      bg: "bg-teal-50"
    }
  ];

  return (
    <section id="technical-docs" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.technicalDocs.title}
            <span className="block text-blue-600">{t.technicalDocs.subtitle}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.technicalDocs.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {docs.map((doc, index) => (
            <Card key={index} className={`border-2 border-slate-200 ${doc.bg} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}>
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 mb-6`}>
                  <doc.icon className={`h-8 w-8 ${doc.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{doc.title}</h3>
                <p className="text-slate-600 leading-relaxed">{doc.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalDocs;
