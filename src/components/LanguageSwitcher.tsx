
import { languages } from '@/i18n';
import { useLanguage } from '@/hooks/useLanguage';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  
  return (
    <div className="flex items-center space-x-1 border border-slate-200 rounded-lg overflow-hidden">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${
            currentLanguage === lang.code
              ? 'bg-blue-100 text-blue-600'
              : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
