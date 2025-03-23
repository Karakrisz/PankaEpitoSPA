<script setup></script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__branding">
        <NuxtImg
          src="/img/logo-next.svg"
          alt="Panka Plast logo"
          class="footer__logo bg-color-w"
        />
      </div>
      <div class="footer__contact">
        <a href="tel:+36703337387" class="footer__contact-link">
          <NuxtImg
            src="/img/footerphone.svg"
            alt="5 jel, hogy itt az ideje ablakot cserélni"
            class="footer__contact-icon"
          />
          06 70 333 7387
        </a>
        <a href="mailto:info@ablaktechnika.com" class="footer__contact-link">
          <NuxtImg
            src="/img/footermail.svg"
            alt="5 jel, hogy itt az ideje ablakot cserélni"
            class="footer__contact-icon"
          />
          info@ablaktechnika.com
        </a>
      </div>

      <nav class="footer__nav">
        <ul class="footer__menu d-flex">
          <li class="footer__menu-item">
            <NuxtLink to="/" class="footer__menu-link">Főoldal</NuxtLink>
          </li>
          <li class="footer__menu-item">
            <NuxtLink to="/" class="footer__menu-link">PVC-ajtó, ablak</NuxtLink>
          </li>
          <li class="footer__menu-item">
            <NuxtLink to="/" class="footer__menu-link">Aluminium-ajtó, ablak</NuxtLink>
          </li>
          <li class="footer__menu-item">
            <NuxtLink to="/" class="footer__menu-link">Árnyékolástechnika</NuxtLink>
          </li>
          <li class="footer__menu-item">
            <NuxtLink to="/belteri-ajtok" class="footer__menu-link">Beltéri ajtók</NuxtLink>
          </li>
          <li class="footer__menu-item">
            <NuxtLink to="/ajanlatkeres" class="footer__menu-link">Kapcsolat</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
