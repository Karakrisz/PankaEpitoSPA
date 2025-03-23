<script setup>
useHead({
  title: 'Pergola és napháló értékesítés | Panka Építő',
  meta: [
    {
      name: 'description',
      content:
        'Modern pergolák és naphálók kültéri árnyékoláshoz. Esztétikus, tartós és energiahatékony megoldások teraszokra, kertekbe és erkélyekre. Kérjen ajánlatot szakértőinktől!',
    },
  ],
})
</script>

<template>
  <div class="service-subpage">
    <div class="service-subpage__header">
      <h2 class="service-subpage__title">Pergola és Napháló értékesítés</h2>
      <div class="service-subpage__breadcrumb">
        <NuxtLink href="/" class="service-subpage__breadcrumb-link"
          >Főoldal</NuxtLink
        >
        <span class="service-subpage__breadcrumb-separator">/</span>
        <span class="service-subpage__breadcrumb-current"
          >Pergola és Napháló értékesítés</span
        >
      </div>
    </div>

    <div class="service-subpage__content">
      <div class="service-subpage__image-container">
        <NuxtImg
          src="/img/services/pergola1.svg"
          alt="Pergola és napháló"
          class="service-subpage__image"
        />
      </div>

      <div class="service-subpage__description">
        <p class="service-subpage__text">
          A pergolák és naphálók nemcsak esztétikai szempontból emelik otthona
          vagy üzleti ingatlana színvonalát, hanem jelentős védelmet is
          nyújtanak a napsugárzás ellen. Egy megfelelően kialakított kültéri
          árnyékolóval komfortosabbá teheti teraszát, erkélyét vagy kertjét,
          miközben csökkenti a beltér túlmelegedését és hozzájárul az
          energiatakarékossághoz.
        </p>

        <p class="service-subpage__text">
          Nyáron a perzselő napsütés ellehetetlenítheti a szabadban töltött
          időt, és a belső terek is gyorsan felmelegedhetnek. Egy jól
          megválasztott pergola vagy napháló azonban akár 5-10°C-kal is
          csökkentheti a hőmérsékletet a fedett területeken, így kellemes
          árnyékot biztosít, miközben csökkenti a légkondicionáló használatának
          szükségességét és az energiafogyasztást.
        </p>

        <h2
          class="service-subpage__subtitle offer__title text-transform-uppercase"
        >
          Mit veszíthet, ha nincs megfelelő árnyékolás?
        </h2>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Túlzott hőterhelést a teraszán vagy erkélyén.
          </li>
          <li class="service-subpage__list-item">
            Magasabb hűtési költségeket a beltér túlmelegedése miatt.
          </li>
          <li class="service-subpage__list-item">
            Korlátozott szabadtéri használhatóságot a nyári időszakban.
          </li>
          <li class="service-subpage__list-item">
            Gyorsabb bútor- és burkolatkopást az UV-sugárzás miatt.
          </li>
        </ul>

        <h2
          class="service-subpage__subtitle offer__title text-transform-uppercase"
        >
          Mit nyer egy prémium minőségű pergolával vagy naphálóval?
        </h2>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Kellemes hőmérsékletet és árnyékos kültéri pihenőhelyet.
          </li>
          <li class="service-subpage__list-item">
            Védelmet az UV-sugárzás ellen, amely óvja a bőrét és a bútorait.
          </li>
          <li class="service-subpage__list-item">
            Modern, esztétikus megjelenést otthonának vagy üzleti ingatlanának.
          </li>
          <li class="service-subpage__list-item">
            Hosszú élettartamot és minimális karbantartást igénylő megoldásokat.
          </li>
        </ul>
      </div>

      <div class="service-subpage__cta">
        <NuxtImg
          src="/img/logo-next.svg"
          alt="Panka Plast Kft."
          class="service-subpage__cta__img"
          height="100%"
        />
        <h2 class="service-subpage__subtitle">Kérjen ingyenes árajánlatot!</h2>
        <p class="service-subpage__text">
          Teremtse meg az ideális árnyékolási megoldást otthonában vagy
          vállalkozásában! Válassza minőségi pergoláinkat és naphálóinkat, és
          élvezze a komfortot egész évben.
        </p>
        <NuxtLink href="/ajanlatkeres" class="service-subpage__button page-link"
          >Kapcsolatfelvétel</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
