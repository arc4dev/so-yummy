import SectionHeading from '../components/common/SectionHeading';
import PageContainer from '../components/common/PageContainer';
import OwnRecipeList from '../components/recipes/OwnRecipeList';

const data = {
  status: 'success',
  results: 2,
  page: 1,
  totalPages: 1,
  data: [
    {
      _id: '659817188ccf7b24a86dd15d',
      strMeal: 'Beef Banh Mi Bowls with Sriracha Mayo',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg',
      strDescription:
        'These Beef Banh Mi Bowls are a delicious and flavorful dish that combines tender beef, pickled cucumber, and grated carrots over a bed of fluffy rice. The addition of a zesty sriracha mayo adds a spicy kick to the dish. Perfect for a quick and easy weeknight meal!',
      cookingTime: 30,
    },
    {
      _id: '659817308ccf7b24a86dd521',
      strMeal: 'Bread omelette',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg',
      strDescription:
        'Bread omelette is a popular and delicious breakfast dish made with bread and eggs. It is a perfect combination of carbohydrates and protein, making it a filling and nutritious meal to start the day.',
      cookingTime: 10,
    },
  ],
};

const FavouritesPage = () => {
  return (
    <PageContainer>
      <SectionHeading>Favourites</SectionHeading>
      <OwnRecipeList recipes={data?.data || []} variant="secondary" />
    </PageContainer>
  );
};

export default FavouritesPage;
