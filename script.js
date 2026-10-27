// Theme toggle: saves the choice, falls back to the visitor's system setting.
const root = document.documentElement;
const btn = document.getElementById("theme");
const isDark = () =>
  root.dataset.theme ? root.dataset.theme === "dark"
                     : matchMedia("(prefers-color-scheme: dark)").matches;
const label = () => { btn.textContent = isDark() ? "Light" : "Dark"; };

btn.addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
  label();
});
label();

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
