import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../utils/recipesApi';
import Loader from '../components/Loader';
import styled from 'styled-components';
import { FiClock } from 'react-icons/fi';
import IngredientItem from '../components/IngredientItem';

const StyledRecipePage = styled.div`
  padding-top: 380px;

  @media screen and (min-width: 1440px) {
    padding-top: 430px;
  }
`;

const RecipeHeroContainer = styled.section`
  height: 455px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 144px 36px 90px;
  text-align: center;
  background: url('/recipeDetails.png') center/cover no-repeat;

  @media screen and (min-width: 768px) {
    padding: 136px 131px 32px;
  }

  @media screen and (min-width: 1440px) {
    height: 505px;
    padding: 164px 392px 32px;
  }
`;

const RecipeTitle = styled.h1`
  font-weight: 600;
  font-size: 1.71rem;
  letter-spacing: -0.02em;
  color: var(--color-action);

  @media screen and (min-width: 768px) {
    font-size: 3.14rem;
  }
`;

const RecipeDescription = styled.p`
  font-size: 0.86rem;
  line-height: 1.33;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

const RecipeAddToFavoriteButton = styled.button`
  padding: 10px 18px;
  font-size: 0.71rem;
  background-color: transparent;
  border: 2px solid var(--color-action);
  border-radius: 24px 44px;
  transition: all 200ms ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 1.14rem;
    line-height: calc(24 / 16);
  }
`;

const RecipeTime = styled.span`
  --icon-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
  font-weight: 500;
  font-size: 0.71rem;
  line-height: 1.4;
  letter-spacing: -0.24px;

  & > svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }

  @media screen and (min-width: 768px) {
    --icon-size: 20px;
    column-gap: 8px;
    font-size: 1rem;
  }
`;

const IngredientsSection = styled.section``;

const IngredientTable = styled.div`
  background-color: var(--color-action);
  padding: 0.85rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.6rem;
  display: grid;
  grid-template-columns: 1fr auto auto;

  @media screen and (min-width: 768px) {
    padding: 1rem 3rem;
  }
  & > span {
    color: var(--color-white-2);
    font-size: 0.71rem;

    &:nth-child(2) {
      padding-right: 1.2rem;

      @media screen and (min-width: 768px) {
        padding-right: 2.7rem;
      }

      @media screen and (min-width: 1440px) {
        padding-right: 6.8rem;
      }
    }

    &:nth-child(2),
    &:nth-child(3) {
      justify-self: end;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.28rem;
    }
  }
`;

const IngredientsList = styled.ul`
  display: grid;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    gap: 1.8rem;
  }
`;

const RecipePage = () => {
  const { id } = useParams();

  const { data: recipe, isLoading } = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => getRecipeById(id!),
    enabled: !!id,
  });

  if (isLoading) return <Loader />;

  return (
    <StyledRecipePage>
      <RecipeHeroContainer>
        <RecipeTitle>{recipe?.strMeal}</RecipeTitle>
        <RecipeDescription>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </RecipeDescription>

        <RecipeAddToFavoriteButton>
          Add to favorite recipes
        </RecipeAddToFavoriteButton>

        <RecipeTime>
          <FiClock />
          <p>2 min</p>
        </RecipeTime>
      </RecipeHeroContainer>

      <IngredientsSection>
        <IngredientTable>
          <span>Ingredients</span>
          <span>Number</span>
          <span>Add to list</span>
        </IngredientTable>

        <IngredientsList>
          {recipe?.ingredients.map((item) => (
            <IngredientItem
              key={item.ingredientName}
              name={item.ingredientName}
              measure={item.ingredientMeasure}
            />
          ))}
        </IngredientsList>
      </IngredientsSection>
    </StyledRecipePage>
  );
};

export default RecipePage;
