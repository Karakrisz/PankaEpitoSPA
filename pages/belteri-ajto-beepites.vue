<script setup>
// Meta adatok beállítása
useHead({
  title: 'Beltéri ajtó beépítés | Panka Plast',
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
        Beltéri ajtó beépítés
      </h2>
      <div class="service-subpage__breadcrumb">
        <NuxtLink href="/" class="service-subpage__breadcrumb-link"
          >Főoldal</NuxtLink
        >
        <span class="service-subpage__breadcrumb-separator">/</span>
        <span class="service-subpage__breadcrumb-current"
          >Beltéri ajtó beépítés</span
        >
      </div>
    </div>

    <div class="service-subpage__content">
      <div class="service-subpage__image-container">
        <NuxtImg
          src="/img/services/door2.svg"
          alt="Beltéri ajtó beépítés"
          class="service-subpage__image"
        />
      </div>

      <div class="service-subpage__description">
        <p class="service-subpage__text">
          A beltéri ajtók szakszerű beépítése elengedhetetlen a megfelelő
          funkcionalitás, esztétika és hosszú élettartam szempontjából. Egy
          rosszul beépített ajtó akadályozhatja a megfelelő záródást,
          csökkentheti a hangszigetelő képességet és idő előtti szerkezeti
          problémákat okozhat.
        </p>

        <p class="service-subpage__text">
          Ha a beltéri ajtók nem pontosan illeszkednek, a nyikorgás, a hézagok
          és a rossz hőszigetelés mindennapi problémává válhatnak. Egy szakszerű
          beépítés viszont biztosítja a tökéletes záródást, a csendes működést
          és a hosszan tartó stabilitást.
        </p>

        <h2
          class="service-subpage__subtitle offer__title text-transform-uppercase"
        >
          Mit veszíthet, ha nem megfelelő a beépítés?
        </h2>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Gyenge illeszkedést és záródási problémákat.
          </li>
          <li class="service-subpage__list-item">
            Zajos működést, nyikorgó és nehezen mozgó ajtókat.
          </li>
          <li class="service-subpage__list-item">
            Gyenge hangszigetelést, amely csökkenti az otthon komfortját.
          </li>
          <li class="service-subpage__list-item">
            Későbbi szerkezeti deformációkat és szükséges utómunkálatokat.
          </li>
        </ul>

        <h2
          class="service-subpage__subtitle offer__title text-transform-uppercase"
        >
          Mit nyer, ha profi beépítést választ?
        </h2>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Precíz illeszkedést, amely hosszú távon is tökéletes működést
            biztosít.
          </li>
          <li class="service-subpage__list-item">
            Halk, könnyed ajtóhasználat, nyikorgás és akadás nélkül.
          </li>
          <li class="service-subpage__list-item">
            Esztétikus megjelenés, amely növeli az otthon összhangját.
          </li>
          <li class="service-subpage__list-item">
            Hatékonyabb hang- és hőszigetelést.
          </li>
        </ul>
      </div>

      <div class="service-subpage__cta">
        <h2 class="service-subpage__subtitle">Kérjen ingyenes árajánlatot!</h2>
        <p class="service-subpage__text">
          Ne kockáztasson rosszul beépített ajtókkal! Válassza a precizitást és
          a szakértelmet, hogy hosszú éveken át problémamentesen használhassa
          beltéri ajtóit.
        </p>
        <NuxtLink href="/" class="service-subpage__button page-link"
          >Kapcsolatfelvétel</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
