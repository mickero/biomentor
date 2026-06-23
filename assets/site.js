// assets/site.js

/* ============================================================
   1. SITE CONFIG — tek noktadan değiştir
   ============================================================ */
const SITE = {
  brand: "BİOMENTOR",
  bio: "biomentör ile ücretsiz olarak biyoloji öğrenmeye hemen başla",
  contact: {
    email:     "iletisim@biomentor.com",
    phone:     "+90 5XX XXX XX XX",
    whatsapp:  "905XXXXXXXXX", // sadece rakam, ülke kodu dahil
    location:  "Türkiye",
    instagram: "biomentor",
    youtube:   "biomentor",
  }
};

/* ============================================================
   2. ADMIN — bu e-posta ile giriş yapılınca admin linki görünür
   ============================================================ */
const ADMIN_EMAIL = "biomentor.com@gmail.com"; // ← kendi e-postanla değiştir

/* ============================================================
   3. KURS KATALOĞU — her kursun quizleri dahil
   ============================================================ */
const COURSES = [
  {
    id: "hucre_biyolojisi",
    title: "Hücre Biyolojisine Giriş",
    level: "Başlangıç",
    duration: "8 saat",
    tags: ["Başlangıç", "Hücre"],
    summary: "Hücrenin yapısı, organeller ve temel hücresel süreçler.",
    lessons: [
      "Hücre Teorisi",
      "Prokaryot ve Ökaryot Hücreler",
      "Organeller",
      "Hücre Zarı",
      "Madde Taşınımı",
      "Hücresel Haberleşme"
    ],
    quiz: []
  },

  {
    id: "biyomolekuller",
    title: "Biyomoleküller ve Enzimler",
    level: "Başlangıç",
    duration: "6 saat",
    tags: ["Temel Biyoloji"],
    summary: "Karbonhidratlar, lipitler, proteinler, nükleik asitler ve enzimler.",
    lessons: [
      "Karbonhidratlar",
      "Lipitler",
      "Proteinler",
      "Nükleik Asitler",
      "Enzim Yapısı",
      "Enzim Kinetiği"
    ],
    quiz: []
  },

  {
    id: "solunum",
    title: "Hücresel Solunum",
    level: "Başlangıç",
    duration: "7 saat",
    tags: ["Metabolizma"],
    summary: "ATP üretimi ve enerji dönüşümleri.",
    lessons: [
      "ATP",
      "Glikoliz",
      "Krebs Döngüsü",
      "Elektron Taşıma Sistemi",
      "Fermantasyon"
    ],
    quiz: []
  },

  {
    id: "fotosentez",
    title: "Fotosentez",
    level: "Başlangıç",
    duration: "5 saat",
    tags: ["Bitki Biyolojisi"],
    summary: "Işığa bağlı ve bağımsız reaksiyonlar.",
    lessons: [
      "Kloroplast",
      "Işığa Bağlı Reaksiyonlar",
      "Calvin Döngüsü",
      "Fotosentezi Etkileyen Faktörler"
    ],
    quiz: []
  },

  {
    id: "genetik_temelleri",
    title: "Genetik Temelleri",
    level: "Orta",
    duration: "10 saat",
    tags: ["Genetik"],
    summary: "Kalıtım ve genetik kavramlar.",
    lessons: [
      "Gen ve Alel",
      "Kromozomlar",
      "Mendel Genetiği",
      "Soy Ağacı Analizi",
      "Genetik Hastalıklar"
    ],
    quiz: []
  },

  {
    id: "dna_rna",
    title: "DNA Replikasyonu",
    level: "Orta",
    duration: "6 saat",
    tags: ["Moleküler Biyoloji"],
    summary: "DNA eşlenmesi ve genetik bilginin aktarımı.",
    lessons: [
      "DNA Yapısı",
      "Replikasyon",
      "DNA Onarımı",
      "Genetik Kararlılık"
    ],
    quiz: []
  },

  {
    id: "protein_sentezi",
    title: "Transkripsiyon ve Translasyon",
    level: "Orta",
    duration: "8 saat",
    tags: ["Moleküler Biyoloji"],
    summary: "Protein sentezi mekanizmaları.",
    lessons: [
      "RNA Çeşitleri",
      "Transkripsiyon",
      "Translasyon",
      "Gen İfadesi"
    ],
    quiz: []
  },

  {
    id: "insan_fizyolojisi",
    title: "İnsan Fizyolojisi",
    level: "Orta",
    duration: "15 saat",
    tags: ["Fizyoloji"],
    summary: "İnsan vücudunun temel sistemleri.",
    lessons: [
      "Sinir Sistemi",
      "Dolaşım Sistemi",
      "Solunum Sistemi",
      "Sindirim Sistemi",
      "Boşaltım Sistemi"
    ],
    quiz: []
  },

  {
    id: "bitki_biyolojisi",
    title: "Bitki Biyolojisi",
    level: "Orta",
    duration: "12 saat",
    tags: ["Botanik"],
    summary: "Bitkilerin yapı ve işlevleri.",
    lessons: [
      "Bitki Dokuları",
      "Su Taşınımı",
      "Mineral Beslenme",
      "Bitki Hormonları"
    ],
    quiz: []
  },

  {
    id: "molekuler_genetik",
    title: "Moleküler Genetik",
    level: "İleri",
    duration: "18 saat",
    tags: ["İleri Düzey"],
    summary: "Gen düzenlenmesi ve modern genetik.",
    lessons: [
      "Operonlar",
      "Epigenetik",
      "Gen Düzenlenmesi",
      "RNA Düzenlenmesi"
    ],
    quiz: []
  },

  {
    id: "biyoteknoloji",
    title: "Biyoteknoloji ve Gen Mühendisliği",
    level: "İleri",
    duration: "14 saat",
    tags: ["Biyoteknoloji"],
    summary: "Modern biyoteknolojik uygulamalar.",
    lessons: [
      "PCR",
      "DNA Klonlama",
      "CRISPR",
      "Gen Tedavileri"
    ],
    quiz: []
  },

  {
    id: "evrim",
    title: "Evrimsel Biyoloji",
    level: "İleri",
    duration: "12 saat",
    tags: ["Evrim"],
    summary: "Evrim mekanizmaları ve popülasyon genetiği.",
    lessons: [
      "Doğal Seçilim",
      "Türleşme",
      "Adaptasyon",
      "Popülasyon Genetiği"
    ],
    quiz: []
  },

  {
    id: "ekoloji",
    title: "Ekoloji",
    level: "İleri",
    duration: "10 saat",
    tags: ["Ekoloji"],
    summary: "Canlıların çevreleriyle ilişkileri.",
    lessons: [
      "Popülasyon",
      "Komünite",
      "Ekosistem",
      "Biyoçeşitlilik"
    ],
    quiz: []
  },

  {
    id: "immunoloji",
    title: "İmmünoloji",
    level: "İleri",
    duration: "12 saat",
    tags: ["Bağışıklık"],
    summary: "Bağışıklık sisteminin çalışma prensipleri.",
    lessons: [
      "Doğal Bağışıklık",
      "Kazanılmış Bağışıklık",
      "Antikorlar",
      "Aşılar"
    ],
    quiz: []
  },

  {
    id: "norobiyoloji",
    title: "Nörobiyoloji",
    level: "İleri",
    duration: "12 saat",
    tags: ["Sinir Bilimi"],
    summary: "Sinir sisteminin biyolojik temelleri.",
    lessons: [
      "Nöronlar",
      "Sinapslar",
      "İletim Mekanizmaları",
      "Beyin Bölgeleri"
    ],
    quiz: []
  },

  {
    id: "olimpiyat_giris",
    title: "Biyoloji Olimpiyatlarına Giriş",
    level: "Olimpiyat",
    duration: "20 saat",
    tags: ["Olimpiyat"],
    summary: "Ulusal ve uluslararası biyoloji olimpiyatlarına hazırlık.",
    lessons: [
      "Olimpiyat Sistemi",
      "Çalışma Stratejileri",
      "Kaynak Kullanımı",
      "Örnek Sorular"
    ],
    quiz: []
  },

  {
    id: "olimpiyat_genetik",
    title: "Genetik Olimpiyat Kampı",
    level: "Olimpiyat",
    duration: "30 saat",
    tags: ["Olimpiyat", "Genetik"],
    summary: "İleri düzey olimpiyat genetiği.",
    lessons: [
      "Bağlantı Analizi",
      "Hardy-Weinberg",
      "Moleküler Genetik",
      "Olimpiyat Soruları"
    ],
    quiz: []
  },

  {
    id: "olimpiyat_fizyoloji",
    title: "Hayvan Fizyolojisi Olimpiyat Kampı",
    level: "Olimpiyat",
    duration: "30 saat",
    tags: ["Olimpiyat", "Fizyoloji"],
    summary: "İleri düzey fizyoloji eğitimi.",
    lessons: [
      "Kas Fizyolojisi",
      "Sinir Fizyolojisi",
      "Endokrin Sistem",
      "Olimpiyat Soruları"
    ],
    quiz: []
  }
];

