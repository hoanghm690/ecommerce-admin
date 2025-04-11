import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function useLocalizeDocumentAttributes() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const updateHtmlLang = (lng: string) => {
      document.documentElement.lang = lng
    }

    updateHtmlLang(i18n.language)

    i18n.on('languageChanged', updateHtmlLang)

    return () => {
      i18n.off('languageChanged', updateHtmlLang)
    }
  }, [i18n])
}
