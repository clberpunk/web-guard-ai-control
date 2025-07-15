
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const TranslatedHero = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const handleFreeTrial = () => {
    window.open('https://ialert.ciberpunk.es/auth/login', '_blank');
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            {t.hero.title}
            <span className="block text-blue-600">{t.hero.subtitle}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={handleFreeTrial}
            >
              {t.hero.startNow}
            </button>
            <button 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              onClick={handleFreeTrial}
            >
              {t.hero.freeTrial}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranslatedHero;
