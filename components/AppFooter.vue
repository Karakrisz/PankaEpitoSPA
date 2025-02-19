<script setup></script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__branding">
        <NuxtImg
          src="/img/hero-logo.svg"
          alt="Panka Plast logo"
          class="footer__logo"
        />
      </div>
      <div class="footer__contact">
        <a href="tel:+36703337387" class="footer__contact-link">
          <i class="fas fa-phone"></i>
          06 70 333 7387
        </a>
        <a href="mailto:info@ablaktechnika.com" class="footer__contact-link">
          <i class="fas fa-envelope"></i>
          info@ablaktechnika.com
        </a>
      </div>

      <nav class="footer__nav">
        <ul class="footer__menu d-flex">
          <li class="footer__menu-item">
            <a href="#" class="footer__menu-link">Főoldal</a>
          </li>
          <li class="footer__menu-item">
            <a href="#" class="footer__menu-link">PVC-ajtó, ablak</a>
          </li>
          <li class="footer__menu-item">
            <a href="#" class="footer__menu-link">Aluminium-ajtó, ablak</a>
          </li>
          <li class="footer__menu-item">
            <a href="#" class="footer__menu-link">Árnyékolástechnika</a>
          </li>
          <li class="footer__menu-item">
            <a href="#" class="footer__menu-link">Beltéri ajtók</a>
          </li>
          <li class="footer__menu-item">
            <a href="#" class="footer__menu-link">Kapcsolat</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
