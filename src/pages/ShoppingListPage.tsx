import { useQuery } from '@tanstack/react-query';
import IngredientsTable from '../components/recipes/IngredientsTable';
import PageContainer from '../components/common/PageContainer';
import { getShoppingCart } from '../utils/recipesApi';
import Loader from '../components/common/Loader';

const ShoppingListPage = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['shopping-cart'],
    queryFn: getShoppingCart,
    staleTime: 1000,
  });

  if (isLoading) return <Loader />;

  return (
    <PageContainer>
      <IngredientsTable ingredients={data?.data || []} type="shopping-list" />
    </PageContainer>
  );
};

export default ShoppingListPage;
