import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';

// Configuración de i18next
i18n
  .use(LanguageDetector) // Detecta el idioma del navegador automáticamente
  .use(initReactI18next) // Inicializa react-i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es }
    },
    fallbackLng: 'en', // Idioma por defecto
    interpolation: {
      escapeValue: false // React ya se encarga de evitar XSS
    }
  });

export default i18n;
