const inputValidation = document.getElementById('validation-input');
const inputCount = inputValidation.getAttribute('data-length');

function checkValidation() {

    if (inputValidation.value.length >= inputCount) {
        inputValidation.classList.add('valid');
        inputValidation.classList.remove('invalid');
        console.log('valid')
    }   else {
        inputValidation.classList.add('invalid');
        inputValidation.classList.remove('valid');
        console.log('invalid')
    }
};

inputValidation.addEventListener('blur', checkValidation);

