
import axios from 'axios'

export const sendLanguageRequest = async (language, translations) => {
  try {
    const response = await axios.post('/api/language', {
      language,
      translations,
    })

    return response.data
  } catch (error) {
    console.error('Language request failed:', error)
    throw error
  }
}
