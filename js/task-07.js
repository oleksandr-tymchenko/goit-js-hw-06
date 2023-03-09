const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


console.log(input.value)
text.style.fontSize = `${input.value}px`;


input.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    
    text.style.fontSize = `${event.currentTarget.value}px`;
   
};