export default defineEventHandler(async (event) => {
    try {
      const body = await readBody(event)
      const { url } = body
      
      if (!url) {
        return {
          statusCode: 400,
          error: 'URL paraméter kötelező'
        }
      }
      
      const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': '*/*',
        'Accept-Language': 'hu,en-US;q=0.7,en;q=0.3',
        'Referer': 'https://www.marshallablak.hu/'
      }
      
      console.log('CSS letöltése:', url)
      
      const response = await fetch(url, { headers })
      
      if (!response.ok) {
        throw new Error(`HTTP hiba! Státusz: ${response.status}`)
      }
      
      const css = await response.text()
      
      return {
        statusCode: 200,
        css
      }
    } catch (error) {
      console.error('Hiba a CSS letöltése során:', error)
      return {
        statusCode: 500,
        error: 'Hiba történt a CSS letöltése közben',
        message: error.message
      }
    }
  })