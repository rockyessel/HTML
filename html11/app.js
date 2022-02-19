const run = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n * run(n - 1);
  }
};
console.log(run(5));

let button = document.createElement("button");
console.log(button);
button.setAttribute("class", "header1");
console.log(button.classList[0]);
if (button.classList[0] === "header1") {
  document.querySelector("body").style.backgroundColor = "#342423";
}
button.innerHTML = "Click Me";
button.type = "button";
const body = document.querySelector("body");
body.appendChild(button);

button.onclick = function () {
  const d = button.getAttribute("class");
  //   alert(d);
  let clicked = false || true;

  if (clicked === true) {
    body.style.backgroundColor = "#333";
    body.style.color = "#ffffff";
    console.log(clicked);
  } else if (clicked === false) {
    document.querySelector("body").style.backgroundColor = "#ffffff";
    console.log(clicked);
  }
};
