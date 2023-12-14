import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';
import styled from 'styled-components';

import { getRecipeById } from '../utils/recipesApi';

import Loader from '../components/Loader';
import IngredientItem from '../components/IngredientItem';
import PageContainer from '../components/PageContainer';

const StyledRecipePage = styled.div`
  padding-top: 380px;

  @media screen and (min-width: 1440px) {
    padding-top: 430px;
  }
`;

const RecipeHeroSection = styled.section`
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

const IngredientsSection = styled.section`
  margin-bottom: 100px;
`;

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

const RecipePreparationSection = styled.section`
  display: grid;
  gap: 50px;

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr auto;
  }
`;

const RecipePreparationTitle = styled.h2`
  color: var(--color-gray-3);
  font-size: 1.71rem;
  font-weight: 600;
  letter-spacing: -0.24px;
  grid-column: span 2;
  margin-bottom: 2.2rem;
`;

const RecipePreparationList = styled.ol`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  list-style: none;
  counter-reset: list-counter;
  padding-left: 38px;

  @media screen and (min-width: 1440px) {
  }
`;

const RecipePreparationItem = styled.li`
  position: relative;
  counter-increment: list-counter;
  color: var(--color-black-08);
  font-size: 0.85rem;
  line-height: 1.16;
  letter-spacing: -0.28px;

  &::before {
    --size: 28px;

    position: absolute;
    top: -5px;
    left: calc(-1 * var(--size) - 10px);
    display: flex;
    justify-content: center;
    align-items: center;
    content: counter(list-counter);
    background-color: var(--color-action);
    width: var(--size);
    height: var(--size);
    padding: 4px;
    border-radius: 50%;
    color: var(--color-white);
    font-weight: 500;
    line-height: 1.4;
  }

  @media screen and (min-width: 768px) {
    line-height: 1.28;
    font-size: 1rem;
  }
`;

const RecipeImage = styled.img`
  width: 343px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 433px;
  }
`;

const RecipePage = () => {
  const { id } = useParams();

  const { data: recipe, isLoading } = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => getRecipeById(id!),
    enabled: !!id,
  });

  console.log(recipe?.strInstructions);

  if (isLoading) return <Loader />;

  return (
    <PageContainer>
      <StyledRecipePage>
        <RecipeHeroSection>
          <RecipeTitle>{recipe?.strMeal}</RecipeTitle>
          <RecipeDescription>
            Is a healthy salad recipe that’s big on nutrients and flavor. A
            moist, pan seared salmon is layered on top of spinach, avocado,
            tomatoes, and red onions. Then drizzled with a homemade lemon
            vinaigrette.
          </RecipeDescription>

          <RecipeAddToFavoriteButton>
            Add to favorite recipes
          </RecipeAddToFavoriteButton>

          <RecipeTime>
            <FiClock />
            <p>2 min</p>
          </RecipeTime>
        </RecipeHeroSection>

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

        <RecipePreparationSection>
          <div>
            <RecipePreparationTitle>Recipe Preparation</RecipePreparationTitle>
            <RecipePreparationList>
              {recipe?.strInstructions
                .split(/\d+\./g)
                .filter(Boolean)
                .map((item) => item.trim())
                .map((step) => (
                  <RecipePreparationItem key={step}>
                    {step}.
                  </RecipePreparationItem>
                ))}
            </RecipePreparationList>
          </div>

          <RecipeImage src={recipe?.strMealThumb} alt={recipe?.strMeal} />
        </RecipePreparationSection>
      </StyledRecipePage>
    </PageContainer>
  );
};

export default RecipePage;
