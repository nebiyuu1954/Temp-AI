import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./locales/en.json";
import am from "./locales/am.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      am: { translation: am }
    },
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
