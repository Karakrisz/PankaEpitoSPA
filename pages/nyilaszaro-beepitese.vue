<script setup>
// Meta adatok beállítása
useHead({
  title: 'Nyílászárók beépítése | Panka Plast',
  meta: [
    {
      name: 'description',
      content:
        'Professzionális nyílászáró beépítés, precíz és energiahatékony kivitelezés. Kérjen árajánlatot szakértő csapatunktól!',
    },
  ],
})
</script>

<template>
  <div class="service-subpage">
    <div class="service-subpage__header">
      <h2 class="service-subpage__title offer__title text-transform-uppercase">
        Nyílászárók beépítése
      </h2>
      <div class="service-subpage__breadcrumb">
        <NuxtLink href="/" class="service-subpage__breadcrumb-link"
          >Főoldal</NuxtLink
        >
        <span class="service-subpage__breadcrumb-separator">/</span>
        <span class="service-subpage__breadcrumb-current"
          >Nyílászárók beépítése</span
        >
      </div>
    </div>

    <div class="service-subpage__content">
      <div class="service-subpage__image-container">
        <NuxtImg
          src="/img/services/services6.svg"
          alt="Nyílászárók beépítése"
          class="service-subpage__image"
        />
      </div>

      <div class="service-subpage__description">
        <p class="service-subpage__text">
          A nyílászárók megfelelő beépítése kulcsfontosságú az
          energiahatékonyság, a biztonság és az élettartam szempontjából. Egy
          rosszul beépített ablak vagy ajtó huzatos, hőhidakat képez és gyorsan
          tönkremehet, ami extra kiadásokat jelenthet Önnek a jövőben.
        </p>

        <p class="service-subpage__text">
          Ha nem megfelelő szakértelemmel történik a beépítés, a legmodernebb és
          legjobb minőségű nyílászárók sem képesek teljes mértékben ellátni
          funkciójukat. Hőveszteség, páralecsapódás, szerkezeti deformáció –
          mindez elkerülhető egy precíz, szakértői beépítéssel!
        </p>

        <h4
          class="service-subpage__subtitle offer__title text-transform-uppercase"
        >
          Mit veszíthet, ha nem megfelelő a beépítés?
        </h4>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Huzatos, rosszul záródó ablakokat és ajtókat.
          </li>
          <li class="service-subpage__list-item">
            Magasabb fűtési és hűtési költségeket.
          </li>
          <li class="service-subpage__list-item">
            Idő előtti szerkezeti károsodást és deformációt.
          </li>
          <li class="service-subpage__list-item">
            Páralecsapódást és penészesedést.
          </li>
        </ul>

        <h3
          class="service-subpage__subtitle offer__title text-transform-uppercase"
        >
          Mit nyer, ha profi beépítést választ?
        </h3>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Maximális hőszigetelés és energiahatékonyság.
          </li>
          <li class="service-subpage__list-item">
            Hosszabb élettartam és kevesebb karbantartási költség.
          </li>
          <li class="service-subpage__list-item">
            Betörésbiztos, precízen illeszkedő nyílászárók.
          </li>
          <li class="service-subpage__list-item">
            Esztétikus megjelenés és tökéletes illeszkedés.
          </li>
        </ul>
      </div>

      <div class="service-subpage__cta">
        <h2 class="service-subpage__subtitle">Kérjen ingyenes árajánlatot!</h2>
        <p class="service-subpage__text">
          Ne bízza a véletlenre nyílászárói beépítését! Válassza szakértő
          csapatunkat, és élvezze az energiahatékony, esztétikus és hosszú
          élettartamú ablakok és ajtók előnyeit!
        </p>
        <NuxtLink href="/kapcsolat" class="service-subpage__button page-link"
          >Kapcsolatfelvétel</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