/* ============================================================
   3. AUTH (LocalStorage MVP)
   ============================================================ */
const AUTH_KEYS = {
  users:   "biomentor_users_v1",
  session: "biomentor_session_v1"
};

function normalizeEmail(email) { return String(email || "").trim().toLowerCase(); }

function loadUsers() {
  try { return JSON.parse(localStorage.getItem(AUTH_KEYS.users) || "[]"); }
  catch { return []; }
}
function saveUsers(users) {
  localStorage.setItem(AUTH_KEYS.users, JSON.stringify(users));
}
function getSession() {
  try { return JSON.parse(localStorage.getItem(AUTH_KEYS.session) || "null"); }
  catch { return null; }
}
function setSession(session) {
  localStorage.setItem(AUTH_KEYS.session, JSON.stringify(session));
}
function clearSession() { localStorage.removeItem(AUTH_KEYS.session); }

function currentUser() {
  const s = getSession();
  if (!s) return null;
  return loadUsers().find(u => u.id === s.userId) || null;
}

async function hashPassword(pw) {
  const enc = new TextEncoder().encode(String(pw));
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

function uid() {
  return "u_" + Math.random().toString(16).slice(2) + Date.now().toString(16);
}

async function register({ name, email, password, password2 }) {
  const users = loadUsers();
  const e = normalizeEmail(email);
  if (users.some(u => u.email === e))       throw new Error("Bu e-posta zaten kayıtlı.");
  if (String(password).length < 6)           throw new Error("Şifre en az 6 karakter olmalı.");
  if (password !== password2)                throw new Error("Şifreler aynı değil.");

  const user = {
    id:        uid(),
    name:      String(name || "").trim(),
    email:     e,
    pwHash:    await hashPassword(password),
    createdAt: new Date().toISOString()
  };
  users.push(user);
  saveUsers(users);
  setSession({ userId: user.id, createdAt: new Date().toISOString() });
  return user;
}

async function login({ email, password }) {
  const users = loadUsers();
  const e     = normalizeEmail(email);
  const user  = users.find(u => u.email === e);
  if (!user) throw new Error("E-posta veya şifre hatalı.");

  if (await hashPassword(password) !== user.pwHash) throw new Error("E-posta veya şifre hatalı.");
  setSession({ userId: user.id, createdAt: new Date().toISOString() });
  return user;
}

function logout() { clearSession(); }

function requireAuth() {
  if (!currentUser()) {
    const here = location.pathname.split("/").pop() || "index.html";
    const q    = location.search || "";
    location.href = `login.html?redirect=${encodeURIComponent(here + q)}`;
  }
}

/* ============================================================
   4. SHARED NAVBAR INJECTION
   — Tek bir HTML string; her sayfada JS ile eklenir.
   — Artık her HTML dosyasında nav tekrarı yok.
   ============================================================ */
function injectNavbar() {
  const header = document.querySelector("header.topbar");
  if (!header) return;

  header.innerHTML = `
    <div class="wrap nav">
      <a class="brand" href="index.html">
        <span class="logoDot"></span>
        <span data-brand></span>
      </a>
      <nav class="links">
        <a href="courses.html">Kurslar</a>
        <a href="about.html">Hakkımızda</a>
        <a href="contact.html">İletişim</a>
        <a id="navLogin"    href="login.html">Giriş</a>
        <a id="navRegister" href="register.html">Kayıt</a>
        <a id="navProfile"  href="profile.html" style="display:none;">Profil</a>
        <a id="navAdmin"    href="admin.html"    style="display:none;">⚙ Admin</a>
        <a id="navLogout"   href="#"             style="display:none;">Çıkış</a>
      </nav>
    </div>
  `;
}

function updateAuthNav() {
  const u           = currentUser();
  const isAdmin     = u && normalizeEmail(u.email) === normalizeEmail(ADMIN_EMAIL);
  const navLogin    = document.getElementById("navLogin");
  const navRegister = document.getElementById("navRegister");
  const navProfile  = document.getElementById("navProfile");
  const navAdmin    = document.getElementById("navAdmin");
  const navLogout   = document.getElementById("navLogout");

  if (navLogin)    navLogin.style.display    = u       ? "none"        : "inline-flex";
  if (navRegister) navRegister.style.display = u       ? "none"        : "inline-flex";
  if (navProfile)  navProfile.style.display  = u       ? "inline-flex" : "none";
  if (navAdmin)    navAdmin.style.display    = isAdmin  ? "inline-flex" : "none";
  if (navLogout)   navLogout.style.display   = u       ? "inline-flex" : "none";

  if (navLogout) {
    navLogout.onclick = (e) => {
      e.preventDefault();
      logout();
      updateAuthNav();
      location.href = "index.html";
    };
  }
}

function goRedirectIfAny() {
  const redir = new URLSearchParams(location.search).get("redirect");
  if (redir) location.href = redir;
}

/* ============================================================
   5. GLOBAL DATA BINDING
   ============================================================ */
function qs(sel, root = document)  { return root.querySelector(sel); }
function qsa(sel, root = document) { return [...root.querySelectorAll(sel)]; }

function applySiteGlobals() {
  qsa("[data-brand]").forEach(el => el.textContent = SITE.brand);
  qsa("[data-bio]").forEach(el   => el.textContent = SITE.bio);

  qsa("[data-email]").forEach(el    => el.textContent = SITE.contact.email);
  qsa("[data-phone]").forEach(el    => el.textContent = SITE.contact.phone);
  qsa("[data-location]").forEach(el => el.textContent = SITE.contact.location);

  qsa("[data-email-link]").forEach(el => el.href = `mailto:${SITE.contact.email}`);
  qsa("[data-phone-link]").forEach(el => el.href = `tel:${SITE.contact.phone.replace(/\s+/g, "")}`);
  qsa("[data-wa-link]").forEach(el    => el.href = `https://wa.me/${SITE.contact.whatsapp}`);
  qsa("[data-ig-link]").forEach(el    => el.href = `https://instagram.com/${SITE.contact.instagram}`);
  qsa("[data-yt-link]").forEach(el    => el.href = `https://youtube.com/@${SITE.contact.youtube}`);

  const year = qs("#year");
  if (year) year.textContent = new Date().getFullYear();
}

/* ============================================================
   6. COURSE GRID
   ============================================================ */

/* Returns merged list: hardcoded COURSES + any extra added via admin panel */
function getAllCourses() {
  try {
    const adminCourses = JSON.parse(localStorage.getItem("biomentor_admin_courses_v1") || "null");
    if (Array.isArray(adminCourses)) {
      // merge: admin list is the source of truth for order/existence
      // for courses that exist in COURSES, keep their full data (level, duration, tags, etc.)
      return adminCourses.map(ac => {
        const base = COURSES.find(c => c.id === ac.id);
        return base ? base : { ...ac, level: "", duration: "", tags: [], summary: ac.title, lessons: [], quiz: [] };
      });
    }
  } catch { /* ignore */ }
  return COURSES;
}

function renderCoursesGrid(container) {
  if (!container) return;
  const list = getAllCourses();
  container.innerHTML = list.map(c => `
    <a class="courseCard" href="course.html?id=${encodeURIComponent(c.id)}" aria-label="${c.title}">
      <div class="courseTop">
        <div class="courseTitle">${c.title}</div>
        ${c.level ? `<div class="pill">${c.level}</div>` : ""}
      </div>
      <div class="courseMeta">
        ${c.duration ? `<span>⏱ ${c.duration}</span><span class="metaDot"></span>` : ""}
        <span>${c.tags.join(" • ")}</span>
      </div>
      <div class="courseSummary">${c.summary}</div>
      <div class="courseCta">Derse git →</div>
    </a>
  `).join("");
}

/* ============================================================
   7. COURSE DETAIL + QUIZ
   ============================================================ */
function getCourseById(id) {
  return getAllCourses().find(c => c.id === id) || null;
}

/* reads questions saved by the admin panel; falls back to hardcoded quiz */
function getQuizForCourse(courseId) {
  try {
    const stored = JSON.parse(localStorage.getItem("biomentor_admin_questions_v1") || "{}");
    const adminQs = stored[courseId];
    if (adminQs && adminQs.length > 0) return adminQs;
  } catch { /* ignore */ }
  const course = getCourseById(courseId);
  return course?.quiz || [];
}

function buildQuizHTML(quiz) {
  if (!quiz || !quiz.length) return "";

  const questionsHTML = quiz.map((item, qi) => `
    <div class="quizQuestion" id="qq-${qi}">
      <div class="quizQ">${qi + 1}. ${item.q}</div>
      <div class="quizOptions">
        ${item.opts.map((opt, oi) => `
          <div class="quizOpt" data-qi="${qi}" data-oi="${oi}">${opt}</div>
        `).join("")}
      </div>
      <div class="quizFeedback" id="qf-${qi}"></div>
    </div>
  `).join("");

  return `
    <h2 class="h2" style="margin-top:24px;">Quiz</h2>
    <div class="quizWrap" id="quizWrap">${questionsHTML}</div>
    <div class="quizScore" id="quizScore">
      <div class="scoreLabel">Sonuç</div>
      <div id="scoreText"></div>
    </div>
    <div style="margin-top:12px;">
      <button class="btn" id="quizResetBtn" style="display:none;">Tekrar dene</button>
    </div>
  `;
}

function attachQuizLogic(quiz) {
  if (!quiz || !quiz.length) return;

  const answered = new Array(quiz.length).fill(false);

  document.querySelectorAll(".quizOpt").forEach(opt => {
    opt.addEventListener("click", () => {
      const qi = parseInt(opt.dataset.qi);
      const oi = parseInt(opt.dataset.oi);
      if (answered[qi]) return;

      answered[qi] = true;
      const correct = quiz[qi].ans;
      const feedback = document.getElementById(`qf-${qi}`);

      // Mark all options in this question
      document.querySelectorAll(`.quizOpt[data-qi="${qi}"]`).forEach(o => {
        o.classList.add("disabled");
        if (parseInt(o.dataset.oi) === correct) o.classList.add("correct");
      });

      if (oi === correct) {
        opt.classList.add("correct");
        if (feedback) { feedback.className = "quizFeedback ok"; feedback.textContent = "✓ Doğru! " + quiz[qi].exp; }
      } else {
        opt.classList.add("wrong");
        if (feedback) { feedback.className = "quizFeedback err"; feedback.textContent = "✗ Yanlış. " + quiz[qi].exp; }
      }

      // Check if all answered → show score
      if (answered.every(Boolean)) showScore(answered, quiz);
    });
  });

  const resetBtn = document.getElementById("quizResetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => location.reload());
  }
}

function showScore(answered, quiz) {
  const correct = answered.reduce((acc, _, i) => {
    const chosen = document.querySelector(`.quizOpt[data-qi="${i}"].correct`);
    return acc + (chosen ? 1 : 0);
  }, 0);

  const scoreEl   = document.getElementById("quizScore");
  const scoreText = document.getElementById("scoreText");
  const resetBtn  = document.getElementById("quizResetBtn");

  if (scoreEl)  { scoreEl.classList.add("visible"); }
  if (scoreText){ scoreText.textContent = `${correct} / ${quiz.length} doğru`; }
  if (resetBtn) { resetBtn.style.display = "inline-flex"; }
}

function renderCourseDetail() {
  const root = qs("#courseDetail");
  if (!root) return;

  const id     = new URLSearchParams(location.search).get("id");
  const course = getCourseById(id);
  const quiz   = getQuizForCourse(id);

  if (!course) {
    root.innerHTML = `
      <div class="card">
        <h1 class="h1">Kurs bulunamadı</h1>
        <p class="muted">Kurs kaldırılmış veya bağlantı hatalı.</p>
        <a class="btn primary" href="courses.html">Kurslara dön</a>
      </div>`;
    return;
  }

  root.innerHTML = `
    <div class="crumbs">
      <a href="index.html">Ana Sayfa</a>
      <span>›</span>
      <a href="courses.html">Kurslar</a>
      <span>›</span>
      <span>${course.title}</span>
    </div>

    <div class="twoCol">
      <section class="card">
        <div class="courseTop" style="align-items:center;margin-bottom:12px;">
          <div>
            <h1 class="h1">${course.title}</h1>
            <div class="courseMeta" style="margin-top:8px;">
              <span class="pill">${course.level}</span>
              <span class="muted">⏱ ${course.duration}</span>
              <span class="muted">${course.tags.join(" • ")}</span>
            </div>
          </div>
        </div>

        <p class="lead">${course.summary}</p>

        <h2 class="h2" style="margin-top:18px;">Ders içeriği</h2>
        <ol class="lessonList">
          ${course.lessons.map(x => `<li>${x}</li>`).join("")}
        </ol>

        ${buildQuizHTML(quiz)}
      </section>

      <aside class="stack">
        <div class="card">
          <h3 class="h3">Ücretsiz erişim</h3>
          <p class="muted">İçeriklere kayıtlı kullanıcılar erişebilir.</p>
          <div class="miniRow">
            <a class="btn" href="contact.html">İletişim</a>
            <a class="btn" href="courses.html">Tüm kurslar</a>
          </div>
        </div>
        <div class="card">
          <h3 class="h3">Hızlı iletişim</h3>
          <div class="kv">
            <div class="k">E-posta</div>
            <a class="v" data-email-link><span data-email></span></a>
            <div class="k">Telefon</div>
            <a class="v" data-phone-link><span data-phone></span></a>
            <div class="k">WhatsApp</div>
            <a class="v" data-wa-link>Mesaj gönder</a>
          </div>
        </div>
      </aside>
    </div>
  `;

  // bind contact info inside dynamically rendered HTML
  applySiteGlobals();
  // attach quiz interactivity
  attachQuizLogic(quiz);
}

/* ============================================================
   8. PAGE-SPECIFIC WIRING
   ============================================================ */
async function wireLoginPage() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = document.getElementById("loginMsg");
    try {
      await login({
        email:    document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
      });
      if (msg) { msg.className = "muted msgOk"; msg.textContent = "Giriş başarılı."; }
      updateAuthNav();
      goRedirectIfAny() || (location.href = "index.html");
    } catch (err) {
      if (msg) { msg.className = "muted msgErr"; msg.textContent = err.message || "Hata."; }
    }
  });
}

