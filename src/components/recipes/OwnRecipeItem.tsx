import { LuTrash2 } from 'react-icons/lu';
import styled from 'styled-components';
import Button from '../common/Button';

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
  border-radius: 0.5rem;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 228px;
  }

  @media screen and (min-width: 1440px) {
    width: 318px;
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
  grid-template-rows: auto 1fr auto;
  width: 100%;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 2rem;
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

const TrashButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;

  ${({ variant }) =>
    variant === 'primary'
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
};

const OwnRecipeItem = ({ recipe, variant = 'primary' }: Props) => {
  const { _id, strMeal, strDescription, strMealThumb, cookingTime } = recipe;

  return (
    <StyledOwnRecipeItem>
      <RecipeImage src={strMealThumb} alt={`Image of ${strMeal}`} />
      <DetailsContainer>
        <TitleContainer>
          <RecipeTitle>{strMeal}</RecipeTitle>
          <TrashButton
            variant={variant === 'primary' ? 'primary' : 'secondary'}>
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
            to={`/recipes/${_id}?p=true`}>
            See recipe
          </Button>
        </ActionContainer>
      </DetailsContainer>
    </StyledOwnRecipeItem>
  );
};

export default OwnRecipeItem;
