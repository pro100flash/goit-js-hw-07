const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const valueRef = document.querySelector('#value')

decrementBtn.addEventListener('click', function() {

    counter.decrement();
    valueRef.textContent = counter.value;
});

incrementBtn.addEventListener('click', function() {

    counter.increment();
    valueRef.textContent = counter.value;
});