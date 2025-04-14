import * as cheerio from 'cheerio'

export default defineEventHandler(async (event) => {
  try {
    const url =
      'https://www.marshallablak.hu/termekek/m-eco-ablakok-es-erkelyajtok/'
    const headers = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'hu,en-US;q=0.7,en;q=0.3',
    }

    const response = await fetch(url, { headers })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const fullHtml = await response.text()

    // Ellenőrizzük, hogy van-e egyáltalán tartalom
    if (!fullHtml || fullHtml.trim() === '') {
      throw new Error('A válasz üres')
    }

    console.log('HTML betöltve, mérete:', fullHtml.length)

    // Cheerio segítségével elemezzük a HTML-t
    const $ = cheerio.load(fullHtml)

    // Ellenőrizzük, hogy milyen fő elemek vannak az oldalon
    // és kiírjuk a konzolra - debug céllal
    const availableTags = []
    const availableClasses = []

    $('body *').each((i, el) => {
      if ($(el).attr('class')) {
        const classes = $(el).attr('class').split(' ')
        classes.forEach((c) => {
          if (c && !availableClasses.includes(c)) {
            availableClasses.push(c)
          }
        })
      }

      const tagName = el.tagName.toLowerCase()
      if (!availableTags.includes(tagName)) {
        availableTags.push(tagName)
      }
    })

    console.log('Elérhető osztályok:', availableClasses)

    // Szelektáljuk inkább a teljes tartalmat és vegyük ki a fejlécet és láblécet
    // Több szelektort is megpróbálunk, hogy biztosan elkapjuk a fő tartalmat
    let mainContent = ''

    // Próbáljuk az ".entry-content", "#content", "article", ".post-content" szelektorokat
    const contentSelectors = [
      '.main-content',
      '.entry-content',
      '#content',
      'article',
      '.post-content',
      '.page-content',
      '.content',
      'main',
      '.container',
    ]

    for (const selector of contentSelectors) {
      const element = $(selector)
      if (element.length > 0) {
        console.log(`Sikeresen megtalálva: ${selector}`)
        mainContent = element.html() || ''
        break
      }
    }

    // Ha egyik szelektor sem működött, próbáljuk meg csak a body tartalmát
    if (!mainContent) {
      console.log(
        'Nem találtunk megfelelő szelektort, használjuk a teljes body tartalmat'
      )
      // Távolítsuk el a fejlécet és láblécet
      $('header, nav, footer').remove()
      mainContent = $('body').html() || ''
    }

    if (!mainContent) {
      return {
        statusCode: 404,
        error: 'Nem találtunk megfelelő tartalmat az oldalon',
      }
    }

    // URL-ek javítása a kiválasztott HTML részben
    let processedHtml = mainContent
      .replace(/href="\/(?!\/)/g, 'href="https://www.marshallablak.hu/')
      .replace(/src="\/(?!\/)/g, 'src="https://www.marshallablak.hu/')
      .replace(/url\(["']?\/(?!\/)/g, 'url("https://www.marshallablak.hu/')

    // Adjunk hozzá egy basic HTML struktúrát
    const result = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>M-ECO ablakok és erkélyajtók</title>
        <style>
          /* Itt hozzáadhatsz saját CSS-t is */
          body { 
            font-family: 'Montserrat', sans-serif;
          }
          section.elementor-section.elementor-top-section.elementor-element.elementor-element-7c3c666.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default .elementor-container.elementor-column-gap-default {
            display: flex;
            margin: 4em 0 1em 0;
          }
          .vasalat img {
            width: 100%;
            max-width: 100% !important;
          }
          .elementor-widget-container h6 {
            font-size: 1rem;
            font-weight: 300;
          } 
          img.attachment-large.size-large.wp-image-1453 {
            margin-left: 0em;
            position: relative;
            left: 5em;
            top: 3em;
          }   
          .profil-termektulajdonsag {
            display: flex;
            align-items: center;
            margin-bottom: 2.5em;
          }
          div#profil-termektulajdonsag-neve {
            font-weight: 500;
          }
          div#profil-termektulajdonsag-erteke {
            font-weight: 300;
            margin-top: .3em;
          }
          .tulajdonsag-tablazat {
            display: flex;
            justify-content: space-around;
          }    
          #extra-grid .elementor-widget-container {
            display: flex;
            flex-wrap: wrap;
          }
          .vasalat {
            display: unset !important;
          }
          .vasalat-szoveg {
            padding: 1em; 
            margin: 0 !important;
          }
          #vasalat-neve {
            font-size: 1.1rem !important;
            margin-bottom: .3em;
            text-transform: uppercase;
            line-height: 1.7rem;
          }
          div#vasalat-erteke {
            font-size: 1rem;
            margin-top: .7em;
          }
          .elementor-button-wrapper {
            display: none;
          }
          .elementor-widget-container p {
            font-weight: 400;
            font-size: 1rem;
          }
          section.elementor-section.elementor-inner-section.elementor-element.elementor-element-38064f6.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default .elementor-container.elementor-column-gap-default {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .elementor-column.elementor-col-33.elementor-inner-column.elementor-element.elementor-element-2ec68c3 {
            width: 33%;
          }
          .jobb-tulajdonsag {
            text-align: right;
          }  
        </style>
      </head>
      <body>
        <div class="content-container">
          ${processedHtml}
        </div>
      </body>
      </html>
    `

    return result
  } catch (error) {
    console.error('Hiba történt a proxy során:', error)
    // Részletesebb hibaüzenetet adjunk vissza
    return {
      statusCode: 500,
      error: 'Hiba történt az adatok lekérése közben',
      message: error.message,
      stack: error.stack,
    }
  }
})
