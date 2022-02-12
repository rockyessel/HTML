document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#toggle");

  toggle.addEventListener("click", () => {
    document.querySelector("#dar").classList.toggle("darkMode");
  });
});
