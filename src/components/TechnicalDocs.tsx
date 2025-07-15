
import { Download, FileText, Code, BookOpen, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const TechnicalDocs = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const documents = [
    {
      icon: FileText,
      title: t.technicalDocs.technicalDoc,
      description: t.technicalDocs.technicalDocDesc,
      size: "2.3 MB",
      format: "PDF",
      type: "technical"
    },
    {
      icon: Code,
      title: t.technicalDocs.apiGuide,
      description: t.technicalDocs.apiGuideDesc,
      size: "1.8 MB",
      format: "PDF",
      type: "api"
    },
    {
      icon: BookOpen,
      title: t.technicalDocs.whitepaper,
      description: t.technicalDocs.whitepaperDesc,
      size: "1.2 MB",
      format: "PDF",
      type: "research"
    },
    {
      icon: FileText,
      title: t.technicalDocs.useCasesDoc,
      description: t.technicalDocs.useCasesDocDesc,
      size: "3.1 MB",
      format: "PDF",
      type: "cases"
    }
  ];

  const resources = [
    {
      title: t.technicalDocs.devCenter,
      description: t.technicalDocs.devCenterDesc,
      link: "#",
      icon: Code
    },
    {
      title: t.technicalDocs.githubCommunity,
      description: t.technicalDocs.githubCommunityDesc,
      link: "#",
      icon: ExternalLink
    },
    {
      title: t.technicalDocs.techBlog,
      description: t.technicalDocs.techBlogDesc,
      link: "#",
      icon: BookOpen
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Downloads */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">{t.technicalDocs.downloads}</h3>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-all duration-300 border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <doc.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{doc.title}</h4>
                      <p className="text-slate-600 mb-3">{doc.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <span>{doc.format}</span>
                          <span>{doc.size}</span>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center">
                          <Download className="h-4 w-4 mr-2" />
                          {t.technicalDocs.download}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Online Resources */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">{t.technicalDocs.onlineResources}</h3>
            <div className="space-y-4 mb-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-blue-50 rounded-2xl p-6 hover:bg-blue-100 transition-all duration-300 border border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-200 rounded-xl flex items-center justify-center">
                        <resource.icon className="h-6 w-6 text-blue-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{resource.title}</h4>
                      <p className="text-slate-600 mb-3">{resource.description}</p>
                      <a 
                        href={resource.link}
                        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                      >
                        {t.technicalDocs.access}
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Quick Start */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-4">{t.technicalDocs.quickStart}</h4>
              <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                <code className="text-green-400">
                  {`<!-- Copia este código en tu web -->`}
                  <br />
                  <span className="text-blue-400">{`<script`}</span>
                  <span className="text-white"> src=</span>
                  <span className="text-amber-400">"https://cdn.aishield.es/v1/shield.js"</span>
                  <br />
                  <span className="text-white">        data-key=</span>
                  <span className="text-amber-400">"tu-api-key"</span>
                  <span className="text-blue-400">{`></script>`}</span>
                </code>
              </div>
              <p className="text-slate-300 text-sm">
                {t.technicalDocs.quickStartDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalDocs;
