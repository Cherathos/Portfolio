
import axios from 'axios'

const API_URL = 'https://reqres.in/api/users'

export const sendLanguageRequest = async (language, translations) => {
  try {
    const response = await axios.post(API_URL, {
      language,
      translations,
    })

    return response.data
  } catch (error) {
    console.error('Language request failed:', error)
    throw error
  }
}