async function wireRegisterPage() {
  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = document.getElementById("regMsg");
    try {
      await register({
        name:      document.getElementById("regName").value,
        email:     document.getElementById("regEmail").value,
        password:  document.getElementById("regPassword").value,
        password2: document.getElementById("regPassword2").value
      });
      if (msg) { msg.className = "muted msgOk"; msg.textContent = "Kayıt tamamlandı. Giriş yapıldı."; }
      updateAuthNav();
      const redir = new URLSearchParams(location.search).get("redirect");
      location.href = redir || "profile.html";
    } catch (err) {
      if (msg) { msg.className = "muted msgErr"; msg.textContent = err.message || "Hata."; }
    }
  });
}

function fmtDate(iso) {
  try { return new Date(iso).toLocaleString("tr-TR"); } catch { return iso || "—"; }
}

async function updateProfile({ name, email }) {
  const u = currentUser();
  if (!u) throw new Error("Giriş yok.");
  const users = loadUsers();
  const idx   = users.findIndex(x => x.id === u.id);
  if (idx < 0) throw new Error("Kullanıcı bulunamadı.");
  const newEmail = normalizeEmail(email);
  if (users.some(x => x.email === newEmail && x.id !== u.id)) throw new Error("Bu e-posta başka bir hesapta kullanılıyor.");
  users[idx].name  = String(name || "").trim();
  users[idx].email = newEmail;
  saveUsers(users);
  return users[idx];
}

