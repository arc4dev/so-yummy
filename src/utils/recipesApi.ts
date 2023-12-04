import axios from 'axios';

type Category = {
  strCategory: string;
};

type CategoriesResponse = {
  meals: Category[];
};

type RecipeByCategoryResponse = {
  meals: Recipe[];
};

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export const getRecipesByAllCategories = async () => {
  try {
    const res = await axios.get<CategoriesResponse>(
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    );

    // Create an array of promises to fetch recipes by category
    const recipesPromiseArr = res.data.meals.map((category) =>
      axios.get<RecipeByCategoryResponse>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
      )
    );

    // Resolve all promises to get an array of recipes by categories
    const recipesByCategories = await Promise.all(recipesPromiseArr);

    // Create an array of objects with category name and recipes
    const categorizedRecipes = res.data.meals.map((category, index) => {
      return {
        category: category.strCategory,
        recipes: recipesByCategories[index].data.meals,
      };
    });

    return categorizedRecipes;
  } catch (err) {
    console.log(err);
  }
};
