<script setup>
useHead({
  title: 'Beltéri ajtó értékesítés | Panka Plast',
  meta: [
    {
      name: 'description',
      content:
        'Prémium minőségű beltéri ajtók széles választéka. Esztétikus, tartós és funkcionális megoldások minden enteriőrhöz. Kérjen ajánlatot szakértőinktől!',
    },
  ],
})
</script>

<template>
  <div class="service-subpage">
    <div class="service-subpage__header">
      <h2 class="service-subpage__title offer__title text-transform-uppercase">Beltéri ajtó értékesítés</h2>
      <div class="service-subpage__breadcrumb">
        <NuxtLink href="/" class="service-subpage__breadcrumb-link"
          >Főoldal</NuxtLink
        >
        <span class="service-subpage__breadcrumb-separator">/</span>
        <span class="service-subpage__breadcrumb-current"
          >Beltéri ajtó értékesítés</span
        >
      </div>
    </div>

    <div class="service-subpage__content">
      <div class="service-subpage__image-container">
        <NuxtImg
          src="/img/services/door.svg"
          alt="Beltéri ajtók"
          class="service-subpage__image"
        />
      </div>

      <div class="service-subpage__description">
        <p class="service-subpage__text">
          A beltéri ajtók nem csupán funkcionális elemei otthonának vagy
          irodájának, hanem meghatározó szerepet játszanak a tér esztétikájában,
          hangszigetelésében és komfortérzetében is. Egy rosszul kiválasztott
          ajtó zavaró lehet a mindennapi használat során, míg egy jól
          megválasztott ajtó tökéletesen illeszkedik az enteriőrbe, miközben
          hosszú távon is megbízhatóan működik.
        </p>

        <p class="service-subpage__text">
          Ha régi, rosszul záródó vagy elavult stílusú beltéri ajtói vannak,
          akkor nap mint nap bosszankodhat a nyikorgás, a rossz hangszigetelés
          vagy az illeszkedési problémák miatt. Egy minőségi beltéri ajtó
          viszont nemcsak a komfortérzetet javítja, hanem az otthon értékét is
          növeli.
        </p>

        <h2 class="service-subpage__subtitle offer__title text-transform-uppercase">
          Mit veszíthet, ha rossz minőségű ajtót választ?
        </h2>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Zavaró nyikorgást és rossz illeszkedést.
          </li>
          <li class="service-subpage__list-item">
            Gyenge hangszigetelést és folyamatos zajszűrődést.
          </li>
          <li class="service-subpage__list-item">
            Alacsonyabb ingatlanértéket egy elavult megjelenés miatt.
          </li>
        </ul>

        <h4 class="service-subpage__subtitle offer__title text-transform-uppercase">
          Mit nyer, ha minőségi beltéri ajtót választ?
        </h4>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Tökéletes illeszkedést és tartósságot.
          </li>
          <li class="service-subpage__list-item">
            Stílusos, modern vagy klasszikus megjelenést otthonában.
          </li>
          <li class="service-subpage__list-item">
            Kiváló hangszigetelést és zajcsökkentést.
          </li>
          <li class="service-subpage__list-item">
            Egyedi méretben és kivitelben rendelhető modelleket.
          </li>
        </ul>

   
      </div>

      <div class="service-subpage__cta">
        <h2 class="service-subpage__subtitle">Kérjen ingyenes árajánlatot!</h2>
        <p class="service-subpage__text">
          Ne érje be kevesebbel! Válassza a minőségi, tartós és esztétikus
          beltéri ajtókat, és teremtsen tökéletes harmóniát otthonában!
        </p>
        <NuxtLink href="/" class="service-subpage__button page-link"
          >Kapcsolatfelvétel</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
