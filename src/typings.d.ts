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

type RecipeResponse<T> = {
  data: T[];
};

type CategoriesResponse = {
  data: Category[];
};

type Recipe = {
  id: string;
  strMeal: string;
  strMealThumb: string;
};

type OwnRecipePreview = Recipe & {
  cookingTime: string;
};

type RecipeDetails = Recipe & {
  strInstructions: string;
  strDescription: string;
  cookingTime: number;
  ingredients: IngredientRef[];
  category: Category;
};

type Ingredient = {
  id: string;
  name: string;
  image: string;
};

type IngredientRef = {
  ingredient: Ingredient;
  ingredientMeasure: IngredientMeasure;
};

type ShoppingListItem = {
  id: string;
  quantity: string;
  ingredient: Ingredient;
};

type User = {
  id: string;
  email: string;
  name: string;
};
