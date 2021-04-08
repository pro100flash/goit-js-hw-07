const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const ingredientsList = ingredients.map(food => {
  const list = document.createElement('li');
  list.textContent = food;
  
  return food;
});
document.querySelector('#ingredients').append(...ingredientsList);

console.log(ingredientsList);
