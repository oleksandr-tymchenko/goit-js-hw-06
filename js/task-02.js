const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach((ingredient, index) => {
  ingredient = document.createElement('li');
  ingredient.classList.add('item');
  ingredient.textContent = ingredients[index];
  
  ingredientsList.append(ingredient);
  
});



// console.log(ingredientsList);