document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input").addEventListener("input", (value) => {
    console.log(value.target.value);
  });
});
