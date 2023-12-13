import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1';

type Category = {
  strCategory: string;
};

type CategoriesResponse = {
  meals: Category[];
};

type RecipeResponse = {
  meals: Recipe[];
};

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export const getRecipeByQuery = async (q: string, searchBy: string) => {
  let query: Promise<AxiosResponse<RecipeResponse>> | null = null;

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
    const res = await axios.get<RecipeResponse>(`/1/filter.php?c=${category}`);

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
      axios.get<RecipeResponse>(`/1/filter.php?c=${category.strCategory}`)
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
