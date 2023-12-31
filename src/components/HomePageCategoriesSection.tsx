import { useQuery } from '@tanstack/react-query';

import { getRecipesHomeCategories } from '../utils/recipesApi';
import SectionHeading from './SectionHeading';
import Button from './Button';
import RecipePreviewCard from './RecipePreviewCard';
import styled from 'styled-components';
import useBreakpoints from '../hooks/useBreakpoints';
import Loader from './Loader';
import RecipesList from './RecipesList';

const HomePageCategoriesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }

  @media screen and (min-width: 1440px) {
    gap: 100px;
  }
`;

const CategoriesListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`;

const CategoriesSection = () => {
  // TODO - ERROR HANDLING
  const { isLoading, data } = useQuery({
    queryKey: ['recipes'],
    queryFn: getRecipesHomeCategories,
  });

  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  if (isLoading) return <Loader />;

  return (
    <HomePageCategoriesSection>
      <CategoriesList>
        {data?.map((categorizedRecipe) => (
          <CategoriesListItem key={categorizedRecipe.category}>
            <SectionHeading>{categorizedRecipe.category}</SectionHeading>
            <RecipesList>
              {categorizedRecipe.recipes
                .filter(
                  (_, i) =>
                    (isMobile && i < 1) ||
                    (isTablet && i < 2) ||
                    (isDesktop && i < 4)
                )
                .map((recipe) => (
                  <RecipePreviewCard
                    key={recipe._id}
                    title={recipe.strMeal}
                    img={recipe.strMealThumb}
                    mealId={recipe._id}
                  />
                ))}
            </RecipesList>

            <div style={{ marginLeft: 'auto' }}>
              <Button
                to={`/categories?c=${categorizedRecipe.category}`}
                size="small">
                See all
              </Button>
            </div>
          </CategoriesListItem>
        ))}
      </CategoriesList>

      <Button to="/categories" size="primary">
        Other Categories
      </Button>
    </HomePageCategoriesSection>
  );
};

export default CategoriesSection;
