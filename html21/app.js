const toggle = () => {
  document.querySelector('.content').classList.toggle('show');
};

const btn = document.querySelector('.dropdown_btn');
btn.addEventListener('click', toggle);

const filterFunction = () => {
  const input = document.querySelector('[type=text]');
  const filter = input.value.toUpperCase();
  const drp_content = document.querySelector('.content');
  const a = drp_content.getElementsByTagName('a');
  for (let i = 0; i < a.length; i++) {
    const textValue = a[i].textContent || a[i].innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
    } else {
      a[i].style.display = 'none';
    }
  }
  //   drp_content.slot = 'ghana';
  //   console.log(drp_content);
  //   console.log(drp_content);
};
