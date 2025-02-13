// Sample recipe data
const recipes = [
    {
      name: "Spaghetti Carbonara",
      cuisine: "Italian",
      ingredients: ["spaghetti", "eggs", "cheese", "bacon"],
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
    },
    {
      name: "Butter Chicken",
      cuisine: "Indian",
      ingredients: ["chicken", "butter", "tomato", "cream", "spices"],
      description: "A rich and creamy curry made with tender chicken in a buttery, spiced tomato sauce."
    },
    {
      name: "Kung Pao Chicken",
      cuisine: "Chinese",
      ingredients: ["chicken", "peanuts", "bell peppers", "soy sauce", "chili"],
      description: "A spicy stir-fried dish made with chicken, peanuts, and chili peppers."
    },
    {
      name: "Margherita Pizza",
      cuisine: "Italian",
      ingredients: ["dough", "tomato", "mozzarella", "basil"],
      description: "A simple yet delicious pizza topped with tomato, mozzarella cheese, and fresh basil."
    }
  ];
  
  // Function to display recipes
  function displayRecipes(recipesToDisplay) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ""; // Clear current recipes
    recipesToDisplay.forEach(recipe => {
      const recipeItem = document.createElement("div");
      recipeItem.classList.add("recipe-item");
      recipeItem.innerHTML = `
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
        <p class="ingredients"><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
      `;
      recipeList.appendChild(recipeItem);
    });
  }
  
  // Filter and search function
  function filterRecipes() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const selectedCuisine = document.getElementById("filter-cuisine").value;
    
    const filteredRecipes = recipes.filter(recipe => {
      const matchesSearch = recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
      const matchesCuisine = selectedCuisine ? recipe.cuisine === selectedCuisine : true;
      return matchesSearch && matchesCuisine;
    });
  
    displayRecipes(filteredRecipes);
  }
  
  // Event listeners for search and filter
  document.getElementById("search").addEventListener("input", filterRecipes);
  document.getElementById("filter-cuisine").addEventListener("change", filterRecipes);
  
  // Initial display
  displayRecipes(recipes);
  