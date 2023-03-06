const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

const onDecrementValue = () => {
    counterValue -= 1;
    value.textContent = counterValue; 
}

const onIncrementtValue = () => {
    counterValue += 1;
    value.textContent = counterValue; 
}

decrBtn.addEventListener('click', onDecrementValue);
incrBtn.addEventListener('click', onIncrementtValue);



