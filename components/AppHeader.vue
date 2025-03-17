<script setup>
const links = [
  { name: 'Főoldal', path: '/' },
  { name: 'PVC-ajtó, ablak', path: '/' },
  { name: 'Alumínium-ajtó, ablak', path: '/' },
  { name: 'Árnyékolástechnika', path: '/' },
  { name: 'Beltéri ajók', path: '/' },
  { name: 'Kapcsolat', path: '/' },
]

const isMenuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="header-content d-flex position-relative bg-color-w">
      <div class="logo-box header-content__logo-box">
        <NuxtLink to="/" class="header-content__logo-box__link">
          <NuxtImg
            src="/img/logo-next.svg"
            alt="Panka Plast Kft."
            class="header-content__logo-box__link__img"
            height="100%"
          />
        </NuxtLink>
      </div>
      <div class="nav-box header-content__nav-box d-flex">
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="hamburger"
          :class="{ open: isMenuOpen }"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>
        <nav :class="{ 'menu--open': isMenuOpen, menu: true }" id="menu">
          <ul id="menu__list" class="menu__list d-flex">
            <li v-for="link in links" :key="link.path" class="menu__list__li">
              <NuxtLink :to="link.path" :class="['menu__item text-color']">
                <template v-if="link.imagePath">
                  <NuxtImg
                    class="menu__list__li__img"
                    height="100%"
                    :src="link.imagePath"
                    :alt="link.name"
                  />
                </template>
                <template v-else>
                  {{ link.name }}
                </template>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-content__phone-box text-end">
        <NuxtLink
          to="/ajanlatkeres"
          class="header-content__phone-box__link page-link text-transform-uppercase"
        >
          Ajánlatkérés
        </NuxtLink>
      </div>
    </div>
    <div class="header-content__link-box bg-color-w position-relative d-flex">
      <div class="header-content__link-box__content">
        <a
          href="tel:+36703337387"
          class="header-content__link-box__link d-flex text-color"
        >
          <img
            src="/img/phone.svg"
            alt="Panka Plast Kft."
            class="header-content__link-box__link__img"
            height="100%"
          />
          06 70 333 7387
        </a>
      </div>
      <div class="header-content__link-box__content">
        <a
          href="mailto:info@ablaktechnika.com"
          class="header-content__link-box__link d-flex text-color"
        >
          <img
            src="/img/mail.svg"
            alt="Panka Plast Kft."
            class="header-content__link-box__link__img"
            height="100%"
          />
          info@ablaktechnika.com
        </a>
      </div>
    </div>
  </header>
</template>
