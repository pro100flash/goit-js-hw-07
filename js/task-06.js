const inputValidation = document.querySelector('#validation-input');

function checkValidation(event) {

    if (Number(inputValidation.dataset.length) === event.target.value.length) {
        inputValidation.classList.remove('invalid');
        inputValidation.classList.add('valid');
        console.log('valid')
    }   else {
        inputValidation.classList.remove('valid');
        inputValidation.classList.add('invalid');
        console.log('invalid')
    }
};

inputValidation.addEventListener('blur', checkValidation);