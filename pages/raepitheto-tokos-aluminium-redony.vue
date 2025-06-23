<script setup>
useHead({
  title: 'Ráépíthető tokos alumínium redőny',
  meta: [
    {
      name: 'description',
      content: 'Ráépíthető tokos alumínium redőny részletes információi.',
    },
  ],
})

const htmlContent = ref('')
const contentIframe = ref(null)
const iframeHeight = ref('1000px')
const isClient = ref(false)

const {
  data,
  pending,
  error: fetchError,
} = await useFetch('/api/raepitheto-tokos-aluminium-redony')

htmlContent.value = data.value

const seoHtmlContent = computed(() => {
  if (!htmlContent.value) return ''

  if (
    typeof htmlContent.value === 'string' &&
    htmlContent.value.includes('<body')
  ) {
    const bodyMatch = htmlContent.value.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
    if (bodyMatch && bodyMatch[1]) {
      return bodyMatch[1].trim()
    }
  }

  return htmlContent.value
})

const adjustIframeHeight = () => {
  if (!contentIframe.value || !isClient.value) return

  try {
    setTimeout(() => {
      const iframe = contentIframe.value

      if (
        iframe.contentWindow &&
        iframe.contentDocument &&
        iframe.contentDocument.body
      ) {
        const height = iframe.contentDocument.body.scrollHeight

        if (height > 100) {
          iframeHeight.value = `${height + 50}px`
        }

        const style = iframe.contentDocument.createElement('style')
        style.textContent = `
          body, html {
            overflow: hidden !important;
            scrollbar-width: none;
            -ms-overflow-style: none;
            margin: 0;
            padding: 0;
          }
          ::-webkit-scrollbar {
            display: none;
            width: 0 !important;
          }
        `
        iframe.contentDocument.head.appendChild(style)

        const resizeObserver = new ResizeObserver(() => {
          const newHeight = iframe.contentDocument.body.scrollHeight
          iframeHeight.value = `${newHeight + 50}px`
        })

        resizeObserver.observe(iframe.contentDocument.body)

        const config = { attributes: true, childList: true, subtree: true }
        const observer = new MutationObserver(() => {
          const newHeight = iframe.contentDocument.body.scrollHeight
          iframeHeight.value = `${newHeight + 50}px`
        })

        observer.observe(iframe.contentDocument.body, config)
      }
    }, 300)
  } catch (e) {
    console.error('Hiba az iframe méretezése során:', e)
  }
}

onMounted(() => {
  isClient.value = true
  window.addEventListener('resize', adjustIframeHeight)
  adjustIframeHeight()
})

onUnmounted(() => {
  if (isClient.value) {
    window.removeEventListener('resize', adjustIframeHeight)
  }
})
</script>

<template>
  <div class="service-subpage service-subpage--format">
    <div v-if="pending" class="loading-indicator">Adatok betöltése...</div>
    <div v-else-if="fetchError" class="error-message">
      Hiba történt: {{ fetchError }}
    </div>

    <div
      v-if="seoHtmlContent"
      class="seo-content"
      v-html="seoHtmlContent"
    ></div>

    <div v-if="htmlContent" class="content-wrapper">
      <iframe
        ref="contentIframe"
        :srcdoc="htmlContent"
        width="100%"
        :height="iframeHeight"
        frameborder="0"
        scrolling="no"
        class="content-iframe"
        title="M-ECO ablakok és erkélyajtók"
        @load="adjustIframeHeight"
      ></iframe>
    </div>
    <div class="link-box">
      <NuxtLink
        to="/arnyekolastechnika-ajanlatok"
        class="go-back-button go-back-button--formating"
      >
        <span class="go-back-button__icon">&#8592;</span>
        <span class="go-back-button__text">Vissza az árnyékolástechnikákhoz</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.seo-content {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.loading-indicator {
  text-align: center;
  padding: 2rem;
}

.error-message {
  color: red;
  padding: 1rem;
  border: 1px solid red;
  background-color: #fff0f0;
  margin: 1rem 0;
}

.content-iframe {
  border: none;
  width: 100%;
}
</style>
