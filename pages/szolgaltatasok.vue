<script setup>
useHead({
  title: 'Szolgáltatások',
})
</script>

<template>
  <div class="subpage-content subpage-services-content">
    <section>
      <div class="services-content position-relative">
        <div class="page__header page__header--right">
          <h3 class="page__header__h3 text-color-w text-transform-uppercase">
            SZOLGÁLTATÁSOK
          </h3>
        </div>

        <div class="servive-grid servive-grid--margin-bottom grid-3">
          <div class="service-box bg-color-w position-relative">
            <NuxtImg
              class="service-box__img"
              src="/img/services/gepjarmubiztositas.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                Gépjármű biztosítás
              </h3>
              <p class="service-box__description text-color">
                Nyugodt utazást és védelmet nyújt minden kilométeren,
                balesetektől kezdve a váratlan meghibásodásokig.
              </p>
            </div>
            <div class="service-box__link-box position-absolute">
              <NuxtLink
                to="gepjarmu-biztositas"
                class="page-link text-color-w f-600"
                >Tovább
                <NuxtImg
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="service-box bg-color-w position-relative">
            <NuxtImg
              class="service-box__img"
              src="/img/services/utazasbiztositas.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                UTASbiztosítás
              </h3>
              <p class="service-box__description text-color">
                A gondtalan kalandok záloga, amely biztonságot nyújt a világ
                bármely pontján, legyen szó váratlan eseményekről vagy
                egészségügyi sürgősségekről.
              </p>
            </div>
            <div class="service-box__link-box position-absolute">
              <NuxtLink to="utasbiztositas" class="page-link text-color-w f-600"
                >Tovább
                <NuxtImg
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="service-box bg-color-w position-relative">
            <NuxtImg
              class="service-box__img"
              src="/img/services/tanulobiztositas.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                TANULÓbiztosítás
              </h3>
              <p class="service-box__description text-color">
                A tanulóbiztosítás biztos háttér a diákok számára, hogy
                nyugodtan összpontosíthassanak tanulmányaikra, miközben
                védelemben részesülnek az élet váratlan eseményei ellen.
              </p>
            </div>
            <div class="service-box__link-box position-absolute">
              <NuxtLink
                to="tanulobiztositas"
                class="page-link text-color-w f-600"
                >Tovább
                <NuxtImg
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="servive-grid grid-3">
          <div class="service-box bg-color-w position-relative">
            <NuxtImg
              class="service-box__img"
              src="/img/services/rendezveny_biztositas.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                RENDEZVÉNYSZOLGÁLAT
              </h3>
              <p class="service-box__description text-color">
                Biztosításaink magukban foglalják a felelősségbiztosítást, a
                rendezvény helyszínének védelmét, valamint az egyedi igényekhez
                igazodó kockázatkezelést, biztosítva ezzel a rendezvény
                zavartalan lebonyolítását..
              </p>
            </div>
            <div class="service-box__link-box position-absolute">
              <NuxtLink
                to="rendezvenyszolgalat"
                class="page-link text-color-w f-600"
                >Tovább
                <NuxtImg
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="service-box bg-color-w position-relative">
            <NuxtImg
              class="service-box__img"
              src="/img/services/karbejelentes.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                Kárbejelentés
              </h3>
              <p class="service-box__description text-color">
                A kárbejelentési folyamatunk során a biztosítási alkusz
                szakértői segítséget és támogatást nyújtanak az ügyfeleknek,
                hogy a kárbejelentés gyorsan és zökkenőmentesen történjen.
              </p>
            </div>
            <div class="service-box__link-box position-absolute">
              <NuxtLink to="karbejentes" class="page-link text-color-w f-600"
                >Tovább
                <NuxtImg
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="service-box bg-color-w position-relative">
            <NuxtImg
              class="service-box__img"
              src="/img/services/szemelyes_tanacsadas.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                Személyes tanácsadás
              </h3>
              <p class="service-box__description text-color">
                személyre szabott tanácsadásunkkal biztosítjuk, hogy minden
                ügyfél megkapja az egyéni igényeinek megfelelő biztosítási
                tanácsokat és megoldásokat, biztosítva ezzel az optimális
                védelmet és nyugalmat.
              </p>
            </div>
            <div class="service-box__link-box position-absolute">
              <NuxtLink
                to="szemelyes-tanacsadas"
                class="page-link text-color-w f-600"
                >Tovább
                <NuxtImg
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
