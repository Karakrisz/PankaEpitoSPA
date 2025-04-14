export const useScraper = () => {
    const data = ref(null)
    const loading = ref(false)
    const error = ref(null)
  
    const fetchWebsiteData = async () => {
      loading.value = true
      error.value = null
  
      try {
        const response = await fetch('/api/scrape')
        
        if (!response.ok) {
          throw new Error(`API hiba: ${response.status}`)
        }
        
        const result = await response.json()
        console.log('API válasz:', result)
        
        if (!result || !result.html) {
          throw new Error('Hiányzó HTML adat a válaszban')
        }
        
        // HTML feldolgozása
        const parser = new DOMParser()
        const doc = parser.parseFromString(result.html, 'text/html')
        
        // CSS linkek kinyerése (ezt már megvan)
        const cssLinks = Array.from(doc.querySelectorAll('link[rel="stylesheet"]'))
          .map(link => link.getAttribute('href'))
          .filter(Boolean)
          .map(href => href.startsWith('http') ? href : new URL(href, 'https://www.marshallablak.hu').href)
        
        // A termékek információinak kinyerése
        // A fő tartalmi rész kiválasztása - ez a selektor változhat a weboldal szerkezetétől függően
        const mainContent = doc.querySelector('.site-main') || doc.querySelector('main') || doc.querySelector('#content')
        
        // Termékek kinyerése - ezt a weboldal strukturájához kell igazítani
        const products = Array.from(doc.querySelectorAll('.product') || doc.querySelectorAll('.elementor-widget-container') || [])
          .map(product => {
            // Termék címe
            const title = product.querySelector('h2, h3, .title')?.textContent?.trim()
            
            // Termék leírása
            const description = product.querySelector('.description, .content, p')?.textContent?.trim()
            
            // Termék képe
            const imageElement = product.querySelector('img')
            const imageUrl = imageElement?.getAttribute('src') || imageElement?.getAttribute('data-src')
            const imageSrc = imageUrl ? (imageUrl.startsWith('http') ? imageUrl : new URL(imageUrl, 'https://www.marshallablak.hu').href) : null
            
            // Termék további adatai
            const extraInfo = Array.from(product.querySelectorAll('li, .feature'))
              .map(item => item.textContent.trim())
              .filter(Boolean)
            
            return {
              title,
              description,
              imageSrc,
              extraInfo
            }
          })
          .filter(product => product.title || product.description) // Csak érvényes termékeket tartunk meg
        
        // Oldalcím
        const pageTitle = doc.querySelector('h1')?.textContent?.trim() || 
                          doc.querySelector('title')?.textContent?.trim()
        
        // Kivesszük a fő szöveges tartalmat
        const mainTextContent = mainContent 
          ? Array.from(mainContent.querySelectorAll('p, h2, h3, h4, ul'))
              .map(element => {
                return {
                  type: element.tagName.toLowerCase(),
                  content: element.textContent.trim()
                }
              })
              .filter(item => item.content)
          : []
        
        // Összes kép az oldalon
        const images = Array.from(doc.querySelectorAll('img'))
          .map(img => {
            const src = img.getAttribute('src') || img.getAttribute('data-src')
            return src ? (src.startsWith('http') ? src : new URL(src, 'https://www.marshallablak.hu').href) : null
          })
          .filter(Boolean)
        
        data.value = {
          cssLinks,
          pageTitle,
          products,
          mainTextContent,
          images,
          html: result.html // Eredeti HTML megőrzése
        }
        
        return {
          success: true,
          ...data.value
        }
      } catch (err) {
        console.error('Hiba:', err)
        error.value = err.message || 'Ismeretlen hiba történt'
        return {
          success: false,
          error: error.value
        }
      } finally {
        loading.value = false
      }
    }
  
    return {
      data,
      loading,
      error,
      fetchWebsiteData
    }
  }