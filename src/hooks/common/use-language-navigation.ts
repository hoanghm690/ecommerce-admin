import i18n from '@/lib/config/i18n'
import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router'

export function useLanguageNavigation() {
  const navigate = useNavigate()
  const { lang = 'en' } = useParams<{ lang: string }>()

  const navigateWithLanguage = useCallback(
    (path: string, options?: { replace?: boolean }) => {
      // Remove leading slash if present
      const cleanPath = path.startsWith('/') ? path.slice(1) : path
      navigate(`/${lang}/${cleanPath}`, options)
    },
    [navigate, lang]
  )

  const changeLanguage = useCallback(
    (newLanguage: string) => {
      // Get current path without language prefix
      const currentPath = window.location.pathname
      const pathParts = currentPath.split('/')
      // Remove the first two parts (empty string and language code)
      const remainingPath = pathParts.length > 2 ? pathParts.slice(2).join('/') : ''

      // Change language in i18n
      i18n.changeLanguage(newLanguage)

      // Navigate to the same path with new language
      navigate(`/${newLanguage}${remainingPath ? `/${remainingPath}` : ''}`, { replace: true })
    },
    [navigate]
  )

  return {
    navigateWithLanguage,
    changeLanguage,
    currentLanguage: lang
  }
}
