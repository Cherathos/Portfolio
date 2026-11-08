
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
    })
  }

  if (!process.env.REQRES_API_KEY || !process.env.REQRES_COLLECTION_SLUG) {
    return res.status(500).json({
      message: 'ReqRes environment variables are missing',
    })
  }

  const { language, translations } = req.body ?? {}

  if (!['en', 'tr'].includes(language) || !translations) {
    return res.status(400).json({
      message: 'Invalid language data',
    })
  }

  try {
    const response = await fetch(
      `https://reqres.in/api/collections/${process.env.REQRES_COLLECTION_SLUG}/records`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.REQRES_API_KEY,
          'X-Reqres-Env': 'prod',
        },
        body: JSON.stringify({
          data: {
            language,
            translations,
          },
        }),
      }
    )

    const result = await response.json()

    if (!response.ok) {
      console.error('ReqRes response:', result)

      return res.status(response.status).json(result)
    }

    return res.status(201).json(result)

  } catch (error) {
    console.error('ReqRes error:', error)

    return res.status(500).json({
      message: 'Could not save translations',
    })
  }
}
