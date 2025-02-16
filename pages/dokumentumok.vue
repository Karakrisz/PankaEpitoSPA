<script setup lang="ts">
import { ref, computed } from 'vue'

useHead({
  title: 'Dokumentumok',
})

const documents = ref([
  '/document/eu_baleseti_bejelento.pdf',
  '/document/felmondo_nyilatkozat_nem_elet.pdf',
  '/document/gk_adasveteli_toltheto.pdf',
  '/document/gk_kolcsonadasi_eng_hun.pdf',
  '/document/uzembentartszerz.pdf',
])

const showDocuments = ref(false)
</script>

<template>
  <div class="subpage-content subpage-content-document text-center">
    <section>
      <button
        class="subpage-content-document__btn text-transform-uppercase text-color-w f-600 cursor"
        @click="showDocuments = !showDocuments"
      >
        Dokumentumok megjelenítése
      </button>
      <ul class="subpage-content-document__ul" v-if="showDocuments">
        <li
          class="subpage-content-document__ul__li"
          v-for="doc in documents"
          :key="doc"
        >
          <a
            class="subpage-content-document__ul__li__link text-color"
            :href="doc"
            target="_blank"
            download
            >{{ doc.split('/').pop() }}</a
          >
        </li>
      </ul>
    </section>
  </div>
</template>
