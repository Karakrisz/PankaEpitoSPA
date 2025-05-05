<script setup>
const links = [
  { name: 'Főoldal', path: '/' },
  { name: 'PVC-ajtó, ablak', path: '/pvc-ajto-ablak' },
  { name: 'Alumínium-ajtó, ablak', path: '/' },
  { name: 'Árnyékolástechnika', path: '/' },
  { name: 'Beltéri ajók', path: '/belteri-ajtok' },
  { name: 'Kapcsolat', path: '/ajanlatkeres' },
]

const isMenuOpen = ref(false)
const isMobile = ref(false)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1199
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const route = useRoute()

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false
  }
)

watch(isMenuOpen, (newVal) => {
  if (isMobile.value && newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
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
          v-if="isMobile"
          @click="isMenuOpen = !isMenuOpen"
          class="hamburger"
          :class="{ open: isMenuOpen }"
          aria-label="Menü"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>
        <div
          class="menu-overlay"
          v-if="isMobile && isMenuOpen"
          @click="isMenuOpen = false"
        ></div>

        <nav :class="{ 'menu--open': isMenuOpen, menu: isMobile }" id="menu">
          <div v-if="isMobile" class="menu-header">
            <button @click="isMenuOpen = false" class="menu-close">
              <span>&times;</span>
            </button>
          </div>
          <ul id="menu__list" class="menu__list d-flex">
            <li v-for="link in links" :key="link.path" class="menu__list__li">
              <NuxtLink
                :to="link.path"
                :class="['menu__item text-color']"
                @click="isMobile ? (isMenuOpen = false) : null"
              >
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

<style scoped>
.hamburger,
.menu {
  background-color: #5a0001;
}

@media screen and (max-width: 767px) {
  .hamburger,
  .menu {
    background-color: #5a0001;
  }

  .menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    transform: translateX(100%);
    z-index: 1001;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
  }

  .menu--open {
    right: 0;
    transform: translateX(0);
  }

  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    backdrop-filter: blur(3px);
    transition: opacity 0.5s ease;
  }

  .menu-header {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
  }

  .menu-close {
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
}

.menu__list {
  padding: 1em;
  width: 100%;
}

@media screen and (max-width: 1199px) {
  .menu__list {
    padding: 1em 1.5em 2em;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }

  .menu__list__li {
    margin-bottom: 1.5em;
    width: 100%;
    transform: translateX(20px);
    opacity: 0;
    animation: slideIn 0.3s forwards;
    animation-delay: calc(0.1s * var(--i, 0));
  }

  @keyframes slideIn {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .menu--open .menu__list__li:nth-child(1) {
    --i: 1;
  }
  .menu--open .menu__list__li:nth-child(2) {
    --i: 2;
  }
  .menu--open .menu__list__li:nth-child(3) {
    --i: 3;
  }
  .menu--open .menu__list__li:nth-child(4) {
    --i: 4;
  }
  .menu--open .menu__list__li:nth-child(5) {
    --i: 5;
  }
  .menu--open .menu__list__li:nth-child(6) {
    --i: 6;
  }

  .menu__item {
    font-size: 1.1rem;
    padding: 0.8em 0;
    color: #fff;
    width: 100%;
    display: block;
    text-align: left;
    font-weight: 600;
    position: relative;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .menu__item::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -1px;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
  }

  .menu__item:hover::after,
  .menu__item.router-link-active::after {
    width: 100%;
  }

  .menu__item:hover {
    transform: translateX(5px);
  }
}

/* Tablet nézet (768px - 991px) */
@media (min-width: 768px) and (max-width: 991px) {
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 3.7em;
    height: 3.3em;
    border: none;
    cursor: pointer;
    padding: 0.7em;
    margin-right: 1em;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .hamburger:hover {
    background-color: #7a0002;
  }

  .bar {
    height: 0.23em;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .hamburger.open .bar:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }

  .hamburger.open .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open .bar:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
  }

  .menu {
    width: 80%;
  }

  .menu__item {
    font-size: 1rem;
  }
}

/* Nagyobb tablet és kisebb desktop nézet (991px - 1200px) */
@media (min-width: 991px) and (max-width: 1200px) {
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 3.7em;
    height: 3.3em;
    border: none;
    cursor: pointer;
    padding: 0.7em;
    margin-right: 1em;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .hamburger:hover {
    background-color: #7a0002;
  }

  .bar {
    height: 0.23em;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .hamburger.open .bar:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }

  .hamburger.open .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open .bar:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
  }

  .menu {
    width: 80%;
  }

  .menu__item {
    font-size: 1rem;
  }
}

/* Mobil hamburger menü (csak mobilnézetben) */
@media screen and (max-width: 767px) {
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 3.7em;
    height: 3.3em;
    border: none;
    cursor: pointer;
    padding: 0.7em;
    margin-right: 1em;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .hamburger:hover {
    background-color: #7a0002;
  }

  .bar {
    height: 0.23em;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .hamburger.open .bar:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }

  .hamburger.open .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open .bar:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
  }

  .menu {
    width: 80%;
  }

  .menu__item {
    font-size: 1rem;
  }
}

/* Nagyobb képernyőkön elrejtjük a hamburger és mobil menüt */
@media screen and (min-width: 1199px) {
  .hamburger {
    display: none;
  }

  .menu-overlay {
    display: none;
  }

  .menu-header {
    display: none;
  }
}
</style>
