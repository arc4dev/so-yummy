import { useQuery } from '@tanstack/react-query';

import { getRecipesByAllCategories } from '../utils/recipesApi';
import SectionHeading from './SectionHeading';
import Button from './Button';
import RecipePreviewCard from './RecipePreviewCard';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

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

const RecipesList = styled.ul`
  display: flex;
  gap: 32px;

  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
`;

const CategoriesSection = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['recipes'],
    queryFn: getRecipesByAllCategories,
  });

  const isTablet = useMediaQuery({ query: '(min-width: 767px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  const displayedCategories = [
    'Breakfast',
    'Miscellaneous',
    'Chicken',
    'Dessert',
  ];

  return (
    <HomePageCategoriesSection>
      <CategoriesList>
        {data
          ?.filter((item) => displayedCategories.includes(item.category))
          .map((categorizedRecipe) => (
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
                      key={recipe.idMeal}
                      title={recipe.strMeal}
                      img={recipe.strMealThumb}
                      mealId={recipe.idMeal}
                    />
                  ))}
              </RecipesList>

              <div style={{ marginLeft: 'auto' }}>
                <Button
                  to={`/categories/${categorizedRecipe.category}`}
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
