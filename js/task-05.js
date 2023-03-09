const input = document.querySelector('#name-input');
const labelValue = document.querySelector('#name-output');


input.addEventListener('input', onInputChange);


function onInputChange(event) {

     
    // event.currentTarget.value !== '' ? labelValue.textContent = event.currentTarget.value.trim() 
    //     : labelValue.textContent = 'Anonymous';
    
    // todo заміняю на ||

    labelValue.textContent = event.currentTarget.value.trim() || 'Anonymous';
    
};