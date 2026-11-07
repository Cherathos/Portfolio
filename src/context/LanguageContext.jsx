
import { createContext, useContext, useState } from 'react'

import en from '../data/en'
import tr from '../data/tr'
import { sendLanguageRequest } from '../services/languageService'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [translations, setTranslations] = useState(en)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const changeLanguage = async (newLanguage) => {
    if (newLanguage !== 'en' && newLanguage !== 'tr') {
      return
    }

    if (newLanguage === language) {
      return
    }

    const selectedData = newLanguage === 'tr' ? tr : en

    setLoading(true)
    setError(null)

    try {
      const response = await sendLanguageRequest(
        newLanguage,
        selectedData
      )

      setLanguage(newLanguage)
      setTranslations(response.translations ?? selectedData)

    } catch (err) {
      setError('Dil değiştirilirken bir hata oluştu.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        translations,
        changeLanguage,
        loading,
        error,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage must be used within LanguageProvider'
    )
  }

  return context
}
