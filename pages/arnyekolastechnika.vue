<script setup>
useHead({
  title: 'Árnyékolástechnika | Panka Építő',
  meta: [
    {
      name: 'description',
      content:
        'Modern árnyékolástechnikai megoldások: redőnyök, zsalúziák, napellenzők és más árnyékolók. Kérjen ajánlatot szakértőinktől!',
    },
  ],
})
</script>

<template>
  <div class="service-subpage">
    <div class="service-subpage__header">
      <h2 class="service-subpage__title offer__title text-transform-uppercase">
        Árnyékolástechnika
      </h2>
      <div class="service-subpage__breadcrumb">
        <NuxtLink href="/" class="service-subpage__breadcrumb-link"
          >Főoldal</NuxtLink
        >
        <span class="service-subpage__breadcrumb-separator">/</span>
        <span class="service-subpage__breadcrumb-current"
          >Árnyékolástechnika</span
        >
      </div>
    </div>

    <div class="service-subpage__content">
      <div class="service-subpage__image-container">
        <NuxtImg
          src="/img/services/services7.svg"
          alt="Árnyékolástechnika"
          class="service-subpage__image"
        />
      </div>

      <div class="service-subpage__description">
        <p class="service-subpage__text">
          Az árnyékolástechnika nem csupán esztétikai kérdés, hanem az egyik
          legfontosabb megoldás az otthonok komfortjának és
          energiahatékonyságának növelésére. Egy jól megválasztott árnyékoló
          rendszer nemcsak megakadályozza a túlmelegedést nyáron, hanem
          csökkenti a hőveszteséget télen, így jelentős mértékben hozzájárul az
          energiatakarékossághoz.
        </p>

        <p class="service-subpage__text">
          Ha nincs megfelelő árnyékolás az otthonában, akkor a nyári hónapokban
          akár 5-10°C-kal is melegebb lehet a beltérben, amely kellemetlenné
          teheti a mindennapokat, és fokozott klímahasználatra kényszerítheti
          Önt, növelve ezzel az energiafogyasztást és a költségeket.
        </p>

        <h2
          class="service-subpage__subtitle offer__title text-transform-uppercase"
        >
          Mit veszíthet, ha nincs megfelelő árnyékolás?
        </h2>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Túlmelegedő belső terek, magas klímahasználati költségek.
          </li>
          <li class="service-subpage__list-item">
            Zavaró fényviszonyok és kellemetlen hőérzet.
          </li>
          <li class="service-subpage__list-item">
            Kevesebb magánélet, mert az ablakok teljesen szabadon hagyják a
            kilátást.
          </li>
        </ul>

        <h2
          class="service-subpage__subtitle offer__title text-transform-uppercase"
        >
          Mit nyer egy jól megválasztott árnyékolási rendszerrel?
        </h2>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Akár 30%-kal alacsonyabb hűtési költségek a nyári hónapokban.
          </li>
          <li class="service-subpage__list-item">
            Kellemes, árnyékos beltér a legforróbb napokon is.
          </li>
          <li class="service-subpage__list-item">
            Nagyobb privát szféra és fokozott biztonság.
          </li>
          <li class="service-subpage__list-item">
            Esztétikus, modern megjelenés az ingatlan értékének növelése
            érdekében.
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
          Ne hagyja, hogy a nyári hőség vagy a téli hideg megnehezítse
          mindennapjait! Válassza prémium árnyékolástechnikai megoldásainkat, és
          teremtsen tökéletes otthoni komfortot energiatakarékosan.
        </p>
        <NuxtLink href="/ajanlatkeres" class="service-subpage__button page-link"
          >Kapcsolatfelvétel</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
