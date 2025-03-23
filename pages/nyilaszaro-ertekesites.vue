<script setup>
useHead({
  title: 'Nyílászárók forgalmazása | Panka Építő',
  meta: [
    {
      name: 'description',
      content:
        'Kiváló minőségű nyílászárók forgalmazása, műanyag, fa és alumínium kivitelben. Kérjen árajánlatot szakértő csapatunktól!',
    },
  ],
})
</script>

<template>
  <div class="service-subpage">
    <div class="service-subpage__header">
      <h2 class="service-subpage__title offer__title text-transform-uppercase">
        Nyílászárók forgalmazása
      </h2>
      <div class="service-subpage__breadcrumb">
        <NuxtLink href="/" class="service-subpage__breadcrumb-link"
          >Főoldal</NuxtLink
        >
        <span class="service-subpage__breadcrumb-separator">/</span>
        <span class="service-subpage__breadcrumb-current"
          >Nyílászárók forgalmazása</span
        >
      </div>
    </div>

    <div class="service-subpage__content">
      <div class="service-subpage__image-container">
        <NuxtImg
          src="/img/services/services.svg"
          alt="Nyílászárók"
          class="service-subpage__image"
        />
      </div>

      <div class="service-subpage__description">
        <p class="service-subpage__text">
          Tudta, hogy otthona energiafogyasztásának akár 30-40%-a is kárba
          veszhet az elavult nyílászárók miatt? Ez évente több tízezer forint
          feleslegesen kidobott pénzt jelent, amelyet akár családja kényelmére,
          utazásra vagy egyéb hasznos dolgokra is fordíthatna.
        </p>

        <p class="service-subpage__text">
          Ha régi, rosszul szigetelő ablakai és ajtói vannak, akkor szó szerint
          az utcát fűti télen, és a nyári forróságot engedi be otthonába. A
          huzat, a hideg falak és az állandóan ingadozó belső hőmérséklet
          nemcsak kellemetlen, hanem hosszú távon az ingatlan állapotára és a
          közérzetére is negatív hatással van.
        </p>

        <p class="service-subpage__text">
          Most képzelje el, milyen lenne egy olyan otthonban élni, ahol télen
          kellemes meleg, nyáron hűs levegő uralkodik, anélkül, hogy a klíma
          vagy a fűtés magas számlákat eredményezne. Egy olyan házban, ahol a
          csend és a nyugalom természetes, mert az új nyílászárók kizárják a
          kinti zajokat. Egy olyan ingatlanban, amelynek értéke nő, nem pedig
          csökken az idő múlásával.
        </p>

        <h3
          class="service-subpage__subtitle offer__title text-transform-uppercase"
        >
          Mit veszíthet, ha nem cselekszik időben?
        </h3>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Évente több tízezer forintot az elpazarolt energiára.
          </li>
          <li class="service-subpage__list-item">
            Folyamatos huzatot és hőmérsékletingadozást otthonában.
          </li>
          <li class="service-subpage__list-item">
            Alacsonyabb ingatlanértéket, ha később értékesítené.
          </li>
          <li class="service-subpage__list-item">
            Zajos környezetet, amely zavarhatja a pihenést és az életminőséget.
          </li>
        </ul>

        <h4
          class="service-subpage__subtitle offer__title text-transform-uppercase"
        >
          Mit nyerhet?
        </h4>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Akár 40%-kal alacsonyabb fűtési és hűtési költségek.
          </li>
          <li class="service-subpage__list-item">
            Nyugodt, csendes otthon, ahol a külső zajok nem zavarják pihenését.
          </li>
          <li class="service-subpage__list-item">
            Nagyobb biztonság a betörésbiztos nyílászáróknak köszönhetően.
          </li>
          <li class="service-subpage__list-item">
            Huzatmentes, kellemes hőmérséklet minden évszakban.
          </li>
          <li class="service-subpage__list-item">
            Ingatlanának értéknövekedése modern, energiahatékony nyílászárókkal.
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
        <h2 class="service-subpage__subtitle">
          Kérjen ingyenes árajánlatot még ma!
        </h2>
        <p class="service-subpage__text">
          Ne hagyja, hogy régi nyílászárói tovább növeljék kiadásait! Kérjen
          személyre szabott ajánlatot még ma, és élvezze az energiahatékony
          otthon minden előnyét!
        </p>
        <NuxtLink to="/ajanlatkeres" class="service-subpage__button page-link"
          >Kapcsolatfelvétel</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
