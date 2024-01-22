import { useQuery } from '@tanstack/react-query';
import IngredientsTable from '../components/recipes/IngredientsTable';
import PageContainer from '../components/common/PageContainer';
import { getShoppingCart } from '../services/shoppingCartApi';
import Loader from '../components/common/Loader';
import SectionHeading from '../components/common/SectionHeading';
import Pagination from '../components/common/Pagination';
import { useSearchParams } from 'react-router-dom';

const ShoppingListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    p: '1',
  });
  const page = searchParams.get('p');

  const { isLoading, data } = useQuery({
    queryKey: ['shopping-cart', page],
    queryFn: () => getShoppingCart(Number(page)),
  });

  if (isLoading) return <Loader />;

  return (
    <PageContainer>
      <SectionHeading style={{ marginBottom: '3rem' }}>
        Shopping List
      </SectionHeading>
      <IngredientsTable ingredients={data?.data || []} type="shopping-list" />
      <Pagination
        currentPage={data?.page || 1}
        totalPages={data?.totalPages || 1}
        onPageChange={(page) => {
          searchParams.set('p', String(page));
          setSearchParams(searchParams);
        }}
      />
    </PageContainer>
  );
};

export default ShoppingListPage;
