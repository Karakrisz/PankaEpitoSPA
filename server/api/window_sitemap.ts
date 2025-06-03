// server/api/variations.ts
import { defineSitemapEventHandler } from '#imports'

// Sitemap típusok a nuxt-sitemap modulból
type Changefreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

interface Variation {
  id: string
  varos: string
  kerulet: string
  kulcsszo: string
  szolgaltatas: string
  extra: string
  ev: number
  title: string
  meta_description: string
  body: string
  image_url: string
  video_url?: string // Opcionális videó URL
}

// Nuxt 3 Sitemap modul által elvárt formátum
export default defineSitemapEventHandler(async () => {
  try {
    // API-ból lekérjük az adatokat
    const response = await fetch(
      'https://api.pankaepito.hu/ablakapi/nyilaszaro_seo_500.json'
    )
    const data = await response.json()
    const variations: Variation[] = data

    const baseUrl = process.env.BASE_URL || 'https://ablaktechnika.com'

    // A sitemap modulnak megfelelő formátum
    return variations.map((variation: Variation) => {
      // Slugify function ugyanaz mint a Vue komponensben
      function slugify(text: string = ''): string {
        return text
          .toLowerCase()
          .replace(/[áàâä]/g, 'a')
          .replace(/[éèêë]/g, 'e')
          .replace(/[íìîï]/g, 'i')
          .replace(/[óòôö]/g, 'o')
          .replace(/[úùûü]/g, 'u')
          .replace(/ő/g, 'o')
          .replace(/ű/g, 'u')
          .replace(/\./g, '')
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9\-]/g, '')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '')
      }

      // URL struktúra az új adatok alapján
      const slugUrl = `/nyilaszaro/${slugify(variation.kerulet)}/${slugify(
        variation.kulcsszo
      )}/${slugify(variation.szolgaltatas)}/${slugify(variation.extra)}/${
        variation.ev
      }`

      // Teljes kép URL
      const fullImageUrl = variation.image_url?.startsWith('http')
        ? variation.image_url
        : `${baseUrl}${variation.image_url}`

      // A típushibák elkerülése érdekében a helyes típusokkal dolgozunk
      return {
        loc: slugUrl,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly' as Changefreq, // Explicit típuskonverzió
        priority: 0.8,
        // Az _images mező a nuxt-sitemap modulban használatos a képekhez
        _images: variation.image_url
          ? [
              {
                url: fullImageUrl,
                title:
                  variation.title ||
                  `${variation.kulcsszo} ${variation.kerulet}`,
                caption:
                  variation.meta_description ||
                  `${variation.kulcsszo} ${variation.varos} ${variation.kerulet}`,
                // Opcionális mezők
                license: 'https://ablaktechnika.com/license',
                geoLocation: `${variation.varos}, Hungary`,
              },
            ]
          : undefined,
        // Alternatív módszer, ha a fenti nem működik
        images: variation.image_url
          ? [
              {
                loc: fullImageUrl,
                title:
                  variation.title ||
                  `${variation.kulcsszo} ${variation.kerulet}`,
                caption:
                  variation.meta_description ||
                  `${variation.kulcsszo} ${variation.varos} ${variation.kerulet}`,
              },
            ]
          : undefined,
      }
    })
  } catch (error) {
    console.error('Error generating sitemap for variations:', error)
    return []
  }
})
