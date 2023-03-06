const input = document.querySelector('#validation-input');

const validLength = Number(input.dataset.length);


input.addEventListener('blur', onCheckValidLength);


function onCheckValidLength(event) {
    
    let inputLength = Number(event.currentTarget.value.length);  
    
    // inputLength === validLength ? input.classList.add('valid')
    //     : input.classList.add('invalid');
    

    if (inputLength === validLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');  
        input.classList.remove('valid');  
    };
    
};
