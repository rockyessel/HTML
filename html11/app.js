// const run = (n) => {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n * run(n - 1);
//   }
// };
// console.log(run(5));

// let button = document.createElement("button");
// console.log(button);
// button.setAttribute("class", "header1");
// console.log(button.classList[0]);
// if (button.classList[0] === "header1") {
//   document.querySelector("body").style.backgroundColor = "#342423";
// }
// button.innerHTML = "Click Me";
// // button.type = "button";
// const body = document.querySelector("body");
// // body.appendChild(button);
// const menu = document.querySelector("#contextMenu");

// button.onclick = function () {
//   const d = button.getAttribute("class");
//   //   alert(d);
//   let clicked = false || true;
//   console.log(clicked);

//   if (clicked) {
//     if (clicked === false) {
//       menu.style.display = "block";
//       console.log(clicked);
//     }
//     if (!clicked) {
//       return (menu.style.display = "none");
//       console.log(clicked);
//     }
//   }
// };

// random color generator
// var randomColor = function () {
//   var rvalue = function () {
//     return Math.round(Math.random() * 255);
//   };

//   return `rgb(${rvalue()},${rvalue()},${rvalue()})`;
// };

// // get button element from DOM
// var button = document.querySelector("button");

// // create event listener to change background color on button click
// button.onclick = function () {
//   body.style.backgroundColor = randomColor();
// };

// const h1 = document.querySelector("h1");
// h1.classList.add("Class");
// h1.classList.add("Clas");
// h1.classList.add("Clss");
// h1.classList.add("Cass");

// if (h1.contains("class")) {
//   body.style.backgroundColor = "red";
// }
// Element.classList.replace(oldClass, newClass).
// Element.classList.contains(class)
// Element.classList.remove(class)

// var images = [
//   "https://images2.imgbox.com/30/06/rhPzqKoF_o.jpg", //1  /0
//   "https://images2.imgbox.com/b3/cb/RS7EalSu_o.jpg", //2  /1
//   "https://images2.imgbox.com/6e/bb/b53D6yIM_o.jpg", //3  /2
//   "https://images2.imgbox.com/0b/bc/osNC6GCT_o.jpg", //4  /3
//   "https://images2.imgbox.com/60/48/nmGOxy1U_o.jpg", //5  /4
//   "https://images2.imgbox.com/e4/79/F8vkmw4I_o.jpg", //6  /5
//   "https://images2.imgbox.com/d5/31/3qp9QNtG_o.png", //7  /6
// ];
// console.log(images.length - 1);
// var currentIndex = 0;

// const img = document.querySelector("img");
// const prev = document.querySelector("#pre-button");
// const nextButton = document.querySelector("#next-button");

// const incrementIndex = () => {
//   currentIndex = currentIndex + 1;
//   if (currentIndex > images.length-1) {
//     currentIndex = 0;
//   }
//   return currentIndex;
// };
// nextButton.onclick = function () {
//   img.setAttribute("src", images[incrementIndex(currentIndex)]);
// };

// var decrementIndex = function () {
//   console.log(currentIndex);
//   currentIndex = currentIndex - 1;
//   if (currentIndex < 0) {
//     currentIndex = images.length - 1;
//   }
//   return currentIndex;
// };

// prev.onclick = function () {
//   img.setAttribute("src", images[decrementIndex(currentIndex)]);
// };
const ul = document.querySelector("ul");

// const createTodo = () => {
//   //Creating our HTML element
//   const li = document.createElement("li");
//   const input = document.createElement("input");
//   const label = document.createElement("label");
//   const button = document.createElement("button");

//   //Setting the attribute of the HTMl element
//   input.setAttribute("type", "checkbox");
//   label.innerHTML = "Learn CSS";
//   button.setAttribute("class", "delete");
//   button.innerHTML = "Delete";

//   //Appending the input,label and the button to li
//   li.appendChild(input);
//   li.appendChild(label);
//   li.appendChild(button);
//   return li;
// };
// console.log(createTodo());
var toggleCheck = function () {
  let parent = this.parentNode;
  parent.classList.toggle("checked");
};
var deleteTodo = function () {
  let todoLi = this.parentNode;
  todoLi.remove();
};
var createTodo = function (todo) {
  let li = document.createElement("li");

  let label = document.createElement("label");
  label.innerHTML = todo;
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = toggleCheck;

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "delete";
  deleteButton.onclick = deleteTodo; //nest todo elements in list item

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteButton);
  return li;
};
createTodo();

document.getElementById("add").onclick = function () {
  // store the button's parent element (.addTodo <div>) in a variable
  var parent = this.parentNode;
  // store the input, which is the *first* child element of the .addTodo <div>
  var addTextInput = parent.children[0];
  if (addTextInput.value === "") {
    return;
  } else {
    //add todo
    createTodo(addTextInput.value); //reset input
    addTextInput.value = "";
  }
};
