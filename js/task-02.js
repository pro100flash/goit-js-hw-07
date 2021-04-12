const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const ingredientsList = ingredients.map(food => {
  const li = document.createElement('li');
  li.textContent = food;
  
  return li;
});
document.querySelector('#ingredients').append(...ingredientsList);

console.log(ingredientsList);
