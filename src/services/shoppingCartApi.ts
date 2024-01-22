import axios from 'axios';

export const getShoppingCart = async (page = 1) => {
  const res = await axios.get<DatabaseResponseMany<IngredientItem>>(
    `/shopping-list?page=${page}`
  );

  return res.data;
};

export const addShoppingCartItem = async ({
  ingredientId,
  ingredientMeasure,
}: {
  ingredientId: string;
  ingredientMeasure: string;
}) => {
  const res = await axios.post<DatabaseResponse<IngredientItem>>(
    '/shopping-list',
    {
      ingredient: ingredientId,
      ingredientMeasure,
    }
  );

  return res.data.data;
};

export const deleteShoppingCartItem = async (ingredientId: string) => {
  await axios.delete<DatabaseResponse<IngredientItem>>(
    `/shopping-list/${ingredientId}`
  );

  return null;
};
