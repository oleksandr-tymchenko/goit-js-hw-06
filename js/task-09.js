
const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// bodyEl.style.backgroundColor ='tomato';

btnEl.addEventListener('click', onBtnClickShowColor);

function onBtnClickShowColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
};



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

