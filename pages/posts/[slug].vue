<script setup lang="ts">
import { useAsyncData, useRoute, useRuntimeConfig } from '#app'

interface Post {
  id: number
  title: string
  slug: string
  body: string
  image: string
  meta_description: string
}

const config = useRuntimeConfig()

const route = useRoute()

const { data: post, error } = await useAsyncData<Post>('post', () =>
  $fetch(`${config.public.apiBaseUrl}/json-posts/${route.params.slug}`)
)

if (post?.value) {
  const baseUrl = config.public.apiBaseUrl.replace(/\/$/, '')
  const postPath = route.path.replace(/^\//, '')

  const metaTags = [
    { name: 'description', content: post.value.meta_description || '' },
    { property: 'og:title', content: `${post.value.title} - Vasalás Mester` },
    { property: 'og:description', content: post.value.meta_description || '' },
    { property: 'og:image', content: `${baseUrl}/public/storage/${post.value.image}` },
    { property: 'og:url', content: `https://www.ablaktechnika.com/${postPath}` },
  ]

   // console.log('Meta Tags:', metaTags)

  useHead({
    title: `${post.value.title} - Ablaktechnika`,
    meta: metaTags,
  })
}
</script>

<template>
  <div v-if="error">Hiba történt: {{ error.message }}</div>
  <div v-else-if="!post">Betöltés...</div>
  <div v-else>
    <section>
      <div class="subpage-content blog service-subpage">
        <h2 class="slug-blog__h2 about-content__tBox__h4">
          {{ post.title }}
        </h2>
        <NuxtImg
          class="slug-blog__img"
          :src="`${config.public.apiBaseUrl}/public/storage/${post.image}`"
          :alt="post.title"
        />
        <div class="text-white blog-text-content" v-html="post.body"></div>

        <NuxtLink to="/ajanlatkeres" class="go-back-button">
          <span class="go-back-button__icon">&#8592;</span>
          <span class="go-back-button__text">Ajánlatkérés</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>


