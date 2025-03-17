<script setup></script>
<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__content position-relative">
        <NuxtImg
          src="/img/slider.webp"
          alt="Panka Plast Kft."
          class="hero__image"
          :srcset="['/img/slider.webp 1920w', '/img/slider.webp 100w']"
        />
        <div class="hero__content-overlay position-absolute">
          <NuxtImg
            src="/img/logo-next.svg"
            alt="Panka Plast Kft."
            class="hero__logo"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="services">
    <h2 class="services__title text-transform-uppercase f-400 text-color">
      Szolgáltatásaink
    </h2>
    <div class="services__container grid-2">
      <div class="services__card">
        <NuxtLink to="/ingyenes-helyszini-felmeres">
          <div class="services__card-inner d-flex">
            <div class="services__icon">
              <NuxtImg
                src="/img/services/services2.svg"
                alt="Panka Plast Kft."
                class="services__icon-image"
              />
            </div>
            <div class="services__content">
              <p class="services__description">
                Ingyenes helyszíni felmérés és szakmai tanácsadás.
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="services__card">
        <NuxtLink to="/nyilaszaro-ertekesites">
          <div class="services__card-inner d-flex">
            <div class="services__icon">
              <NuxtImg
                src="/img/services/services.svg"
                alt="Panka Plast Kft."
                class="services__icon-image"
              />
            </div>
            <div class="services__content">
              <p class="services__description">
                Cégünk kiváló minőségű nyílászárók forgalmazásával foglalkozik,
                legyen szó műanyag, fa vagy alumínium szerkezetekről.
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="services__card">
        <NuxtLink to="/nyilaszaro-beepitese">
          <div class="services__card-inner d-flex">
            <div class="services__icon">
              <NuxtImg
                src="/img/services/services6.svg"
                alt="Panka Plast Kft."
                class="services__icon-image"
              />
            </div>
            <div class="services__content">
              <p class="services__description">
                Professzionális nyílászáró beépítés, precíz és energiahatékony
                kivitelezés. Kérjen árajánlatot szakértő csapatunktól!
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="services__card">
        <NuxtLink to="/arnyekolastechnika">
          <div class="services__card-inner d-flex">
            <div class="services__icon">
              <NuxtImg
                src="/img/services/services7.svg"
                alt="Panka Plast Kft."
                class="services__icon-image"
              />
            </div>
            <div class="services__content">
              <p class="services__description">
                Modern árnyékolástechnikai megoldások: redőnyök, zsalúziák,
                napellenzők és más árnyékolók. Kérjen ajánlatot szakértőinktől!
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="services__card">
        <NuxtLink to="/belteri-ajto-ertekesites">
          <div class="services__card-inner d-flex">
            <div class="services__icon">
              <NuxtImg
                src="/img/services/door.svg"
                alt="Panka Plast Kft."
                class="services__icon-image"
              />
            </div>
            <div class="services__content">
              <p class="services__description">
                Prémium minőségű beltéri ajtók széles választéka. Esztétikus,
                tartós és funkcionális megoldások minden enteriőrhöz.
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="services__card">
        <NuxtLink to="/belteri-ajto-beepites">
          <div class="services__card-inner d-flex">
            <div class="services__icon">
              <NuxtImg
                src="/img/services/door2.svg"
                alt="Panka Plast Kft."
                class="services__icon-image"
              />
            </div>
            <div class="services__content">
              <p class="services__description">
                Szakszerű beltéri ajtó beépítés precíz kivitelezéssel. Tartós,
                esztétikus és tökéletesen illeszkedő ajtók otthonába.
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="services__card">
        <NuxtLink to="/pergola-naphalo-ertekesites">
          <div class="services__card-inner d-flex">
            <div class="services__icon">
              <NuxtImg
                src="/img/services/pergola1.svg"
                alt="Panka Plast Kft."
                class="services__icon-image"
              />
            </div>
            <div class="services__content">
              <p class="services__description">
                Modern pergolák és naphálók kültéri árnyékoláshoz. Esztétikus,
                tartós és energiahatékony megoldások teraszokra, kertekbe és
                erkélyekre.
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="services__card">
        <NuxtLink to="/aluminium-muanyag-redonyok">
          <div class="services__card-inner d-flex">
            <div class="services__icon">
              <NuxtImg
                src="/img/services/services3.svg"
                alt="Panka Plast Kft."
                class="services__icon-image"
              />
            </div>
            <div class="services__content">
              <p class="services__description">
                Alumínium és műanyag redőnyök gyártása, szerelése.
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <!-- <div class="services__card">
        <div class="services__card-inner d-flex">
          <div class="services__icon">
            <NuxtImg
              src="/img/services/services4.svg"
              alt="Panka Plast Kft."
              class="services__icon-image"
            />
          </div>
          <div class="services__content">
            <p class="services__description">
              Szúnyoghálók, harmonikaajtók, napernyők forgalmazása, szerelése.
            </p>
          </div>
        </div>
      </div>
      <div class="services__card">
        <div class="services__card-inner d-flex">
          <div class="services__icon">
            <NuxtImg
              src="/img/services/services5.svg"
              alt="Panka Plast Kft."
              class="services__icon-image"
            />
          </div>
          <div class="services__content">
            <p class="services__description">
              Motoros redőnyök szél, fény érzékelővel időkapcsolós
              távirányítóval.
            </p>
          </div>
        </div>
      </div> -->
      <!-- <div class="services__card services__card--highlighted">
        <div class="services__content">
          <h3 class="services__card-title">Összes szolgáltatás</h3>
        </div>
      </div> -->
    </div>
  </section>
  <section class="warranty">
    <div class="warranty__container">
      <div class="warranty__content">
        <div class="warranty__number">5</div>
        <div class="warranty__text">
          <h2 class="warranty__title">ÉV GARANCIA</h2>
          <p class="warranty__description">
            minden nyílászárónkra<br />
            és 2 év garancia az összes szúnyoghálónkra.
          </p>
        </div>
      </div>
      <p class="warranty__note">
        Kérje árajánlatunkat díjtalan helyszíni felmérés után.
      </p>
      <NuxtLink to="/" class="page-link page-link--format"
        >AJÁNLATKÉRÉS</NuxtLink
      >
    </div>
  </section>
  <section class="offer">
    <div class="offer__container">
      <div class="offer__container-inner d-flex">
        <div class="offer__image-wrapper">
          <NuxtImg
            src="/img/offer.webp"
            alt="Modern ablak kilátással és növényekkel"
            class="offer__image"
          />
        </div>
        <div class="offer__content">
          <h1 class="offer__title text-transform-uppercase">
            ABLAKCSERE? ITT AZ IDŐ, HOGY OTTHONA MEGÚJULJON!
          </h1>
          <p class="offer__subtitle">
            A legjobb döntés csak egy kattintásra van!
          </p>

          <div class="offer__info">
            <h2 class="offer__info-title">
              Miért válassza a Panka Építő Kft.-t?
            </h2>
            <p class="offer__info-text">
              Mert nálunk az Ön kényelme és elégedettsége az első.
            </p>

            <div class="offer__features">
              <p class="offer__features-main">
                Csúcsminőségű MARSHALL műanyag ablakok, ajtók és erkélyajtók,
                amelyek hosszú távon garantálják:
              </p>
              <ul class="offer__features-list">
                <li class="offer__features-item">
                  A kiváló hő- és hangszigetelést,
                </li>
                <li class="offer__features-item">Otthona biztonságát,</li>
                <li class="offer__features-item">
                  Az időtálló, esztétikus megjelenést.
                </li>
              </ul>
            </div>
          </div>

          <div class="offer__manufacturing">
            <h2 class="offer__manufacturing-title">
              Gyártás és beépítés egy kézből, szakértőktől!
            </h2>
            <p class="offer__manufacturing-text">
              Az ország bármely pontjára szállítunk, és tapasztalt kollégáink
              gondoskodnak a gyors és precíz beépítésről. Önnek nincs más dolga,
              mint élvezni a tökéletes eredményt.
            </p>
          </div>

          <p class="offer__cta-text">
            Kérjen ingyenes árajánlatot, és tegye meg az első lépést otthona
            megújulása felé!
          </p>
          <NuxtLink to="/" class="page-link">AJÁNLATKÉRÉS</NuxtLink>
        </div>
      </div>
      <div class="offer__container-inner d-flex">
        <div class="offer__content">
          <h2 class="offer__title text-transform-uppercase">
            Miért válassza a MARSHALL nyílászárókat?
          </h2>
          <p class="offer__subtitle">
            A legjobb döntés csak egy kattintásra van!
          </p>

          <h3 class="offer__info-title">
            Tökéletes megoldás, kompromisszumok nélkül!
          </h3>

          <p class="offer__subtitle">
            Ne várjon tovább! Forduljon hozzánk bizalommal, és tegye otthonát
            szebbé, melegebbé és biztonságosabbá!
          </p>

          <h4 class="offer__info-title">
            Kattintson, és kérje árajánlatunkat most!
          </h4>

          <NuxtLink to="/" class="page-link">AJÁNLATKÉRÉS</NuxtLink>
        </div>
        <div class="offer__image-wrapper">
          <NuxtImg
            src="/img/offer2.webp"
            alt="Modern ablak kilátással és növényekkel"
            class="offer__image"
          />
        </div>
      </div>
      <div class="offer__container-inner d-flex">
        <div class="offer__image-wrapper">
          <NuxtImg
            src="/img/offer.webp"
            alt="Modern ablak kilátással és növényekkel"
            class="offer__image"
          />
        </div>
        <div class="offer__content">
          <h2 class="offer__title text-transform-uppercase">
            A nyílászárók szakértője, ahol otthona új szintre lép!
          </h2>

          <h5 class="offer__info-title">Miben más a Panka Építő Kft.?</h5>

          <p class="offer__subtitle">
            Cégünk kiemelkedik a piacon a kiváló minőségű MARSHALL műanyag
            nyílászárók forgalmazásával, amelyek a legmodernebb nyugat-európai
            technológiával készülnek. Nemcsak csúcsminőséget kínálunk, hanem
            megfizethető árakat is, így kompromisszumok nélkül választhatja a
            legjobbat.
          </p>

          <p class="offer__subtitle">
            Szolgáltatásaink a teljes folyamatot lefedik: ingyenes helyszíni
            felmérés, szakmai tanácsadás és precíz beépítés az ország bármely
            pontján. Ügyfélközpontú szemléletünk és megbízható csapatunk
            biztosítja, hogy minden részlet az Ön igényei szerint valósuljon
            meg.
          </p>

          <h6 class="offer__info-title">
            Panka Építő Kft. – ahol a minőség és a gondoskodás találkozik!
          </h6>

          <NuxtLink to="/" class="page-link">AJÁNLATKÉRÉS</NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="blog">
    <div class="contact">
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
