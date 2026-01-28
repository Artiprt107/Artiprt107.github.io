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
      "I focus on time series forecasting, neural networks, and data processing using Python and PyTorch. This portfolio highlights my learning projects and engineering-style structure.",
    hero_btn_projects: "Open Projects",
    hero_btn_repo: "EnergyCast Poland Repo",
    hero_btn_contact: "Contact",

    about_title: "About",
    about_text:
      "I build end-to-end ML pipelines: preprocessing → model training → inference → evaluation/visualization. I care about clean structure, reproducibility, and readable code.",

    highlight_title: "Highlighted project",
    highlight_desc:
      "24-hour electricity consumption forecasting using historical energy + weather features.",


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
    sticky_zip_sub: "Download project ZIP from GitHub"
  },

  ru: {
    nav_home: "Главная",
    nav_projects: "Проекты",
    nav_skills: "Навыки",
    nav_contacts: "Контакты",
    nav_download: "Скачать ZIP",

    hero_kicker: "Machine Learning • Python • Time Series",
    hero_title: "ML-разработчик: чистые пайплайны и прогнозы",
    hero_subtitle:
      "Я занимаюсь прогнозированием временных рядов, нейросетями и обработкой данных на Python и PyTorch. Это портфолио показывает учебные проекты и инженерный подход к структуре кода.",
    hero_btn_projects: "Открыть проекты",
    hero_btn_repo: "Репозиторий EnergyCast Poland",
    hero_btn_contact: "Контакты",

    about_title: "Обо мне",
    about_text:
      "Делаю end-to-end ML пайплайны: препроцессинг → обучение → инференс → оценка/визуализация. Важны структура, воспроизводимость и читаемый код.",

    highlight_title: "Главный проект",
    highlight_desc:
      "Прогноз потребления электроэнергии на 24 часа по историческим данным и погоде.",


    skills_page_kicker: "Профиль",
    skills_page_subtitle: "Коротко о навыках и инструментах, которые я использую в проектах.",
    contacts_page_kicker: "Связаться",
    contacts_page_subtitle: "Ссылки, по которым со мной можно связаться.",
    skills_title: "Навыки",
    skills_ml: "ML и данные",
    skills_eng: "Инженерия",
    skills_ml_1: "Прогнозирование временных рядов",
    skills_ml_2: "Нейросети (ANN) на PyTorch",
    skills_ml_3: "Препроцессинг и нормализация",
    skills_ml_4: "Разделение train/test по времени",
    skills_eng_1: "Чистая структура проекта (src/scripts)",
    skills_eng_2: "Воспроизводимые запуски и runner-скрипты",
    skills_eng_3: "Git и GitHub",
    skills_eng_4: "Модульный дизайн и читаемый код",

    contacts_title: "Контакты",
    footer: "© 2026 Artem Logush",

    projects_page_kicker: "Портфолио",
    projects_page_title: "Проекты",
    projects_page_subtitle: "Коротко о проектах, ссылки и ключевые детали.",
    proj_energy_title: "EnergyCast Poland",
    proj_energy_tag: "Time Series • PyTorch",
    proj_energy_desc:
      "Прогноз потребления электроэнергии на 24 часа с помощью ANN по историческим данным и погодным признакам. Пайплайн: данные → обучение → прогноз.",
    proj_features: "Функции",
    proj_stack: "Технологии",
    proj_feat_1: "Скользящее окно: 30 дней → 24 часа",
    proj_feat_2: "Нормализация MinMaxScaler",
    proj_feat_3: "PyTorch ANN (512 → 256 → 24)",
    proj_feat_4: "Инференс + графики",
    proj_feat_5: "CSV + опциональный BIN экспорт",
    proj_stack_1: "Python, PyTorch",
    proj_stack_2: "Pandas, NumPy",
    proj_stack_3: "Scikit-learn, Joblib",
    proj_stack_4: "Matplotlib",
    proj_stack_5: "Git/GitHub",
    btn_view_repo: "Открыть репозиторий",
    btn_download_zip: "Скачать ZIP",
    btn_back_home: "Назад",

    // Sticky bar
    sticky_zip_title: "EnergyCast Poland",
    sticky_zip_sub: "Скачать ZIP проекта с GitHub"
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
  const saved = localStorage.getItem(LANG_KEY) || defaultLang;
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

      if (label) label.textContent = "Preparing...";
      // Start download in the same tab
      window.location.href = url;

      setTimeout(() => {
        if (label) label.textContent = "Starting download...";
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
