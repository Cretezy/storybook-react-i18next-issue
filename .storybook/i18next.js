import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const defaultLanguage = "en";

const supportedLngs = ["en", "fr"];
const ns = ["app", "authentication", "common", "errors", "organizations"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs,
    ns,
    initImmediate: true,
  });

supportedLngs.forEach((lang) => {
  ns.forEach((n) => {
    i18n.addResourceBundle(lang, n, {});
  });
});

export { i18n };
