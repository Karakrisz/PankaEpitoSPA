<script setup lang="ts">
import { fetchPosts, truncateContent } from '~/utils/js/utils'

const itemsPost = await fetchPosts()
</script>

<template>
  <section>
    <div class="service-subpage">
      <div class="blog__container">
        <h2 class="blog__title f-400">CIKKEK</h2>
        <div class="blog__grid grid-3">
          <article
            v-for="post in itemsPost"
            :key="post.slug"
            class="blog__card"
          >
            <NuxtLink
              class="blog-container__Nuxtlink"
              :to="`/posts/${post.slug}`"
            >
              <div class="blog__image-wrapper">
                <NuxtImg
                  :src="`${$config.public.apiBaseUrl}/public/storage/${post.image}`"
                  :alt="post.title"
                  class="blog__image"
                />
              </div>
              <div class="blog__content">
                <h3 class="blog__card-title">
                  {{ post.title }}
                </h3>
                <p
                  class="blog__excerpt"
                  v-html="truncateContent(post.body, 100)"
                />
                <span class="blog__link-arrow">
                  <NuxtImg
                    src="/img/blogright.svg"
                    alt="5 jel, hogy itt az ideje ablakot cserélni"
                    class="blog__link-icon"
                  />
                </span>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
