const sizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

function changeTextSize(event) {
    text.style.fontSize = event.currentTarget.value + "px";
};

sizeControl.addEventListener('input', changeTextSize);