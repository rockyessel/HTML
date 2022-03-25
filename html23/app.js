const filterFunction = () => {
  const content = document.querySelector('.content');
  const inputValue = document.querySelector('[type=text]');
  const filter = inputValue.value.toLowerCase();
  const li = content.getElementsByTagName('li');
  console.log(inputValue);
  console.log(filter);

  for (let i = 0; i < li.length; i++) {
    const textValue = li[i].innerText || li[i].textContent;
    console.log(textValue);
    if (textValue.toLowerCase().indexOf(filter) !== -1) {
      const result = (li[i].style.display = 'block');
      console.log(result);
    } else {
      li[i].style.display = 'none';
    }
  }
};
filterFunction();
console.log(`first`);

const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
