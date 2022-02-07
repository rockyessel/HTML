document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".navbar_toggle");
  const links = document.querySelector(".main_nav");

  navToggle.addEventListener("click", () => {
    links.classList.toggle("show_nav");
  });
});
