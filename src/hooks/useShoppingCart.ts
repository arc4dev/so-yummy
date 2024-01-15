import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import {
  addShoppingCartItem,
  deleteShoppingCartItem,
} from '../utils/recipesApi';

const useShoppingCart = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: removeIngredientMutate, isPending: isPendingDelete } =
    useMutation({
      mutationFn: deleteShoppingCartItem,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['shopping-cart'],
        });
        toast.success('Ingredient removed from the shopping list!');
      },
      onError: (error: AxiosError<ResponseError>) =>
        toast.error(error?.response?.data.message || error.message),
    });

  const { mutateAsync: addIngredientMutate, isPending: isPendingAdd } =
    useMutation({
      mutationFn: addShoppingCartItem,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['shopping-cart'],
        });
        toast.success('Ingredient added to the shopping list!');
      },
      onError: (error: AxiosError<ResponseError>) =>
        toast.error(error?.response?.data.message || error.message),
    });

  const isPending = isPendingDelete || isPendingAdd;

  return {
    removeIngredientMutate,
    addIngredientMutate,
    isPending,
  };
};

export default useShoppingCart;
