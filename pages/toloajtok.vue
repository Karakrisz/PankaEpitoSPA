<script setup>
// Meta adatok beállítása
useHead({
  title: 'Tolóajtók | Panka Építő',
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
        Tolóajtók
      </h2>
      <div class="services__container grid-2">
        <div class="services__card services__card--next-formating">
          <NuxtLink to="/m-9000-emelo-tolo-ajto">
            <div class="services__card-inner d-flex">
              <div class="services__icon">
                <div class="services__icon__elem"></div>
              </div>
              <div class="services__content">
                <p class="services__description f-700">M-9000 emelő-toló ajtók
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="services__card services__card--next-formating">
          <NuxtLink to="/m-9000-tolo-buko-ajtok">
            <div class="services__card-inner d-flex">
              <div class="services__icon">
                <div class="services__icon__elem"></div>
              </div>
              <div class="services__content">
                <p class="services__description f-700">Toló-bukó ajtók
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="services__card services__card--next-formating">
          <NuxtLink to="/smoovio-toloajto">
            <div class="services__card-inner d-flex">
              <div class="services__icon">
                <div class="services__icon__elem"></div>
              </div>
              <div class="services__content">
                <p class="services__description f-700">Smoovio Slide tolóajtó
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
