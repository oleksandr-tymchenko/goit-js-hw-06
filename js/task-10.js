const inputEl = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestr = document.querySelector('button[data-destroy]');
const elementsWrapper = document.querySelector('#boxes');

const inpMin = Number(inputEl.min);
const inpMax = Number(inputEl.max);
const inpStep = Number(inputEl.step);



inputEl.addEventListener('change', amountVal);

btnCreate.addEventListener('click', createBoxes);
btnDestr.addEventListener('click', destroyBoxes);

// todo ----------------3-decision-better then 2----------------------


// console.log(inputEl.attributes);
function amountVal(event) {

  let amountVal = Number(event.currentTarget.value);

  if (amountVal > inpMin && amountVal < inpMax) {
    
  
    createBoxes(amountVal);
  };
};

function createBoxes(amount) {
  
 
  let elSize = 30;
  const elArr = [];
  for (let i = 0; i < amount; i += inpStep) {

    const newEl = document.createElement('div');
  
    newEl.style.width = `${elSize}px`;
    newEl.style.height = `${elSize}px`;
    newEl.style.backgroundColor = getRandomHexColor();
    
    elArr.push(newEl);
    elSize += 10;
   

  };
  
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









// todo -----------------2-decision-works--------------
// let amount = [];
// // console.log(inputEl.attributes);
// function amountVal(event) {

//   let amountVal = Number(event.currentTarget.value);

//   if (amountVal > inpMin && amountVal < inpMax) {
//   amount.push(amountVal);
//   }
  
// };


// function createBoxes() {
  
 
//   let elSize = 30;
//   const elArr = [];
//   for (let i = 0; i < amount[0]; i += inpStep) {

//     const newEl = document.createElement('div');
  
//     newEl.style.width = `${elSize}px`;
//     newEl.style.height = `${elSize}px`;
//     newEl.style.backgroundColor = getRandomHexColor();
    
//     elArr.push(newEl);
//     elSize += 10;
   

//   };
  
//   elementsWrapper.append(...elArr);
  

// };



// function destroyBoxes() {
//   elementsWrapper.innerHTML = '';
//   inputEl.value = '';
//   amount.pop();
// }


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


// !--------------------------------------1-decision-wrong------------



// function amountVal(event) {
//   const amount = event.currentTarget.value;
//   console.log(amount)
//   console.log(inputEl.max)
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
//   // if (amount > inputEl.min && amount < inputEl.max) {
//   //   console.log(amount)
//   //   createBoxes(amount);
    
//   // }
//   // event.target.dataset.create = amountVal;
//   // console.log(event.target.dataset.create);
//   btnCreate.addEventListener('click', createBoxes);
//   function createBoxes() {

  
// //  console.log(event.currentTarget.dataset)
 
//   // console.log(event.target);
//   let elSize = 30;
//   const elArr = [];
//   for (let i = 0; i < amount; i += 1) {

//     const newEl = document.createElement('div');
  
//     newEl.style.width = `${elSize}px`;
//     newEl.style.height = `${elSize}px`;
//     newEl.style.backgroundColor = getRandomHexColor();
    
//     elArr.push(newEl);
//     elSize += 10;
   

//   };
  
//   elementsWrapper.append(...elArr);
  

// };
// };


// // ?????????????? ??-?? createBoxes:
// // 1 - ???????????? ?????????? ?? ?????????????????? ??????????
// // 2 - ???????????? ?????????? ?? ???????????????? ??????????
// // 3 - ???????????? ?????????? ???? ?? DOM
// // const newEl = document.createElement('div');
// // newEl.style.width = '10px';
// // newEl.style.height = '10px';
// // newEl.style.backgroundColor = 'teal';

// // elementsWrapper.append(newEl);

// // console.log(newEl);

