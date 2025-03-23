<script setup>
useHead({
  title: 'Ingyenes helyszíni felmérés és szakmai tanácsadás | Panka Építő',
  meta: [
    {
      name: 'description',
      content:
        'Szakértői tanácsadás és ingyenes helyszíni felmérés nyílászárók, árnyékolók és beltéri ajtók kiválasztásához. Kérjen időpontot szakembereinktől!',
    },
  ],
})
</script>

<template>
  <div class="service-subpage">
    <div class="service-subpage__header">
      <h2 class="service-subpage__title offer__title text-transform-uppercase">
        Ingyenes helyszíni felmérés és szakmai tanácsadás
      </h2>
      <div class="service-subpage__breadcrumb">
        <NuxtLink href="/" class="service-subpage__breadcrumb-link"
          >Főoldal</NuxtLink
        >
        <span class="service-subpage__breadcrumb-separator">/</span>
        <span class="service-subpage__breadcrumb-current"
          >Ingyenes helyszíni felmérés és tanácsadás</span
        >
      </div>
    </div>

    <div class="service-subpage__content">
      <div class="service-subpage__image-container">
        <NuxtImg
          src="/img/services/services2.svg"
          alt="Helyszíni felmérés és tanácsadás"
          class="service-subpage__image"
        />
      </div>

      <div class="service-subpage__description">
        <p class="service-subpage__text">
          Egy jól megválasztott nyílászáró vagy árnyékolástechnikai megoldás
          nemcsak az otthon kényelmét növeli, hanem hosszú távon energiát és
          költséget is megtakaríthat. Azonban a megfelelő termék kiválasztása
          nem mindig egyszerű – pontos méretek, szigetelési tulajdonságok,
          dizájn és funkcionális elvárások mind szerepet játszanak a döntésben.
        </p>

        <p class="service-subpage__text">
          Szakértő csapatunk ingyenes helyszíni felmérést és egyéni tanácsadást
          kínál, hogy biztosan az Ön igényeihez legjobban illeszkedő megoldást
          találjuk meg. A pontos mérések és szakértői ajánlások garantálják,
          hogy az Ön otthonához vagy vállalkozásához tökéletesen illeszkedő
          nyílászárók és árnyékolók kerüljenek beépítésre.
        </p>

        <h3
          class="service-subpage__subtitle offer__title text-transform-uppercase"
        >
          Mit nyer az ingyenes helyszíni felméréssel és tanácsadással?
        </h3>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Pontos méretezést és szakértői véleményt.
          </li>
          <li class="service-subpage__list-item">
            Személyre szabott megoldásokat az Ön igényeire szabva.
          </li>
          <li class="service-subpage__list-item">
            Költséghatékonyságot és hosszú távú megtakarítást.
          </li>
          <li class="service-subpage__list-item">
            Biztonságos és megbízható kivitelezést.
          </li>
        </ul>

        <h4
          class="service-subpage__subtitle offer__title text-transform-uppercase"
        >
          Mit veszíthet, ha nem veszi igénybe ezt a szolgáltatást?
        </h4>
        <ul class="service-subpage__list">
          <li class="service-subpage__list-item">
            Pontatlan méretezés miatti illeszkedési problémák.
          </li>
          <li class="service-subpage__list-item">
            Felesleges plusz költségek a rosszul választott termékek miatt.
          </li>
          <li class="service-subpage__list-item">
            Kényelmetlenséget és hosszabb kivitelezési időt.
          </li>
          <li class="service-subpage__list-item">
            Nem megfelelő energiahatékonyságot és szigetelést.
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
        <h2 class="service-subpage__subtitle">Foglaljon időpontot még ma!</h2>
        <p class="service-subpage__text">
          Ne hagyja, hogy rossz döntések befolyásolják otthona kényelmét és
          energiahatékonyságát! Vegye igénybe ingyenes helyszíni felmérésünket
          és szakértő tanácsadásunkat, hogy biztosan a legjobb megoldást
          válassza.
        </p>
        <NuxtLink href="/ajanlatkeres" class="service-subpage__button page-link"
          >Kapcsolatfelvétel</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
