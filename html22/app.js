const btn = document.querySelector('.dropdown_btn');

const toggle = () => {
  document.querySelector('.content').classList.toggle('show');
};
btn.addEventListener('click', toggle);

const filterFunction = () => {
  const input = document.querySelector('[type=text]');
  const filter = input.value.toLowerCase();
  const content_div = document.querySelector('.content');
  const a = content_div.getElementsByTagName('a');
  let inputTextValue;
  for (let i = 0; i < a.length; i++) {
    inputTextValue = a[i].innerText || a[i].textContent;
    if (inputTextValue.toLowerCase().indexOf(filter) !== -1) {
      a[i].style.display = '';
    } else {
      a[i].style.display = 'none';
    }
  }
};
