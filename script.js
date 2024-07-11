let btn = document.querySelector('button');
let input = document.querySelector('input');
let container = document.querySelector('.container');
let recipeContainer = document.querySelector('.recipe-container')

const fetchRecipe = async(query) => {
recipeContainer.innerHTML =  '<h2>Fetching Recipes...</h2>';
  const data = await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const resonce = await data.json()

  recipeContainer.innerHTML = '';

  resonce.meals.forEach(item => {
    let div = document.createElement('div');
    div.classList.add('recipe');
    recipeContainer.appendChild(div);
    console.log(item)
    div.innerHTML = `
    <img src="${item.strMealThumb}"/>
    <h3>${item.strMeal}</h3>
    <p><span>${item.strArea}</span> Dish</p>
    <p>Belongs to <span>${item.strCategory}</span> Category</p>
    `
  })
  
}


btn.addEventListener('click', () => {
  const searchBox = input.value.trim();
  if(!searchBox){
    recipeContainer.innerHTML = "<h2>Search your recipe...</h2>";
    return;
  }
  fetchRecipe(searchBox)
})