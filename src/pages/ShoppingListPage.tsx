import IngredientsTable from '../components/IngredientsTable';
import PageContainer from '../components/PageContainer';

const ShoppingListPage = () => {
  // TODO - Fetch own ingredients from API
  const data = [
    { ingredient: { _id: '1', name: 'Salt' }, ingredientMeasure: '1 tsp' },
    {
      ingredient: {
        _id: '2',
        name: 'Pepper',
      },
      ingredientMeasure: '1 tsp',
    },
  ] as IngredientItem[];

  return (
    <PageContainer>
      <IngredientsTable ingredients={data} type="shopping-list" />
    </PageContainer>
  );
};

export default ShoppingListPage;
