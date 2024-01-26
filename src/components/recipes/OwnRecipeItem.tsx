import { LuTrash2 } from 'react-icons/lu';
import styled from 'styled-components';
import Button from '../common/Button';
import useOwnRecipes from '../../hooks/useOwnRecipes';
import useFavouriteRecipes from '../../hooks/useFavouriteRecipes';

const StyledOwnRecipeItem = styled.li`
  width: 100%;
  min-width: 305px;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-white);

  @media screen and (min-width: 768px) {
    gap: 1.71rem;
    padding: 2.2rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 2.28rem;
    padding: 2.8rem;
  }
`;

const RecipeImage = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 0.5rem;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 228px;
    height: 228px;
  }

  @media screen and (min-width: 1440px) {
    width: 318px;
    height: 318px;
  }
`;

const RecipeTitle = styled.h3`
  color: var(--color-gray-3);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 1.71rem;
  }
`;

const RecipeDescription = styled.p`
  color: var(--color-primary);
  font-size: 0.6rem;
  line-height: 1.2;
  letter-spacing: -0.16px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.28rem;
  }
`;

const CookingTime = styled.span`
  color: var(--color-gray-3);
  font-size: 0.71rem;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr minmax(auto, 50px) 1fr;
  width: 100%;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    gap: 1rem;
    grid-template-rows: 1fr minmax(auto, 100px) 1fr;
  }

  @media screen and (min-width: 1440px) {
    grid-template-rows: 1fr minmax(auto, 160px) 1fr;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TrashButton = styled.button<{ $variant: 'primary' | 'secondary' }>`
  align-self: flex-start;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 0.8rem;
  transition: all 150ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 1.28rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.5rem;
  }

  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
  }

  ${({ $variant }) =>
    $variant === 'primary'
      ? `
    background-color: var(--color-action);
    color: var(--color-white);
  `
      : `
      background-color: var(--color-action-light);
      color: var(--color-primary);
  `}
`;

type Props = {
  recipe: OwnRecipePreview;
  variant?: OwnRecipeListVariant;
  page: 'favourites' | 'own';
};

const OwnRecipeItem = ({ recipe, variant = 'primary', page }: Props) => {
  const { _id, strMeal, strDescription, strMealThumb, cookingTime } = recipe;
  const { deleteOwnRecipeMutate, isPending: isPendingOwn } = useOwnRecipes();
  const { deleteFavouriteRecipeMutate, isPending: isPendingFavourite } =
    useFavouriteRecipes();

  const handleRemoveFavouriteRecipe = async () => {
    await deleteFavouriteRecipeMutate(_id);
  };

  const handleRemoveOwnRecipe = async () => {
    await deleteOwnRecipeMutate(_id);
  };

  const isPending = isPendingOwn || isPendingFavourite;

  return (
    <StyledOwnRecipeItem>
      <RecipeImage src={strMealThumb} alt={`Image of ${strMeal}`} />
      <DetailsContainer>
        <TitleContainer>
          <RecipeTitle>{strMeal}</RecipeTitle>
          <TrashButton
            onClick={
              page === 'favourites'
                ? handleRemoveFavouriteRecipe
                : handleRemoveOwnRecipe
            }
            disabled={isPending}
            $variant={variant === 'primary' ? 'primary' : 'secondary'}>
            <LuTrash2 />
          </TrashButton>
        </TitleContainer>

        <RecipeDescription>{strDescription}</RecipeDescription>

        <ActionContainer>
          <CookingTime>{cookingTime} min</CookingTime>
          <Button
            size="small"
            variant="skew"
            btnColor={variant === 'primary' ? 'primary' : 'black'}
            to={`/recipes/${_id}${variant === 'primary' ? '?p=true' : ''}`}>
            See recipe
          </Button>
        </ActionContainer>
      </DetailsContainer>
    </StyledOwnRecipeItem>
  );
};

export default OwnRecipeItem;
