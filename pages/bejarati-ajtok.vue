<script setup>
// Meta adatok beállítása
useHead({
  title: 'Bejárati ajtók | Panka Építő',
  meta: [
    {
      name: 'description',
      content:
        'Rövid határidős ablakok, erkélyajtók beszerzése, precíz és energiahatékony kivitelezés. Kérjen árajánlatot szakértő csapatunktól!',
    },
  ],
})
</script>
<template>
  <section class="services services--next-format">
    <div class="service-subpage service-subpage--next-format">
      <h2 class="services__title text-transform-uppercase f-400 text-color">
        Bejárati ajtók
      </h2>
      <div class="services__container grid-2">
        <div class="services__card services__card--next-formating">
          <NuxtLink to="/m-eco-bejarati-ajto">
            <div class="services__card-inner d-flex">
              <div class="services__icon">
                <div class="services__icon__elem"></div>
              </div>
              <div class="services__content">
                <p class="services__description f-700">M-ECO bejárati ajtók</p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="services__card services__card--next-formating">
          <NuxtLink to="/m-oc-bejarati-ajto">
            <div class="services__card-inner d-flex">
              <div class="services__icon">
                <div class="services__icon__elem"></div>
              </div>
              <div class="services__content">
                <p class="services__description f-700">M-OC bejárati ajtók
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="services__card services__card--next-formating">
          <NuxtLink to="/m-9000-bejarati-ajtok">
            <div class="services__card-inner d-flex">
              <div class="services__icon">
                <div class="services__icon__elem"></div>
              </div>
              <div class="services__content">
                <p class="services__description f-700">M-9000 bejárati ajtók
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
