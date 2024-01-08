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
  data: T[];
  totalPages: number;
  page: number;
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
};

type OwnRecipePreview = Recipe & {
  cookingTime: string;
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
  ingredient: Ingredient;
  ingredientMeasure: IngredientMeasure;
};

type ShoppingListItem = {
  _id: string;
  quantity: string;
  ingredient: Ingredient;
};

type User = {
  _id: string;
  email: string;
  name: string;
};
