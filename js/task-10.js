const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestr = document.querySelector('button[data-destroy]');
const elementsWrapper = document.querySelector('#boxes');


console.log(inputEl.value)

inputEl.addEventListener('input', amount);
btnCreate.addEventListener('click', amount, createBoxes);
btnDestr.addEventListener('click', destroyBoxes);




function amount(event) {
  const amountVal = Number(event.currentTarget.value);
  // const amountVal = 6;
  // console.log(typeof(amount));
  // return Number(amountVal);
  createBoxes(amountVal);
};


// створюю ф-ю createBoxes:
// 1 - додати стилі з розмірами блоку
// 2 - додати стилі з кольором блоку
// 3 - додати новий єл в DOM
// const newEl = document.createElement('div');
// newEl.style.width = '10px';
// newEl.style.height = '10px';
// newEl.style.backgroundColor = 'teal';

// elementsWrapper.append(newEl);

// console.log(newEl);

function createBoxes(amount) {
  
  console.log(amount);
  let elSize = 30;
  const elArr = [];
  for (let i = 0; i < amount; i += 1) {

    const newEl = document.createElement('div');
  
    newEl.style.width = `${elSize}px`;
    newEl.style.height = `${elSize}px`;
    newEl.style.backgroundColor = getRandomHexColor();
    
    elArr.push(newEl);
    elSize += 10;
   

  };
  console.log(elArr);
  elementsWrapper.append(...elArr);
  

};

function destroyBoxes() {
  elementsWrapper.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

