import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { addOwnRecipe, deleteOwnRecipe } from '../services/recipesApi';

const useOwnRecipes = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteOwnRecipeMutate, isPending: isPendingDelete } =
    useMutation({
      mutationFn: deleteOwnRecipe,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['my-recipes'],
        });
        toast.success('Recipe removed!');
      },
      onError: (error: AxiosError<ResponseError>) =>
        toast.error(error?.response?.data.message || error.message),
    });

  const { mutateAsync: addOwnRecipeMutate, isPending: isPendingAdd } =
    useMutation({
      mutationFn: addOwnRecipe,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['my-recipes'],
        });
        toast.success('Recipe added!');
      },
      onError: (error: AxiosError<ResponseError>) =>
        toast.error(error?.response?.data.message || error.message),
    });

  const isPending = isPendingDelete || isPendingAdd;

  return {
    deleteOwnRecipeMutate,
    addOwnRecipeMutate,
    isPending,
  };
};

export default useOwnRecipes;
