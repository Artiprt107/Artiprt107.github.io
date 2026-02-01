// app.js — language toggle + reveal animations + ZIP download animation

const I18N = {
  en: {
    nav_home: "Home",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contacts: "Contacts",
    nav_download: "Download ZIP",

    hero_kicker: "Machine Learning • Python • Time Series",
    hero_title: "ML Developer building clean pipelines and forecasts",
    hero_subtitle:
      "I work on time series forecasting, neural networks, and data processing using Python and PyTorch. This portfolio highlights production‑minded projects and an engineering-first code structure.",
    hero_btn_projects: "Open Projects",
    hero_btn_repo: "EnergyCast Poland Repo",
    hero_btn_contact: "Contact",

    about_title: "About",
    about_text:
      "I build end-to-end ML pipelines: preprocessing → model training → inference → evaluation/visualization. I care about clean architecture, reproducibility, and maintainable code.",

    highlight_title: "Highlighted project",
    highlight_desc:
      "24-hour electricity consumption forecasting using historical energy + weather features.",

    // Home profile pills
    pill_role: "Software Engineer",
    pill_status: "Open to opportunities",

    skills_page_kicker: "Profile",
    skills_page_subtitle: "A quick overview of the tools and skills I use in my projects.",
    contacts_page_kicker: "Get in touch",
    contacts_page_subtitle: "Links to reach me quickly.",
    skills_title: "Skills",
    skills_ml: "ML & Data",
    skills_eng: "Engineering",
    skills_ml_1: "Time series forecasting",
    skills_ml_2: "Neural networks (ANN) in PyTorch",
    skills_ml_3: "Data preprocessing & normalization",
    skills_ml_4: "Train/test split (time-ordered)",
    skills_eng_1: "Clean project structure (src/scripts)",
    skills_eng_2: "Reproducible runs and simple runners",
    skills_eng_3: "Git & GitHub workflows",
    skills_eng_4: "Readable code and modular design",

    contacts_title: "Contacts",
    footer: "© 2026 Artem Logush",

    projects_page_kicker: "Portfolio",
    projects_page_title: "Projects",
    projects_page_subtitle: "A short overview of my projects with links and key details.",
    proj_energy_title: "EnergyCast Poland",
    proj_energy_tag: "Time Series • PyTorch",
    proj_energy_desc:
      "Electricity consumption forecasting for the next 24 hours using an ANN model trained on historical energy + weather features. Clean modular pipeline: preprocessing → training → inference.",
    proj_features: "Key features",
    proj_stack: "Tech stack",
    proj_feat_1: "Sliding window: 30 days → 24h forecast",
    proj_feat_2: "Normalization via MinMaxScaler",
    proj_feat_3: "PyTorch ANN (512 → 256 → 24)",
    proj_feat_4: "Inference pipeline + plots",
    proj_feat_5: "CSV + optional binary export",
    proj_stack_1: "Python, PyTorch",
    proj_stack_2: "Pandas, NumPy",
    proj_stack_3: "Scikit-learn, Joblib",
    proj_stack_4: "Matplotlib",
    proj_stack_5: "Git/GitHub",
    btn_view_repo: "View Repository",
    btn_download_zip: "Download ZIP",
    btn_back_home: "Back to Home",

    // Sticky bar
    sticky_zip_title: "EnergyCast Poland",
    sticky_zip_sub: "Download project ZIP from GitHub",

    // ZIP animation labels
    zip_preparing: "Preparing...",
    zip_starting: "Starting download..."
  },

  uk: {
    nav_home: "Головна",
    nav_projects: "Проєкти",
    nav_skills: "Навички",
    nav_contacts: "Контакти",
    nav_download: "Завантажити ZIP",

    hero_kicker: "Machine Learning • Python • Time Series",
    hero_title: "ML-розробник: чисті пайплайни та прогнози",
    hero_subtitle:
      "Працюю з прогнозуванням часових рядів, нейромережами та обробкою даних на Python і PyTorch. У портфоліо — проєкти з інженерним підходом і акуратною структурою коду.",
    hero_btn_projects: "Відкрити проєкти",
    hero_btn_repo: "Репозиторій EnergyCast Poland",
    hero_btn_contact: "Контакти",

    about_title: "Про мене",
    about_text:
      "Будую end‑to‑end ML пайплайни: препроцесинг → навчання → інференс → оцінка/візуалізація. Для мене важливі архітектура, відтворюваність і підтримуваний код.",

    highlight_title: "Ключовий проєкт",
    highlight_desc:
      "Прогноз споживання електроенергії на 24 години за історичними даними та погодними ознаками.",

    // Home profile pills
    pill_role: "Інженер-програміст",
    pill_status: "Відкритий до пропозицій",

    skills_page_kicker: "Профіль",
    skills_page_subtitle: "Коротко про інструменти та навички, які я використовую в проєктах.",
    contacts_page_kicker: "Звʼязок",
    contacts_page_subtitle: "Швидкі способи звʼязатися зі мною.",
    skills_title: "Навички",
    skills_ml: "ML та дані",
    skills_eng: "Інженерія",
    skills_ml_1: "Прогнозування часових рядів",
    skills_ml_2: "Нейромережі (ANN) у PyTorch",
    skills_ml_3: "Препроцесинг і нормалізація даних",
    skills_ml_4: "Розподіл train/test за часом",
    skills_eng_1: "Акуратна структура проєкту (src/scripts)",
    skills_eng_2: "Відтворювані запуски та прості runner-скрипти",
    skills_eng_3: "Git та GitHub",
    skills_eng_4: "Модульний дизайн і читабельний код",

    contacts_title: "Контакти",
    footer: "© 2026 Artem Logush",

    projects_page_kicker: "Портфоліо",
    projects_page_title: "Проєкти",
    projects_page_subtitle: "Короткий огляд моїх проєктів із посиланнями та ключовими деталями.",
    proj_energy_title: "EnergyCast Poland",
    proj_energy_tag: "Time Series • PyTorch",
    proj_energy_desc:
      "Прогноз споживання електроенергії на 24 години за допомогою ANN, навченої на історичних даних і погодних ознаках. Модульний пайплайн: препроцесинг → навчання → інференс.",
    proj_features: "Ключові фічі",
    proj_stack: "Технології",
    proj_feat_1: "Ковзне вікно: 30 днів → прогноз на 24 год",
    proj_feat_2: "Нормалізація через MinMaxScaler",
    proj_feat_3: "PyTorch ANN (512 → 256 → 24)",
    proj_feat_4: "Пайплайн інференсу + графіки",
    proj_feat_5: "CSV + опційний BIN експорт",
    proj_stack_1: "Python, PyTorch",
    proj_stack_2: "Pandas, NumPy",
    proj_stack_3: "Scikit-learn, Joblib",
    proj_stack_4: "Matplotlib",
    proj_stack_5: "Git/GitHub",
    btn_view_repo: "Відкрити репозиторій",
    btn_download_zip: "Завантажити ZIP",
    btn_back_home: "На головну",

    // Sticky bar
    sticky_zip_title: "EnergyCast Poland",
    sticky_zip_sub: "Завантажити ZIP проєкту з GitHub",

    // ZIP animation labels
    zip_preparing: "Готуємо…",
    zip_starting: "Починаємо завантаження…"
  }
};

