<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useAsyncData, useRoute, useRuntimeConfig } from '#app'

interface Post {
  id: number
  title: string
  slug: string
  body: string
  image: string
}

const config = useRuntimeConfig()

const route = useRoute()

const { data: post, error } = await useAsyncData<Post>('post', () =>
  $fetch(`${config.public.apiBaseUrl}/json-posts/${route.params.slug}`)
)

onMounted(() => {
  document.body.setAttribute('data-page', 'slug')
})

onUnmounted(() => {
  document.body.removeAttribute('data-page')
})
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


