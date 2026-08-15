/* ---------------------------------------------------------------------------
 *  SITE CONFIGURATION
 *
 *  Everything you are likely to want to change lives in this one object.
 *  Edit a value here and it updates on every page automatically.
 *
 *  The same text is also written into the HTML as a fallback for the rare case
 *  where scripts are blocked, so if you rename the developer here you may also
 *  want to search the .html files for the old name. Nothing breaks if you don't.
 * ------------------------------------------------------------------------- */

const SITE = {
  // Shown in the footer, the About section and the copyright line. Must match
  // DEVELOPER_NAME in SettingsViewModel.kt, which shows the same names in the app.
  developer: "Hasan B. & Levent B.",

  appName: "Audio Recorder",
  version: "1.0.0",

  // Must match the mailto: address in SettingsViewModel.openSupportEmail().
  supportEmail: "hasan.bayramoglu.developer@gmail.com",

  // Leave as an empty string until the app is published. While it is empty the
  // download buttons render as a non-clickable "Coming soon to Google Play".
  playStoreUrl: "",

  privacyUrl: "privacy.html",
  homeUrl: "index.html",

  // Used in the privacy policy's "last updated" line. Format: YYYY-MM-DD.
  policyUpdated: "2026-08-15"
};

/* --------------------------------------------------------------------------
 *  Below this line is wiring. You should not need to edit it.
 * ------------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  // Fill any element marked with data-site="key" from the config above.
  document.querySelectorAll("[data-site]").forEach((el) => {
    const value = SITE[el.getAttribute("data-site")];
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-site-href]").forEach((el) => {
    const value = SITE[el.getAttribute("data-site-href")];
    if (value) el.setAttribute("href", value);
  });

  // Mailto links.
  document.querySelectorAll("[data-site-mail]").forEach((el) => {
    if (SITE.supportEmail) {
      el.setAttribute("href", "mailto:" + SITE.supportEmail);
      if (!el.textContent.trim()) el.textContent = SITE.supportEmail;
    }
  });

  // Store buttons: real link when a URL is configured, inert label when not.
  document.querySelectorAll("[data-store-button]").forEach((el) => {
    if (SITE.playStoreUrl) {
      el.setAttribute("href", SITE.playStoreUrl);
      el.classList.remove("is-pending");
      el.removeAttribute("aria-disabled");
    } else {
      el.removeAttribute("href");
      el.classList.add("is-pending");
      el.setAttribute("aria-disabled", "true");
      el.textContent = "Coming soon to Google Play";
    }
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Theme toggle, remembered across visits.
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  document.querySelectorAll("[data-theme-toggle]").forEach((el) => {
    el.addEventListener("click", () => {
      const current =
        root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  });
});
