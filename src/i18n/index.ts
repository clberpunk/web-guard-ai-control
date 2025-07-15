
import { es } from './translations/es';
import { en } from './translations/en';
import { pt } from './translations/pt';

export type Language = 'es' | 'en' | 'pt';

export const translations = {
  es,
  en,
  pt
};

export const getTranslation = (lang: Language) => {
  return translations[lang] || translations.es;
};

export const languages = [
  { code: 'es' as Language, name: 'ES', flag: '🇪🇸' },
  { code: 'en' as Language, name: 'EN', flag: '🇺🇸' },
  { code: 'pt' as Language, name: 'PT', flag: '🇧🇷' }
];
