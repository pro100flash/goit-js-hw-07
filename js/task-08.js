const refs = {
    render: document.querySelector('button[data-action="render"]'),
    destroy:  document.querySelector('button[data-action="destroy"]'),
    boxes: document.getElementById('boxes'),
    input: document.getElementById('controls input')
};

function createBoxes(amount) {
    let newArray = [];

    for (let i = 0; i < amount; i +=1) {
        const newDiv = document.createElement('div');
        newDiv.style.width = `${30 + i * 10}px`;
        newDiv.style.height = `${30 + i * 10}px`;
        newDiv.style.backgroundColor =
        '#' + (((1 << 24) * Math.random()) | 0).toString(16);
        newArray.push(newDiv);
    }
    refs.boxes.append(...newArray);
};

function destroyBoxes() {
    refs.boxes.innerHTML = '';
};

refs.render.addEventListener('click', () => createBoxes(refs.input.value));
refs.destroy.addEventListener('click', destroyBoxes);