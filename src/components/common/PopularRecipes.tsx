import styled from 'styled-components';
import SectionHeading from './SectionHeading';

const StyledPopularRecipes = styled.div`
  display: grid;
  gap: 1.8rem;
`;

const PopularRecipesList = styled.ul`
  display: grid;
  gap: 1.71rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr;
  }
`;

const PopularRecipeItem = styled.li`
  display: flex;
  gap: 0.85rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-line);
`;

const PopularRecipeImage = styled.img`
  width: 102px;
  height: 85px;
`;

const PopularRecipeInfo = styled.div``;

const PopularRecipeHeader = styled.h3`
  font-size: 1.14rem;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.24px;
`;

const PopularRecipeDescription = styled.p`
  font-size: 0.86rem;
  font-weight: 300;
  line-height: 1.33;
  letter-spacing: -0.24px;
`;

const PopularRecipes = () => {
  const data = [
    {
      _id: '6598174a8ccf7b24a86dd909',
      strMeal: 'Banana Pancakes',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg',
      strDescription:
        'These Banana Pancakes are a delicious and easy dessert option. Made with mashed bananas, eggs, and flavors of vanilla, they are light and fluffy with a hint of sweetness. Topped with pecans and fresh raspberries, they are both a treat for the taste buds and the eyes. The prep time for this recipe is only 10 minutes, and the cooking time is about 5 minutes, making it a quick and satisfying dish to whip up after a meal. These pancakes are perfect for any occasion and are sure to be a hit with family and friends!',
    },
    {
      _id: '6598176c8ccf7b24a86dde32',
      strMeal: 'Pizza Express Margherita',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg',
      strDescription:
        'A delicious and simple Margherita pizza from Pizza Express, made with a homemade dough and topped with passata, mozzarella, oregano, and fresh basil. Perfect for a quick and easy meal.',
    },
    {
      _id: '6598176c8ccf7b24a86dde31',
      strMeal: 'Pizza Express Margherita',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg',
      strDescription:
        'A delicious and simple Margherita pizza from Pizza Express, made with a homemade dough and topped with passata, mozzarella, oregano, and fresh basil. Perfect for a quick and easy meal.',
    },
  ];

  return (
    <StyledPopularRecipes>
      <SectionHeading type="secondary">Popular recipe</SectionHeading>

      <PopularRecipesList>
        {data.map((recipe) => (
          <PopularRecipeItem key={recipe._id}>
            <PopularRecipeImage src={recipe.strMealThumb} alt="" />

            <PopularRecipeInfo>
              <PopularRecipeHeader>{recipe.strMeal}</PopularRecipeHeader>
              <PopularRecipeDescription>
                {recipe.strDescription.split(' ').slice(0, 16).join(' ')}...
              </PopularRecipeDescription>
            </PopularRecipeInfo>
          </PopularRecipeItem>
        ))}
      </PopularRecipesList>
    </StyledPopularRecipes>
  );
};

export default PopularRecipes;
