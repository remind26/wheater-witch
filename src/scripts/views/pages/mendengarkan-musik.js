/* eslint-disable no-param-reassign */
/* eslint-disable no-trailing-spaces */
const Musik = {
  async render() {
    return `
        <div class="hero" id="hero">
          <img src="./images/heros/hero-image_2.jpg" alt="Hero Image">
          <div class="hero-text" tabindex="0">
            <h1>Welcome to WeatherWitch</h1>
            <p>Reliable activity detection with weather</p>
          </div>
        </div>
        <div id="recipes" class="recipes">
          <h2>Recipes List</h2>
          <div class="search-container">
            <input type="text" id="searchInput" placeholder="Search..." tabindex="0">
            <button id="searchButton" tabindex="0">Cari</button>
          </div>
          <div id="recipe-list"></div>
        </div>
      `;
  },

  async afterRender() {
    const recipeListContainer = document.getElementById('recipe-list');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', async () => {
      const query = searchInput.value;
      await this.searchRecipes(query, recipeListContainer);
    });

    // Fetch and display default recipes on page load
    await this.searchRecipes('', recipeListContainer);
  },

  async searchRecipes(query, container) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      const recipes = data.meals;

      container.innerHTML = '';

      if (recipes && recipes.length > 0) {
        recipes.forEach((recipe) => {
          const recipeItem = document.createElement('div');
          recipeItem.classList.add('recipe-item');
          recipeItem.innerHTML = `
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" />
            <h3>${recipe.strMeal}</h3>
            <p>${recipe.strInstructions.substring(0, 100)}...</p>
          `;
          container.appendChild(recipeItem);
        });
      } else {
        container.innerHTML = '<p>No recipes found</p>';
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      container.innerHTML = '<p>Failed to fetch recipes. Please try again later.</p>';
    }
  },
};

export default Musik;
