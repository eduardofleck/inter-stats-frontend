import i18n from "i18next";
//import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
//import XHR from "i18next-xhr-backend";
import languagePT from "../../../public/localization/pt/translate.json";
import languageEN from "../../../public/localization/en/translate.json";

i18n
  //.use(XHR)
  //.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: languagePT,
      en: languageEN,
    },
    /* default language when load the website in browser */
    lng: "pt",
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: "pt",
    /* debugger For Development environment */
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default",
      useSuspense: false,
    },
  });

export default i18n;
