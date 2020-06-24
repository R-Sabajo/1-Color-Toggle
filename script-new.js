const body = document.getElementById('body');
const showColorText = document.getElementById('color-main');
const button = document.getElementById('button');
const nav = document.getElementById('nav');

let colors = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const colorIds = Array.from(document.getElementsByClassName('color-list-li'));

const removeClass = colors =>
  body.classList.remove(
    'white',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  );
const keyP = ['49', '50', '51', '52', '53', '54', '55'];

const addClass = color => {
  body.classList.add(color);
};
const navOpen = button.addEventListener('mouseover', e => {
  nav.classList.add('nav-open');
});
const navClick = button.addEventListener('click', e => {
  nav.classList.toggle('nav-open');
});
const navHide = () => nav.classList.remove('nav-open');
const keyPress = () => {
  for (let i = 0; i < keyP.length; i++)
    body.addEventListener('keypress', e => {
      if (e.keyCode == keyP[i]) {
        removeClass();
        addClass(colors[i]);
        showColorText.textContent = colors[i];
      }
    });
};
keyPress();
const clickColor = () => {
  for (let i = 0; i < colorIds.length; i++) {
    colorIds[i].addEventListener('click', () => {
      removeClass();
      addClass(colors[i]);
      showColorText.textContent = colors[i];
      navHide();
    });
  }
};
clickColor();
