import IngredientsTable from '../components/IngredientsTable';
import PageContainer from '../components/PageContainer';

const ShoppingListPage = () => {
  // TODO - Fetch own ingredients from API
  const data = [
    { ingredientName: 'Salt', ingredientMeasure: '1 tsp' },
    { ingredientName: 'Pepper', ingredientMeasure: '1 tsp' },
  ];

  return (
    <PageContainer>
      <IngredientsTable ingredients={data} type="shopping-list" />
    </PageContainer>
  );
};

export default ShoppingListPage;
