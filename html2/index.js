document.addEventListener("DOMContentLoaded", () => {
  const recVidZero = new Promise((resolve, rejects) => {
    resolve("The zeroth video was recorded");
  });
  const recVidOne = new Promise((resolve, rejects) => {
    resolve("The first video was recorded");
  });
  const recVidTwo = new Promise((resolve, rejects) => {
    resolve("The second video was recorded");
  });

  Promise.all([recVidZero, recVidOne, recVidTwo]).then((m) => {
    m;
  });

  function autoGenerateText() {
    const createDiv = document.createElement("search");
    const appendText = document.createTextNode(`New Div`);
    createDiv.appendChild(appendText);

    const grabDiv = document.querySelector("#div");
    let show = grabDiv.appendChild(createDiv);
    console.log(grabDiv);
    return show;
  }

  const btn = document.querySelector("#btn");

  btn.addEventListener("click", autoGenerateText);
});
