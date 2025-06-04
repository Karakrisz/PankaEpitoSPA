<!-- Módosítandó script részlet -->
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Visszaszámláló számítása - 30 nap a mai naptól
const countdownDate = computed(() => {
  const today = new Date()
  const futureDate = new Date()

  // 30 napot adunk a mai dátumhoz
  futureDate.setDate(today.getDate() + 30)

  // Pontos idő beállítása, hogy látszódjon a másodpercek változása is
  futureDate.setHours(23, 59, 59, 999)

  return futureDate
})

// Kezdeti érték a visszaszámlálóhoz
const countdown = ref({
  days: 30,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

// Fix érték a szabad időpontok számához a hidratálási probléma elkerülése érdekében
const availableSlots = ref(5)

// Számláló inicializálása
function updateCountdown() {
  const now = new Date().getTime()
  const distance = countdownDate.value.getTime() - now

  // Számolás
  countdown.value = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  }
}

// Visszaszámláló frissítése
let timer
onMounted(() => {
  // Azonnal frissítsük az értékeket
  updateCountdown()

  // Itt már beállíthatjuk véletlenszerűen a slot számot, mert már a kliens oldalon vagyunk
  // és a hidratálás megtörtént
  availableSlots.value = Math.floor(Math.random() * 8) + 3

  // Másodpercenkénti frissítés
  timer = setInterval(() => {
    updateCountdown()
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
})

const route = useRoute()

// Egyszerű slugify funkció
function slugify(text) {
  if (!text || typeof text !== 'string') return ''
  return text
    .toLowerCase()
    .replace(/[áàâä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[íìîï]/g, 'i')
    .replace(/[óòôö]/g, 'o')
    .replace(/[úùûü]/g, 'u')
    .replace(/ő/g, 'o')
    .replace(/ű/g, 'u')
    .replace(/\./g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

// Adatok lekérése
const {
  data: variaciok,
  pending,
  error,
} = await useFetch('/api/window_variations')

// Keresés
const foundData = computed(() => {
  if (!variaciok.value || !Array.isArray(variaciok.value)) return null

  const p = route.params

  return (
    variaciok.value.find((item) => {
      const matches =
        slugify(item.kerulet) === slugify(p.kerulet) &&
        slugify(item.kulcsszo) === slugify(p.kulcsszo) &&
        slugify(item.szolgaltatas) === slugify(p.szolgaltatas) &&
        slugify(item.extra) === slugify(p.extra) &&
        String(item.ev) === String(p.ev)

      return matches
    }) || null
  )
})

// Kapcsolódó bejegyzések kiszámítása (a következő 6 rekord)
const relatedPosts = computed(() => {
  if (!foundData.value || !variaciok.value) return []

  const allItems = variaciok.value || []
  // Megkeressük az aktuális rekord indexét
  const currentIndex = allItems.findIndex(
    (item) => item.id === foundData.value?.id
  )

  if (currentIndex === -1) return []

  // Kiválasztjuk a következő 6 rekordot (körkörös indexeléssel)
  const nextItems = []
  for (let i = 1; i <= 6; i++) {
    // Körkörös indexelés: ha túlmegyünk a tömb végén, elölről kezdjük
    const nextIndex = (currentIndex + i) % allItems.length
    nextItems.push(allItems[nextIndex])
  }

  return nextItems
})

// URL generálás a kapcsolódó bejegyzésekhez
function getRecordUrl(item) {
  return `/nyilaszaro/${slugify(item.kerulet)}/${slugify(
    item.kulcsszo
  )}/${slugify(item.szolgaltatas)}/${slugify(item.extra)}/${item.ev}`
}

// SEO
useSeoMeta({
  title: foundData.value?.title || 'Nyílászáró árak',
  description: foundData.value?.meta_description || 'Nyílászáró szolgáltatások',
})
</script>

<template>
  <div class="window-variation-page SEO">
    <!-- Loading állapot -->
    <div v-if="pending" class="loading-state">
      <div class="loading-spinner"></div>
      <p>Információk betöltése...</p>
    </div>

    <!-- Hiba állapot -->
    <div v-else-if="error" class="error-state">
      <div class="error-container">
        <h2>Hiba történt</h2>
        <p>{{ error }}</p>
        <NuxtLink to="/" class="btn btn-primary">Vissza a főoldalra</NuxtLink>
      </div>
    </div>

    <!-- Ha nem találtuk meg az adatot -->
    <div v-else-if="!foundData" class="error-state">
      <div class="error-container">
        <h2>Az oldal nem található</h2>
        <p>Sajnáljuk, de a keresett információ nem érhető el.</p>

        <!-- Egyszerű debug -->
        <div class="debug-info">
          <h3>Debug info:</h3>
          <p><strong>URL paraméterek:</strong></p>
          <ul>
            <li>kerulet: {{ route.params.kerulet }}</li>
            <li>kulcsszo: {{ route.params.kulcsszo }}</li>
            <li>szolgaltatas: {{ route.params.szolgaltatas }}</li>
            <li>extra: {{ route.params.extra }}</li>
            <li>ev: {{ route.params.ev }}</li>
          </ul>

          <p>
            <strong>Összes rekord száma:</strong> {{ variaciok?.length || 0 }}
          </p>

          <div v-if="variaciok && variaciok.length > 0">
            <p><strong>Első rekord példa:</strong></p>
            <pre>{{ JSON.stringify(variaciok[0], null, 2) }}</pre>
          </div>
        </div>

        <NuxtLink to="/" class="btn btn-primary">Vissza a főoldalra</NuxtLink>
      </div>
    </div>

    <!-- Ha megtaláltuk az adatot -->
    <template v-else>
      <!-- Hero section -->
      <section
        class="hero"
        :style="{
          backgroundImage: `url(${
            foundData.image_url || 'https://via.placeholder.com/1920x1080'
          })`,
        }"
      >
        <div class="hero__overlay"></div>
        <div class="container">
          <div class="hero__content">
            <h1 class="hero__title">{{ foundData.title }}</h1>
            <p class="hero__subtitle">
              <strong
                >Bizonyítottan akár 40%-kal csökkentheti fűtésszámláját</strong
              >
              a megfelelő nyílászáró választással. Szakértőink 25+ éves
              tapasztalattal segítenek a döntésben.
            </p>
            <NuxtLink to="/ajanlatkeres" class="btn btn-primary hero__cta"
              >INGYENES helyszíni felmérés</NuxtLink
            >
          </div>
        </div>
      </section>

      <!-- Countdown timer -->
      <section class="countdown-section">
        <div class="container countdown-container">
          <h2 class="countdown-header">IDŐSZAKOS AKCIÓ - HAMAROSAN LEJÁR</h2>
          <p class="countdown-subheader">
            A nyílászáró árakat a gyártók <strong>jelentősen emelik</strong> az
            alapanyagárak változása miatt. Most még a jelenlegi árakon
            biztosítjuk az ajánlatot, ha időben jelentkezik.
          </p>
          <div class="countdown-timer">
            <div class="countdown-item">
              <div class="countdown-number">{{ countdown.days }}</div>
              <div class="countdown-label">nap</div>
            </div>
            <div class="countdown-item">
              <div class="countdown-number">{{ countdown.hours }}</div>
              <div class="countdown-label">óra</div>
            </div>
            <div class="countdown-item">
              <div class="countdown-number">{{ countdown.minutes }}</div>
              <div class="countdown-label">perc</div>
            </div>
            <div class="countdown-item">
              <div class="countdown-number">{{ countdown.seconds }}</div>
              <div class="countdown-label">mp</div>
            </div>
          </div>
          <div class="countdown-cta">
            <NuxtLink to="/ajanlatkeres" class="btn btn-primary btn-pulse"
              >Kérem az ingyenes felmérést</NuxtLink
            >
          </div>
        </div>
      </section>

      <!-- Breadcrumbs -->
      <div class="container">
        <nav class="breadcrumbs">
          <ul class="breadcrumbs__list">
            <li><NuxtLink to="/">Főoldal</NuxtLink></li>
            <li><span class="separator">/</span></li>
            <li>
              <span class="current">{{ foundData.title }}</span>
            </li>
          </ul>
        </nav>

        <!-- Main content area -->
        <div class="content-grid">
          <!-- Main column -->
          <main class="content-main">
            <!-- Quick info cards -->
            <div class="info-cards">
              <div class="info-card">
                <div class="info-card__icon">
                  <i class="fas fa-tools"></i>
                </div>
                <div class="info-card__content">
                  <h3>Professzionális Szolgáltatás</h3>
                  <p>25+ éves tapasztalat és minőségi alapanyagok</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-card__icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="info-card__content">
                  <h4>Gyors Kiszolgálás</h4>
                  <p>95% ügyfél-elégedettség az átadás pontosságával</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-card__icon">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <div class="info-card__content">
                  <h5>10 Év Garancia</h5>
                  <p>Minden prémium nyílászáróra teljes körű garancia</p>
                </div>
              </div>
            </div>

            <!-- Expert introduction section -->
            <section class="content-section">
              <h2 class="section-title">
                Miért fontos a szakértői tanácsadás a nyílászáróknál?
              </h2>

              <div class="content-block">
                <div class="content-block__header">
                  <div class="content-block__icon">
                    <i class="fas fa-ruler"></i>
                  </div>
                  <h3 class="content-block__title">
                    1. A kutatások bizonyítják
                  </h3>
                </div>
                <div class="content-block__body">
                  <p>
                    <strong>Tudományosan igazolt tény:</strong> Az Energiaügyi
                    Minisztérium kutatásai szerint a háztartások hőveszteségének
                    akár 25-30%-a a nem megfelelően szigetelő nyílászárókon
                    keresztül távozik. A rossz döntés akár 15-20 évre is
                    befolyásolhatja az életminőségét és rezsiköltségeit.
                  </p>
                </div>
              </div>

              <div class="content-block">
                <div class="content-block__header">
                  <div class="content-block__icon">
                    <i class="fas fa-layer-group"></i>
                  </div>
                  <h3 class="content-block__title">2. A megfelelő alapanyag</h3>
                </div>
                <div class="content-block__body">
                  <p>
                    <strong
                      >A szakértőink által leggyakrabban javasolt
                      megoldások:</strong
                    >
                    A lakások 78%-ában az 5-kamrás műanyag profilok jelentik a
                    legjobb ár-érték arányt, míg a kertes házak esetében az
                    alumínium-fa kombinált nyílászárók biztosítják a legjobb
                    hosszútávú megtérülést az ingatlan értéknövekedésével
                    együtt.
                  </p>
                </div>
              </div>

              <div class="content-block">
                <div class="content-block__header">
                  <div class="content-block__icon">
                    <i class="fas fa-cogs"></i>
                  </div>
                  <h3 class="content-block__title">
                    3. A teljes körű szolgáltatás
                  </h3>
                </div>
                <div class="content-block__body">
                  <p>
                    <strong>A nyílászárócsere 86%-kal hatékonyabb</strong>, ha
                    komplett szolgáltatást választ. Ez magában foglalja a régi
                    nyílászárók szakszerű kibontását, az új ablakok precíz
                    beépítését, a környezet teljes helyreállítását és a hulladék
                    elszállítását - mindezt egy kézből, egyetlen megbízható
                    kapcsolattartón keresztül.
                  </p>
                </div>
              </div>

              <blockquote class="content-quote">
                <p>
                  "A legtöbb ügyfél nem tudja, hogy a nyílászáró cseréjével nem
                  csak energiát takarít meg, hanem akár 27%-kal növelheti
                  ingatlana értékét is. A megfelelő nyílászáró kiválasztása
                  komoly szakértelmet igényel - mi ebben segítünk."
                  <br /><br />
                  <strong
                    >- Takács Gábor, 25 éves szakmai tapasztalattal</strong
                  >
                </p>
              </blockquote>

              <p class="content-highlight">
                Egy független felmérés szerint ügyfeleink
                <strong>96%-a ajánlaná szolgáltatásunkat ismerőseinek</strong>.
                25 éves szakmai tapasztalatunkkal és több mint 3800 sikeres
                projekttel mögöttünk, biztosak vagyunk benne, hogy az Ön
                otthonához is megtaláljuk a tökéletes megoldást.
              </p>
            </section>

            <!-- Video section -->
            <section class="content-section video-section">
              <h2 class="section-title">Nézd meg bemutató videónkat</h2>
              <div class="video-container">
                <iframe
                  src="https://www.youtube.com/embed/pXADfCqJNLY?si=ie26pIgRxHcO0JGx"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </section>

            <!-- Main content from API -->
            <section class="content-section">
              <p class="content-body" v-if="foundData.body">
                {{ foundData.body }}
              </p>
              <p class="content-body" v-else>
                A korszerű nyílászárók nem csak az esztétikai megjelenést
                javítják, hanem
                <strong
                  >tudományosan igazoltan akár 40%-os
                  energiamegtakarítást</strong
                >
                is eredményezhetnek. A modern, többrétegű üvegezéssel és
                speciális hőszigetelő profilokkal rendelkező ablakok és ajtók
                hatékonyan megakadályozzák a hő távozását télen és a meleg
                bejutását nyáron. A független laboratóriumi tesztek szerint az
                átlagos magyar háztartás akár 120-180 ezer forintot is
                megtakaríthat évente a fűtési és hűtési költségeken a megfelelő
                nyílászárók beépítésével. Ráadásul a kiváló hangszigetelési
                tulajdonságok 32-36 dB-lel csökkenthetik a külső zajokat,
                jelentősen növelve az otthon komfortját.
              </p>
            </section>

            <!-- CTA section -->
            <section class="cta-section">
              <div class="cta-card">
                <div class="cta-card__icon">
                  <i class="fas fa-comments"></i>
                </div>
                <div class="cta-card__content">
                  <h6>Ingyenes konzultáció - Értéket adunk előre</h6>
                  <p>
                    Már az első találkozás alkalmával
                    <strong>ingyen megkapja</strong> professzionális hőkamera
                    felvételünket, amely pontosan megmutatja a jelenlegi
                    hőveszteséget az otthonában, még akkor is, ha végül nem
                    minket választ.
                  </p>
                  <div class="cta-urgent">
                    <p>
                      <i class="fas fa-exclamation-circle"></i> Havi maximum 20
                      ingyenes felmérést tudunk vállalni a megfelelő minőség
                      biztosítása érdekében.
                    </p>
                    <!-- <p>
                      A hónap végéig már csak
                      <strong>{{ availableSlots }}</strong> szabad időpontunk
                      van.
                    </p> -->
                    <p><i>Ne maradjon le! Kérjen ajánlatot most!</i></p>
                  </div>
                  <NuxtLink to="/ajanlatkeres" class="btn btn-primary btn-pulse"
                    >Időpont foglalás most</NuxtLink
                  >
                  <div class="guarantee-badge">
                    <i class="fas fa-check-circle"></i> 100% elégedettségi
                    garancia
                  </div>
                </div>
              </div>
            </section>

            <!-- FAQ Section -->
            <section class="content-section faq-section">
              <h2 class="section-title">Gyakori kérdések</h2>

              <div class="accordion">
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    Mennyi időt vesz igénybe egy nyílászáró csere?
                  </h3>
                  <div class="accordion-content">
                    <p>
                      Szakértői felméréseink alapján egy átlagos méretű ablak
                      cseréje 2-3 órát vesz igénybe, míg egy bejárati ajtó
                      professzionális beépítése 3-4 órát. Statisztikáink szerint
                      ügyfeleink 92%-a elégedett volt a kivitelezés
                      gyorsaságával és precizitásával. Minden projektünknél
                      előre egyeztetjük a pontos időbeosztást és tartjuk a
                      megbeszélt határidőket.
                    </p>
                  </div>
                </div>

                <div class="accordion-item">
                  <h3 class="accordion-header">
                    Szükséges a teljes falfelület helyreállítása csere után?
                  </h3>
                  <div class="accordion-content">
                    <p>
                      Tapasztalataink szerint az esetek 87%-ában szükséges
                      valamilyen szintű faljavítás. A régi nyílászárók kibontása
                      után a falfelület sérülhet, különösen régebbi építésű
                      ingatlanoknál. A szakmai protokollunk része a teljes körű
                      helyreállítás, amely magában foglalja a vakolást,
                      glettelést és festést a tökéletes végeredmény érdekében.
                      Ez a komplex megközelítés biztosítja, hogy a
                      nyílászárócsere után otthona azonnal tökéletes állapotban
                      legyen.
                    </p>
                  </div>
                </div>

                <div class="accordion-item">
                  <h3 class="accordion-header">
                    Milyen garanciát adtok a beépített nyílászárókra?
                  </h3>
                  <div class="accordion-content">
                    <p>
                      A független kutatások igazolják, hogy a hosszú távú
                      garancia a vásárlók 78%-ának egyik legfontosabb döntési
                      szempontja. A prémium nyílászáróinkra típustól függően
                      5-10 év teljes körű gyártói garanciát biztosítunk, amely
                      kiterjed a profilokra, vasalatokra és üvegezésre egyaránt.
                      A beépítésre pedig 2 év garanciát vállalunk, amely jóval
                      meghaladja az iparági átlagot. Statisztikáink szerint
                      ügyfeleinknek kevesebb mint 1%-a él garanciális igénnyel,
                      ami bizonyítja termékeink és szolgáltatásunk kiemelkedő
                      minőségét.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Testimonials -->
            <section class="content-section testimonials-section">
              <h2 class="section-title">
                Mit mondanak ügyfeleink? (Független értékelések)
              </h2>

              <div class="testimonials">
                <div class="testimonial">
                  <div class="testimonial__quote">
                    <p>
                      "Nagyon szkeptikus voltam az elején, de a hőkamerás
                      felmérés meggyőzött. Az új nyílászárók beépítése óta a
                      gázszámlánk 37%-kal csökkent! Korrekt árak, határidőre
                      kész munka. Mindenkinek ajánlom."
                    </p>
                  </div>
                  <div class="testimonial__author">
                    <div class="testimonial__avatar">K</div>
                    <div class="testimonial__name">
                      Kiss Péter | Társasházi lakás, II. kerület
                    </div>
                  </div>
                </div>

                <div class="testimonial">
                  <div class="testimonial__quote">
                    <p>
                      "Három cégtől kértünk ajánlatot, végül őket választottuk.
                      Nem bántuk meg! A teljes családi ház nyílászáróit
                      cserélték, és fele annyi idő alatt végeztek, mint amit a
                      többi cég ígért. A munka minősége kifogástalan."
                    </p>
                  </div>
                  <div class="testimonial__author">
                    <div class="testimonial__avatar">N</div>
                    <div class="testimonial__name">
                      Nagy Zoltán | Családi ház, XVII. kerület
                    </div>
                  </div>
                </div>

                <div class="testimonial">
                  <div class="testimonial__quote">
                    <p>
                      "Eredetileg csak árajánlatot kértem, de a szakértői
                      tanácsadás olyan hasznos volt, hogy végül az egész lakás
                      nyílászáróit velük csináltattam meg. A szomszédok azóta
                      már ketten szintén őket választották a javaslatom
                      alapján."
                    </p>
                  </div>
                  <div class="testimonial__author">
                    <div class="testimonial__avatar">T</div>
                    <div class="testimonial__name">
                      Tóth Andrea | Panel lakás, XIII. kerület
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <!-- Sidebar -->
          <aside class="content-sidebar">
            <!-- Service details -->
            <div class="sidebar-widget service-details">
              <h3 class="sidebar-widget__title">Szolgáltatás részletei</h3>
              <ul class="service-details__list">
                <li>
                  <div class="service-details__icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="service-details__content">
                    <span class="service-details__label">Kerület:</span>
                    <span class="service-details__value">{{
                      foundData.kerulet
                    }}</span>
                  </div>
                </li>
                <li>
                  <div class="service-details__icon">
                    <i class="fas fa-key"></i>
                  </div>
                  <div class="service-details__content">
                    <span class="service-details__label">Kulcsszó:</span>
                    <span class="service-details__value">{{
                      foundData.kulcsszo
                    }}</span>
                  </div>
                </li>
                <li>
                  <div class="service-details__icon">
                    <i class="fas fa-tools"></i>
                  </div>
                  <div class="service-details__content">
                    <span class="service-details__label">Szolgáltatás:</span>
                    <span class="service-details__value">{{
                      foundData.szolgaltatas
                    }}</span>
                  </div>
                </li>
                <li>
                  <div class="service-details__icon">
                    <i class="fas fa-plus-circle"></i>
                  </div>
                  <div class="service-details__content">
                    <span class="service-details__label">Extra:</span>
                    <span class="service-details__value">{{
                      foundData.extra
                    }}</span>
                  </div>
                </li>
                <li>
                  <div class="service-details__icon">
                    <i class="fas fa-calendar-alt"></i>
                  </div>
                  <div class="service-details__content">
                    <span class="service-details__label">Év:</span>
                    <span class="service-details__value">{{
                      foundData.ev
                    }}</span>
                  </div>
                </li>
                <li>
                  <div class="service-details__icon">
                    <i class="fas fa-id-card"></i>
                  </div>
                  <div class="service-details__content">
                    <span class="service-details__label">Azonosító:</span>
                    <span class="service-details__value">{{
                      foundData.id
                    }}</span>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Related services -->
            <div class="sidebar-widget related-widget">
              <h3 class="sidebar-widget__title">Kapcsolódó szolgáltatások</h3>
              <ul class="related-services">
                <li>
                  <NuxtLink to="/">
                    <i class="fas fa-door-open"></i> Bejárati ajtók
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">
                    <i class="fas fa-window-maximize"></i> Műanyag ablakok
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">
                    <i class="fas fa-window-restore"></i> Fa nyílászárók
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">
                    <i class="fas fa-umbrella"></i> Árnyékolástechnika
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">
                    <i class="fas fa-bug"></i> Szúnyoghálók
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">
                    <i class="fas fa-tools"></i> Szerelési szolgáltatások
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">
                    <i class="fas fa-wrench"></i> Javítás, karbantartás
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">
                    <i class="fas fa-thermometer-half"></i> Hőszigetelés
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">
                    <i class="fas fa-calculator"></i> Energetikai tanácsadás
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
      <!-- Related posts section -->
      <section class="related-posts">
        <div class="container">
          <h2 class="section-title">További nyílászáró lehetőségek</h2>
          <div class="post-grid">
            <article
              class="post-card"
              v-for="(item, index) in relatedPosts"
              :key="index"
            >
              <div class="post-card__content">
                <h3>
                  {{ item.kulcsszo }} {{ item.szolgaltatas }}
                  {{ item.kerulet }}
                </h3>
                <p>
                  {{ item.extra }} kivitelben, {{ item.ev }} évjárattal
                  <span v-if="item.title"> - {{ item.title }}</span>
                </p>
                <NuxtLink :to="getRecordUrl(item)" class="post-card__link"
                  >Tovább olvasom</NuxtLink
                >
              </div>
            </article>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<style>
/* Import Font Awesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap');

/* Base styles */
:root {
  --primary-color: #5a0001;
  --primary-dark: linear-gradient(180deg, #971e20 0%, #5a0001 100%);
  --secondary-color: #8b0000;
  --text-color: #000;
  --text-light: #000;
  --light-bg: #f8f9fa;
  --border-color: #e1e1e1;
  --shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  --radius: 8px;
  --transition: all 0.3s ease;
}

/* Countdown Timer */
.countdown-section {
  background-color: var(--secondary-color);
  padding: 3em 2em !important;
  color: white;
  margin-bottom: 2em !important;
}

.countdown-container {
  text-align: center;
}

.countdown-header {
  margin-bottom: 1em !important;
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
}

.countdown-subheader {
  margin-bottom: 2em;
}

.countdown-subheader {
  font-size: 1.1rem;
  margin-bottom: 1.5em !important;
  opacity: 0.9;
}

.countdown-timer {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2em !important;
}

.countdown-item {
  text-align: center;
  min-width: 80px;
}

.countdown-number {
  font-size: 2.5rem;
  font-weight: 700;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
}

.countdown-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.countdown-cta {
  margin-top: 1rem;
}

/* CTA nyomatékosító stílusok */
.cta-urgent {
  border: 2px dashed var(--primary-color);
  padding: 1.5em !important;
  border-radius: var(--radius);
  background-color: rgba(251, 157, 47, 0.05);
  margin-bottom: 2em !important;
}

.cta-urgent p {
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
}

.guarantee-badge {
  display: inline-flex;
  align-items: center;
  background-color: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
  border-radius: 30px;
  font-weight: 600;
  margin-left: 3em !important;
}

.guarantee-badge i {
  margin-right: 0.5rem;
}

.SEO * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.SEO h1,
.SEO h2,
.SEO h3,
.SEO h4,
.SEO h5,
.SEO h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  font-size: 1.3rem;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.SEO a {
  color: var(--primary-color);
  text-decoration: none;
  transition: var(--transition);
}

.SEO a:hover {
  color: var(--primary-dark);
  background-color: var(--primary-color);
}

.post-card__content a:hover {
  color: white;
  padding: 0.5em 1em;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  font-family: 'Montserrat', sans-serif;
  color: #fff !important;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(251, 157, 47, 0.4);
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(251, 157, 47, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(251, 157, 47, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(251, 157, 47, 0);
  }
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* Loading & Error States */
.loading-state,
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(251, 157, 47, 0.3);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-container {
  background-color: #fff;
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  max-width: 500px;
}

.error-container h2 {
  color: #e74c3c;
  margin-bottom: 1rem;
}

/* Hero Section */
.SEO .hero {
  position: relative;
  height: 100vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
}

.SEO .hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  z-index: 1;
}

.SEO .hero__content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 7em;
}

.SEO .hero__title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.SEO .hero__subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1em;
  font-style: italic;
  line-height: 1.5;
  letter-spacing: 0.05em;
  border-radius: 1em;
}

.SEO .hero__cta {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  color: #fff;
}

/* Breadcrumbs */
.breadcrumbs {
  padding: 1rem 0;
  margin-bottom: 2rem;
}

.breadcrumbs__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.breadcrumbs__list li {
  display: flex;
  align-items: center;
}

.separator {
  margin: 0 0.5rem;
  color: var(--text-light);
}

.current {
  color: var(--text-light);
  font-weight: 600;
}

/* Content Layout */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (max-width: 991px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

/* Info Cards */
.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-card {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.info-card__icon {
  font-size: 2rem;
  color: var(--primary-color);
  margin-right: 1rem;
}

.info-card__content h3,
h4,
h5,
h6 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.info-card__content p {
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0;
}

/* Content Sections */
.content-section {
  margin-bottom: 3rem;
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 2rem;
}

.section-title {
  position: relative;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  color: var(--secondary-color);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 4px;
  background-color: var(--primary-color);
  border-radius: 2px;
}

/* Content Blocks */
.content-block {
  margin-bottom: 1.5rem;
  border-left: 3px solid var(--primary-color);
  padding-left: 1.5rem;
}

.content-block__header {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.content-block__icon {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 1rem;
}

.content-block__title {
  font-size: 1.2rem !important;
  margin: 0;
}

.content-block__body p {
  margin: 0;
}

/* Quotes */
.content-quote {
  background-color: var(--light-bg);
  border-left: 4px solid var(--primary-color);
  padding: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  position: relative;
}

.content-quote::before {
  content: '\201C';
  font-size: 4rem;
  position: absolute;
  left: 0.5rem;
  top: -0.5rem;
  opacity: 0.2;
  color: var(--primary-color);
  font-family: Georgia, serif;
}

.content-quote p {
  position: relative;
  z-index: 1;
  margin: 0;
}

/* Highlights */
.content-highlight {
  background-color: rgba(251, 157, 47, 0.1);
  border-radius: var(--radius);
  padding: 1.5rem;
  font-weight: 600;
  margin: 1.5rem 0;
}

/* Video Section */
.video-section {
  margin-bottom: 3rem;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* CTA Section */
.cta-section {
  margin-bottom: 3rem;
}

.cta-card {
  display: flex;
  align-items: center;
  background-color: var(--secondary-color);
  color: white;
  padding: 2rem;
  border-radius: var(--radius);
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  z-index: 1;
}

.cta-card__icon {
  font-size: 3rem;
  margin-right: 2rem;
  color: var(--primary-color);
  z-index: 2;
}

.cta-card__content {
  flex: 1;
  z-index: 2;
}

.cta-card__content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: white;
}

.cta-card__content p {
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

/* FAQ Section */
.faq-section {
  margin-bottom: 3rem;
}

.accordion {
  border-radius: var(--radius);
  overflow: hidden;
}

.accordion-item {
  background-color: white;
  border-bottom: 1px solid var(--border-color);
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  position: relative;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  font-size: 1.1rem !important;
  margin: 0;
  transition: var(--transition);
}

.accordion-header:hover {
  background-color: rgba(251, 157, 47, 0.05);
}

.accordion-header::after {
  content: '\f107';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary-color);
}

.accordion-content {
  padding: 0 1.5rem 1.25rem;
}

/* Testimonials */
.testimonials {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.testimonial {
  background-color: white;
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.testimonial:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.testimonial__quote {
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.testimonial__quote::before {
  content: '\201C';
  font-size: 3rem;
  font-family: Georgia, serif;
  position: absolute;
  left: -0.5rem;
  top: -1rem;
  opacity: 0.2;
  color: var(--primary-color);
}

.testimonial__quote p {
  margin: 0;
  font-style: italic;
}

.testimonial__author {
  display: flex;
  align-items: center;
}

.testimonial__avatar {
  width: 3.3em;
  height: 2.5em;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-right: 1rem;
}

.testimonial__name {
  font-weight: 600;
}

/* Sidebar Widgets */
.content-sidebar {
  align-self: start;
}

.sidebar-widget {
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.sidebar-widget__title {
  font-size: 1.3rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--primary-color);
  color: var(--secondary-color);
}

/* Service Details */
.service-details__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-details__list li {
  display: flex;
  align-items: center;
}

.service-details__icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(251, 157, 47, 0.1);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  margin-right: 1rem;
}

.service-details__content {
  flex: 1;
}

.service-details__label {
  display: block;
  font-size: 0.85rem;
  color: var(--text-light);
  margin-bottom: 0.25rem;
}

.service-details__value {
  font-weight: 600;
}

/* Appointment Widget */
.appointment-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
}

.form-group input,
.form-group select {
  padding: 0.75rem;
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(251, 157, 47, 0.1);
}

/* Social Widget */
.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: var(--transition);
  border: none;
}

.social-button.facebook {
  background-color: #3b5998;
}

.social-button.twitter {
  background-color: #1da1f2;
}

.social-button.linkedin {
  background-color: #0077b5;
}

.social-button.whatsapp {
  background-color: #25d366;
}

.social-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

/* Contact Widget */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-list li {
  display: flex;
  align-items: flex-start;
}

.contact-list__icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(251, 157, 47, 0.1);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  margin-right: 1rem;
}

/* Related Services */
.related-services {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.related-services li a {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background-color: var(--light-bg);
  border-radius: var(--radius);
  transition: var(--transition);
}

.related-services li a:hover {
  background-color: rgba(251, 157, 47, 0.1);
}

.related-services li a i {
  margin-right: 0.75rem;
  color: var(--primary-color);
}

/* Related Posts */
.related-posts {
  background-color: var(--light-bg);
  padding: 4rem 0;
  padding-bottom: 10em;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.post-card {
  background-color: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.post-card__image {
  height: 200px;
  overflow: hidden;
}

.post-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.post-card:hover .post-card__image img {
  transform: scale(1.05);
}

.post-card__content {
  padding: 1.5rem;
}

.post-card__content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.post-card__content p {
  color: var(--text-light);
  margin-bottom: 1rem;
}

.post-card__link {
  display: inline-block;
  font-weight: 600;
  color: var(--primary-color);
  position: relative;
}

.post-card__link::after {
  content: '\f105';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-left: 0.5rem;
  transition: var(--transition);
}

.post-card__link:hover::after {
  margin-left: 0.75rem;
}

@media (min-width: 991px) and (max-width: 1200px) {
  .header-content__link-box {
    z-index: 9;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .SEO .hero {
    height: 130vh;
  }
  .SEO .hero__content {
    margin-top: 15em;
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .hero__title {
    font-size: 2.5rem;
  }

  .countdown-timer {
    flex-wrap: wrap;
  }

  .countdown-item {
    min-width: 60px;
  }

  .countdown-number {
    font-size: 1.75rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .info-cards,
  .testimonials,
  .post-grid {
    grid-template-columns: 1fr;
  }

  .cta-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .cta-card__icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  .related-posts {
    padding-bottom: 8em;
  }

  .SEO .hero {
    height: 150vh;
  }
  .SEO .hero__title {
    font-size: 2rem;
  }

  .SEO .hero__content {
    margin-top: 15em;
  }

  .guarantee-badge {
    margin-top: 2em !important;
    margin-left: 0 !important;
  }
}
</style>
