import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1';

type Category = {
  strCategory: string;
};

type CategoriesResponse = {
  meals: Category[];
};

type RecipeResponse<T> = {
  meals: T[];
};

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type RecipeDetails = Recipe & {
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
};

type Ingredients = {
  ingredientName: string;
  ingredientMeasure: string;
};

export const getRecipeById = async (id: string) => {
  try {
    const res = await axios.get<RecipeResponse<RecipeDetails>>(
      `/1/lookup.php?i=${id}`
    );

    const recipe = res.data.meals[0];

    //recipe.strMeasure1

    const ingredients = Object.keys(recipe).reduce(
      (acc: Ingredients[], key) => {
        if (
          key.startsWith('strIngredient') &&
          recipe[key as keyof RecipeDetails]
        ) {
          const ingredientName = recipe[key as keyof RecipeDetails];
          const ingredientMeasure =
            recipe[`strMeasure${key.slice(13)}` as keyof RecipeDetails];

          return [...acc, { ingredientName, ingredientMeasure }];
        }
        return acc;
      },
      []
    );

    return { ...res.data.meals[0], ingredients };
  } catch (err) {
    console.log(err);
  }
};

export const getRecipeByQuery = async (q: string, searchBy: string) => {
  let query: Promise<AxiosResponse<RecipeResponse<Recipe>>> | null = null;

  if (searchBy.toLowerCase() === 'title') {
    const searchParam = q.length === 1 ? 'f' : 's';

    query = axios.get(`/1/search.php?${searchParam}=${q}`);
  } else if (searchBy.toLowerCase() === 'ingredient') {
    query = axios.get(`/1/filter.php?i=${q}`);
  } else return null;

  try {
    const res = await query;

    return res.data.meals;
  } catch (err) {
    console.log(err);
  }
};

export const getRecipeByCategory = async (category: string) => {
  try {
    const res = await axios.get<RecipeResponse<Recipe>>(
      `/1/filter.php?c=${category}`
    );

    return res.data.meals;
  } catch (err) {
    console.log(err);
  }
};

export const getAllRecipesCategories = async () => {
  try {
    const res = await axios.get<CategoriesResponse>('/1/list.php?c=list');

    return res.data.meals;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getRecipesByAllCategories = async () => {
  try {
    const categories = await getAllRecipesCategories();

    // Create an array of promises to fetch recipes by category
    const recipesPromiseArr = categories.map((category) =>
      axios.get<RecipeResponse<Recipe>>(
        `/1/filter.php?c=${category.strCategory}`
      )
    );

    // Resolve all promises to get an array of recipes by categories
    const recipesByCategories = await Promise.all(recipesPromiseArr);

    // Create an array of objects with category name and recipes
    const categorizedRecipes = categories.map((category, index) => {
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
