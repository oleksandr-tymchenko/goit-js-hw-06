const input = document.querySelector('#name-input');
const labelValue = document.querySelector('#name-output');


input.addEventListener('input', onInputChange);


function onInputChange(event) {
    event.currentTarget.value !== '' ? labelValue.textContent = event.currentTarget.value 
        : labelValue.textContent = 'Anonymous';
    // labelValue.textContent = event.currentTarget.value;
    
    // let inputText = event.currentTarget.value;
    
    // if (inputText === "") {
    //     labelValue.textContent = 'Anonymous';
    // }
};