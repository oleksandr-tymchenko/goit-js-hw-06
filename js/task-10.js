const inputEl = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestr = document.querySelector('button[data-destroy]');
const elementsWrapper = document.querySelector('#boxes');

console.dir(inputEl);
console.log(inputEl.value); // так не виходить достукатись.

// inputEl.addEventListener('input', amountVal);
btnCreate.addEventListener('click', createBoxes);
btnDestr.addEventListener('click', destroyBoxes);

// const amount = inputEl.valueOf
// console.log(amount);

// function amountVal(event) {
//   const amount = event.currentTarget.value;
  
//   // return amountVal;
//   // const amountVal = 6;
//   // console.log(typeof(amount));
//   // return Number(amountVal);
//   // if (event.target.dataset.create) {
//   //   console.log('event.target.dataset')
//   //   btnCreate.addEventListener('click', createBoxes(amountVal))
//   // }
//   // btnCreate.addEventListener('click', createBoxes(amountVal));
//   // createBoxes(amountVal);
//   if (event.target.dataset) {
//     createBoxes(amount);
//   }
//   // event.target.dataset.create = amountVal;
//   // console.log(event.target.dataset.create);
// };


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

  
//  console.log(event.currentTarget.dataset)
 
  // console.log(event.target);
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
  // console.log(elArr);
  elementsWrapper.append(...elArr);
  

};

function destroyBoxes() {
  elementsWrapper.innerHTML = '';
  inputEl.value = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

