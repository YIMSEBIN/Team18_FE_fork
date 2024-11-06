import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { KO, VE } from '.';

const resources = {
  ko: { translation: { ...KO } },
  ve: { translation: { ...VE } },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 've',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
