import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from "./locales/uz.json"
import enTranslation from "./locales/en.json"

const selectedLanguage = localStorage.getItem('i18nextLng') || 'english';

i18n
    .use(Backend)
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    .init({
        fallbackLng: 'en',
        lng: selectedLanguage,
        debug: true,
        resources: {
            uzbek: { translation: uzTranslation },
            english: { translation: enTranslation }
        },        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        detection: {
            order: ['localStorage', 'navigator']
        },
    });

export default i18n;