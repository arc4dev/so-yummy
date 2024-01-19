import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

import {
  getAllRecipesCategories,
  getRecipesByCategory,
} from '../services/recipesApi';

import SectionHeading from '../components/common/SectionHeading';
import RecipePreviewCard from '../components/recipes/RecipePreviewCard';
import Loader from '../components/common/Loader';
import RecipesList from '../components/recipes/RecipesList';
import PageContainer from '../components/common/PageContainer';

const StyledCategoriesPage = styled.div`
  display: grid;
`;

const CategoriesList = styled.ul`
  display: flex;
  scrollbar-width: none;
  overflow-x: auto;
  margin-bottom: 32px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Category = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  color: var(--color-gray-2);
  padding: 0 14px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--color-gray-2);
  transition: all 200ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 1.28rem;
  }

  &:hover {
    color: var(--color-action);
    border-bottom: 2px solid var(--color-action);
  }

  ${(props) =>
    props.$isActive &&
    css`
      color: var(--color-action);
      border-bottom: 2px solid var(--color-action);
    `}
`;

const CategoriesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('c');

  // Get all categories
  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllRecipesCategories,
  });

  // Get recipes by a category from the URL
  const { data: recipes, isLoading: isLoadingRecipes } = useQuery({
    queryKey: ['recipes', categoryParam], // Include categoryParam in the queryKey
    queryFn: () => getRecipesByCategory(categoryParam || 'Beef'),
    enabled: !!categoryParam, // Enable query only if categoryParam is present
  });

  useEffect(() => {
    // Set default query parameters if they don't exist in the URL
    if (!searchParams.get('c')) {
      setSearchParams({ c: 'Beef' });
    }
  }, [searchParams, setSearchParams]);

  if (isLoadingCategories) return <Loader />;

  return (
    <PageContainer>
      <StyledCategoriesPage>
        <SectionHeading style={{ marginBottom: '52px' }}>
          Categories
        </SectionHeading>

        <CategoriesList>
          {categories?.map((category) => (
            <Category
              key={category}
              $isActive={categoryParam === category}
              onClick={() => setSearchParams({ c: category })}>
              {category}
            </Category>
          ))}
        </CategoriesList>

        <RecipesList>
          {isLoadingRecipes ? (
            <Loader />
          ) : (
            recipes?.map((recipe) => (
              <RecipePreviewCard
                key={recipe._id}
                title={recipe.strMeal}
                img={recipe.strMealThumb}
                mealId={recipe._id}
              />
            ))
          )}
        </RecipesList>
      </StyledCategoriesPage>
    </PageContainer>
  );
};

export default CategoriesPage;
