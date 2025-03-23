<script setup>
useHead({
  title: 'Ajánlatkérés',
})
</script>

<template>
  <section class="blog">
    <div class="contact contact--subpage-format">
      <div class="contact__container">
        <h2 class="contact__title">LÉPJÜNK KAPCSOLATBA!</h2>
        <form class="contact__form d-flex">
          <div class="contact__form-row d-flex">
            <div class="contact__form-group">
              <input
                type="text"
                id="name"
                name="name"
                class="contact__input"
                placeholder="Név*"
                required
              />
            </div>
            <div class="contact__form-group">
              <input
                type="email"
                id="email"
                name="email"
                class="contact__input"
                placeholder="E-mail*"
                required
              />
            </div>
          </div>
          <div class="contact__form-row d-flex">
            <div class="contact__form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                class="contact__input"
                placeholder="Telefonszám"
              />
            </div>
            <div class="contact__form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                class="contact__input"
                placeholder="Tárgy*"
                required
              />
            </div>
          </div>

          <div class="contact__form-group">
            <textarea
              id="message"
              name="message"
              class="contact__textarea"
              placeholder="Üzenet"
              rows="6"
            ></textarea>
          </div>
          <div class="contact__footer d-flex">
            <div class="contact__consent">
              <p class="contact__consent-text">
                A küldés gombra kattintva elfogadja az
                <a href="#" class="contact__consent-link"
                  >Adatkezelési Tájékoztatót</a
                >
              </p>
            </div>
            <button type="submit" class="contact__submit">
              Küldés
              <NuxtImg
                src="/img/mailsend.svg"
                alt="5 jel, hogy itt az ideje ablakot cserélni"
                class="contact__submit-icon"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="blog__container">
      <h2 class="blog__title f-400">CIKKEK</h2>
      <div class="blog__grid grid-3">
        <article class="blog__card">
          <div class="blog__image-wrapper">
            <NuxtImg
              src="/img/offer.webp"
              alt="Energiatakarékos otthon nyílászárókkal"
              class="blog__image"
            />
          </div>
          <div class="blog__content">
            <h3 class="blog__card-title">
              Energiatakarékos otthon nyílászárókkal
            </h3>
            <p class="blog__excerpt">
              Fedezze fel, hogyan csökkentheti otthona rezsidíját a megfelelő
              hőszigetelésű ablakokkal és ajtókkal!
            </p>
            <NuxtLink to="/" class="blog__link">
              <span class="blog__link-arrow">
                <NuxtImg
                  src="/img/blogright.svg"
                  alt="5 jel, hogy itt az ideje ablakot cserélni"
                  class="blog__link-icon"
                />
              </span>
            </NuxtLink>
          </div>
        </article>

        <article class="blog__card">
          <div class="blog__image-wrapper">
            <NuxtImg
              src="/img/offer.webp"
              alt="Műanyag vs. fa nyílászárók"
              class="blog__image"
            />
          </div>
          <div class="blog__content">
            <h3 class="blog__card-title">Műanyag vs. fa nyílászárók</h3>
            <p class="blog__excerpt">
              Műanyag vagy fa? Ez a kérdés sokakat foglalkoztat, amikor
              nyílászárókat választanak. Ebben a cikkben összehasonlítjuk a két
              anyag tulajdonságait, előnyeit és hátrányait.
            </p>
            <NuxtLink to="/" class="blog__link">
              <span class="blog__link-arrow">
                <NuxtImg
                  src="/img/blogright.svg"
                  alt="5 jel, hogy itt az ideje ablakot cserélni"
                  class="blog__link-icon"
                />
              </span>
            </NuxtLink>
          </div>
        </article>

        <article class="blog__card">
          <div class="blog__image-wrapper">
            <NuxtImg
              src="/img/offer.webp"
              alt="5 jel, hogy itt az ideje ablakot cserélni"
              class="blog__image"
            />
          </div>
          <div class="blog__content">
            <h3 class="blog__card-title">
              5 jel, hogy itt az ideje ablakot cserélni
            </h3>
            <p class="blog__excerpt">
              A nyílászárók állapota nagy hatással van az otthon komfortjára és
              energiahatékonyságára. Blogunkban összegyűjtöttük azt az 5
              leggyakoribb jelet, amelyek arra utalnak, hogy az ablakcsere
              elkerülhetetlenné vált.
            </p>
            <NuxtLink to="/" class="blog__link">
              <span class="blog__link-arrow">
                <NuxtImg
                  src="/img/blogright.svg"
                  alt="5 jel, hogy itt az ideje ablakot cserélni"
                  class="blog__link-icon"
                />
              </span>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact--subpage-format {
  margin-top: 13%;
}
</style>
