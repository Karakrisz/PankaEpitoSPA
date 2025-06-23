import * as cheerio from 'cheerio'

export default defineEventHandler(async (event) => {
  try {
    const url =
      'https://www.marshallablak.hu/termekek/vakolhato-tokos-muanyag-redony/'
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
        iframe {
            width: 100%;
         }
        section.elementor-section.elementor-top-section.elementor-element.elementor-element-4394ec0.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default, section.elementor-section.elementor-top-section.elementor-element.elementor-element-364fe183.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default,section.elementor-section.elementor-top-section.elementor-element.elementor-element-676d28b0.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default,section.elementor-section.elementor-top-section.elementor-element.elementor-element-32865d01.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default
        {
           display: none;
        }
        .elementor-widget-container .vasalat:last-child {
            display: none !important;
        }

        .elementor-column.elementor-col-50.elementor-inner-column.elementor-element.elementor-element-cce544d.dc-has-condition.dc-condition-empty {
            display: none;
        }
      
        section.elementor-section.elementor-top-section.elementor-element.elementor-element-039cdb2.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default {
            padding: 3%;
        }
        section.elementor-section.elementor-top-section.elementor-element.elementor-element-7c3c666.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default .elementor-container.elementor-column-gap-default {
            display: flex;
            margin: 4em 0 1em 0;
            padding: 0 7% 2em 7%;
          }
          .vasalat img {
            width: 100%;
            max-width: 100% !important;
            height: 250px;
            object-fit: cover;
          }
          .elementor-widget-container h6 {
            font-size: 1rem;
            font-weight: 300;
          } 
          img.attachment-large.size-large {
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
            background: #fff;
            margin-bottom: 1em;
            padding: 1em;
            box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);
          }    
          #extra-grid .elementor-widget-container {
            display: flex;
            flex-wrap: wrap;
            background: #f7f7f7;
            padding: 5em 7em;
          }
          .vasalat {
            display: unset !important;
          }
          .vasalat-szoveg {
            padding: 1em; 
            margin: 0 !important;
            background: #fff;
          }
          #vasalat-neve {
            font-size: 1.1rem !important;
            margin-bottom: .3em;
            text-transform: uppercase;
            line-height: 1.7rem;
            color: #000 !important;
            font-weight: 800 !important;
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
            flex-direction: column;
            flex-wrap: wrap;
          }
      
          .jobb-tulajdonsag {
            text-align: right;
            color: #21A179;
            font-weight: 700 !important;
          }
          .bal-tulajdonsag {
            text-decoration: underline;
          }  
          div#termektulajdonsag-pipa img {
            width: 17px;
            height: 17px;
            margin-right: 1em;
            margin-left: 1em;
          }
          div#termektulajdonsag-pipa {
            display: flex;
            align-content: space-evenly;
            align-items: center;
          }
          div#termektulajdonsag-pipa span {
            font-weight: 600;
            margin-right: .3em;
          }
          .termektulajdonsag {
            width: 50%;
            display: flex;
            flex-direction: row;
            margin-bottom: 10px;
          }
          .termektulajdonsag img {
            display: none;
          }
        section.elementor-section.elementor-top-section.elementor-element.elementor-element-3c2f11b6.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default .elementor-container.elementor-column-gap-default  {
          }
          img.attachment-full.size-full{
            width: 100%;
            height: 30em;
            object-fit: cover;
            border-radius: 1em;
          }
        section.elementor-section.elementor-top-section.elementor-element.elementor-element-3c2f11b6.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default .elementor-container.elementor-column-gap-default {
            display: flex;
            justify-content: space-between;
            position: relative;
            align-items: center;
            padding-left: 7%;
            padding-right: 5%;
            margin-bottom: 3em;
          }
          .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-563a7932  {
            width: 50%;
                padding: 0 3em 2em 3em;
          }    
          #fenti-tulajdonsagok .elementor-widget-container {
            display: flex;
            flex-wrap: wrap;
          }
          .elementor-442 .elementor-element.elementor-element-123f55c0 > .elementor-element-populated {
            padding: 30px 50px 50px 50px;
          }
          .elementor-element.elementor-element-c675247.ob-harakiri-inherit.ob-has-background-overlay.elementor-widget.elementor-widget-heading .elementor-widget-container span {
            font-weight: 300;
            font-style: italic;
          }
          div#termektulajdonsag-neve {
            font-weight: 700;
            margin: 1em 0;
          }
          section.elementor-section.elementor-top-section.elementor-element.elementor-element-81cdef4.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default {
            background: #FBFBFF;
            padding: 3em 7% 5em 7%;
          }
          section.elementor-section.elementor-top-section.elementor-element.elementor-element-3836e21.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default {
            padding: 4em 7% 4em 7%;
            background: #f7f7f7;
          }
          section.elementor-section.elementor-top-section.elementor-element.elementor-element-9909344.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default {
            padding: 1em 7% 0 7%;
          }
          section.elementor-section.elementor-top-section.elementor-element.elementor-element-e5321b3.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default {
            display: none;
          }
          .elementor-heading-title.elementor-size-default {
            color: #333;
            text-transform: uppercase;
            font-weight: 400;
          }
          h1.elementor-heading-title.elementor-size-default {
            color: #8b0000;
            text-transform: uppercase;
            font-size: 1.5rem;
            font-weight: 600;            
          }
          section.elementor-section.elementor-top-section.elementor-element.elementor-element-81cdef4.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default h2 {
            margin-bottom: 2em;
            background: #8b0000;
            color: #fff;
            padding: 1em;
          }
         .elementor-element.elementor-element-7f604550.ob-harakiri-inherit.ob-has-background-overlay.elementor-widget.elementor-widget-heading h3 {
            margin-bottom: 2em;
            background: #8b0000;
            color: #fff;
            padding: 1em;
          }
          @media (min-width: 991px) and (max-width: 1200px) { 
        section.elementor-section.elementor-top-section.elementor-element.elementor-element-3c2f11b6.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default .elementor-container.elementor-column-gap-default {
            flex-direction: column;
          }
          .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-563a7932 {
            width: 100%;
          }
          img.attachment-full.size-full {
            margin-top: 11em;
          }
          .elementor-column.elementor-col-33.elementor-inner-column.elementor-element.elementor-element-2ec68c3 {
            width: 100%;
          }
          .elementor-column.elementor-col-33.elementor-inner-column.elementor-element.elementor-element-a2b913f {
            width: 100%;
          }
          .elementor-column.elementor-col-33.elementor-inner-column.elementor-element.elementor-element-babc2b5 {
            width: 100%;
          }
          }
          @media (min-width: 768px) and (max-width: 991px) { 
        section.elementor-section.elementor-top-section.elementor-element.elementor-element-3c2f11b6.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default .elementor-container.elementor-column-gap-default {
            display: flex;
            justify-content: space-between;
            position: relative;
            align-items: center;
            padding-left: 7%;
            padding-right: 5%;
            flex-direction: column;
          }
          img.attachment-full.size-full {
            width: 100%;
            height: 100%;
          }
          .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-563a7932 {
            width: 100%;
          }
          .content-container {
            margin-top: 13em;
          }
          .elementor-442 .elementor-element.elementor-element-851a076 > .elementor-element-populated {
            padding: 1em;
          }
          .termektulajdonsag {
            width: 100%;
            display: flex;
            flex-direction: row;
            margin-bottom: 10px;
          }
          .elementor-column.elementor-col-33.elementor-inner-column.elementor-element.elementor-element-2ec68c3 {
            width: 100%;
          }
        section.elementor-section.elementor-top-section.elementor-element.elementor-element-7c3c666.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default .elementor-container.elementor-column-gap-default {
            display: flex;
            margin: 4em 0 1em 0;
            padding: 0 7% 2em 7%;
            flex-direction: column;
          }
          img.attachment-large.size-large {
            margin-left: 0em;
            position: relative;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          } 
          #extra-grid .elementor-widget-container {
            padding: 2em;
          }              
          } 
          @media screen and (max-width: 767px) {
        section.elementor-section.elementor-top-section.elementor-element.elementor-element-3c2f11b6.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default .elementor-container.elementor-column-gap-default {
            display: flex;
            justify-content: space-between;
            position: relative;
            align-items: center;
            padding-left: 7%;
            padding-right: 5%;
            flex-direction: column;
          }
          .vasalat {
            width: calc(100% - 0) !important;
          }
          .vasalat {
            width: 100% !important;
          }  

          #extra-grid .elementor-widget-container {
            flex-direction: column;
         }
          img.attachment-full.size-full {
            width: 100%;
            height: 100%;
          }
          .elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-563a7932 {
            width: 100%;
          }
          .content-container {
            margin-top: 13em;
          }
          .elementor-442 .elementor-element.elementor-element-851a076 > .elementor-element-populated {
            padding: 1em;
          }
          .termektulajdonsag {
            width: 100%;
            display: flex;
            flex-direction: row;
            margin-bottom: 10px;
          }
          .elementor-column.elementor-col-33.elementor-inner-column.elementor-element.elementor-element-2ec68c3 {
            width: 100%;
          }
        section.elementor-section.elementor-top-section.elementor-element.elementor-element-7c3c666.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default .elementor-container.elementor-column-gap-default  {
            display: flex;
            margin: 4em 0 1em 0;
            padding: 0 7% 2em 7%;
            flex-direction: column;
          }
          img.attachment-large.size-large{
            margin-left: 0em;
            position: relative;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          } 
          #extra-grid .elementor-widget-container {
            padding: 2em;
          }   
            
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
