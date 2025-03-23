<script setup>
// Meta adatok beállítása
useHead({
  title: 'Beltéri ajtók | Panka Építő',
  meta: [
    {
      name: 'description',
      content:
        'Szakszerű beltéri ajtó beépítés precíz kivitelezéssel. Tartós, esztétikus és tökéletesen illeszkedő ajtók otthonába. Kérjen ajánlatot szakértőinktől!',
    },
  ],
})
</script>

<template>
  <div class="service-subpage">
    <div class="service-subpage__header">
      <h2 class="service-subpage__title offer__title text-transform-uppercase">
        Porta beltéri ajtók katalógusa
      </h2>
      <div class="service-subpage__breadcrumb">
        <NuxtLink href="/" class="service-subpage__breadcrumb-link"
          >Főoldal</NuxtLink
        >
        <span class="service-subpage__breadcrumb-separator">/</span>
        <span class="service-subpage__breadcrumb-current"
          >Beltéri ajtók 2024</span
        >
      </div>
    </div>

    <div class="service-subpage__content">
      <div class="pdf-container">
        <p class="pdf-description">
          Az alábbi katalógusban megtekintheti a teljes Porta beltéri ajtó
          kínálatunkat. A katalógus közvetlenül a gyártó legfrissebb verzióját
          jeleníti meg.
        </p>

        <div class="pdf-embed">
          <iframe
            src="https://www2.porta.com.pl/data/download//Katal%C3%B3gus_PORTA_2024_HU_www.pdf"
            width="100%"
            height="600"
            style="border: 1px solid #e0e0e0; border-radius: 4px"
            title="Porta beltéri ajtók katalógusa"
          >
          </iframe>
        </div>

        <div class="pdf-download">
          <a
            href="https://www2.porta.com.pl/data/download//Katal%C3%B3gus_PORTA_2024_HU_www.pdf"
            target="_blank"
            class="page-link"
          >
            Katalógus letöltése
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pdf-container {
  padding: 20px 0;
}

.pdf-description {
  margin-bottom: 20px;
}

.pdf-embed {
  margin-bottom: 20px;
}

.pdf-download {
  text-align: center;
  margin: 20px 0;
}

.download-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4a4a4a;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.download-btn:hover {
  background-color: #333333;
}
</style>
