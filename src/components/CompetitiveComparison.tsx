
import { CheckCircle, XCircle, Rocket } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const CompetitiveComparison = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const features = [
    {
      name: t.comparison.features.noJsDetection,
      iAlert: <CheckCircle className="text-green-500" />,
      alternative: <XCircle className="text-red-500" />
    },
    {
      name: t.comparison.features.granularLicensing,
      iAlert: <CheckCircle className="text-green-500" />,
      alternative: <XCircle className="text-red-500" />
    },
    {
      name: t.comparison.features.quickIntegration,
      iAlert: <CheckCircle className="text-green-500" />,
      alternative: <XCircle className="text-red-500" />
    },
    {
      name: t.comparison.features.proactiveAlerts,
      iAlert: <CheckCircle className="text-green-500" />,
      alternative: <XCircle className="text-red-500" />
    },
    {
      name: t.comparison.features.payPerUse,
      iAlert: <CheckCircle className="text-green-500" />,
      alternative: <XCircle className="text-red-500" />
    },
    {
      name: t.comparison.features.prioritySupport,
      iAlert: <CheckCircle className="text-green-500" />,
      alternative: <XCircle className="text-red-500" />
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.comparison.title}
            <span className="block text-blue-600">{t.comparison.subtitle}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.comparison.description}
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-slate-200 rounded-2xl shadow-xl">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200">
                  {t.comparison.tableHeaders.feature}
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200">
                  {t.comparison.tableHeaders.iAlert}
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200">
                  {t.comparison.tableHeaders.alternative}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 border-b border-slate-200">{feature.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-500 border-b border-slate-200">{feature.iAlert}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-500 border-b border-slate-200">{feature.alternative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center">
          <Rocket className="h-8 w-8 text-blue-600 mx-auto mb-4 animate-bounce" />
          <p className="text-xl text-slate-600">
            {t.comparison.callToAction}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveComparison;
