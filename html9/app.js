document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.querySelector(".create");
  const deleteBtn = document.querySelector(".delete");
  const display = document.querySelector(".display");
  const pTag = document.createElement("p");

  const createDiv = () => {
    pTag.setAttribute("class", "newDiv");
    pTag.appendChild(document.createTextNode("New Div"));

    return display.appendChild(pTag);
  };

  const deleteDiv = (pTag) => {
    console.log(pTag);
  };
  deleteDiv();
  createBtn.addEventListener("click", createDiv);
});
