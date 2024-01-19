import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import {
  addFavouriteRecipe,
  deleteFavouriteRecipe,
} from '../services/recipesApi';

const useFavouriteRecipes = () => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: deleteFavouriteRecipeMutate,
    isPending: isPendingDelete,
  } = useMutation({
    mutationFn: deleteFavouriteRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['favourite-recipes'],
      });
      toast.success('Recipe removed from favourites!');
    },
    onError: (error: AxiosError<ResponseError>) =>
      toast.error(error?.response?.data.message || error.message),
  });

  const { mutateAsync: addFavouriteRecipeMutate, isPending: isPendingAdd } =
    useMutation({
      mutationFn: addFavouriteRecipe,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['favourite-recipes'],
        });
        toast.success('Recipe added to favourites!');
      },
      onError: (error: AxiosError<ResponseError>) =>
        toast.error(error?.response?.data.message || error.message),
    });

  const isPending = isPendingDelete || isPendingAdd;

  return {
    deleteFavouriteRecipeMutate,
    addFavouriteRecipeMutate,
    isPending,
  };
};

export default useFavouriteRecipes;