async function changePassword({ currentPassword, newPassword, newPassword2 }) {
  const u = currentUser();
  if (!u) throw new Error("Giriş yok.");
  if (String(newPassword).length < 6) throw new Error("Yeni şifre en az 6 karakter olmalı.");
  if (newPassword !== newPassword2)   throw new Error("Yeni şifreler aynı değil.");
  const users   = loadUsers();
  const idx     = users.findIndex(x => x.id === u.id);
  const curHash = await hashPassword(currentPassword);
  if (curHash !== users[idx].pwHash) throw new Error("Mevcut şifre hatalı.");
  users[idx].pwHash = await hashPassword(newPassword);
  saveUsers(users);
}

async function wireProfilePage() {
  const pName  = document.getElementById("pName");
  const form   = document.getElementById("profileForm");
  const pwForm = document.getElementById("passwordForm");
  if (!pName && !form && !pwForm) return;

  requireAuth();

  function paint() {
    const u = currentUser();
    if (!u) return;
    const pEmail   = document.getElementById("pEmail");
    const pCreated = document.getElementById("pCreated");
    const editName  = document.getElementById("editName");
    const editEmail = document.getElementById("editEmail");
    if (pName)    pName.textContent    = u.name  || "—";
    if (pEmail)   pEmail.textContent   = u.email || "—";
    if (pCreated) pCreated.textContent = fmtDate(u.createdAt);
    if (editName)  editName.value  = u.name  || "";
    if (editEmail) editEmail.value = u.email || "";
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const msg = document.getElementById("profileMsg");
      try {
        await updateProfile({
          name:  document.getElementById("editName").value,
          email: document.getElementById("editEmail").value
        });
        if (msg) { msg.className = "muted msgOk"; msg.textContent = "Bilgiler güncellendi."; }
        paint();
      } catch (err) {
        if (msg) { msg.className = "muted msgErr"; msg.textContent = err.message || "Hata."; }
      }
    });
  }

  if (pwForm) {
    pwForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const msg = document.getElementById("pwMsg");
      try {
        await changePassword({
          currentPassword: document.getElementById("curPassword").value,
          newPassword:     document.getElementById("newPassword").value,
          newPassword2:    document.getElementById("newPassword2").value
        });
        if (msg) { msg.className = "muted msgOk"; msg.textContent = "Şifre güncellendi."; }
        pwForm.reset();
      } catch (err) {
        if (msg) { msg.className = "muted msgErr"; msg.textContent = err.message || "Hata."; }
      }
    });
  }

  paint();
}

function attachContactForm() {
  const form = qs("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name    = qs("#name").value.trim();
    const email   = qs("#email").value.trim();
    const subject = qs("#subject").value.trim();
    const message = qs("#message").value.trim();
    const body    = [`Ad: ${name}`, `E-posta: ${email}`, ``, message].join("\n");
    location.href = `mailto:${SITE.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

/* ============================================================
   9. BOOT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  injectNavbar();        // inject shared nav before anything else
  applySiteGlobals();

  renderCoursesGrid(qs("#coursesGrid"));
  renderCourseDetail();
  attachContactForm();

  updateAuthNav();
  wireLoginPage();
  wireRegisterPage();
  wireProfilePage();
});
