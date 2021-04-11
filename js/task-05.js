const inputValue = document.getElementById('name-input');
const outputValue = document.getElementById('name-output');

inputValue.oninput = function() {
    if(inputValue.value === '') {
    outputValue.innerHTML = 'незнакомец';
    } else {
        outputValue.innerHTML = inputValue.value;
    }
}