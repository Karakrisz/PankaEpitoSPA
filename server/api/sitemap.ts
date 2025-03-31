interface Post {
  id: number
  slug: string
  modifiedAt?: string
  created_at: string 
}

export default defineSitemapEventHandler(async (e) => {
  try {
    const response = await fetch(
      'https://api.pankaepito.hu/json-posts'
    )
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }
    const posts: Post[] = await response.json()

    return posts.map((post: Post) => {
      return {
        loc: `/posts/${post.slug}`,
        lastmod: post.modifiedAt 
          ? new Date(post.modifiedAt).toISOString() 
          : new Date(post.created_at).toISOString(),
      }
    })
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error)
    return []
  }
})
