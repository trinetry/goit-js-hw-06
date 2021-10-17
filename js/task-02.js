const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);

const ingredientsList = document.querySelector('#ingredients');
ingredients.forEach(element => {
  const listElements = document.createElement('li');
  listElements.textContent = element;
  listElements.classList.add('item');
  ingredientsList.append(listElements);
  console.log(listElements);
})