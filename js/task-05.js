// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputValue = document.getElementById('name-input');
const outputValue = document.getElementById('name-output');

inputValue.oninput = function() {
    if(inputValue.value === '') {
    outputValue.innerHTML = 'незнакомец';
    } else {
        outputValue.innerHTML = inputValue.value;
    }
}