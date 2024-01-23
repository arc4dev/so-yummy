export const transformErrorMessage = (message: string | undefined) => {
  if (!message) return message;
  // Define a mapping of field names to custom names
  const fieldMapping = {
    strMealThumb: 'Recipe image',
    strMeal: 'Recipe name',
    strDescription: 'Description',
    category: 'Category',
    cookingTime: 'Cooking time',
    ingredients: 'Ingredients',
    strInstructions: 'Instructions',
    ingredient: 'Ingredient',
    ingredientMeasure: 'Ingredient measure',
  };

  // Replace field names with custom names in the error message
  let transformedMessage = message;

  Object.keys(fieldMapping).forEach((fieldName) => {
    transformedMessage = transformedMessage.replace(
      new RegExp(fieldName, 'g'),
      fieldMapping[fieldName]
    );
  });

  // Capitalize the first letter of the message
  transformedMessage =
    transformedMessage.charAt(0).toUpperCase() + transformedMessage.slice(1);

  return transformedMessage;
};
