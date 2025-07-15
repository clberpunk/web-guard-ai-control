
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Language } from '@/i18n';

export const useLanguage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract language from URL path
  const getLanguageFromPath = (pathname: string): Language => {
    if (pathname.startsWith('/public/en')) return 'en';
    if (pathname.startsWith('/public/pt')) return 'pt';
    return 'es'; // default
  };
  
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    getLanguageFromPath(location.pathname)
  );
  
  useEffect(() => {
    setCurrentLanguage(getLanguageFromPath(location.pathname));
  }, [location.pathname]);
  
  const changeLanguage = (newLang: Language) => {
    const basePath = '/public';
    const langPath = newLang === 'es' ? basePath : `${basePath}/${newLang}`;
    navigate(langPath);
    setCurrentLanguage(newLang);
  };
  
  return {
    currentLanguage,
    changeLanguage
  };
};
