import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import DemoTranslation_en from './translations/en/DemoTranslation_en.json';
import DemoTranslation_de from './translations/de/DemoTranslation_de.json';
import CommonTranslation_en from './translations/en/CommonTranslation_en.json';
import CommonTranslation_de from './translations/de/CommonTranslation_de.json';

const languageDetectionOptions = {
  order: ['querystring', 'cookie'],
  lookupCookie: 'MY_COOKIE_NAME',
  lookupQuerystring: 'lang'
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      detection: languageDetectionOptions,
      resources: {
        en: {
          common: CommonTranslation_en,
          demo: DemoTranslation_en
        },
        de: {
          common: CommonTranslation_de,
          demo: DemoTranslation_de
        }
      },
      fallbackLng: "de",
      debug: true,
      // lng: "de",
      whitelist: ['de', 'en'],

      // have a common namespace used around the full app
      defaultNS: "demo",

      keySeparator: false, // we use content as keys

      interpolation: {
        escapeValue: false
      }
    });

export default i18n;