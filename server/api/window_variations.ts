export default defineEventHandler(async () => {
  const response = await fetch(
    'https://api.pankaepito.hu/ablakapi/nyilaszaro_seo_500.json'
  )
  const data = await response.json()
  return data
})
