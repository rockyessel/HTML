let word;

const input = document.querySelector("#search");
const btn = document.querySelector("#searchButton");
const result = document.querySelector("#display");

const myFun = () => {
  const show = input.value;
  const showing = (result.innerHTML = show);
  return showing;
};

btn.addEventListener("click", myFun);

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${myFun()}`;
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log(myFun());
console.log(url);
