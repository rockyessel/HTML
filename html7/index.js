document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#toggle");

  toggle.addEventListener("click", () => {
    const body = document.querySelector("#dar");
    const darkMode = body.classList.toggle("darkMode");
  });
});
