
const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const formEmail = formElements.email.value;
    const formPass = formElements.password.value;
    const formData = { formEmail, formPass };
 
    if (formEmail === '' || formPass === '') {
        alert('Please fill in all fields');
    } else {
        console.log(formData);
    };

    event.currentTarget.reset();
};

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onFormSubmit);
    
//  function onFormSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password }
//   } = event.currentTarget;
     
//     if (email.value === '' || password.value  === '') {
//         alert('Please fill in all fields');
//     } else {
        
//         console.log(elements);
//     }
  
// };