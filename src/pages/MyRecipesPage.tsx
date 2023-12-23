import OwnRecipeList from '../components/OwnRecipeList';
import PageContainer from '../components/PageContainer';

const data = [
  {
    id: '1234',
    strMeal: 'Beef Asado',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg',
    strDescription:
      'Delicious beef asado recipe with a perfect blend of flavors. This Filipino dish is made with tender beef, soy sauce, calamansi juice, and spices. It is best served with steamed rice and a side of vegetables.',
    cookingTime: '90 min',
  },
  {
    id: '1235',
    strMeal: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg',
    strDescription:
      'These beef banh mi bowls are packed with flavor and textures. Tender beef slices are marinated in a savory sauce, served with sriracha mayo, pickled cucumber, and carrot. It is a delicious and satisfying meal that can be prepared in under 30 minutes.',
    cookingTime: '30 min',
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
