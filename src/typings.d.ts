enum Category {
  Beef = 'Beef',
  Breakfast = 'Breakfast',
  Chicken = 'Chicken',
  Dessert = 'Dessert',
  Lamb = 'Lamb',
  Miscellaneous = 'Miscellaneous',
  Pasta = 'Pasta',
  Pork = 'Pork',
  Seafood = 'Seafood',
  Side = 'Side',
  Starter = 'Starter',
  Vegetarian = 'Vegetarian',
}

type DatabaseResponseMany<T> = {
  status: 'success' | 'fail';
  page: number;
  results: number;
  totalPages: number;
  page: number;
  data: T[];
};

type DatabaseResponse<T> = {
  data: T;
};

type CategoriesResponse = {
  data: Category[];
};

type Recipe = {
  _id: string;
  strMeal: string;
  strMealThumb: string;
  favouritedBy: string[];
};

type OwnRecipePreview = Recipe & {
  cookingTime: number;
  strDescription: string;
};

type RecipeDetails = Recipe & {
  strInstructions: string;
  strDescription: string;
  cookingTime: number;
  ingredients: IngredientItem[];
  category: Category;
};

type Ingredient = {
  _id: string;
  name: string;
  image: string;
};

type IngredientItem = {
  _id: string;
  ingredient: Ingredient;
  ingredientMeasure: IngredientMeasure;
};

type User = {
  _id: string;
  email: string;
  name: string;
  image: string;
};

type LoginFormData = {
  email: string;
  password: string;
};

type RegisterFormData = LoginFormData & {
  name: string;
};

type ResponseError = {
  status: 'fail';
  message: string;
};

type OwnRecipeListVariant = 'primary' | 'secondary';
