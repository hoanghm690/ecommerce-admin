import { DEFAULT_NS, SUPPORTED_LANGS } from '@/constants'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGS,
    ns: [DEFAULT_NS],
    defaultNS: DEFAULT_NS,
    debug: import.meta.env.DEV,
    detection: {
      order: [],
      caches: []
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
