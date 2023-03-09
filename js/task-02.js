const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');
 
const ingrTransform = ingredients.map(element => {
  const ingredient = document.createElement('li');
  ingredient.classList.add('item');
  ingredient.textContent = element;
  
  return ingredient;
});


ingredientsList.append(...ingrTransform);


