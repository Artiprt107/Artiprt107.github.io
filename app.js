const I18N = {
  en: {
    nav_home: "Home",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contacts: "Contacts",

    hero_kicker: "Machine Learning • Python • Time Series",
    hero_title: "ML Developer building clean pipelines and forecasts",
    hero_subtitle: "Focused on time series, neural networks, and clean engineering structure.",
    hero_btn_projects: "Open Projects",
    hero_btn_repo: "EnergyCast Poland Repo",

    about_title: "About",
    about_text: "I build ML pipelines from preprocessing to evaluation.",

    highlight_title: "Highlighted project",
    highlight_desc: "24-hour electricity consumption forecasting for Poland.",

    projects_page_kicker: "Portfolio",
    projects_page_title: "Projects",
    projects_page_subtitle: "Selected learning and engineering projects.",

    proj_energy_title: "EnergyCast Poland",
    proj_energy_tag: "Time Series • PyTorch",
    proj_energy_desc: "Forecasting electricity demand using historical data.",

    skills_page_kicker: "Profile",
    skills_page_subtitle: "Tools and technologies I work with.",
    skills_title: "Skills",
    skills_ml: "ML & Data",
    skills_eng: "Engineering",

    skills_ml_1: "Time series forecasting",
    skills_ml_2: "Neural networks (PyTorch)",
    skills_ml_3: "Data preprocessing",
    skills_ml_4: "Model evaluation",

    skills_eng_1: "Clean project structure",
    skills_eng_2: "Reproducible experiments",
    skills_eng_3: "Git & GitHub",
    skills_eng_4: "Readable code",

    contacts_page_kicker: "Get in touch",
    contacts_page_subtitle: "Ways to contact me.",
    contacts_title: "Contacts",

    footer: "© 2026 Artem Logush"
  },

  uk: {
    nav_home: "Головна",
    nav_projects: "Проєкти",
    nav_skills: "Навички",
    nav_contacts: "Контакти",

    hero_kicker: "Машинне навчання • Python • Часові ряди",
    hero_title: "ML-розробник, що будує чисті пайплайни",
    hero_subtitle: "Фокус на часових рядах, нейромережах і структурі коду.",
    hero_btn_projects: "Відкрити проєкти",
    hero_btn_repo: "Репозиторій EnergyCast",

    about_title: "Про мене",
    about_text: "Створюю ML-пайплайни від обробки даних до оцінки моделей.",

    highlight_title: "Головний проєкт",
    highlight_desc: "Прогноз споживання електроенергії на 24 години.",

    projects_page_kicker: "Портфоліо",
    projects_page_title: "Проєкти",
    projects_page_subtitle: "Навчальні та інженерні проєкти.",

    proj_energy_title: "EnergyCast Poland",
    proj_energy_tag: "Часові ряди • PyTorch",
    proj_energy_desc: "Прогнозування споживання електроенергії.",

    skills_page_kicker: "Профіль",
    skills_page_subtitle: "Мій стек технологій.",
    skills_title: "Навички",
    skills_ml: "ML та Дані",
    skills_eng: "Інженерія",

    skills_ml_1: "Прогнозування часових рядів",
    skills_ml_2: "Нейронні мережі (PyTorch)",
    skills_ml_3: "Обробка даних",
    skills_ml_4: "Оцінка моделей",

    skills_eng_1: "Чиста структура проєкту",
    skills_eng_2: "Відтворювані експерименти",
    skills_eng_3: "Git та GitHub",
    skills_eng_4: "Читабельний код",

    contacts_page_kicker: "Звʼязок",
    contacts_page_subtitle: "Як зі мною звʼязатися.",
    contacts_title: "Контакти",

    footer: "© 2026 Артем Логуш"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[currentLang][key]) {
      el.textContent = I18N[currentLang][key];
    }
  });
}

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem("lang", currentLang);
    applyLang();
  });
});

applyLang();

document.querySelectorAll(".download-zip").forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href =
      "https://github.com/Artiprt107/EnergyCast-Poland/archive/refs/heads/main.zip";
  });
});
