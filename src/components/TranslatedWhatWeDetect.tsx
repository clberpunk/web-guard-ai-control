
import { Shield, AlertTriangle, Bot, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const TranslatedWhatWeDetect = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const threats = [
    {
      icon: Bot,
      title: t.whatWeDetect.knownAi,
      description: t.whatWeDetect.knownAiDesc,
      color: "text-blue-400",
      bg: "bg-blue-50",
      border: "border-blue-200"
    },
    {
      icon: AlertTriangle,
      title: t.whatWeDetect.unknownBots,
      description: t.whatWeDetect.unknownBotsDesc,
      color: "text-amber-400",
      bg: "bg-amber-50",
      border: "border-amber-200"
    },
    {
      icon: Search,
      title: t.whatWeDetect.scrapers,
      description: t.whatWeDetect.scrapersDesc,
      color: "text-red-400",
      bg: "bg-red-50",
      border: "border-red-200"
    },
    {
      icon: Shield,
      title: t.whatWeDetect.crawlers,
      description: t.whatWeDetect.crawlersDesc,
      color: "text-purple-400",
      bg: "bg-purple-50",
      border: "border-purple-200"
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.whatWeDetect.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.whatWeDetect.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {threats.map((threat, index) => (
            <Card key={index} className={`border-2 ${threat.border} ${threat.bg} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${threat.bg} border-2 ${threat.border} mb-6`}>
                  <threat.icon className={`h-8 w-8 ${threat.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{threat.title}</h3>
                <p className="text-slate-600 leading-relaxed">{threat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TranslatedWhatWeDetect;
