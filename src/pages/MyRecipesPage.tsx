import OwnRecipeList from '../components/OwnRecipeList';
import PageContainer from '../components/PageContainer';

const data = [
  {
    id: '1234',
    strMeal: 'Beef Asado',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg',
    cookingTime: '120 min',
    strDescription:
      'A delicious beef dish cooked with traditional spices and flavors.',
  },
  {
    id: '1235',
    strMeal: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg',
    cookingTime: '30 min',
    strDescription:
      'A flavorful bowl with beef, sriracha mayo, carrot, and pickled cucumber.',
  },
];

const MyRecipesPage = () => {
  return (
    <PageContainer>
      <OwnRecipeList recipes={data} />
    </PageContainer>
  );
};

export default MyRecipesPage;