const LANG_KEY = "portfolio_lang";
const defaultLang = "en";

function setLang(lang) {
  const dict = I18N[lang] || I18N[defaultLang];
  document.documentElement.lang = lang;
  localStorage.setItem(LANG_KEY, lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function initLang() {
  let saved = localStorage.getItem(LANG_KEY) || defaultLang;
  // Legacy support (old builds used "ru")
  if (saved === "ru") saved = "uk";
  setLang(saved);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

function initRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => io.observe(el));
}

function upgradeHomeNavToPages() {
  // Home page should keep its layout, but Skills/Contacts live as separate pages too.
  const path = (window.location.pathname || "").toLowerCase();
  const isHome = path.endsWith("/") || path.endsWith("/index.html") || path === "";
  if (!isHome) return;

  const map = {
    "#skills": "skills.html",
    "#contacts": "contacts.html"
  };

  document.querySelectorAll('a[href="#skills"], a[href="#contacts"]').forEach(a => {
    const href = a.getAttribute("href");
    if (map[href]) a.setAttribute("href", map[href]);
  });
}

function initZipDownloadAnimation() {
  const btns = document.querySelectorAll("[data-zip-download]");
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // keep same tab

      const url = btn.getAttribute("href");

      // Save original label once
      const label = btn.querySelector(".zip-label");
      const original = label ? label.textContent : btn.textContent.trim();
      if (!btn.getAttribute("data-original-label")) {
        btn.setAttribute("data-original-label", original);
      }

      btn.classList.add("loading");

      const lang = localStorage.getItem(LANG_KEY) === "uk" ? "uk" : "en";
      const dict = I18N[lang] || I18N[defaultLang];

      if (label) label.textContent = dict.zip_preparing || "Preparing...";
      // Start download in the same tab
      window.location.href = url;

      setTimeout(() => {
        if (label) label.textContent = dict.zip_starting || "Starting download...";
      }, 900);

      setTimeout(() => {
        btn.classList.remove("loading");
        const back = btn.getAttribute("data-original-label") || original;
        if (label) label.textContent = back;
      }, 2200);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  upgradeHomeNavToPages();
  initRevealAnimations();
  initZipDownloadAnimation();
});
