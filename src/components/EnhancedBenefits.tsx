
import { CheckCircle, Cpu, FileText, Bot, BarChart3, Shield, Feather, Settings } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const EnhancedBenefits = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const problems = [
    {
      icon: Cpu,
      problem: t.enhancedBenefits.problems.resourceConsumption.problem,
      solution: t.enhancedBenefits.problems.resourceConsumption.solution,
      emoji: "💡"
    },
    {
      icon: FileText,
      problem: t.enhancedBenefits.problems.contentCopying.problem,
      solution: t.enhancedBenefits.problems.contentCopying.solution,
      emoji: "🚫"
    },
    {
      icon: Bot,
      problem: t.enhancedBenefits.problems.formSpam.problem,
      solution: t.enhancedBenefits.problems.formSpam.solution,
      emoji: "🛡️"
    },
    {
      icon: BarChart3,
      problem: t.enhancedBenefits.problems.distortedMetrics.problem,
      solution: t.enhancedBenefits.problems.distortedMetrics.solution,
      emoji: "📊"
    },
    {
      icon: Shield,
      problem: t.enhancedBenefits.problems.undetectedBots.problem,
      solution: t.enhancedBenefits.problems.undetectedBots.solution,
      emoji: "👁️"
    },
    {
      icon: Feather,
      problem: t.enhancedBenefits.problems.expensiveIntegration.problem,
      solution: t.enhancedBenefits.problems.expensiveIntegration.solution,
      emoji: "🪶"
    },
    {
      icon: Settings,
      problem: t.enhancedBenefits.problems.aiControl.problem,
      solution: t.enhancedBenefits.problems.aiControl.solution,
      emoji: "🎛️"
    }
  ];

  return (
    <section id="enhanced-benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-8">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-green-700 text-sm font-medium">{t.enhancedBenefits.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">{t.enhancedBenefits.title}</span>
            <span className="block mt-2">{t.enhancedBenefits.subtitle}</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {problems.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.problem}</h3>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <p className="text-slate-700 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedBenefits;
