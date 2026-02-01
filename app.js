const I18N = {
  en: {
    nav_home: "Home",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contacts: "Contacts",
    hero_title: "ML Developer building clean pipelines and forecasts",
    hero_subtitle: "Time series, neural networks, Python & PyTorch",
    btn_back_home: "Back to Home",
    btn_download_zip: "Download ZIP",
    footer: "© 2026 Artem Logush"
  },
  uk: {
    nav_home: "Головна",
    nav_projects: "Проєкти",
    nav_skills: "Навички",
    nav_contacts: "Контакти",
    hero_title: "ML-розробник: чисті пайплайни та прогнози",
    hero_subtitle: "Часові ряди, нейромережі, Python та PyTorch",
    btn_back_home: "Назад на головну",
    btn_download_zip: "Завантажити ZIP",
    footer: "© 2026 Artem Logush"
  }
};

const LANG_KEY = "lang";
const DEFAULT_LANG = "en";

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function initLang() {
  const lang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  setLang(lang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.onclick = () => setLang(btn.dataset.lang);
  });
}

function setActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  setActiveNav();
});