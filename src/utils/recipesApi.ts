import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_RECIPES_API_URL_DEV
    : import.meta.env.VITE_RECIPES_API_URL;

axios.defaults.headers.common['Authorization'] = `Bearer ${
  import.meta.env.VITE_TEST_API_KEY
}`;

export const getRecipeById = async (id: string, isSearchPrivate: boolean) => {
  try {
    const res = await axios.get<DatabaseResponse<RecipeDetails>>(
      `/recipes/${id}${isSearchPrivate ? '?isPrivate=true' : ''}`
    );

    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getRecipeByQuery = async (q: string, searchBy: string) => {
  let query: Promise<AxiosResponse<DatabaseResponseMany<Recipe>>> | null = null;

  if (searchBy.toLowerCase() === 'title') {
    query = axios.get(`/recipes/search/${q}`);
  } else if (searchBy.toLowerCase() === 'ingredient') {
    query = axios.get(`/recipes/ingredient/${q}`);
  } else return null;

  try {
    const res = await query;

    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getRecipesByCategory = async (category: string) => {
  try {
    const res = await axios.get<DatabaseResponseMany<Recipe>>(
      `/recipes?category=${category}`
    );

    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllRecipesCategories = async () => {
  try {
    const res = await axios.get<CategoriesResponse>('/recipes/categories');

    return res.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getRecipesHomeCategories = async () => {
  try {
    const categories = await getAllRecipesCategories();

    const filteredCategories = categories.filter((category) =>
      ['Breakfast', 'Chicken', 'Dessert', 'Miscellaneous'].includes(category)
    );

    // Create an array of promises to fetch recipes by category
    const recipesPromiseArr = filteredCategories.map((category) =>
      axios.get<DatabaseResponseMany<Recipe>>(`/recipes?category=${category}`)
    );
    // Resolve all promises to get an array of recipes by categories
    const recipesByCategories = await Promise.all(recipesPromiseArr);

    // Create an array of objects with category name and recipes
    const categorizedRecipes = filteredCategories.map((category, index) => {
      return {
        category: category,
        recipes: recipesByCategories[index].data.data,
      };
    });

    return categorizedRecipes;
  } catch (err) {
    console.log(err);
  }
};

export const getOwnRecipes = async () => {
  try {
    const res = await axios.get<DatabaseResponseMany<OwnRecipePreview>>(
      '/users/my-recipes'
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
