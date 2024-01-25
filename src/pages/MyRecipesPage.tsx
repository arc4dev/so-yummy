import { useQuery } from '@tanstack/react-query';

import OwnRecipeList from '../components/recipes/OwnRecipeList';
import PageContainer from '../components/common/PageContainer';
import Loader from '../components/common/Loader';
import { getOwnRecipes } from '../services/recipesApi';
import SectionHeading from '../components/common/SectionHeading';
import Pagination from '../components/common/Pagination';
import { useSearchParams } from 'react-router-dom';

const MyRecipesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    p: '1',
  });
  const page = searchParams.get('p');

  const { data, isLoading } = useQuery({
    queryKey: ['my-recipes', page],
    queryFn: () => getOwnRecipes(Number(page)),
  });

  if (data?.results === 0) {
    searchParams.set('p', String(Number(page) - 1 || 1));
    setSearchParams(searchParams);
  }

  if (isLoading) return <Loader />;

  return (
    <PageContainer>
      <SectionHeading>My recipes</SectionHeading>
      <OwnRecipeList recipes={data?.data || []} page="own" />
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

export default MyRecipesPage;
