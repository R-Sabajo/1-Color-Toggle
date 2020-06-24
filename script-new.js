//select al DOM elements:
const body = document.getElementById('body');
const showColorText = document.getElementById('color-main');
const button = document.getElementById('nav');
const radioBtns = Array.from(
  document.getElementsByClassName('selection-radio')
);
const nav = document.getElementById('nav');
const colorIds = Array.from(document.getElementsByClassName('color-list-li'));

//make variables array for colornames and keypresses:
let colors = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const keyP = ['49', '50', '51', '52', '53', '54', '55'];

// create function to remove all color classes before adding a new one:
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

// create function to add the color class:
const addClass = color => {
  body.classList.add(color);
};

// add Eventlisteners to the nav button
const navClick = button.addEventListener('click', e => {
  nav.classList.toggle('nav-open');
});

button.addEventListener('mouseover', e => {
  nav.classList.add('nav-open');
});
const navHover = button.addEventListener('mouseleave', e => {
  nav.classList.remove('nav-open');
});

// create functions for the color buttons:
const navHide = () => nav.classList.remove('nav-open');

const keyPress = () => {
  for (let i = 0; i < keyP.length; i++)
    body.addEventListener('keypress', e => {
      if (e.keyCode == keyP[i]) {
        removeClass();
        addClass(colors[i]);
        showColorText.textContent = colors[i];
        radioBtns.forEach(btn => {
          if (colors[i] === btn.value) {
            btn.checked = true;
          }
        });
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
