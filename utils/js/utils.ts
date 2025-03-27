import { useAsyncData, useRuntimeConfig } from '#app'

interface Post {
  id: number
  title: string
  slug: string
  body: string
  image: string
}

export async function fetchPosts() {
  const config = useRuntimeConfig()
  const { data: itemsPost } = await useAsyncData<Post[]>('posts', () =>
    $fetch(`${config.public.apiBaseUrl}/json-posts`)
  )
  return itemsPost
}

export function truncateContent(content: string, maxLength: number): string {
  const textContent = content.replace(/<[^>]*>/g, '')
  if (textContent.length <= maxLength) {
    return textContent
  }
  return textContent.slice(0, maxLength) + '...'
}
