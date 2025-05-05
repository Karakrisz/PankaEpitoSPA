<script setup>
// Meta adatok beállítása
useHead({
  title: 'PVC-ajtó, ablak | Panka Építő',
  meta: [
    {
      name: 'description',
      content:
        'Rövid határidős PVC-ajtó, ablak beszerzése, precíz és energiahatékony kivitelezés. Kérjen árajánlatot szakértő csapatunktól!',
    },
  ],
})
</script>
<template>
  <section class="services services--next-format">
    <div class="service-subpage service-subpage--next-format">
      <h2 class="services__title text-transform-uppercase f-400 text-color">
        PVC-ajtó, ablak
      </h2>
      <div class="services__container grid-2">
        <div class="services__card services__card--next-formating">
          <NuxtLink to="/ablakok-erkelyajtok">
            <div class="services__card-inner d-flex">
              <div class="services__icon">
                <div class="services__icon__elem"></div>
              </div>
              <div class="services__content">
                <p class="services__description f-700">Ablakok, erkélyajtók</p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="services__card services__card--next-formating">
          <NuxtLink to="#">
            <div class="services__card-inner d-flex">
              <div class="services__icon">
                <div class="services__icon__elem"></div>
              </div>
              <div class="services__content">
                <p class="services__description f-700">Bejárati ajtók</p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="services__card services__card--next-formating">
          <NuxtLink to="#">
            <div class="services__card-inner d-flex">
              <div class="services__icon">
                <div class="services__icon__elem"></div>
              </div>
              <div class="services__content">
                <p class="services__description f-700">Tolóajtók</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
