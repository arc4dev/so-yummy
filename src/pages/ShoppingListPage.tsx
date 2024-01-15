import { useQuery } from '@tanstack/react-query';
import IngredientsTable from '../components/IngredientsTable';
import PageContainer from '../components/PageContainer';
import { getShoppingCart } from '../utils/recipesApi';
import Loader from '../components/Loader';

const ShoppingListPage = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['shopping-cart'],
    queryFn: getShoppingCart,
  });

  if (isLoading) return <Loader />;

  return (
    <PageContainer>
      <IngredientsTable ingredients={data?.data || []} type="shopping-list" />
    </PageContainer>
  );
};

export default ShoppingListPage;
